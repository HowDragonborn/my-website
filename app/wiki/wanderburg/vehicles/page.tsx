import { Metadata } from 'next';
import { VEHICLES_DATA } from '../data';

export const metadata: Metadata = {
  title: 'Player Vehicles | Wanderburg Wiki',
  description: 'Wanderburg player chassis guide covering Tower and Spiderburg unlock conditions, slot layouts, and physics traits.',
};

export default function VehiclesPage() {
  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
          Chassis & Vehicles
        </span>
        <h2 className="text-2xl font-extrabold text-white">
          Wanderburg Player Vehicles
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Your vehicle chassis defines your fortress movement, terrain traversal, collision profile, and available module slot distribution.
        </p>
      </div>

      {/* Vehicle Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {VEHICLES_DATA.map((vehicle) => (
          <div
            key={vehicle.name}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl space-y-5 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>🚜</span> {vehicle.name}
                  </h3>
                  <span className="text-xs text-amber-300 font-mono mt-1 block">
                    Slots: {vehicle.slots}
                  </span>
                </div>
                {vehicle.verifiedStatus === 'steam' ? (
                  <span className="text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-1 rounded">
                    Steam Verified
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold bg-amber-950 text-amber-300 border border-amber-800 px-2 py-1 rounded">
                    [verify] Community
                  </span>
                )}
              </div>

              {/* Notes */}
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
                {vehicle.notes}
              </p>

              {/* Unlock Condition */}
              <div className="space-y-1">
                <div className="text-[11px] text-slate-500 uppercase font-semibold">Unlock Requirement:</div>
                <div className="text-xs font-mono text-amber-200 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                  {vehicle.unlockCondition}
                </div>
              </div>

              {/* Traits list */}
              {vehicle.traits && vehicle.traits.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Chassis Traits:</div>
                  <ul className="space-y-1">
                    {vehicle.traits.map((trait, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-amber-400 text-xs">▸</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Evidence Footer */}
            <div className="border-t border-slate-800/80 pt-3 text-[11px] text-slate-400 flex items-center justify-between">
              <span className="text-slate-500 font-medium">Patch Evidence:</span>
              <span className="font-mono text-amber-300/80">{vehicle.evidence}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Spiderburg Special Loadout Caution */}
      <div className="bg-amber-950/40 border border-amber-800/60 p-5 rounded-2xl text-xs text-amber-200/90 leading-relaxed space-y-2">
        <div className="font-bold text-amber-300 flex items-center gap-2 text-sm">
          <span>⚠️</span> Spiderburg Loadout Caution
        </div>
        <p>
          It is possible to unlock the Spiderburg vehicle in Golden Dunes before owning at least two usable Top modules. If unlocked early, the loadout interface will freeze or refuse to start the run until a second Top module is unlocked from the Silver shop or achievements. (Hotfix 0.9.8 added loadout safety handling for this condition).
        </p>
      </div>
    </div>
  );
}
