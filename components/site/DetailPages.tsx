import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import type { Solution } from "@/data/solutions";
import type { ServicePackage } from "@/data/packages";
import type { Project } from "@/data/projects";
import { commonFaq } from "@/data/faq";
import { services, serviceBySlug } from "@/data/services";
import { iguideDemos } from "@/data/demos";
import { SiteHero } from "./SiteHero";
import { DemoViewer } from "./DemoViewer";
import { Breadcrumbs, ServiceNavigation } from "./ServiceNavigation";

function ListSection({ index, eyebrow, title, text, items }: { index: string; eyebrow: string; title: string; text?: string; items: readonly string[] }) {
  return <section className="content-section page-container"><div className="content-section__intro"><span>{index} — {eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div><ul className="content-list">{items.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ul></section>;
}

function Faq() {
  return <section className="content-section page-container"><div className="content-section__intro"><span>FAQ</span><h2>PREGUNTAS FRECUENTES</h2></div><div className="faq-list">{commonFaq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>;
}

function Related({ title, links }: { title: string; links: { href: string; label: string; text?: string }[] }) {
  return <section className="related page-container"><span>CONTINÚA EXPLORANDO</span><h2>{title}</h2><div>{links.map(link => <Link href={link.href} key={link.href}><b>{link.label}</b>{link.text && <p>{link.text}</p>}<i>↗</i></Link>)}</div></section>;
}

export function ServicePage({ service }: { service: Service }) {
  const isCad = service.slug === "cad-dwg";
  return <><SiteHero eyebrow={isCad ? "CAD / DWG" : service.eyebrow} title={isCad ? "DE LA REALIDAD AL DIBUJO TÉCNICO." : service.title} summary={service.summary} image={service.image} secondary={{ href: "/servicios", label: "EXPLORAR SERVICIOS" }}/>
    <ServiceNavigation current={service.slug}/>
    <section className="content-feature page-container"><div><span>01 — QUÉ ES</span><h2>{service.title}<br/><b>LISTO PARA USAR.</b></h2><p>{service.description}</p></div><div className="content-feature__image"><Image src={service.image} alt={`Ejemplo visual de ${service.title}`} fill sizes="(max-width: 800px) 92vw, 48vw"/></div></section>
    {service.note && <p className="content-notice page-container">{service.note}</p>}
    <ListSection index="02" eyebrow="QUÉ RECIBES" title="ENTREGABLES" items={service.receives}/>
    <ListSection index="03" eyebrow="FORMATOS" title="INTEGRACIÓN CON TU FLUJO" items={service.formats}/>
    <ListSection index="04" eyebrow="APLICACIONES" title="PARA QUÉ SIRVE" items={service.uses}/>
    <ListSection index="05" eyebrow="SECTORES" title="DÓNDE GENERA VALOR" items={service.sectors}/>
    {service.demoId && <section className="embedded-section page-container"><div><span>06 — EJEMPLO INTERACTIVO</span><h2>EXPLORA UNA DEMOSTRACIÓN</h2></div><DemoViewer demoId={service.demoId}/></section>}
    <ListSection index="07" eyebrow="COMPATIBILIDAD" title="PAQUETES RELACIONADOS" items={service.packages}/>
    <Related title="SERVICIOS RELACIONADOS" links={services.filter(item => item.slug !== service.slug).slice(0, 3).map(item => ({ href: `/servicios/${item.slug}`, label: item.title, text: item.summary }))}/>
    <Faq/>
  </>;
}

export function SolutionPage({ solution }: { solution: Solution }) {
  const demo = iguideDemos.find(item => item.id === solution.demoId);
  return <><SiteHero eyebrow={solution.eyebrow} title={solution.title} summary={solution.summary} image={solution.image === "/images/iguide/cad-floor-plan-reference.png" ? "/images/site/cad-dwg-hero-clean.png" : solution.image} primaryLabel={solution.cta} secondary={{ href: "/soluciones", label: "VER INDUSTRIAS" }}/>
    <Breadcrumbs items={[{ label: "SOLUCIONES", href: "/soluciones" }, { label: solution.eyebrow }]}/>
    <ListSection index="01" eyebrow="RESULTADOS" title="LO QUE PUEDES LOGRAR" items={solution.outcomes}/>
    <section className="embedded-section page-container"><div><span>02 — DEMOSTRACIÓN</span><h2>{demo?.title}</h2><p>Recorre una experiencia interactiva aplicada a este contexto.</p></div><DemoViewer demoId={solution.demoId}/></section>
    <Related title="SERVICIOS PARA ESTA INDUSTRIA" links={solution.services.map(slug => serviceBySlug[slug]).filter(Boolean).map(item => ({ href: `/servicios/${item.slug}`, label: item.title, text: item.summary }))}/>
    <Faq/>
  </>;
}

export function PackagePage({ item }: { item: ServicePackage }) {
  return <><SiteHero eyebrow={item.group} title={item.name} summary={item.tagline} primary={`/contacto?paquete=${item.slug}`} primaryLabel="COTIZAR PROYECTO" secondary={{ href: "/servicios#paquetes", label: "COMPARAR PAQUETES" }}/>
    <ServiceNavigation packageName={item.name}/>
    <section className="content-band"><div><span>01 — QUÉ ES</span><h2>{item.badge ?? "NIVEL DE SERVICIO"}</h2><p>{item.description}</p></div></section>
    <ListSection index="02" eyebrow="QUÉ INCLUYE" title="CAPACIDADES" items={item.includes}/>
    <ListSection index="03" eyebrow="PARA QUIÉN ES" title="USOS RECOMENDADOS" items={item.idealFor}/>
    <ListSection index="04" eyebrow="FORMATOS" title="ENTREGABLES Y ACCESO" items={item.formats}/>
    <ListSection index="05" eyebrow="COMPLEMENTOS" title="AMPLÍA TU PROYECTO" items={item.addons}/>
    <Faq/>
  </>;
}

export function ProjectPage({ project }: { project: Project }) {
  const image = project.image === "/images/iguide/cad-floor-plan-reference.png" ? "/images/site/cad-dwg-hero-clean.png" : project.image;
  return <><SiteHero eyebrow={`${project.industry} // ${project.type}`} title={project.title} summary={project.description.replaceAll("iGUIDE", "interactiva")} image={image} primary="/contacto" primaryLabel="COTIZAR UN PROYECTO" secondary={{ href: "/proyectos", label: "VER LABORATORIO" }}/>
    <Breadcrumbs items={[{ label: "PROYECTOS", href: "/proyectos" }, { label: project.title }]}/>
    <ListSection index="01" eyebrow="ENTREGABLES" title="INFORMACIÓN DISPONIBLE" items={project.deliverables}/>
    {project.demoId && <section className="embedded-section page-container"><div><span>02 — EXPERIENCIA</span><h2>NAVEGA EL PROYECTO</h2></div><DemoViewer demoId={project.demoId}/></section>}
    <Related title="SERVICIOS RELACIONADOS" links={project.services.map(slug => serviceBySlug[slug]).filter(Boolean).map(item => ({ href: `/servicios/${item.slug}`, label: item.title, text: item.summary }))}/>
  </>;
}
