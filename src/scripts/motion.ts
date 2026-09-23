/**
 * Shared GSAP setup — import `gsap` from here so every component uses the
 * same plugins and the Apple ease.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Apple's standard curve (iOS sheets / macOS transitions)
CustomEase.create('apple', '0.32, 0.72, 0, 1');
gsap.defaults({ ease: 'apple' });

/**
 * True when the page should not animate at all: the visitor asked for reduced
 * motion, or the browser is rendering in software (see the head script in
 * Layout.astro, which owns the detection and sets `html.no-motion`).
 */
export const reducedMotion =
  typeof window !== 'undefined' &&
  (document.documentElement.classList.contains('no-motion') ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches);

export { gsap, ScrollTrigger };
