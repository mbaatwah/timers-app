// PomodoroScreen.jsx
import React, { useContext, useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import {
  View,
  Text,
  Select,
  FormControl,
  HStack,
  useColorMode,
} from "native-base";
import BaseLayout from "./layouts/Baselayout";
import { SettingsContext } from "../contexts/ContextProvider";

const SettingsScreen = () => {
  const { colorMode, toggleColorMode, setColorMode } =
    useContext(SettingsContext);
  return (
    <BaseLayout>
      <>
        <FormControl.Label>Color Theme</FormControl.Label>
        <Select
          name="color-mode"
          defaultValue={colorMode}
          onValueChange={setColorMode}
        >
          <Select.Item label="Light" value="light" />
          <Select.Item label="Dark" value="dark" />
        </Select>
      </>
    </BaseLayout>
  );
};

export default SettingsScreen;
