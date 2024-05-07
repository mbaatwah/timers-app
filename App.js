import React from "react";
import { NativeBaseProvider } from "native-base";
import { SettingsProvider } from "./src/contexts/ContextProvider";
import RootComponent from "./src/RootComponent";


export default function App() {
  return (
    <NativeBaseProvider>
      <SettingsProvider>
        <RootComponent />
      </SettingsProvider>
    </NativeBaseProvider>
  );
}
