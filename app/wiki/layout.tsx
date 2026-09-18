import React from 'react';

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 rounded-xl shadow-2xl p-4 sm:p-6 my-2 border border-slate-800">
      {/* Disclaimer Banner */}
      <div className="bg-amber-950/60 border border-amber-800/60 text-amber-200 text-xs sm:text-sm px-4 py-2 rounded-lg mb-6 flex items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <span className="font-semibold px-2 py-0.5 bg-amber-800/80 text-amber-100 rounded text-[11px] uppercase tracking-wider">
            Fan Wiki
          </span>
          非官方社群 Wiki / Fan Wiki (Not officially affiliated with Randwerk or Sidekick Publishing)
        </span>
      </div>

      {children}
    </div>
  );
}
