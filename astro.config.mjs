import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static',
  site: 'https://ai-tools-aggregator.vercel.app', // Update with actual domain when deployed
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    optimizeDeps: {
      exclude: ['fuse.js'],
    },
  },
});
