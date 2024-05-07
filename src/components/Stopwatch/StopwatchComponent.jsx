import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import useStopwatch from '../../hooks/useStopwatch';
import { StopwatchDisplay } from './StopwatchDisplay';
import { StopwatchControls } from './StopwatchControls';
import { StopwatchLapDisplay } from './StopwatchLapDisplay';

export function StopwatchComponent({}) {
    const stopwatch = useStopwatch();
    
    return (
    <>
      <StopwatchDisplay timeRemaining={stopwatch.timeRemaining} />
      <StopwatchControls stopwatch={stopwatch} />
      <StopwatchLapDisplay stopwatch={stopwatch} />
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