import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind()
    // Sitemap will be added after first successful deployment
  ],
  output: 'static', // Static site generation
  adapter: vercel(),
  site: 'https://ai-tools-aggregator-seven.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
