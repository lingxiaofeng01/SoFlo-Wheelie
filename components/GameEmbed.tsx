'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';
import { Loader2, AlertCircle, RefreshCw, Play } from 'lucide-react';
import Image from 'next/image';

interface GameEmbedProps {
  url: string;
  title?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  lazyLoad?: boolean; // 新增：是否延迟加载
  previewImage?: string; // 新增：预览图
}

export function GameEmbed({
  url,
  title = 'SoFlo Wheelie Game',
  className = '',
  onLoad,
  onError,
  lazyLoad = true,
  previewImage = '/soflo-wheelie-game.webp'
}: GameEmbedProps) {
  const [loadingState, setLoadingState] = useState<'idle' | 'loading' | 'loaded' | 'error'>(lazyLoad ? 'idle' : 'loading');
  const [loadStartTime, setLoadStartTime] = useState<number>(0);
  const [retryCount, setRetryCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer 延迟加载 - 禁用自动加载，只在点击时加载
  useEffect(() => {
    if (!lazyLoad) {
      setIsInView(true);
      return;
    }

    // 注释掉自动加载逻辑，改为只在手动点击时加载
    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting && !isInView) {
    //         setIsInView(true);
    //         setLoadingState('loading');
    //         setLoadStartTime(Date.now());
    //         trackEvent('game_visible', { url });
    //       }
    //     });
    //   },
    //   {
    //     threshold: 0.25, // 当 25% 可见时开始加载
    //     rootMargin: '50px' // 提前 50px 开始加载
    //   }
    // );

    // if (containerRef.current) {
    //   observer.observe(containerRef.current);
    // }

    // return () => {
    //   if (containerRef.current) {
    //     observer.unobserve(containerRef.current);
    //   }
    // };
  }, [lazyLoad, isInView, url]);

  // 加载超时处理
  useEffect(() => {
    if (loadingState !== 'loading') return;

    trackEvent('game_load_start', { url, attempt: retryCount + 1 });

    const timeout = setTimeout(() => {
      if (loadingState === 'loading') {
        setLoadingState('error');
        trackEvent('game_load_error', {
          url,
          reason: 'timeout',
          duration: Date.now() - loadStartTime
        });
        onError?.();
      }
    }, 15000);

    return () => clearTimeout(timeout);
  }, [loadingState, retryCount]);

  const handleLoad = () => {
    const loadDuration = Date.now() - loadStartTime;
    setLoadingState('loaded');
    trackEvent('game_load_success', { url, duration: loadDuration });
    onLoad?.();
  };

  const handleError = () => {
    setLoadingState('error');
    const errorDuration = Date.now() - loadStartTime;
    trackEvent('game_load_error', {
      url,
      reason: 'iframe_error',
      duration: errorDuration
    });
    onError?.();
  };

  const handleRetry = () => {
    setLoadingState('loading');
    setLoadStartTime(Date.now());
    setRetryCount(prev => prev + 1);
    trackEvent('game_retry', { url, attempt: retryCount + 2 });
  };

  const handleManualLoad = () => {
    setLoadingState('loading');
    setLoadStartTime(Date.now());
    setIsInView(true);
    trackEvent('game_manual_load', { url });
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Idle State - 显示预览图和播放按钮 */}
      {loadingState === 'idle' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900/80 to-slate-900/95 rounded-xl z-10 cursor-pointer group overflow-hidden"
          onClick={handleManualLoad}
        >
          {/* Background Preview Image */}
          <div className="absolute inset-0">
            <Image
              src={previewImage}
              alt={title}
              fill
              className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Animated Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 group-hover:opacity-70 animate-pulse" />
            </div>

            {/* Play Now Button */}
            <div className="relative">
              <button className="relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 hover:from-orange-600 hover:via-red-600 hover:to-purple-700 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-2xl shadow-orange-500/50 group-hover:shadow-orange-500/70 group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
                <span>Play Now</span>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">▶</span>
                </div>
              </button>

              {/* Pulsing Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping" />
            </div>

            {/* Text */}
            <p className="text-white text-base sm:text-lg font-semibold mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to Start Playing
            </p>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              🚀 Instant load • No download required
            </p>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loadingState === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 rounded-lg z-10">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
          <p className="text-slate-300 text-lg">Loading game...</p>
          <p className="text-slate-500 text-sm mt-2">This may take a few seconds</p>
        </div>
      )}

      {/* Error State */}
      {loadingState === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 rounded-lg z-10 p-6">
          <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-white text-xl font-semibold mb-2">Failed to Load Game</p>
          <p className="text-slate-400 text-center mb-6">
            The game could not be loaded. Please check your internet connection and try again.
          </p>
          <Button
            onClick={handleRetry}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </Button>
        </div>
      )}

      {/* Iframe - 只在需要时渲染 */}
      {(loadingState === 'loading' || loadingState === 'loaded') && (
        <iframe
          key={retryCount}
          src={url}
          title={title}
          className="w-full h-full border-0 rounded-lg"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      )}
    </div>
  );
}
