/** Standard FormSubmit POST in an isolated background frame; the visible page never navigates. */
export type ContactDetails = { firstName: string; company: string; email: string; message: string };

export function sendContactEnquiry(details: ContactDetails, callbackPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const token = crypto.randomUUID();
    const frame = document.createElement('iframe');
    frame.name = `crestloom-enquiry-${token}`;
    frame.title = 'Enquiry delivery';
    frame.hidden = true;
    frame.setAttribute('sandbox', 'allow-forms allow-scripts allow-same-origin');
    const deliveryForm = document.createElement('form');
    deliveryForm.method = 'POST';
    deliveryForm.action = 'https://formsubmit.co/info@crestloom.in';
    deliveryForm.target = frame.name;
    deliveryForm.hidden = true;
    const callback = new URL(callbackPath, location.origin);
    callback.searchParams.set('token', token);
    // Explicit allowlist. Honeypot values and UI state are never sent.
    const fields = {
      firstName: details.firstName.trim(), company: details.company.trim(),
      email: details.email.trim(), message: details.message.trim(),
      _subject: 'Crestloom website enquiry', _template: 'table',
      _captcha: 'false', _next: callback.href,
    };
    for (const [name, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden'; input.name = name; input.value = value;
      deliveryForm.append(input);
    }
    const cleanup = () => {
      clearTimeout(timeout);
      window.removeEventListener('message', confirmed);
      frame.remove(); deliveryForm.remove();
    };
    const confirmed = (event: MessageEvent) => {
      if (event.origin !== location.origin || event.source !== frame.contentWindow ||
          event.data?.type !== 'crestloom:enquiry-submitted' || event.data?.token !== token) return;
      cleanup(); resolve();
    };
    const timeout = window.setTimeout(() => {
      cleanup(); reject(new Error('Submission could not be confirmed'));
    }, 30_000);
    window.addEventListener('message', confirmed);
    document.body.append(frame, deliveryForm);
    try { deliveryForm.submit(); } catch (error) { cleanup(); reject(error); }
  });
}
