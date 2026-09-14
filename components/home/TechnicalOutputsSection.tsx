"use client";

import Image from "next/image";
import { useState } from "react";
import { technicalOutputs } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { SystemHeading } from "@/components/ui/SystemHeading";

export function TechnicalOutputsSection() {
  const [active, setActive] = useState(0);
  const item = technicalOutputs[active];
  return (
    <section className="system-section technical" id="outputs">
      <Reveal className="technical__copy">
        <SystemHeading index="09" eyebrow="ADVANCED // ENTREGABLES TÉCNICOS" title={<>PRECISIÓN PARA<br /><span>DECIDIR Y CONSTRUIR.</span></>} copy="Entregables exclusivos de Advanced, disponibles con costo adicional según m², detalle y alcance." />
        <div className="technical-list" role="tablist" aria-label="Entregables técnicos">
          {technicalOutputs.map((output, index) => <button key={output.title} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={index === active ? "is-active" : ""} role="tab" aria-selected={index === active}><span>{String(index + 1).padStart(2, "0")}</span>{output.title}<i>↗</i></button>)}
        </div>
      </Reveal>
      <Reveal className="technical__visual" delay={.1}>
        <div className="technical-preview">
          <Image key={item.image} src={item.image} alt={item.title} fill sizes="(max-width: 850px) 92vw, 52vw" />
          <div className="technical-preview__data"><span>EXCLUSIVO ADVANCED / {String(active + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p><small>COSTO ADICIONAL SEGÚN m² Y ALCANCE</small></div>
          <i className="hud-corner hud-corner--tl" /><i className="hud-corner hud-corner--br" />
        </div>
      </Reveal>
    </section>
  );
}
