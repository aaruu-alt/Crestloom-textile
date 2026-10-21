/** Base-aware links for the public site. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const routes = {
  home: `${base}/`,
  collections: `${base}/collections`,
  sourcing: `${base}/#sourcing`,
  process: `${base}/#process`,
  about: `${base}/about`,
  contact: `${base}/contact`,
  privacy: `${base}/privacy`,
};
