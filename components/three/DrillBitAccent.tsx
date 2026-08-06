"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { Group } from "three";

// Aksen visual dekoratif — merepresentasikan ciri khas industri migas,
// bukan peralatan spesifik milik PT ACS. Tanpa kontrol interaktif.
const MODEL_PATH = "/models/roller_cone_bit__rock_bit.glb";

function SpinningBit() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.2, 0, 0.15]}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);

export default function DrillBitAccent() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 3], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 2]} intensity={1.3} />
      <directionalLight position={[-3, -2, -2]} intensity={0.4} color="#c41e1e" />
      <Suspense fallback={null}>
        <SpinningBit />
      </Suspense>
    </Canvas>
  );
}
