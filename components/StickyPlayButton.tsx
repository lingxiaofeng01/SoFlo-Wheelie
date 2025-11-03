'use client';

import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export function StickyPlayButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 显示按钮当用户滚动超过 300px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlayClick = () => {
    trackEvent('click_play', {
      source: 'sticky_button',
      scroll_position: window.scrollY
    });

    // 滚动到页面顶部的游戏区域
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    trackEvent('dismiss_sticky_cta', { scroll_position: window.scrollY });
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="relative group">
        {/* 关闭按钮 */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* 主按钮 */}
        <button
          onClick={handlePlayClick}
          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-4 rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all hover:scale-105 active:scale-95"
          aria-label="Play SoFlo Wheelie in full screen"
        >
          <Play className="w-5 h-5 fill-white" />
          <span className="text-lg">Play Now</span>
        </button>

        {/* 脉冲动画效果 */}
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping pointer-events-none" />
      </div>
    </div>
  );
}

