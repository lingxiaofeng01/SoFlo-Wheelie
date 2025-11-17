import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Gamepad2 } from 'lucide-react';
import { GameEmbed } from '@/components/GameEmbed';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { Footer } from '@/components/Footer';
import { ToolBar } from '@/components/ToolBar';
import content from '@/content/en.json';

interface Props {
  params: {
    slug: string;
  };
}

// 定义今天新增的游戏
const NEW_GAMES_SLUGS = ['hockey-random', 'bottle-jump', 'scary-wheels', 'wacky-nursery', 'counter-craft-sniper', 'crazy-animal-city', 'dancing-beat', 'cowboy-safari', 'rocket-fortress'];

export async function generateStaticParams() {
  // 只为新增的4个游戏生成 /games 路由
  return content.games.list
    .filter((game) => NEW_GAMES_SLUGS.includes(game.slug))
    .map((game) => ({
      slug: game.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = content.games.list.find((g) => g.slug === params.slug);

  if (!game) {
    return {
      title: 'Game Not Found',
    };
  }

  return {
    title: `${game.title} - Play Free Online Game`,
    description: game.description,
    keywords: `${game.title}, ${game.tags.join(', ')}, online game, browser game`,
    alternates: {
      canonical: `https://www.soflowheelie.com/games/${game.slug}`,
    },
    openGraph: {
      title: `${game.title} - Free Online Game`,
      description: game.description,
      url: `https://www.soflowheelie.com/games/${game.slug}`,
      images: [
        {
          url: game.thumbnail,
          width: 512,
          height: 384,
          alt: game.title,
        },
      ],
    },
  };
}

export default function GamePage({ params }: Props) {
  const game = content.games.list.find((g) => g.slug === params.slug);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ToolBar
        games={content.games.list}
        shareTitle={`${game.title} - Play Free Online`}
        shareDescription={game.description}
      />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNav
            items={[
              { label: 'All Games', href: '/games' },
              { label: game.title }
            ]}
          />

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl" />
              <Gamepad2 className="relative w-12 h-12 text-blue-500 animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  {game.title}
                </span>
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg shadow-blue-500/50">
                  {game.category}
                </span>
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-slate-700/80 text-slate-300 px-3 py-1 rounded-full border border-slate-600 hover:border-slate-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            {game.description}
          </p>
        </div>

        <section className="mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-slate-700">
            <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl">
              <GameEmbed
                url={game.iframeUrl}
                title={game.title}
                className="h-full"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-slate-700/50">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                About {game.title}
              </span>
            </h2>

            <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
              {/* @ts-ignore */}
              {game.fullDescription?.intro ? (
                <>
                  {/* @ts-ignore */}
                  <p className="text-lg leading-relaxed">{game.fullDescription.intro}</p>

                  {/* @ts-ignore */}
                  {game.fullDescription.gameplay && (
                    <div className="mt-8">
                      {/* @ts-ignore */}
                      <h3 className="text-2xl font-bold text-white mb-4">{game.fullDescription.gameplay.title}</h3>
                      {/* @ts-ignore */}
                      <div className="space-y-4 whitespace-pre-line">{game.fullDescription.gameplay.content}</div>
                    </div>
                  )}

                  {/* Features Grid */}
                  {/* @ts-ignore */}
                  {game.fullDescription.features && game.fullDescription.features.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {/* @ts-ignore */}
                        {game.fullDescription.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-start gap-3 bg-slate-800/40 rounded-lg p-4 border border-slate-700/50">
                            <span className="text-blue-400 font-bold text-xl mt-0.5">✓</span>
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <p>
                    {game.title} is an exciting game that challenges your skills and reflexes.
                    Navigate through challenging levels, avoid obstacles, and achieve the highest scores.
                  </p>
                  <p>
                    Perfect for both casual players and serious gamers, this game offers intuitive
                    controls and progressively challenging gameplay.
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-blue-700/50">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                {/* @ts-ignore */}
                {game.fullDescription?.howToPlay?.title || 'How to Play'}
              </span>
            </h2>

            {/* @ts-ignore */}
            {game.fullDescription?.howToPlay?.content && (
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {/* @ts-ignore */}
                {game.fullDescription.howToPlay.content}
              </p>
            )}

            {/* @ts-ignore */}
            {game.fullDescription?.howToPlay?.tips && game.fullDescription.howToPlay.tips.length > 0 ? (
              <div className="space-y-6 mt-8">
                {/* @ts-ignore */}
                {game.fullDescription.howToPlay.tips.map((tip: any, index: number) => (
                  <div key={index} className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50">
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-sm">
                        {index + 1}
                      </span>
                      {tip.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed ml-11">{tip.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-sm mt-0.5">1</span>
                  <span>Use controls to navigate and interact with the game</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white font-bold text-sm mt-0.5">2</span>
                  <span>Complete objectives and overcome challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500 text-white font-bold text-sm mt-0.5">3</span>
                  <span>Collect rewards and unlock new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-bold text-sm mt-0.5">4</span>
                  <span>Aim for high scores and master the game</span>
                </li>
              </ul>
            )}

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl border border-blue-600/30">
              <p className="text-white font-medium text-lg">
                💡 <strong>Pro Tip:</strong> Practice makes perfect! Master the controls and develop your strategy to achieve the best results in {game.title}.
              </p>
            </div>
          </div>
        </section>

        {/* Why Play Section */}
        {/* @ts-ignore */}
        {game.fullDescription?.whyPlay && (
          <section className="mb-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-purple-700/50">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {/* @ts-ignore */}
                  {game.fullDescription.whyPlay.title}
                </span>
              </h2>
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {/* @ts-ignore */}
                {game.fullDescription.whyPlay.content}
              </div>
            </div>
          </section>
        )}

        {/* Pro Tips Section */}
        {/* @ts-ignore */}
        {game.fullDescription?.tips && (
          <section className="mb-12">
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-orange-700/50">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                  {/* @ts-ignore */}
                  {game.fullDescription.tips.title}
                </span>
              </h2>
              <ul className="space-y-3 text-slate-300 text-base sm:text-lg">
                {/* @ts-ignore */}
                {game.fullDescription.tips.items.map((tip: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold text-xl mt-1">▸</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Challenging Elements Section */}
        {/* @ts-ignore */}
        {game.fullDescription?.challenging && (
          <section className="mb-12">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-red-700/50">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  {/* @ts-ignore */}
                  {game.fullDescription.challenging.title}
                </span>
              </h2>
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {/* @ts-ignore */}
                {game.fullDescription.challenging.content}
              </div>
            </div>
          </section>
        )}

        {/* Developer Section */}
        {/* @ts-ignore */}
        {game.fullDescription?.developer && (
          <section className="mb-12">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                {/* @ts-ignore */}
                {game.fullDescription.developer.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {/* @ts-ignore */}
                {game.fullDescription.developer.content}
              </p>
            </div>
          </section>
        )}

        {/* More Exciting Games Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            More Exciting Games
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.games.list
              .filter((g) => g.slug !== game.slug && NEW_GAMES_SLUGS.includes(g.slug))
              .slice(0, 3)
              .map((otherGame) => (
                <Link
                  key={otherGame.id}
                  href={`/games/${otherGame.slug}`}
                  className="group bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all hover:transform hover:scale-105"
                >
                  {/* Game Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900/50">
                    <Image
                      src={otherGame.thumbnail}
                      alt={otherGame.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {otherGame.isNew && (
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NEW
                      </div>
                    )}
                  </div>

                  {/* Game Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {otherGame.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2">
                      {otherGame.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/games"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View All Games
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}


