import type { APIRoute } from 'astro';

export const prerender = true;

const pages = import.meta.glob('/src/pages/**/*.astro');

export const GET: APIRoute = () => {
  const base = 'https://www.upbuff.com';
  const lastmod = new Date().toISOString();

  const urls = Object.keys(pages)
    .map((path) => {
      const trimmed = path.replace('/src/pages', '').replace(/\.astro$/, '');
      if (trimmed === '/index') return '/';
      return trimmed.replace(/\/index$/, '');
    })
    .filter((url) => url !== '/404' && !url.includes('[') && !url.includes('/api'))
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