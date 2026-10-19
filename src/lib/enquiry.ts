/** Browser validation and a prefilled email draft. Sending happens in the visitor’s email app. */
export type Enquiry = {
  firstName: string;
  company: string;
  email: string;
  message: string;
  category?: string;
  website?: string;
  startedAt: number;
};
export type CatalogRequest = {
  firstName: string;
  email: string;
  category: string;
  product?: string;
  website?: string;
  startedAt: number;
};
export type SubmissionResult = { ok: boolean; error?: string; mailto?: string };
export type EmailFields = {
  firstName: string;
  email: string;
  message: string;
  company: string;
  category: string;
  product: string;
};

/** Also catches bare domains and HTML/Markdown links, not just https:// URLs. */
export function messageContainsLink(message: string): boolean {
  const text = message.normalize('NFKC');
  return /(?:https?:\/\/|www\.|mailto:|<a\b|\]\s*\(|\b(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}\b)/iu.test(text);
}

/** Explicit allowlist: honeypot and timing metadata can never become email fields. */
export function emailFields(data: Enquiry | CatalogRequest): EmailFields {
  return {
    firstName: data.firstName.trim(),
    email: data.email.trim(),
    message: 'message' in data ? data.message.trim() : '',
    company: 'company' in data ? data.company.trim() : '',
    category: data.category?.trim() ?? '',
    product: 'product' in data ? data.product?.trim() ?? '' : '',
  };
}

async function submit(kind: 'contact' | 'collection', data: Enquiry | CatalogRequest): Promise<SubmissionResult> {
  // Bots receive no indication that the honeypot caught them; no request is sent.
  if (data.website?.trim()) return { ok: true };
  const fields = emailFields(data);
  if (!fields.firstName || (kind === 'contact' && !fields.message) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return { ok: false, error: kind === 'contact' ? 'Please enter your first name, a valid email address, and a message.' : 'Please enter your first name and a valid email address.' };
  }
  if (messageContainsLink(fields.message)) return { ok: false, error: 'Please remove links from your message and try again.' };
  if (kind === 'collection' && !fields.category) return { ok: false, error: 'Please select a collection and try again.' };
  if (!Number.isFinite(data.startedAt) || Date.now() - data.startedAt < 2000) {
    return { ok: false, error: 'Please wait a moment before sending your enquiry.' };
  }
  const subject = kind === 'collection' ? `Crestloom collection enquiry — ${fields.category}` : 'Crestloom website enquiry';
  const body = [
    `First name: ${fields.firstName}`,
    `Email: ${fields.email}`,
    ...(fields.company ? [`Company: ${fields.company}`] : []),
    ...(fields.category ? [`Category: ${fields.category}`] : []),
    ...(fields.product ? [`Product code: ${fields.product}`] : []),
    ...(kind === 'contact' ? ['', 'Message:', fields.message] : []),
  ].join('\r\n');
  // This opens a draft, never sends automatically or claims inbox delivery.
  const mailto = `mailto:info@crestloom.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  try {
    window.location.assign(mailto);
    return { ok: true, mailto };
  } catch {
    return { ok: false, error: 'Please email your enquiry directly to info@crestloom.in.' };
  }
}

export const submitEnquiry = (data: Enquiry) => submit('contact', data);
export const submitCatalogRequest = (data: CatalogRequest) => submit('collection', data);
