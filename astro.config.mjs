// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Two targets from one codebase:
 *   npm run build       → staging, every page, GitHub Pages project URL
 *                         (https://aaruu-alt.github.io/Crestloom-textile/)
 *   npm run build:live  → the coming-soon page only, at the root of the
 *                         custom domain. Deployed to the crestloom-coming-soon
 *                         repo by .github/workflows/deploy-live.yml.
 */
const live = process.env.LIVE_BUILD === 'true';

export default defineConfig({
  site: live ? 'https://www.crestloomtextile.com' : 'https://aaruu-alt.github.io',
  ...(live ? {} : { base: '/Crestloom-textile' }),
  output: 'static',
});
