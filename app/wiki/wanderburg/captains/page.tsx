import { Metadata } from 'next';
import { CAPTAINS_DATA } from '../data';

export const metadata: Metadata = {
  title: 'Captains Roster | Wanderburg Wiki',
  description: 'Complete closed-set roster of Wanderburg Captains, Steam patch notes, and community verify data.',
};

export default function CaptainsPage() {
  const steamVerified = CAPTAINS_DATA.filter((c) => c.verifiedStatus === 'steam');
  const communityVerified = CAPTAINS_DATA.filter((c) => c.verifiedStatus === 'community');

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Primary Closed-Set Board
          </span>
          <span className="text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full font-mono">
            {CAPTAINS_DATA.length} Captains Listed
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-white">
          Wanderburg Captains Roster
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Captains are permanent between-run Silver shop purchases. Each applies a run-wide tradeoff. This is the primary closed-set board for S–D tier rankings.
        </p>
      </div>

      {/* Steam Verified Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs rounded uppercase font-semibold">
              Steam Patch Verified
            </span>
            Official Steam News Roster ({steamVerified.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steamVerified.map((captain) => (
            <div
              key={captain.name}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 p-5 rounded-xl space-y-3 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-amber-400">👑</span> {captain.name}
                </h4>
                <span className="text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-2 py-0.5 rounded">
                  Steam Official
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                {captain.details}
              </p>

              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                <span className="text-slate-500 font-semibold">Source Evidence:</span>
                <span className="font-mono text-emerald-400/90">{captain.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Documented Section with [verify] badges */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs rounded uppercase font-semibold">
              Community Documented
            </span>
            Guides Roster ({communityVerified.length})
          </h3>
          <span className="text-xs text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2.5 py-1 rounded font-mono">
            [verify] Active
          </span>
        </div>

        <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[11px] border-b border-slate-800">
              <tr>
                <th className="p-4">Captain</th>
                <th className="p-4">Verification Status</th>
                <th className="p-4">Consensus Role / Tradeoff Modifier</th>
                <th className="p-4">Source Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {communityVerified.map((captain) => (
                <tr key={captain.name} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-white flex items-center gap-2">
                    <span>⚔️</span> {captain.name}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
                      [verify] Community
                    </span>
                  </td>
                  <td className="p-4 text-slate-200">{captain.details}</td>
                  <td className="p-4 text-slate-500 font-mono text-[11px]">{captain.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Video Shorts & Ranking Note */}
      <div className="bg-amber-950/30 border border-amber-800/50 p-4 rounded-xl text-xs text-amber-200/90 leading-relaxed space-y-1">
        <div className="font-bold text-amber-300 flex items-center gap-2">
          <span>💡</span> Shorts Filming & Ranking Note
        </div>
        <p>
          When filming <code className="text-amber-200 font-semibold">&quot;Ranking Every Wanderburg Captain&quot;</code>, cover all 14 listed Captains as one closed board. Prefer Steam-verified spelling <strong>PatchyThePirate</strong> (guides sometimes abbreviate to &quot;Patchy&quot;). Flag unverified ability percentages on-screen as <code className="bg-amber-900/60 px-1 rounded">[verify]</code> until checked against the in-game shop.
        </p>
      </div>
    </div>
  );
}
