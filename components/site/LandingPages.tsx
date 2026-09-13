import Image from "next/image";
import Link from "next/link";
import type { Sector } from "@/data/sectors";
import { packages } from "@/data/packages";
import { sectors } from "@/data/sectors";
import { commonFaq } from "@/data/faq";
import { planixOutputs, planixSections, planixWorkflow } from "@/data/planix";
import { SiteHero } from "./SiteHero";
import { Breadcrumbs } from "./ServiceNavigation";
import { DeliverablesExplorer } from "./DeliverablesExplorer";
import { ProjectsExplorer } from "./ProjectsExplorer";
import { DemoViewer } from "./DemoViewer";

const comparisonRows = [
  ["Recorrido virtual 3D", "included", "included", "included"],
  ["Plano 2D", "included", "included", "included"],
  ["Mediciones del espacio", "included", "included", "included"],
  ["Áreas", "included", "included", "included"],
  ["Mayor nivel de detalle", "none", "included", "included"],
  ["Planos editables CAD / DWG", "none", "available", "included"],
  ["Datos LiDAR / nube de puntos", "none", "available", "included"],
  ["Elevaciones exteriores", "none", "available", "available"],
  ["Plano de cubierta", "none", "available", "available"],
  ["Plano de cielo reflejado", "none", "available", "available"],
  ["Modelo digital BIM / Revit", "none", "available", "available"],
] as const;

const statusLabel = {
  included: "✓ INCLUIDO",
  available: "○ SEGÚN ALCANCE",
  none: "—",
} as const;

function PackageCards({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={`package-cards ${detailed ? "package-cards--detailed" : ""}`}>
      {packages.map((item) => (
        <article className="package-card" id={item.slug} key={item.slug}>
          {item.badge && <span>{item.badge}</span>}
          <small>{item.group}</small>
          <h3>{item.name}</h3>
          <p>{item.tagline}</p>
          {detailed && <p className="package-card__description">{item.description}</p>}
          <ul>{item.includes.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          {detailed && <div className="package-card__ideal"><b>IDEAL PARA</b><p>{item.idealFor.join(" · ")}</p></div>}
          <div className="package-card__actions">
            <Link href={`/contacto?paquete=${item.slug}`}>ELEGIR {item.name} ↗</Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function ServicesFaq() {
  return (
    <section className="services-faq page-container">
      <header><span>07 — PREGUNTAS FRECUENTES</span><h2>RESPUESTAS CLARAS<br /><b>ANTES DE EMPEZAR.</b></h2></header>
      <div className="faq-list">{commonFaq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>
  );
}

export function ServicesLanding() {
  return (
    <>
      <SiteHero
        eyebrow="SERVICIOS ARQ360"
        title="UN ESPACIO. TRES NIVELES DE INFORMACIÓN."
        summary="Desde recorridos virtuales y planos hasta documentación técnica para arquitectura, construcción y gestión de espacios."
        primary="/servicios#comparador"
        primaryLabel="COMPARAR SERVICIOS"
        secondary={{ href: "/contacto", label: "SOLICITAR COTIZACIÓN" }}
      />
      <Breadcrumbs items={[{ label: "SERVICIOS" }]} />

      <section className="system-section service-levels" id="niveles">
        <div className="section-head-row"><div><span className="section-kicker">02 — TRES NIVELES</span><h2>¿QUÉ NIVEL<br /><b>NECESITAS?</b></h2></div><p>Empieza por el resultado que buscas. Después añade únicamente los entregables que tu proyecto requiera.</p></div>
        <PackageCards detailed />
      </section>

      <section className="comparison page-container" id="comparador">
        <header><span>03 — COMPARADOR</span><h2>COMPARA SIN<br /><b>COMPLICACIONES.</b></h2><p>La disponibilidad final depende del alcance, las condiciones del inmueble y la información requerida.</p></header>
        <div className="comparison__scroll"><table><thead><tr><th>QUÉ PUEDES RECIBIR</th>{packages.map((item) => <th key={item.slug}>{item.name}</th>)}</tr></thead><tbody>
          {comparisonRows.map(([feature, ...values]) => <tr key={feature}><th>{feature}</th>{values.map((value, index) => <td className={`status-${value}`} key={packages[index].slug}>{statusLabel[value]}</td>)}</tr>)}
        </tbody></table></div>
      </section>

      <section className="system-section service-addons" id="entregables">
        <div className="section-head-row"><div><span className="section-kicker">04 — ENTREGABLES ADICIONALES</span><h2>PERSONALIZA<br /><b>TU PROYECTO.</b></h2></div><p>Añade únicamente la información que tu proyecto realmente necesita. Abre cada opción para entender qué recibes.</p></div>
        <DeliverablesExplorer />
      </section>

      <section className="sector-chooser page-container" id="sectores">
        <header><span>05 — ¿PARA QUIÉN ES?</span><h2>UNA RUTA CLARA<br /><b>PARA CADA OBJETIVO.</b></h2></header>
        <div>{sectors.map((sector, index) => <Link href={`/sectores/${sector.slug}`} key={sector.slug}><span>{String(index + 1).padStart(2, "0")}</span><h3>{sector.eyebrow}</h3><p>{sector.summary}</p><b>VER SECTOR ↗</b></Link>)}</div>
      </section>

      <section className="service-process page-container">
        <header><span>06 — CÓMO FUNCIONA</span><h2>DE TU ESPACIO<br /><b>A INFORMACIÓN ÚTIL.</b></h2></header>
        <ol>{[
          ["DEFINE", "Cuéntanos qué espacio deseas digitalizar y para qué necesitas la información."],
          ["CAPTURA", "Coordinamos la visita y registramos el inmueble con captura espacial profesional."],
          ["PROCESA", "Transformamos la captura en el paquete y los entregables acordados."],
          ["RECIBE", "Obtén información lista para presentar, diseñar, documentar o construir."],
        ].map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </section>
      <ServicesFaq />
    </>
  );
}

export function ProjectsLanding() {
  return (
    <>
      <SiteHero eyebrow="PROYECTOS Y DEMOSTRACIONES" title="EXPLORA ESPACIOS REALES." summary="Navega demostraciones interactivas y revisa muestras técnicas organizadas por aplicación." />
      <Breadcrumbs items={[{ label: "PROYECTOS" }]} />
      <ProjectsExplorer />
    </>
  );
}

export function SectorPage({ sector }: { sector: Sector }) {
  return (
    <>
      <SiteHero
        eyebrow={sector.eyebrow}
        title={sector.title}
        summary={sector.summary}
        image={sector.image}
        primary={`/contacto?sector=${sector.slug}`}
        primaryLabel={sector.cta}
        secondary={{ href: `/servicios#${sector.package}`, label: `VER ${sector.package.toUpperCase()}` }}
      />
      <Breadcrumbs items={[{ label: "SECTORES" }, { label: sector.eyebrow }]} />
      <section className="sector-benefits page-container">
        <header><span>01 — BENEFICIOS</span><h2>{sector.benefitsTitle}</h2></header>
        <div>{sector.benefits.map((benefit, index) => <article key={benefit.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
      </section>
      <section className="content-section page-container"><div className="content-section__intro"><span>02 — QUÉ PUEDES RECIBIR</span><h2>INFORMACIÓN PARA<br /><b>TU OBJETIVO.</b></h2></div><ul className="content-list">{sector.includes.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></section>
      {sector.demoId && <section className="embedded-section page-container"><div><span>03 — DEMOSTRACIÓN</span><h2>RECORRE UN EJEMPLO INTERACTIVO</h2><p>Explora cómo se presenta y consulta la información espacial.</p></div><DemoViewer demoId={sector.demoId} /></section>}
      {sector.slug === "evacuacion-emergencias" && <p className="content-notice page-container">ARQ360 ofrece apoyo gráfico para planes de emergencia y documentación empresarial. El alcance no implica certificación SG-SST ni certificación de una autoridad.</p>}
    </>
  );
}

export function PlanixPage() {
  return (
    <>
      <SiteHero eyebrow="SISTEMA DE CAPTURA ESPACIAL" title="PLANIX R1" summary="Captura el mundo real y conviértelo en recorridos, planos, mediciones y documentación técnica." image="/images/planix/planix-laser-room-wide-reference.png" primaryLabel="SOLICITAR INFORMACIÓN" secondary={{ href: "/servicios", label: "VER ENTREGABLES" }} />
      <Breadcrumbs items={[{ label: "PLANIX R1" }]} />
      <section className="planix-detail page-container"><div className="planix-detail__product"><Image src="/images/planix/planix-r1-transparent.png" alt="Sistema PLANIX R1 completo" fill unoptimized sizes="(max-width: 700px) 80vw, 38vw" /></div><div>{planixSections.map((section, index) => <article key={section.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2><p>{section.text}</p></article>)}</div></section>
      <section className="content-section page-container"><div className="content-section__intro"><span>07 — FLUJO DE TRABAJO</span><h2>UN FLUJO<br /><b>DE TRABAJO SIMPLE.</b></h2></div><ol className="process-list">{planixWorkflow.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
      <section className="planix-outputs page-container"><span>08 — RESULTADOS POSIBLES</span><h2>UNA CAPTURA.<br /><b>MÚLTIPLES ENTREGABLES.</b></h2><div>{planixOutputs.map((output, index) => <article key={output}><span>{String(index + 1).padStart(2, "0")}</span><h3>{output}</h3></article>)}</div></section>
    </>
  );
}

export function AboutPage() {
  const sections = [
    ["QUÉ HACEMOS", "Conectamos captura espacial, recorridos, planos y documentación técnica dentro de una experiencia clara para cada proyecto."],
    ["NUESTRA VISIÓN", "Hacer que la información del entorno construido sea más accesible, comprensible y útil para tomar decisiones."],
    ["ARQUITECTURA + TECNOLOGÍA", "Combinamos lectura espacial con herramientas digitales para conservar el contexto del lugar."],
    ["CAPTURA ESPACIAL", "Registramos visual y dimensionalmente las condiciones del espacio con una metodología profesional."],
    ["PLANIX R1", "Utilizamos tecnología de captura 360° y LiDAR como base del levantamiento."],
    ["PROCESO", "Definimos el alcance, capturamos, procesamos y entregamos información organizada para cada objetivo."],
    ["COBERTURA", "Evaluamos cada proyecto en Colombia según ubicación, área, alcance y desplazamiento."],
    ["POR QUÉ ARQ360", "Un solo levantamiento puede alimentar múltiples usos y reducir la fragmentación de información."],
  ];
  return (
    <>
      <SiteHero eyebrow="ARQ360 SERVICES" title="DIGITALIZAMOS EL MUNDO CONSTRUIDO." summary="ARQ360 transforma espacios físicos en información visual, dimensional y técnica para vender, diseñar, documentar, construir y gestionar mejor." />
      <Breadcrumbs items={[{ label: "NOSOTROS" }]} />
      <section className="editorial page-container">{sections.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{text}</p></article>)}</section>
    </>
  );
}
