"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { iguideDemos as experienceTabs, getIguideEmbedUrl } from "@/data/demos";
import { Reveal } from "@/components/ui/Reveal";
import { SystemHeading } from "@/components/ui/SystemHeading";

export function ExperienceSection() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (!section.current) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setNear(true), { rootMargin: "500px" });
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="system-section experience" id="proyecto-real" ref={section}>
      <div className="section-orbit" aria-hidden="true" />
      <Reveal className="experience__intro">
        <SystemHeading index="03" eyebrow="GEMELO DIGITAL INTERACTIVO" title={<>EXPLORA UN<br /><span>PROYECTO REAL</span></>} copy="Navega, mide y consulta el plano de un espacio digitalizado directamente desde ARQ360." />
        <dl className="project-data">
          <div><dt>PROYECTO</dt><dd aria-live="polite">{experienceTabs[active].title}</dd></div>
          <div><dt>SISTEMA</dt><dd>VISOR INTERACTIVO</dd></div>
          <div><dt>ESTADO</dt><dd><i /> EN LÍNEA</dd></div>
        </dl>
      </Reveal>

      <Reveal className="experience__viewer" delay={.08}>
        <div className="experience-tabs" role="tablist" aria-label="Casos de uso">
          {experienceTabs.map((tab, index) => <button key={tab.id} id={`demo-tab-${tab.id}`} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} role="tab" aria-selected={index === active} aria-controls="iguide-demo-viewer">{tab.label}</button>)}
        </div>
        <div className="viewer-frame" id="iguide-demo-viewer" role="tabpanel" aria-labelledby={`demo-tab-${experienceTabs[active].id}`}>
          <div className="viewer-frame__top"><span><i /> EXPERIENCIA INTERACTIVA</span><b>ARQ360 // VISOR</b></div>
          {near ? <iframe key={experienceTabs[active].id} className="viewer-frame__demo" src={getIguideEmbedUrl(experienceTabs[active].url)} title={`Tour iGUIDE — ${experienceTabs[active].label}`} loading="lazy" allow="fullscreen; accelerometer; gyroscope" allowFullScreen /> : <div className="viewer-placeholder"><span>INICIANDO GEMELO DIGITAL</span></div>}
          <i className="hud-corner hud-corner--tl" /><i className="hud-corner hud-corner--br" />
        </div>
        <Link className="viewer-solution-link" href={experienceTabs[active].solutionHref}>VER SECTOR COMPLETO <span>↗</span></Link>
      </Reveal>
    </section>
  );
}
