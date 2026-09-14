const SITE_ID = 217076149;
const API_ROOT = `https://public-api.wordpress.com/wp/v2/sites/${SITE_ID}`;

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

async function fetchJSON<T>(url: string, retries = 3): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'BitcoinVersus.tech Astro rebuild' }
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return (await response.json()) as T;
    } catch (error) {
      lastError = error;
      if (attempt < retries) await new Promise((resolve) => setTimeout(resolve, attempt * 500));
    }
  }
  throw new Error(`WordPress API request failed for ${url}: ${String(lastError)}`);
}

let postsPromise: Promise<WPPost[]> | undefined;
let categoriesPromise: Promise<WPCategory[]> | undefined;

export function getAllPosts(): Promise<WPPost[]> {
  if (!postsPromise) {
    postsPromise = (async () => {
      const firstUrl = `${API_ROOT}/posts?status=publish&per_page=100&page=1&_embed=1`;
      const firstResponse = await fetch(firstUrl, { headers: { 'User-Agent': 'BitcoinVersus.tech Astro rebuild' } });
      if (!firstResponse.ok) throw new Error(`WordPress posts request failed: ${firstResponse.status} ${firstResponse.statusText}`);
      const firstPage = (await firstResponse.json()) as WPPost[];
      const totalPages = Math.max(1, Number(firstResponse.headers.get('X-WP-TotalPages') ?? '1'));
      const remaining = await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, index) =>
          fetchJSON<WPPost[]>(`${API_ROOT}/posts?status=publish&per_page=100&page=${index + 2}&_embed=1`)
        )
      );
      return [...firstPage, ...remaining.flat()].sort(
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
  return htmlToText(post.excerpt.rendered).replace(/\s*\[…]\s*$/u, '').slice(0, 320);
}
