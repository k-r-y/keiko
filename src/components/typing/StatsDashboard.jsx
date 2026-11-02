import React, { useState, useMemo } from 'react';
import {
  Zap,
  TrendingUp,
  Target,
  Clock,
  Award,
  AlertTriangle,
  Keyboard,
  RotateCcw,
  Trash2,
  Layers,
  Flame,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import {
  getTestHistory,
  getLifetimeStats,
  getProblemKeys,
  formatDuration,
  getBadgesStatus,
  clearTestHistory,
} from '../../utils/history';
import { getCharKeyInfo, FINGER_COLORS } from '../../data/keyboardLayout';
import TechIcon from '../TechIcon';

export default function StatsDashboard({
  theme = {},
  onStartPractice,
}) {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Compute live data
  const stats = useMemo(() => getLifetimeStats(), [refreshTrigger]);
  const history = useMemo(() => getTestHistory(), [refreshTrigger]);
  const problemKeys = useMemo(() => getProblemKeys().slice(0, 10), [refreshTrigger]);
  const badges = useMemo(() => getBadgesStatus(), [refreshTrigger]);

  const handleClear = () => {
    clearTestHistory();
    setShowClearConfirm(false);
    setRefreshTrigger((prev) => prev + 1);
  };

  const getBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#2997ff]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#30d158]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#ff9f0a]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#30d158]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#bf5af2]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#2997ff]" />;
      case 'Award':
      default:
        return <Award className="w-5 h-5 text-[#ffd60a]" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto bg-black text-[#f5f5f7] font-sans p-4 sm:p-8 lg:p-12 gap-6 sm:gap-8 select-none">
      {/* 1. Apple Hero Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08] shrink-0">
        <div>
          <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider font-mono">
            Performance Metrics
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Developer Analytics
          </h1>
          <p className="text-xs sm:text-sm text-[#86868b] mt-1.5 max-w-xl">
            Real-time speed benchmarks, accuracy metrics, and syntax problem-key analysis.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-stretch sm:self-auto shrink-0">
          {history.length > 0 && (
            <button
              onClick={() => setShowClearConfirm(true)}
              className="px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Reset history"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Reset Data</span>
            </button>
          )}

          {onStartPractice && (
            <button
              onClick={onStartPractice}
              className="apple-button-primary px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Practice Code</span>
            </button>
          )}
        </div>
      </div>

      {/* Clear Confirmation Prompt */}
      {showClearConfirm && (
        <div className="p-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
            <p className="text-xs sm:text-sm text-rose-200">
              Are you sure you want to reset all test statistics and history?
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowClearConfirm(false)}
              className="px-3 py-1 rounded-full text-xs text-slate-300 hover:text-white bg-white/[0.05] border border-white/10 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleClear}
              className="px-3.5 py-1 rounded-full text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* 2. Apple Fitness-Style Metric Bento Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Average WPM */}
        <div className="apple-glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#86868b] text-[11px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <span>Average Speed</span>
            <Zap className="w-3.5 h-3.5 text-[#30d158]" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              {stats.averageWpm}
            </span>
            <span className="text-xs text-[#86868b] font-sans">WPM</span>
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#86868b] mt-2 sm:mt-3 truncate">
            Across {stats.totalTests} session{stats.totalTests === 1 ? '' : 's'}
          </div>
        </div>

        {/* Peak Speed */}
        <div className="apple-glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#86868b] text-[11px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <span>Peak Velocity</span>
            <Flame className="w-3.5 h-3.5 text-[#ff9f0a]" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#ff9f0a] font-mono tabular-nums">
              {stats.bestWpm}
            </span>
            <span className="text-xs text-[#86868b] font-sans">WPM</span>
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#86868b] mt-2 sm:mt-3">Personal Best</div>
        </div>

        {/* Accuracy */}
        <div className="apple-glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#86868b] text-[11px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <span>Precision</span>
            <Target className="w-3.5 h-3.5 text-[#2997ff]" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-4xl font-extrabold text-[#2997ff] font-mono tabular-nums">
              {stats.averageAccuracy}%
            </span>
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#86868b] mt-2 sm:mt-3 truncate">
            {stats.totalErrors} error{stats.totalErrors === 1 ? '' : 's'}
          </div>
        </div>

        {/* Total Time */}
        <div className="apple-glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#86868b] text-[11px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <span>Time Spent</span>
            <Clock className="w-3.5 h-3.5 text-[#bf5af2]" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-3xl font-extrabold text-[#bf5af2] font-mono tabular-nums">
              {formatDuration(stats.totalTimeSeconds)}
            </span>
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#86868b] mt-2 sm:mt-3 truncate">Active keystrokes</div>
        </div>

        {/* Sessions Completed */}
        <div className="apple-glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl col-span-2 sm:col-span-1 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#86868b] text-[11px] font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <span>Runs Done</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#30d158]" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              {stats.totalTests}
            </span>
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#86868b] mt-2 sm:mt-3 truncate">Completed runs</div>
        </div>
      </div>

      {/* 3. Middle Section: Problem Keys & Language Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Problem Keys Analysis */}
        <div className="lg:col-span-2 apple-glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">Tricky Programming Keys</h2>
              <p className="text-xs text-[#86868b] mt-0.5">
                Syntax characters causing typing bottlenecks and errors.
              </p>
            </div>
            <span className="text-xs font-mono text-[#86868b] px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 shrink-0">
              {problemKeys.length} Identified
            </span>
          </div>

          {problemKeys.length === 0 ? (
            <div className="py-10 text-center text-[#86868b] text-xs">
              <CheckCircle2 className="w-8 h-8 text-[#30d158]/40 mx-auto mb-2" />
              No problem keys recorded yet. Complete more coding tests to discover bottlenecks!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {problemKeys.map(({ key, count }) => {
                const info = getCharKeyInfo(key);
                const finger = info ? FINGER_COLORS[info.finger] : null;
                const displayKey = key === ' ' ? 'Space' : key === '\n' ? 'Enter' : key;

                return (
                  <div
                    key={key}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center font-mono font-bold text-rose-300 text-sm shrink-0">
                        {displayKey}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-[#f5f5f7]">
                          {count} mistake{count === 1 ? '' : 's'}
                        </div>
                        {finger && (
                          <div className="text-[11px] text-[#86868b] flex items-center gap-1.5 mt-0.5 truncate">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: finger.color }}
                            />
                            <span className="truncate">Use: {finger.name}</span>
                            {info.requiresShift && <span className="text-[#ff9f0a] font-mono text-[10px] shrink-0">(+Shift)</span>}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-[#86868b] px-2.5 py-1 rounded-full bg-white/[0.04] shrink-0">
                      {info?.key || key}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Language Breakdown */}
        <div className="apple-glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-5 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <h2 className="text-base font-bold text-white tracking-tight">Languages Practiced</h2>
              <p className="text-xs text-[#86868b] mt-0.5">Distribution of completed exercises</p>
            </div>

            {Object.keys(stats.languageBreakdown || {}).length === 0 ? (
              <div className="py-10 text-center text-[#86868b] text-xs">
                No language data recorded yet.
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(stats.languageBreakdown).map(([langId, count]) => {
                  const percent = Math.round((count / stats.totalTests) * 100);
                  return (
                    <div key={langId} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <TechIcon name={langId} className="w-3.5 h-3.5" />
                          <span className="capitalize text-[#f5f5f7]">{langId}</span>
                        </div>
                        <span className="text-[#86868b]">{count} ({percent}%)</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#2997ff] to-[#30d158] rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] text-[11px] text-[#86868b] flex items-center gap-2.5 mt-4">
            <ShieldCheck className="w-4 h-4 text-[#30d158] shrink-0" />
            <span>Practice across varied syntax ecosystems to strengthen universal muscle memory.</span>
          </div>
        </div>
      </div>

      {/* 4. Apple Activity Awards Style Milestones */}
      <div className="apple-glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">Developer Milestones</h2>
            <p className="text-xs text-[#86868b] mt-0.5">
              Badges unlocked by speed, endurance, and precision.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white shrink-0">
            {badges.filter((b) => b.unlocked).length} / {badges.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {badges.map((badge) => {
            const isUnlocked = badge.unlocked;
            return (
              <div
                key={badge.id}
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-gradient-to-b from-white/[0.06] to-white/[0.02] border-white/20 text-white shadow-sm'
                    : 'bg-white/[0.01] border-white/[0.04] text-[#86868b] opacity-40'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    isUnlocked
                      ? 'bg-white/[0.08] border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]'
                      : 'bg-white/[0.02] text-[#86868b] border-white/5'
                  }`}
                >
                  {getBadgeIcon(badge.icon)}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold flex items-center gap-1.5">
                    <span className="truncate">{badge.title}</span>
                    {isUnlocked && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#30d158] shrink-0" />
                    )}
                  </div>
                  <div className="text-[11px] text-[#86868b] mt-1 leading-snug">
                    {badge.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Apple Clean Activity History Table */}
      <div className="apple-glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">Recent Activity Log</h2>
            <p className="text-xs text-[#86868b] mt-0.5">Chronological record of completed runs</p>
          </div>
          <span className="text-xs font-mono text-[#86868b] shrink-0">
            Last {Math.min(history.length, 15)} records
          </span>
        </div>

        {history.length === 0 ? (
          <div className="py-10 text-center text-[#86868b] text-xs">
            No completed tests found yet. Start typing to view your historical speed log.
          </div>
        ) : (
          <div className="overflow-x-auto -mx-2 sm:mx-0 px-2 sm:px-0">
            <table className="w-full text-left text-xs font-sans min-w-[500px]">
              <thead>
                <tr className="border-b border-white/[0.08] text-[#86868b] text-[11px]">
                  <th className="pb-3 font-medium">Timestamp</th>
                  <th className="pb-3 font-medium">Exercise</th>
                  <th className="pb-3 font-medium">Language</th>
                  <th className="pb-3 font-medium text-right">Net Speed</th>
                  <th className="pb-3 font-medium text-right">Accuracy</th>
                  <th className="pb-3 font-medium text-right">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {history.slice(0, 15).map((entry) => (
                  <tr key={entry.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 text-[#86868b] font-mono text-[11px] whitespace-nowrap">
                      {new Date(entry.timestamp).toLocaleDateString()} {new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="py-3 font-medium text-[#f5f5f7] truncate max-w-xs">
                      {entry.title || 'Code Exercise'}
                    </td>
                    <td className="py-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] text-[#f5f5f7]">
                        <TechIcon name={entry.language} className="w-3 h-3" />
                        <span className="capitalize">{entry.language}</span>
                      </span>
                    </td>
                    <td className="py-3 text-right font-mono font-bold text-[#30d158] whitespace-nowrap">
                      {entry.netWpm} WPM
                    </td>
                    <td className="py-3 text-right font-mono text-[#2997ff] whitespace-nowrap">
                      {entry.accuracy}%
                    </td>
                    <td className="py-3 text-right font-mono text-[#86868b] whitespace-nowrap">
                      {entry.elapsedSeconds}s
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
