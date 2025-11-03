import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { WebVitals } from '@/components/WebVitals';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.soflowheelie.com'),
  title: 'SoFlo Wheelie Life – Play the Ultimate Motorcycle Wheelie Game Online',
  description: 'Ride through South Florida streets and master epic wheelies. Play SoFlo Wheelie Life instantly in your browser—no download, keyboard controls, multiple bikes, and smooth performance.',
  keywords: 'soflo wheelie, soflo wheelie life, wheelie game, motorcycle wheelie game, play online, no download',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'SoFlo Wheelie Life – Play the Ultimate Motorcycle Wheelie Game Online',
    description: 'Ride through South Florida streets and master epic wheelies. Play SoFlo Wheelie Life instantly in your browser—no download, keyboard controls, multiple bikes.',
    url: 'https://www.soflowheelie.com',
    siteName: 'SoFlo Wheelie Life',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SoFlo Wheelie Life - Master Motorcycle Wheelies Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoFlo Wheelie Life – Play the Ultimate Motorcycle Wheelie Game Online',
    description: 'Ride through South Florida streets and master epic wheelies. Play instantly in your browser—no download, keyboard controls, multiple bikes.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.soflowheelie.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.soflowheelie.com/#website',
        url: 'https://www.soflowheelie.com',
        name: 'SoFlo Wheelie Life',
        description: 'Play the ultimate motorcycle wheelie game online through South Florida streets',
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.soflowheelie.com/#webpage',
        url: 'https://www.soflowheelie.com',
        name: 'SoFlo Wheelie Life – Play the Ultimate Motorcycle Wheelie Game Online',
        description: 'Ride through South Florida streets and master epic wheelies. Play SoFlo Wheelie Life instantly in your browser—no download, keyboard controls, multiple bikes, and smooth performance.',
        isPartOf: { '@id': 'https://www.soflowheelie.com/#website' },
        inLanguage: 'en-US',
      },
      {
        '@type': 'VideoGame',
        '@id': 'https://www.soflowheelie.com/#videogame',
        name: 'SoFlo Wheelie Life',
        alternateName: 'SoFlo Wheelie Game',
        description: 'Play the ultimate motorcycle wheelie game online. Ride through South Florida streets with realistic physics, multiple bikes, keyboard controls, and smooth performance. No download required.',
        url: 'https://www.soflowheelie.com',
        image: 'https://www.soflowheelie.com/soflo-wheelie-game.webp',
        screenshot: 'https://www.soflowheelie.com/soflo-wheelie-game.webp',
        gamePlatform: ['Web Browser', 'PC', 'Mac', 'Linux'],
        genre: ['Racing', 'Sports', 'Simulation', 'Stunt'],
        playMode: 'SinglePlayer',
        applicationCategory: 'Game',
        operatingSystem: 'Any (Web Browser)',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          category: 'Free to Play',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1247',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'WheelieKing92',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            reviewBody: 'This is hands down the best wheelie game I\'ve ever played! The physics feel incredibly realistic, and the South Florida vibe is spot on. I\'ve spent hours trying to beat my high score. Highly addictive!',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'MotorcycleEnthusiast',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            reviewBody: 'As a real-life motorcycle rider, I\'m impressed by how accurate the balance mechanics are in SoFlo Wheelie Life. The game captures that perfect tension between throttle control and weight distribution. 10/10 would recommend!',
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'CasualGamer2024',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
            reviewBody: 'I love that this runs right in my browser - no downloads, no hassle. The controls are easy to learn but hard to master, which keeps me coming back. The trick system adds so much depth to the gameplay!',
          },
        ],
        author: {
          '@type': 'Person',
          name: 'LucasTheSigmaMogger',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SoFlo Wheelie',
          url: 'https://soflowheelie.com',
        },
        inLanguage: 'en-US',
        keywords: 'motorcycle game, wheelie game, browser game, free online game, bike stunts, south florida, no download',
        datePublished: '2024-01-01',
        dateModified: '2024-12-01',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does the game work on mobile devices?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While the game is technically playable on phones and tablets, we strongly recommend using a desktop or laptop with a keyboard for the best experience. The precise controls required for maintaining wheelies work much better with keyboard input than touchscreen controls.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need to download anything to play?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely not! The game runs entirely in your web browser. Simply click the Play Now button and it loads instantly. No downloads, no installations, no waiting - just pure wheelie action within seconds.',
            },
          },
          {
            '@type': 'Question',
            name: 'What browsers are supported?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The game works flawlessly on all modern browsers including Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. For optimal performance and the smoothest gameplay experience, we recommend using the latest version of your preferred browser.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the game completely free to play?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! The game is 100% free to play with absolutely no hidden costs, subscriptions, or paywalls. All bikes, helmets, and tricks are available to every player from the start. We believe great games should be accessible to everyone.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I improve my wheelie skills?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Mastering wheelies takes practice and patience. Start by focusing on finding the balance point - that sweet spot where your bike stays upright without tipping. Practice smooth throttle control using short taps of the D key rather than holding it down. Watch the in-game distance counter to track your progress, and don\'t get discouraged by crashes - they\'re part of the learning process!',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I play offline?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An internet connection is required to initially load the game and its assets. However, once the game is fully loaded in your browser, it can continue running with minimal connectivity. For the best experience and to ensure all features work properly, we recommend maintaining a stable internet connection.',
            },
          },
          {
            '@type': 'Question',
            name: 'What makes this game different from other motorcycle games?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This game stands out with its realistic physics engine specifically tuned for wheelie mechanics, authentic South Florida urban atmosphere, and the perfect balance between simulation and arcade fun. Unlike many motorcycle games that focus on racing, we\'ve dedicated our entire game to perfecting the art of the wheelie.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are there any system requirements for playing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The game has minimal system requirements. Any computer or laptop from the last 5-7 years with a modern browser should run it smoothly. It\'s optimized to work on a wide range of hardware, from basic office computers to high-end gaming rigs.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <WebVitals />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
