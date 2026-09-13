"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { ARCHITECTURAL_VOLUMES, type ProgressRef, type SpatialQuality } from "./spatialTypes";

const POINT_LIMITS: Record<SpatialQuality, number> = { desktop: 6200, tablet: 3200, mobile: 1100 };

function hash(value: number) {
  return Math.abs((Math.sin(value * 12.9898) * 43758.5453) % 1);
}

function sampleVolumes(count: number) {
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const volume = ARCHITECTURAL_VOLUMES[index % ARCHITECTURAL_VOLUMES.length];
    const face = index % 6;
    const u = hash(index + 17) - 0.5;
    const v = hash(index + 113) - 0.5;
    const [sx, sy, sz] = volume.scale;
    let x = u * sx;
    let y = v * sy;
    let z = (face % 2 ? -0.5 : 0.5) * sz;
    if (face === 2 || face === 3) {
      x = (face === 2 ? -0.5 : 0.5) * sx;
      z = u * sz;
    } else if (face === 4 || face === 5) {
      y = (face === 4 ? -0.5 : 0.5) * sy;
      z = v * sz;
    }
    positions[index * 3] = x + volume.position[0];
    positions[index * 3 + 1] = y + volume.position[1];
    positions[index * 3 + 2] = z + volume.position[2];
  }
  return positions;
}

type Props = { progress: ProgressRef; quality: SpatialQuality };

export function PointCloud({ progress, quality }: Props) {
  const material = useRef<THREE.PointsMaterial>(null);
  const points = useRef<THREE.Points>(null);
  const count = POINT_LIMITS[quality];
  const positions = useMemo(() => sampleVolumes(count), [count]);

  useFrame(() => {
    if (!points.current || !material.current) return;
    const reveal = THREE.MathUtils.smoothstep(progress.current, 0.28, 0.76);
    points.current.geometry.setDrawRange(0, Math.max(12, Math.floor(count * reveal)));
    material.current.opacity = 0.08 + reveal * 0.56;
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled>
      <PointMaterial ref={material} transparent color="#56dcff" size={quality === "mobile" ? 0.025 : 0.018} sizeAttenuation depthWrite={false} opacity={0} />
    </Points>
  );
}
