import { Canvas, Circle, Group, Path, Rect } from '@shopify/react-native-skia';
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
  };

  // 円の設定
  const circlePosition = configs.circle.position;
  const circleSize = configs.circle.size;
  const circleColor = configs.circle.color;

  // 四角形の設定
  const rectPosition = configs.rect.position;
  const rectSize = configs.rect.size;
  const rectColor = configs.rect.color;

  // path の設定
  const starShapePath = configs.star.shapePath;
  const starColor = configs.star.color;

  return (
    <>
      <Stack.Screen options={{ title: 'Skia Test' }} />
      <View className="flex-1">
        <Canvas style={styles.canvas}>
          {/* 円 */}
          <Circle
            cx={circlePosition.x} // X軸の座標(0 のとき円の中心が画面左端)
            cy={circlePosition.y} // Y軸の座標(0 のとき円の中心が画面上端)
            r={circleSize} // 円の大きさ
            color={circleColor} // 色
          />

          {/* 四角形 */}
          <Rect
            x={rectPosition.x} // x軸の座標 (0のとき 左辺が画面左端)
            y={rectPosition.y} // y軸の座標 (0のとき 上辺が画面上端)
            width={rectSize.width} // 幅
            height={rectSize.height} // 高さ
            color={rectColor} // 色
          />

          {/* パス（自由な形） */}
          <Path path={starShapePath} color={starColor} />

          {/* グループ化してまとめて移動 */}
          <Group
            transform={[
              {
                translate: [
                  120, // x軸の移動量
                  100, // y軸の移動量
                ],

                // このように個別で指定することもできる
                translateX: 0,
                translateY: 0,
              },
            ]}>
            <Rect
              x={rectPosition.x} // x軸の座標 (0のとき 左辺が画面左端)
              y={rectPosition.y} // y軸の座標 (0のとき 上辺が画面上端)
              width={rectSize.width} // 幅
              height={rectSize.height} // 高さ
              color={rectColor} // 色
            />
            <Circle
              cx={circlePosition.x} // X軸の座標(0 のとき円の中心が画面左端)
              cy={circlePosition.y} // Y軸の座標(0 のとき円の中心が画面上端)
              r={circleSize} // 円の大きさ
              color={circleColor} // 色
            />
          </Group>
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
