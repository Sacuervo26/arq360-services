"use client";

import { Canvas } from "@react-three/fiber";
import { SpatialScene } from "./SpatialScene";
import type { ProgressRef, SpatialQuality } from "./spatialTypes";

type Props = { active: boolean; progress: ProgressRef; quality: SpatialQuality };

export function SpatialHeroCanvas({ active, progress, quality }: Props) {
  const maxDpr = quality === "desktop" ? 1.5 : quality === "tablet" ? 1.2 : 1;
  return (
    <div className="hero-three" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.28, 8.5], fov: 39 }}
        dpr={[1, maxDpr]}
        frameloop={active ? "always" : "demand"}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      >
        <SpatialScene progress={progress} quality={quality} />
      </Canvas>
    </div>
  );
}
