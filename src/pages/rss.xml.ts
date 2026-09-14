import type { APIRoute } from 'astro';
import { excerptText, getAllPosts, htmlToText, legacyPath } from '../lib/wordpress';

const BASE = 'https://bitcoinversus.tech';
const xml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const posts = (await getAllPosts()).slice(0, 50);
  const items = posts.map((post) => {
    const url = new URL(legacyPath(post), BASE).toString();
    return `<item><title>${xml(htmlToText(post.title.rendered))}</title><link>${xml(url)}</link><guid>${xml(url)}</guid><pubDate>${new Date(post.date).toUTCString()}</pubDate><description>${xml(excerptText(post))}</description></item>`;
  }).join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>BitcoinVersus.tech</title><link>${BASE}</link><description>Smart news, technical documentation, and research for Bitcoiners and infrastructure operators.</description>${items}</channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
