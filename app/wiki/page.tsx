import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wiki Hub | Fan Wiki Directory',
  description: 'Explore community fan wikis and game reference databases including Wanderburg.',
};

export default function WikiIndexPage() {
  return (
    <div className="max-w-4xl mx-auto py-4 space-y-8">
      {/* Title section */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Game Wiki Hub
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Community-curated game reference databases, closed-set rosters, and mechanics guides.
        </p>
      </div>

      {/* Wiki Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Wanderburg Wiki Card */}
        <Link
          href="/wiki/wanderburg"
          className="group relative bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold rounded-full uppercase tracking-wider">
                Active Wiki
              </span>
              <span className="text-xs text-slate-500 font-mono">EA v0.9.10</span>
            </div>

            <h2 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
              Wanderburg Wiki
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Minimalist medieval roguelike — drive a modular castle-on-wheels, devour villages, bolt on siege modules, and unlock Captains between runs.
            </p>

            <div className="grid grid-cols-3 gap-2 text-center text-xs border-t border-slate-800/80 pt-4 text-slate-400">
              <div className="bg-slate-950/60 p-2 rounded-lg">
                <div className="font-bold text-slate-200">14</div>
                <div className="text-[10px] text-slate-500">Captains</div>
              </div>
              <div className="bg-slate-950/60 p-2 rounded-lg">
                <div className="font-bold text-slate-200">20</div>
                <div className="text-[10px] text-slate-500">Modules</div>
              </div>
              <div className="bg-slate-950/60 p-2 rounded-lg">
                <div className="font-bold text-slate-200">2</div>
                <div className="text-[10px] text-slate-500">Vehicles</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm font-semibold text-amber-400 group-hover:text-amber-300">
            <span>Explore Wanderburg Wiki</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>

        {/* Future Wiki Placeholder */}
        <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 flex flex-col justify-between opacity-70">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                Coming Soon
              </span>
              <span className="text-xs text-slate-600 font-mono">Future Title</span>
            </div>

            <h2 className="text-2xl font-bold text-slate-400 mb-2">
              More Game Wikis
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Additional roguelike, RPG, and strategy game wikis will be added here as new titles launch.
            </p>
          </div>

          <div className="mt-6 text-sm font-medium text-slate-600">
            Stay tuned for updates...
          </div>
        </div>
      </div>
    </div>
  );
}
