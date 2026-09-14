import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const ROOT = new URL('../dist/', import.meta.url);
const rootPath = ROOT.pathname;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

async function exists(path) {
  try { await stat(path); return true; } catch { return false; }
}

function localTarget(href) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return null;
  if (/^https?:\/\//i.test(href) || href.startsWith('//')) return null;
  const clean = href.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return null;
  return clean;
}

async function targetExists(href) {
  const clean = href === '/' ? '/index.html' : href;
  const direct = join(rootPath, clean.replace(/^\//, ''));
  if (extname(direct)) return exists(direct);
  return (await exists(direct)) || (await exists(join(direct, 'index.html'))) || (await exists(`${direct}.html`));
}

const required = ['index.html', '404.html', 'about/index.html', 'rss.xml', 'sitemap.xml'];
for (const file of required) {
  if (!(await exists(join(rootPath, file)))) throw new Error(`Missing required build artifact: ${file}`);
}

const files = await walk(rootPath);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const categoryPages = htmlFiles.filter((file) => relative(rootPath, file).startsWith('category/'));
const articlePages = htmlFiles.filter((file) => /^\d{4}\/\d{2}\/\d{2}\/.+\/index\.html$/.test(relative(rootPath, file)));

if (categoryPages.length === 0) throw new Error('No category pages were generated.');
if (articlePages.length === 0) throw new Error('No dated article pages were generated.');

const broken = [];
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (/\b(?:href|src)=["'](?:undefined|null)["']/i.test(html)) broken.push(`${relative(rootPath, file)} contains an undefined/null asset or link`);
  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)].map((match) => localTarget(match[1])).filter(Boolean);
  for (const href of new Set(hrefs)) {
    if (!(await targetExists(href))) broken.push(`${relative(rootPath, file)} -> ${href}`);
  }
}

if (broken.length) {
  throw new Error(`Broken internal output detected:\n${broken.slice(0, 30).join('\n')}${broken.length > 30 ? `\n...and ${broken.length - 30} more` : ''}`);
}

console.log(`QA passed: ${htmlFiles.length} HTML pages, ${categoryPages.length} category pages, ${articlePages.length} article pages, required SEO/feed artifacts present, internal links resolved.`);
