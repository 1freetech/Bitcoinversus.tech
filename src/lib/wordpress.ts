import snapshot from '../data/wp-snapshot.json';

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

type WPSnapshot = {
  generatedAt: string;
  posts: WPPost[];
  categories: WPCategory[];
};

const data = snapshot as WPSnapshot;
const posts = data.posts;
const categories = data.categories;

export function getAllPosts(): Promise<WPPost[]> {
  return Promise.resolve(posts);
}

export function getCategories(): Promise<WPCategory[]> {
  return Promise.resolve(categories);
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
