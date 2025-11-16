import { Canvas, Group, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const RECT_CONFIG = {
  position: {
    x: 128,
    y: 50,
  },
  size: {
    width: 100,
    height: 100,
  },
} as const;

const GRADIENT_CONFIG = {
  start: vec(0, 0),
  end: vec(RECT_CONFIG.size.width, RECT_CONFIG.size.height),
  colors: ['#ff0080', '#7928ca', '#ff0080'],
} as const;

export default function SkiaAnimations() {
  const rotation = useSharedValue(0);

  const transform = useDerivedValue(() => {
    return [{ rotate: rotation.value }];
  });

  useEffect(() => {
    rotation.value = withRepeat(withTiming(Math.PI * 2, { duration: 3000 }), -1, false);
  }, []);
  return (
    <>
      <Stack.Screen options={{ title: 'Skia Animations' }} />
      <ScrollView className="flex-1 bg-white dark:bg-gray-900">
        <View className="p-4">
          <Text className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Skia アニメーション実践
          </Text>

          <View className="mb-8">
            <Text>1. 回転するグラデーション背景</Text>
            <View className="h-52 overflow-hidden rounded-md bg-white">
              <Canvas style={styles.canvas}>
                <Group transform={transform} origin={{ x: 100, y: 100 }}>
                  <Rect
                    x={RECT_CONFIG.position.x}
                    y={RECT_CONFIG.position.y}
                    width={RECT_CONFIG.size.width}
                    height={RECT_CONFIG.size.height}>
                    <LinearGradient
                      start={GRADIENT_CONFIG.start}
                      end={GRADIENT_CONFIG.end}
                      colors={['#ff0080', '#7928ca', '#ff0080']}
                    />
                  </Rect>
                </Group>
              </Canvas>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  canvasContainer: {
    height: 400,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f3f4f6',
  },
  canvas: {
    flex: 1,
  },
});
