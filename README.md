# AI Tools Aggregator

A curated directory of the best AI tools for 2026, built with Astro 4.x and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ai-tools-aggregator

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see the site.

### Build for Production

```bash
# Build the site
npm run build

# Preview production build
npm run preview
```

## ✨ Features

- **50+ Curated Tools**: Hand-picked AI tools across 10 categories
- **Fast & Lightweight**: Built with Astro for optimal performance (Static Site Generation)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Search Functionality**: Real-time client-side search
- **Category Browsing**: Organized by 10 major categories
- **Tool Details**: Dedicated pages for each tool with features and use cases
- **Free to Use**: Open source and free for everyone

## 📂 Categories

We cover 10 major AI tool categories:

1. 💬 **Text Generation** - AI writing assistants and chatbots
2. 🎨 **Image Generation** - AI art and image creation tools
3. 🎥 **Video Generation** - AI video creation and editing
4. 🎵 **Audio & Music** - AI music production and audio tools
5. 💻 **Code Development** - AI coding assistants
6. 📈 **Marketing & Sales** - AI marketing automation
7. ⚡ **Productivity** - AI productivity enhancers
8. 📚 **Research & Education** - AI learning tools
9. 🖌️ **Design & Creative** - AI design tools
10. 📊 **Data & Analytics** - AI data analysis tools

## 🛠️ Tech Stack

- **Framework**: [Astro 4.x](https://astro.build) - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **TypeScript**: Type-safe development
- **Data**: JSON-based (no database required)
- **Deployment**: Vercel / Netlify / Cloudflare Pages (all supported)

## 📁 Project Structure

```
/
├── public/             # Static assets (favicon, images)
├── src/
│   ├── components/     # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── ToolCard.astro
│   │   └── SearchBar.astro
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # File-based routing
│   │   ├── index.astro                 # Home page
│   │   ├── categories/[slug].astro     # Category pages
│   │   └── tools/[slug].astro          # Tool detail pages
│   ├── lib/            # Utilities and data handling
│   │   ├── tools.ts    # Data access functions
│   │   └── types.ts    # TypeScript types
│   └── styles/         # Global styles
│       └── global.css
├── data/
│   ├── tools.json      # Tools database (50+ tools)
│   └── schema.json     # Data schema definition
└── package.json
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel auto-detects Astro and deploys

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Deploy to Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 📝 Adding New Tools

Edit `data/tools.json`:

```json
{
  "id": "new-tool",
  "name": "New AI Tool",
  "description": "Brief description",
  "category": "Text Generation",
  "pricing": "freemium",
  "url": "https://example.com",
  "logoUrl": "https://example.com/logo.png",
  "featured": false,
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "useCases": [
    "Use case 1"
  ]
}
```

## 🎨 Customization

### Update Colors

Edit `tailwind.config.mjs`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Add Categories

Edit `src/lib/tools.ts`:

```ts
export const categories = [
  { slug: 'new-category', name: 'New Category', icon: '🔥', description: 'Description' },
  // ...
];
```

## 📈 MVP Roadmap

### Phase 1: Core Features (Week 1) ✅
- [x] Project setup with Astro + Tailwind
- [x] Data schema and 50 tools
- [x] Homepage with featured tools
- [x] Category pages
- [x] Tool detail pages
- [x] Search functionality
- [x] Responsive design

### Phase 2: Deployment & Optimization (Week 2)
- [ ] Deploy to Vercel
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Performance optimization
- [ ] Analytics integration (Google Analytics)

### Phase 3: Monetization (Week 3-4)
- [ ] Premium listings feature
- [ ] Sponsored tool slots
- [ ] Submit tool form
- [ ] Admin dashboard (optional)

## 🎯 Business Model

### Free Tier
- Basic listing in directory
- Category page inclusion
- Search visibility

### Premium Listing ($99/month)
- Featured on homepage
- Priority in search results
- Enhanced listing with custom description
- Direct contact button

### Sponsored Slots ($299/month)
- Top banner placement
- Category page sponsorship
- Newsletter mentions (future)

## 📊 Target Metrics

**Year 1 Goals:**
- **Monthly visitors**: 10,000+
- **Listed tools**: 200+
- **Premium listings**: 10-20
- **Annual Revenue**: $30,000-60,000

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Credits

Built with ❤️ using Astro and Tailwind CSS.

Data sources: Public AI tool directories, product launches, community recommendations.
