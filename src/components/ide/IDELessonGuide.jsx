import React from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  Terminal, 
  X,
  HelpCircle
} from 'lucide-react';
import TechIcon from '../TechIcon';

export default function IDELessonGuide({
  lesson,
  language,
  theme = {},
  isOpen = true,
  onClose,
}) {
  if (!isOpen || !lesson) return null;

  return (
    <aside className="w-80 sm:w-88 bg-black/40 backdrop-blur-3xl border-l border-white/[0.08] flex flex-col font-sans text-xs select-none shrink-0 h-full overflow-hidden transition-colors z-20">
      {/* 1. Header */}
      <div className="h-11 px-4 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-white/[0.01]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-[#30d158]" />
          <span className="text-xs font-semibold tracking-tight text-[#f5f5f7]">
            Lesson Guide
          </span>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/10 transition-all cursor-pointer"
            title="Close Guide"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 2. Scrollable Educational Cards (Apple Editorial Layout) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 leading-relaxed">
        {/* Lesson Title Banner */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1.5">
          <div className="flex items-center gap-2">
            <TechIcon id={language} className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[10px] text-[#30d158] uppercase font-mono font-bold tracking-wider">
              {language}
            </span>
          </div>
          <h3 className="text-sm font-semibold text-[#f5f5f7] tracking-tight">
            {lesson.title}
          </h3>
          <p className="text-xs text-[#86868b]">
            {lesson.task}
          </p>
        </div>

        {/* Card 1: What is this? */}
        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#f5f5f7]">
            <HelpCircle className="w-3.5 h-3.5 text-[#2997ff]" />
            <span>Concept Overview</span>
          </div>
          <p className="text-xs text-[#86868b] leading-relaxed">
            {lesson.concept}
          </p>
        </div>

        {/* Card 2: Why do we use it? */}
        {lesson.whyItMatters && (
          <div className="p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
              <Lightbulb className="w-3.5 h-3.5 text-[#ff9f0a]" />
              <span>Why It Matters</span>
            </div>
            <p className="text-xs text-[#86868b] leading-relaxed">
              {lesson.whyItMatters}
            </p>
          </div>
        )}

        {/* Card 3: Expected Console Output */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#86868b]">
            <Terminal className="w-3.5 h-3.5 text-[#30d158]" />
            <span>Target Output</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-black/60">
            <pre className="p-3.5 text-[#9cdcfe] font-mono text-[11px] overflow-x-auto whitespace-pre leading-relaxed">
              {lesson.expectedOutput}
            </pre>
          </div>
        </div>

        {/* Card 4: Quick Pro Tips */}
        {lesson.keyTips && lesson.keyTips.length > 0 && (
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="text-xs font-semibold text-[#f5f5f7]">
              Developer Tips
            </div>
            <ul className="space-y-1.5 text-xs text-[#86868b]">
              {lesson.keyTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#2997ff] font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
