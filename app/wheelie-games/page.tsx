import { Metadata } from 'next';
import Link from 'next/link';
import { GamesList } from '@/components/GamesList';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { Footer } from '@/components/Footer';
import { ToolBar } from '@/components/ToolBar';
import content from '@/content/en.json';

export const metadata: Metadata = {
  title: 'Wheelie Games - Play the Best Motorcycle Wheelie Games Online',
  description: 'Discover and play the best wheelie motorcycle games in your browser. No downloads needed. Master your balance and pull off epic stunts.',
  keywords: 'wheelie games, motorcycle games, bike games, stunt games, online games, browser games',
  alternates: {
    canonical: 'https://www.soflowheelie.com/wheelie-games',
  },
  openGraph: {
    title: 'Wheelie Games - Best Motorcycle Games Online',
    description: 'Play the best wheelie motorcycle games online for free',
    url: 'https://www.soflowheelie.com/wheelie-games',
  },
};

export default function WheelieGamesPage() {
  // 定义使用 /games 路由的游戏（排除这些游戏）
  const GAMES_ROUTE_SLUGS = ['hockey-random', 'bottle-jump', 'scary-wheels', 'wacky-nursery', 'counter-craft-sniper', 'crazy-animal-city', 'dancing-beat', 'cowboy-safari', 'rocket-fortress'];

  // 只展示摩托车相关的游戏（排除新增的游戏）
  const wheelieGames = content.games.list.filter(
    (game) => !GAMES_ROUTE_SLUGS.includes(game.slug)
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ToolBar
        games={content.games.list}
        shareTitle="Wheelie Games - Best Motorcycle Games Online"
        shareDescription="Play the best wheelie motorcycle games online for free"
      />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNav
            items={[
              { label: 'Wheelie Games' }
            ]}
          />

        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Wheelie Games
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-6">
            Explore our collection of exciting motorcycle and wheelie games. Test your balance, pull off epic stunts, and master the art of wheelies in these addictive browser games.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏍️</span>
              <span><strong className="text-white">{wheelieGames.length}</strong> Wheelie Games</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🆓</span>
              <span>100% Free to Play</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>No Downloads Needed</span>
            </div>
          </div>
        </div>

        <GamesList
          title={content.games.title}
          subtitle={content.games.subtitle}
          games={wheelieGames}
        />

        {/* About Wheelie Games Section */}
        <section className="mt-16 py-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-slate-700/50">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Wheelie Games
            </span>
          </h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              <strong className="text-white">Wheelie games</strong> are a thrilling genre of motorcycle and bike games that challenge players to master the art of balance while performing spectacular stunts. These games combine realistic physics-based gameplay with exciting challenges that test your timing, control, and precision. Whether you're popping wheelies through city streets or navigating obstacle courses, wheelie games deliver an adrenaline-pumping experience that keeps players coming back for more.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎮</span>
                  What Makes Wheelie Games Special?
                </h3>
                <p className="text-slate-300">
                  Wheelie games stand out for their unique blend of skill-based gameplay and instant accessibility. Unlike complex racing simulators, wheelie games focus on one core mechanic—maintaining balance—while adding layers of challenge through obstacles, distance goals, and trick combinations. This makes them easy to learn but incredibly difficult to master.
                </p>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏍️</span>
                  Perfect for All Skill Levels
                </h3>
                <p className="text-slate-300">
                  Whether you're a casual player looking for quick fun during a break or a dedicated gamer aiming to perfect your skills and climb leaderboards, our collection of wheelie games offers something for everyone. From beginner-friendly tutorials to expert-level challenges, there's always a new goal to achieve.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Why Play Wheelie Games Online?</h3>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold mt-1">✓</span>
                <span><strong className="text-white">Instant Access:</strong> All our wheelie games are browser-based, meaning you can start playing immediately without any downloads, installations, or account creation. Just click and play!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-1">✓</span>
                <span><strong className="text-white">100% Free:</strong> Every game in our collection is completely free to play. No hidden costs, no premium features locked behind paywalls—just pure gaming fun.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 font-bold mt-1">✓</span>
                <span><strong className="text-white">Cross-Platform Compatible:</strong> Play on any device—desktop, laptop, tablet, or mobile. Our games are optimized to run smoothly on all modern browsers and screen sizes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 font-bold mt-1">✓</span>
                <span><strong className="text-white">Regular Updates:</strong> We continuously add new wheelie games to our collection, ensuring you always have fresh challenges and new experiences to explore.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Game Features & Mechanics</h3>
            <p>
              Modern wheelie games incorporate a variety of features that enhance the gameplay experience. Most games include <strong className="text-white">realistic physics engines</strong> that simulate authentic motorcycle behavior, making every wheelie feel satisfying and challenging. You'll encounter diverse environments—from urban cityscapes to desert highways—each with unique obstacles and terrain challenges.
            </p>
            <p>
              Many wheelie games also feature <strong className="text-white">progression systems</strong> where you can unlock new bikes, customize your rider, and upgrade your motorcycle's performance. Some games include multiplayer modes or global leaderboards, allowing you to compete with players worldwide and prove your wheelie mastery.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Tips for Mastering Wheelie Games</h3>
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-700/50">
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span><strong className="text-white">Start Slow:</strong> Begin with gentle throttle control and gradually increase speed as you get comfortable with the balance mechanics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <span><strong className="text-white">Watch the Angle:</strong> Pay attention to your bike's angle. Too far back and you'll flip; too far forward and you'll lose the wheelie.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 font-bold">3.</span>
                  <span><strong className="text-white">Practice Consistency:</strong> Focus on maintaining steady, smooth inputs rather than aggressive movements. Consistency is key to long-distance wheelies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold">4.</span>
                  <span><strong className="text-white">Learn from Failures:</strong> Every crash teaches you something. Analyze what went wrong and adjust your technique accordingly.</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Join the Wheelie Gaming Community</h3>
            <p>
              The wheelie gaming community is vibrant and welcoming, with thousands of players worldwide sharing tips, tricks, and achievements. Many players record their best runs, compete in challenges, and help newcomers improve their skills. Whether you're looking to beat your personal best or compete for the top spot on global leaderboards, you'll find a supportive community ready to celebrate your successes.
            </p>
            <p className="text-lg font-medium text-white mt-6">
              Ready to start your wheelie journey? Browse our collection above and find your next favorite game. Remember: every expert was once a beginner—so don't be afraid to start small and work your way up to becoming a wheelie master! 🏍️💨
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
