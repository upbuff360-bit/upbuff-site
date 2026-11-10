import { getFastApiBaseUrl } from './fastapi-base-url';

export async function saveLeadSubmission(
  submission: Record<string, unknown>,
  timeoutMs: number,
  logPrefix: string
): Promise<boolean> {
  const storageUrl = getFastApiBaseUrl();
  const storageKey = import.meta.env.CONTACT_STORAGE_API_KEY;
  if (!storageUrl || !storageKey) {
    console.error(`[${logPrefix}] admin storage is not configured`);
    return false;
  }

  try {
    const response = await fetch(`${storageUrl}/internal/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Contact-Storage-Key': storageKey,
      },
      body: JSON.stringify(submission),
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!response.ok) {
      console.error(`[${logPrefix}] admin storage returned HTTP`, response.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`[${logPrefix}] admin storage unavailable:`, error);
    return false;
  }
}
