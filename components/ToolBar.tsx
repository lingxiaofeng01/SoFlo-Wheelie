'use client';

import { SearchDialog } from './SearchDialog';
import { ThemeToggle } from './ThemeToggle';
import { ShareButton } from './ShareButton';
import { BookmarkButton } from './BookmarkButton';

interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  isNew?: boolean;
}

interface ToolBarProps {
  games: Game[];
  shareTitle?: string;
  shareDescription?: string;
  shareUrl?: string;
}

export function ToolBar({ games, shareTitle, shareDescription, shareUrl }: ToolBarProps) {
  return (
    <div className="fixed top-20 right-4 z-[100] flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-2 shadow-2xl hover:shadow-blue-500/20 transition-shadow">
      <SearchDialog games={games} />
      <BookmarkButton variant="icon" />
      <ThemeToggle />
      <ShareButton title={shareTitle} description={shareDescription} url={shareUrl} />
    </div>
  );
}

