import { MetadataRoute } from 'next';
import content from '@/content/en.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.soflowheelie.com';
  const currentDate = new Date();

  // Dynamic game pages - High priority for game content
  const gamePages = content.games.list.map((game) => ({
    url: `${baseUrl}/wheelie-games/${game.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    // Homepage - Highest priority, updated daily
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Wheelie Games List - High priority, updated weekly
    {
      url: `${baseUrl}/wheelie-games`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Individual game pages
    ...gamePages,
    // Legal pages - Low priority, rarely updated
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
