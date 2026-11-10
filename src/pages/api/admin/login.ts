import type { APIRoute } from 'astro';
import { proxyFastApiAdminRequest } from '../../../utils/fastapi-admin-proxy';

export const prerender = false;

export const POST: APIRoute = ({ request }) => proxyFastApiAdminRequest(request, '/admin/login');
