import { GameCard } from './GameCard';

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

interface GamesListProps {
  title: string;
  subtitle: string;
  games: Game[];
}

export function GamesList({ title, subtitle, games }: GamesListProps) {
  return (
    <section className="relative py-12 sm:py-16 mb-12">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-pink-600/20 border border-pink-500/30 text-pink-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <span>🎮</span> MORE GAMES
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          {title}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </section>
  );
}
