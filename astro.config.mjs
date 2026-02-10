import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://aitoolsdb.com', // Update with actual domain
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
