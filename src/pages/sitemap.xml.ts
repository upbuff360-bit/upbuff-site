import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async () => {
  try {
    const filePath = path.resolve('./dist/client/sitemap.xml');
    const sitemap = fs.readFileSync(filePath, 'utf-8');

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    return new Response('Sitemap not found', { status: 404 });
  }
};