import { Metadata } from 'next';
import { SOURCES_DATA } from '../data';

export const metadata: Metadata = {
  title: 'Sources & Verification | Wanderburg Wiki',
  description: 'Primary Steam sources, patch notes references, community guides verification list, and gap analysis.',
};

export default function SourcesPage() {
  const primarySources = SOURCES_DATA.filter((s) => s.type === 'primary');
  const secondarySources = SOURCES_DATA.filter((s) => s.type === 'secondary');
  const gapSources = SOURCES_DATA.filter((s) => s.type === 'gap');

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
          References & Proof
        </span>
        <h2 className="text-2xl font-extrabold text-white">
          Wanderburg Sources & Verification
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          Every stat, name, and unlock condition in this wiki is tied to official Steam patch notes or marked with <code className="text-amber-300 font-mono">[verify]</code> for community-documented rows.
        </p>
      </div>

      {/* Primary Steam Sources */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs rounded uppercase font-semibold">
            Primary Sources
          </span>
          Official Steam Store & Patch News Hub
        </h3>

        <div className="space-y-3">
          {primarySources.map((source, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-base font-bold text-white">{source.title}</h4>
                {source.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>Visit Source Link</span> ↗
                  </a>
                )}
              </div>
              <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                {source.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary Community Sources */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs rounded uppercase font-semibold">
              Secondary Sources
            </span>
            Community Unlock & Roster Guides
          </h3>
          <span className="text-xs text-amber-300 font-mono">[verify] Active</span>
        </div>

        <div className="space-y-3">
          {secondarySources.map((source, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">{source.title}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                    [verify]
                  </span>
                </div>
                {source.url && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>Visit Guide</span> ↗
                  </a>
                )}
              </div>
              <p className="text-xs text-slate-300 bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                {source.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gap Analysis */}
      <section className="space-y-3 pt-2">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs rounded uppercase font-semibold">
            Gap Analysis
          </span>
          Internet Wiki Availability Check
        </h3>

        {gapSources.map((source, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs text-slate-300">
            {source.notes}
          </div>
        ))}
      </section>
    </div>
  );
}
