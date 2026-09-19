/**
 * Reveals — one-shot, compositor-only (opacity + transform).
 *
 * Opt in per section with `data-reveal-section`. Inside it:
 *   data-reveal          → fades up when it enters the viewport
 *   data-reveal="lines"  → its .lines_inner children slide up out of masks
 *   data-reveal-group    → its [data-reveal] children stagger as one
 *
 * Anything already in the viewport on load plays in one staggered load
 * timeline (navbar → lines → the rest); everything else waits for scroll.
 * Start states live in CSS (global.css / Lines.astro, under html.js).
 */
import { gsap, ScrollTrigger, reducedMotion } from './motion';

const FADE = { y: 0, opacity: 1, duration: 0.8 };
const LINE = { y: 0, duration: 0.9 };
const START_AT = 'clamp(top 95%)';   // fire as soon as it enters; clamp: page-end elements still fire

const isLines = (el: Element) => el.getAttribute('data-reveal') === 'lines';
const linesOf = (el: Element) => [...el.querySelectorAll('.lines_inner')];

function finish(targets: Element[]) {
  targets.forEach((el) => {
    el.classList.add('is-revealed');
    gsap.set(isLines(el) ? linesOf(el) : el, { clearProps: 'transform,opacity' });
  });
}

/** Adds the reveal tweens for `items` to `tl` at `at`, staggered. Returns end time. */
function add(tl: gsap.core.Timeline, items: Element[], at: number, stagger = 0.08) {
  let t = at;
  items.forEach((el) => {
    if (isLines(el)) {
      const lines = linesOf(el);
      tl.to(lines, { ...LINE, stagger: 0.12, onComplete: () => finish([el]) }, t);
      t += 0.12 * lines.length;
    } else {
      tl.to(el, { ...FADE, onComplete: () => finish([el]) }, t);
      t += stagger;
    }
  });
  return t;
}

/** Show everything inside `root` immediately and drop its scroll triggers (used by filter switches). */
export function revealNow(root: Element) {
  finish([...root.querySelectorAll('[data-reveal]')].filter((el) => !el.classList.contains('is-revealed')));
  ScrollTrigger.getAll().forEach((st) => { if (st.trigger && root.contains(st.trigger as Element)) st.kill(); });
}

export function initReveals(root: ParentNode = document) {
  const sections = [...root.querySelectorAll('[data-reveal-section]')];
  if (!sections.length) return;

  const all = sections.flatMap((s) => [...s.querySelectorAll('[data-reveal]')]);
  if (reducedMotion) { finish(all); return; }

  // ---- Load: everything already on screen, in document order ----
  const inView = all.filter((el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight * 0.95 && r.bottom > 0 && !el.closest('[hidden]');
  });
  const onScroll = all.filter((el) => !inView.includes(el));

  if (inView.length) {
    const tl = gsap.timeline({ delay: 0.3 });
    add(tl, inView.filter(isLines), 0);
    add(tl, inView.filter((el) => !isLines(el)), 0.25, 0.08);
  }

  // ---- Scroll: the rest, grouped or single ----
  const handled = new Set<Element>();
  sections.forEach((section) => {
    section.querySelectorAll('[data-reveal-group]').forEach((group) => {
      const items = [...group.querySelectorAll('[data-reveal]')].filter((el) => onScroll.includes(el));
      if (!items.length) return;
      items.forEach((el) => handled.add(el));
      ScrollTrigger.create({
        trigger: group, start: START_AT, once: true,
        onEnter: () => add(gsap.timeline(), items, 0),
      });
    });
  });
  onScroll.filter((el) => !handled.has(el)).forEach((el) => {
    ScrollTrigger.create({
      trigger: el, start: START_AT, once: true,
      onEnter: () => add(gsap.timeline(), [el], 0),
    });
  });
}

initReveals();
