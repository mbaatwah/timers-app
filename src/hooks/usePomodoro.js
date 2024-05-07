import { useState, useEffect, useCallback, useRef } from 'react';
import useTimer from './useTimer'; // Assuming you have a separate useTimer hook

const usePomodoro = (workDuration = 25, breakDuration = 5) => {
  const [mode, setMode] = useState('work');
  const [cycles, setCycles] = useState(0);
  const [totalCycles, setTotalCycles] = useState(0);

  const {
    isRunning,
    currentTime,
    startTimer,
    pauseTimer,
    resetTimer,
    formatTime,
  } = useTimer(workDuration * 60);

  const switchMode = useCallback(() => {
    if (mode === 'work') {
      setMode('break');
      resetTimer(breakDuration * 60);
      setCycles((prevCycles) => prevCycles + 1);
    } else {
      setMode('work');
      resetTimer(workDuration * 60);
      setTotalCycles((prevTotalCycles) => prevTotalCycles + 1);
    }
  }, [mode, workDuration, breakDuration, resetTimer]);

  useEffect(() => {
    if (isRunning && currentTime === 0) {
      pauseTimer();
      switchMode();
      startTimer();
    }
  }, [isRunning, currentTime, pauseTimer, switchMode, startTimer]);

  return {
    isRunning,
    currentTime,
    mode,
    cycles,
    totalCycles,
    startTimer,
    pauseTimer,
    resetTimer,
    switchMode,
    formatTime,
  };
};

export default usePomodoro;