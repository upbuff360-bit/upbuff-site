export function getFastApiBaseUrl(): string | undefined {
  const url = process.env.FASTAPI_SERVICE_URL || import.meta.env.FASTAPI_BASE_URL;
  return url?.replace(/\/+$/, '');
}
