import React from 'react';
import { 
  Lightbulb, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Code2, 
  Zap, 
  BookOpen 
} from 'lucide-react';

export default function LessonHeader({
  theme,
  lesson,
  onPrevLesson,
  onNextLesson,
  hasPrev,
  hasNext,
  onOpenCommandPalette,
}) {
  if (!lesson) return null;

  return (
    <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#10131e]/70 backdrop-blur-xl font-sans relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Lesson Title & Concept */}
        <div className="space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
              Level {lesson.level}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10 uppercase">
              {lesson.badge}
            </span>
            <span className="text-gray-500 text-xs hidden sm:inline">•</span>
            <span className="text-xs text-gray-400 capitalize">
              Difficulty: <span className="text-gray-200 font-semibold">{lesson.difficulty}</span>
            </span>
          </div>

          <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {lesson.title}
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {lesson.concept}
          </p>
        </div>

        {/* Right: Navigation Controls (Fitts's Law: Clear, easy-to-hit controls) */}
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0 font-mono text-xs">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            title="Search all algorithms & lessons (Cmd + K)"
          >
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <span className="hidden sm:inline font-sans text-xs">Quick Jump</span>
            <kbd className="hidden sm:inline px-1.5 py-0.2 rounded bg-black/40 text-[10px] text-gray-400 border border-white/10">
              ⌘K
            </kbd>
          </button>

          {/* Previous Lesson */}
          <button
            onClick={onPrevLesson}
            disabled={!hasPrev}
            className={`p-2 rounded-xl border transition-colors ${
              hasPrev
                ? 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border-white/10'
                : 'bg-white/[0.02] text-gray-600 border-white/[0.04] cursor-not-allowed'
            }`}
            title="Previous lesson"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Lesson */}
          <button
            onClick={onNextLesson}
            disabled={!hasNext}
            className={`flex items-center gap-1 px-3 py-2 rounded-xl border transition-colors ${
              hasNext
                ? `${theme.primaryBg} text-black font-bold border-transparent hover:opacity-90 shadow-md`
                : 'bg-white/[0.02] text-gray-600 border-white/[0.04] cursor-not-allowed'
            }`}
            title="Next lesson"
          >
            <span className="font-sans text-xs">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Learning Tip Callout (Aesthetic-Usability Effect: High-value contextual learning) */}
      {lesson.learningTip && (
        <div className="mt-3.5 pt-3 border-t border-white/5 flex items-start gap-2.5 text-xs text-gray-400">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span className="leading-relaxed font-sans">
            <strong className="text-gray-200">How it works: </strong>
            {lesson.learningTip}
          </span>
        </div>
      )}
    </div>
  );
}
