import {
  AnimatedProp,
  BlurMask,
  Canvas,
  Circle,
  LinearGradient,
  Rect,
  vec,
} from '@shopify/react-native-skia';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function SkiaTest() {
  const configs = {
    circle: {
      position: {
        x: 256,
        y: 256,
      },
      size: 32,
      color: 'green',
    },

    rect: {
      position: {
        x: 100,
        y: 300,
      },
      size: {
        width: 100,
        height: 100,
      },
      color: 'red',
    },

    star: {
      shapePath:
        'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
      color: 'yellow',
    },

    gradientRect: {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 200,
        height: 200,
      },
      gradient: {
        position: {
          start: vec(0, 0),
          end: vec(200, 200),
        },
        colors: {
          start: 'orange',
          end: 'blue',
        },
      },
    },
    blurMaskCircle: {
      position: { x: 200, y: 300 },
      size: 50,
      color: 'red',
      blurConfig: {
        strength: 20,
        style: 'normal',
      },
    },
  };

  // 円の設定
  // const circlePosition = configs.circle.position;
  // const circleSize = configs.circle.size;
  // const circleColor = configs.circle.color;

  // // 四角形の設定
  // const rectPosition = configs.rect.position;
  // const rectSize = configs.rect.size;
  // const rectColor = configs.rect.color;

  // // path の設定
  // const starShapePath = configs.star.shapePath;
  // const starColor = configs.star.color;

  // グラデーションの設定
  const gradientRectPosition = configs.gradientRect.position;
  const gradientRectSize = configs.gradientRect.size;
  const gradientPosition = configs.gradientRect.gradient.position;
  const gradientColor = configs.gradientRect.gradient.colors;

  // ブラー効果
  const blurMaskCirclePosition = configs.blurMaskCircle.position;
  const blurMaskCircleSize = configs.blurMaskCircle.size;
  const blurMaskCircleColor = configs.blurMaskCircle.color;
  const blurConfig = configs.blurMaskCircle.blurConfig;

  return (
    <>
      <Stack.Screen options={{ title: 'Skia Test' }} />
      <View className="flex-1">
        <Canvas style={styles.canvas}>
          {/* グラデーション */}
          <Rect
            x={gradientRectPosition.x}
            y={gradientRectPosition.y}
            width={gradientRectSize.width}
            height={gradientRectSize.height}>
            <LinearGradient
              start={gradientPosition.start} // グラデーションの開始位置
              end={gradientPosition.end} // グラデーションの終了位置
              colors={[
                gradientColor.start, // グラデーションの開始色
                gradientColor.end, // グラデーションの終了色
              ]}
            />
          </Rect>

          <Circle
            cx={blurMaskCirclePosition.x}
            cy={blurMaskCirclePosition.y}
            r={blurMaskCircleSize}
            color={blurMaskCircleColor}>
            <BlurMask
              blur={blurConfig.strength} // ぼかしの強度
              style={blurConfig.style as AnimatedProp<'normal'>} // ぼかし方
            />
          </Circle>
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
