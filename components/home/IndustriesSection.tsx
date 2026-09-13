import Link from "next/link";
import { industries } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { SystemHeading } from "@/components/ui/SystemHeading";

export function IndustriesSection() {
  return (
    <section className="system-section industries" id="sectores">
      <div className="section-head-row">
        <SystemHeading index="08" eyebrow="SECTORES" title={<>INFORMACIÓN PARA<br /><span>CADA OBJETIVO.</span></>} />
        <p>Cuatro rutas claras para convertir espacios en decisiones.</p>
      </div>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <Reveal key={industry.title} delay={index * .05}>
            <Link className="industry" href={industry.href} style={{ "--industry-x": industry.position } as React.CSSProperties}>
              <div className="industry__image" /><span>{String(index + 1).padStart(2, "0")}</span><h3>{industry.title}</h3><p>{industry.text}</p><b>↗</b>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
