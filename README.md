# AI Tools Aggregator

**A curated directory of 50+ AI tools for 2026**

## 🎯 Project Overview

AI Tools Aggregator is a modern, fast, and SEO-optimized directory of AI tools across 10 categories. Built with Astro for maximum performance and Vercel for global CDN deployment.

### Key Features

- 🚀 **Blazing Fast**: Static site generation with Astro
- 🔍 **SEO Optimized**: Server-side rendering for search engines
- 📱 **Responsive**: Mobile-first design with Tailwind CSS
- 🌙 **Dark Mode**: System-aware theme switching
- 🏷️ **10 Categories**: Organized by use case
- 🔎 **Search**: Client-side search with Fuse.js
- 💰 **Monetization**: Premium listings and sponsored slots

## 📊 Categories

1. **Text Generation** - ChatGPT, Claude, Gemini
2. **Image Generation** - Midjourney, DALL-E, Stable Diffusion
3. **Video Generation** - Runway, Synthesia, HeyGen
4. **Audio & Music** - ElevenLabs, Suno, Descript
5. **Code Development** - GitHub Copilot, Cursor, v0.dev
6. **Marketing & Sales** - Jasper, Copy.ai, Writesonic
7. **Productivity** - Notion AI, Grammarly, Motion
8. **Research & Education** - Perplexity, ChatPDF, Consensus
9. **Design & Creative** - Canva AI, Gamma, Framer
10. **Data & Analytics** - Tableau Pulse, Julius AI

## 🛠️ Tech Stack

### Frontend
- **Framework**: Astro 4.x (Static Site Generation)
- **Styling**: Tailwind CSS 3.x
- **Search**: Fuse.js (client-side)
- **Icons**: Heroicons

### Data
- **Source**: JSON files (`data/tools.json`)
- **Future**: Notion API integration (optional)

### Deployment
- **Hosting**: Vercel (Free tier)
- **CDN**: Global edge network
- **Domain**: TBD (aitoolsdb.com, aitools.directory)

## 📁 Project Structure

```
ai-tools-aggregator/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── categories/
│   │   │   └── [category].astro # Category pages
│   │   └── tools/
│   │       └── [id].astro       # Tool detail pages
│   ├── components/
│   │   ├── Header.astro         # Navigation
│   │   ├── ToolCard.astro       # Tool preview card
│   │   ├── SearchBar.astro      # Search component
│   │   └── CategoryNav.astro    # Category filter
│   ├── layouts/
│   │   └── Layout.astro         # Base layout
│   └── lib/
│       ├── tools.ts             # Data loader
│       └── search.ts            # Search utilities
├── data/
│   ├── tools.json               # 50 AI tools
│   └── schema.json              # Data schema
├── public/
│   └── favicon.ico
├── tailwind.config.mjs
├── astro.config.mjs
└── package.json
```

## 🚀 Development

### Prerequisites
- Node.js 18+ (using nodebrew: v22.22.0)
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create `.env` file (optional, for future Notion integration):

```env
NOTION_API_KEY=your_key_here
NOTION_DATABASE_ID=your_db_id_here
```

## 📈 Roadmap

### Phase 1: MVP (Week 1) ✅ IN PROGRESS
- [x] Project setup
- [x] Data schema
- [x] 50 tools curated
- [ ] Astro configuration
- [ ] Basic UI components
- [ ] Homepage
- [ ] Category pages
- [ ] Tool detail pages
- [ ] Search functionality
- [ ] Deploy to Vercel

### Phase 2: Enhancement (Week 2-3)
- [ ] User submissions
- [ ] Reviews and ratings
- [ ] Featured tools section
- [ ] Newsletter signup
- [ ] Analytics (Plausible/Vercel)

### Phase 3: Monetization (Week 4+)
- [ ] Premium listings ($99/month)
- [ ] Sponsored placements
- [ ] Affiliate links
- [ ] Self-service submission portal

## 💰 Business Model

### Revenue Streams
1. **Premium Listings**: $99-499/month per tool
2. **Sponsored Placements**: $1,000-5,000/month
3. **Affiliate Commissions**: Ongoing passive income

### Target ARR
- 10 premium listings × $99/mo = $990/mo → $11,880/year
- 5 sponsors × $1,000/mo = $5,000/mo → $60,000/year
- **Total Year 1 Target**: $71,880 ARR

### Scaling to 100M ARR
- Requires: 10,000+ tools, 1M+ monthly visitors
- Conversion: 1% to premium = 100 listings → $1.2M ARR
- Timeline: 2-3 years with aggressive growth

## 📝 Data Schema

Each tool entry contains:
- `id` (slug)
- `name`
- `url`
- `category`
- `description` (200 chars max)
- `pricing` (free/freemium/paid/open-source)
- `tags` (array)
- `featured` (boolean)
- `premium` (boolean)
- `logoUrl`
- `addedAt` (date)

See `data/schema.json` for full JSON schema.

## 🤝 Contributing

This is currently a solo project. Contributions may be accepted in the future.

## 📄 License

© 2026 AI Tools Aggregator. All rights reserved.

## 📞 Contact

- Project Lead: つとむ様
- Development: フロウ (AI Assistant)
- Status: MVP Development (Week 1/7)

---

**Last Updated**: 2026-02-10
**Version**: 0.1.0-alpha
**Launch Target**: 2026-02-17
