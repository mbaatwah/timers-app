import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';

export function StopwatchDisplay({ timeRemaining }) {
    return (
    <>
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