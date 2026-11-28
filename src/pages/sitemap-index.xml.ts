import type { APIRoute } from 'astro';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

import { fetchPosts } from '~/utils/blog';
import { fetchCaseStudies } from '~/utils/case-studies';
import { fetchNews } from '~/utils/news';
import { fetchEvents } from '~/utils/events';
import { trimSlash, CATEGORY_BASE } from '~/utils/permalinks';

export const prerender = true;

const pages = import.meta.glob('/src/pages/**/*.astro');

/*
 * <lastmod> rules — Google only uses lastmod when it is consistently accurate,
 * so every date here must be the real "last changed" date, never "today":
 *   - Blog posts, case studies, news, events: updateDate if set, otherwise publishDate.
 *   - Blog category pages: the newest date among the posts in that category.
 *   - All other pages (home, products, ...): the date of the last Git commit that changed the page file.
 *   - If no real date can be found, <lastmod> is left out (allowed by the sitemap standard).
 * To refresh a post's date after editing it, set `updateDate:` in its front matter.
 */

// Commits that only exist as the cut-off point of a shallow clone (e.g. on a CI/Vercel build).
// A file whose "last commit" is one of these was really changed earlier, so its date is unknown.
const shallowBoundary = (() => {
  try {
    const gitDir = execFileSync('git', ['rev-parse', '--git-dir'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    const file = `${gitDir}/shallow`;
    return new Set(existsSync(file) ? readFileSync(file, 'utf8').split('\n').filter(Boolean) : []);
  } catch {
    return new Set<string>();
  }
})();

/** Last Git commit date of a file (ISO string), or undefined if unknown. */
const gitLastModified = (filePath: string): string | undefined => {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%H %cI', '--', filePath], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    if (!out) return undefined;
    const [hash, date] = out.split(' ');
    if (shallowBoundary.has(hash)) return undefined;
    const d = new Date(date);
    return isNaN(d.valueOf()) ? undefined : d.toISOString();
  } catch {
    return undefined;
  }
};

/** updateDate if set, otherwise publishDate (ISO string), or undefined. */
const contentDate = (item: { updateDate?: Date; publishDate?: Date }): string | undefined => {
  const d = item.updateDate ?? item.publishDate;
  return d && !isNaN(d.valueOf()) ? d.toISOString() : undefined;
};

export const GET: APIRoute = async () => {
  const base = 'https://www.upbuff.com';

  // url -> lastmod (undefined = leave <lastmod> out)
  const entries = new Map<string, string | undefined>();
  const add = (url: string, lastmod: string | undefined) => {
    if (!entries.has(url)) entries.set(url, lastmod);
  };

  // 1. Static .astro pages (skip dynamic routes, APIs, admin pages, and 404).
  for (const filePath of Object.keys(pages)) {
    const trimmed = filePath.replace('/src/pages', '').replace(/\.astro$/, '');
    const url = trimmed === '/index' ? '/' : trimmed.replace(/\/index$/, '');
    if (url === '/404' || url.includes('[') || url.includes('/api') || url.includes('/_') || url === '/admin' || url.startsWith('/admin/')) continue;
    add(url, gitLastModified(filePath.replace(/^\//, '')));
  }

  // 2. Dynamic content-collection routes.
  const [posts, caseStudies, news, events] = await Promise.all([
    fetchPosts(),
    fetchCaseStudies(),
    fetchNews(),
    fetchEvents(),
  ]);

  // Blog post detail pages (robots index: true).
  for (const post of posts) add(`/${trimSlash(post.permalink)}`, contentDate(post));

  // Case study detail pages.
  for (const cs of caseStudies) add(`/${trimSlash(cs.permalink)}`, contentDate(cs));

  // Newsroom detail pages.
  for (const item of news) add(`/${trimSlash(item.permalink)}`, contentDate(item));

  // Event detail pages.
  for (const item of events) add(`/${trimSlash(item.permalink)}`, contentDate(item));

  // Blog category archive pages (robots index: true). Tag pages are noindex, so excluded.
  // Date = newest post date in the category (that is when the archive page last changed).
  const categoryDates = new Map<string, string | undefined>();
  for (const post of posts) {
    const slug = post.category?.slug;
    if (!slug) continue;
    const d = contentDate(post);
    const prev = categoryDates.get(slug);
    categoryDates.set(slug, !prev || (d && d > prev) ? d ?? prev : prev);
  }
  for (const [slug, d] of categoryDates) add(`/${trimSlash(`${CATEGORY_BASE}/${slug}`)}`, d);

  // 3. Build the XML (insertion order kept stable).
  const urls = [...entries]
    .map(([url, lastmod]) => {
      const loc = url === '/' ? `${base}/` : `${base}${url}`;
      return lastmod
        ? `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
        : `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
};
