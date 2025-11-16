import { Canvas, Circle } from '@shopify/react-native-skia';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

// 型定義
type Position = { x: number; y: number };
type Size = { width: number; height: number };
type Color = string;

type CircleConfig = {
  position: Position;
  size: number;
  color: Color;
};

type AnimateCircleConfig = {
  position: Position;
  size: number;
  color: Color;
  duration?: number;
};

const CIRCLE_CONFIG: CircleConfig = {
  position: { x: 256, y: 256 },
  size: 32,
  color: 'green',
};

const ANIMATE_CIRCLE_CONFIG: AnimateCircleConfig = {
  position: { x: 200, y: 300 },
  size: 200,
  color: 'yellow',
  duration: 2000,
};

export default function SkiaTest() {
  // アニメーション
  const animateCirclePosition = ANIMATE_CIRCLE_CONFIG.position;
  const animateCircleColor = ANIMATE_CIRCLE_CONFIG.color;
  const circleSize = ANIMATE_CIRCLE_CONFIG.size;

  const progress = useSharedValue(0);

  const animateCircleSize = useDerivedValue(() => circleSize - progress.value);
  useEffect(() => {
    progress.value = withRepeat(
      withTiming(circleSize * 0.5, { duration: ANIMATE_CIRCLE_CONFIG.duration }) - 1
    );
  }, [progress, circleSize]);

  return (
    <>
      <Stack.Screen options={{ title: 'Skia Test' }} />
      <View className="flex-1">
        <Canvas style={styles.canvas}>
          {/* アニメーション */}
          <Circle
            cx={animateCirclePosition.x}
            cy={animateCirclePosition.y}
            r={animateCircleSize}
            color={animateCircleColor}
          />
        </Canvas>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
