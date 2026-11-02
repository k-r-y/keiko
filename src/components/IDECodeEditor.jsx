import React, { useRef, useEffect, useState } from 'react';
import { Keyboard } from 'lucide-react';

export default function IDECodeEditor({
  theme,
  lesson,
  userInput,
  cursorIndex,
  status,
  onKeyDown,
  fontSize = 'large',
  highContrast = true,
}) {
  const containerRef = useRef(null);
  const hiddenInputRef = useRef(null);
  const activeCharRef = useRef(null);
  const [isFocused, setIsFocused] = useState(true);

  // Auto focus input on mount or lesson change
  useEffect(() => {
    hiddenInputRef.current?.focus();
  }, [lesson?.id]);

  // Keep cursor scrolled into view smoothly
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

  // Precompute line start character offsets
  let currentOffset = 0;
  const lineStartIndices = lines.map((line) => {
    const start = currentOffset;
    currentOffset += line.length + 1; // +1 for '\n'
    return start;
  });

  const fontClasses = {
    normal: 'text-sm leading-relaxed',
    large: 'text-base sm:text-lg leading-loose',
    xl: 'text-lg sm:text-xl leading-loose',
  }[fontSize] || 'text-base sm:text-lg leading-loose';

  const pendingStyle = highContrast 
    ? 'text-zinc-400 opacity-90' 
    : theme.pending || 'text-zinc-500';

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={`flex-1 p-5 sm:p-7 font-mono ${fontClasses} bg-[#0c0e17] overflow-y-auto cursor-text relative select-none`}
    >
      {/* Hidden input capturing typing keystrokes */}
      <input
        ref={hiddenInputRef}
        type="text"
        className="opacity-0 absolute top-0 left-0 h-0 w-0 pointer-events-none"
        onKeyDown={onKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus
      />

      {/* Unfocused overlay reminder */}
      {!isFocused && status !== 'completed' && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center z-20">
          <div className="px-4 py-2.5 rounded-xl border border-white/10 bg-[#121522] text-xs font-mono text-emerald-400 flex items-center gap-2 shadow-2xl animate-pulse">
            <Keyboard className="w-3.5 h-3.5" />
            <span>Click to focus editor & start typing</span>
          </div>
        </div>
      )}

      {/* Code Table with Line Numbers */}
      <div className="table w-full border-collapse">
        {lines.map((lineStr, lineIdx) => {
          const lineStartIdx = lineStartIndices[lineIdx];
          const lineChars = lineStr.split('');
          const isLastLine = lineIdx === lines.length - 1;

          return (
            <div key={lineIdx} className="table-row hover:bg-white/[0.015] transition-colors">
              {/* Line Number */}
              <span className="table-cell pr-6 text-right select-none text-gray-600 font-mono text-xs sm:text-sm align-top w-12 border-r border-white/[0.04]">
                {lineIdx + 1}
              </span>

              {/* Code Line Content */}
              <span className="table-cell pl-4 align-top whitespace-pre-wrap break-all">
                {lineChars.map((char, charIdx) => {
                  const thisCharIdx = lineStartIdx + charIdx;
                  const hasBeenTyped = thisCharIdx < userInput.length;
                  const isCursor = thisCharIdx === cursorIndex;
                  const isCorrect = hasBeenTyped && userInput[thisCharIdx] === char;
                  const isMistake = hasBeenTyped && !isCorrect;

                  let charClass = pendingStyle;
                  if (isCorrect) charClass = theme.correct || 'text-emerald-400';
                  else if (isMistake) charClass = theme.incorrect || 'text-white bg-rose-600';

                  return (
                    <span
                      key={charIdx}
                      ref={isCursor ? activeCharRef : null}
                      className={`relative inline-block ${charClass} ${
                        isCursor ? 'rounded-xs ring-2 ring-emerald-400/80 bg-white/20 text-white font-bold' : ''
                      }`}
                    >
                      {/* Blinking Cursor Bar */}
                      {isCursor && isFocused && (
                        <span
                          className={`absolute -left-[1px] top-0 bottom-0 w-[2.5px] ${theme.cursor || 'bg-emerald-400'} animate-cursor-blink`}
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
                      className={`relative inline-block text-xs font-mono ml-2 ${
                        isCorrect ? theme.correct : isMistake ? theme.incorrect : 'text-gray-600'
                      } ${isCursor ? 'ring-2 ring-emerald-400/80 bg-white/20' : ''}`}
                    >
                      {isCursor && isFocused && (
                        <span
                          className={`absolute -left-[1px] top-0 bottom-0 w-[2.5px] ${theme.cursor || 'bg-emerald-400'} animate-cursor-blink`}
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
  );
}
