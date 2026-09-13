"use client";

import { Html, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { ProgressRef } from "./spatialTypes";

type Props = {
  progress: ProgressRef;
  position: [number, number, number];
  label: string;
  value: string;
};

export function SpatialHudAnchor({ progress, position, label, value }: Props) {
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (group.current) group.current.visible = progress.current > 0.22;
  });

  return (
    <group ref={group} position={position} visible={false}>
      <mesh>
        <sphereGeometry args={[0.027, 10, 10]} />
        <meshBasicMaterial color="#9df2ff" toneMapped={false} />
      </mesh>
      <Line points={[[0, 0, 0], [0.5, 0.32, 0]]} color="#42d6ff" lineWidth={0.45} transparent opacity={0.5} />
      <Html position={[0.54, 0.34, 0]} center={false} transform distanceFactor={1.25} style={{ pointerEvents: "none" }}>
        <div className="spatial-label"><span>{label}</span><b>{value}</b></div>
      </Html>
    </group>
  );
}
