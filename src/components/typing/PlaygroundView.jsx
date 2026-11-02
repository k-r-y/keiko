import React, { useState } from 'react';
import {
  Code,
  Sparkles,
  Clipboard,
  Play,
  Filter,
  Check,
  FileCode,
  Zap,
} from 'lucide-react';
import { PLAYGROUND_PRESETS } from '../../data/playgroundSnippets';
import { LANGUAGES } from '../../data/curriculum';
import TechIcon from '../TechIcon';

export default function PlaygroundView({
  theme = {},
  onSelectSnippet,
  onStartCustomSnippet,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [customTitle, setCustomTitle] = useState('');
  const [customLanguage, setCustomLanguage] = useState('javascript');
  const [customCode, setCustomCode] = useState('');
  const [customTimer, setCustomTimer] = useState(0);
  const [activeTab, setActiveTab] = useState('presets'); // 'presets' | 'custom'

  const categories = ['all', 'Frontend Web', 'Backend API', 'Concurrency', 'Systems', 'Database'];

  const filteredPresets = selectedCategory === 'all'
    ? PLAYGROUND_PRESETS
    : PLAYGROUND_PRESETS.filter((p) => p.category === selectedCategory);

  const handleLaunchPreset = (preset, timerDuration = 0) => {
    onSelectSnippet({
      ...preset,
      timeLimit: timerDuration,
    });
  };

  const handleLaunchCustom = (e) => {
    e.preventDefault();
    if (!customCode.trim()) return;

    const customSnippet = {
      id: `custom-${Date.now()}`,
      title: customTitle.trim() || 'Custom Code Sandbox',
      language: customLanguage,
      category: 'Playground',
      difficulty: 'Custom',
      task: 'Practice typing your custom code snippet.',
      content: customCode.trim(),
      expectedOutput: `Executed custom ${customLanguage} code sandbox.`,
      timeLimit: customTimer,
    };

    onStartCustomSnippet(customSnippet);
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto bg-black text-[#f5f5f7] font-sans p-4 sm:p-8 lg:p-12 gap-6 sm:gap-8 select-none">
      {/* 1. Apple Hero Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08] shrink-0">
        <div>
          <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider font-mono">
            Code Sandbox
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Developer Playground
          </h1>
          <p className="text-xs sm:text-sm text-[#86868b] mt-1.5 max-w-xl">
            Type production open source code snippets or paste custom functions from your own repositories.
          </p>
        </div>

        {/* Apple Segmented Switcher Capsule */}
        <div className="flex items-center p-1 rounded-full bg-white/[0.05] border border-white/[0.08] shrink-0">
          <button
            onClick={() => setActiveTab('presets')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'presets'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-[#86868b] hover:text-[#f5f5f7]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Presets</span>
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'custom'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-[#86868b] hover:text-[#f5f5f7]'
            }`}
          >
            <Clipboard className="w-3.5 h-3.5" />
            <span>Paste Custom Code</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Curated Presets */}
      {activeTab === 'presets' && (
        <div className="flex flex-col gap-6">
          {/* Category Filter Pills */}
          <div className="shrink-0 py-1">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs text-[#86868b] font-medium mr-2 shrink-0">Filter:</span>
              <div className="flex items-center p-1 rounded-full bg-white/[0.04] border border-white/[0.08] gap-1 shrink-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1 rounded-full text-xs font-medium capitalize whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'text-[#86868b] hover:text-[#f5f5f7]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preset Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredPresets.map((preset) => (
              <div
                key={preset.id}
                className="apple-glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <TechIcon name={preset.language} className="w-4 h-4" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b]">
                        {preset.language}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.05] border border-white/10 text-[#86868b]">
                      {preset.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                    {preset.title}
                  </h3>
                  <p className="text-xs text-[#86868b] mt-1.5 leading-relaxed line-clamp-2">
                    {preset.task}
                  </p>

                  {/* Code preview snippet */}
                  <div className="mt-5 p-4 rounded-2xl bg-black/50 border border-white/[0.06] font-mono text-[11px] text-[#9cdcfe] overflow-hidden max-h-32 relative">
                    <pre className="line-clamp-4 select-none opacity-85 leading-relaxed">{preset.content}</pre>
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Launch Actions */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <div className="text-[11px] text-[#86868b] font-mono">
                    {preset.content.split('\n').length} lines • {preset.content.length} chars
                  </div>

                  <button
                    onClick={() => handleLaunchPreset(preset, 0)}
                    className="apple-button-primary px-4 py-2 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Start Typing</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Custom Code Form */}
      {activeTab === 'custom' && (
        <form onSubmit={handleLaunchCustom} className="apple-glass-card p-8 rounded-3xl space-y-6 max-w-3xl">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">Create Custom Code Sandbox</h2>
            <p className="text-xs text-[#86868b] mt-1">
              Paste code from GitHub or personal projects to develop muscle memory on your real syntax.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Title */}
            <div>
              <label className="block text-xs font-medium text-[#86868b] mb-1.5">
                Snippet Title
              </label>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="e.g. AuthMiddleware"
                className="w-full px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#86868b] text-xs focus:outline-none focus:border-white/30"
              />
            </div>

            {/* Language */}
            <div>
              <label className="block text-xs font-medium text-[#86868b] mb-1.5">
                Language
              </label>
              <select
                value={customLanguage}
                onChange={(e) => setCustomLanguage(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:outline-none focus:border-white/30"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.id} value={lang.id} className="bg-slate-900 text-white">
                    {lang.name} ({lang.extension})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Timer Mode Option */}
          <div>
            <label className="block text-xs font-medium text-[#86868b] mb-1.5">
              Timer Duration
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { duration: 0, label: 'Untimed' },
                { duration: 60, label: '1 Min Sprint' },
                { duration: 180, label: '3 Min Test' },
                { duration: 300, label: '5 Min Benchmark' },
              ].map((opt) => (
                <button
                  key={opt.duration}
                  type="button"
                  onClick={() => setCustomTimer(opt.duration)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                    customTimer === opt.duration
                      ? 'bg-white text-black font-semibold shadow-sm border-white'
                      : 'bg-white/[0.02] text-[#86868b] border-white/10 hover:border-white/20'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code Textarea */}
          <div>
            <label className="block text-xs font-medium text-[#86868b] mb-1.5">
              Code Content
            </label>
            <textarea
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              placeholder="Paste code snippet here..."
              rows={9}
              className="w-full p-4 rounded-2xl bg-black/60 border border-white/10 text-[#30d158] font-mono text-xs focus:outline-none focus:border-white/30 resize-none leading-relaxed"
              required
            />
            <div className="flex items-center justify-between text-[11px] text-[#86868b] mt-1.5 font-mono">
              <span>{customCode.split('\n').length} lines</span>
              <span>{customCode.length} characters</span>
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="submit"
              disabled={!customCode.trim()}
              className="apple-button-primary px-5 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-40"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Load Into Editor & Type</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
