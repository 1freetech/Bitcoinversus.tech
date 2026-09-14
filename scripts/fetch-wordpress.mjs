import { mkdir, writeFile } from 'node:fs/promises';

const SITE_ID = 217076149;
const API_ROOT = `https://public-api.wordpress.com/wp/v2/sites/${SITE_ID}`;
const USER_AGENT = 'BitcoinVersus.tech Astro rebuild';
const PAGE_SIZE = 100;
const MAX_RETRIES = 4;

async function fetchWithRetry(url) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
      if (response.ok) return response;
      const retryAfter = Number(response.headers.get('retry-after') ?? '0');
      lastError = new Error(`${response.status} ${response.statusText}`);
      if (attempt < MAX_RETRIES && (response.status === 429 || response.status >= 500)) {
        await new Promise((resolve) => setTimeout(resolve, retryAfter > 0 ? retryAfter * 1000 : attempt * 750));
        continue;
      }
      throw lastError;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_RETRIES) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 750));
        continue;
      }
    }
  }
  throw new Error(`WordPress snapshot request failed for ${url}: ${String(lastError)}`);
}

const configuredMaxPages = Number(process.env.WP_MAX_PAGES ?? '1');
const maxPages = Number.isFinite(configuredMaxPages) ? Math.max(1, Math.floor(configuredMaxPages)) : 1;
const posts = [];

for (let page = 1; page <= maxPages; page++) {
  const response = await fetchWithRetry(`${API_ROOT}/posts?status=publish&per_page=${PAGE_SIZE}&page=${page}&_embed=1`);
  const items = await response.json();
  posts.push(...items);
  if (items.length < PAGE_SIZE) break;
}

const categoriesResponse = await fetchWithRetry(`${API_ROOT}/categories?per_page=100&hide_empty=true`);
const categories = await categoriesResponse.json();

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
categories.sort((a, b) => b.count - a.count);

await mkdir(new URL('../src/data/', import.meta.url), { recursive: true });
await writeFile(
  new URL('../src/data/wp-snapshot.json', import.meta.url),
  JSON.stringify({ generatedAt: new Date().toISOString(), posts, categories }),
  'utf8'
);

console.log(`WordPress snapshot: ${posts.length} posts, ${categories.length} categories`);
