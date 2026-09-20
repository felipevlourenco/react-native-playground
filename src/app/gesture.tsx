import { Animated, StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useRef } from 'react';

const CURSOR_SIZE = 40;
const CURSOR_HALF_SIZE = CURSOR_SIZE / 2;

export default function GestureScreen() {
  const touche = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const dimensions = useWindowDimensions();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView
        style={styles.safeArea}
        onStartShouldSetResponder={() => true}
        onResponderMove={(event) => {
          touche.setValue({
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
          });
        }}
        onResponderRelease={() => {
          Animated.spring(touche, {
            toValue: {
              x: dimensions.width / 2,
              y: dimensions.height / 2,
            },
            useNativeDriver: false,
          }).start();
        }}
      >
        <Animated.View
          style={{
            position: 'absolute',
            left: Animated.subtract(touche.x, CURSOR_HALF_SIZE),
            top: Animated.subtract(touche.y, CURSOR_HALF_SIZE),
            height: CURSOR_SIZE,
            width: CURSOR_SIZE,
            backgroundColor: 'red',
            borderRadius: CURSOR_HALF_SIZE,
          }}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
});
