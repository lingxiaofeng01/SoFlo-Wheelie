'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface GameCardProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  routePrefix?: string;
}

export function GameCard({ id, title, slug, description, thumbnail, category, tags, isNew, routePrefix }: GameCardProps) {
  const handleClick = () => {
    trackEvent('click_play', { game_id: id, game_title: title, source: 'game_card' });
  };

  // 根据 routePrefix 决定使用哪个路由，默认使用 wheelie-games
  const gameUrl = routePrefix ? `/${routePrefix}/${slug}` : `/wheelie-games/${slug}`;

  return (
    <Link
      href={gameUrl}
      onClick={handleClick}
      className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl border-2 border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all hover:transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/30 duration-300"
    >
      {/* Decorative Glow Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        <Image
          src={thumbnail}
          alt={`${title} - Wheelie motorcycle game`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-blue-600/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-blue-500/50 transform group-hover:scale-110 transition-transform">
            <span className="text-white text-2xl ml-1">▶</span>
          </div>
        </div>

        {/* NEW Badge */}
        {isNew && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/50 animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              NEW
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-block bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-400/30">
            {category}
          </span>
        </div>
      </div>

      <div className="relative p-5">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-700/60 text-slate-300 px-2.5 py-1 rounded-full border border-slate-600/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Play Now Indicator */}
        <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Play Now</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
