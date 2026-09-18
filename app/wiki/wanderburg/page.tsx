import { Metadata } from 'next';
import Link from 'next/link';
import { WANDERBURG_GAME_INFO } from './data';

export const metadata: Metadata = {
  title: 'Wanderburg Wiki | Game Overview & Database',
  description: 'Wanderburg fan wiki overview, gap proof metrics, game loop quick facts, and content reference.',
};

export default function WanderburgOverviewPage() {
  const info = WANDERBURG_GAME_INFO;

  return (
    <div className="space-y-8">
      {/* Overview Intro Banner */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Game Overview
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Wanderburg (Early Access)
            </h2>
          </div>
          <div className="text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
            Steam App <code className="text-amber-300 font-mono">3624140</code>
          </div>
        </div>

        <p className="text-slate-300 text-base leading-relaxed">
          {info.tags}
        </p>

        {/* Metadata Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            <div className="text-[11px] text-slate-500 uppercase font-semibold">Developer</div>
            <div className="text-sm font-bold text-slate-200">{info.developer}</div>
          </div>
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            <div className="text-[11px] text-slate-500 uppercase font-semibold">Publisher</div>
            <div className="text-sm font-bold text-slate-200">{info.publisher}</div>
          </div>
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            <div className="text-[11px] text-slate-500 uppercase font-semibold">Release Date</div>
            <div className="text-sm font-bold text-slate-200">Sep 8, 2026</div>
          </div>
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
            <div className="text-[11px] text-slate-500 uppercase font-semibold">Platform</div>
            <div className="text-sm font-bold text-slate-200">PC (Steam Deck Playable)</div>
          </div>
        </div>
      </section>

      {/* Quick Facts Card */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">⚡</span> Quick Facts & Core Loop
        </h3>
        <div className="divide-y divide-slate-800">
          {info.quickFacts.map((fact, idx) => (
            <div key={idx} className="py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
              <span className="text-sm font-semibold text-amber-300/90 sm:w-1/3">{fact.label}</span>
              <span className="text-sm text-slate-300 sm:w-2/3">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gap Proof Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-amber-400">📈</span> Gap Proof & Player Signal
          </h3>
          <p className="text-slate-400 text-xs mt-1">Live market data & wiki validation metrics (Sampled 2026-09-18)</p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500">Steam Concurrent Peak</div>
            <div className="text-lg font-bold text-amber-400 mt-0.5">{info.gapProof.allTimePeak}</div>
            <div className="text-[11px] text-slate-400 mt-1">{info.gapProof.steamChartsPeak}</div>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500">Sales (First 3 Days)</div>
            <div className="text-lg font-bold text-emerald-400 mt-0.5">{info.gapProof.copiesSold}</div>
            <div className="text-[11px] text-slate-400 mt-1">{info.gapProof.streamers}</div>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500">Steam User Reviews</div>
            <div className="text-lg font-bold text-blue-400 mt-0.5">{info.gapProof.reviewsRating}</div>
            <div className="text-[11px] text-slate-400 mt-1">{info.gapProof.reviewsCount}</div>
          </div>
        </div>

        {/* Online Missing vs Wiki Value */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-red-950/30 border border-red-900/50 p-4 rounded-xl">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
              What&apos;s Missing Online
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {info.gapProof.missingOnline}
            </p>
          </div>
          <div className="bg-emerald-950/30 border border-emerald-900/50 p-4 rounded-xl">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              What This Wiki Fills
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {info.gapProof.wikiFills}
            </p>
          </div>
        </div>
      </section>

      {/* Shorts Hooks */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400">🎬</span> Content Creation & Shorts Hooks
        </h3>
        <p className="text-slate-400 text-xs">Recommended closed-set video ranking concepts for YouTube Shorts & TikTok</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Primary Hook */}
          <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded border border-amber-500/40">
                Primary Board
              </span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">
                {info.shortsHooks.primary.title}
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                {info.shortsHooks.primary.desc}
              </p>
            </div>
            <div className="space-y-1.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Paste-Ready Titles:</div>
              {info.shortsHooks.primary.readyTitles.map((t, idx) => (
                <code key={idx} className="block text-[11px] text-amber-200 font-mono bg-slate-950 px-2 py-1 rounded">
                  {t}
                </code>
              ))}
            </div>
          </div>

          {/* Backup Hook */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                Backup Board
              </span>
              <h4 className="text-base font-bold text-white mt-2 mb-1">
                {info.shortsHooks.backup.title}
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                {info.shortsHooks.backup.desc}
              </p>
            </div>
            <div className="space-y-1.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Paste-Ready Titles:</div>
              {info.shortsHooks.backup.readyTitles.map((t, idx) => (
                <code key={idx} className="block text-[11px] text-amber-200 font-mono bg-slate-950 px-2 py-1 rounded">
                  {t}
                </code>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Links to Wiki Sections */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
        <Link href="/wiki/wanderburg/captains" className="bg-slate-900 hover:bg-slate-800 p-4 rounded-xl border border-slate-800 text-center transition-colors">
          <div className="text-lg mb-1">🛡️</div>
          <div className="text-sm font-bold text-white">Captains Roster</div>
          <div className="text-[11px] text-slate-400 mt-0.5">14 Captains</div>
        </Link>
        <Link href="/wiki/wanderburg/modules" className="bg-slate-900 hover:bg-slate-800 p-4 rounded-xl border border-slate-800 text-center transition-colors">
          <div className="text-lg mb-1">⚙️</div>
          <div className="text-sm font-bold text-white">Module Tree</div>
          <div className="text-[11px] text-slate-400 mt-0.5">20 Modules</div>
        </Link>
        <Link href="/wiki/wanderburg/vehicles" className="bg-slate-900 hover:bg-slate-800 p-4 rounded-xl border border-slate-800 text-center transition-colors">
          <div className="text-lg mb-1">🚜</div>
          <div className="text-sm font-bold text-white">Vehicles</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Tower & Spiderburg</div>
        </Link>
      </div>
    </div>
  );
}
