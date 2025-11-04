'use client';

import { useState } from 'react';
import { Share2, X, Check } from 'lucide-react';

interface ShareButtonProps {
  title?: string;
  description?: string;
  url?: string;
}

export function ShareButton({ title, description, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareData = {
    title: title || 'SoFlo Wheelie - Best Wheelie Games Online',
    description: description || 'Play the best wheelie games online for free!',
    url: url || (typeof window !== 'undefined' ? window.location.href : ''),
  };

  const shareLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.title)}&url=${encodeURIComponent(shareData.url)}`,
      color: 'hover:bg-sky-500',
    },
    {
      name: 'Reddit',
      icon: '🔴',
      url: `https://reddit.com/submit?url=${encodeURIComponent(shareData.url)}&title=${encodeURIComponent(shareData.title)}`,
      color: 'hover:bg-orange-600',
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${encodeURIComponent(shareData.title + ' ' + shareData.url)}`,
      color: 'hover:bg-green-600',
    },
    {
      name: 'Telegram',
      icon: '✈️',
      url: `https://t.me/share/url?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.title)}`,
      color: 'hover:bg-blue-500',
    },
  ];

  const handleShare = async (platform: string, platformUrl: string) => {
    if (platform === 'Native' && navigator.share) {
      try {
        await navigator.share({
          title: shareData.title,
          text: shareData.description,
          url: shareData.url,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      window.open(platformUrl, '_blank', 'width=600,height=400');
    }
    setIsOpen(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      {/* 分享按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all hover:scale-110"
        aria-label="Share"
        title="Share"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {/* 分享菜单 */}
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* 分享选项 */}
          <div className="absolute right-0 top-full mt-2 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">
            {/* 标题 */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
              <h3 className="text-white font-semibold text-sm">Share</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 社交平台 */}
            <div className="p-2">
              {shareLinks.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => handleShare(platform.name, platform.url)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white transition-all ${platform.color} hover:scale-105`}
                >
                  <span className="text-xl">{platform.icon}</span>
                  <span className="text-sm font-medium">{platform.name}</span>
                </button>
              ))}

              {/* 原生分享 (移动设备) */}
              {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                <button
                  onClick={() => handleShare('Native', '')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white transition-all hover:bg-slate-700 hover:scale-105"
                >
                  <span className="text-xl">📤</span>
                  <span className="text-sm font-medium">More options</span>
                </button>
              )}
            </div>

            {/* 复制链接 */}
            <div className="p-2 border-t border-slate-700">
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white transition-all hover:bg-slate-700 hover:scale-105"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <span className="text-xl">🔗</span>
                    <span className="text-sm font-medium">Copy link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

