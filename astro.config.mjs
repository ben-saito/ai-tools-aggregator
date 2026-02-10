import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind()
    // Sitemap will be added after first successful deployment
  ],
  output: 'static',
  site: 'https://ai-tools-aggregator.vercel.app', // Update with actual domain when deployed
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
