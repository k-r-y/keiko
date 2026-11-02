import React from 'react';
import { 
  Terminal, 
  CheckCircle2, 
  XCircle,
  ArrowRight, 
  Play,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import { getRunCommand } from '../utils/codeRunner';

export default function IDETerminalConsole({
  lesson,
  language,
  status,
  stats,
  userInput,
  targetText = '',
  onNextLesson,
  hasNextLesson,
  onRun,
  isExecuting = false,
  terminalExecution = null,
  onClearTerminal,
  theme = {},
}) {
  const isCompleted = status === 'completed';
  const progressPct = targetText.length > 0 ? Math.round((userInput.length / targetText.length) * 100) : 0;
  const command = getRunCommand(language, lesson?.filename);

  return (
    <div className="border-t border-white/[0.08] bg-black/75 backdrop-blur-3xl flex flex-col font-mono text-xs select-none shrink-0 transition-colors">
      {/* 1. Terminal Header Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-white/[0.02] border-b border-white/[0.05] gap-2">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          {/* macOS Terminal Window Controls */}
          <div className="hidden sm:flex items-center gap-1.5 pr-1 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#86868b] font-mono min-w-0">
            <span className="text-[#30d158] font-bold shrink-0">$</span>
            <span className="font-medium text-[#f5f5f7] max-w-[130px] sm:max-w-xs md:max-w-none truncate">{command}</span>
          </div>

          {/* Terminal Run Button (Always accessible!) */}
          {onRun && (
            <button
              onClick={onRun}
              disabled={isExecuting}
              className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[11px] font-sans transition-all ml-1 shrink-0 cursor-pointer ${
                isExecuting
                  ? 'bg-white/5 border-white/10 text-[#86868b] opacity-60'
                  : 'bg-white/[0.08] hover:bg-white/15 border-white/15 text-[#f5f5f7] shadow-sm hover:border-white/25 active:scale-95'
              }`}
              title="Run Code in Terminal (⌘Enter)"
            >
              <Play className="w-2.5 h-2.5 fill-current text-[#30d158]" />
              <span>Run</span>
            </button>
          )}

          {/* Terminal Clear Button */}
          {terminalExecution && onClearTerminal && !isExecuting && (
            <button
              onClick={onClearTerminal}
              className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[10px] text-[#86868b] hover:text-[#f5f5f7] transition-colors cursor-pointer"
              title="Clear terminal output"
            >
              <Trash2 className="w-2.5 h-2.5" />
              <span>Clear</span>
            </button>
          )}
        </div>

        {/* Right Status Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 font-sans">
          {isCompleted && hasNextLesson ? (
            <button
              onClick={onNextLesson}
              className="apple-button-primary flex items-center gap-1.5 px-3 sm:px-3.5 py-1 text-xs font-semibold cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="text-[11px] text-[#86868b] flex items-center gap-1.5 font-mono">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isExecuting
                    ? 'bg-[#2997ff] animate-ping'
                    : terminalExecution
                    ? terminalExecution.exitCode === 0
                      ? 'bg-[#30d158]'
                      : 'bg-rose-500'
                    : isCompleted
                    ? 'bg-[#30d158]'
                    : status === 'running'
                    ? 'bg-[#ff9f0a] animate-pulse'
                    : 'bg-[#86868b]/60'
                }`}
              />
              <span className="max-w-[100px] sm:max-w-none truncate">
                {isExecuting
                  ? 'Executing...'
                  : terminalExecution
                  ? `Exit ${terminalExecution.exitCode}`
                  : isCompleted
                  ? 'Exit 0'
                  : status === 'running'
                  ? `${progressPct}% typed`
                  : 'Ready'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 2. Unified Console Output Area */}
      <div className="p-3 sm:p-4.5 h-32 sm:h-40 overflow-y-auto font-mono text-xs leading-relaxed text-[#f5f5f7] space-y-2.5">
        {isExecuting ? (
          <div className="space-y-2 py-1 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 text-xs text-[#2997ff] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#2997ff] animate-ping" />
              <span>Compiling and executing {lesson?.filename || 'program'}...</span>
            </div>
            <div className="text-[11px] text-[#86868b] font-mono pl-4">
              $ {command}
            </div>
          </div>
        ) : terminalExecution ? (
          <div className="space-y-2.5 animate-in fade-in duration-200">
            {/* Command Line Echo */}
            <div className="text-xs text-[#86868b] font-mono flex items-center gap-2">
              <span className="text-[#30d158] font-bold">$</span>
              <span>{terminalExecution.command}</span>
              <span className="text-[10px] text-[#86868b]/60 ml-auto font-sans">
                {terminalExecution.executionTimeMs}ms
              </span>
            </div>

            {/* Execution Status Banner & Formatted Output */}
            {terminalExecution.success ? (
              <div className="space-y-2">
                <div className="text-[#30d158] font-semibold flex items-center gap-2 font-sans text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#30d158] shrink-0" />
                  <span>Program executed successfully (exit code 0):</span>
                </div>

                <pre className="text-[#9cdcfe] whitespace-pre-wrap pl-3.5 border-l-2 border-[#30d158]/70 font-mono text-xs bg-white/[0.02] p-3 rounded-2xl border border-white/[0.06] overflow-x-auto">
                  {terminalExecution.output}
                </pre>

                {stats && (
                  <div className="text-[#86868b] text-xs font-sans flex items-center gap-3 pt-0.5">
                    <span className="text-[#30d158] font-semibold font-mono">
                      {stats.netWpm} WPM
                    </span>
                    <span>•</span>
                    <span className="text-[#f5f5f7] font-mono">
                      {stats.accuracy}% accuracy
                    </span>
                    <span>•</span>
                    <span className="font-mono text-[#86868b]">
                      {stats.elapsedSeconds}s elapsed
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-rose-400 font-semibold flex items-center gap-2 font-sans text-xs">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Execution terminated with error (exit code 1):</span>
                </div>

                <pre className="text-rose-200/90 whitespace-pre-wrap pl-3.5 border-l-2 border-rose-500/80 font-mono text-xs bg-rose-500/5 p-3 rounded-2xl border border-rose-500/20 overflow-x-auto selection:bg-rose-500/30">
                  {terminalExecution.output}
                </pre>

                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2 text-[11px] text-[#86868b] font-sans">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Review the compiler message above, fix the syntax in the editor, and run again.</span>
                </div>
              </div>
            )}
          </div>
        ) : isCompleted ? (
          <div className="space-y-2 animate-in fade-in duration-200">
            <div className="text-[#30d158] font-semibold flex items-center gap-2 font-sans text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#30d158]" />
              <span>Program executed successfully with exit code 0:</span>
            </div>

            <pre className="text-[#9cdcfe] whitespace-pre-wrap pl-3.5 border-l-2 border-[#30d158]/70 font-mono text-xs bg-white/[0.02] p-3 rounded-2xl border border-white/[0.06]">
              {lesson?.expectedOutput || 'Execution completed with return code 0.'}
            </pre>

            {stats && (
              <div className="text-[#86868b] text-xs font-sans flex items-center gap-3 pt-0.5">
                <span className="text-[#30d158] font-semibold font-mono">
                  {stats.netWpm} WPM
                </span>
                <span>•</span>
                <span className="text-[#f5f5f7] font-mono">
                  {stats.accuracy}% accuracy
                </span>
                <span>•</span>
                <span className="font-mono text-[#86868b]">
                  {stats.elapsedSeconds}s
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="text-[#86868b]/60 font-mono text-xs flex flex-col justify-center h-full gap-1 pt-1">
            <div className="flex items-center gap-2 text-[#86868b]">
              <span className="text-[#30d158] font-bold">$</span>
              <span>{command}</span>
            </div>
            <div className="text-[11px] text-[#86868b]/50 pl-4 font-sans">
              Type code in the editor above, then click 'Run' or press ⌘Enter to execute.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
