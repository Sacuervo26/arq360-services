# Hero V2 — spatial architecture

## Runtime layers

- `Hero.tsx` owns the progressive enhancement boundary, GSAP/ScrollTrigger timeline, pointer damping, WebGL fallback and viewport quality tier.
- `SpatialHeroCanvas.tsx` mounts the isolated React Three Fiber canvas only when WebGL and motion preferences allow it.
- `ArchitecturalProxy.tsx` builds the procedural glass-and-structure proxy used by both rendering and ray intersections.
- `LidarScanner.tsx` casts real `THREE.Raycaster` rays from the PLANIX origin, then renders short-lived beams, impact points and expanding rings at actual intersections.
- `PointCloud.tsx` reveals deterministic samples taken from the proxy surfaces: 6,200 desktop, 3,200 tablet and 1,100 mobile.
- `ScanWave.tsx` and the DOM scan mask share the same mutable scan progress so the physical, detected, point-cloud and wireframe states read as one sequence.

## Interaction and timing

- The autonomous scan lasts 12 seconds and rests for 4 seconds before repeating.
- ScrollTrigger maps the first hero journey onto the same scan progress without hijacking native scroll.
- Pointer input is normalized, damped and clamped. It adds small camera/world parallax and a limited PLANIX product rotation.
- The canvas switches to demand rendering while the hero is outside the viewport.

## Responsive and fallback behavior

- Desktop keeps the full proxy, spatial labels and 6.2k-point cloud.
- Tablet keeps the proxy and 3.2k points while hiding world-space labels to avoid overlap.
- Mobile uses 1.1k points, reduced ray frequency and a simplified layout.
- Reduced-motion users receive a stable partially digitized state without the scan loop or pointer transforms.
- If WebGL is unavailable, the approved photographic composition and CSS digital treatment remain usable.

## V3 visual refinement

- The photographic architecture is now an ARQ360-specific clean plate at `public/images/hero-architecture-v3.png`; it contains no camera, logo, copy or baked UI.
- The PLANIX product is a separate transparent layer at `public/images/planix/planix-r1-transparent.png`, so its scale, position, rim light, platform and scan treatment remain independently adjustable.
- Desktop prioritizes the copy on the left and the full PLANIX system on the right. Mobile deliberately sequences copy, actions, transformed architecture and then the complete scanner.
- The hardware section reuses the isolated product through `PlanixProductStage.tsx`, with `ScannerRings.tsx`, `HardwareHud.tsx` and `HardwareFeatureList.tsx` kept separate for a future GLB/WebGL replacement.

## Known limitation

The PLANIX layer is a high-resolution transparent product photograph, not yet a true GLB model. The current depth response is therefore restrained CSS/GSAP parallax, while the architecture scan and point-cloud layers remain real-time WebGL.
