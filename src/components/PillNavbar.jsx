import React from 'react';
import { 
  Terminal, 
  Keyboard, 
  Palette, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronDown, 
  Code2,
  Tv
} from 'lucide-react';
import { LANGUAGES } from '../data/curriculum';
import { THEMES } from '../utils/themes';
import { soundEngine } from '../utils/sound';
import TechIcon from './TechIcon';

export default function PillNavbar({
  currentLanguage,
  onSelectLanguage,
  currentTheme,
  setTheme,
  soundProfile,
  setSoundProfile,
  volume,
  setVolume,
  currentLesson,
  totalLessons,
  onToggleSidebar,
  isSidebarOpen,
}) {
  const activeLang = LANGUAGES.find((l) => l.id === currentLanguage) || LANGUAGES[0];
  const theme = THEMES[currentTheme] || THEMES.matrix;

  const toggleSound = () => {
    const next = soundProfile === 'off' ? 'modern-scissor' : 'off';
    setSoundProfile(next);
    soundEngine.setProfile(next);
    if (next !== 'off') {
      soundEngine.playKeySound(false, false);
    }
  };

  return (
    <header className="sticky top-3 z-40 max-w-5xl mx-auto px-4 w-full">
      <nav className="rounded-full border border-white/[0.1] bg-[#0c0e17]/85 backdrop-blur-2xl px-3.5 py-2 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
        {/* Left: Brand & Sidebar toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className={`p-1.5 rounded-full transition-colors flex items-center gap-2 ${
              isSidebarOpen ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
            title="Toggle File Explorer (Ctrl+B)"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="font-mono font-bold text-xs tracking-wider text-white hidden sm:inline">
              KEIKO <span className="text-emerald-400 font-normal">IDE</span>
            </span>
          </button>
        </div>

        {/* Center: Language Switcher Pill (Hick's Law & Fitts's Law) */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/5 font-mono text-xs">
          {LANGUAGES.map((lang) => {
            const isSelected = lang.id === currentLanguage;
            return (
              <button
                key={lang.id}
                onClick={() => onSelectLanguage(lang.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all text-xs ${
                  isSelected
                    ? 'bg-white/15 text-white font-semibold shadow-inner border border-white/10'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                <TechIcon id={lang.id} className="w-3.5 h-3.5 shrink-0" />
                <span className="font-sans text-xs hidden sm:inline">{lang.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Sound, Theme & Lesson Counter */}
        <div className="flex items-center gap-2 text-xs font-mono">
          {/* Lesson Counter Badge */}
          {currentLesson && (
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5 text-[11px] text-gray-400">
              <span className="text-white font-bold">{currentLesson.level}</span>
              <span>/</span>
              <span>{totalLessons}</span>
            </div>
          )}

          {/* Sound Toggle (Mac Scissor / Muted) */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full border transition-colors ${
              soundProfile !== 'off'
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                : 'border-white/10 text-gray-500 hover:text-gray-300 bg-white/[0.02]'
            }`}
            title={soundProfile !== 'off' ? `Sound On (${soundProfile})` : 'Sound Muted'}
          >
            {soundProfile !== 'off' ? (
              <Volume2 className="w-3.5 h-3.5" />
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Theme Dropdown Pill */}
          <div className="relative group">
            <select
              value={currentTheme}
              onChange={(e) => setTheme(e.target.value)}
              className="appearance-none bg-white/[0.04] text-gray-300 border border-white/10 hover:border-white/20 rounded-full pl-2.5 pr-6 py-1 text-xs focus:outline-none cursor-pointer"
            >
              {Object.entries(THEMES).map(([id, t]) => (
                <option key={id} value={id} className="bg-gray-900 text-gray-200">
                  {t.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </nav>
    </header>
  );
}
