import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  Terminal, 
  Filter, 
  ArrowUpDown, 
  Check, 
  Code, 
  Sparkles, 
  ExternalLink,
  Tag
} from 'lucide-react';
import { CATEGORIES, TECHNOLOGIES, SORT_OPTIONS } from '../data/snippets';

export default function ExampleExplorerModal({
  theme,
  isOpen,
  onClose,
  snippets,
  currentSnippetId,
  onSelectSnippet,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedDiff, setSelectedDiff] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');

  const filteredAndSorted = useMemo(() => {
    let result = [...snippets];

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.content.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          (s.language && s.language.toLowerCase().includes(q)) ||
          s.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Technology filter
    if (selectedTech !== 'all') {
      result = result.filter((s) => s.language === selectedTech);
    }

    // Category filter
    if (selectedCat !== 'all') {
      result = result.filter((s) => s.category === selectedCat);
    }

    // Difficulty filter
    if (selectedDiff !== 'all') {
      result = result.filter((s) => s.difficulty === selectedDiff);
    }

    // Sorting
    switch (sortBy) {
      case 'title-asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'title-desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'length-asc':
        result.sort((a, b) => a.content.length - b.content.length);
        break;
      case 'length-desc':
        result.sort((a, b) => b.content.length - a.content.length);
        break;
      case 'diff-asc': {
        const order = { easy: 1, medium: 2, hard: 3 };
        result.sort((a, b) => (order[a.difficulty] || 2) - (order[b.difficulty] || 2));
        break;
      }
      case 'diff-desc': {
        const order = { easy: 1, medium: 2, hard: 3 };
        result.sort((a, b) => (order[b.difficulty] || 2) - (order[a.difficulty] || 2));
        break;
      }
      case 'language':
        result.sort((a, b) => (a.language || '').localeCompare(b.language || ''));
        break;
      default:
        break;
    }

    return result;
  }, [snippets, searchQuery, selectedTech, selectedCat, selectedDiff, sortBy]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 font-mono text-xs">
      <div className={`w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border ${theme.surfaceBorder} ${theme.surface} shadow-2xl overflow-hidden relative`}>
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 bg-black/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-lg ${theme.primaryBg}/15 border ${theme.surfaceBorder}`}>
              <Terminal className={`w-5 h-5 ${theme.primary}`} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-wide">
                IT Benchmark Examples Library
              </h2>
              <p className="text-[11px] text-gray-400">
                Browse, sort, and select from {snippets.length} authentic commands, configs & scripts
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 bg-black/20 border-b border-white/5 space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by command, title, technology (e.g. ssh, kubernetes, regex)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-[11px]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Secondary Filters: Tech, Category, Difficulty, Sort */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {/* Tech filter */}
            <div>
              <label className="block text-[10px] text-gray-400 uppercase font-semibold mb-1">
                Language / Tech
              </label>
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-gray-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                {TECHNOLOGIES.map((tech) => (
                  <option key={tech.id} value={tech.id} className="bg-gray-900">
                    {tech.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category filter */}
            <div>
              <label className="block text-[10px] text-gray-400 uppercase font-semibold mb-1">
                Category
              </label>
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-gray-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id} className="bg-gray-900">
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty filter */}
            <div>
              <label className="block text-[10px] text-gray-400 uppercase font-semibold mb-1">
                Difficulty
              </label>
              <select
                value={selectedDiff}
                onChange={(e) => setSelectedDiff(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-gray-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="all" className="bg-gray-900">All Levels</option>
                <option value="easy" className="bg-gray-900">Easy</option>
                <option value="medium" className="bg-gray-900">Medium</option>
                <option value="hard" className="bg-gray-900">Hard</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-[10px] text-gray-400 uppercase font-semibold mb-1 flex items-center gap-1">
                <ArrowUpDown className="w-2.5 h-2.5" />
                <span>Sort Order</span>
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1.5 text-gray-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id} className="bg-gray-900">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="px-5 py-2 bg-black/30 border-b border-white/5 flex items-center justify-between text-[11px] text-gray-400">
          <span>Showing {filteredAndSorted.length} matching snippets</span>
          {(selectedTech !== 'all' || selectedCat !== 'all' || selectedDiff !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedTech('all');
                setSelectedCat('all');
                setSelectedDiff('all');
                setSearchQuery('');
              }}
              className="text-emerald-400 hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Snippet Grid List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {filteredAndSorted.length === 0 ? (
            <div className="text-center py-12 text-gray-500 space-y-2">
              <p className="text-sm">No snippets match your filter criteria.</p>
              <p className="text-[11px]">Try searching for something else or clearing filters.</p>
            </div>
          ) : (
            filteredAndSorted.map((item) => {
              const isSelected = item.id === currentSnippetId;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectSnippet(item.id);
                    onClose();
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer group ${
                    isSelected
                      ? `${theme.surfaceBorder} bg-black/60 shadow-md ring-1 ring-emerald-500/50`
                      : 'border-white/5 bg-black/30 hover:bg-black/50 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className={`font-semibold text-sm ${isSelected ? theme.primary : 'text-gray-200 group-hover:text-white'}`}>
                        {item.title}
                      </h4>
                      {isSelected && (
                        <span className="flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                          <Check className="w-3 h-3" />
                          <span>Active</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
                        {item.language || item.subCategory}
                      </span>
                      <span
                        className={`text-[10px] uppercase px-1.5 py-0.5 rounded font-bold ${
                          item.difficulty === 'easy'
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                            : item.difficulty === 'hard'
                            ? 'bg-rose-950/60 text-rose-400 border border-rose-800/40'
                            : 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                        }`}
                      >
                        {item.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Code snippet preview */}
                  <div className="p-2.5 rounded-lg bg-black/70 border border-white/5 font-mono text-xs text-gray-300 overflow-x-auto whitespace-pre leading-relaxed select-none group-hover:border-white/20 transition-colors">
                    {item.content.length > 180 ? `${item.content.slice(0, 180)}...` : item.content}
                  </div>

                  {/* Description & character count */}
                  <div className="flex items-center justify-between mt-2 text-[11px] text-gray-500">
                    <span className="truncate max-w-[80%] font-sans">{item.description}</span>
                    <span className="font-mono shrink-0">{item.content.length} chars</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
