"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { DemoViewer } from "./DemoViewer";

const filters = ["TODOS", "INMOBILIARIO", "ARQUITECTURA Y CONSTRUCCIÓN", "SEGUROS", "OFICINAS", "CAD"] as const;

function category(industry: string, type: string) {
  if (type.includes("CAD") || type.includes("DIBUJO")) return "CAD";
  if (industry.includes("INMOBILIARIO")) return "INMOBILIARIO";
  if (industry.includes("ARQUITECTURA") || industry.includes("CONSTRUCCIÓN")) return "ARQUITECTURA Y CONSTRUCCIÓN";
  if (industry.includes("SEGUROS")) return "SEGUROS";
  return "OFICINAS";
}

export function ProjectsExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("TODOS");
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const filtered = useMemo(() => projects.filter((item) => filter === "TODOS" || category(item.industry, item.type) === filter), [filter]);
  const active = projects.find((item) => item.slug === activeSlug) ?? filtered[0] ?? projects[0];

  function chooseFilter(next: (typeof filters)[number]) {
    setFilter(next);
    const first = projects.find((item) => next === "TODOS" || category(item.industry, item.type) === next);
    if (first) setActiveSlug(first.slug);
  }

  return (
    <section className="projects-explorer page-container">
      <div className="projects-filters" aria-label="Filtrar proyectos">
        {filters.map((item) => <button className={filter === item ? "is-active" : ""} onClick={() => chooseFilter(item)} key={item}>{item}</button>)}
      </div>
      <div className="projects-explorer__layout">
        <div className="projects-list">
          {filtered.map((item, index) => <button className={active.slug === item.slug ? "is-active" : ""} onClick={() => setActiveSlug(item.slug)} key={item.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span><div><b>{item.title}</b><small>{item.industry}</small></div><i>↗</i>
          </button>)}
        </div>
        <div className="projects-stage">
          <header><span>PROYECTO ACTIVO</span><h2>{active.title}</h2><p>{active.description}</p></header>
          {active.demoId ? <DemoViewer key={active.demoId} demoId={active.demoId} /> : <div className="projects-stage__image"><Image src={active.image} alt={active.title} fill sizes="(max-width: 850px) 92vw, 65vw" /></div>}
        </div>
      </div>
    </section>
  );
}
