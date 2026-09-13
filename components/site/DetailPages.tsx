import Link from "next/link";
import type { Project } from "@/data/projects";
import { SiteHero } from "./SiteHero";
import { DemoViewer } from "./DemoViewer";
import { Breadcrumbs } from "./ServiceNavigation";

export function ProjectPage({ project }: { project: Project }) {
  const image = project.image === "/images/iguide/cad-floor-plan-reference.png" ? "/images/site/cad-dwg-hero-clean.png" : project.image;
  return (
    <>
      <SiteHero
        eyebrow={`${project.industry} // ${project.type}`}
        title={project.title}
        summary={project.description}
        image={image}
        primary="/contacto"
        primaryLabel="COTIZAR UN PROYECTO"
        secondary={{ href: "/proyectos", label: "VER PROYECTOS" }}
      />
      <Breadcrumbs items={[{ label: "PROYECTOS", href: "/proyectos" }, { label: project.title }]} />
      <section className="content-section page-container">
        <div className="content-section__intro"><span>01 — QUÉ PUEDES RECIBIR</span><h2>INFORMACIÓN<br /><b>DEL ESPACIO.</b></h2></div>
        <ul className="content-list">{project.deliverables.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
      </section>
      {project.demoId && <section className="embedded-section page-container"><div><span>02 — EXPERIENCIA</span><h2>NAVEGA EL PROYECTO</h2></div><DemoViewer demoId={project.demoId} /></section>}
      <section className="related page-container"><span>CONTINÚA EXPLORANDO</span><h2>DEFINE TU PROYECTO</h2><div>
        <Link href="/servicios"><b>COMPARAR SERVICIOS</b><p>Conoce Standard, Premium y Advanced.</p><i>↗</i></Link>
        <Link href="/servicios#entregables"><b>VER ENTREGABLES</b><p>Explora la información adicional disponible.</p><i>↗</i></Link>
        <Link href="/contacto"><b>SOLICITAR COTIZACIÓN</b><p>Cuéntanos qué espacio necesitas digitalizar.</p><i>↗</i></Link>
      </div></section>
    </>
  );
}
