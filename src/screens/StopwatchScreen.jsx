// StopwatchScreen.jsx
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, ColorMode } from 'native-base';
import BaseLayout from './layouts/Baselayout';
import { StopwatchComponent } from '../components/Stopwatch/StopwatchComponent';

const StopwatchScreen = () => {
  return (
    <BaseLayout>
      <StopwatchComponent />
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

export default StopwatchScreen;