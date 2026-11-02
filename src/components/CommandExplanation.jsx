import React, { useState } from 'react';
import { HelpCircle, ChevronRight, ChevronDown, BookOpen, ShieldCheck, Tag } from 'lucide-react';

export default function CommandExplanation({ theme, snippet }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!snippet) return null;

  return (
    <div className={`rounded-xl border ${theme.surfaceBorder} ${theme.surface} overflow-hidden font-mono text-xs transition-all`}>
      {/* Header bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-black/30 hover:bg-black/50 flex items-center justify-between text-left transition-colors"
      >
        <div className="flex items-center gap-2">
          <BookOpen className={`w-4 h-4 ${theme.primary}`} />
          <span className="font-semibold text-gray-200 uppercase tracking-wider text-[11px]">
            Command & Syntax Reference
          </span>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <span className="text-gray-400 font-normal hidden sm:inline truncate max-w-[320px]">
            {snippet.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-[11px]">{isOpen ? 'Hide breakdown' : 'Show breakdown'}</span>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="p-4 sm:p-5 space-y-4 border-t border-white/5">
          {/* Detailed summary */}
          <div className="bg-black/40 p-3.5 rounded-lg border border-white/5">
            <h4 className="text-gray-400 font-semibold mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Operational Purpose</span>
            </h4>
            <p className="text-gray-300 leading-relaxed font-sans text-xs sm:text-sm">
              {snippet.description}
            </p>
          </div>

          {/* Tags and Metadata */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-500 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              <span>Tags:</span>
            </span>
            {snippet.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5 text-[11px]"
              >
                #{tag}
              </span>
            ))}
            <span className="ml-auto text-gray-500 text-[11px]">
              Type: <span className="text-gray-300 uppercase">{snippet.type}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
