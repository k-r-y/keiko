import React from 'react';
import { 
  Network, 
  Terminal, 
  Cloud, 
  Code, 
  Database, 
  FileCode, 
  Shuffle, 
  Timer, 
  Layers,
  ChevronDown,
  LayoutGrid,
  ArrowUpDown,
  Search
} from 'lucide-react';
import { CATEGORIES, TECHNOLOGIES, SORT_OPTIONS } from '../data/snippets';

const ICON_MAP = {
  Terminal: Terminal,
  Network: Network,
  Command: Terminal,
  Cloud: Cloud,
  Code: Code,
  Database: Database,
  FileCode: FileCode,
};

export default function CategoryBar({
  theme,
  currentCategory,
  onSelectCategory,
  selectedTech,
  onSelectTech,
  difficulty,
  onSelectDifficulty,
  sortBy,
  onSelectSort,
  mode,
  onSelectMode,
  onShuffle,
  totalMatching,
  snippets,
  currentSnippetId,
  onSelectSnippet,
  onOpenExplorer,
}) {
  return (
    <div className="flex flex-col gap-2.5 font-mono text-xs">
      {/* Row 1: Primary Category Tabs & Browse Library Button */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-1">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Terminal;
            const isActive = currentCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all border ${
                  isActive
                    ? `${theme.surfaceBorder} ${theme.surface} ${theme.primary} font-semibold shadow-sm`
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Browse All Library Modal Trigger */}
        <button
          onClick={onOpenExplorer}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${theme.surfaceBorder} bg-black/40 hover:bg-black/70 text-gray-200 hover:text-white transition-all shrink-0`}
          title="Browse full IT example database"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold">Browse Library</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-gray-300">
            {totalMatching}
          </span>
        </button>
      </div>

      {/* Row 2: Deep Sorting & Filtering Strip */}
      <div className={`p-2.5 rounded-xl border ${theme.surfaceBorder} ${theme.surface} flex flex-wrap items-center justify-between gap-3`}>
        {/* Left: Language/Tech filter & Difficulty & Mode */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Language / Technology Filter */}
          <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-lg border border-white/5">
            <span className="text-[10px] text-gray-500 uppercase font-semibold">Tech:</span>
            <select
              value={selectedTech}
              onChange={(e) => onSelectTech(e.target.value)}
              className="bg-transparent text-gray-200 font-medium focus:outline-none cursor-pointer text-xs"
            >
              {TECHNOLOGIES.map((tech) => (
                <option key={tech.id} value={tech.id} className="bg-gray-900 text-gray-200">
                  {tech.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Filter */}
          <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-lg border border-white/5">
            <ArrowUpDown className="w-3 h-3 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => onSelectSort(e.target.value)}
              className="bg-transparent text-gray-200 font-medium focus:outline-none cursor-pointer text-xs"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id} className="bg-gray-900 text-gray-200">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center bg-black/40 p-0.5 rounded-lg border border-white/5">
            {['all', 'easy', 'medium', 'hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => onSelectDifficulty(diff)}
                className={`px-2 py-0.5 rounded capitalize transition-colors ${
                  difficulty === diff
                    ? 'bg-white/20 text-white font-semibold'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>

          {/* Mode Pill Group */}
          <div className="flex items-center bg-black/40 p-0.5 rounded-lg border border-white/5">
            <button
              onClick={() => onSelectMode(0)}
              className={`px-2.5 py-0.5 rounded transition-colors ${
                mode === 0
                  ? `${theme.primaryBg} text-black font-bold`
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              title="Type complete command or code block"
            >
              Full Snippet
            </button>
            <button
              onClick={() => onSelectMode(30)}
              className={`px-2 py-0.5 rounded transition-colors flex items-center gap-1 ${
                mode === 30
                  ? `${theme.primaryBg} text-black font-bold`
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Timer className="w-3 h-3" />
              <span>30s</span>
            </button>
            <button
              onClick={() => onSelectMode(60)}
              className={`px-2 py-0.5 rounded transition-colors flex items-center gap-1 ${
                mode === 60
                  ? `${theme.primaryBg} text-black font-bold`
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Timer className="w-3 h-3" />
              <span>60s</span>
            </button>
          </div>
        </div>

        {/* Right: Quick Snippet Dropdown & Random Shuffle Button */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={currentSnippetId}
              onChange={(e) => onSelectSnippet(e.target.value)}
              className="appearance-none bg-black/60 text-gray-200 border border-white/10 rounded-lg px-2.5 py-1.5 pr-6 focus:outline-none focus:border-emerald-500 cursor-pointer max-w-[200px] sm:max-w-[280px] truncate"
            >
              {snippets.map((s) => (
                <option key={s.id} value={s.id} className="bg-gray-900 text-gray-200">
                  {s.title} ({s.language || s.category})
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <button
            onClick={onShuffle}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${theme.surfaceBorder} bg-black/40 hover:bg-black/80 text-gray-200 hover:text-white transition-all`}
            title="Load another random IT snippet"
          >
            <Shuffle className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Random</span>
          </button>
        </div>
      </div>
    </div>
  );
}
