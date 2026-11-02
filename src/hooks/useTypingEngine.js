import { useState, useEffect, useRef, useCallback } from 'react';
import { calculateStats } from '../utils/stats';
import { soundEngine } from '../utils/sound';

export function useTypingEngine({
  targetSnippet,
  timeLimit = 0, // 0 means finish snippet mode, > 0 means countdown mode (seconds)
  onComplete,
}) {
  const targetText = targetSnippet ? targetSnippet.content : '';
  const [userInput, setUserInput] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [status, setStatus] = useState('idle'); // 'idle' | 'running' | 'completed'
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [totalKeyStrokes, setTotalKeyStrokes] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [errorKeys, setErrorKeys] = useState({});
  const [wpmHistory, setWpmHistory] = useState([]);

  const inputRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const idleCheckIntervalRef = useRef(null);

  // Time tracking references to exclude paused/idle periods
  const lastKeyTimeRef = useRef(null);
  const accumulatedMsRef = useRef(0);
  const currentBurstStartRef = useRef(null);

  // Reset when snippet changes
  useEffect(() => {
    resetTest();
  }, [targetSnippet?.id]);

  // Compute live active seconds excluding idle/paused pauses
  const getActiveSeconds = useCallback(() => {
    let totalMs = accumulatedMsRef.current;
    if (status === 'running' && !isPaused && currentBurstStartRef.current) {
      totalMs += (Date.now() - currentBurstStartRef.current);
    }
    return Math.max(0.5, totalMs / 1000);
  }, [status, isPaused]);

  // 5-second inactivity detector: pauses timer if no keypress in 5 seconds
  useEffect(() => {
    if (status === 'running' && !isPaused) {
      idleCheckIntervalRef.current = setInterval(() => {
        if (lastKeyTimeRef.current) {
          const idleTime = Date.now() - lastKeyTimeRef.current;
          if (idleTime >= 5000) {
            // 5 seconds elapsed without any keypress -> pause!
            if (currentBurstStartRef.current) {
              // Credit time up to the last actual keypress
              accumulatedMsRef.current += Math.max(0, lastKeyTimeRef.current - currentBurstStartRef.current);
              currentBurstStartRef.current = null;
            }
            setIsPaused(true);
          }
        }
      }, 250);

      return () => clearInterval(idleCheckIntervalRef.current);
    }
  }, [status, isPaused]);

  // Countdown timer for timed modes: decrements ONLY when running and NOT paused
  useEffect(() => {
    if (status === 'running' && !isPaused && timeLimit > 0) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current);
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timerIntervalRef.current);
    }
  }, [status, isPaused, timeLimit]);

  // WPM history tracker for live graphs (ticks only when running and active)
  useEffect(() => {
    if (status === 'running' && !isPaused && startTime) {
      const historyInterval = setInterval(() => {
        const currentStats = calculateStats({
          input: userInput,
          target: targetText,
          totalKeyStrokes,
          errorCount,
          startTime,
          endTime: null,
          errorKeys,
          activeSeconds: getActiveSeconds(),
        });
        setWpmHistory((prev) => [
          ...prev,
          { time: Math.round(getActiveSeconds()), wpm: currentStats.netWpm, raw: currentStats.rawWpm },
        ]);
      }, 1000);

      return () => clearInterval(historyInterval);
    }
  }, [status, isPaused, startTime, userInput, totalKeyStrokes, errorCount, errorKeys, targetText, getActiveSeconds]);

  const resetTest = useCallback(() => {
    setUserInput('');
    setCursorIndex(0);
    setStatus('idle');
    setIsPaused(false);
    setStartTime(null);
    setEndTime(null);
    setTimeLeft(timeLimit);
    setTotalKeyStrokes(0);
    setErrorCount(0);
    setErrorKeys({});
    setWpmHistory([]);
    accumulatedMsRef.current = 0;
    currentBurstStartRef.current = null;
    lastKeyTimeRef.current = null;
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (idleCheckIntervalRef.current) clearInterval(idleCheckIntervalRef.current);
  }, [timeLimit]);

  const finishTest = useCallback(() => {
    const finishTimestamp = Date.now();
    setEndTime(finishTimestamp);
    setStatus('completed');
    setIsPaused(false);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (idleCheckIntervalRef.current) clearInterval(idleCheckIntervalRef.current);

    if (currentBurstStartRef.current && lastKeyTimeRef.current) {
      accumulatedMsRef.current += Math.max(0, lastKeyTimeRef.current - currentBurstStartRef.current);
      currentBurstStartRef.current = null;
    }
    const finalActiveSecs = Math.max(0.5, accumulatedMsRef.current / 1000);

    soundEngine.playCompleteSound();

    if (onComplete) {
      const finalStats = calculateStats({
        input: userInput,
        target: targetText,
        totalKeyStrokes,
        errorCount,
        startTime,
        endTime: finishTimestamp,
        errorKeys,
        activeSeconds: finalActiveSecs,
      });
      onComplete(finalStats);
    }
  }, [userInput, targetText, totalKeyStrokes, errorCount, startTime, errorKeys, onComplete]);

  const runCode = useCallback(() => {
    const finishTimestamp = Date.now();
    const finalInput = userInput.length >= targetText.length ? userInput : targetText;

    setUserInput(finalInput);
    setCursorIndex(finalInput.length);
    setEndTime(finishTimestamp);
    setStatus('completed');
    setIsPaused(false);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (idleCheckIntervalRef.current) clearInterval(idleCheckIntervalRef.current);

    if (currentBurstStartRef.current && lastKeyTimeRef.current) {
      accumulatedMsRef.current += Math.max(0, lastKeyTimeRef.current - currentBurstStartRef.current);
      currentBurstStartRef.current = null;
    }
    const finalActiveSecs = Math.max(0.5, accumulatedMsRef.current / 1000);

    soundEngine.playCompleteSound();

    if (onComplete) {
      const finalStats = calculateStats({
        input: finalInput,
        target: targetText,
        totalKeyStrokes: totalKeyStrokes > 0 ? totalKeyStrokes : targetText.length,
        errorCount,
        startTime: startTime || finishTimestamp - 1000,
        endTime: finishTimestamp,
        errorKeys,
        activeSeconds: finalActiveSecs,
      });
      onComplete(finalStats);
    }
  }, [errorCount, errorKeys, onComplete, startTime, targetText, totalKeyStrokes, userInput]);

  const handleKeyDown = useCallback(
    (e) => {
      // Don't capture shortcuts like Cmd+R, Ctrl+C, etc.
      if (e.metaKey || e.ctrlKey || e.altKey) {
        if (e.key === 'Backspace' && (e.metaKey || e.altKey || e.ctrlKey)) {
          e.preventDefault();
          let newLength = userInput.lastIndexOf(' ', userInput.length - 2) + 1;
          if (newLength < 0) newLength = 0;
          setUserInput((prev) => prev.slice(0, newLength));
          setCursorIndex(newLength);
          return;
        }
        return;
      }

      // Ignore single modifier keys
      if (['Shift', 'CapsLock', 'Control', 'Alt', 'Meta', 'Escape', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        return;
      }

      e.preventDefault();

      const now = Date.now();

      // Start on first key
      let currentStartTime = startTime;
      if (status === 'idle') {
        currentStartTime = now;
        setStartTime(currentStartTime);
        setStatus('running');
        setIsPaused(false);
        currentBurstStartRef.current = now;
        lastKeyTimeRef.current = now;
      } else if (status === 'running') {
        // If it was paused after 5s idle, resume typing!
        if (isPaused) {
          setIsPaused(false);
          currentBurstStartRef.current = now;
        }
        lastKeyTimeRef.current = now;
      }

      if (status === 'completed') return;

      // Handle Backspace
      if (e.key === 'Backspace') {
        if (userInput.length > 0) {
          const nextInput = userInput.slice(0, -1);
          setUserInput(nextInput);
          setCursorIndex(nextInput.length);
          soundEngine.playKeySound(false, false);
        }
        return;
      }

      // Handle Tab
      let typedChar = e.key;
      if (e.key === 'Tab') {
        typedChar = targetText[cursorIndex] === '\t' ? '\t' : '  ';
      } else if (e.key === 'Enter') {
        typedChar = '\n';
      }

      // Increment total strokes
      setTotalKeyStrokes((prev) => prev + 1);

      // Check correctness
      const expectedChar = targetText.slice(cursorIndex, cursorIndex + typedChar.length);
      const isCorrect = typedChar === expectedChar;

      if (!isCorrect) {
        setErrorCount((prev) => prev + 1);
        const expectedTargetKey = targetText[cursorIndex] || 'extra';
        setErrorKeys((prev) => ({
          ...prev,
          [expectedTargetKey]: (prev[expectedTargetKey] || 0) + 1,
        }));
        soundEngine.playErrorSound();
      } else {
        soundEngine.playKeySound(typedChar === ' ', typedChar === '\n');
      }

      const nextInput = userInput + typedChar;
      setUserInput(nextInput);
      setCursorIndex(nextInput.length);

      // Check if finished (in snippet completion mode)
      if (timeLimit === 0 && nextInput.length >= targetText.length) {
        const finishTimestamp = Date.now();
        setEndTime(finishTimestamp);
        setStatus('completed');
        setIsPaused(false);
        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        if (idleCheckIntervalRef.current) clearInterval(idleCheckIntervalRef.current);

        if (currentBurstStartRef.current && lastKeyTimeRef.current) {
          accumulatedMsRef.current += Math.max(0, lastKeyTimeRef.current - currentBurstStartRef.current);
          currentBurstStartRef.current = null;
        }
        const finalActiveSecs = Math.max(0.5, accumulatedMsRef.current / 1000);

        soundEngine.playCompleteSound();

        if (onComplete) {
          const finalStats = calculateStats({
            input: nextInput,
            target: targetText,
            totalKeyStrokes: totalKeyStrokes + 1,
            errorCount: isCorrect ? errorCount : errorCount + 1,
            startTime: currentStartTime,
            endTime: finishTimestamp,
            errorKeys,
            activeSeconds: finalActiveSecs,
          });
          onComplete(finalStats);
        }
      }
    },
    [cursorIndex, errorCount, errorKeys, onComplete, startTime, status, isPaused, targetText, timeLimit, totalKeyStrokes, userInput]
  );

  const stats = calculateStats({
    input: userInput,
    target: targetText,
    totalKeyStrokes,
    errorCount,
    startTime,
    endTime,
    errorKeys,
    activeSeconds: getActiveSeconds(),
  });

  return {
    userInput,
    cursorIndex,
    status,
    isPaused,
    startTime,
    endTime,
    timeLeft,
    totalKeyStrokes,
    errorCount,
    errorKeys,
    wpmHistory,
    stats,
    handleKeyDown,
    resetTest,
    runCode,
    finishTest,
    inputRef,
  };
}
