import React, { useState } from 'react';
import {
  Timer,
  Zap,
  Flame,
  Award,
  Clock,
  Play,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Code2
} from 'lucide-react';
import { LANGUAGES, CURRICULUM } from '../../data/curriculum';
import { getTestHistory } from '../../utils/history';
import TechIcon from '../TechIcon';

export default function TestsView({
  theme = {},
  currentLanguage = 'python',
  onSelectLanguage,
  onStartTest,
}) {
  const [selectedDuration, setSelectedDuration] = useState(60); // 60, 180, 300
  const [testCategory, setTestCategory] = useState('algo'); // 'basics' | 'algo' | 'advanced'
  const history = getTestHistory();

  // Find best WPM for 60s, 180s, 300s
  const bestScores = {
    60: 0,
    180: 0,
    300: 0,
  };

  history.forEach((h) => {
    if (h.elapsedSeconds >= 50 && h.elapsedSeconds <= 70 && h.netWpm > bestScores[60]) {
      bestScores[60] = h.netWpm;
    }
    if (h.elapsedSeconds >= 170 && h.elapsedSeconds <= 190 && h.netWpm > bestScores[180]) {
      bestScores[180] = h.netWpm;
    }
    if (h.elapsedSeconds >= 290 && h.elapsedSeconds <= 310 && h.netWpm > bestScores[300]) {
      bestScores[300] = h.netWpm;
    }
  });

  const testModes = [
    {
      duration: 60,
      title: '1-Minute Sprint',
      desc: 'Rapid test measuring developer burst typing velocity on syntax, keywords, and function calls.',
      badge: 'Speed Test',
      icon: Zap,
      accentColor: 'text-[#30d158]',
      best: bestScores[60],
    },
    {
      duration: 180,
      title: '3-Minute Benchmark',
      desc: 'Standard developer speed benchmark evaluating consistent pace and syntax precision.',
      badge: 'Industry Standard',
      icon: Flame,
      accentColor: 'text-[#ff9f0a]',
      best: bestScores[180],
    },
    {
      duration: 300,
      title: '5-Minute Endurance',
      desc: 'Deep work stamina test typing multi-line algorithms, edge cases, and complex data structures.',
      badge: 'Full Benchmark',
      icon: Award,
      accentColor: 'text-[#bf5af2]',
      best: bestScores[300],
    },
  ];

  const handleLaunch = (duration) => {
    const langLessons = CURRICULUM[currentLanguage] || CURRICULUM.python;
    
    let candidates = langLessons;
    if (testCategory === 'algo') {
      candidates = langLessons.filter((l) => l.category.toLowerCase().includes('algorithm') || l.category.toLowerCase().includes('data structure'));
    } else if (testCategory === 'basics') {
      candidates = langLessons.filter((l) => l.category.toLowerCase().includes('basic') || l.category.toLowerCase().includes('function'));
    } else if (testCategory === 'advanced') {
      candidates = langLessons.filter((l) => l.difficulty === 'advanced' || l.difficulty === 'intermediate');
    }

    if (candidates.length === 0) candidates = langLessons;
    const picked = candidates[Math.floor(Math.random() * candidates.length)] || langLessons[0];

    onStartTest({
      ...picked,
      timeLimit: duration,
      isTimedTest: true,
    });
  };

  const activeLangObj = LANGUAGES.find((l) => l.id === currentLanguage) || LANGUAGES[0];

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto bg-black text-[#f5f5f7] font-sans p-4 sm:p-8 lg:p-12 gap-6 sm:gap-8 select-none">
      {/* 1. Apple Hero Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08] shrink-0">
        <div>
          <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider font-mono">
            Standardized Benchmarks
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
            Timed Speed Tests
          </h1>
          <p className="text-xs sm:text-sm text-[#86868b] mt-1.5 max-w-xl">
            Evaluate your programming speed under real pressure with live countdown and accuracy tracking.
          </p>
        </div>

        {/* Current Active Language Indicator (Clean, non-competing badge) */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-[#86868b] shrink-0">
          <TechIcon id={currentLanguage} className="w-3.5 h-3.5 shrink-0" />
          <span className="capitalize text-[#f5f5f7] font-medium">{activeLangObj.name}</span>
          <span className="text-[10px] text-[#86868b] hidden sm:inline">• Active Target</span>
        </div>
      </div>

      {/* 2. Apple Segmented Topic Filter - With dedicated vertical padding & shrink-0 to prevent clipping */}
      <div className="shrink-0 py-1">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
          <span className="text-xs text-[#86868b] font-medium mr-1 shrink-0">Focus:</span>
          <div className="flex items-center p-1 rounded-full bg-white/[0.05] border border-white/[0.08] shrink-0 shadow-sm">
            {[
              { id: 'algo', label: 'Algorithms & Logic' },
              { id: 'basics', label: 'Syntax & Functions' },
              { id: 'advanced', label: 'Data Structures' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setTestCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  testCategory === cat.id
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-[#86868b] hover:text-[#f5f5f7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Apple Bento Grid Test Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 shrink-0">
        {testModes.map((mode) => {
          const Icon = mode.icon;
          return (
            <div
              key={mode.duration}
              className="apple-glass-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10">
                    <Icon className={`w-5 h-5 ${mode.accentColor}`} />
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[#86868b]">
                    {mode.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                  {mode.title}
                </h3>

                <p className="text-xs text-[#86868b] mt-2.5 leading-relaxed">
                  {mode.desc}
                </p>

                {/* Best Score Pill */}
                <div className="mt-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[#86868b]">Personal Best</span>
                  <span className="font-mono font-bold text-[#30d158]">
                    {mode.best > 0 ? `${mode.best} WPM` : 'No score'}
                  </span>
                </div>
              </div>

              {/* Start Test Button */}
              <div className="mt-8 pt-5 border-t border-white/[0.06]">
                <button
                  onClick={() => handleLaunch(mode.duration)}
                  className="apple-button-primary w-full py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start {mode.duration / 60}-Minute Test</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. Minimalist Footer Note */}
      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5 text-xs text-[#86868b] shrink-0">
        <Clock className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          The countdown starts automatically upon your initial keypress. Program syntax is weighted realistically to reward consistent rhythm and accurate bracket closure.
        </p>
      </div>
    </div>
  );
}
