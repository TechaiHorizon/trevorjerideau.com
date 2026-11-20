# Trevor Jerideau

A one-page editorial portfolio built with Astro 5 and published to GitHub Pages at **https://trevorjerideau.com**.

Repository: [TechaiHorizon/trevorjerideau.com](https://github.com/TechaiHorizon/trevorjerideau.com).

## Edit the site

- `src/pages/index.astro`: homepage content, sections, and page-specific styling.
- `src/layouts/Layout.astro`: document metadata, Person JSON-LD, Google Fonts, and minimal global styles.
- `public/`: static assets, including images, favicon, domain configuration, and `robots.txt`.
- `astro.config.mjs`: production domain and homepage-only sitemap configuration.
- `src/pages/about.astro`, `work.astro`, and `contact.astro`: preserved legacy routes that redirect to `/#biography`, `/#artists`, and `/#contact`. Keep their anchor destinations in sync with the homepage.

Use only approved biographical facts. Do not add unverified metrics, award dates, credentials, or contact details. The Space Grotesk and IBM Plex Mono fonts load through the Google Fonts CDN.

## Develop and check

Use Node.js 22 and pnpm 9 to match the deployment workflow. From the repository root:

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:4321`. Before publishing:

```bash
pnpm build
pnpm preview
```

The static production build is written to `dist/`. Check the homepage on desktop and mobile, keyboard focus, section navigation, image loading, and legacy route redirects.

## Publish

Commit reviewed changes and push them to `main`. The existing `.github/workflows/deploy.yml` workflow automatically builds and deploys the site to GitHub Pages on every push to `main`; it also supports a manual run from the repository’s **Actions** tab.

In repository **Settings → Pages**, use **GitHub Actions** as the source and retain `trevorjerideau.com` as the custom domain with HTTPS enabled. Keep domain configuration aligned with `astro.config.mjs` and `public/robots.txt`. Check the deployment workflow completes successfully before verifying the live site.

This static site requires no API keys or custom deployment secrets. The workflow uses GitHub’s built-in Pages permissions and token. Never commit credentials, private keys, or `.env` files.
