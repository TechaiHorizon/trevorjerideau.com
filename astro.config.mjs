// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://trevorjerideau.github.io',

  // When deploying to custom domain, update to: 'https://trevorjerideau.com'

  // Uncomment base if using repository name in URL
  // base: '/trevorjerideau.com',

  // Build optimizations
  build: {
      inlineStylesheets: 'auto',
	},

  // Compression and performance
  compressHTML: true,

  // SEO enhancements
  trailingSlash: 'ignore',

  integrations: [sitemap()],
});