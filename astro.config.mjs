import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    react()
  ],
  output: 'server', // Server-side rendering (Astro 5)
  adapter: vercel(),
  site: 'https://ai-tools-aggregator-seven.vercel.app',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'supabase': ['@supabase/supabase-js']
          }
        }
      }
    }
  }
});
