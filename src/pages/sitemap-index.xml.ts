import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const response = await fetch('https://www.upbuff.com/sitemap-index.xml');
    const data = await response.text();

    return new Response(data, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (e) {
    return new Response('Sitemap not found', { status: 404 });
  }
};