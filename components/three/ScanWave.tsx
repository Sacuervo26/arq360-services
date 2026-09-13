"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { ProgressRef } from "./spatialTypes";

export function ScanWave({ progress }: { progress: ProgressRef }) {
  const wave = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(() => {
    if (!wave.current || !material.current) return;
    wave.current.position.x = THREE.MathUtils.lerp(-4.8, 4.2, progress.current);
    material.current.opacity = Math.sin(progress.current * Math.PI) * 0.055;
  });

  return (
    <mesh ref={wave} position={[-4.8, 0, 0]}>
      <boxGeometry args={[1.15, 4.2, 3.5]} />
      <meshBasicMaterial ref={material} color="#48d9ff" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.DoubleSide} />
    </mesh>
  );
}
