'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    trackEvent('click_back_to_top', { scroll_position: window.scrollY });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl border border-slate-600"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

