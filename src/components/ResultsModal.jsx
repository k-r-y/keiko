import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  ArrowRight, 
  Share2, 
  Check, 
  Activity, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

export default function ResultsModal({
  theme = {},
  stats = {},
  snippet,
  nextSnippet,
  onRestart,
  onNext,
  onViewStats,
  isOpen,
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (stats.netWpm >= 25 || stats.accuracy >= 90) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#2997ff', '#30d158', '#ffd60a'],
        });
      }
    }
  }, [isOpen, stats.netWpm, stats.accuracy]);

  if (!isOpen) return null;

  const handleShare = () => {
    const text = `Keiko Pro // Verification:\n• Module: ${snippet?.filename || snippet?.title}\n• Velocity: ${stats.netWpm} WPM\n• Precision: ${stats.accuracy}%\n• Time: ${stats.elapsedSeconds}s\nMaster software engineering through authentic typing.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-3xl animate-in fade-in duration-200">
      <div className="w-full max-w-lg apple-glass rounded-2xl sm:rounded-3xl p-5 sm:p-9 font-sans relative overflow-hidden border border-white/15">
        {/* Top Specular Ambient Glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-white shadow-inner">
              <Sparkles className="w-5 h-5 text-[#30d158]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Exercise Complete
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#30d158]/15 text-[#30d158] font-bold uppercase font-mono tracking-wider border border-[#30d158]/30">
                  Passed
                </span>
              </div>
              <p className="text-xs text-[#86868b] mt-0.5">
                {snippet?.title || 'Code Exercise'}
              </p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs text-[#86868b] hover:text-white transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#30d158]" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>

        {/* Apple Bento KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
            <div className="flex items-center gap-1 text-[11px] text-[#86868b] font-medium">
              <Zap className="w-3 h-3 text-[#30d158]" />
              <span>Speed</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums">
              {stats.netWpm || 0} <span className="text-xs text-[#86868b] font-sans font-normal">WPM</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
            <div className="flex items-center gap-1 text-[11px] text-[#86868b] font-medium">
              <CheckCircle2 className="w-3 h-3 text-[#2997ff]" />
              <span>Accuracy</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums">
              {stats.accuracy || 100}<span className="text-xs text-[#86868b] font-sans font-normal">%</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
            <div className="flex items-center gap-1 text-[11px] text-[#86868b] font-medium">
              <Clock className="w-3 h-3 text-[#ff9f0a]" />
              <span>Time</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums">
              {stats.elapsedSeconds || 0}<span className="text-xs text-[#86868b] font-sans font-normal">s</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
            <div className="flex items-center gap-1 text-[11px] text-[#86868b] font-medium">
              <Activity className="w-3 h-3 text-[#bf5af2]" />
              <span>Errors</span>
            </div>
            <div className={`text-2xl font-bold font-mono tabular-nums ${stats.errorCount > 0 ? 'text-[#ff453a]' : 'text-[#30d158]'}`}>
              {stats.errorCount || 0}
            </div>
          </div>
        </div>

        {/* Expected Terminal Output Verified */}
        <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08] mb-6 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 font-medium text-[#30d158]">
              <Check className="w-3.5 h-3.5" />
              <span>Program Verified & Executed in Terminal</span>
            </span>
            <span className="font-mono text-[10px] text-[#86868b]">exit 0</span>
          </div>
          <pre className="text-xs font-mono text-[#9cdcfe] bg-white/[0.02] p-3 rounded-xl border border-white/5 overflow-x-auto whitespace-pre">
            {snippet?.expectedOutput || 'Execution completed with return code 0.'}
          </pre>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 gap-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2">
            <button
              onClick={onRestart}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-[#f5f5f7] transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#86868b]" />
              <span>Retry</span>
            </button>

            {onViewStats && (
              <button
                onClick={onViewStats}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-xs font-medium text-[#f5f5f7] transition-all cursor-pointer"
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#2997ff]" />
                <span>Analytics</span>
              </button>
            )}
          </div>

          <button
            onClick={onNext}
            className="apple-button-primary flex items-center gap-2 px-6 py-2.5 text-xs font-semibold cursor-pointer"
          >
            <span>{nextSnippet ? `Next: ${nextSnippet.filename}` : 'Next Track'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
