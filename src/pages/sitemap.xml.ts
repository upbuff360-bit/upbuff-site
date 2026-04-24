import type { APIRoute } from 'astro';

const pages = import.meta.glob('/src/pages/**/*.astro');

export const GET: APIRoute = async () => {
  const base = 'https://www.upbuff.com';

  const urls = Object.keys(pages)
    .map((path) => {
      let url = path
        .replace('/src/pages', '')
        .replace('.astro', '')
        .replace('/index', '');

      // filters (important)
      if (
        url === '' ||
        url === '/404' ||
        url.includes('[') ||
        url.includes('api')
      ) return null;

      return `
      <url>
        <loc>${base}${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`;
    })
    .filter(Boolean)
    .join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};