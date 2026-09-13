import Image from "next/image";
import Link from "next/link";
import { serviceBySlug } from "@/data/services";
import { solutions } from "@/data/solutions";
import { packages } from "@/data/packages";
import { projects } from "@/data/projects";
import { planixOutputs, planixSections, planixWorkflow } from "@/data/planix";
import { serviceNavGroups } from "@/data/navigation";
import { SiteHero } from "./SiteHero";
import { ServiceNavigation } from "./ServiceNavigation";

function IndexGrid({ items, className = "" }: { items: { href: string; title: string; text: string; image?: string; meta?: string; details?: string[] }[]; className?: string }) {
  return <section className={`index-grid page-container ${className}`}>{items.map((item, i) => <Link className="index-card" href={item.href} key={item.href}>
    {item.image && <div className="index-card__media"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 88vw, 30vw" /></div>}
    <div className="index-card__content"><span>{String(i + 1).padStart(2, "0")}{item.meta && ` // ${item.meta}`}</span><h2>{item.title}</h2><p>{item.text}</p>{item.details && <ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}<b>EXPLORAR ↗</b></div>
  </Link>)}</section>;
}

function PackageCards() {
  return <div className="package-cards">{packages.map(item => <article className="package-card" key={item.slug}>{item.badge && <span>{item.badge}</span>}<small>{item.group}</small><h3>{item.name}</h3><p>{item.tagline}</p><ul>{item.includes.slice(0, 5).map(feature => <li key={feature}>{feature}</li>)}</ul><div className="package-card__actions"><Link href={`/servicios/${item.slug}`}>VER PAQUETE ↗</Link><Link href={`/contacto?paquete=${item.slug}`}>COTIZAR ↗</Link></div></article>)}</div>;
}

export function ServicesLanding() {
  return <><SiteHero eyebrow="SERVICIOS ARQ360" title="UN ESPACIO. MÚLTIPLES ENTREGABLES." summary="Capturamos espacios reales y los convertimos en experiencias, planos, mediciones y documentación técnica lista para usar." secondary={{ href: "#servicios", label: "EXPLORAR SERVICIOS" }} />
    <ServiceNavigation />
    <section className="content-band"><div><span>01 — QUÉ PODEMOS ENTREGARTE</span><h2>INFORMACIÓN ESPACIAL<br/><b>PARA DECIDIR MEJOR.</b></h2><p>Una misma captura puede responder necesidades comerciales, arquitectónicas, constructivas y operativas.</p></div></section>
    <section className="services-catalog page-container" id="servicios">{serviceNavGroups.slice(0, 3).map((group, groupIndex) => <div className="service-group" key={group.title}><header><span>0{groupIndex + 2}</span><h2>{group.title}</h2></header><div>{group.links.map(([label, href]) => { const service = serviceBySlug[href.split("/").pop() ?? ""]; return service && <Link href={href} key={href}><div><Image src={service.image} alt="" fill sizes="(max-width: 700px) 88vw, 28vw"/></div><span>{label}</span><p>{service.summary}</p><b>VER SERVICIO ↗</b></Link>; })}</div></div>)}</section>
    <section className="system-section home-packages" id="paquetes"><div className="section-head-row"><div><span className="section-kicker">05 — NIVELES DE SERVICIO</span><h2>ELIGE CUÁNTA<br/><b>INFORMACIÓN NECESITAS.</b></h2></div><p>Desde visualización y planos hasta documentación avanzada para arquitectura, construcción y BIM.</p></div><PackageCards/></section>
    <section className="comparison page-container" id="comparador"><header><span>06 — COMPARADOR</span><h2>COMPARA LOS NIVELES</h2></header><div className="comparison__scroll"><table><thead><tr><th>CAPACIDAD</th>{packages.map(item => <th key={item.slug}>{item.name}</th>)}</tr></thead><tbody>{["Recorrido virtual 3D","Plano 2D","Mediciones y áreas","Documentación ampliada","CAD / DWG","Información LiDAR","BIM / Revit"].map((feature, row) => <tr key={feature}><th>{feature}</th>{packages.map((item, col) => <td key={item.slug}>{col >= Math.floor(row / 3) ? "INCLUIDO / SEGÚN ALCANCE" : "—"}</td>)}</tr>)}</tbody></table></div></section>
    <section className="choice-guide page-container"><header><span>07 — TE AYUDAMOS A ELEGIR</span><h2>UN NIVEL PARA CADA OBJETIVO</h2></header><div>{packages.map(item => <article key={item.slug}><span>{item.name}</span><p>{item.idealFor.join(" · ")}</p><Link href={`/contacto?paquete=${item.slug}`}>CONSULTAR ↗</Link></article>)}</div></section>
  </>;
}

export function SolutionsLanding() {
  return <><SiteHero eyebrow="SOLUCIONES POR INDUSTRIA" title="UNA TECNOLOGÍA. MÚLTIPLES INDUSTRIAS." summary="Adaptamos la captura y los entregables al tipo de decisión que necesita cada organización."/><IndexGrid className="solution-grid" items={solutions.map(s => ({ href: `/soluciones/${s.slug}`, title: s.eyebrow, text: s.summary, image: s.image, details: s.outcomes.slice(0, 3) }))}/></>;
}

export function ProjectsLanding() {
  return <><SiteHero eyebrow="PROYECTOS Y DEMOSTRACIONES" title="LABORATORIO ESPACIAL ARQ360" summary="Explora recorridos y muestras técnicas organizadas por aplicación."/><IndexGrid items={projects.map(p => ({ href: `/proyectos/${p.slug}`, title: p.title, text: p.description.replaceAll("iGUIDE", "interactiva"), image: p.image === "/images/iguide/cad-floor-plan-reference.png" ? "/images/site/cad-dwg-hero-clean.png" : p.image, meta: p.industry }))}/></>;
}

export function PlanixPage() {
  return <><SiteHero eyebrow="SISTEMA DE CAPTURA ESPACIAL" title="PLANIX R1" summary="Captura el mundo real y conviértelo en recorridos, planos, mediciones y documentación técnica." image="/images/planix/planix-laser-room-wide-reference.png" primaryLabel="SOLICITAR INFORMACIÓN" secondary={{ href: "/servicios", label: "VER ENTREGABLES" }}/>
    <section className="planix-detail page-container"><div className="planix-detail__product"><Image src="/images/planix/planix-r1-transparent.png" alt="Sistema PLANIX R1" fill unoptimized sizes="(max-width: 700px) 80vw, 38vw"/></div><div>{planixSections.map((section, i) => <article key={section.title}><span>{String(i + 1).padStart(2, "0")}</span><h2>{section.title}</h2><p>{section.text}</p></article>)}</div></section>
    <section className="content-section page-container"><div className="content-section__intro"><span>07 — FLUJO TÉCNICO</span><h2>DE LA CAPTURA A LOS RESULTADOS</h2></div><ol className="process-list">{planixWorkflow.map(([title, text], i) => <li key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
    <section className="planix-outputs page-container"><span>08 — RESULTADOS POSIBLES</span><h2>UNA CAPTURA.<br/><b>MÚLTIPLES SALIDAS.</b></h2><div>{planixOutputs.map((output, i) => <article key={output}><span>{String(i + 1).padStart(2, "0")}</span><h3>{output}</h3></article>)}</div></section>
  </>;
}

export function AboutPage() {
  const sections = [["QUÉ HACEMOS","Conectamos captura espacial, recorridos, planos y documentación técnica dentro de una experiencia clara para cada proyecto."],["NUESTRA VISIÓN","Hacer que la información del entorno construido sea más accesible, comprensible y útil para tomar decisiones."],["ARQUITECTURA + TECNOLOGÍA","Combinamos lectura espacial con herramientas digitales para conservar el contexto del lugar."],["METODOLOGÍA","Definimos el alcance, capturamos, procesamos y entregamos información organizada para cada objetivo."],["PLANIX R1","Utilizamos tecnología de captura 360° y LiDAR como base del levantamiento."],["COBERTURA COLOMBIA","Evaluamos cada proyecto según ubicación, área, alcance y desplazamiento."],["POR QUÉ ARQ360","Un solo levantamiento puede alimentar múltiples usos y reducir la fragmentación de información."]];
  return <><SiteHero eyebrow="ARQ360 SERVICES" title="DIGITALIZAMOS EL MUNDO CONSTRUIDO" summary="Transformamos espacios físicos en información visual, dimensional y técnica para vender, diseñar, documentar, construir y gestionar mejor."/><section className="editorial page-container">{sections.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{text}</p></article>)}</section></>;
}
