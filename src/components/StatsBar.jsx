import React from 'react';
import { Zap, CheckCircle2, AlertTriangle, Clock, Award } from 'lucide-react';

export default function StatsBar({
  theme,
  stats,
  timeLeft,
  mode,
  status,
}) {
  const isRunning = status === 'running';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 font-mono text-xs">
      {/* 1. Speed (Net WPM) */}
      <div className="p-3 sm:p-3.5 rounded-xl border border-white/[0.08] bg-[#10131e]/80 backdrop-blur-md flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between text-gray-400 mb-1 font-sans">
          <span className="text-[10px] uppercase tracking-wider font-semibold">Speed</span>
          <Zap className={`w-3.5 h-3.5 ${theme.primary}`} />
        </div>
        <div className="flex items-baseline gap-1.5 my-0.5">
          <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${theme.primary}`}>
            {stats.netWpm}
          </span>
          <span className="text-[11px] text-gray-400">WPM</span>
        </div>
        <div className="text-[10px] text-gray-500 flex justify-between">
          <span>Raw: {stats.rawWpm}</span>
          <span>CPM: {stats.cpm}</span>
        </div>
      </div>

      {/* 2. Accuracy */}
      <div className="p-3 sm:p-3.5 rounded-xl border border-white/[0.08] bg-[#10131e]/80 backdrop-blur-md flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between text-gray-400 mb-1 font-sans">
          <span className="text-[10px] uppercase tracking-wider font-semibold">Accuracy</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <div className="flex items-baseline gap-1.5 my-0.5">
          <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            stats.accuracy >= 95 ? 'text-emerald-400' : stats.accuracy >= 85 ? 'text-amber-400' : 'text-rose-400'
          }`}>
            {stats.accuracy}%
          </span>
        </div>
        <div className="text-[10px] text-gray-500">
          <span>{stats.correctChars} / {stats.totalChars} chars</span>
        </div>
      </div>

      {/* 3. Mistakes */}
      <div className="p-3 sm:p-3.5 rounded-xl border border-white/[0.08] bg-[#10131e]/80 backdrop-blur-md flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between text-gray-400 mb-1 font-sans">
          <span className="text-[10px] uppercase tracking-wider font-semibold">Mistakes</span>
          <AlertTriangle className={`w-3.5 h-3.5 ${stats.errorCount > 0 ? 'text-rose-400' : 'text-gray-500'}`} />
        </div>
        <div className="flex items-baseline gap-1.5 my-0.5">
          <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            stats.errorCount === 0 ? 'text-gray-400' : 'text-rose-400'
          }`}>
            {stats.errorCount}
          </span>
          <span className="text-[11px] text-gray-500">errs</span>
        </div>
        <div className="text-[10px] text-gray-500 truncate">
          {stats.errorCount > 0 ? 'Press Backspace' : 'Zero typos'}
        </div>
      </div>

      {/* 4. Time Elapsed / Remaining */}
      <div className="p-3 sm:p-3.5 rounded-xl border border-white/[0.08] bg-[#10131e]/80 backdrop-blur-md flex flex-col justify-between shadow-sm">
        <div className="flex items-center justify-between text-gray-400 mb-1 font-sans">
          <span className="text-[10px] uppercase tracking-wider font-semibold">
            {mode > 0 ? 'Countdown' : 'Elapsed'}
          </span>
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
        </div>
        <div className="flex items-baseline gap-1.5 my-0.5">
          <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            mode > 0 && timeLeft <= 5 ? 'text-rose-400 animate-pulse' : 'text-gray-200'
          }`}>
            {mode > 0 ? `${timeLeft}s` : `${stats.elapsedSeconds}s`}
          </span>
        </div>
        <div className="text-[10px] text-gray-500">
          {mode > 0 ? `Timer: ${mode}s` : 'Active run'}
        </div>
      </div>

      {/* 5. Mastery Tier */}
      <div className="p-3 sm:p-3.5 rounded-xl border border-white/[0.08] bg-[#10131e]/80 backdrop-blur-md flex flex-col justify-between shadow-sm col-span-2 sm:col-span-1">
        <div className="flex items-center justify-between text-gray-400 mb-1 font-sans">
          <span className="text-[10px] uppercase tracking-wider font-semibold">IT Tier</span>
          <Award className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <div className="truncate font-sans font-semibold text-xs sm:text-sm text-gray-200 mt-1">
          {stats.rank}
        </div>
        <div className="text-[10px] text-gray-500 mt-1 flex items-center justify-between">
          <span>{isRunning ? 'Benchmarking...' : 'Ready'}</span>
          <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-black/40 text-emerald-400 border border-emerald-500/20">
            {stats.netWpm >= 50 ? 'Senior' : 'Apprentice'}
          </span>
        </div>
      </div>
    </div>
  );
}
