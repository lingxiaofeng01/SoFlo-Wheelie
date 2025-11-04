'use client';

import { useState } from 'react';
import { Bookmark, Check, Star } from 'lucide-react';

interface BookmarkButtonProps {
  variant?: 'icon' | 'button' | 'hero';
}

export function BookmarkButton({ variant = 'icon' }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleBookmark = () => {
    // Detect browser type and show appropriate instructions
    const userAgent = navigator.userAgent.toLowerCase();
    const isChrome = userAgent.includes('chrome') && !userAgent.includes('edge');
    const isFirefox = userAgent.includes('firefox');
    const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome');
    const isEdge = userAgent.includes('edge') || userAgent.includes('edg/');

    let message = '';

    if (isChrome || isEdge) {
      message = 'Press Ctrl+D (Windows) or Cmd+D (Mac) to bookmark this page';
    } else if (isFirefox) {
      message = 'Press Ctrl+D (Windows) or Cmd+D (Mac) to bookmark this page';
    } else if (isSafari) {
      message = 'Press Cmd+D to bookmark this page';
    } else {
      message = 'Use your browser\'s bookmark feature to save this page';
    }

    // Show instructions
    alert(`📌 ${message}\n\nOr click the star icon in your browser's address bar ⭐`);

    setIsBookmarked(true);
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  // 图标按钮样式 (用于ToolBar)
  if (variant === 'icon') {
    return (
      <div className="relative">
        <button
          onClick={handleBookmark}
          className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all hover:scale-110 group"
          aria-label="Bookmark this page"
          title="收藏本页面"
        >
          {isBookmarked ? (
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ) : (
            <Bookmark className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
          )}
        </button>

        {showTooltip && (
          <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-slate-800 text-white text-xs rounded-lg shadow-xl whitespace-nowrap z-50 animate-in fade-in slide-in-from-top-2">
            ✅ Bookmark instructions shown
          </div>
        )}
      </div>
    );
  }

  // Regular button style
  if (variant === 'button') {
    return (
      <button
        onClick={handleBookmark}
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white rounded-lg transition-all hover:scale-105 border border-slate-700/50 hover:border-slate-600"
      >
        {isBookmarked ? (
          <>
            <Check className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Bookmarked</span>
          </>
        ) : (
          <>
            <Bookmark className="w-4 h-4" />
            <span className="text-sm font-medium">Bookmark Page</span>
          </>
        )}
      </button>
    );
  }

  // Hero area large button style
  if (variant === 'hero') {
    return (
      <button
        onClick={handleBookmark}
        className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-white rounded-xl transition-all hover:scale-105 border-2 border-purple-500/30 hover:border-purple-400/50 shadow-lg hover:shadow-purple-500/25"
      >
        <div className="relative">
          {isBookmarked ? (
            <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400 animate-pulse" />
          ) : (
            <Bookmark className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300 group-hover:text-purple-200 transition-colors" />
          )}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            {isBookmarked ? 'Bookmarked!' : 'Bookmark This Site'}
          </span>
          <span className="text-xs text-slate-400 group-hover:text-slate-300">
            Quick access to games
          </span>
        </div>
      </button>
    );
  }

  return null;
}

