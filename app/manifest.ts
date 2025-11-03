import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SoFlo Wheelie Life - Motorcycle Wheelie Game',
    short_name: 'SoFlo Wheelie',
    description: 'Master epic motorcycle wheelies through South Florida streets. Play instantly in your browser with no downloads required.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#7c3aed',
    orientation: 'landscape-primary',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    categories: ['games', 'entertainment', 'sports'],
    lang: 'en-US',
  };
}

