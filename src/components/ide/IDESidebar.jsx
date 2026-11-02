import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Search, 
  PlayCircle,
  X
} from 'lucide-react';
import { LANGUAGES, CURRICULUM } from '../../data/curriculum';
import TechIcon from '../TechIcon';

export default function IDESidebar({
  currentLanguage,
  currentLessonId,
  onSelectLesson,
  completedLessonIds = new Set(),
  theme = {},
  onClose,
}) {
  const [searchQuery, setSearchQuery] = useState('');

  // Active lessons in current language
  const activeLessons = CURRICULUM[currentLanguage] || [];
  const currentLangObj = LANGUAGES.find((l) => l.id === currentLanguage) || LANGUAGES[0];

  // Completed count
  const completedInLang = activeLessons.filter((l) => completedLessonIds.has(l.id)).length;
  const progressPercent = activeLessons.length > 0 ? Math.round((completedInLang / activeLessons.length) * 100) : 0;

  // Filter lessons by search query
  const filteredLessons = useMemo(() => {
    if (!searchQuery.trim()) return activeLessons;
    const q = searchQuery.toLowerCase().trim();
    return activeLessons.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.task.toLowerCase().includes(q) ||
        (l.filename && l.filename.toLowerCase().includes(q))
    );
  }, [activeLessons, searchQuery]);

  return (
    <aside className="w-64 sm:w-72 bg-black/40 backdrop-blur-3xl border-r border-white/[0.08] flex flex-col font-sans select-none shrink-0 h-full overflow-hidden transition-colors">
      {/* 1. Header: Lessons Overview */}
      <div className="h-11 px-4 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-white/[0.01]">
        <div className="flex items-center gap-2">
          <TechIcon id={currentLanguage} className="w-3.5 h-3.5 shrink-0" />
          <span className="text-xs font-semibold tracking-tight text-[#f5f5f7]">
            {currentLangObj.name} Track
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-[#30d158] font-mono tabular-nums">
            {completedInLang}/{activeLessons.length}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-full text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/10 transition-all cursor-pointer"
              title="Close Lessons"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Apple Quick Search Input */}
      <div className="p-3 border-b border-white/[0.06]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-white/20 transition-all font-sans"
          />
          <Search className="w-3.5 h-3.5 absolute right-3.5 top-2 text-[#86868b] pointer-events-none" />
        </div>
      </div>

      {/* 3. Minimalist Numbered Lessons List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredLessons.map((lesson, idx) => {
          const isActive = lesson.id === currentLessonId;
          const isCompleted = completedLessonIds.has(lesson.id);

          return (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className={`w-full p-2.5 text-left flex items-center justify-between gap-2.5 transition-all rounded-xl cursor-pointer ${
                isActive
                  ? 'bg-white/[0.1] text-white font-semibold border-l-2 border-[#2997ff] shadow-sm'
                  : 'text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/[0.03]'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-bold shrink-0 ${
                  isCompleted 
                    ? 'bg-emerald-500/20 text-[#30d158]' 
                    : isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/[0.04] text-[#86868b]'
                }`}>
                  {lesson.level || idx + 1}
                </span>
                <div className="min-w-0">
                  <div className="truncate text-xs font-medium">
                    {lesson.title}
                  </div>
                  <div className="text-[10px] text-[#86868b] truncate font-mono mt-0.5">
                    {lesson.filename}
                  </div>
                </div>
              </div>

              {isCompleted ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-[#30d158] shrink-0" />
              ) : isActive ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff] shrink-0 shadow-[0_0_6px_rgba(41,151,255,0.8)]" />
              ) : null}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
