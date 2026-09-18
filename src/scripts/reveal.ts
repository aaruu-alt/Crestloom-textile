/**
 * Scroll reveals — one-shot, compositor-only (opacity + transform).
 *
 * Opt in per section with `data-reveal-section`. Inside it:
 *   data-reveal        → element fades up when it enters the viewport
 *   data-reveal-group  → its [data-reveal] children stagger as one
 *
 * Start state lives in CSS (global.css, under html.js); this only animates
 * to the end state and then hands control back via `.is-revealed`.
 */
import { gsap, ScrollTrigger, reducedMotion } from './motion';

const END = { y: 0, opacity: 1, duration: 1.1, ease: 'apple' };
const START_AT = 'top 85%';

function finish(targets: Element[]) {
  targets.forEach((el) => el.classList.add('is-revealed'));
  gsap.set(targets, { clearProps: 'transform,opacity' });
}

function reveal(targets: Element[], stagger = 0) {
  gsap.to(targets, { ...END, stagger, onComplete: () => finish(targets) });
}

export function initReveals(root: ParentNode = document) {
  const sections = root.querySelectorAll('[data-reveal-section]');
  if (!sections.length) return;

  if (reducedMotion) {
    sections.forEach((s) => finish([...s.querySelectorAll('[data-reveal]')]));
    return;
  }

  sections.forEach((section) => {
    // Groups: stagger children together
    section.querySelectorAll('[data-reveal-group]').forEach((group) => {
      const items = [...group.querySelectorAll('[data-reveal]')];
      if (!items.length) return;
      ScrollTrigger.create({
        trigger: group,
        start: START_AT,
        once: true,
        onEnter: () => reveal(items, 0.12),
      });
    });

    // Singles: anything with data-reveal not inside a group
    section.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.closest('[data-reveal-group]')) return;
      ScrollTrigger.create({
        trigger: el,
        start: START_AT,
        once: true,
        onEnter: () => reveal([el]),
      });
    });
  });
}

initReveals();
