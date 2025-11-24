import { Canvas, useFrame } from '@react-three/fiber/native';
import { useRef, Suspense } from 'react';
import { StyleSheet, View } from 'react-native';
import * as THREE from 'three';

function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'aqua'} />
    </mesh>
  );
}

export default function R3fTest() {
  return (
    <View style={style.canvas}>
      <Canvas camera={{ position: [-2, 3, 5], fov: 30 }} style={style.canvas}>
        <Suspense>
          <color attach="background" args={['orange']} />
          <RotatingBox />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 0, 5]} color="cobalt" />
        </Suspense>
      </Canvas>
    </View>
  );
}

const style = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
