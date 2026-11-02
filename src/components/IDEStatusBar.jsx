import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';
import { LANGUAGES } from '../data/curriculum';

export default function IDEStatusBar({
  language,
  lesson,
  stats,
  cursorIndex,
  totalChars,
  isPaused = false,
  theme = {},
}) {
  const activeLang = LANGUAGES.find((l) => l.id === language) || LANGUAGES[0];
  const progressPct = totalChars > 0 ? Math.round((cursorIndex / totalChars) * 100) : 0;

  return (
    <footer className="h-6 bg-black/80 backdrop-blur-3xl border-t border-white/[0.08] px-3 sm:px-4 flex items-center justify-between text-xs font-sans select-none z-30 shrink-0 text-[#86868b]">
      {/* Left: Active Track & File */}
      <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] min-w-0">
        <span className="text-[#86868b] capitalize hidden sm:inline">{activeLang.name}</span>
        <span className="text-[#86868b]/40 hidden sm:inline">•</span>
        <span className="text-[#f5f5f7] font-medium truncate max-w-[100px] sm:max-w-[220px]">
          {lesson?.filename || 'main.py'}
        </span>
        {isPaused && (
          <span className="text-[10px] text-amber-300 font-sans px-1.5 py-0.2 rounded-full bg-amber-500/10 border border-amber-500/30 animate-pulse ml-1 shrink-0">
            <span className="hidden sm:inline">Paused (Idle &gt; 5s)</span>
            <span className="sm:hidden">Paused</span>
          </span>
        )}
      </div>

      {/* Right: Key Metrics (Speed, Accuracy, Progress) */}
      <div className="flex items-center gap-2.5 sm:gap-4 text-[11px] font-mono shrink-0">
        <div className="flex items-center gap-1 font-semibold text-[#30d158] tabular-nums">
          <Zap className="w-3 h-3" />
          <span>{stats.netWpm || 0} WPM</span>
        </div>

        <div className="flex items-center gap-1 text-[#f5f5f7] tabular-nums">
          <span>{stats.accuracy || 100}%<span className="hidden sm:inline"> Acc</span></span>
        </div>

        <div className="hidden md:block bg-white/[0.06] border border-white/10 px-2 py-0.5 rounded-full text-[10px] tabular-nums text-[#f5f5f7] font-medium">
          {progressPct}% Typed
        </div>
      </div>
    </footer>
  );
}
