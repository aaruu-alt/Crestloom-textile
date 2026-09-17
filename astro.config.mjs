// @ts-check
import { defineConfig } from 'astro/config';

// Staging: GitHub Pages project URL (https://aaruu-alt.github.io/Crestloom-textile/).
// When the custom domain goes live, change `site` to the domain and remove `base`.
export default defineConfig({
  site: 'https://aaruu-alt.github.io',
  base: '/Crestloom-textile',
  output: 'static',
});
