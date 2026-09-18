'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/wiki/wanderburg', label: 'Overview', desc: 'Game Overview & Gap Proof' },
  { href: '/wiki/wanderburg/captains', label: 'Captains', desc: 'Closed-Set Roster' },
  { href: '/wiki/wanderburg/modules', label: 'Modules', desc: '20-Module Unlock Tree' },
  { href: '/wiki/wanderburg/vehicles', label: 'Vehicles', desc: 'Tower & Spiderburg' },
  { href: '/wiki/wanderburg/biomes', label: 'Biomes & Bosses', desc: 'Lands, Dark Tower, Bosses' },
  { href: '/wiki/wanderburg/systems', label: 'Systems', desc: 'Silver, Rerolls, Nitro, EA' },
  { href: '/wiki/wanderburg/sources', label: 'Sources', desc: 'Steam URLs & Verification' },
];

export default function WanderburgLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Wiki Header */}
      <header className="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/wiki" className="text-amber-400 hover:text-amber-300 text-sm font-semibold tracking-wider uppercase">
              ← Wiki Hub
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 text-sm font-medium">Wanderburg</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
              Wanderburg Wiki
            </span>
            <span className="text-xs font-normal px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full">
              Early Access v0.9.10
            </span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Minimalist medieval castle-on-wheels roguelike fan wiki & reference guide.
          </p>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 px-4 py-2.5 rounded-lg flex items-center justify-between text-sm font-medium hover:bg-slate-800"
          >
            <span>Navigation Menu</span>
            <span className="text-amber-400 font-bold">{mobileNavOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>

      {/* Main Container with Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <aside className={`md:block ${mobileNavOpen ? 'block' : 'hidden'} md:col-span-1`}>
          <nav className="sticky top-6 flex flex-col gap-1.5 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-800 mb-1">
              Wanderburg Sections
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`group px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex flex-col ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white border border-transparent'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {isActive && <span className="text-amber-400 text-xs">●</span>}
                  </span>
                  <span className={`text-[11px] mt-0.5 ${isActive ? 'text-amber-300/70' : 'text-slate-500 group-hover:text-slate-400'}`}>
                    {item.desc}
                  </span>
                </Link>
              );
            })}

            <div className="mt-4 pt-3 border-t border-slate-800 px-3">
              <div className="text-[11px] text-slate-500">
                Channel: <span className="text-slate-400 font-medium">HowDragonborn</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Data updated: <span className="text-slate-400">2026-09-18</span>
              </div>
            </div>
          </nav>
        </aside>

        {/* Page Content Area */}
        <main className="md:col-span-3 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
