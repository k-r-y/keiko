import React, { useRef, useEffect, useState } from 'react';
import { RotateCcw, CornerDownLeft, Info, Copy, Check, ZoomIn, ZoomOut, Eye, Keyboard } from 'lucide-react';

export default function TerminalBox({
  theme,
  snippet,
  userInput,
  cursorIndex,
  status,
  onKeyDown,
  onReset,
  fontSize = 'large', // 'normal' | 'large' | 'xl'
  setFontSize,
  highContrast = true,
  setHighContrast,
}) {
  const containerRef = useRef(null);
  const hiddenInputRef = useRef(null);
  const activeCharRef = useRef(null);
  const [isFocused, setIsFocused] = useState(true);
  const [copied, setCopied] = useState(false);

  // Focus input automatically on mount or snippet change
  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, [snippet?.id]);

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

  const handleCopyCommand = (e) => {
    e.stopPropagation();
    if (!snippet) return;
    navigator.clipboard.writeText(snippet.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!snippet) return null;

  const targetText = snippet.content;
  const isMultiLine = snippet.type === 'snippet' || targetText.includes('\n');
  const lines = targetText.split('\n');

  // Calculate line start indices accurately
  let currentOffset = 0;
  const lineStartIndices = lines.map((line) => {
    const start = currentOffset;
    currentOffset += line.length + 1; // +1 for the '\n' character
    return start;
  });

  // Font size classes
  const fontClasses = {
    normal: 'text-sm leading-relaxed',
    large: 'text-base sm:text-lg leading-loose',
    xl: 'text-lg sm:text-xl leading-loose',
  }[fontSize] || 'text-base sm:text-lg leading-loose';

  // High contrast pending text override
  const pendingStyle = highContrast 
    ? 'text-zinc-300 opacity-90' 
    : theme.pending;

  return (
    <div className={`relative rounded-2xl border ${theme.surfaceBorder} ${theme.surface} ${theme.glow} shadow-2xl transition-all duration-300 overflow-hidden`}>
      {/* Hidden input to capture physical keyboard events smoothly */}
      <input
        ref={hiddenInputRef}
        type="text"
        className="opacity-0 absolute top-0 left-0 h-0 w-0 pointer-events-none"
        onKeyDown={onKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus
      />

      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-black/50 border-b border-white/5 select-none">
        {/* Left: Window buttons & Shell Info */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-2">
            <span className={`${theme.prompt} font-semibold`}>{snippet.prompt || 'user@terminal:~$'}</span>
            <span className="text-gray-200 font-medium">{snippet.title}</span>
          </span>
        </div>

        {/* Right: Actions, Font Size & Contrast Toggles */}
        <div className="flex items-center gap-2">
          {/* High Contrast Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded border transition-colors ${
              highContrast
                ? 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300 font-semibold'
                : 'border-white/10 text-gray-400 hover:text-white bg-black/30'
            }`}
            title="Toggle high contrast readable characters"
          >
            <Eye className="w-3 h-3" />
            <span className="hidden sm:inline">High Contrast</span>
          </button>

          {/* Font Size Pills */}
          <div className="flex items-center bg-black/40 p-0.5 rounded border border-white/10 text-[10px] font-mono">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'normal' ? 'bg-white/20 text-white font-bold' : 'text-gray-400'}`}
              title="Normal font size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'large' ? 'bg-white/20 text-white font-bold' : 'text-gray-400'}`}
              title="Large font size"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize('xl')}
              className={`px-1.5 py-0.5 rounded ${fontSize === 'xl' ? 'bg-white/20 text-white font-bold' : 'text-gray-400'}`}
              title="Extra large font size"
            >
              A++
            </button>
          </div>

          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5">
            {snippet.language || snippet.subCategory}
          </span>

          <button
            onClick={handleCopyCommand}
            className="p-1 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Copy snippet to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-white px-2 py-0.5 rounded hover:bg-white/10 transition-colors"
            title="Restart current test (Esc)"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className={`p-5 sm:p-7 font-mono ${fontClasses} tracking-wide min-h-[190px] max-h-[480px] overflow-y-auto cursor-text relative select-none`}
      >
        {/* Unfocused overlay reminder */}
        {!isFocused && status !== 'completed' && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center z-10">
            <div className={`px-4 py-2.5 rounded-xl border ${theme.surfaceBorder} bg-black/90 text-xs font-mono ${theme.primary} flex items-center gap-2 shadow-2xl animate-pulse`}>
              <Keyboard className="w-3.5 h-3.5 shrink-0" />
              <span>Terminal paused. Click or press any key to resume typing</span>
            </div>
          </div>
        )}

        {isMultiLine ? (
          // Multi-line code block with line numbers
          <div className="table w-full border-collapse">
            {lines.map((lineStr, lineIdx) => {
              const lineStartIdx = lineStartIndices[lineIdx];
              const lineChars = lineStr.split('');
              const isLastLine = lineIdx === lines.length - 1;

              return (
                <div key={lineIdx} className="table-row hover:bg-white/[0.02] transition-colors">
                  {/* Line Number */}
                  <span className="table-cell pr-5 text-right select-none text-gray-500 font-mono text-xs align-top w-10">
                    {lineIdx + 1}
                  </span>

                  {/* Code Line Content */}
                  <span className="table-cell align-top whitespace-pre-wrap break-all">
                    {lineChars.map((char, charIdx) => {
                      const thisCharIdx = lineStartIdx + charIdx;
                      const hasBeenTyped = thisCharIdx < userInput.length;
                      const isCursor = thisCharIdx === cursorIndex;
                      const isCorrect = hasBeenTyped && userInput[thisCharIdx] === char;
                      const isMistake = hasBeenTyped && !isCorrect;

                      let charClass = pendingStyle;
                      if (isCorrect) charClass = theme.correct;
                      else if (isMistake) charClass = theme.incorrect;

                      return (
                        <span
                          key={charIdx}
                          ref={isCursor ? activeCharRef : null}
                          className={`relative inline-block ${charClass} ${
                            isCursor ? 'rounded-xs ring-2 ring-emerald-400/80 bg-white/20 text-white font-bold' : ''
                          }`}
                        >
                          {/* Blinking cursor line */}
                          {isCursor && isFocused && (
                            <span
                              className={`absolute -left-[1px] top-0 bottom-0 w-[2.5px] ${theme.cursor} animate-cursor-blink`}
                            />
                          )}
                          {char === ' ' ? (
                            isMistake ? (
                              <span className="text-white bg-rose-600 px-0.5 rounded-xs font-bold underline">␣</span>
                            ) : (
                              ' '
                            )
                          ) : (
                            char
                          )}
                        </span>
                      );
                    })}

                    {/* Newline symbol representation */}
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
                          className={`relative inline-block text-xs font-mono ml-1.5 ${
                            isCorrect ? theme.correct : isMistake ? theme.incorrect : 'text-gray-500'
                          } ${isCursor ? 'ring-2 ring-emerald-400/80 bg-white/20' : ''}`}
                        >
                          {isCursor && isFocused && (
                            <span
                              className={`absolute -left-[1px] top-0 bottom-0 w-[2.5px] ${theme.cursor} animate-cursor-blink`}
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
        ) : (
          // Single-line command (Terminal prompt style)
          <div className="flex items-start gap-2.5 whitespace-pre-wrap break-all">
            <span className={`select-none ${theme.prompt} font-bold shrink-0`}>
              {snippet.prompt || '$'}
            </span>
            <div className="flex-1">
              {targetText.split('').map((char, idx) => {
                const hasBeenTyped = idx < userInput.length;
                const isCursor = idx === cursorIndex;
                const isCorrect = hasBeenTyped && userInput[idx] === char;
                const isMistake = hasBeenTyped && !isCorrect;

                let charClass = pendingStyle;
                if (isCorrect) charClass = theme.correct;
                else if (isMistake) charClass = theme.incorrect;

                return (
                  <span
                    key={idx}
                    ref={isCursor ? activeCharRef : null}
                    className={`relative inline-block ${charClass} ${
                      isCursor ? 'rounded-xs ring-2 ring-emerald-400/80 bg-white/20 text-white font-bold' : ''
                    }`}
                  >
                    {isCursor && isFocused && (
                      <span
                        className={`absolute -left-[1px] top-0 bottom-0 w-[2.5px] ${theme.cursor} animate-cursor-blink`}
                      />
                    )}
                    {char === ' ' ? (
                      isMistake ? (
                        <span className="text-white bg-rose-600 px-0.5 rounded-xs font-bold underline">␣</span>
                      ) : (
                        ' '
                      )
                    ) : (
                      char
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer with Helper Tips */}
      <div className="px-5 py-2.5 bg-black/50 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-gray-400">
        <div className="flex items-center gap-3">
          <span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-200 border border-white/10">Tab</kbd> Indent
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-200 border border-white/10">Enter</kbd> Exec / Newline
          </span>
          <span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-200 border border-white/10">Backspace</kbd> Delete
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-300 font-semibold">{userInput.length} / {targetText.length} chars</span>
          <span className="text-gray-600">•</span>
          <span className="text-emerald-400 font-semibold">{Math.round((userInput.length / targetText.length) * 100)}% complete</span>
        </div>
      </div>
    </div>
  );
}
