// PomodoroScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseLayout from './layouts/Baselayout';

const PomodoroScreen = () => {
  return (
    <BaseLayout>
      <Text style={styles.heading}>Pomodoro???</Text>
    </BaseLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default PomodoroScreen;