import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import PomodoroScreen from "./screens/PomodoroScreen";
import CountdownScreen from "./screens/CountdownScreen";
import StopwatchScreen from "./screens/StopwatchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { SettingsContext } from "./contexts/ContextProvider";

const Tab = createBottomTabNavigator();

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}

export default function RootComponent() {
  const webRoute = capitalize(window.location.pathname.replace('/', ''))
  const { colorMode } = useContext(SettingsContext);

  return (
    <>
      <NavigationContainer >
        <Tab.Navigator
          initialRouteName={webRoute}

          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveBackgroundColor:
              colorMode === "dark" ? "black" : "white",
            tabBarInactiveBackgroundColor:
              colorMode === "dark" ? "black" : "white",
            tabBarStyle: {
              borderWidth: 0,
              shadowColor: "crimson",
              shadowBlur: 20,
              shadowRadius: 40,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Pomodoro") {
                iconName = focused ? "timer" : "timer-outline";
              } else if (route.name === "Countdown") {
                iconName = focused ? "hourglass" : "hourglass-outline";
              } else if (route.name === "Stopwatch") {
                iconName = focused ? "stopwatch" : "stopwatch-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "crimson",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Pomodoro" component={PomodoroScreen} />
          <Tab.Screen name="Countdown" component={CountdownScreen} />
          <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
