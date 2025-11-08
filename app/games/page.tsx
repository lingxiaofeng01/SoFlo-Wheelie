import { Metadata } from 'next';
import Link from 'next/link';
import { GamesList } from '@/components/GamesList';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { Footer } from '@/components/Footer';
import { ToolBar } from '@/components/ToolBar';
import content from '@/content/en.json';

export const metadata: Metadata = {
  title: 'All Games - Play Free Online Motorcycle & Wheelie Games',
  description: 'Browse our complete collection of free online motorcycle and wheelie games. All games are browser-based, no downloads required. New games added regularly in chronological order.',
  keywords: 'all games, motorcycle games, wheelie games, bike games, online games, browser games, free games, stunt games',
  alternates: {
    canonical: 'https://www.soflowheelie.com/games',
  },
  openGraph: {
    title: 'All Games - Complete Collection of Motorcycle Games',
    description: 'Play our complete collection of free motorcycle and wheelie games online',
    url: 'https://www.soflowheelie.com/games',
  },
};

export default function AllGamesPage() {
  // 按时间顺序排列游戏（最新的在前面）
  const sortedGames = [...content.games.list].reverse();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ToolBar
        games={content.games.list}
        shareTitle="All Games - Complete Collection of Motorcycle Games"
        shareDescription="Play our complete collection of free motorcycle and wheelie games online"
      />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNav
            items={[
              { label: 'All Games' }
            ]}
          />

        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              All Games
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-6">
            Welcome to our complete collection of free online motorcycle and wheelie games! All games are listed in chronological order, with the newest additions at the top. Play instantly in your browser with no downloads required.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎮</span>
              <span><strong className="text-white">{content.games.list.length}</strong> Games Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🆓</span>
              <span>100% Free to Play</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>No Downloads Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔄</span>
              <span>Updated Regularly</span>
            </div>
          </div>
        </div>

        <GamesList
          title="Complete Game Collection"
          subtitle="All games sorted by release date - newest first"
          games={sortedGames}
        />

        {/* About All Games Section */}
        <section className="mt-16 py-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-slate-700/50">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Our Game Collection
            </span>
          </h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              <strong className="text-white">Welcome to the ultimate destination for free online motorcycle and wheelie games!</strong> Our carefully curated collection features the best browser-based motorcycle games, all playable instantly without any downloads or installations. Whether you're a casual player looking for quick fun or a dedicated gamer seeking to master advanced wheelie techniques, you'll find the perfect game here.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  Chronological Organization
                </h3>
                <p className="text-slate-300">
                  All games are organized in chronological order, with the newest additions appearing first. This makes it easy to discover our latest games while still having access to all our classic favorites. Check back regularly to see what new games we've added to the collection!
                </p>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Diverse Game Selection
                </h3>
                <p className="text-slate-300">
                  From realistic physics-based simulators to casual arcade-style games, our collection spans the full spectrum of motorcycle gaming. Each game offers unique mechanics, challenges, and experiences, ensuring you'll never run out of new ways to test your wheelie skills.
                </p>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  Play Anywhere, Anytime
                </h3>
                <p className="text-slate-300">
                  All our games run directly in your web browser, making them accessible on any device with an internet connection. Whether you're on a desktop, laptop, tablet, or mobile device, you can enjoy our games without worrying about compatibility issues or storage space.
                </p>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🆕</span>
                  Regular Updates
                </h3>
                <p className="text-slate-300">
                  We're constantly expanding our collection with new and exciting motorcycle games. Our team carefully selects each game to ensure it meets our quality standards and offers a unique, engaging experience. Bookmark this page and visit regularly to discover new additions!
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Why Play Our Games?
            </h3>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">✓</span>
                <span>
                  <strong className="text-white">Instant Access:</strong> No downloads, no installations, no waiting. Click and play immediately in your browser.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">✓</span>
                <span>
                  <strong className="text-white">100% Free:</strong> Every game in our collection is completely free to play with no hidden costs or premium features.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 font-bold mt-1">✓</span>
                <span>
                  <strong className="text-white">Safe & Secure:</strong> All games are carefully vetted and hosted on trusted platforms for your safety and security.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold mt-1">✓</span>
                <span>
                  <strong className="text-white">Quality Selection:</strong> We only feature games that offer engaging gameplay, smooth performance, and authentic motorcycle physics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <span>
                  <strong className="text-white">Community Favorites:</strong> Our collection includes popular community picks and hidden gems discovered by motorcycle gaming enthusiasts.
                </span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Game Categories in Our Collection
            </h3>

            <p>
              Our diverse collection includes various types of motorcycle and wheelie games, each offering unique challenges and gameplay experiences:
            </p>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-700/50 mt-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">🏍️</span>
                  <span>
                    <strong className="text-white">Wheelie Simulators:</strong> Realistic physics-based games that challenge you to master the art of balance and throttle control.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">🚴</span>
                  <span>
                    <strong className="text-white">Bicycle Wheelie Games:</strong> Lighter, more accessible games perfect for casual players and quick gaming sessions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold">🌆</span>
                  <span>
                    <strong className="text-white">Street Racing Games:</strong> Urban motorcycle games with stunning 3D graphics and multiple environments to explore.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">🎪</span>
                  <span>
                    <strong className="text-white">Stunt Games:</strong> Advanced games featuring trick systems, customization options, and competitive challenges.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">🎮</span>
                  <span>
                    <strong className="text-white">Scratch Games:</strong> Community-created games built on the Scratch platform, offering unique and creative gameplay experiences.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg font-medium text-white mt-6">
              Ready to start your motorcycle gaming journey? Browse our complete collection above and find your next favorite game. Remember: every expert was once a beginner, so don't be afraid to try different games and discover what works best for you! 🏍️💨
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}


