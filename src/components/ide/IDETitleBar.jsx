import React from 'react';
import { 
  Volume2, 
  VolumeX, 
  Palette, 
  Columns, 
  BookOpen, 
  ChevronDown,
  Timer,
  Code,
  TrendingUp,
} from 'lucide-react';
import { LANGUAGES } from '../../data/curriculum';
import { THEMES } from '../../utils/themes';
import { soundEngine } from '../../utils/sound';
import TechIcon from '../TechIcon';

export default function IDETitleBar({
  currentLanguage,
  onSelectLanguage,
  activeLesson,
  lessonIndex = 0,
  totalLessons = 10,
  currentTheme,
  setTheme,
  soundProfile,
  setSoundProfile,
  isSidebarOpen,
  onToggleSidebar,
  isGuideOpen,
  onToggleGuide,
  activeMode = 'lessons', // 'lessons' | 'tests' | 'playground' | 'stats'
  onSelectMode,
}) {
  const activeLang = LANGUAGES.find((l) => l.id === currentLanguage) || LANGUAGES[0];
  const theme = THEMES[currentTheme] || THEMES.apple;

  const toggleSound = () => {
    const next = soundProfile === 'off' ? 'modern-scissor' : 'off';
    setSoundProfile(next);
    soundEngine.setProfile(next);
    if (next !== 'off') {
      soundEngine.playKeySound(false, false);
    }
  };

  const modes = [
    { id: 'lessons', label: 'Lessons', icon: BookOpen },
    { id: 'tests', label: 'Tests', icon: Timer },
    { id: 'playground', label: 'Playground', icon: Code },
    { id: 'stats', label: 'Analytics', icon: TrendingUp },
  ];

  return (
    <header className="h-12 bg-black/75 backdrop-blur-3xl border-b border-white/[0.08] flex items-center justify-between px-2.5 sm:px-4 select-none text-[#86868b] z-40 shrink-0 transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.5)] gap-2">
      {/* 1. Left: Authentic macOS Window Controls & Minimalist Brand */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* macOS Traffic Lights (Hidden on extra small screens to save space) */}
        <div className="hidden sm:flex items-center gap-1.5 group/lights pr-1">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
        </div>

        {/* Minimalist Apple-Style Brand */}
        <div className="flex items-center gap-1.5 font-sans">
          <button
            onClick={() => onSelectMode && onSelectMode('lessons')}
            className="font-semibold text-xs sm:text-sm text-[#f5f5f7] tracking-tight hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Keiko</span>
            <span className="hidden sm:inline text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-white/[0.08] border border-white/10 text-[#86868b] font-normal uppercase">Pro</span>
          </button>
          
          {activeMode === 'lessons' && (
            <span className="text-[11px] text-[#86868b] hidden lg:inline font-normal pl-1 border-l border-white/10 ml-1">
              {activeLang.name} <span className="opacity-40">/</span> {lessonIndex + 1} of {totalLessons}
            </span>
          )}
        </div>
      </div>

      {/* 2. Center: Apple HIG Segmented Capsule Navigation */}
      <nav className="flex items-center p-0.5 sm:p-1 rounded-full bg-white/[0.05] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] font-sans shrink-0">
        {modes.map((m) => {
          const Icon = m.icon;
          const isActive = activeMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onSelectMode && onSelectMode(m.id)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-white text-black font-semibold shadow-[0_2px_10px_rgba(255,255,255,0.2)]'
                  : 'text-[#86868b] hover:text-[#f5f5f7] hover:bg-white/[0.04]'
              }`}
              title={m.label}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : ''}`} />
              <span className="hidden md:inline">{m.label}</span>
            </button>
          );
        })}
      </nav>

      {/* 3. Right: Clean Apple Controls & Language Picker */}
      <div className="flex items-center gap-1.5 sm:gap-2 font-sans shrink-0">
        {/* PRIMARY LANGUAGE PICKER */}
        <div className="relative flex items-center">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-all shadow-sm cursor-pointer">
            <TechIcon id={currentLanguage} className="w-3.5 h-3.5 shrink-0" />
            <select
              value={currentLanguage}
              onChange={(e) => onSelectLanguage(e.target.value)}
              className="bg-transparent text-[#f5f5f7] font-sans text-xs font-medium focus:outline-none cursor-pointer pr-1 appearance-none tracking-tight max-w-[50px] sm:max-w-none truncate"
              aria-label="Select Language"
            >
              {LANGUAGES.map((l) => (
                <option key={l.id} value={l.id} className="bg-[#121216] text-[#f5f5f7] py-1.5">
                  {l.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 text-[#86868b] pointer-events-none hidden sm:inline" />
          </div>
        </div>

        {/* Lessons List Toggle (Only in Lessons Mode) */}
        {activeMode === 'lessons' && (
          <button
            onClick={onToggleSidebar}
            className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full text-xs font-medium transition-all border cursor-pointer ${
              isSidebarOpen 
                ? 'bg-white/[0.15] text-[#f5f5f7] border-white/20 shadow-sm' 
                : 'text-[#86868b] hover:text-[#f5f5f7] border-white/10 hover:bg-white/[0.04]'
            }`}
            title="Toggle Lessons Sidebar"
          >
            <Columns className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">List</span>
          </button>
        )}

        {/* Lesson Guide Toggle (Only in Lessons Mode) */}
        {activeMode === 'lessons' && (
          <button
            onClick={onToggleGuide}
            className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-full text-xs font-medium transition-all border cursor-pointer ${
              isGuideOpen 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm' 
                : 'text-[#86868b] hover:text-[#f5f5f7] border-white/10 hover:bg-white/[0.04]'
            }`}
            title="Toggle Lesson Guide"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xl:inline">Guide</span>
          </button>
        )}

        {/* Audio Toggle Button */}
        <button
          onClick={toggleSound}
          className={`p-1.5 rounded-full transition-all border cursor-pointer ${
            soundProfile !== 'off'
              ? 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10'
              : 'border-white/10 text-[#86868b] hover:text-[#f5f5f7] bg-white/[0.03]'
          }`}
          title={soundProfile !== 'off' ? `Audio On (${soundProfile})` : 'Audio Muted'}
        >
          {soundProfile !== 'off' ? (
            <Volume2 className="w-3.5 h-3.5" />
          ) : (
            <VolumeX className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Theme Picker */}
        <div className="relative group hidden md:block">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#86868b] hover:text-[#f5f5f7] transition-colors cursor-pointer text-xs">
            <Palette className="w-3.5 h-3.5 text-[#86868b]" />
            <select
              value={currentTheme}
              onChange={(e) => setTheme(e.target.value)}
              className="appearance-none bg-transparent text-[#f5f5f7] focus:outline-none cursor-pointer pr-1 text-xs font-medium"
              aria-label="Select Theme"
            >
              {Object.entries(THEMES).map(([id, t]) => (
                <option key={id} value={id} className="bg-[#121216] text-[#f5f5f7]">
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
