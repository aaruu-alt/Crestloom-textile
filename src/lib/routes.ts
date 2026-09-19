/**
 * Site routes. HOME points at /home while the coming-soon page holds `/`;
 * change it to `${base}/` at launch.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const routes = {
  home: `${base}/home`,
  collections: `${base}/collections`,
  sourcing: `${base}/home#sourcing`,
  process: `${base}/home#process`,
  about: `${base}/about`,
  contact: `${base}/contact`,
  privacy: `${base}/privacy`,
};
