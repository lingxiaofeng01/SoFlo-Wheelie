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
  /play              - Full-screen game page
  /privacy-policy    - Privacy policy
  /terms-of-service  - Terms of service
  layout.tsx         - Root layout with metadata
  page.tsx           - Home page
  robots.ts          - Robots.txt generator
  sitemap.ts         - Sitemap generator

/components
  Hero.tsx           - Hero section with CTAs
  FeatureList.tsx    - Feature cards grid
  GameEmbed.tsx      - Game iframe with error handling
  KeysHelp.tsx       - Interactive keyboard guide
  Faq.tsx            - FAQ accordion
  WebVitals.tsx      - Performance monitoring
  /ui                - shadcn/ui components

/content
  en.json            - All site content (easily editable)

/lib
  analytics.ts       - Event tracking utilities
  utils.ts           - Helper functions

/public
  soflo-wheelie-game.webp - Game preview image
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

## 🎮 Available Games

1. **Wheelie Up** - Master the art of balance
2. **Wheelie Bike** - Classic wheelie action
3. **Street Wheelie** - Urban street racing

## 🎨 Favicon & Branding

Complete favicon system with:
- SVG vector icon for modern browsers
- Multiple PNG sizes (16x16, 32x32, 48x48, 180x180, 192x192, 512x512)
- Open Graph image (1200x630) for social sharing
- PWA manifest for mobile app experience
- Optimized for all platforms (Web, iOS, Android)

## License

Game created by LucasTheSigmaMogger on Scratch.
Website implementation © 2025 SoFlo Wheelie Life. All rights reserved.
