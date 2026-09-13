import { Reveal } from "@/components/ui/Reveal";
import { TechButton } from "@/components/ui/TechButton";
import { PlanixProductStage } from "@/components/planix/PlanixProductStage";
import { HardwareFeatureList } from "@/components/planix/HardwareFeatureList";

export function PlanixSection() {
  return (
    <section className="system-section planix-product" id="planix-r1">
      <Reveal className="planix-product__visual"><PlanixProductStage /></Reveal>
      <Reveal className="planix-product__copy">
        <div className="system-heading__index"><span>06</span><i />EQUIPO</div>
        <h2>PLANIX <span>R1</span></h2>
        <h3>CAPTURA EL MUNDO<br />EN DETALLE</h3>
        <p>Un sistema de captura espacial diseñado para registrar entornos reales y convertirlos en información visual y dimensional útil, precisa y lista para generar valor.</p>
        <TechButton href="/planix-r1">CONOCER MÁS</TechButton>
      </Reveal>
      <Reveal className="planix-features-wrap" delay={.1}><HardwareFeatureList /></Reveal>
    </section>
  );
}
