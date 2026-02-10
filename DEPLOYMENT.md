# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel CLI (Fastest - 2 minutes)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd /Users/tsutomusaito/Projects/ai-tools-aggregator

# Deploy (will prompt for login and project settings)
vercel

# Production deployment
vercel --prod
```

### Option 2: GitHub + Vercel (Recommended for ongoing deployment)

**Step 1: Create GitHub Repository**

```bash
# Initialize git (if not already done)
git init
git add -A
git commit -m "Initial commit"

# Create repository on GitHub (via web interface)
# Then add remote and push:
git remote add origin https://github.com/YOUR_USERNAME/ai-tools-aggregator.git
git branch -M main
git push -u origin main
```

**Step 2: Deploy via Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Astro settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Framework Preset**: Astro
5. Click "Deploy"

**Step 3: Automatic Deployments**

Every push to `main` branch will trigger automatic deployment!

---

## Environment Setup (Optional)

If you need environment variables, create `.env.production` or add them in Vercel dashboard:

```bash
# Example (not needed for current MVP)
PUBLIC_SITE_URL=https://your-domain.com
PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain (e.g., `aitools.directory`)
4. Follow DNS configuration instructions

---

## Post-Deployment Checklist

- [ ] Visit deployed URL and test homepage
- [ ] Test category pages (`/categories/text-generation`)
- [ ] Test tool detail pages (`/tools/chatgpt`)
- [ ] Test search functionality
- [ ] Check responsive design on mobile
- [ ] Verify meta tags (Open Graph, Twitter cards)
- [ ] Submit sitemap to Google Search Console (optional)

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Create GA4 property
2. Add tracking code to `src/layouts/Layout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

Vercel provides built-in analytics for free. Enable in project settings.

---

## Troubleshooting

### Build fails

```bash
# Test build locally first
npm run build
npm run preview
```

### 404 errors on deployed site

Check `vercel.json` configuration is correct.

### Slow build times

Astro builds are usually very fast (<30s). If slow:
- Check for large images in `public/`
- Verify no unnecessary dependencies

---

## Next Steps After Deployment

1. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Add structured data (JSON-LD)
   - Optimize meta descriptions

2. **Performance**
   - Run Lighthouse audit
   - Optimize images (use WebP format)
   - Enable Vercel's Edge Network

3. **Monetization**
   - Add "Submit Tool" form
   - Implement premium listings
   - Add Google AdSense (optional)

4. **Marketing**
   - Share on Product Hunt
   - Post on X (Twitter), LinkedIn
   - Submit to AI tool directories
   - Create content (blog posts about AI tools)

---

## Estimated Timeline

- **Deployment**: 2-5 minutes
- **Custom domain setup**: 10-30 minutes
- **Analytics setup**: 5-10 minutes

**Total**: Ready to launch in < 1 hour! 🚀
