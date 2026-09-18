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

export const reducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger };
