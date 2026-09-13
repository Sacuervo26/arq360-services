"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { ArchitecturalProxy } from "./ArchitecturalProxy";
import { LidarScanner } from "./LidarScanner";
import { PointCloud } from "./PointCloud";
import { ScanWave } from "./ScanWave";
import { SpatialHudAnchor } from "./SpatialHudAnchor";
import type { ProgressRef, SpatialQuality } from "./spatialTypes";

export function SpatialScene({ progress, quality }: { progress: ProgressRef; quality: SpatialQuality }) {
  const root = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame((state, delta) => {
    camera.position.x = THREE.MathUtils.damp(camera.position.x, state.pointer.x * 0.12, 2, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, 0.28 + state.pointer.y * 0.07, 2, delta);
    camera.lookAt(0, 0, 0);
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, state.pointer.x * 0.105 - 0.1, 2.25, delta);
      root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, state.pointer.y * -0.045, 2.25, delta);
      root.current.position.x = THREE.MathUtils.damp(root.current.position.x, -0.15 + state.pointer.x * 0.05, 2, delta);
    }
  });

  return (
    <>
      <group ref={root} position={[-0.15, -0.18, 0]}>
        <ArchitecturalProxy progress={progress} />
        <PointCloud progress={progress} quality={quality} />
        <ScanWave progress={progress} />
        {quality === "desktop" && (
          <>
            <SpatialHudAnchor progress={progress} position={[1.5, 0.7, 1.12]} label="SURFACE LOCK" value="5.42 m" />
            <SpatialHudAnchor progress={progress} position={[-2.3, -0.42, 0.95]} label="POINT 0218" value="XYZ 2.4 / 1.8" />
          </>
        )}
      </group>
      <LidarScanner progress={progress} quality={quality} />
    </>
  );
}
