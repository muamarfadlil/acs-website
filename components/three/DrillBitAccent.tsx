"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
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
      gl={{
        alpha: true,
        antialias: true,
        toneMapping: ACESFilmicToneMapping,
        toneMappingExposure: 1.4,
      }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={1.6} />
      {/* Key light dari arah kamera agar sisi depan bit tetap terang */}
      <directionalLight position={[2, 3, 4]} intensity={3} />
      <directionalLight position={[-2, 1, 3]} intensity={1.8} color="#ffffff" />
      {/* Rim light merah dari belakang untuk memisahkan model dari background */}
      <directionalLight position={[-3, -1, -3]} intensity={2.2} color="#ff5a5a" />
      <Environment preset="studio" environmentIntensity={0.9} />
      <Suspense fallback={null}>
        <SpinningBit />
      </Suspense>
    </Canvas>
  );
}
