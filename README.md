# Crestloom Textile

Crestloom Textile’s website, built with Astro, TypeScript and GSAP. The site presents home textile collections and sourcing services from Panipat, India.

## Local development

Use Node.js 22.12 or newer and npm. Run commands from the project root:

```sh
npm ci
npm run astro -- dev --background
```

Open [the local homepage](http://localhost:4321/Crestloom-textile/). The development site uses the `/Crestloom-textile` base path.

Manage the background server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

| Command | Purpose |
| --- | --- |
| `npm run astro -- check` | Check Astro and TypeScript diagnostics |
| `npm run build` | Build all development-site pages into `dist/` |
| `npm run preview` | Preview the generated build locally |
| `npm run build:live` | Build the full main-domain site |

Both build commands write to `dist/`. Rebuild the intended target before previewing or publishing.

## Pages and source files

| Location | Contents |
| --- | --- |
| `src/pages/index.astro` | Full homepage at the site root |
| `src/pages/home.astro` | Redirect for old homepage links |
| `src/pages/collections.astro` | Product collections and category filter |
| `src/pages/about.astro` | About Crestloom |
| `src/pages/contact.astro` | Contact details and enquiry form |
| `src/pages/privacy.astro` | Privacy policy |
| `src/components/` | Shared navigation, footers, form and page sections |
| `src/layouts/Layout.astro` | Shared document layout and social metadata |
| `src/styles/` | Global tokens, responsive rules and page styles |
| `src/data/collection.ts` | Product records and categories |
| `src/assets/` | Imported images, fonts and SVG artwork |
| `src/lib/routes.ts` | Base-aware links and homepage section routes |
| `src/lib/enquiry.ts` | Shared enquiry utilities and message-link validation |
| `public/og.jpg` | Shared Open Graph artwork |
| `scripts/prepare-live.mjs` | Excludes the internal crop tool from the main-domain build |

“All collections” shows one curated thumbnail per category, with an Explore overlay on hover or keyboard focus. Cushion covers are included within Cushions; their footer link opens that combined category. Collection cards select their category. Once a category is selected, cards retain their hover zoom but do not open a popup. Chindi rugs and Fouta towels are excluded from the current collection and footer.

## Design conventions

[Figma design source](https://www.figma.com/design/oZsG4Dn3J39bNIBPKYFntA/Crestlooms).

- Reuse shared components and Client-First-style classes. Keep headings and copy as a single accessible instance across breakpoints.
- Use rem-based sizing and the existing root scaling: desktop `1.111vw`, capped above 1600px; tablet at 991px and below uses 16px; mobile at 767px and below uses `4.444vw`.
- Large containers have an `83rem` maximum width. Use `100svh` for viewport-height layouts.
- Reuse the custom motion curve `--ease--apple: cubic-bezier(0.32, 0.72, 0, 1)` and existing reduced-motion handling.
- Collection product photos and category thumbnails share a subtle display-only brightness/contrast correction in `ProductCard.astro`; original image files stay unchanged. Content raster images use WebP. SVG artwork, browser icons and the JPEG social-sharing image have separate format requirements.
- Both footer variants use `CopyrightYear.astro`, which updates the year in the browser using UTC.

## Contact form

The contact form submits to FormSubmit through its standard POST endpoint, addressed to `info@crestloom.in`. Visitors complete the provider’s spam verification and return to the contact page; no email application opens. The AJAX endpoint was replaced after repeated timeouts.

The payload includes first name, email, optional company and message. Required fields and email format are checked in the browser, messages containing links are rejected, and a populated honeypot stops submission. The honeypot is excluded from the outgoing payload. Browser checks can be bypassed and are not server-side spam protection.

The form prevents duplicate submissions while transferring to the provider and shows a confirmation when the provider redirects back after submission. FormSubmit must activate the recipient address before delivery works. Activation uses the confirmation email sent to that inbox; verify actual receipt after activation. A successful HTTP response alone does not prove inbox delivery.

The collection enquiry popup is no longer mounted. Legacy popup and mail-draft utilities remain in the source but are not the active contact form.

## Deployment

Pushes to `main` trigger two GitHub Actions workflows:

| Target | Workflow | Result |
| --- | --- | --- |
| [Development site](https://aaruu-alt.github.io/Crestloom-textile/) | `.github/workflows/deploy.yml` | Full site published to this repository’s GitHub Pages |
| [Main domain](https://www.crestloomtextiles.com/) | `.github/workflows/deploy-live.yml` | Full website, published to `aaruu-alt/crestloom-coming-soon` on `gh-pages` |

The main-domain workflow requires the repository secret `LIVE_DEPLOY_TOKEN`. Never commit credentials. Target URLs and base paths are configured in `astro.config.mjs` using `LIVE_BUILD=true` for the main-domain build.

Check [GitHub Actions](https://github.com/aaruu-alt/Crestloom-textile/actions) for completion and verify the published pages before calling a deployment live. Review design changes locally before pushing.

The homepage is served at `/` on the main domain. Old `/home` URLs redirect to the homepage. The hosting repository retains its original `crestloom-coming-soon` name.

Framework reference: [Astro documentation](https://docs.astro.build).
