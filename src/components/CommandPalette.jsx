import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, CornerDownLeft, Sparkles, X } from 'lucide-react';
import { LANGUAGES, CURRICULUM } from '../data/curriculum';
import TechIcon from './TechIcon';

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectLesson,
  onSelectLanguage,
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Flatten all lessons across all languages
  const allLessons = useMemo(() => {
    const list = [];
    LANGUAGES.forEach((lang) => {
      const lessons = CURRICULUM[lang.id] || [];
      lessons.forEach((lesson) => {
        list.push({
          ...lesson,
          langName: lang.name,
          language: lang.id,
        });
      });
    });
    return list;
  }, []);

  // Filter lessons
  const filtered = useMemo(() => {
    if (!query.trim()) return allLessons.slice(0, 8);
    const q = query.toLowerCase().trim();
    return allLessons
      .filter(
        (l) =>
          l.title.toLowerCase().includes(q) ||
          l.concept.toLowerCase().includes(q) ||
          l.langName.toLowerCase().includes(q) ||
          l.content.toLowerCase().includes(q) ||
          (l.filename && l.filename.toLowerCase().includes(q))
      )
      .slice(0, 10);
  }, [allLessons, query]);

  // Handle arrow key navigation & enter
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        const item = filtered[selectedIndex];
        onSelectLanguage(item.language);
        onSelectLesson(item.id);
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/80 backdrop-blur-3xl animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl apple-glass rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.85)] overflow-hidden font-sans text-xs flex flex-col border border-white/15"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar (Apple Spotlight HIG Style) */}
        <div className="p-4 border-b border-white/[0.08] flex items-center gap-3 bg-white/[0.02]">
          <Search className="w-5 h-5 text-[#86868b] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search syntax, algorithms, or topics (e.g. bubble sort, binary search, rust)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-[#f5f5f7] placeholder-[#86868b] focus:outline-none text-sm font-sans tracking-tight"
          />
          <kbd className="hidden sm:inline px-2 py-0.5 rounded-full bg-white/10 text-[#86868b] text-[10px] font-mono border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-400 font-sans">
              No matching curriculum lessons found for "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectLanguage(item.language);
                    onSelectLesson(item.id);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-white/15 text-white shadow-sm ring-1 ring-white/10' 
                      : 'text-slate-300 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <TechIcon id={item.language} className="w-4 h-4 shrink-0 drop-shadow-sm" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm truncate tracking-tight text-white">
                          {item.title}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-slate-300 uppercase font-mono font-bold tracking-wider">
                          {item.category || item.difficulty}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {item.concept || item.task}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.filename}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-sans">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px] text-slate-300 mr-1">↑↓</kbd>Navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[9px] text-slate-300 mr-1">↵</kbd>Select</span>
          </div>
          <span className="text-slate-400 font-mono text-[10px]">Spotlight Knowledge Engine</span>
        </div>
      </div>
    </div>
  );
}
