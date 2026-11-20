// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trevorjerideau.com',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Legacy routes remain available but should not be indexed separately.
      filter: (page) => new URL(page).pathname === '/',
    }),
  ],
});
