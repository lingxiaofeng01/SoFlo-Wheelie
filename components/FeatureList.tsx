import { LucideIcon, Zap, Gauge, Bike, Keyboard, Moon, Sparkles } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Gauge,
  Bike,
  Keyboard,
  Moon,
  Sparkles,
};

interface FeatureListProps {
  features: Feature[];
}

export function FeatureList({ features }: FeatureListProps) {
  const gradients = [
    'from-blue-600 to-blue-700',
    'from-purple-600 to-purple-700',
    'from-pink-600 to-pink-700',
    'from-orange-600 to-orange-700',
    'from-cyan-600 to-cyan-700',
    'from-indigo-600 to-indigo-700',
  ];

  const borderColors = [
    'border-blue-700/40 hover:border-blue-500/60',
    'border-purple-700/40 hover:border-purple-500/60',
    'border-pink-700/40 hover:border-pink-500/60',
    'border-orange-700/40 hover:border-orange-500/60',
    'border-cyan-700/40 hover:border-cyan-500/60',
    'border-indigo-700/40 hover:border-indigo-500/60',
  ];

  const shadowColors = [
    'shadow-blue-500/50 group-hover:shadow-blue-500/70',
    'shadow-purple-500/50 group-hover:shadow-purple-500/70',
    'shadow-pink-500/50 group-hover:shadow-pink-500/70',
    'shadow-orange-500/50 group-hover:shadow-orange-500/70',
    'shadow-cyan-500/50 group-hover:shadow-cyan-500/70',
    'shadow-indigo-500/50 group-hover:shadow-indigo-500/70',
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="text-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Why Play <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">SoFlo Wheelie</span>?
        </h3>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Experience the thrill of SoFlo Wheelie motorcycle stunts with cutting-edge browser technology
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Zap;
          const gradient = gradients[index % gradients.length];
          const borderColor = borderColors[index % borderColors.length];
          const shadowColor = shadowColors[index % shadowColors.length];

          return (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border-2 ${borderColor} transition-all hover:transform hover:scale-105 duration-300 group`}
            >
              {/* Decorative Glow */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg ${shadowColor} transition-shadow`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
