import { getFastApiBaseUrl } from './fastapi-base-url';

export async function proxyFastApiAdminRequest(request: Request, backendPath: string): Promise<Response> {
  const backendBaseUrl = getFastApiBaseUrl();
  if (!backendBaseUrl) {
    return Response.json({ detail: 'Admin API is not configured.' }, { status: 503 });
  }

  const headers = new Headers();
  const contentType = request.headers.get('content-type');
  const cookie = request.headers.get('cookie');
  if (contentType) headers.set('content-type', contentType);
  if (cookie) headers.set('cookie', cookie);

  try {
    const upstream = await fetch(`${backendBaseUrl}${backendPath}`, {
      method: request.method,
      headers,
      body: request.method === 'GET' || request.method === 'HEAD' ? undefined : await request.text(),
      signal: AbortSignal.timeout(10000),
    });

    const responseHeaders = new Headers({
      'Content-Type': upstream.headers.get('content-type') ?? 'application/json',
      'Cache-Control': 'no-store',
    });
    const setCookie = upstream.headers.get('set-cookie');
    if (setCookie) responseHeaders.set('Set-Cookie', setCookie);

    return new Response(await upstream.text(), {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('[admin] FastAPI request failed:', error);
    return Response.json({ detail: 'Admin service is temporarily unavailable.' }, { status: 502 });
  }
}
