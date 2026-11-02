import React from 'react';
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Palette, 
  Tv, 
  PlusCircle, 
  Search, 
  Keyboard,
  Sparkles,
  Command
} from 'lucide-react';
import { THEMES } from '../utils/themes';
import { soundEngine } from '../utils/sound';

export default function Navbar({
  currentTheme,
  setTheme,
  crtEffect,
  setCrtEffect,
  soundProfile,
  setSoundProfile,
  volume,
  setVolume,
  onOpenCustomModal,
  onOpenCommandPalette,
}) {
  const theme = THEMES[currentTheme] || THEMES.matrix;

  const handleSoundChange = (profile) => {
    setSoundProfile(profile);
    soundEngine.setProfile(profile);
    if (profile !== 'off') {
      soundEngine.playKeySound(false, false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    soundEngine.setVolume(newVol);
  };

  return (
    <header className="border-b border-white/[0.08] bg-[#090b12]/90 backdrop-blur-xl px-4 py-3 sm:px-6 sticky top-0 z-40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
            <Terminal className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg tracking-wider text-white font-mono">
                TERM<span className="text-emerald-400">TYPE</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 text-emerald-300 bg-emerald-500/10 font-bold uppercase tracking-wider">
                Learn by Doing
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-sans hidden sm:block">
              Interactive algorithms, syntax & IT command benchmark
            </p>
          </div>
        </div>

        {/* Action Controls (Hick's Law: Minimalist, clean controls) */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {/* Quick Search / Command Palette (Fitts's Law + Jakob's Law) */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all text-xs font-sans"
            title="Search algorithms and lessons (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-400">Search topics...</span>
            <kbd className="px-1.5 py-0.2 rounded bg-black/40 text-[10px] text-gray-400 border border-white/10 font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Modern Audio Profile Selector */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.03]">
            <Keyboard className="w-3.5 h-3.5 text-gray-400" />
            <select
              value={soundProfile}
              onChange={(e) => handleSoundChange(e.target.value)}
              className="bg-transparent text-gray-200 focus:outline-none cursor-pointer text-xs font-sans font-medium"
              title="Acoustic keyboard feedback profile"
            >
              <option value="modern-scissor" className="bg-gray-900 text-gray-200">MacBook Scissor (Clean & Muted)</option>
              <option value="studio-thock" className="bg-gray-900 text-gray-200">Studio Muted Thock (Warm)</option>
              <option value="minimal-tick" className="bg-gray-900 text-gray-200">Minimalist UI Tick (Crisp)</option>
              <option value="soft-pebble" className="bg-gray-900 text-gray-200">Soft Pebble Pop (Organic)</option>
              <option value="crisp-mechanical" className="bg-gray-900 text-gray-200">Refined Mechanical (Damped)</option>
              <option value="off" className="bg-gray-900 text-gray-200">Muted</option>
            </select>

            {soundProfile !== 'off' && (
              <input
                type="range"
                min="0.05"
                max="0.8"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-10 sm:w-12 h-1 accent-emerald-500 cursor-pointer ml-1"
                title={`Volume: ${Math.round(volume * 100)}%`}
              />
            )}
          </div>

          {/* Custom snippet button */}
          <button
            onClick={onOpenCustomModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all text-xs font-sans"
            title="Create or paste custom code"
          >
            <PlusCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">Custom Snippet</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={() => setCrtEffect(!crtEffect)}
            className={`p-2 rounded-xl border transition-all ${
              crtEffect 
                ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300' 
                : 'border-white/10 text-gray-400 hover:text-gray-200 bg-white/[0.02]'
            }`}
            title="Toggle retro CRT scanlines"
          >
            <Tv className="w-3.5 h-3.5" />
          </button>

          {/* Theme Selector */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.03]">
            <Palette className="w-3.5 h-3.5 text-gray-400" />
            <select
              value={currentTheme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-transparent text-gray-200 focus:outline-none cursor-pointer text-xs font-sans"
              title="Theme colors"
            >
              {Object.entries(THEMES).map(([id, item]) => (
                <option key={id} value={id} className="bg-gray-900 text-gray-200">
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
