import React, { createContext, useState, useEffect } from 'react';
import { useColorMode } from 'native-base';
export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const { colorMode, toggleColorMode, setColorMode} = useColorMode();
  const [ pomodoroWorkTime, setPomodoroWorkTime ] = useState(25);
  const [ pomodoroLongBreakTime, setPomodoroLongBreakTime ] = useState(15);
  const [ pomodoroShortBreakTime, setPomodoroShortBreakTime ] = useState(5);

  useEffect(() => {
    const colorMode = localStorage.getItem('colorMode');
    if (colorMode) {
      setColorMode(colorMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  

  const settings = {
    colorMode,
    toggleColorMode,
    setColorMode
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
