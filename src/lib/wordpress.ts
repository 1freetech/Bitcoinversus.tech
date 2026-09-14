const SITE_ID = 217076149;
const API_ROOT = `https://public-api.wordpress.com/wp/v2/sites/${SITE_ID}`;
const USER_AGENT = 'BitcoinVersus.tech Astro rebuild';
const PAGE_SIZE = 100;
const DEFAULT_MAX_POST_PAGES = 3;
const MAX_RETRIES = 4;

export type WPTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
};

export type WPPost = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  categories: number[];
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string; alt_text?: string }>;
    'wp:term'?: WPTerm[][];
  };
};

export type WPCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
};

async function fetchWithRetry(url: string, retries = MAX_RETRIES): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
      if (response.ok) return response;

      const retryAfter = Number(response.headers.get('retry-after') ?? '0');
      lastError = new Error(`${response.status} ${response.statusText}`);

      if (attempt < retries && (response.status === 429 || response.status >= 500)) {
        const delayMs = retryAfter > 0 ? retryAfter * 1000 : attempt * 750;
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        continue;
      }

      throw lastError;
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 750));
        continue;
      }
    }
  }

  throw new Error(`WordPress API request failed for ${url}: ${String(lastError)}`);
}

async function fetchJSON<T>(url: string): Promise<T> {
  const response = await fetchWithRetry(url);
  return (await response.json()) as T;
}

let postsPromise: Promise<WPPost[]> | undefined;
let categoriesPromise: Promise<WPCategory[]> | undefined;

export function getAllPosts(): Promise<WPPost[]> {
  if (!postsPromise) {
    postsPromise = (async () => {
      // Launch build intentionally snapshots a bounded slice of the public WordPress archive.
      // Three 100-post pages provide substantial real content while keeping CI/Netlify builds
      // deterministic and fast. WP_MAX_PAGES can be raised later without changing routes.
      const configuredMaxPages = Number(import.meta.env.WP_MAX_PAGES ?? DEFAULT_MAX_POST_PAGES);
      const maxPages = Number.isFinite(configuredMaxPages)
        ? Math.max(1, Math.floor(configuredMaxPages))
        : DEFAULT_MAX_POST_PAGES;

      const pages: WPPost[][] = [];
      for (let page = 1; page <= maxPages; page++) {
        const response = await fetchWithRetry(
          `${API_ROOT}/posts?status=publish&per_page=${PAGE_SIZE}&page=${page}&_embed=1`
        );
        const items = (await response.json()) as WPPost[];
        pages.push(items);
        if (items.length < PAGE_SIZE) break;
      }

      return pages.flat().sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    })();
  }
  return postsPromise;
}

export function getCategories(): Promise<WPCategory[]> {
  if (!categoriesPromise) {
    categoriesPromise = fetchJSON<WPCategory[]>(`${API_ROOT}/categories?per_page=100&hide_empty=true`).then((items) =>
      items.sort((a, b) => b.count - a.count)
    );
  }
  return categoriesPromise;
}

export function getPostTerms(post: WPPost): WPTerm[] {
  return (post._embedded?.['wp:term'] ?? []).flat().filter((term) => term.taxonomy === 'category');
}

export function getPrimaryCategory(post: WPPost): WPTerm | undefined {
  const terms = getPostTerms(post);
  return terms.find((term) => term.slug !== 'trending-news') ?? terms[0];
}

export function getFeaturedImage(post: WPPost): { src: string; alt: string } | undefined {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  if (!media?.source_url) return undefined;
  return { src: media.source_url, alt: media.alt_text || htmlToText(post.title.rendered) };
}

export function legacyPath(post: WPPost): string {
  const [year, month, day] = post.date.slice(0, 10).split('-');
  return `/${year}/${month}/${day}/${post.slug}`;
}

export function htmlToText(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&#8217;|&rsquo;/gi, '’')
    .replace(/&#8220;|&ldquo;/gi, '“')
    .replace(/&#8221;|&rdquo;/gi, '”')
    .replace(/&#8211;|&ndash;/gi, '–')
    .replace(/&#8212;|&mdash;/gi, '—')
    .replace(/&#038;/gi, '&')
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&hellip;/gi, '…')
    .replace(/\s+/g, ' ')
    .trim();
}

export function excerptText(post: WPPost): string {
  return htmlToText(post.excerpt.rendered).replace(/\s*\[…\]\s*$/u, '').slice(0, 320);
}
