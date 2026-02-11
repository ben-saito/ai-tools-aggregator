# 🤖 AI Tools Aggregator

A comprehensive directory of the best AI tools for 2026, built with **Astro 5**, **Supabase**, and **Tailwind CSS**.

> 🚀 **Live Demo**: [ai-tools-aggregator-seven.vercel.app](https://ai-tools-aggregator-seven.vercel.app)

---

## ✨ Features

### Core Features
- 🎯 **50+ Curated Tools** - Hand-picked AI tools across 10 categories
- ⚡ **Blazing Fast** - Built with Astro 5 SSG + SSR hybrid for optimal performance
- 📱 **Responsive Design** - Mobile-first with Tailwind CSS
- 🔍 **Advanced Search** - Full-text search with filters (category, pricing, tags)
- 🏷️ **User-Generated Tags** - Community-driven categorization
- ⭐ **Favorites System** - Save tools for later
- 📊 **Leaderboard** - Daily top launches with voting

### Community Features
- ✍️ **User Reviews** - Rate and review tools (1-5 stars)
- 👍 **Helpful Votes** - Vote on helpful reviews
- 👤 **User Profiles** - Track contributions (reviews, upvotes, likes)
- 🚩 **Report System** - Flag inappropriate content
- ✏️ **Edit/Delete Reviews** - Manage your own reviews

### Monetization Features
- 💼 **Vendor Portal** - Tool creators can claim and manage listings
- 📧 **Lead Generation** - Capture qualified leads with smart widgets
- 📰 **Newsletter System** - Build subscriber base
- 🎯 **Premium Listings** - Featured placements (coming soon)

### Developer Features
- 🔌 **REST API v1** - Programmatic access to tool database
- 📄 **API Documentation** - Full endpoint reference
- 🔐 **Row Level Security** - Secure data access with Supabase RLS
- 🎨 **Component Library** - Reusable Astro components

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 20+** (recommended: use nodenv or nvm)
- **npm** or **pnpm**
- **Supabase Account** (for database)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-tools-aggregator.git
cd ai-tools-aggregator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Run database migrations
# (See Supabase Setup section below)

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

---

## 🗄️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Astro 5](https://astro.build) (SSG + SSR hybrid) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **Database** | [Supabase](https://supabase.com) (PostgreSQL + Auth + RLS) |
| **Deployment** | [Vercel](https://vercel.com) |
| **Language** | TypeScript |
| **Authentication** | Supabase Auth (OAuth + Magic Links) |
| **Storage** | Supabase Storage (avatars, media) |

---

## 📂 Project Structure

```
ai-tools-aggregator/
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── ToolCard.astro
│   │   ├── ReviewSection.astro
│   │   ├── TagInput.astro
│   │   ├── FavoriteButton.astro
│   │   └── Leaderboard.astro
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   ├── pages/              # File-based routing
│   │   ├── index.astro                # Home page
│   │   ├── search.astro               # Search page
│   │   ├── categories/[slug].astro    # Category pages
│   │   ├── tools/[slug].astro         # Tool detail pages
│   │   ├── profile/[id].astro         # User profiles
│   │   ├── favorites.astro            # User favorites
│   │   ├── vendor/                    # Vendor portal
│   │   └── api/v1/                    # REST API endpoints
│   ├── lib/                # Utilities and data
│   │   ├── tools.ts        # Tool data functions
│   │   ├── supabase.ts     # Supabase client
│   │   └── types.ts        # TypeScript types
│   └── styles/             # Global styles
├── supabase/
│   └── migrations/         # Database migrations
├── data/
│   └── tools.json          # Tools database (50+ tools)
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
└── vercel.json             # Vercel configuration
```

---

## 🗃️ Supabase Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your **Project URL** and **anon key**

### 2. Configure Environment Variables

Create `.env` file:

```env
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Run Migrations

Run each migration file in `supabase/migrations/` in order:

1. `initial_schema.sql` - Core tables (tools, profiles, reviews)
2. `launch_day_leaderboard.sql` - Leaderboard system
3. `vendor_portal.sql` - Vendor features
4. `lead_gen.sql` - Lead generation
5. `newsletter.sql` - Newsletter system
6. `verified_users.sql` - User verification
7. `spam_moderation.sql` - Report system
8. `tags_system.sql` - Tag system
9. `favorites_system.sql` - Favorites system

Run migrations in Supabase dashboard SQL editor.

---

## 🌐 API Documentation

### Endpoints

#### **GET** `/api/v1/tools`
Get paginated list of tools.

**Query Parameters:**
- `page` (default: 1)
- `limit` (default: 20, max: 100)
- `category` (optional)

**Example:**
```bash
curl https://ai-tools-aggregator-seven.vercel.app/api/v1/tools?page=1&limit=10
```

#### **GET** `/api/v1/tools/:id`
Get tool details by ID.

**Example:**
```bash
curl https://ai-tools-aggregator-seven.vercel.app/api/v1/tools/chatgpt
```

#### **GET** `/api/v1/search?q=query`
Search tools.

**Query Parameters:**
- `q` (required) - Search query
- `page` (default: 1)
- `limit` (default: 20)

#### **GET** `/api/v1/categories`
Get all categories with tool counts.

**Response Format:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 49,
    "totalPages": 3,
    "hasMore": true
  }
}
```

---

## 🎨 Customization

### Update Colors

Edit `tailwind.config.mjs`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        600: '#2563eb',
        // ...
      }
    }
  }
}
```

### Add Categories

Edit `src/lib/tools.ts`:

```ts
export const categories = [
  { 
    slug: 'new-category', 
    name: 'New Category', 
    icon: '🔥', 
    description: 'Description' 
  },
  // ...
];
```

---

## 📈 Roadmap & Progress

### ✅ Phase 1: MVP (Week 1) - COMPLETE
- [x] Project setup (Astro 5 + Tailwind + Supabase)
- [x] Tool database (50+ tools across 10 categories)
- [x] Homepage with featured tools
- [x] Category & tool detail pages
- [x] Basic search functionality
- [x] Responsive design
- [x] User authentication (Supabase Auth)

### ✅ Phase 2: Community Features (Week 2) - COMPLETE
- [x] User reviews and ratings
- [x] Helpful votes on reviews
- [x] User profiles with statistics
- [x] Edit/delete own reviews
- [x] Spam/report system
- [x] Leaderboard (daily top launches)

### ✅ Phase 3: Monetization (Week 3) - COMPLETE
- [x] Vendor portal (claim listings)
- [x] Lead generation widgets
- [x] Newsletter signup system
- [x] Verified user badges

### ✅ Phase 4: Engagement & Discovery (Week 3-4) - COMPLETE
- [x] User-generated tags
- [x] Favorites/collections system
- [x] Advanced search with filters
- [x] Tag-based discovery
- [x] Popular tags on homepage

### ✅ Phase 5: Optimization (Week 4) - COMPLETE
- [x] Performance optimization (Lighthouse 90+)
- [x] Mobile optimization
- [x] SEO optimization (Schema.org, sitemap)
- [x] REST API v1
- [x] Security headers
- [x] Cache optimization

### 🔄 Phase 6: Marketing (Week 5-6) - IN PROGRESS
- [ ] Product Hunt launch preparation
- [ ] Social media assets
- [ ] Email campaigns
- [ ] Content marketing
- [ ] SEO content creation

### 📋 Future Features
- [ ] Premium listings ($99/month)
- [ ] API rate limiting & authentication
- [ ] AI-powered recommendations
- [ ] Tool comparisons (side-by-side)
- [ ] Email notifications (review replies, new reviews)
- [ ] Advanced analytics dashboard

---

## 🎯 Business Model

### Free Tier
- Basic tool listing
- Category inclusion
- Search visibility
- Community features (reviews, tags)

### Premium Listing ($99/month)
- Featured on homepage
- Priority in search results
- Lead generation widget
- Enhanced listing (custom description, media)
- Analytics dashboard

### Sponsored Slots ($299/month)
- Top banner placement
- Category sponsorship
- Newsletter mentions
- Exclusive badges

---

## 📊 Target Metrics

| Metric | Month 2 | Month 6 | Year 1 |
|--------|---------|---------|--------|
| Monthly Visitors | 1,000 | 10,000 | 100,000 |
| Listed Tools | 100 | 200 | 500+ |
| Registered Users | 100 | 1,000 | 10,000 |
| Premium Listings | 2 | 10 | 30 |
| MRR | $200 | $1,000 | $3,000+ |

**Ultimate Goal:** 100億円 ($100M) valuation by Year 3

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-tools-aggregator)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Environment Variables

Required for production:

```env
PUBLIC_SUPABASE_URL=your-supabase-url
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - Free to use for any purpose.

---

## 🙏 Acknowledgments

- **Astro Team** - Amazing SSG framework
- **Supabase Team** - Powerful backend-as-a-service
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Seamless deployment platform

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/ai-tools-aggregator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/ai-tools-aggregator/discussions)
- **Email**: support@example.com

---

**Built with ❤️ for the AI community**

🌟 Star this repo if you find it useful!
