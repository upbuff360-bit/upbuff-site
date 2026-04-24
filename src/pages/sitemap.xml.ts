import type { APIRoute } from 'astro';

// Get all pages from Astro
const pages = import.meta.glob('/src/pages/**/*.astro');

export const GET: APIRoute = async () => {
  const base = 'https://www.upbuff.com';

  const urls = Object.keys(pages)
    .map((path) => {
      // convert file path → URL
      let url = path
        .replace('/src/pages', '')
        .replace('.astro', '')
        .replace('/index', '');

      // skip special pages
      if (
        url.includes('[') || // dynamic routes
        url.includes('api') ||
        url === ''
      ) return null;

      return `
      <url>
        <loc>${base}${url}</loc>
      </url>`;
    })
    .filter(Boolean)
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};