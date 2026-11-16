import type { APIRoute } from 'astro';
import { proxyFastApiAdminRequest } from '../../../utils/fastapi-admin-proxy';

export const prerender = false;

export const GET: APIRoute = ({ request }) => proxyFastApiAdminRequest(request, '/admin/session');
