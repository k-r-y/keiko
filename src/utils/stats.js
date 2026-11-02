export function calculateStats({
  input = '',
  target = '',
  totalKeyStrokes = 0,
  errorCount = 0,
  startTime = null,
  endTime = null,
  errorKeys = {},
  activeSeconds = null,
}) {
  const now = endTime || Date.now();
  const elapsedSeconds = activeSeconds !== null 
    ? Math.max(0.5, activeSeconds) 
    : (startTime ? Math.max(0.5, (now - startTime) / 1000) : 0);
  const elapsedMinutes = elapsedSeconds / 60;

  // Characters typed correctly
  let correctChars = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target[i]) {
      correctChars++;
    }
  }

  // WPM standard calculation: (all typed chars / 5) / minutes
  const rawWpm = elapsedMinutes > 0 ? Math.round((input.length / 5) / elapsedMinutes) : 0;
  const netWpm = elapsedMinutes > 0 ? Math.max(0, Math.round((correctChars / 5) / elapsedMinutes)) : 0;
  const cpm = elapsedMinutes > 0 ? Math.round(correctChars / elapsedMinutes) : 0;

  // Accuracy
  const attempts = Math.max(totalKeyStrokes, input.length);
  const accuracy = attempts > 0 ? Math.max(0, Math.round(((attempts - errorCount) / attempts) * 100)) : 100;

  // Rating assessment
  let rank = 'Script Apprentice';
  let rankColor = 'text-gray-400';
  if (netWpm >= 90) {
    rank = 'Matrix Architect / Root Legend';
    rankColor = 'text-emerald-400 font-bold';
  } else if (netWpm >= 75) {
    rank = 'Kernel Hacker / Cyber Ninja';
    rankColor = 'text-cyan-400 font-semibold';
  } else if (netWpm >= 55) {
    rank = 'SRE / Senior Terminal Pilot';
    rankColor = 'text-purple-400 font-semibold';
  } else if (netWpm >= 35) {
    rank = 'DevOps / CLI Native';
    rankColor = 'text-blue-400';
  } else if (netWpm >= 20) {
    rank = 'Junior Sysadmin';
    rankColor = 'text-yellow-400';
  }

  return {
    rawWpm,
    netWpm,
    cpm,
    accuracy,
    elapsedSeconds: Math.round(elapsedSeconds),
    errorCount,
    correctChars,
    totalChars: target.length,
    rank,
    rankColor,
    errorKeys,
  };
}
