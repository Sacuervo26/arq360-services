import Image from "next/image";
import { HardwareHud } from "./HardwareHud";
import { ScannerRings } from "./ScannerRings";

export function PlanixProductStage() {
  return (
    <div className="planix-product-stage">
      <div className="hardware-wireframe" aria-hidden="true" />
      <ScannerRings />
      <div className="planix-product-stage__image">
        <Image src="/images/planix/planix-r1-transparent.png" alt="PLANIX R1 completo" fill unoptimized sizes="(max-width: 580px) 82vw, 42vw" />
      </div>
      <div className="planix-platform" aria-hidden="true"><i /></div>
      <HardwareHud />
    </div>
  );
}
