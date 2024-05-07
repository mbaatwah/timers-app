import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import {TimerComponent} from '../components/Timer/TimerComponent';
import BaseLayout from './layouts/Baselayout';

const CountdownScreen = () => {
  return (
    <BaseLayout>
      <TimerComponent />
    </BaseLayout>
  );
};

export default CountdownScreen;