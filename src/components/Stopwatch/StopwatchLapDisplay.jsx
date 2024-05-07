import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, VStack, HStack, ScrollView } from 'native-base';

export function StopwatchLapDisplay({ stopwatch }) {

    if (stopwatch.laps.length === 0) {
        return null;
    }

    return (
    <ScrollView paddingY={5} maxHeight={250} height={'0'} StickyHeaderComponent={<StopWatchLapHeader />}>
        <VStack width={350}>
            <StopWatchLapHeader />
            { stopwatch?.laps.map((lap, index) => {
                    return (
                        <HStack space={10} justifyContent={'space-between'}>
                            <Text>{stopwatch.laps.length - index}</Text>
                            <Text>{index === stopwatch.laps.length - 1 ? "Start" : stopwatch.formatTime(stopwatch.laps[index + 1])}</Text>
                            <Text>{stopwatch.formatTime(lap)}</Text>
                            <Text>{stopwatch.formatTime(lap - (index === stopwatch.laps.length - 1 ? 0 : stopwatch.laps[index + 1]))}</Text>
                        </HStack>
                    );
                })
            }
        </VStack>
    </ScrollView>
  );
}

function StopWatchLapHeader() {
    return (
        <HStack space={10} justifyContent={'space-between'}>
            <Text fontWeight={'700'}>Lap</Text>
            <Text fontWeight={'700'}>From</Text>
            <Text fontWeight={'700'}>To</Text>
            <Text fontWeight={'700'}>Duration</Text>
        </HStack>
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 75,
    alignItems: 'center',
    justifyContent: 'center',
  }
});