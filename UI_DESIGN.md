# UI Design Specification

## Design Philosophy
- **Minimal**: Clean, distraction-free interface
- **Fast**: Instant search, lazy loading
- **Mobile-first**: Responsive on all devices
- **Accessible**: ARIA labels, keyboard navigation
- **Dark mode**: System preference aware

---

## Color Palette

### Light Mode
- Background: `#ffffff`
- Surface: `#f9fafb`
- Text Primary: `#111827`
- Text Secondary: `#6b7280`
- Border: `#e5e7eb`
- Primary: `#0ea5e9` (Sky blue)
- Accent: `#d946ef` (Fuchsia)

### Dark Mode
- Background: `#0f172a`
- Surface: `#1e293b`
- Text Primary: `#f1f5f9`
- Text Secondary: `#94a3b8`
- Border: `#334155`
- Primary: `#38bdf8`
- Accent: `#e879f9`

---

## Typography

### Font Families
- **Sans**: Inter (primary), system-ui (fallback)
- **Mono**: Fira Code (code blocks)

### Scale
- **Heading 1**: 36px / 2.25rem (font-bold)
- **Heading 2**: 30px / 1.875rem (font-semibold)
- **Heading 3**: 24px / 1.5rem (font-semibold)
- **Body**: 16px / 1rem (font-normal)
- **Small**: 14px / 0.875rem (font-normal)
- **Tiny**: 12px / 0.75rem (font-medium)

---

## Components

### 1. Header (Navigation)

**Layout**: Sticky top, full-width

```
┌─────────────────────────────────────────────────┐
│  🤖 AI Tools     [Search...]    Categories ▼   │
└─────────────────────────────────────────────────┘
```

**Elements**:
- Logo + Site name (left)
- Search bar (center, expandable on mobile)
- Category dropdown (right)
- Theme toggle (far right)

**Responsive**:
- Desktop: All elements visible
- Mobile: Logo + hamburger menu

---

### 2. Hero Section (Homepage)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│        Discover the Best AI Tools for 2026     │
│       50+ curated tools across 10 categories   │
│                                                 │
│           [🔍 Search all tools...]              │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Gradient background**: Primary → Accent
**Text**: White, centered
**CTA**: Large search bar

---

### 3. Tool Card

```
┌──────────────────────────────────┐
│  [Logo]  Tool Name         ⭐    │
│          Category | Pricing      │
│                                  │
│  Short description (2 lines)     │
│                                  │
│  [tag1] [tag2] [tag3]            │
│                                  │
│  [Visit Site →]                  │
└──────────────────────────────────┘
```

**Variants**:
- Standard: Default card
- Featured: Border gradient (primary + accent)
- Premium: Gold badge

**Hover effect**: Lift shadow, scale(1.02)

---

### 4. Category Filter (Homepage)

```
┌─────────────────────────────────────────────────┐
│  [All] [Text] [Image] [Video] [Audio] [Code]   │
│  [Marketing] [Productivity] [Research] [...]    │
└─────────────────────────────────────────────────┘
```

**Layout**: Horizontal scroll (mobile), wrap (desktop)
**Active state**: Primary background, white text
**Inactive**: Border, gray text

---

### 5. Search Bar

**Desktop**:
```
┌─────────────────────────────────────────────────┐
│  🔍  Search 50+ AI tools...              [×]   │
└─────────────────────────────────────────────────┘
```

**Mobile**: Expands to full-screen overlay

**Features**:
- Instant search (Fuse.js)
- Debounced (300ms)
- Clear button
- Keyboard shortcut: `/` or `Cmd+K`

**Results dropdown**:
```
┌─────────────────────────────────────────────────┐
│  🤖 ChatGPT                                     │
│     Text Generation | Freemium                  │
│  ─────────────────────────────────────────────  │
│  🎨 Midjourney                                  │
│     Image Generation | Paid                     │
│  ─────────────────────────────────────────────  │
│  💻 GitHub Copilot                              │
│     Code Development | Paid                     │
└─────────────────────────────────────────────────┘
```

---

### 6. Tool Detail Page

**Layout**: Full-width hero + 2-column content

```
┌─────────────────────────────────────────────────┐
│  [Large Logo]  Tool Name              [Visit]  │
│                Category | Pricing | Tags        │
└─────────────────────────────────────────────────┘
┌──────────────────┬──────────────────────────────┐
│  Description     │  Sidebar:                    │
│  (full)          │  - Official site             │
│                  │  - Pricing details           │
│  Key Features:   │  - Tags                      │
│  - Feature 1     │  - Added date                │
│  - Feature 2     │                              │
│  - Feature 3     │  Similar tools:              │
│                  │  [Card] [Card] [Card]        │
└──────────────────┴──────────────────────────────┘
```

**Breadcrumbs**: Home > Category > Tool Name

---

### 7. Category Page

**Layout**: Grid of tool cards

```
┌─────────────────────────────────────────────────┐
│  Text Generation (3 tools)                      │
│  Conversational AI and writing assistants       │
└─────────────────────────────────────────────────┘
┌──────────┬──────────┬──────────┬──────────┐
│  Card 1  │  Card 2  │  Card 3  │  Card 4  │
│          │          │          │          │
└──────────┴──────────┴──────────┴──────────┘
```

**Grid**:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

---

### 8. Footer

```
┌─────────────────────────────────────────────────┐
│  AI Tools Aggregator © 2026                     │
│                                                 │
│  [About] [Submit Tool] [Contact] [Privacy]      │
│                                                 │
│  Built with Astro · Hosted on Vercel           │
└─────────────────────────────────────────────────┘
```

**Minimal**: Single line + links
**Center-aligned**

---

## Interactions

### Hover States
- **Links**: Underline
- **Buttons**: Darken background
- **Cards**: Lift + shadow

### Loading States
- **Skeleton**: Pulse animation
- **Spinner**: Rotating icon (rare)

### Empty States
- **No results**: "No tools found. Try different keywords."
- **404**: "Tool not found. Browse categories instead."

### Transitions
- **Page**: Fade in (200ms)
- **Cards**: Stagger (50ms delay per card)
- **Search results**: Instant (no delay)

---

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

### Mobile Optimizations
- Hamburger menu
- Single column cards
- Simplified hero (smaller text)
- Bottom nav (optional)

---

## Accessibility

### ARIA Labels
- Search: `aria-label="Search AI tools"`
- Cards: `aria-label="Tool: [Name]"`
- Links: Descriptive text

### Keyboard Navigation
- `/` or `Cmd+K`: Open search
- `Tab`: Navigate elements
- `Enter`: Activate link/button
- `Esc`: Close modal/dropdown

### Contrast
- WCAG AA compliant (4.5:1 minimum)
- Dark mode: 7:1 contrast

---

## Performance Targets

- **Lighthouse Score**: 95+ (all metrics)
- **FCP**: < 1.5s
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **TTI**: < 3.5s

### Optimization Strategies
- Image lazy loading
- Component code splitting
- Minimal JS (Astro static)
- CDN caching (Vercel)
- Preload critical assets

---

## Animation Guidelines

### Micro-interactions
- **Duration**: 150-300ms
- **Easing**: `ease-in-out`
- **Trigger**: Hover, focus, click

### Examples
```css
/* Card hover */
transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

/* Button press */
transition: background-color 150ms ease-in-out;

/* Fade in */
animation: fadeIn 300ms ease-in;
```

---

## Next Steps

1. ✅ Design spec complete
2. ⏭️ Create Layout.astro (base template)
3. ⏭️ Create ToolCard.astro component
4. ⏭️ Create Header.astro (navigation)
5. ⏭️ Create homepage (index.astro)
6. ⏭️ Implement search (Fuse.js)
7. ⏭️ Category pages
8. ⏭️ Tool detail pages

**Estimated time**: 4-6 hours for MVP UI

---

**Created**: 2026-02-10 12:55
**Status**: Draft → Ready for implementation
