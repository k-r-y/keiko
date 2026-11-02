import React, { useRef, useEffect, useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Eye, 
  Keyboard,
  Timer,
  ArrowRight,
  Pause
} from 'lucide-react';
import TechIcon from '../TechIcon';

export default function IDEEditorView({
  theme = {},
  lesson,
  language,
  userInput,
  cursorIndex,
  status,
  onKeyDown,
  onBeforeInput,
  onInput,
  onCompositionEnd,
  onReset,
  onRun,
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast,
  timeLimit = 0,
  timeLeft = 0,
  isExecuting = false,
  hasNextLesson = false,
  onNextLesson,
  isPaused = false,
}) {
  const containerRef = useRef(null);
  const hiddenInputRef = useRef(null);
  const activeCharRef = useRef(null);
  const [isFocused, setIsFocused] = useState(true);

  // Focus input automatically on mount or lesson change
  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, [lesson?.id]);

  // Keep active character scrolled into view
  useEffect(() => {
    if (activeCharRef.current && containerRef.current) {
      activeCharRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [cursorIndex]);

  const handleContainerClick = () => {
    hiddenInputRef.current?.focus();
    setIsFocused(true);
  };

  if (!lesson) return null;

  const targetText = lesson.content || '';
  const lines = targetText.split('\n');

  // Format time countdown if in timed test mode
  const isTimed = timeLimit > 0;
  const timerMins = Math.floor(timeLeft / 60);
  const timerSecs = timeLeft % 60;
  const timerDisplay = `${timerMins}:${timerSecs < 10 ? '0' : ''}${timerSecs}`;
  const timerPercentage = isTimed ? (timeLeft / timeLimit) * 100 : 100;
  const isTimeCritical = isTimed && timeLeft <= 10;

  // Compute line start character indices
  let currentOffset = 0;
  const lineStartIndices = lines.map((line) => {
    const start = currentOffset;
    currentOffset += line.length + 1; // +1 for '\n'
    return start;
  });

  const fontClasses = {
    normal: 'text-xs sm:text-sm leading-relaxed',
    large: 'text-sm sm:text-base leading-loose tracking-normal',
    xl: 'text-base sm:text-lg leading-loose tracking-wide',
  }[fontSize] || 'text-sm sm:text-base leading-loose tracking-normal';

  const pendingStyle = highContrast 
    ? 'text-[#f5f5f7] opacity-80' 
    : theme.pending || 'text-[#86868b]';

  return (
    <div className={`flex-1 flex flex-col min-w-0 ${theme.editorBg || 'bg-[#000000]'} overflow-hidden select-none font-mono transition-colors`}>
      {/* 1. Apple Pro Editor Tabs Bar */}
      <div className="h-11 bg-black/60 backdrop-blur-2xl border-b border-white/[0.08] flex items-center justify-between px-2.5 sm:px-3 shrink-0">
        {/* Active File Tab */}
        <div className="flex items-center h-full min-w-0">
          <div className="flex items-center gap-2 px-2.5 sm:px-4 h-full bg-white/[0.03] border-r border-white/[0.08] text-xs font-medium text-[#f5f5f7] cursor-default transition-all shadow-sm">
            <TechIcon id={language} className="w-3.5 h-3.5 shrink-0" />
            <span className="font-mono text-xs max-w-[80px] sm:max-w-none truncate">{lesson.filename || 'main.py'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] ml-0.5 shadow-[0_0_6px_rgba(48,209,88,0.8)] shrink-0" />
          </div>
        </div>

        {/* Tab Right Controls (Apple Minimalist Pills) */}
        <div className="flex items-center gap-1.5 sm:gap-2 font-sans shrink-0">
          {/* Live Countdown Timer Badge for Timed Tests */}
          {isTimed && (
            <div
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full font-mono text-xs font-semibold border transition-all ${
                isPaused
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/40 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.25)]'
                  : isTimeCritical
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.4)]'
                  : 'bg-white/[0.06] text-[#f5f5f7] border-white/10'
              }`}
              title={isPaused ? 'Timer Paused (Press any key to resume)' : 'Time Remaining'}
            >
              {isPaused ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Timer className="w-3.5 h-3.5" />}
              <span>{timerDisplay}</span>
              {isPaused && <span className="hidden sm:inline text-[10px] font-sans font-normal opacity-80">(Paused)</span>}
            </div>
          )}

          {/* Contrast Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer ${
              highContrast
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-semibold'
                : 'border-white/10 text-[#86868b] hover:text-[#f5f5f7] bg-white/[0.03] hover:bg-white/[0.06]'
            }`}
            title="Toggle High Contrast"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Contrast</span>
          </button>

          {/* Font Size Capsule (Hidden on small mobile screens to preserve layout) */}
          <div className="hidden sm:flex items-center bg-white/[0.05] p-0.5 rounded-full border border-white/10 text-xs">
            {['normal', 'large', 'xl'].map((sz) => (
              <button
                key={sz}
                onClick={() => setFontSize(sz)}
                className={`px-2 py-0.5 rounded-full font-bold uppercase transition-all cursor-pointer ${
                  fontSize === sz ? 'bg-white text-black shadow-sm' : 'text-[#86868b] hover:text-[#f5f5f7]'
                }`}
              >
                {sz === 'normal' ? 'A' : sz === 'large' ? 'A+' : 'A++'}
              </button>
            ))}
          </div>

          {/* Reset (Esc) */}
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/10 text-[#86868b] hover:text-[#f5f5f7] border border-white/10 text-xs font-medium transition-all cursor-pointer"
            title="Reset code (Esc)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Reset</span>
          </button>

          {/* Apple Run Button (White Primary Pill) */}
          <button
            onClick={onRun}
            disabled={isExecuting}
            className={`apple-button-primary flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-semibold cursor-pointer tracking-tight ${
              isExecuting ? 'opacity-80 scale-95' : ''
            }`}
            title="Execute Code in Terminal (⌘Enter)"
          >
            {isExecuting ? (
              <>
                <span className="w-2.5 h-2.5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                <span className="hidden sm:inline">Running...</span>
              </>
            ) : status === 'completed' ? (
              <>
                <RotateCcw className="w-3 h-3" />
                <span>Run</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-current" />
                <span>Run</span>
              </>
            )}
          </button>

          {/* If completed and has next lesson, show Next button */}
          {status === 'completed' && hasNextLesson && onNextLesson && (
            <button
              onClick={onNextLesson}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#30d158] hover:bg-[#28b84c] text-black font-semibold text-xs transition-all shadow-[0_2px_10px_rgba(48,209,88,0.3)] cursor-pointer"
              title="Advance to next exercise"
            >
              <span>Next</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Apple Task Objective Banner */}
      <div className="px-3 sm:px-6 py-2 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between text-xs font-sans shrink-0 gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#30d158] uppercase tracking-wider shrink-0">Objective</span>
          <span className="text-[#86868b] shrink-0">•</span>
          <span className="text-[#f5f5f7] font-medium truncate">{lesson.task}</span>
        </div>

        {isPaused ? (
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-sans text-[11px] sm:text-xs font-medium animate-pulse shrink-0">
            <Pause className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">Idle pause • </span>
            <span>Type to resume</span>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-2 text-[11px] text-[#86868b] font-mono shrink-0">
            <span className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 uppercase">{lesson.category}</span>
            <span>•</span>
            <span className="capitalize">{lesson.difficulty}</span>
          </div>
        )}
      </div>

      {/* Progress Line for Timed Tests */}
      {isTimed && (
        <div className="w-full h-0.5 bg-white/[0.05] relative overflow-hidden">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${
              isTimeCritical ? 'bg-rose-500' : 'bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400'
            }`}
            style={{ width: `${timerPercentage}%` }}
          />
        </div>
      )}

      {/* 3. Code Area with Line Numbers (Hero Typing Canvas) */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className={`flex-1 p-3 sm:p-6 lg:p-8 ${fontClasses} overflow-y-auto overflow-x-auto cursor-text relative`}
      >
        {/* Hidden input capturing physical keyboard and mobile virtual keyboards */}
        <input
          ref={hiddenInputRef}
          type="text"
          inputMode="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          enterKeyHint="go"
          aria-label="Code Editor Typing Input"
          className="opacity-0 absolute top-0 left-0 w-px h-px pointer-events-none -z-10"
          onKeyDown={onKeyDown}
          onBeforeInput={onBeforeInput}
          onInput={onInput}
          onCompositionEnd={onCompositionEnd}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoFocus
        />

        {/* Unfocused overlay reminder */}
        {!isFocused && status !== 'completed' && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-20 animate-in fade-in duration-200">
            <div className="px-6 py-3.5 rounded-full border border-white/20 bg-[#121420]/90 text-xs font-sans text-[#f5f5f7] flex items-center gap-2.5 shadow-2xl backdrop-blur-2xl">
              <Keyboard className="w-4 h-4 text-[#2997ff]" />
              <span className="font-medium">Click to resume typing</span>
            </div>
          </div>
        )}

        {/* Code Table */}
        <div className="table min-w-full border-collapse">
          {lines.map((lineStr, lineIdx) => {
            const lineStartIdx = lineStartIndices[lineIdx];
            const lineChars = lineStr.split('');
            const isLastLine = lineIdx === lines.length - 1;

            return (
              <div key={lineIdx} className="table-row hover:bg-white/[0.015] transition-colors">
                {/* Line Number */}
                <span className="table-cell pr-3 sm:pr-6 text-right select-none text-[#86868b]/70 font-mono text-xs sm:text-sm align-top w-8 sm:w-12 border-r border-white/[0.06] shrink-0">
                  {lineIdx + 1}
                </span>

                {/* Code Line Content */}
                <span className="table-cell pl-3 sm:pl-5 align-top whitespace-pre font-mono">
                  {lineChars.map((char, charIdx) => {
                    const thisCharIdx = lineStartIdx + charIdx;
                    const hasBeenTyped = thisCharIdx < userInput.length;
                    const isCursor = thisCharIdx === cursorIndex;
                    const isCorrect = hasBeenTyped && userInput[thisCharIdx] === char;
                    const isMistake = hasBeenTyped && !isCorrect;

                    let charClass = pendingStyle;
                    if (isCorrect) charClass = theme.correct || 'text-[#30d158] font-semibold drop-shadow-[0_0_8px_rgba(48,209,88,0.4)]';
                    else if (isMistake) charClass = theme.incorrect || 'text-white bg-[#ff453a] px-0.5 rounded font-bold underline decoration-[#ff9f0a]';

                    return (
                      <span
                        key={charIdx}
                        ref={isCursor ? activeCharRef : null}
                        className={`relative inline-block whitespace-pre font-mono ${charClass} ${
                          isCursor ? 'rounded-xs ring-2 ring-[#2997ff]/80 bg-white/20 text-white font-bold' : ''
                        }`}
                      >
                        {/* Blinking Cursor Bar */}
                        {isCursor && isFocused && (
                          <span
                            className={`absolute -left-[1px] top-0 bottom-0 w-[2.5px] ${theme.cursor || 'bg-[#2997ff]'} animate-cursor-blink shadow-[0_0_8px_rgba(41,151,255,0.85)]`}
                          />
                        )}
                        {char === ' ' ? (
                          isMistake ? (
                            <span className="text-white bg-[#ff453a] px-0.5 rounded font-bold underline">␣</span>
                          ) : (
                            ' '
                          )
                        ) : (
                          char
                        )}
                      </span>
                    );
                  })}

                  {/* Newline Symbol at Line End */}
                  {!isLastLine && (() => {
                    const newlineIdx = lineStartIdx + lineChars.length;
                    const isCursor = newlineIdx === cursorIndex;
                    const hasBeenTyped = newlineIdx < userInput.length;
                    const isCorrect = hasBeenTyped && userInput[newlineIdx] === '\n';
                    const isMistake = hasBeenTyped && !isCorrect;

                    return (
                      <span
                        key="newline"
                        ref={isCursor ? activeCharRef : null}
                        className={`relative inline-block text-xs font-mono ml-2.5 ${
                          isCorrect ? theme.correct : isMistake ? theme.incorrect : 'text-[#86868b]/40'
                        } ${isCursor ? 'ring-2 ring-[#2997ff]/80 bg-white/20' : ''}`}
                      >
                        {isCursor && isFocused && (
                          <span
                            className={`absolute -left-[1px] top-0 bottom-0 w-[2.5px] ${theme.cursor || 'bg-[#2997ff]'} animate-cursor-blink shadow-[0_0_8px_rgba(41,151,255,0.85)]`}
                          />
                        )}
                        ↵
                      </span>
                    );
                  })()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
