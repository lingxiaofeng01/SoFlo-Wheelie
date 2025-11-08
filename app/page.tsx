'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeatureList } from '@/components/FeatureList';
import { GameEmbed } from '@/components/GameEmbed';
import { KeysHelp } from '@/components/KeysHelp';
import { Faq } from '@/components/Faq';
import { GamesList } from '@/components/GamesList';
import { StickyPlayButton } from '@/components/StickyPlayButton';
import { BackToTop } from '@/components/BackToTop';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { Footer } from '@/components/Footer';
import { ToolBar } from '@/components/ToolBar';
import { BookmarkButton } from '@/components/BookmarkButton';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';
import { Maximize, Minimize, HelpCircle, X } from 'lucide-react';
import content from '@/content/en.json';

export default function Home() {
  const gameRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    trackEvent('view_home', { page: 'index' });

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
        e.preventDefault();
        setShowHelp(prev => !prev);
      } else if (e.key === 'Escape' && showHelp) {
        setShowHelp(false);
      } else if (e.key === 'f' && e.ctrlKey) {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showHelp]);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
        trackEvent('enter_fullscreen', { source: 'button' });
      } catch (err) {
        console.error('Failed to enter fullscreen:', err);
      }
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
      trackEvent('exit_fullscreen', { source: 'button' });
    }
  };

  const scrollToGame = () => {
    trackEvent('click_play', { source: 'home_cta' });
    gameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // 额外的结构化数据
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.soflowheelie.com',
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Play SoFlo Wheelie Life',
    description: 'Learn how to master motorcycle wheelies in this exciting browser game',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Start the Game',
        text: 'Click the Play Now button to load the game in your browser',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Choose Your Bike',
        text: 'Press F to cycle through different motorcycles and find your favorite',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Accelerate',
        text: 'Hold D key to accelerate and lift the front wheel',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Balance',
        text: 'Find the balance point by controlling throttle with D and brake with A',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Perform Tricks',
        text: 'Use S, W, E, R keys to perform advanced tricks like knee tricks and seat stands',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Additional Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Tool Bar */}
      <ToolBar
        games={content.games.list}
        shareTitle="SoFlo Wheelie Life - Best Wheelie Games Online"
        shareDescription="Play the best wheelie games online for free! Master motorcycle stunts and wheelies."
      />

      {/* Sticky Play Button */}
      <StickyPlayButton />

      {/* Back to Top Button */}
      <BackToTop />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav
          items={[
            { label: 'SoFlo Wheelie Life' }
          ]}
        />

        {/* Enhanced Hero Section with Visual Impact */}
        <section ref={gameRef} className="relative py-8 sm:py-12 scroll-mt-20 mb-16 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <Image
              src="/soflowheelielife-game1.jpg"
              alt="SoFlo Wheelie Life Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900" />
          </div>

          {/* Hero Content */}
          <div className="text-center mb-8">
            {/* Trending Badge */}
            <div className="flex items-center justify-center gap-2 mb-4 animate-pulse">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-orange-500/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                🔥 TRENDING NOW
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <span>⭐</span> NEW
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                SoFlo Wheelie Life
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-200">
                Master Motorcycle Wheelies
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
              🏍️ Play the ultimate motorcycle wheelie game directly in your browser - <strong className="text-white">no download required!</strong>
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-green-400">✓</span>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-green-400">✓</span>
                <span>No Download</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-green-400">✓</span>
                <span>Instant Play</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-yellow-400">⭐</span>
                <span>50K+ Players</span>
              </div>
            </div>

            {/* Bookmark Button */}
            <div className="flex justify-center mb-6">
              <BookmarkButton variant="hero" />
            </div>
          </div>

          {/* Game Embed with Enhanced Design */}
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-3 sm:p-4 lg:p-6 mb-6 border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            {/* Decorative Corner Elements */}
            <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />

            {/* Game Controls Bar */}
            <div className="relative flex items-center justify-between gap-2 mb-3 sm:mb-4 bg-slate-900/50 rounded-xl p-2 sm:p-3">
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Live Game
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowHelp(!showHelp)}
                  className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 border-slate-600"
                  aria-label="Show keyboard controls"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Controls</span>
                  <span className="sm:hidden">?</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleFullscreen}
                  className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 border-slate-600"
                  aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                >
                  {isFullscreen ? (
                    <>
                      <Minimize className="w-4 h-4" />
                      <span className="hidden sm:inline">Exit</span>
                    </>
                  ) : (
                    <>
                      <Maximize className="w-4 h-4" />
                      <span className="hidden sm:inline">Fullscreen</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Game Container */}
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl ring-2 ring-slate-700/50">
              <GameEmbed
                url="https://scratch.mit.edu/projects/1231016758/embed"
                title="SoFlo Wheelie Game"
                className="h-full"
                lazyLoad={true}
                previewImage="/soflowheelielife-game1.jpg"
              />
            </div>
          </div>

          {/* Enhanced Game Controls Info */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-blue-700/30 hover:border-blue-600/50 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🏍️</span>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Game Controls</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    <strong className="text-blue-400">A/D</strong> for movement (D throttle, A brake), <strong className="text-blue-400">WSER</strong> for tricks, <strong className="text-blue-400">F</strong> to change bikes, <strong className="text-blue-400">G</strong> for helmets
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-purple-700/30 hover:border-purple-600/50 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💡</span>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Pro Tip</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Click fullscreen for the best experience • Works best on desktop or tablet • Master the balance!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Wheelie Games Section - Show only wheelie games (exclude new games) */}
        <GamesList
          title="More Wheelie Games"
          subtitle="Master the art of balance with our collection of motorcycle wheelie games"
          games={content.games.list.filter((game) => !game.routePrefix || game.routePrefix === 'wheelie-games').slice(0, 8)}
        />

        {/* Enhanced What is SoFlo Wheelie Section */}
        <section className="relative py-12 sm:py-16 mb-12 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-lg shadow-orange-500/30 animate-pulse">
              <span className="text-base">🔥</span>
              MOST POPULAR WHEELIE GAME
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              What is <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">SoFlo Wheelie Life</span>?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main Description with Image */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    <strong className="text-white">SoFlo Wheelie Life</strong> is a thrilling browser-based motorcycle game that challenges you to perform <span className="text-blue-400 font-semibold">endless wheelies</span> through the atmospheric streets of South Florida. Master the art of balance in SoFlo Wheelie and become a wheelie legend!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                    Created by <span className="text-purple-400 font-semibold">LucasTheSigmaMogger</span> on Scratch, SoFlo Wheelie is a realistic bike stunt simulator that tests your <strong className="text-white">skill and patience</strong>. Navigate through traffic, avoid obstacles, and see how far you can ride on one wheel!
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
                    <span>🎯</span> Realistic Physics
                  </span>
                  <span className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
                    <span>🏍️</span> Multiple Bikes
                  </span>
                  <span className="inline-flex items-center gap-2 bg-pink-600/20 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
                    <span>🎨</span> Custom Helmets
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/50 shadow-2xl group">
                  <Image
                    src="/soflowheelielife-game1.jpg"
                    alt="SoFlo Wheelie Life Gameplay"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm sm:text-base mb-1">Experience the Thrill!</p>
                    <p className="text-slate-300 text-xs sm:text-sm">Master wheelies in stunning South Florida streets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Key Benefits - Enhanced Design */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/40 hover:border-blue-500/60 transition-all group hover:transform hover:scale-105 duration-300">
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/70 transition-shadow">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Instant Play - Zero Wait</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    No downloads, no installations, no account required. Click and play in seconds. Perfect for quick gaming sessions or extended practice runs.
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/40 hover:border-purple-500/60 transition-all group hover:transform hover:scale-105 duration-300">
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-shadow">
                    <span className="text-3xl">🎮</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Easy to Learn, Hard to Master</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Simple controls that anyone can pick up, but a skill ceiling that rewards dedicated practice. Every session makes you better.
                  </p>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-pink-900/40 to-pink-800/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-700/40 hover:border-pink-500/60 transition-all group hover:transform hover:scale-105 duration-300 sm:col-span-2 lg:col-span-1">
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/30 transition-all" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/50 group-hover:shadow-pink-500/70 transition-shadow">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Compete & Improve</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Track your personal bests, challenge yourself to beat your records, and join a community of wheelie enthusiasts worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced How to Play Section */}
        <section className="relative py-12 sm:py-16 mb-12" id="usage">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(71 85 105 / 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span>📖</span> QUICK START GUIDE
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                How to Play <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">SoFlo Wheelie Life</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mb-3 max-w-2xl mx-auto">
                Master the art of motorcycle wheelies in SoFlo Wheelie with this simple guide
              </p>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto">
                Getting started with SoFlo Wheelie is easy! Follow these four simple steps to begin your wheelie journey. Whether you're new to motorcycle games or a seasoned player, SoFlo Wheelie offers an intuitive learning curve that rewards practice and skill development.
              </p>
            </div>

            {/* Visual Step-by-Step Guide */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20" style={{ top: '4rem' }} />

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Step 1 */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-700/40 hover:border-blue-500/60 transition-all hover:transform hover:scale-105 duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl group-hover:bg-blue-500/50 transition-all" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/50">
                          1
                        </div>
                      </div>
                      <div className="text-4xl mb-3">🚀</div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Start Your Engine</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Click 'Play Now' to launch SoFlo Wheelie. Loads instantly in your browser - <strong className="text-blue-400">no download required!</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-700/40 hover:border-purple-500/60 transition-all hover:transform hover:scale-105 duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl group-hover:bg-purple-500/50 transition-all" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/50">
                          2
                        </div>
                      </div>
                      <div className="text-4xl mb-3">🎮</div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Control Your Bike</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <strong className="text-purple-400">D</strong> throttle, <strong className="text-purple-400">A</strong> brake, <strong className="text-purple-400">WSER</strong> for tricks, <strong className="text-purple-400">F</strong> bikes, <strong className="text-purple-400">G</strong> helmets
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-pink-900/50 to-pink-800/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-700/40 hover:border-pink-500/60 transition-all hover:transform hover:scale-105 duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-xl group-hover:bg-pink-500/50 transition-all" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-pink-500/50">
                          3
                        </div>
                      </div>
                      <div className="text-4xl mb-3">⚖️</div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Master Your Balance</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Keep your wheelie going continuously in SoFlo Wheelie. The <strong className="text-pink-400">longer you hold</strong>, the better your performance!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-700/40 hover:border-orange-500/60 transition-all hover:transform hover:scale-105 duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-xl group-hover:bg-orange-500/50 transition-all" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/50">
                          4
                        </div>
                      </div>
                      <div className="text-4xl mb-3">🏁</div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Avoid & Conquer</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Navigate obstacles while keeping your wheelie. <strong className="text-orange-400">Go farther</strong> for higher scores!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips Banner */}
            <div className="mt-12 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-shrink-0 text-5xl">💡</div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Pro Starter Tip for SoFlo Wheelie</h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Start with gentle throttle control and gradually increase as you get comfortable. The key to long wheelies in SoFlo Wheelie is <strong className="text-blue-400">smooth, consistent inputs</strong> rather than aggressive movements. Practice makes perfect!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="py-12 sm:py-16 mb-12" id="tips">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {content.tips.title}
              </h2>
              <p className="text-slate-400 text-lg mb-3">
                {content.tips.subtitle}
              </p>
              <p className="text-slate-300 max-w-3xl mx-auto">
                These expert SoFlo Wheelie strategies will help you dominate the game and achieve record-breaking distances. Learn from experienced SoFlo Wheelie players who have mastered the art of wheelie control.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.tips.list.map((tip: any, index: number) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-600/50 transition-all group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white pt-1">{tip.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-blue-700/50">
              <div className="flex items-start gap-4">
                <span className="text-3xl">💡</span>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Pro Tip for SoFlo Wheelie</h4>
                  <p className="text-slate-300">
                    The best SoFlo Wheelie riders don't just react - they anticipate. Watch the road ahead in SoFlo Wheelie, plan your moves, and stay calm under pressure. Consistency beats flashy tricks every time when you're going for distance records!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="relative py-12 sm:py-16 mb-12" id="feature">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span>✨</span> GAME FEATURES
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">SoFlo Wheelie Life</span> Stands Out
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">
                Discover all the exciting features that make SoFlo Wheelie the ultimate motorcycle wheelie experience
              </p>
            </div>

            {/* Feature Highlights - Side by Side */}
            <div className="grid lg:grid-cols-2 gap-6 mb-12">
              <div className="group relative bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-blue-700/40 hover:border-blue-500/60 transition-all hover:transform hover:scale-[1.02] duration-300">
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/70 transition-shadow">
                      <span className="text-3xl">🏍️</span>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Authentic Physics Simulation</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Realistic</span>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">Advanced</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-200 leading-relaxed mb-4 text-sm sm:text-base">
                    SoFlo Wheelie isn't just another motorcycle game - it's a <strong className="text-white">meticulously crafted wheelie simulation</strong> that captures the authentic thrill of street riding. Built on advanced physics algorithms, it delivers the most realistic wheelie experience possible.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Whether you're a motorcycle enthusiast or casual gamer, the intuitive controls make it easy to start, but <strong className="text-blue-400">mastering the perfect wheelie</strong> requires practice, patience, and precision - just like real stunts.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-purple-700/40 hover:border-purple-500/60 transition-all hover:transform hover:scale-[1.02] duration-300">
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-shadow">
                      <span className="text-3xl">🌃</span>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Immersive South Florida Setting</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Atmospheric</span>
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">Vibrant</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-200 leading-relaxed mb-4 text-sm sm:text-base">
                    Set against the backdrop of <strong className="text-white">South Florida's vibrant night streets</strong>, the game immerses you in an atmospheric urban environment. The neon-lit cityscape, combined with smooth animations and responsive controls, creates an engaging experience.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    From <strong className="text-purple-400">customizable bikes and helmets</strong> to an extensive trick system, SoFlo Wheelie provides endless opportunities for personalization. Each motorcycle handles differently, encouraging experimentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <FeatureList features={content.features} />
          </div>
        </section>

        {/* Community Stats Section */}
        <section className="py-12 sm:py-16 mb-12" id="community">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Join the SoFlo Wheelie Community
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-3">
                {content.community.description}
              </p>
              <p className="text-slate-400 max-w-2xl mx-auto">
                The SoFlo Wheelie community is growing every day! Join thousands of players worldwide who share tips, celebrate achievements, and compete for the longest wheelie distances in SoFlo Wheelie. Be part of the movement!
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {content.community.stats.map((stat: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700 text-center hover:border-blue-600/50 transition-all hover:transform hover:scale-105">
                  <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-slate-300 text-lg font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Share Your Best Runs!</h3>
                <p className="text-slate-400">
                  Join our growing community on social media and show off your wheelie skills
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105">
                  <span>🎮</span>
                  Discord Community
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105">
                  <span>📱</span>
                  Follow on Twitter
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105">
                  <span>📺</span>
                  YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Player Reviews Section */}
        <section className="py-12 sm:py-16 mb-12" id="reviews">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {content.reviews.title}
              </h2>
              <p className="text-slate-400 text-lg">
                {content.reviews.subtitle}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.reviews.list.map((review: any, index: number) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-600/50 transition-all">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>
                  <p className="text-blue-400 font-semibold">
                    - {review.author}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">
                Have you played SoFlo Wheelie Life? Share your SoFlo Wheelie experience!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={scrollToGame}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
                >
                  Play Now
                  <span>→</span>
                </button>
                <Link
                  href="/wheelie-games"
                  className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
                >
                  More Wheelie Games
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Game Stats Section */}
        <section className="py-12 sm:py-16 mb-12" id="stats">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-blue-400 text-2xl">🎮</span>
              <span className="text-blue-400 text-sm font-semibold">Game Stats</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
              SoFlo Wheelie Life - Game Information
            </h2>
            <p className="text-slate-400 text-center mb-12">
              Everything you need to know about SoFlo Wheelie, the exciting motorcycle wheelie game.
            </p>

            <div className="grid gap-10 md:grid-cols-3">
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-400 mb-2">Developer</p>
                <p className="text-5xl sm:text-6xl font-bold text-blue-400 mb-2">Scratch</p>
                <p className="text-lg text-slate-400">Created by LucasTheSigmaMogger on Scratch</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-400 mb-2">Technology</p>
                <p className="text-5xl sm:text-6xl font-bold text-blue-400 mb-2">Scratch</p>
                <p className="text-lg text-slate-400">Scratch (HTML5)</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-400 mb-2">Released</p>
                <p className="text-5xl sm:text-6xl font-bold text-blue-400 mb-2">Oct 2025</p>
                <p className="text-lg text-slate-400">Latest Version</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 mb-12" id="faq">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md mb-4">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                SoFlo Wheelie Life - Frequently Asked Questions
              </h2>
              <p className="text-slate-400 text-lg">
                Everything you need to know about playing SoFlo Wheelie Life. Find answers to common questions about SoFlo Wheelie gameplay, controls, compatibility, and more.
              </p>
            </div>
            <Faq items={content.faq} />

            {/* New Games Section */}
            <div className="mt-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    New Games
                  </span>
                </h3>
                <p className="text-slate-300 text-lg">
                  Check out our latest additions! Fresh games added regularly for your entertainment.
                </p>
              </div>

              {/* Games Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {content.games.list
                  .slice(0, 4)
                  .map((game) => {
                    const routePrefix = game.routePrefix || 'wheelie-games';
                    const gameUrl = `/${routePrefix}/${game.slug}`;

                    return (
                      <Link
                        key={game.id}
                        href={gameUrl}
                        className="group bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                      >
                        {/* Game Thumbnail */}
                        <div className="relative aspect-video w-full overflow-hidden bg-slate-900/50">
                          <Image
                            src={game.thumbnail}
                            alt={game.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          {game.isNew && (
                            <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                              NEW
                            </div>
                          )}
                        </div>

                        {/* Game Info */}
                        <div className="p-4">
                          <h4 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                            {game.title}
                          </h4>
                          <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                            {game.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {game.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>

              {/* View All Games Button */}
              <div className="text-center">
                <Link
                  href="/games"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>🎮</span>
                  View All Games
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="relative py-12 sm:py-16 text-center overflow-hidden" id="cta">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-slate-700/50 shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-lg shadow-orange-500/30 animate-bounce">
                <span>🎮</span> START PLAYING NOW
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Ready to Master <br className="hidden sm:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  SoFlo Wheelie Life?
                </span>
              </h2>

              <p className="text-slate-200 text-base sm:text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed">
                Start playing SoFlo Wheelie right now! <strong className="text-white">No downloads required</strong> - just click and play SoFlo Wheelie instantly in your browser. Experience the thrill of wheelie life scratch gaming today!
              </p>

              <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                Join <strong className="text-blue-400">50,000+ players</strong> worldwide and discover why SoFlo Wheelie is the most addictive motorcycle wheelie game online. Perfect your SoFlo Wheelie skills, beat your records, and become a wheelie master!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={scrollToGame}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 text-base sm:text-lg min-w-[240px] justify-center"
                >
                  <span className="text-2xl">🏍️</span>
                  Play SoFlo Wheelie Now - Free!
                  <span className="group-hover:translate-x-1 transition-transform">▶</span>
                </button>

                <button
                  onClick={() => {
                    const usageSection = document.getElementById('usage');
                    usageSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-600 hover:border-slate-500 text-white font-semibold px-6 py-4 rounded-xl transition-all hover:scale-105 text-base sm:text-lg"
                >
                  <span>📖</span>
                  Learn How to Play SoFlo Wheelie
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>100% Free Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>No Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span>50K+ Active Players</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">Keyboard Controls</h2>
              <button
                onClick={() => setShowHelp(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded"
                aria-label="Close controls help"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Basic Controls</h3>
                <ul className="space-y-2">
                  {[
                    { key: 'D', action: 'Throttle / Accelerate' },
                    { key: 'A', action: 'Brake / Slow Down' },
                    { key: 'F', action: 'Change Bikes' },
                    { key: 'G', action: 'Change Helmets' },
                  ].map(({ key, action }) => (
                    <li key={key} className="flex items-center">
                      <kbd className="bg-slate-700 text-white px-3 py-1 rounded font-mono text-sm min-w-[44px] text-center mr-3">
                        {key}
                      </kbd>
                      <span className="text-slate-300">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Trick Controls</h3>
                <ul className="space-y-2">
                  {[
                    { key: 'S', action: 'Knee Trick' },
                    { key: 'W', action: 'Seat Stand' },
                    { key: 'E', action: 'Hand Drag' },
                    { key: 'R', action: 'No Hands Stunt' },
                  ].map(({ key, action }) => (
                    <li key={key} className="flex items-center">
                      <kbd className="bg-gradient-to-br from-purple-700 to-blue-700 text-white px-3 py-1 rounded font-mono text-sm min-w-[44px] text-center mr-3">
                        {key}
                      </kbd>
                      <span className="text-slate-300">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                <kbd className="bg-slate-700 text-white px-2 py-1 rounded font-mono text-xs mr-1">?</kbd>
                Toggle this help ·
                <kbd className="bg-slate-700 text-white px-2 py-1 rounded font-mono text-xs mx-1">ESC</kbd>
                Close ·
                <kbd className="bg-slate-700 text-white px-2 py-1 rounded font-mono text-xs mx-1">Ctrl+F</kbd>
                Fullscreen
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
