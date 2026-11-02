// Persistent LocalStorage History and Lifetime Analytics for TermType
// Inspired by Typing.com developer metrics

const STORAGE_KEY_TESTS = 'termtype_test_history';
const STORAGE_KEY_STATS = 'termtype_lifetime_stats';

// Save a completed test run
export function saveTestResult({
  language = 'python',
  title = 'Untitled Test',
  mode = 'lesson', // 'lesson' | 'timed' | 'playground'
  netWpm = 0,
  rawWpm = 0,
  accuracy = 100,
  elapsedSeconds = 0,
  errorCount = 0,
  errorKeys = {},
  timestamp = Date.now(),
}) {
  try {
    const existingHistory = getTestHistory();
    const newEntry = {
      id: `run-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      language,
      title,
      mode,
      netWpm: Math.round(netWpm),
      rawWpm: Math.round(rawWpm),
      accuracy: Math.round(accuracy * 10) / 10,
      elapsedSeconds: Math.round(elapsedSeconds),
      errorCount,
      errorKeys: errorKeys || {},
      timestamp,
    };

    // Store up to 200 recent runs
    const updatedHistory = [newEntry, ...existingHistory].slice(0, 200);
    localStorage.setItem(STORAGE_KEY_TESTS, JSON.stringify(updatedHistory));

    return newEntry;
  } catch (err) {
    console.error('Failed to save test result to localStorage', err);
    return null;
  }
}

// Retrieve test history
export function getTestHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TESTS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read test history', err);
    return [];
  }
}

// Compute aggregate lifetime statistics
export function getLifetimeStats() {
  const history = getTestHistory();

  if (history.length === 0) {
    return {
      totalTests: 0,
      totalTimeSeconds: 0,
      averageWpm: 0,
      bestWpm: 0,
      averageAccuracy: 100,
      totalErrors: 0,
      languageBreakdown: {},
    };
  }

  const totalTests = history.length;
  let totalWpm = 0;
  let bestWpm = 0;
  let totalAcc = 0;
  let totalTime = 0;
  let totalErrors = 0;
  const langCounts = {};

  for (const item of history) {
    const wpm = item.netWpm || 0;
    totalWpm += wpm;
    if (wpm > bestWpm) bestWpm = wpm;
    totalAcc += item.accuracy || 0;
    totalTime += item.elapsedSeconds || 0;
    totalErrors += item.errorCount || 0;

    const lang = item.language || 'other';
    langCounts[lang] = (langCounts[lang] || 0) + 1;
  }

  return {
    totalTests,
    totalTimeSeconds: totalTime,
    averageWpm: Math.round(totalWpm / totalTests),
    bestWpm,
    averageAccuracy: Math.round((totalAcc / totalTests) * 10) / 10,
    totalErrors,
    languageBreakdown: langCounts,
  };
}

// Aggregate problem keys (most frequent typing mistakes across all tests)
export function getProblemKeys() {
  const history = getTestHistory();
  const keyFrequency = {};

  for (const item of history) {
    if (item.errorKeys && typeof item.errorKeys === 'object') {
      for (const [key, count] of Object.entries(item.errorKeys)) {
        if (key && count > 0) {
          keyFrequency[key] = (keyFrequency[key] || 0) + count;
        }
      }
    }
  }

  // Convert to sorted array
  return Object.entries(keyFrequency)
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count);
}

// Format seconds into "Xm Ys" or "X hours"
export function formatDuration(seconds) {
  if (!seconds || seconds <= 0) return '0s';
  const mins = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;

  if (mins === 0) return `${remainingSecs}s`;
  if (mins < 60) return `${mins}m ${remainingSecs}s`;

  const hours = (mins / 60).toFixed(1);
  return `${hours} hrs`;
}

// Check and return unlocked badges
export const BADGES = [
  {
    id: 'first_run',
    title: 'First Execution',
    description: 'Completed your first code typing test',
    icon: 'Terminal',
    check: (history, stats) => stats.totalTests >= 1,
  },
  {
    id: 'speed_30',
    title: 'Junior Velocity',
    description: 'Reached 30+ Net WPM on any test',
    icon: 'Zap',
    check: (history, stats) => stats.bestWpm >= 30,
  },
  {
    id: 'speed_60',
    title: 'Senior Velocity',
    description: 'Reached 60+ Net WPM on any test',
    icon: 'Flame',
    check: (history, stats) => stats.bestWpm >= 60,
  },
  {
    id: 'precision_master',
    title: 'Zero Syntax Error',
    description: 'Achieved 100% accuracy on a complete test',
    icon: 'ShieldCheck',
    check: (history) => history.some((h) => h.accuracy === 100),
  },
  {
    id: 'endurance_10m',
    title: 'Deep Work Flow',
    description: 'Spent over 10 minutes actively typing code',
    icon: 'Clock',
    check: (history, stats) => stats.totalTimeSeconds >= 600,
  },
  {
    id: 'polyglot_coder',
    title: 'Polyglot Coder',
    description: 'Practiced code across 3 or more different languages',
    icon: 'Layers',
    check: (history, stats) => Object.keys(stats.languageBreakdown || {}).length >= 3,
  },
  {
    id: 'grind_master',
    title: 'Code Machine',
    description: 'Completed 15 or more code typing sessions',
    icon: 'Award',
    check: (history, stats) => stats.totalTests >= 15,
  },
];

export function getBadgesStatus() {
  const history = getTestHistory();
  const stats = getLifetimeStats();

  return BADGES.map((b) => ({
    ...b,
    unlocked: b.check(history, stats),
  }));
}

// Clear all history
export function clearTestHistory() {
  try {
    localStorage.removeItem(STORAGE_KEY_TESTS);
    localStorage.removeItem(STORAGE_KEY_STATS);
    return true;
  } catch (err) {
    console.error('Failed to clear history', err);
    return false;
  }
}
