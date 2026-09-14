import type { APIRoute } from 'astro';
import { getAllPosts, getCategories, legacyPath } from '../lib/wordpress';

const BASE = 'https://bitcoinversus.tech';
const xml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const [posts, categories] = await Promise.all([getAllPosts(), getCategories()]);
  const urls = [
    { loc: '/', lastmod: posts[0]?.modified },
    { loc: '/about', lastmod: posts[0]?.modified },
    ...categories.map((category) => ({ loc: `/category/${category.slug}`, lastmod: posts[0]?.modified })),
    ...posts.map((post) => ({ loc: legacyPath(post), lastmod: post.modified }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(({ loc, lastmod }) => `  <url><loc>${xml(new URL(loc, BASE).toString())}</loc>${lastmod ? `<lastmod>${xml(lastmod)}</lastmod>` : ''}</url>`)
    .join('\n')}\n</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
