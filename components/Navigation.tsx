'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Bike } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToGame = () => {
    // 首页使用window.scrollTo滚动到顶部(游戏在顶部)
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      trackEvent('click_play', { source: 'nav_play_button' });
    }
  };

  const scrollToHowToPlay = () => {
    const howToPlaySection = document.getElementById('usage');
    if (howToPlaySection) {
      howToPlaySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      trackEvent('click_how_to_play', { source: 'nav_how_to_play' });
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleLinkClick = (label: string) => {
    trackEvent('click_nav', { nav_item: label, source: 'navigation' });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/98 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
            onClick={() => handleLinkClick('Logo')}
          >
            <Bike className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SoFlo Wheelie Life
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {pathname === '/' ? (
              <>
                <button
                  onClick={scrollToGame}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="10 8 16 12 10 16 10 8"/>
                  </svg>
                  <span className="text-sm font-normal">Play Now</span>
                </button>
                <button
                  onClick={scrollToHowToPlay}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                  <span className="text-sm font-normal">How to Play</span>
                </button>
              </>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                onClick={() => handleLinkClick('Home')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span className="text-sm font-normal">Home</span>
              </Link>
            )}
            <Link
              href="/wheelie-games"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => handleLinkClick('Wheelie Games')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
              <span className="text-sm font-normal">Wheelie Games</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col gap-2">
              {pathname === '/' ? (
                <>
                  <button
                    onClick={() => {
                      scrollToGame();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-left"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="10 8 16 12 10 16 10 8"/>
                    </svg>
                    <span className="text-sm">Play Now</span>
                  </button>
                  <button
                    onClick={() => {
                      scrollToHowToPlay();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors text-left"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                    <span className="text-sm">How to Play</span>
                  </button>
                </>
              ) : (
                <Link
                  href="/"
                  className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                  onClick={() => handleLinkClick('Home')}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span className="text-sm">Home</span>
                </Link>
              )}
              <Link
                href="/wheelie-games"
                className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                onClick={() => handleLinkClick('Wheelie Games')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
                <span className="text-sm">Wheelie Games</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
