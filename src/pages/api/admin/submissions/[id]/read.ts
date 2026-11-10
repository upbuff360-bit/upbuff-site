import type { APIRoute } from 'astro';
import { proxyFastApiAdminRequest } from '../../../../../utils/fastapi-admin-proxy';

export const prerender = false;

export const POST: APIRoute = ({ request, params }) => {
  const id = params.id ?? '';
  if (!/^[a-f\d]{24}$/i.test(id)) {
    return Response.json({ detail: 'Invalid submission ID.' }, { status: 400 });
  }
  return proxyFastApiAdminRequest(request, `/admin/submissions/${id}/read`);
};
