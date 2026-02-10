# Quick Deploy Guide

## 🚀 Deploy in 5 Minutes

### Step 1: Create GitHub Repository (2 min)

1. Go to https://github.com/new
2. Enter repository name: **ai-tools-aggregator**
3. Select **Public** (recommended for open source)
4. **DON'T** check "Initialize this repository with a README"
5. Click "Create repository"

### Step 2: Push Code (1 min)

```bash
cd /Users/tsutomusaito/Projects/ai-tools-aggregator
git push -u origin main
```

✅ Code is now on GitHub!

### Step 3: Deploy to Vercel (2 min)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Click "Import" next to **ben-saito/ai-tools-aggregator**
4. Vercel will auto-detect Astro settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework Preset: Astro
5. Click "Deploy"

✅ Site will be live in ~60 seconds!

### Step 4: Update Site URL (1 min)

After deployment, copy your Vercel URL (e.g., `ai-tools-aggregator-xyz.vercel.app`)

```bash
# Edit astro.config.mjs
# Change: site: 'https://ai-tools-aggregator.vercel.app'
# To: site: 'https://YOUR-VERCEL-URL.vercel.app'

git add astro.config.mjs
git commit -m "Update production site URL"
git push
```

Vercel will auto-deploy the update!

---

## 🎉 Launch Marketing (Immediate)

### Post #1: X (Twitter)

```
🚀 1週間かけて何かを作った

問題: 良いAIツールを見つけるのは混沌
- 毎月100以上の新ツール
- 信頼できる情報源がない
- 比較が難しい

解決策: AI Tools Aggregator
- 50以上の厳選ツール
- 10カテゴリ
- 高速検索
- 完全無料

Astro + Tailwindで1週間で構築

チェック: https://YOUR-SITE.vercel.app

#BuildInPublic #AITools #IndieHacker
```

### Post #2: Hacker News

Title: `Show HN: I built an AI tools directory in 1 week`

```
I spent the last week building AI Tools Aggregator - a curated directory of 50+ AI tools across 10 categories.

Key features:
- Fast search
- Category browsing
- Clean, minimal design
- Free and open source

Built with Astro + Tailwind CSS. All code is on GitHub.

Live: https://YOUR-SITE.vercel.app
GitHub: https://github.com/ben-saito/ai-tools-aggregator

Would love your feedback!
```

### Post #3: Reddit

**r/SideProject:**
```
I built an AI tools directory in 1 week

Hey everyone! I just launched AI Tools Aggregator.

The problem: Finding good AI tools is scattered across dozens of sites.

The solution: A single, searchable directory of 50+ curated AI tools.

Features:
✅ 10 categories (text, image, video, code, etc.)
✅ Fast search
✅ Free forever
✅ Open source

Tech stack: Astro + Tailwind CSS + Vercel

Live site: https://YOUR-SITE.vercel.app

This is my first week of #BuildInPublic. Would love your feedback!
```

---

## ✅ Post-Launch Checklist

- [ ] Verify all pages load
- [ ] Test search functionality
- [ ] Check mobile responsiveness
- [ ] Post on X (Twitter)
- [ ] Post on Hacker News
- [ ] Post on Reddit (r/SideProject, r/InternetIsBeautiful)
- [ ] Share in Discord communities
- [ ] Submit sitemap to Google Search Console

---

**Total Time**: 5 minutes + marketing posts
**Next Goal**: 1,000 visitors in Week 1! 🎯
