import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Row } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export function TimerControls({ timer }) {
  return (
    <Row space={2} width={200}>
      {!timer.isRunning ? (
        <Button flex={2} colorScheme={"green"} onPress={timer.startTimer}>
          <Ionicons name="play" color={"white"} size={24} />
        </Button>
      ) : (
        <Button flex={1} title="Pause" onPress={timer.pauseTimer}>
          <Ionicons name="pause" color={"white"} size={24} />
        </Button>
      )}

      <Button flex={1} title="Reset" onPress={timer.resetTimer}>
        <Ionicons name="stop" color={"white"} size={24} />
      </Button>
    </Row>
  );
}
