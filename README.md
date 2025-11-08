# SoFlo Wheelie Life 🏍️

Master epic motorcycle wheelies through South Florida streets. Play instantly in your browser with no downloads required.

**Live Site**: [www.soflowheelie.com](https://www.soflowheelie.com)

A production-ready, high-performance game collection website built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **Instant Play**: Game embedded directly in the page with full-screen option
- **Dedicated Play Page**: `/play` route for distraction-free gaming
- **Keyboard Controls**: Interactive keyboard guide with copy-to-clipboard
- **Mobile Responsive**: Optimized for all devices with mobile-specific warnings
- **Loading States**: Robust error handling with retry mechanism

### Performance Optimizations
- **Web Vitals Monitoring**: Real-time Core Web Vitals tracking
- **Font Optimization**: `font-display: swap` for Inter font
- **Image Optimization**: Next.js Image component with WebP format
- **Static Generation**: All pages pre-rendered at build time
- **Lazy Loading**: Components loaded on-demand

### SEO & Discoverability
- **Structured Data**: JSON-LD schema for WebSite, VideoGame, and FAQPage
- **Open Graph Tags**: Optimized social media sharing
- **Twitter Cards**: Enhanced Twitter/X previews
- **Sitemap & Robots**: Auto-generated `/sitemap.xml` and `/robots.txt`
- **Semantic HTML**: Proper heading hierarchy (H1, H2)
- **Meta Tags**: Comprehensive keywords and descriptions

### Analytics & Tracking
- **Event Tracking**: 14+ tracked events including:
  - `view_home`: Page views
  - `click_play`: CTA clicks
  - `game_load_start/success/error`: Game loading lifecycle
  - `enter/exit_fullscreen`: Fullscreen interactions
  - `faq_expand`: FAQ engagement
  - `copy_keys`: Keyboard controls copied
- **Device Detection**: Automatic device type classification
- **Performance Metrics**: LCP, CLS, FID, TTFB tracking

### User Experience
- **Smooth Scrolling**: Animated scroll to game/controls sections
- **Keyboard Shortcuts**:
  - `?` - Toggle controls help (on /play)
  - `Ctrl+F` - Fullscreen toggle
  - `ESC` - Close modals
- **Copy Controls**: One-click copy for all keyboard commands
- **FAQ Accordion**: Collapsible Q&A section
- **Loading Indicators**: Visual feedback for game loading

### Accessibility
- **ARIA Labels**: Proper accessibility attributes
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG 2.1 AA compliant
- **Screen Reader**: Semantic HTML structure
- **Focus Management**: Visible focus indicators

## Project Structure

```
/app
  /games                    - All Games listing page (13 games)
    /[slug]                 - New games detail pages (4 games)
      page.tsx              - Dynamic route for new games
    page.tsx                - All Games listing
  /wheelie-games            - Wheelie Games listing page (9 games)
    /[slug]                 - Wheelie games detail pages
      page.tsx              - Dynamic route for wheelie games
    page.tsx                - Wheelie Games listing
  /privacy-policy           - Privacy policy
  /terms-of-service         - Terms of service
  layout.tsx                - Root layout with metadata
  page.tsx                  - Home page
  robots.ts                 - Robots.txt generator
  manifest.ts               - PWA manifest generator

/components
  BackToTop.tsx             - Scroll to top button
  BookmarkButton.tsx        - Bookmark functionality
  BreadcrumbNav.tsx         - Breadcrumb navigation
  Faq.tsx                   - FAQ accordion
  FeatureList.tsx           - Feature cards grid
  Footer.tsx                - Site footer
  GameCard.tsx              - Game card component (supports dynamic routing)
  GameEmbed.tsx             - Game iframe with error handling
  GamesList.tsx             - Games grid display
  Hero.tsx                  - Hero section with CTAs
  KeysHelp.tsx              - Interactive keyboard guide
  Navigation.tsx            - Main navigation menu
  SearchDialog.tsx          - Search functionality
  ShareButton.tsx           - Social sharing
  StickyPlayButton.tsx      - Sticky play button
  ThemeToggle.tsx           - Dark/light mode toggle
  ToolBar.tsx               - Top toolbar with utilities
  WebVitals.tsx             - Performance monitoring
  /ui                       - shadcn/ui components

/content
  en.json                   - All site content (centralized)

/lib
  analytics.ts              - Event tracking utilities
  utils.ts                  - Helper functions

/public
  *.png, *.svg, *.webp      - Images and favicons
  sitemap.xml               - Auto-generated sitemap

/scripts
  generate-sitemap.js       - Sitemap generation script
  check-canonical.js        - Canonical URL verification
  check-favicons.js         - Favicon verification
```

## Content Management

All text content is centralized in `/content/en.json` for easy updates:

```json
{
  "hero": {
    "title": "...",
    "subtitle": "...",
    "cta": "Play Now"
  },
  "features": [...],
  "controls": {...},
  "faq": [...]
}
```

## Performance Budget

Target metrics (as specified):
- **LCP**: ≤ 2.5s (mobile)
- **CLS**: ≤ 0.1
- **TBT**: ≤ 200ms
- **First Load JS**: < 110 kB (achieved: 107 kB for home)

## Analytics Events

### Key Conversion Events
1. `click_play` - Play button clicks (primary KPI)
2. `game_load_success` - Successful game loads
3. `start_game` - User begins playing

### Engagement Events
- `scroll_to_game` - Hero CTA scrolls
- `view_keys_help` - Controls viewed
- `faq_expand` - FAQ interactions
- `copy_keys` - Control commands copied

### Technical Events
- `game_load_error` - Loading failures
- `game_retry` - Retry attempts
- `enter/exit_fullscreen` - Fullscreen usage

## SEO Highlights

- **Structured Data**: VideoGame, FAQPage, WebSite schemas
- **Meta Description**: 155 characters, keyword-optimized
- **Title Tag**: 58 characters with primary keyword
- **Canonical URL**: Set to avoid duplicate content
- **Image Alt Text**: Descriptive for all images
- **Internal Linking**: Privacy/Terms linked in footer

## Development

```bash
npm install
npm run dev     # Development server
npm run build   # Production build
npm run start   # Production server
```

## Deployment

Optimized for:
- Vercel (recommended)
- Netlify
- Any static hosting platform

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome Android (last 2 versions)

## Legal Pages

- `/privacy-policy` - GDPR/privacy compliance
- `/terms-of-service` - Terms and conditions

## Future Enhancements

Potential additions (not in MVP):
- A/B testing framework
- Changelog page (`/changelog`)
- Multi-language support (i18n)
- User authentication
- Leaderboard/scoring system
- Social sharing buttons

## 🎮 Game Management System

### URL Structure & Routing

The site uses a **dual-route system** to organize games:

#### 1. `/games` Route (All Games - 13 total)
- **Purpose**: All games collection (new games + wheelie games)
- **Listing Page**: `/games` - Shows all 13 games in reverse chronological order
- **Detail Pages**: `/games/{slug}` - For 4 new games only
- **Games**:
  - Crazy Animal City
  - Dancing Beat
  - Cowboy Safari
  - Rocket Fortress

#### 2. `/wheelie-games` Route (Wheelie Games - 9 total)
- **Purpose**: Motorcycle/wheelie-specific games
- **Listing Page**: `/wheelie-games` - Shows 9 wheelie games only
- **Detail Pages**: `/wheelie-games/{slug}` - For 9 wheelie games
- **Games**:
  - Wheelie Up
  - Wheelie Bike
  - Street Wheelie
  - Wheelie Life Honda Odyssey
  - Wheelie Life 2
  - Wheelie Life Scratch
  - Stunt Bike Extreme
  - Wheelie Life ggIsaac24
  - Wheelie Cross

### Adding New Games

#### Step 1: Add Game Data to `content/en.json`

Add the game object to the **beginning** of the `games.list` array:

```json
{
  "id": "game-slug",
  "title": "Game Title",
  "slug": "game-slug",
  "description": "Short description (150-200 chars)",
  "thumbnail": "https://...",
  "iframeUrl": "https://...",
  "category": "Action|Music|Adventure|Wheelie",
  "tags": ["tag1", "tag2", "tag3"],
  "isNew": true,
  "routePrefix": "games",  // "games" for new games, omit for wheelie games
  "fullDescription": {
    "intro": "1000+ words detailed introduction...",
    "gameplay": "Gameplay description...",
    "howToPlay": ["Step 1", "Step 2", ...],
    "features": ["Feature 1", "Feature 2", ...],
    "tips": ["Tip 1", "Tip 2", ...],
    "whyPlay": "Why play this game...",
    "challenging": "Challenge description...",
    "developer": "Developer info..."
  }
}
```

#### Step 2: Determine Route Prefix

**For New Games** (non-wheelie games):
```json
"routePrefix": "games"
```
- Will use `/games/{slug}` URL
- Will appear in All Games listing
- Will NOT appear in Wheelie Games listing

**For Wheelie Games** (motorcycle games):
```json
// Omit routePrefix or set to "wheelie-games"
```
- Will use `/wheelie-games/{slug}` URL
- Will appear in both All Games and Wheelie Games listings

#### Step 3: Game Content Requirements

**Required Fields**:
- `id`, `title`, `slug` - Must be identical
- `description` - 150-200 characters for SEO
- `thumbnail` - Game preview image URL
- `iframeUrl` - Embeddable game URL
- `category` - Game category
- `tags` - Array of 5-7 relevant tags
- `isNew` - Set to `true` for new games

**Full Description** (1000+ words total):
- `intro` - Game introduction (200+ words)
- `gameplay` - How the game works (200+ words)
- `howToPlay` - Array of 5-10 step-by-step instructions
- `features` - Array of 10-15 key features
- `tips` - Array of 15-20 gameplay tips
- `whyPlay` - Why players should try this game (100+ words)
- `challenging` - What makes it challenging (100+ words)
- `developer` - Developer information

#### Step 4: Automatic Updates

Once added to `content/en.json`, the following will update automatically:

✅ **Homepage**:
- New Games section (shows first 4 games)
- More Wheelie Games section (shows wheelie games only)

✅ **Listing Pages**:
- `/games` - Shows all games
- `/wheelie-games` - Shows wheelie games only

✅ **Detail Pages**:
- Automatically generated via dynamic routes
- SEO metadata auto-populated
- Breadcrumb navigation auto-configured

✅ **Navigation**:
- GameCard components auto-route to correct URL
- All internal links auto-updated

✅ **Sitemap**:
- Run `npm run build` to regenerate sitemap
- New game URLs automatically added

### Homepage Game Sections

#### 1. New Games Section
- **Location**: Below FAQ section
- **Display**: First 4 games from `content.games.list`
- **Layout**: 4-column grid (responsive)
- **Link**: "View All Games" → `/games`
- **Logic**:
```javascript
content.games.list.slice(0, 4)
```

#### 2. More Wheelie Games Section
- **Location**: Below game embed section
- **Display**: First 8 wheelie games only
- **Layout**: 3-column grid (responsive)
- **Link**: Implicit links to `/wheelie-games/{slug}`
- **Logic**:
```javascript
content.games.list
  .filter(game => !game.routePrefix || game.routePrefix === 'wheelie-games')
  .slice(0, 8)
```

### Game Card Component

The `GameCard` component intelligently routes based on `routePrefix`:

```typescript
const routePrefix = game.routePrefix || 'wheelie-games';
const gameUrl = `/${routePrefix}/${game.slug}`;
```

**Features**:
- Dynamic routing based on game type
- NEW badge for `isNew: true` games
- Hover effects and animations
- Responsive image loading
- Tag display (first 2 tags)

### SEO & Metadata

Each game page includes:
- **Title**: `{Game Title} - Play Free Online Game`
- **Description**: From game.description
- **Keywords**: From game.tags
- **Canonical URL**: `https://www.soflowheelie.com/{routePrefix}/{slug}`
- **Open Graph**: Title, description, image, URL
- **Breadcrumbs**: Auto-generated based on route

### Sitemap Generation

Run after adding games:
```bash
npm run build  # Automatically runs generate-sitemap.js
```

Or manually:
```bash
node scripts/generate-sitemap.js
```

**Output**:
```
✅ Sitemap generated successfully!
📍 Location: public/sitemap.xml
📊 Total URLs: 18
🎮 Total game pages: 13
   ├─ /games route: 4 games
   └─ /wheelie-games route: 9 games
```

## 🎨 Favicon & Branding

Complete favicon system with:
- SVG vector icon for modern browsers
- Multiple PNG sizes (16x16, 32x32, 48x48, 180x180, 192x192, 512x512)
- Open Graph image (1200x630) for social sharing
- PWA manifest for mobile app experience
- Optimized for all platforms (Web, iOS, Android)

## 📐 Design & UI Guidelines

### Color Scheme
- **Background**: Gradient from slate-900 to slate-800
- **Primary**: Blue-400 to Purple-400 gradient
- **Accent**: Pink-400 for highlights
- **Text**: White for headings, slate-300 for body, slate-400 for muted
- **Borders**: slate-700 default, blue-500/50 on hover

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text-clip
- **Body**: Regular, slate-300
- **Sizes**:
  - H1: 4xl-6xl (responsive)
  - H2: 3xl-4xl
  - H3: 2xl-3xl
  - Body: base-lg

### Component Patterns

#### Game Cards
```tsx
- Aspect ratio: 16:9 for thumbnails
- Border: slate-700, hover: blue-500/50
- Background: slate-800/30 with backdrop-blur
- Hover: scale-105 transform
- NEW badge: Pink-to-purple gradient
- Tags: Max 2 visible, slate-700/50 background
```

#### Buttons
```tsx
- Primary: Blue-to-purple gradient
- Secondary: slate-700
- Hover: scale-105 + shadow enhancement
- Icons: Leading or trailing
- Padding: px-6 py-3 (standard)
```

#### Sections
```tsx
- Padding: py-12 sm:py-16
- Max width: 7xl (1280px)
- Background: Gradient overlays with blur
- Border: slate-700/50 rounded-2xl
```

### Responsive Breakpoints
- **Mobile**: Default (< 640px)
- **Tablet**: sm: (≥ 640px)
- **Desktop**: md: (≥ 768px), lg: (≥ 1024px)
- **Wide**: xl: (≥ 1280px)

### Grid Layouts
- **Game Cards**: 1 col (mobile) → 2 cols (tablet) → 3-4 cols (desktop)
- **Features**: 1 col → 2 cols → 3 cols
- **Stats**: 1 col → 3 cols

## 🔧 Development Guidelines

### Code Style
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with hooks
- **Props**: TypeScript interfaces for all props
- **Naming**: PascalCase for components, camelCase for functions
- **Files**: One component per file

### Component Structure
```tsx
// 1. Imports
import { useState } from 'react';
import Link from 'next/link';

// 2. Types/Interfaces
interface GameCardProps {
  title: string;
  slug: string;
  // ...
}

// 3. Component
export function GameCard({ title, slug }: GameCardProps) {
  // 4. Hooks
  const [isHovered, setIsHovered] = useState(false);

  // 5. Handlers
  const handleClick = () => {
    // ...
  };

  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Content Management
- **All text**: Store in `content/en.json`
- **Images**: Store in `/public` or use CDN URLs
- **Game data**: Centralized in `content.games.list`
- **No hardcoded text**: Always reference content object

### Performance Best Practices
1. **Images**: Use Next.js Image component
2. **Lazy Loading**: Use dynamic imports for heavy components
3. **Code Splitting**: Automatic with Next.js App Router
4. **Fonts**: Preload critical fonts
5. **Analytics**: Load asynchronously

### SEO Checklist
- [ ] Unique title tag (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL set
- [ ] Open Graph tags
- [ ] Structured data (JSON-LD)
- [ ] Alt text for all images
- [ ] Semantic HTML (h1, h2, h3)
- [ ] Internal linking
- [ ] Mobile-friendly
- [ ] Fast loading (< 3s)

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Run `npm run build` successfully
- [ ] Check for TypeScript errors
- [ ] Verify all images load
- [ ] Test on mobile devices
- [ ] Check all internal links
- [ ] Verify sitemap.xml generated
- [ ] Test game embeds work
- [ ] Check canonical URLs
- [ ] Verify meta tags

### Post-Deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt accessible
- [ ] Test social sharing (OG tags)
- [ ] Check Core Web Vitals
- [ ] Monitor analytics events
- [ ] Test on different browsers
- [ ] Verify HTTPS working
- [ ] Check mobile responsiveness

## 📊 Analytics & Monitoring

### Key Metrics to Track
1. **Traffic**: Page views, unique visitors
2. **Engagement**: Time on page, bounce rate
3. **Conversions**: Play button clicks, game loads
4. **Performance**: LCP, CLS, FID, TTFB
5. **Errors**: Game load failures, 404s

### Event Tracking
All events are tracked via `lib/analytics.ts`:
```typescript
trackEvent('event_name', {
  category: 'category',
  label: 'label',
  value: 123
});
```

## 🐛 Troubleshooting

### Common Issues

#### Game Not Loading
1. Check iframe URL is correct
2. Verify CORS headers allow embedding
3. Check browser console for errors
4. Test in incognito mode

#### Build Errors
1. Clear `.next` directory: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run type-check`
4. Verify all imports are correct

#### Sitemap Not Updating
1. Run: `node scripts/generate-sitemap.js`
2. Check `public/sitemap.xml` exists
3. Verify game data in `content/en.json`
4. Rebuild: `npm run build`

#### Images Not Showing
1. Check file exists in `/public`
2. Verify URL is correct (case-sensitive)
3. Check Next.js Image component props
4. Verify external URLs are accessible

## 📝 Content Writing Guidelines

### Game Descriptions
- **Short Description**: 150-200 characters, SEO-optimized
- **Introduction**: 200+ words, engaging hook
- **Gameplay**: 200+ words, detailed mechanics
- **Features**: 10-15 bullet points
- **Tips**: 15-20 actionable tips
- **Total**: 1000+ words for SEO

### Tone & Voice
- **Enthusiastic**: Use exciting language
- **Clear**: Avoid jargon, explain mechanics
- **Action-oriented**: Use verbs (master, conquer, unlock)
- **Player-focused**: Address reader as "you"

### SEO Keywords
- Include primary keyword in first 100 words
- Use variations naturally throughout
- Add keywords to headings (H2, H3)
- Include in meta description
- Use in image alt text

## 🔐 Security Best Practices

### Content Security
- Validate all external iframe URLs
- Use HTTPS for all resources
- Sanitize user inputs (if any)
- Keep dependencies updated

### Privacy Compliance
- Privacy policy page included
- Terms of service page included
- Analytics opt-out available
- No personal data collection without consent

## 🌐 Browser Compatibility

### Tested Browsers
- ✅ Chrome 120+ (Desktop & Mobile)
- ✅ Firefox 120+
- ✅ Safari 17+ (Desktop & iOS)
- ✅ Edge 120+
- ✅ Samsung Internet 23+

### Fallbacks
- CSS Grid → Flexbox
- Modern JS → Babel transpilation
- WebP → PNG fallback
- SVG → PNG fallback

## 📚 Additional Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [React](https://react.dev)

### Tools
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse)
- [Schema Markup Validator](https://validator.schema.org)

## 🤝 Contributing

When adding new features or games:
1. Follow existing code patterns
2. Update `content/en.json` for new content
3. Test on multiple devices
4. Run build before committing
5. Update README if needed
6. Regenerate sitemap

## License

Game created by LucasTheSigmaMogger on Scratch.
Website implementation © 2025 SoFlo Wheelie Life. All rights reserved.
