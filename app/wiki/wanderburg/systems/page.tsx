import { Metadata } from 'next';
import { SYSTEMS_DATA } from '../data';

export const metadata: Metadata = {
  title: 'Systems & Mechanics | Wanderburg Wiki',
  description: 'Wanderburg core loop, Silver meta currency, Nitro boost mechanics, rerolls, and Early Access roadmap.',
};

export default function SystemsPage() {
  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
          Game Engine & Rules
        </span>
        <h2 className="text-2xl font-extrabold text-white">
          Wanderburg Systems & Mechanics
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Comprehensive breakdown of core roguelike gameplay loops, progression currencies, boost thermodynamics, and Early Access development scope.
        </p>
      </div>

      {/* Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SYSTEMS_DATA.map((sys, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-amber-400">⚙️</span> {sys.title}
                </h3>
                <span className="text-xs text-amber-300 font-mono bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  {sys.description}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                {sys.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
