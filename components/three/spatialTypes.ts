export type ProgressRef = { current: number };

export type SpatialQuality = "mobile" | "tablet" | "desktop";

export type VolumeDefinition = {
  position: readonly [number, number, number];
  scale: readonly [number, number, number];
  kind: "solid" | "glass" | "slab" | "column";
};

export const ARCHITECTURAL_VOLUMES: VolumeDefinition[] = [
  { position: [-0.35, 0.12, 0], scale: [4.5, 2.35, 1.85], kind: "glass" },
  { position: [2.45, -0.27, -0.06], scale: [1.35, 1.55, 1.7], kind: "solid" },
  { position: [-2.7, -0.32, 0.08], scale: [1.1, 1.42, 1.6], kind: "solid" },
  { position: [-0.2, -1.13, 0], scale: [6.8, 0.12, 2.3], kind: "slab" },
  { position: [-0.25, 1.34, 0], scale: [5.2, 0.14, 2.15], kind: "slab" },
  { position: [-1.82, 0.05, 0.72], scale: [0.12, 2.35, 0.12], kind: "column" },
  { position: [1.38, 0.05, 0.72], scale: [0.12, 2.35, 0.12], kind: "column" },
];
