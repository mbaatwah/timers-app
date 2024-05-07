import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import { TimerHourglass } from './TimerHourglass';

export function TimerDisplay({ timeRemaining }) {
    return (
    <>
      <TimerHourglass timeRemaining={timeRemaining} />
      <Text style={styles.text}>{timeRemaining}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 75,
    alignItems: 'center',
    justifyContent: 'center',
  }
});