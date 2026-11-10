import { waitUntil } from '@vercel/functions';

export async function sendLeadEmailsAfterSave(
  sendEmails: [() => Promise<unknown>, () => Promise<unknown>],
  logPrefix: string
): Promise<void> {
  const delivery = Promise.allSettled(sendEmails.map((sendEmail) => Promise.resolve().then(sendEmail))).then(
    (results) => {
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(
            `[${logPrefix}] ${index === 0 ? 'team email' : 'visitor acknowledgment'} failed:`,
            result.reason
          );
        }
      });
    }
  );

  // Vercel finishes these emails after the form response. Local development
  // waits because it does not have a Vercel request context.
  if (process.env.VERCEL === '1') {
    waitUntil(delivery);
  } else {
    await delivery;
  }
}
