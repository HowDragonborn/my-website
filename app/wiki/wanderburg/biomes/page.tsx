import { Metadata } from 'next';
import { BIOMES_DATA } from '../data';

export const metadata: Metadata = {
  title: 'Biomes & Bosses | Wanderburg Wiki',
  description: 'Wanderburg lands, biomes, bosses, and enemy vehicle roster reference.',
};

export default function BiomesPage() {
  const steamBiomes = BIOMES_DATA.filter((b) => b.verifiedStatus === 'steam');
  const communityBiomes = BIOMES_DATA.filter((b) => b.verifiedStatus === 'community');

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
          Lands & Encounters
        </span>
        <h2 className="text-2xl font-extrabold text-white">
          Wanderburg Biomes & Bosses
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Navigate through distinct medieval biomes, defeat boss fortresses, and unlock higher difficulties and vehicle chassis.
        </p>
      </div>

      {/* Steam Verified Biomes & Bosses */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs rounded uppercase font-semibold">
            Steam Verified
          </span>
          Official Steam Patch Named Encounters
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steamBiomes.map((item) => (
            <div key={item.name} className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{item.type === 'biome' ? '🌲' : item.type === 'boss' ? '🏰' : '🏹'}</span>
                  {item.name}
                </h4>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800">
                  {item.type}
                </span>
              </div>
              <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                {item.evidenceOrNotes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Route Names */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs rounded uppercase font-semibold">
              Community Guides
            </span>
            Community Route Names
          </h3>
          <span className="text-xs text-amber-300 font-mono">[verify]</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {communityBiomes.map((item) => (
            <div key={item.name} className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>🗺️</span> {item.name}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                  [verify]
                </span>
              </div>
              <p className="text-xs text-slate-300">{item.evidenceOrNotes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievement Note */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs text-slate-300 flex items-center gap-3">
        <span className="text-xl">🏆</span>
        <div>
          <span className="font-bold text-white">Achievement Note:</span> Steam Hotfix 0.9.9 includes rebalanced achievement metrics for <code className="text-amber-300 font-mono">&quot;All Biomes Won&quot;</code>.
        </div>
      </div>
    </div>
  );
}
