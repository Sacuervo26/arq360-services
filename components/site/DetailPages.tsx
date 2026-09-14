import Link from "next/link";
import type { Project } from "@/data/projects";
import { SiteHero } from "./SiteHero";
import { DemoViewer } from "./DemoViewer";
import { Breadcrumbs } from "./ServiceNavigation";
import { getProjectWhatsAppMessage, getWhatsAppUrl } from "@/config/contact";

export function ProjectPage({ project }: { project: Project }) {
  const image = project.image === "/images/iguide/cad-floor-plan-reference.png" ? "/images/site/cad-dwg-hero-clean.png" : project.image;
  const quoteMessage = getProjectWhatsAppMessage(project.title);
  const quoteUrl = getWhatsAppUrl(quoteMessage);
  return (
    <>
      <SiteHero
        eyebrow={`${project.industry} // ${project.type}`}
        title={project.title}
        summary={project.description}
        image={image}
        primaryLabel="COTIZAR UN PROYECTO"
        primaryMessage={quoteMessage}
        primaryEventId="whatsapp_project"
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
        <Link href="/servicios#entregables"><b>VER ENTREGABLES ADVANCED</b><p>Explora la información técnica adicional disponible.</p><i>↗</i></Link>
        {quoteUrl && <a href={quoteUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_project"><b>SOLICITAR COTIZACIÓN</b><p>Cuéntanos qué espacio necesitas digitalizar.</p><i>↗</i></a>}
      </div></section>
    </>
  );
}
