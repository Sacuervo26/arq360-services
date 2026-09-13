"use client";

import { Edges } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { ARCHITECTURAL_VOLUMES, type ProgressRef } from "./spatialTypes";

type Props = {
  progress: ProgressRef;
};

export function ArchitecturalProxy({ progress }: Props) {
  const group = useRef<THREE.Group>(null);
  const wireMaterials = useRef<Array<{ opacity: number }>>([]);

  useFrame(() => {
    if (!group.current) return;
    const wireOpacity = THREE.MathUtils.smoothstep(progress.current, 0.52, 0.92) * 0.62;
    for (const material of wireMaterials.current) material.opacity = wireOpacity;
  });

  return (
    <group ref={group} name="architectural-proxy">
      {ARCHITECTURAL_VOLUMES.map((volume, index) => (
        <mesh
          key={`${volume.kind}-${index}`}
          name="scan-surface"
          position={volume.position}
          scale={volume.scale}
          userData={{ scanSurface: true, volumeIndex: index }}
        >
          <boxGeometry />
          <meshPhysicalMaterial
            color={volume.kind === "glass" ? "#0a3850" : "#03131d"}
            transparent
            opacity={volume.kind === "glass" ? 0.028 : 0.018}
            roughness={0.58}
            metalness={0.08}
            depthWrite={false}
          />
          <Edges
            color="#2ad8ff"
            threshold={10}
            linewidth={0.55}
            transparent
            opacity={0}
            ref={(line) => {
              const material = line?.material;
              if (material && !Array.isArray(material)) wireMaterials.current[index] = material;
            }}
          />
        </mesh>
      ))}
    </group>
  );
}
