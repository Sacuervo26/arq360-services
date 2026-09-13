"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { ProgressRef, SpatialQuality } from "./spatialTypes";

const ORIGIN = new THREE.Vector3(4.25, 0.25, 2.75);
const TARGET = new THREE.Vector3();
const DIRECTION = new THREE.Vector3();
const END = new THREE.Vector3();
const HIT = new THREE.Vector3();
const MAX_BEAMS = 3;
const MAX_IMPACTS = 7;

type Impact = { point: THREE.Vector3; born: number };
type Props = { progress: ProgressRef; quality: SpatialQuality };

function makeBeam() {
  const positions = new Float32Array(6);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.LineBasicMaterial({ color: "#78e7ff", transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  return new THREE.Line(geometry, material);
}

export function LidarScanner({ progress, quality }: Props) {
  const { scene } = useThree();
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const beams = useMemo(() => Array.from({ length: MAX_BEAMS }, makeBeam), []);
  const impactPoints = useRef<THREE.Points>(null);
  const impactMaterial = useRef<THREE.PointsMaterial>(null);
  const impactRings = useRef<(THREE.Mesh | null)[]>([]);
  const impacts = useRef<Impact[]>([]);
  const surfaces = useRef<THREE.Object3D[]>([]);
  const elapsedSinceRay = useRef(0);
  const rayIndex = useRef(0);
  const impactPositions = useMemo(() => new Float32Array(MAX_IMPACTS * 3), []);
  const interval = quality === "desktop" ? 0.12 : quality === "tablet" ? 0.19 : 0.32;

  useEffect(() => {
    surfaces.current = [];
    scene.traverse((object) => {
      if (object.userData.scanSurface) surfaces.current.push(object);
    });
    return () => {
      for (const beam of beams) {
        beam.geometry.dispose();
        (beam.material as THREE.Material).dispose();
      }
    };
  }, [beams, scene]);

  useFrame((state, delta) => {
    elapsedSinceRay.current += delta;
    const now = state.clock.elapsedTime;
    const activeScan = progress.current > 0.08 && progress.current < 0.96;

    if (activeScan && elapsedSinceRay.current >= interval && surfaces.current.length) {
      elapsedSinceRay.current = 0;
      const index = rayIndex.current++;
      const phase = index * 0.71;
      TARGET.set(-0.6 + Math.sin(phase) * 3.25, -0.1 + Math.sin(phase * 1.7) * 1.15, Math.cos(phase * 0.83) * 0.95);
      DIRECTION.copy(TARGET).sub(ORIGIN).normalize();
      raycaster.set(ORIGIN, DIRECTION);
      raycaster.far = 12;
      const intersection = raycaster.intersectObjects(surfaces.current, false)[0];
      END.copy(intersection?.point ?? TARGET);
      const beam = beams[index % beams.length];
      const attribute = beam.geometry.getAttribute("position") as THREE.BufferAttribute;
      attribute.setXYZ(0, ORIGIN.x, ORIGIN.y, ORIGIN.z);
      attribute.setXYZ(1, END.x, END.y, END.z);
      attribute.needsUpdate = true;
      (beam.material as THREE.LineBasicMaterial).opacity = 0.7;
      beam.userData.born = now;
      if (intersection) {
        HIT.copy(intersection.point);
        impacts.current.unshift({ point: HIT.clone(), born: now });
        impacts.current.length = Math.min(impacts.current.length, MAX_IMPACTS);
      }
    }

    for (const beam of beams) {
      const age = now - Number(beam.userData.born ?? -10);
      (beam.material as THREE.LineBasicMaterial).opacity = Math.max(0, 0.58 * (1 - age / 0.7));
    }

    impactPositions.fill(0);
    impacts.current = impacts.current.filter((impact) => now - impact.born < 1.8);
    impacts.current.forEach((impact, index) => {
      impactPositions[index * 3] = impact.point.x;
      impactPositions[index * 3 + 1] = impact.point.y;
      impactPositions[index * 3 + 2] = impact.point.z;
    });
    if (impactPoints.current && impactMaterial.current) {
      const attribute = impactPoints.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      attribute.needsUpdate = true;
      impactPoints.current.geometry.setDrawRange(0, impacts.current.length);
      impactMaterial.current.opacity = impacts.current.length ? 0.88 : 0;
    }
    impactRings.current.forEach((ring, index) => {
      if (!ring) return;
      const impact = impacts.current[index];
      ring.visible = Boolean(impact);
      if (!impact) return;
      const age = now - impact.born;
      ring.position.copy(impact.point);
      ring.scale.setScalar(1 + age * 4.5);
      const material = ring.material as THREE.MeshBasicMaterial;
      material.opacity = Math.max(0, 0.48 * (1 - age / 1.8));
      ring.lookAt(state.camera.position);
    });
  });

  return (
    <group name="lidar-scanner">
      {beams.map((beam, index) => <primitive key={index} object={beam} />)}
      <points ref={impactPoints}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[impactPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial ref={impactMaterial} color="#a5f5ff" size={quality === "mobile" ? 0.055 : 0.038} transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      {Array.from({ length: MAX_IMPACTS }, (_, index) => (
        <mesh key={index} ref={(mesh) => { impactRings.current[index] = mesh; }} visible={false}>
          <ringGeometry args={[0.025, 0.032, 20]} />
          <meshBasicMaterial color="#6fe7ff" transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}
