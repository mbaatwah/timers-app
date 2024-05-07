import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button, Row } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export function StopwatchControls({ stopwatch }) {
  return (
    <Row space={2} width={200}>
      {!stopwatch.isRunning ? (
        <Button flex={1} colorScheme={"green"} onPress={stopwatch.startStopwatch}>
          <Ionicons name="play" color={"white"} size={24} />
        </Button>
      ) : (
        <Button flex={1} title="Pause" onPress={stopwatch.pauseStopwatch}>
          <Ionicons name="pause" color={"white"} size={24} />
        </Button>
      )}

      <Button flex={1} title="Reset" onPress={stopwatch.resetStopwatch}>
        <Ionicons name="stop" color={"white"} size={24} />
      </Button>

      { stopwatch.isRunning && (
        <Button flex={1} title="Lap" onPress={stopwatch.lapStopwatch}>
            <Ionicons name="stopwatch" color={"white"} size={24} />
        </Button>
      )}
    </Row>
  );
}
