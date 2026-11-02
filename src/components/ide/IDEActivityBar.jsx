import React from 'react';
import { 
  Files, 
  Search, 
  GitBranch, 
  PlayCircle, 
  Settings, 
  Volume2, 
  VolumeX, 
  BookOpen
} from 'lucide-react';

export default function IDEActivityBar({
  activeView = 'explorer',
  onSelectView,
  isSidebarOpen,
  onToggleSidebar,
  soundProfile,
  onToggleSound,
  onOpenSettings,
  isGuideOpen,
  onToggleGuide,
  theme = {},
}) {
  return (
    <aside className={`w-[50px] ${theme.activityBar || 'bg-[#101117]'} border-r ${theme.border || 'border-white/[0.08]'} flex flex-col items-center justify-between py-2.5 text-slate-400 select-none z-30 shrink-0 transition-colors backdrop-blur-xl`}>
      {/* Top Main Navigation Views */}
      <div className="flex flex-col items-center gap-3.5 w-full">
        {/* Explorer Button */}
        <button
          onClick={() => {
            if (!isSidebarOpen) onToggleSidebar();
            onSelectView('explorer');
          }}
          className={`relative p-2.5 rounded-xl transition-all duration-150 group ${
            isSidebarOpen && activeView === 'explorer'
              ? 'text-white bg-white/10 shadow-sm'
              : 'hover:text-white hover:bg-white/[0.04]'
          }`}
          title="Explorer (⌘B)"
        >
          {isSidebarOpen && activeView === 'explorer' && (
            <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#38bdf8] rounded-r shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
          )}
          <Files className="w-4 h-4" />
        </button>

        {/* Search Button */}
        <button
          onClick={() => {
            if (!isSidebarOpen) onToggleSidebar();
            onSelectView('search');
          }}
          className={`relative p-2.5 rounded-xl transition-all duration-150 group ${
            isSidebarOpen && activeView === 'search'
              ? 'text-white bg-white/10 shadow-sm'
              : 'hover:text-white hover:bg-white/[0.04]'
          }`}
          title="Search Code & Curriculum (⌘F)"
        >
          {isSidebarOpen && activeView === 'search' && (
            <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#38bdf8] rounded-r shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
          )}
          <Search className="w-4 h-4" />
        </button>

        {/* Source Control Button */}
        <button
          onClick={() => {
            if (!isSidebarOpen) onToggleSidebar();
            onSelectView('git');
          }}
          className={`relative p-2.5 rounded-xl transition-all duration-150 group ${
            isSidebarOpen && activeView === 'git'
              ? 'text-white bg-white/10 shadow-sm'
              : 'hover:text-white hover:bg-white/[0.04]'
          }`}
          title="Source Control / Commits Log (⌘G)"
        >
          {isSidebarOpen && activeView === 'git' && (
            <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#38bdf8] rounded-r shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
          )}
          <GitBranch className="w-4 h-4" />
        </button>

        {/* Run & Debug Button */}
        <button
          onClick={() => {
            if (!isSidebarOpen) onToggleSidebar();
            onSelectView('run');
          }}
          className={`relative p-2.5 rounded-xl transition-all duration-150 group ${
            isSidebarOpen && activeView === 'run'
              ? 'text-white bg-white/10 shadow-sm'
              : 'hover:text-white hover:bg-white/[0.04]'
          }`}
          title="Run & Telemetry Inspector (⌘D)"
        >
          {isSidebarOpen && activeView === 'run' && (
            <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#38bdf8] rounded-r shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
          )}
          <PlayCircle className="w-4 h-4" />
        </button>

        {/* Lesson Guide Toggle */}
        {onToggleGuide && (
          <button
            onClick={onToggleGuide}
            className={`relative p-2.5 rounded-xl transition-all duration-150 group ${
              isGuideOpen 
                ? 'text-emerald-300 bg-emerald-500/15 shadow-sm' 
                : 'hover:text-white hover:bg-white/[0.04]'
            }`}
            title="Lesson Guide & Explanations (⌘I)"
          >
            {isGuideOpen && (
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-[3px] h-5 bg-emerald-400 rounded-r shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            )}
            <BookOpen className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Bottom Utility Controls */}
      <div className="flex flex-col items-center gap-3 w-full">
        <button
          onClick={onToggleSound}
          className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all"
          title={`Audio Profile: ${soundProfile}`}
        >
          {soundProfile !== 'off' ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        <button
          onClick={onOpenSettings}
          className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all"
          title="Settings (⌘,)"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
