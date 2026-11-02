import React from 'react';
import { 
  FolderOpen, 
  FileCode, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  BookOpen, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import TechIcon from './TechIcon';

export default function IDEFileExplorer({
  currentLanguage,
  lessons,
  currentLessonId,
  onSelectLesson,
  completedLessonIds,
}) {
  const completedCount = lessons.filter((l) => completedLessonIds.has(l.id)).length;
  const progressPct = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  return (
    <aside className="w-64 sm:w-72 border-r border-white/[0.08] bg-[#090b13]/95 flex flex-col font-mono text-xs select-none shrink-0 h-full">
      {/* Sidebar Header */}
      <div className="p-3 border-b border-white/[0.08] flex items-center justify-between text-gray-400">
        <span className="text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5 text-gray-300">
          <FolderOpen className="w-3.5 h-3.5 text-emerald-400" />
          <span>Explorer : {currentLanguage.toUpperCase()}</span>
        </span>
        <span className="text-[10px] text-gray-400 font-sans">
          {completedCount}/{lessons.length} done
        </span>
      </div>

      {/* Track Progress Mini Bar */}
      <div className="px-3 pt-2 pb-1">
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* File List */}
      <div className="flex-1 overflow-y-auto py-2 space-y-0.5">
        <div className="px-3 py-1 text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-1">
          <ChevronDown className="w-3 h-3" />
          <span>curriculum_files</span>
        </div>

        {lessons.map((lesson) => {
          const isCompleted = completedLessonIds.has(lesson.id);
          const isActive = lesson.id === currentLessonId;

          return (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className={`w-full px-3 py-2 text-left flex items-center justify-between gap-2 transition-colors border-l-2 ${
                isActive
                  ? 'bg-white/10 text-white font-semibold border-emerald-400'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04] border-transparent'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <TechIcon id={currentLanguage} className="w-3.5 h-3.5 shrink-0 opacity-80" />
                <span className="truncate text-[11px] font-mono">
                  {lesson.filename || lesson.title}
                </span>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="text-[9px] px-1 py-0.2 rounded bg-white/5 text-gray-500 uppercase font-sans">
                    {lesson.difficulty}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Sidebar Footer Hint */}
      <div className="p-3 border-t border-white/[0.08] text-[10px] text-gray-500 font-sans flex items-center justify-between">
        <span>Learn by Doing</span>
        <span className="text-emerald-400">{progressPct}% mastered</span>
      </div>
    </aside>
  );
}
