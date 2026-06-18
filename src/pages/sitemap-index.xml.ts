import type { APIRoute } from 'astro';

import { fetchPosts } from '~/utils/blog';
import { fetchCaseStudies } from '~/utils/case-studies';
import { trimSlash, CATEGORY_BASE } from '~/utils/permalinks';

export const prerender = true;

const pages = import.meta.glob('/src/pages/**/*.astro');

export const GET: APIRoute = async () => {
  const base = 'https://www.upbuff.com';
  const lastmod = new Date().toISOString();

  // 1. Static .astro pages (skip dynamic [..] routes, /api, and 404).
  const staticUrls = Object.keys(pages)
    .map((path) => {
      const trimmed = path.replace('/src/pages', '').replace(/\.astro$/, '');
      if (trimmed === '/index') return '/';
      return trimmed.replace(/\/index$/, '');
    })
    .filter((url) => url !== '/404' && !url.includes('[') && !url.includes('/api'));

  // 2. Dynamic content-collection routes (the part the old generator missed).
  const [posts, caseStudies] = await Promise.all([fetchPosts(), fetchCaseStudies()]);

  // Blog post detail pages (robots index: true).
  const postUrls = posts.map((post) => `/${trimSlash(post.permalink)}`);

  // Case study detail pages.
  const caseStudyUrls = caseStudies.map((cs) => `/${trimSlash(cs.permalink)}`);

  // Blog category archive pages (robots index: true). Tag pages are noindex, so excluded.
  const categorySlugs = new Set<string>();
  for (const post of posts) {
    if (post.category?.slug) categorySlugs.add(post.category.slug);
  }
  const categoryUrls = [...categorySlugs].map((slug) => `/${trimSlash(`${CATEGORY_BASE}/${slug}`)}`);

  // 3. Combine + de-duplicate, preserving a stable order.
  const allUrls = Array.from(new Set([...staticUrls, ...postUrls, ...caseStudyUrls, ...categoryUrls]));

  const urls = allUrls
    .map((url) => {
      const loc = url === '/' ? `${base}/` : `${base}${url}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
};
