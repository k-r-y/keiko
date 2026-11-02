import React from 'react';
import { 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Check,
  Play
} from 'lucide-react';

export default function IDETerminalConsole({
  lesson,
  language,
  status,
  stats,
  userInput,
  targetText,
  onNextLesson,
  hasNextLesson,
  onRun,
  isExecuting = false,
  theme = {},
}) {
  const isCompleted = status === 'completed';
  const progressPct = targetText.length > 0 ? Math.round((userInput.length / targetText.length) * 100) : 0;

  const getRunCommand = () => {
    switch (language) {
      case 'python': return `python3 ${lesson?.filename || 'main.py'}`;
      case 'javascript': return `node ${lesson?.filename || 'index.js'}`;
      case 'typescript': return `ts-node ${lesson?.filename || 'index.ts'}`;
      case 'java': return `javac ${lesson?.filename || 'Main.java'} && java Main`;
      case 'cpp': return `g++ -std=c++20 ${lesson?.filename || 'main.cpp'} -o bin && ./bin`;
      case 'csharp': return `dotnet run`;
      case 'go': return `go run ${lesson?.filename || 'main.go'}`;
      case 'rust': return `cargo run`;
      case 'php': return `php ${lesson?.filename || 'index.php'}`;
      case 'ruby': return `ruby ${lesson?.filename || 'app.rb'}`;
      case 'sql': return `psql -f ${lesson?.filename || 'query.sql'}`;
      case 'bash': return `bash ${lesson?.filename || 'script.sh'}`;
      default: return `./${lesson?.filename || 'run.sh'}`;
    }
  };

  return (
    <div className="border-t border-white/[0.08] bg-black/60 backdrop-blur-3xl flex flex-col font-mono text-xs select-none shrink-0 transition-colors">
      {/* 1. Terminal Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-white/[0.02] border-b border-white/[0.05] gap-2">
        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
          {/* macOS Terminal Window Dots */}
          <div className="hidden sm:flex items-center gap-1.5 pr-1 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/70" />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#86868b] font-mono min-w-0">
            <span className="text-[#30d158] font-bold shrink-0">$</span>
            <span className="font-medium text-[#f5f5f7] max-w-[130px] sm:max-w-xs md:max-w-none truncate">{getRunCommand()}</span>
          </div>

          {/* Quick Terminal Run Button */}
          {onRun && !isCompleted && !isExecuting && (
            <button
              onClick={onRun}
              className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/10 text-[10px] text-[#f5f5f7] cursor-pointer transition-all ml-1 shrink-0"
              title="Run Code in Terminal (⌘Enter)"
            >
              <Play className="w-2.5 h-2.5 fill-current text-[#30d158]" />
              <span>Run</span>
            </button>
          )}
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {isCompleted && hasNextLesson ? (
            <button
              onClick={onNextLesson}
              className="apple-button-primary flex items-center gap-1.5 px-3 sm:px-3.5 py-1 text-xs font-semibold cursor-pointer font-sans"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="text-[11px] text-[#86868b] font-sans flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isExecuting ? 'bg-[#2997ff] animate-ping' : isCompleted ? 'bg-[#30d158]' : status === 'running' ? 'bg-[#ff9f0a] animate-pulse' : 'bg-[#86868b]/60'}`} />
              <span className="max-w-[80px] sm:max-w-none truncate">{isExecuting ? 'Executing...' : isCompleted ? 'Exit 0' : status === 'running' ? `${progressPct}% typed` : 'Ready'}</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. Unified Console Output Area */}
      <div className="p-3 sm:p-4 h-28 sm:h-36 overflow-y-auto font-mono text-xs leading-relaxed text-[#f5f5f7] space-y-2">
        {isExecuting ? (
          <div className="space-y-2 py-1 animate-in fade-in duration-150">
            <div className="flex items-center gap-2 text-xs text-[#2997ff] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#2997ff] animate-ping" />
              <span>Compiling and executing {lesson?.filename || 'program'}...</span>
            </div>
            <div className="text-[11px] text-[#86868b] font-mono pl-4">
              $ {getRunCommand()}
            </div>
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
          </div>
        ) : (
          <div className="text-[#86868b]/60 font-mono text-xs flex items-center gap-2 pt-2">
            <Terminal className="w-3.5 h-3.5 text-[#86868b]/40 shrink-0" />
            <span>Terminal output will stream live here as your program executes...</span>
          </div>
        )}
      </div>
    </div>
  );
}
