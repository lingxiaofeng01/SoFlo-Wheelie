'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

interface SearchDialogProps {
  games: Game[];
}

export function SearchDialog({ games }: SearchDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [mounted, setMounted] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // 确保组件已挂载(用于Portal)
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // 键盘快捷键: Ctrl+K 或 Cmd+K 打开搜索
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // 搜索逻辑
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredGames([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = games.filter((game) => {
      return (
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        game.category.toLowerCase().includes(query)
      );
    });

    setFilteredGames(results);
  }, [searchQuery, games]);

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery('');
  };

  // 搜索对话框内容
  const searchDialog = isOpen && mounted ? (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          {/* 搜索容器 */}
          <div ref={searchRef} className="w-full max-w-2xl">
            {/* 搜索输入框 */}
            <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-2xl border-2 border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 px-5 py-4">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 outline-none text-base"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex-shrink-0"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <kbd className="hidden sm:inline-block px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs rounded border border-slate-200 dark:border-slate-600">
                  ESC
                </kbd>
              </div>

              {/* 搜索结果下拉 */}
              {searchQuery && (
                <div className="border-t border-slate-200 dark:border-slate-700">
                  <div className="max-h-[60vh] overflow-y-auto">
                    {filteredGames.length === 0 ? (
                      <div className="px-5 py-8 text-center">
                        <div className="text-4xl mb-2">🔍</div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                          No games found
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          Try different keywords
                        </p>
                      </div>
                    ) : (
                      <div className="py-2">
                        {filteredGames.map((game) => (
                          <Link
                            key={game.id}
                            href={`/wheelie-games/${game.slug}`}
                            onClick={handleClose}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
                          >
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-700">
                              <Image
                                src={game.thumbnail}
                                alt={game.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h3 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                                  {game.title}
                                </h3>
                                {game.isNew && (
                                  <span className="px-1.5 py-0.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[9px] font-bold rounded uppercase flex-shrink-0">
                                    NEW
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {game.description}
                              </p>
                            </div>
                            <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M9 5l7 7-7 7"/>
                            </svg>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 底部统计 */}
                  {filteredGames.length > 0 && (
                    <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Found <span className="font-semibold text-blue-600 dark:text-blue-400">{filteredGames.length}</span> game{filteredGames.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 提示文字 */}
            <div className="mt-3 px-2 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-slate-700/50 rounded text-[10px]">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-slate-700/50 rounded text-[10px]">↓</kbd>
                <span>to navigate</span>
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-slate-700/50 rounded text-[10px]">↵</kbd>
                <span>to select</span>
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 bg-slate-700/50 rounded text-[10px]">ESC</kbd>
                <span>to close</span>
              </span>
            </div>
          </div>
        </div>
  ) : null;

  return (
    <>
      {/* 搜索按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all hover:scale-110"
        aria-label="Search games"
        title="Search (Ctrl+K)"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* 使用Portal渲染搜索对话框到body */}
      {mounted && searchDialog && createPortal(searchDialog, document.body)}
    </>
  );
}

