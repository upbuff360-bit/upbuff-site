import type { APIRoute } from 'astro';
import { proxyFastApiAdminRequest } from '../../../utils/fastapi-admin-proxy';

export const prerender = false;

export const GET: APIRoute = ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const listingType = searchParams.get('type') ?? 'contact';
  if (listingType !== 'contact' && listingType !== 'demo' && listingType !== 'consultation') {
    return Response.json({ detail: 'Invalid submission type.' }, { status: 400 });
  }
  const folder = searchParams.get('folder') ?? 'inbox';
  if (folder !== 'inbox' && folder !== 'trash') {
    return Response.json({ detail: 'Invalid folder.' }, { status: 400 });
  }
  const limit = Number(searchParams.get('limit') ?? 12);
  if (!Number.isInteger(limit) || limit < 1 || limit > 12) {
    return Response.json({ detail: 'Invalid page size.' }, { status: 400 });
  }
  const beforeAt = searchParams.get('before_at');
  const beforeId = searchParams.get('before_id');
  if (Boolean(beforeAt) !== Boolean(beforeId)) {
    return Response.json({ detail: 'Incomplete page cursor.' }, { status: 400 });
  }
  const backendParams = new URLSearchParams({
    limit: String(limit),
    submission_type: listingType,
    folder,
  });
  if (beforeAt && beforeId) {
    backendParams.set('before_at', beforeAt);
    backendParams.set('before_id', beforeId);
  } else {
    backendParams.set('include_counts', 'true');
  }
  return proxyFastApiAdminRequest(
    request,
    `/admin/submissions?${backendParams}`
  );
};
