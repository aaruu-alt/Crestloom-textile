/**
 * Enquiry submission.
 * TODO (Supabase): POST to the edge function that validates (honeypot, timing,
 * rate limit, email checks) and inserts into `contact_submissions`.
 * Until then this resolves locally so the UI flow can be built and tested.
 */
export type Enquiry = {
  firstName: string;
  company: string;
  email: string;
  message: string;
  website?: string;   // honeypot — must stay empty
  startedAt: number;  // form render time, for the timing check
};

export async function submitEnquiry(data: Enquiry): Promise<{ ok: boolean }> {
  if (data.website) return { ok: true };                 // bot filled the honeypot: pretend success
  if (Date.now() - data.startedAt < 3000) return { ok: true };
  await new Promise((r) => setTimeout(r, 600));          // simulate network
  console.info('[enquiry] stub submit', data);
  return { ok: true };
}
