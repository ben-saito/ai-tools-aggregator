import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => 
        !page.includes('/api/') && 
        !page.includes('/auth/callback') &&
        !page.includes('/vendor/dashboard'),
      serialize(item) {
        const url = item.url;
        const today = new Date().toISOString().split('T')[0];
        
        // Priority and changefreq based on page type
        let priority = 0.5;
        let changefreq = 'weekly';
        
        if (url.endsWith('/') || url.endsWith('/ja/')) {
          // Homepage
          priority = 1.0;
          changefreq = 'daily';
        } else if (url.includes('/blog/')) {
          // Blog posts
          priority = 0.8;
          changefreq = 'monthly';
        } else if (url.includes('/skills/') || url.includes('/tools/')) {
          // Tool/skill pages
          priority = 0.7;
          changefreq = 'weekly';
        }
        
        return {
          ...item,
          lastmod: today,
          changefreq,
          priority,
        };
      },
    })
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
