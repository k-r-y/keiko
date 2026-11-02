import React, { useState, useEffect, useMemo, useCallback } from 'react';
import IDETitleBar from './components/ide/IDETitleBar';
import IDESidebar from './components/ide/IDESidebar';
import IDEEditorView from './components/ide/IDEEditorView';
import IDELessonGuide from './components/ide/IDELessonGuide';
import IDETerminalConsole from './components/IDETerminalConsole';
import IDEStatusBar from './components/IDEStatusBar';
import CommandPalette from './components/CommandPalette';
import ResultsModal from './components/ResultsModal';
import StatsDashboard from './components/typing/StatsDashboard';
import PlaygroundView from './components/typing/PlaygroundView';
import TestsView from './components/typing/TestsView';
import { LANGUAGES, CURRICULUM } from './data/curriculum';
import { THEMES } from './utils/themes';
import { useTypingEngine } from './hooks/useTypingEngine';
import { soundEngine } from './utils/sound';
import { saveTestResult } from './utils/history';
import { ArrowLeft, Timer, Code2 } from 'lucide-react';

export default function App() {
  // Theme & Sound Preferences
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('termtype_theme') || 'apple';
  });
  const [soundProfile, setSoundProfile] = useState(() => {
    return localStorage.getItem('termtype_sound') || 'modern-scissor';
  });
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem('termtype_vol');
    return saved !== null ? parseFloat(saved) : 0.22;
  });

  // UX Readability Preferences
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('termtype_font_size') || 'large';
  });
  const [highContrast, setHighContrast] = useState(() => {
    const saved = localStorage.getItem('termtype_high_contrast');
    return saved !== null ? saved === 'true' : true;
  });

  // Active App Navigation Mode ('lessons' | 'tests' | 'playground' | 'stats')
  const [activeMode, setActiveMode] = useState(() => {
    return localStorage.getItem('termtype_mode') || 'lessons';
  });

  // Active Curriculum Language & Lesson
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('termtype_language') || 'python';
  });
  const [currentLessonId, setCurrentLessonId] = useState(() => {
    return localStorage.getItem('termtype_current_lesson') || 'py-01-print';
  });

  // Completed Lessons Tracking
  const [completedLessonIds, setCompletedLessonIds] = useState(() => {
    try {
      const saved = localStorage.getItem('termtype_completed_lessons');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Active Override Snippet (When user launches a timed test or playground sandbox in the editor)
  const [activeOverrideSnippet, setActiveOverrideSnippet] = useState(null);

  // Layout Panels Visibility (Responsive defaults: hidden on mobile/tablet to avoid crushing editor)
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 1024 : true;
  });
  const [isGuideOpen, setIsGuideOpen] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 1280 : true;
  });
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  // Sync sound engine preferences
  useEffect(() => {
    soundEngine.setProfile(soundProfile);
    soundEngine.setVolume(volume);
  }, [soundProfile, volume]);

  // Persist settings
  useEffect(() => {
    localStorage.setItem('termtype_theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    localStorage.setItem('termtype_sound', soundProfile);
  }, [soundProfile]);

  useEffect(() => {
    localStorage.setItem('termtype_vol', volume.toString());
  }, [volume]);

  useEffect(() => {
    localStorage.setItem('termtype_font_size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('termtype_high_contrast', highContrast.toString());
  }, [highContrast]);

  useEffect(() => {
    localStorage.setItem('termtype_mode', activeMode);
  }, [activeMode]);

  useEffect(() => {
    localStorage.setItem('termtype_language', currentLanguage);
  }, [currentLanguage]);

  useEffect(() => {
    localStorage.setItem('termtype_current_lesson', currentLessonId);
  }, [currentLessonId]);

  useEffect(() => {
    localStorage.setItem('termtype_completed_lessons', JSON.stringify(Array.from(completedLessonIds)));
  }, [completedLessonIds]);

  // Current language lessons
  const currentLanguageLessons = useMemo(() => {
    return CURRICULUM[currentLanguage] || CURRICULUM.python;
  }, [currentLanguage]);

  // Active Lesson snippet
  const activeCurriculumLesson = useMemo(() => {
    const inLang = currentLanguageLessons.find((l) => l.id === currentLessonId);
    if (inLang) return inLang;
    return currentLanguageLessons[0] || CURRICULUM.python[0];
  }, [currentLanguageLessons, currentLessonId]);

  // Target snippet passed to typing engine (override snippet if in test/playground, else curriculum lesson)
  const activeSnippet = useMemo(() => {
    return activeOverrideSnippet || activeCurriculumLesson;
  }, [activeOverrideSnippet, activeCurriculumLesson]);

  const activeTimeLimit = activeSnippet?.timeLimit || 0;

  // Lesson Index & Navigation
  const activeLessonIndex = useMemo(() => {
    return currentLanguageLessons.findIndex((l) => l.id === activeCurriculumLesson.id);
  }, [currentLanguageLessons, activeCurriculumLesson]);

  const hasNextLesson = activeLessonIndex >= 0 && activeLessonIndex < currentLanguageLessons.length - 1;
  const nextSnippet = hasNextLesson ? currentLanguageLessons[activeLessonIndex + 1] : null;

  // Record stats callback on completion
  const handleTestComplete = useCallback((completedStats) => {
    // If it's a curriculum lesson, mark complete
    if (activeSnippet.id && !activeSnippet.id.startsWith('play-') && !activeSnippet.id.startsWith('custom-')) {
      setCompletedLessonIds((prev) => {
        const next = new Set(prev);
        next.add(activeSnippet.id);
        return next;
      });
    }

    // Save test result to lifetime analytics
    if (completedStats) {
      const modeName = activeSnippet.timeLimit > 0 
        ? 'timed' 
        : (activeSnippet.id?.startsWith('custom') || activeSnippet.id?.startsWith('play')) 
          ? 'playground' 
          : 'lesson';

      saveTestResult({
        language: activeSnippet.language || currentLanguage,
        title: activeSnippet.title || 'Code Exercise',
        mode: modeName,
        netWpm: completedStats.netWpm,
        rawWpm: completedStats.rawWpm,
        accuracy: completedStats.accuracy,
        elapsedSeconds: completedStats.elapsedSeconds,
        errorCount: completedStats.errorCount,
        errorKeys: completedStats.errorKeys,
      });
    }

    setIsResultModalOpen(true);
  }, [activeSnippet, currentLanguage]);

  // Hook into typing engine
  const {
    userInput,
    cursorIndex,
    status,
    isPaused,
    stats,
    timeLeft,
    handleKeyDown,
    resetTest,
    runCode,
  } = useTypingEngine({
    targetSnippet: activeSnippet,
    timeLimit: activeTimeLimit,
    onComplete: handleTestComplete,
  });

  // Visual execution state for Run action
  const [isExecuting, setIsExecuting] = useState(false);

  const handleRunCode = useCallback(() => {
    if (isExecuting) return;
    setIsExecuting(true);
    soundEngine.playKeySound(false, true);

    setTimeout(() => {
      setIsExecuting(false);
      runCode();
    }, 450);
  }, [isExecuting, runCode]);

  // Action handlers
  const handleSelectLanguage = (langId) => {
    setCurrentLanguage(langId);
    setActiveOverrideSnippet(null);
    const lessons = CURRICULUM[langId] || [];
    const firstIncomplete = lessons.find((l) => !completedLessonIds.has(l.id)) || lessons[0];
    if (firstIncomplete) {
      setCurrentLessonId(firstIncomplete.id);
    }
    setIsResultModalOpen(false);
  };

  const handleSelectLesson = (lessonId) => {
    setActiveOverrideSnippet(null);
    setCurrentLessonId(lessonId);
    setIsResultModalOpen(false);
    // Auto-dismiss sidebar on mobile/tablet upon lesson selection
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const handleNextLesson = () => {
    if (activeOverrideSnippet) {
      // Return to mode view
      setActiveOverrideSnippet(null);
      setIsResultModalOpen(false);
      return;
    }

    if (hasNextLesson) {
      setCurrentLessonId(currentLanguageLessons[activeLessonIndex + 1].id);
      setIsResultModalOpen(false);
    } else {
      // Loop to next language
      const langIdx = LANGUAGES.findIndex((l) => l.id === currentLanguage);
      const nextLang = LANGUAGES[(langIdx + 1) % LANGUAGES.length];
      handleSelectLanguage(nextLang.id);
    }
  };

  const handleRestart = () => {
    resetTest();
    setIsResultModalOpen(false);
  };

  const handleSelectMode = (modeId) => {
    setActiveMode(modeId);
    setActiveOverrideSnippet(null);
    setIsResultModalOpen(false);
  };

  const handleStartTimedTest = (testSnippet) => {
    setActiveOverrideSnippet(testSnippet);
  };

  const handleStartPlaygroundSnippet = (snippet) => {
    setActiveOverrideSnippet(snippet);
  };

  const handleExitOverrideSession = () => {
    setActiveOverrideSnippet(null);
    resetTest();
  };

  // Keyboard Shortcuts (⌘B: Sidebar, ⌘I: Guide, ⌘K: Search, ⌘J: Keyboard, Esc: Reset)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      const isCmdOrCtrl = e.metaKey || e.ctrlKey;

      if (isCmdOrCtrl && e.key === 'b') {
        e.preventDefault();
        setIsSidebarOpen((prev) => !prev);
        return;
      }

      if (isCmdOrCtrl && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
        setIsGuideOpen((prev) => !prev);
        return;
      }

      if (isCmdOrCtrl && e.key === 'Enter') {
        e.preventDefault();
        handleRunCode();
        return;
      }

      if (isCmdOrCtrl && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
        return;
      }

      if (e.key === 'Escape') {
        if (isCommandPaletteOpen) {
          setIsCommandPaletteOpen(false);
        } else if (isResultModalOpen) {
          setIsResultModalOpen(false);
        } else {
          resetTest();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isCommandPaletteOpen, isResultModalOpen, resetTest]);

  const theme = THEMES[currentTheme] || THEMES.apple;

  // Determine whether to display the editor view or a dedicated dashboard view
  const isEditing = activeMode === 'lessons' || activeOverrideSnippet !== null;

  return (
    <div className={`h-screen w-screen overflow-hidden flex flex-col ${theme.bg} ${theme.text || 'text-slate-100'} font-sans select-none transition-colors`}>
      {/* 1. Clean Title Bar (macOS Window dots, brand, Typing.com mode switcher, language picker) */}
      <IDETitleBar
        currentLanguage={currentLanguage}
        onSelectLanguage={handleSelectLanguage}
        activeLesson={activeSnippet}
        lessonIndex={activeLessonIndex}
        totalLessons={currentLanguageLessons.length}
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        soundProfile={soundProfile}
        setSoundProfile={setSoundProfile}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isGuideOpen={isGuideOpen}
        onToggleGuide={() => setIsGuideOpen((prev) => !prev)}
        activeMode={activeMode}
        onSelectMode={handleSelectMode}
      />

      {/* 2. Main IDE Workspace */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* VIEW 1: Statistics Dashboard */}
        {activeMode === 'stats' && !activeOverrideSnippet && (
          <StatsDashboard
            theme={theme}
            onStartPractice={() => handleSelectMode('lessons')}
          />
        )}

        {/* VIEW 2: Timed Tests Launcher */}
        {activeMode === 'tests' && !activeOverrideSnippet && (
          <TestsView
            theme={theme}
            currentLanguage={currentLanguage}
            onSelectLanguage={handleSelectLanguage}
            onStartTest={handleStartTimedTest}
          />
        )}

        {/* VIEW 3: Playground & Custom Code Sandbox */}
        {activeMode === 'playground' && !activeOverrideSnippet && (
          <PlaygroundView
            theme={theme}
            onSelectSnippet={handleStartPlaygroundSnippet}
            onStartCustomSnippet={handleStartPlaygroundSnippet}
          />
        )}

        {/* VIEW 4: Core IDE Editor & Console (Used for Lessons, Active Timed Tests, and Playground Sessions) */}
        {isEditing && (
          <>
            {/* Left: Lessons Navigator (Responsive Drawer on mobile, docked column on desktop) */}
            {isSidebarOpen && activeMode === 'lessons' && !activeOverrideSnippet && (
              <>
                {/* Mobile Backdrop */}
                <div
                  className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
                  onClick={() => setIsSidebarOpen(false)}
                />
                <div className="fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] shadow-2xl animate-in slide-in-from-left duration-200 lg:static lg:z-auto lg:shadow-none lg:h-full lg:max-w-none">
                  <IDESidebar
                    currentLanguage={currentLanguage}
                    currentLessonId={activeCurriculumLesson.id}
                    onSelectLesson={handleSelectLesson}
                    completedLessonIds={completedLessonIds}
                    theme={theme}
                    onClose={() => setIsSidebarOpen(false)}
                  />
                </div>
              </>
            )}

            {/* Center: Hero Code Editor & Live Console Output */}
            <div className={`flex-1 flex flex-col min-w-0 ${theme.editorBg || 'bg-[#1c1d29]'} overflow-hidden transition-colors`}>
              {/* Back banner if in active test or playground session */}
              {activeOverrideSnippet && (
                <div className="h-10 px-5 bg-black/60 backdrop-blur-2xl border-b border-white/[0.08] flex items-center justify-between text-xs font-sans">
                  <button
                    onClick={handleExitOverrideSession}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-[#86868b] hover:text-[#f5f5f7] transition-all cursor-pointer font-medium"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Return to {activeMode === 'tests' ? 'Tests' : 'Playground'}</span>
                  </button>

                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#ff9f0a]">
                    {activeSnippet.timeLimit > 0 && (
                      <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 font-semibold">
                        <Timer className="w-3 h-3 text-[#ff9f0a]" />
                        <span>{activeSnippet.timeLimit / 60}m Benchmark Running</span>
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Main Hero Code Editor */}
              <IDEEditorView
                theme={theme}
                lesson={activeSnippet}
                language={activeSnippet.language || currentLanguage}
                userInput={userInput}
                cursorIndex={cursorIndex}
                status={status}
                onKeyDown={handleKeyDown}
                onReset={handleRestart}
                onRun={handleRunCode}
                isExecuting={isExecuting}
                hasNextLesson={hasNextLesson && !activeOverrideSnippet}
                onNextLesson={handleNextLesson}
                fontSize={fontSize}
                setFontSize={setFontSize}
                highContrast={highContrast}
                setHighContrast={setHighContrast}
                timeLimit={activeTimeLimit}
                timeLeft={timeLeft}
                isPaused={isPaused}
              />

              {/* Unified Console Output Directly Beneath Editor */}
              <IDETerminalConsole
                lesson={activeSnippet}
                language={activeSnippet.language || currentLanguage}
                status={status}
                stats={stats}
                userInput={userInput}
                targetText={activeSnippet.content || ''}
                onNextLesson={handleNextLesson}
                hasNextLesson={hasNextLesson && !activeOverrideSnippet}
                onRun={handleRunCode}
                isExecuting={isExecuting}
                theme={theme}
              />
            </div>

            {/* Right: Friendly Approachable Lesson Guide (Responsive Drawer on mobile, docked column on desktop) */}
            {isGuideOpen && activeMode === 'lessons' && !activeOverrideSnippet && (
              <>
                {/* Mobile Backdrop */}
                <div
                  className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-200"
                  onClick={() => setIsGuideOpen(false)}
                />
                <div className="fixed inset-y-0 right-0 z-50 w-80 sm:w-88 max-w-[85vw] shadow-2xl animate-in slide-in-from-right duration-200 lg:static lg:z-auto lg:shadow-none lg:h-full lg:max-w-none">
                  <IDELessonGuide
                    lesson={activeSnippet}
                    language={currentLanguage}
                    theme={theme}
                    isOpen={isGuideOpen}
                    onClose={() => setIsGuideOpen(false)}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* 3. Minimalist Status Bar */}
      <IDEStatusBar
        language={activeSnippet.language || currentLanguage}
        lesson={activeSnippet}
        stats={stats}
        cursorIndex={cursorIndex}
        totalChars={(activeSnippet.content || '').length}
        isPaused={isPaused}
        theme={theme}
      />

      {/* 4. Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectLesson={handleSelectLesson}
        onSelectLanguage={handleSelectLanguage}
      />

      {/* 5. Completion Results Modal */}
      <ResultsModal
        theme={theme}
        stats={stats}
        snippet={activeSnippet}
        nextSnippet={nextSnippet}
        onRestart={handleRestart}
        onNext={handleNextLesson}
        onViewStats={() => {
          setIsResultModalOpen(false);
          setActiveMode('stats');
          setActiveOverrideSnippet(null);
        }}
        isOpen={isResultModalOpen}
      />
    </div>
  );
}
