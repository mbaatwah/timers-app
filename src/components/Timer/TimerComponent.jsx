import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import useTimer from '../../hooks/useTimer';
import { TimerDisplay } from './TimerDisplay';
import { TimerControls } from './TimerControls';

export function TimerComponent({}) {
    const timer = useTimer(0.05 * 60, () => console.log('Timer ended!'));
    useEffect(() => {
        timer.startTimer();
    }
    , []);
    return (
    <>
      <TimerDisplay timeRemaining={timer.timeRemaining} />
      <TimerControls timer={timer} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});