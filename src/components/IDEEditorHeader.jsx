import React from 'react';
import { 
  Play, 
  RotateCcw, 
  Eye, 
  Check, 
  Copy, 
  Lightbulb, 
  ChevronRight,
  Terminal,
  Sparkles
} from 'lucide-react';
import TechIcon from './TechIcon';

export default function IDEEditorHeader({
  lesson,
  language,
  highContrast,
  setHighContrast,
  fontSize,
  setFontSize,
  onReset,
  onRun,
  status,
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (!lesson?.content) return;
    navigator.clipboard.writeText(lesson.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!lesson) return null;

  return (
    <div className="border-b border-white/[0.08] bg-[#0c0e17] select-none font-mono text-xs">
      {/* Top Tabs Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/40 pr-3">
        {/* Active File Tab */}
        <div className="flex items-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#0c0e17] border-r border-t-2 border-r-white/[0.08] border-t-emerald-400 text-gray-200 font-semibold">
            <TechIcon id={language} className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[12px]">{lesson.filename || `${lesson.title}`}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
          </div>
        </div>

        {/* Editor Controls: Contrast, Font Size, Copy, Reset */}
        <div className="flex items-center gap-2">
          {/* High Contrast Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] border transition-colors ${
              highContrast
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                : 'border-white/10 text-gray-400 hover:text-gray-200'
            }`}
            title="High contrast text legibility"
          >
            <Eye className="w-3 h-3" />
            <span className="hidden sm:inline font-sans">High Contrast</span>
          </button>

          {/* Font Size Pills */}
          <div className="flex items-center bg-white/5 p-0.5 rounded border border-white/10 text-[10px]">
            {['normal', 'large', 'xl'].map((sz) => (
              <button
                key={sz}
                onClick={() => setFontSize(sz)}
                className={`px-1.5 py-0.2 rounded font-bold uppercase ${
                  fontSize === sz ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {sz === 'normal' ? 'A' : sz === 'large' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Reset Button */}
          <button
            onClick={onReset}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors text-[11px]"
            title="Restart current file (Esc)"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline font-sans">Reset</span>
          </button>
        </div>
      </div>

      {/* Breadcrumb & Task Objective Banner (Hick's Law: Ultra-clear, focused context) */}
      <div className="px-4 py-2.5 bg-white/[0.015] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-start sm:items-center gap-2 text-gray-300 font-sans">
          <div className="p-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 sm:mt-0">
            <Lightbulb className="w-3.5 h-3.5" />
          </div>
          <div className="leading-snug">
            <span className="font-semibold text-white">Task: </span>
            <span className="text-gray-300 text-[12px]">{lesson.task}</span>
            {lesson.concept && (
              <span className="text-gray-500 hidden md:inline ml-2 text-[11px]">
                ({lesson.concept})
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 text-[10px] text-gray-500 font-mono">
          <span className="px-1.5 py-0.5 rounded bg-white/5 text-gray-400 uppercase">
            {lesson.category}
          </span>
          <span className="px-1.5 py-0.5 rounded bg-white/5 text-emerald-400 uppercase font-semibold">
            {lesson.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}
