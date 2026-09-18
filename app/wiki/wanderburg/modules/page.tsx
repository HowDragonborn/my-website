import { Metadata } from 'next';
import { MODULES_DATA } from '../data';

export const metadata: Metadata = {
  title: 'Module Unlock Tree | Wanderburg Wiki',
  description: 'Complete 20-module unlock table, Silver costs, upgrade paths, and challenge requirements for Wanderburg.',
};

export default function ModulesPage() {
  const starters = MODULES_DATA.filter((m) => m.category === 'starter');
  const silvers = MODULES_DATA.filter((m) => m.category === 'silver');
  const upgrades = MODULES_DATA.filter((m) => m.category === 'upgrade');
  const challenges = MODULES_DATA.filter((m) => m.category === 'challenge');

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Complete Closed-Set Modules
          </span>
          <span className="text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full font-mono">
            20 Modules Total
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-white">
          Wanderburg Module Unlock Tree
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Modules bolt onto vehicle chassis slots (Front / Side / Top / Back / Crew). Unlock modules with Silver, in-run level upgrades, or cumulative achievements.
        </p>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs text-amber-300 flex items-center gap-2">
          <span>⚙️</span>
          <span><strong>Passive Mechanics Bonus:</strong> Steam Hotfix 0.9.10 grants <strong>+1 New Module Reroll</strong> per 6 unlocked Modules!</span>
        </div>
      </div>

      {/* 1. Starter Modules */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs rounded uppercase font-semibold">
            Starter
          </span>
          Starter Modules (Default Access)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {starters.map((m) => (
            <div key={m.name} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-white">{m.name}</h4>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                    Starter
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">{m.roleOrDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Silver Meta Shop Unlocks */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs rounded uppercase font-semibold">
              Silver Shop
            </span>
            Meta Unlocks (Purchased with Silver)
          </h3>
          <span className="text-xs text-amber-300 font-mono">[verify costs]</span>
        </div>

        <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-800">
              <tr>
                <th className="p-4">Module</th>
                <th className="p-4">Silver Unlock Cost</th>
                <th className="p-4">Role & Action Description</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {silvers.map((m) => (
                <tr key={m.name} className="hover:bg-slate-800/40">
                  <td className="p-4 font-bold text-white flex items-center gap-2">
                    <span>🥈</span> {m.name}
                  </td>
                  <td className="p-4 text-amber-300 font-mono font-bold">{m.costOrReq}</td>
                  <td className="p-4 text-slate-200">{m.roleOrDesc}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
                      [verify]
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. In-Run Upgrade Evolutions */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs rounded uppercase font-semibold">
              In-Run Upgrade
            </span>
            Module Evolutions (Level 10 / Level 5 Upgrades)
          </h3>
          <span className="text-xs text-amber-300 font-mono">[verify reqs]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upgrades.map((m) => (
            <div key={m.name} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-start justify-between gap-1">
                  <h4 className="text-sm font-bold text-white">{m.name}</h4>
                  <span className="text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-800 px-1.5 py-0.5 rounded">
                    [verify]
                  </span>
                </div>
                <div className="mt-2 bg-slate-950 p-2 rounded text-xs font-mono text-purple-300 border border-slate-800">
                  Req: {m.costOrReq}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Cumulative Challenges */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs rounded uppercase font-semibold">
              Challenge
            </span>
            Cumulative Lifetime Milestones
          </h3>
          <span className="text-xs text-amber-300 font-mono">[verify reqs]</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map((m) => (
            <div key={m.name} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white">{m.name}</h4>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                  [verify] Challenge
                </span>
              </div>
              <p className="text-xs text-slate-300">{m.roleOrDesc}</p>
              <div className="bg-slate-950 p-2 rounded text-xs font-mono text-emerald-400 border border-slate-800">
                Unlock Requirement: {m.costOrReq}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
