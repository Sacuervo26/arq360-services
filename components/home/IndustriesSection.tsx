import Link from "next/link";
import { industries } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { SystemHeading } from "@/components/ui/SystemHeading";

export function IndustriesSection() {
  return (
    <section className="system-section industries" id="soluciones">
      <div className="section-head-row">
        <SystemHeading index="08" eyebrow="CAPAS DE APLICACIÓN" title={<>SOLUCIONES PARA<br /><span>CADA INDUSTRIA.</span></>} />
        <p>La misma tecnología. Infinitas aplicaciones.</p>
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
