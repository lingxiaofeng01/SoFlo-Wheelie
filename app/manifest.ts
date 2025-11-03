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
        src: '/icon?<generated>',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon?<generated>',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable',
      },
    ],
    categories: ['games', 'entertainment', 'sports'],
    lang: 'en-US',
  };
}

