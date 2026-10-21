import test from 'node:test';
import assert from 'node:assert/strict';
import { sendContactEnquiry } from '../src/lib/contact-delivery.ts';

const details = { firstName: ' Alex ', company: ' Studio ', email: 'alex@example.com', message: 'Rug enquiry', _honey: 'must not be sent' };
function browser() {
  const listeners = new Map();
  const nodes = [];
  let onTimeout;
  function element(tag) {
    return { tag, children: [], contentWindow: {}, removed: false,
      setAttribute(name, value) { this[name] = value; },
      append(...children) { this.children.push(...children); },
      remove() { this.removed = true; }, submit() { this.submitted = true; } };
  }
  globalThis.location = { origin: 'https://www.crestloomtextiles.com' };
  globalThis.document = { createElement: element, body: { append: (...items) => nodes.push(...items) } };
  globalThis.window = {
    setTimeout(fn) { onTimeout = fn; return 1; },
    addEventListener(type, fn) { listeners.set(type, fn); },
    removeEventListener(type, fn) { if (listeners.get(type) === fn) listeners.delete(type); },
  };
  return { nodes, listeners, timeout: () => onTimeout(), message: event => listeners.get('message')?.(event) };
}

test('sends only approved fields in a hidden frame and accepts only its matching return', async () => {
  const env = browser();
  const sent = sendContactEnquiry(details, '/enquiry-received/');
  const [frame, form] = env.nodes;
  const data = Object.fromEntries(form.children.map(input => [input.name, input.value]));
  assert.equal(form.action, 'https://formsubmit.co/info@crestloom.in');
  assert.equal(form.target, frame.name);
  assert.equal(frame.hidden, true);
  assert.equal(frame.sandbox, 'allow-forms allow-scripts allow-same-origin');
  assert.equal(data.firstName, 'Alex');
  assert.equal(data.message, 'Rug enquiry');
  assert.equal(data._captcha, 'false');
  assert.equal(data._honey, undefined);
  const token = new URL(data._next).searchParams.get('token');
  const message = { origin: location.origin, source: frame.contentWindow, data: { type: 'crestloom:enquiry-submitted', token } };
  env.message({ ...message, origin: 'https://example.com' });
  env.message({ ...message, source: {} });
  env.message({ ...message, data: { ...message.data, token: 'wrong' } });
  assert.equal(frame.removed, false);
  env.message(message);
  await sent;
  assert.equal(frame.removed, true);
  assert.equal(form.removed, true);
  assert.equal(env.listeners.size, 0);
});

test('missing confirmation times out and cleans up without claiming success', async () => {
  const env = browser();
  const sent = sendContactEnquiry(details, '/enquiry-received/');
  env.timeout();
  await assert.rejects(sent, /could not be confirmed/);
  assert(env.nodes.every(n => n.removed));
  assert.equal(env.listeners.size, 0);
});
