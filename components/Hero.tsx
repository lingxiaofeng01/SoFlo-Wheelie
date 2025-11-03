'use client';

import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  onPlayClick: () => void;
  onLearnMoreClick: () => void;
}

export function Hero({ title, subtitle, ctaPrimary, ctaSecondary, onPlayClick, onLearnMoreClick }: HeroProps) {
  const handlePlayClick = () => {
    trackEvent('click_play', { location: 'hero' });
    onPlayClick();
  };

  const handleLearnMoreClick = () => {
    trackEvent('view_keys_help', { location: 'hero' });
    onLearnMoreClick();
  };

  return (
    <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          {title}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button
            size="lg"
            onClick={handlePlayClick}
            className="min-w-[200px] h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/60"
            aria-label="Start playing SoFlo Wheelie now"
          >
            {ctaPrimary}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleLearnMoreClick}
            className="min-w-[200px] h-14 text-lg font-semibold border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50"
            aria-label="Learn how to play SoFlo Wheelie"
          >
            {ctaSecondary}
          </Button>
        </div>

        <div className="mt-12 sm:mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
