import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  Award,
  Layers
} from 'lucide-react';
import { LANGUAGES } from '../data/curriculum';
import TechIcon from './TechIcon';

export default function LearningRoadmap({
  theme,
  currentLanguage,
  onSelectLanguage,
  lessons = [],
  currentLessonId,
  onSelectLesson,
  completedLessonIds = new Set(),
}) {
  const activeLang = LANGUAGES.find((l) => l.id === currentLanguage) || LANGUAGES[0];
  const completedCount = lessons.filter((l) => completedLessonIds.has(l.id)).length;
  const progressPct = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  return (
    <div className="space-y-3.5 font-mono">
      {/* 1. Language Switcher Pills (Fitts's Law + Hick's Law: Clear, grouped, accessible targets) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {LANGUAGES.map((lang) => {
          const isSelected = lang.id === currentLanguage;
          return (
            <button
              key={lang.id}
              onClick={() => onSelectLanguage(lang.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs whitespace-nowrap transition-all duration-200 border ${
                isSelected
                  ? 'bg-white/10 text-white font-semibold border-white/20 shadow-lg shadow-black/40 ring-1 ring-white/10'
                  : 'bg-white/[0.03] text-gray-400 hover:text-gray-200 border-white/[0.06] hover:bg-white/[0.06]'
              }`}
            >
              <TechIcon id={lang.id} className="w-4 h-4 shrink-0" />
              <span className="font-sans">{lang.name}</span>
              {isSelected && (
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Track Header & Progress Bar (Zeigarnik Effect + Goal Gradient Effect) */}
      <div className={`p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-[#10131e]/90 backdrop-blur-xl relative overflow-hidden shadow-xl`}>
        {/* Subtle accent gradient glow */}
        <div 
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ backgroundColor: activeLang.color }}
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 relative z-10">
          <div>
            <div className="flex items-center gap-2">
              <TechIcon id={activeLang.id} className="w-5 h-5 shrink-0" />
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans">
                {activeLang.name} Interactive Track
              </h2>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-semibold border ${activeLang.bgBadge}`}>
                Learn by Doing
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1 font-sans">
              {activeLang.tagline}
            </p>
          </div>

          {/* Progress Pill */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[11px] text-gray-400 font-sans">Track Progress</div>
              <div className="text-sm font-bold text-white font-mono">
                {completedCount} of {lessons.length} Completed ({progressPct}%)
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 bg-black/40 flex items-center justify-center font-mono font-bold text-xs text-emerald-400">
              {progressPct}%
            </div>
          </div>
        </div>

        {/* Progress Bar Line */}
        <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/5 mb-4">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* 3. Stepper Lesson Roadmap (Chunking by Miller's Law) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {lessons.map((lesson) => {
            const isCompleted = completedLessonIds.has(lesson.id);
            const isActive = lesson.id === currentLessonId;

            return (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className={`p-2.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between min-h-[76px] relative group ${
                  isActive
                    ? 'bg-white/15 border-white/30 shadow-md ring-1 ring-emerald-400/50'
                    : isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/20 hover:bg-emerald-950/30'
                    : 'bg-black/30 border-white/[0.05] hover:bg-white/[0.05] hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] text-gray-500 font-mono font-semibold">
                    Lvl {lesson.level}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : isActive ? (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ) : (
                    <Circle className="w-2.5 h-2.5 text-gray-600" />
                  )}
                </div>

                <div className={`text-xs font-sans font-medium line-clamp-2 leading-tight ${
                  isActive ? 'text-white font-bold' : isCompleted ? 'text-gray-200' : 'text-gray-400 group-hover:text-gray-200'
                }`}>
                  {lesson.title}
                </div>

                <div className="mt-1 flex items-center justify-between text-[9px] text-gray-500">
                  <span className="uppercase">{lesson.badge}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
