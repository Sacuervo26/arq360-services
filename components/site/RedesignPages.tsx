import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Check, Compass, FileText, Layers3, Ruler, ScanLine } from "lucide-react";
import { CONTACT_EMAIL, COVERAGE_CITY, COVERAGE_MESSAGE, WHATSAPP_MESSAGES, getSectorWhatsAppMessage } from "@/config/contact";
import { advancedAddons, packageExamples, packages, sectors, type PackageId } from "@/data/redesign";
import { InteractiveTour } from "@/components/site/InteractiveTour";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const Arrow = () => <ArrowRight size={17} aria-hidden="true" />;

function Breadcrumbs({ items }: { items: [string, string?][] }) {
  return <nav className="breadcrumbs" aria-label="Migas de pan">{items.map(([label, href], index) => <span key={label}>{index > 0 && <i>/</i>}{href ? <Link href={href}>{label}</Link> : <b>{label}</b>}</span>)}</nav>;
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return <header className="section-head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</header>;
}

function FinalCta() {
  return <section className="final-cta">
    <div><span className="eyebrow">HABLEMOS DE TU PROYECTO</span><h2>Convierte tu inmueble en información que puedas usar.</h2><p>Cuéntanos el tipo de espacio y el resultado que necesitas. Te ayudamos a definir el alcance adecuado.</p></div>
    <div className="button-row"><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_final">Solicitar cotización</WhatsAppLink><span className="text-link contact-email-plain">{CONTACT_EMAIL}</span></div>
  </section>;
}

const serviceList: PackageId[] = ["standard", "premium", "advanced"];

export function HomePage() {
  const outcomes = [
    [Compass, "Recorrido virtual", "Explora el inmueble de forma remota y entiende cómo se conectan sus espacios."],
    [Layers3, "Planos", "Consulta una representación clara de la distribución y sus áreas."],
    [Ruler, "Mediciones", "Revisa dimensiones y datos útiles dentro de una misma experiencia."],
    [FileText, "Documentación técnica", "Lleva la captura a archivos de apoyo para diseño y construcción."],
  ] as const;
  const metrics = [["01", "ALTA PRECISIÓN", "Mediciones respaldadas por tecnología LiDAR."], ["02", "CAPTURA ÁGIL", "Registra el inmueble eficientemente."], ["03", "UNA CAPTURA", "Múltiples entregables según el alcance."], ["04", "INFORMACIÓN ÚTIL", "Visualiza, mide, documenta y diseña."]];
  return <>
    <section className="home-hero">
      <div className="home-hero__copy">
        <span className="eyebrow">CAPTURA ESPACIAL PROFESIONAL</span>
        <h1>DIGITALIZAMOS INMUEBLES.<br /><em>CONVERTIMOS CADA CAPTURA</em><br />EN INFORMACIÓN ÚTIL.</h1>
        <p>Escaneo 3D, recorridos virtuales, planos, mediciones y documentación técnica con tecnología iGUIDE.</p>
        <div className="button-row"><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_home_hero">Solicitar cotización</WhatsAppLink><Link className="button button--secondary" href="/servicios">Ver servicios <Arrow /></Link></div>
      </div>
      <div className="home-hero__visual">
        <Image src="/images/hero-architecture-v3.png" alt="Vivienda contemporánea combinada con una representación digital de su arquitectura" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
        <div className="scan-card"><ScanLine /><span>CAPTURA ESPACIAL</span><b>iGUIDE</b></div>
      </div>
    </section>

    <section className="metric-strip" aria-label="Beneficios principales">{metrics.map(([n, title, text]) => <article key={n}><span>{n}</span><div><b>{title}</b><p>{text}</p></div></article>)}</section>

    <section className="section container">
      <SectionHead eyebrow="RESULTADOS" title={<>Una captura. <em>Múltiples posibilidades.</em></>} text="El mismo registro espacial puede convertirse en distintos recursos según el objetivo del proyecto." />
      <div className="outcome-grid">{outcomes.map(([Icon, title, text]) => <article className="icon-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section section--soft">
      <div className="container">
        <SectionHead eyebrow="SERVICIOS iGUIDE" title={<>Elige el nivel de <em>información que necesitas.</em></>} text="Tres alcances definidos para presentación inmobiliaria, mayor detalle visual y documentación técnica." />
        <div className="package-grid">{serviceList.map((id, index) => { const item = packages[id]; return <article className={`package-card package-card--${id}`} key={id}><span>0{index + 1}</span><p>{item.eyebrow}</p><h3>{item.name}</h3><b>{item.summary}</b><Link href={`/servicios/${id}`}>Ver servicio <Arrow /></Link></article>; })}</div>
      </div>
    </section>

    <section className="section container compare-home">
      <SectionHead eyebrow="COMPARACIÓN RÁPIDA" title="Tres niveles, una decisión clara." />
      <div className="table-wrap"><table><thead><tr><th>Resultado</th><th>Standard</th><th>Premium</th><th>Advanced</th></tr></thead><tbody>
        {[["Recorrido virtual 3D",1,1,1],["Plano 2D",1,1,0],["Plano detallado",0,1,0],["CAD / DWG",0,0,1],["Nube de puntos LiDAR",0,0,1],["PDF trazado",0,0,1]].map(([label,...vals]) => <tr key={String(label)}><th>{label}</th>{vals.map((v,i)=><td key={i}>{v ? <Check aria-label="Incluido" /> : <span aria-label="No incluido">—</span>}</td>)}</tr>)}
      </tbody></table></div>
      <Link className="text-link" href="/servicios/comparar">Ver comparación completa <Arrow /></Link>
    </section>

    <section className="section section--blue">
      <div className="container">
        <SectionHead eyebrow="EJEMPLOS" title={<>Mira cómo se ve <em>cada alcance.</em></>} />
        <div className="image-card-grid">{serviceList.map((id) => { const example=packageExamples[id]; return <Link className="image-card" href={`/ejemplos/${id}`} key={id}><div><Image src={example.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><span>{packages[id].name}</span><h3>{example.title}</h3><p>{example.subtitle}</p><b>Ver ejemplo <Arrow /></b></Link>; })}</div>
      </div>
    </section>

    <section className="section container">
      <SectionHead eyebrow="SECTORES" title={<>Información espacial para <em>decisiones reales.</em></>} />
      <div className="sector-grid">{sectors.map((sector) => <Link href={`/sectores/${sector.slug}`} className="sector-card" key={sector.slug}><Image src={sector.image} alt="" fill sizes="(max-width: 800px) 100vw, 25vw" /><span /><div><h3>{sector.name}</h3><p>{sector.summary}</p><b>Explorar <Arrow /></b></div></Link>)}</div>
    </section>

    <section className="section process-section"><div className="container">
      <SectionHead eyebrow="PROCESO" title="De la captura al resultado." />
      <ol className="process-grid">{[["PASO 01","Define","Cuéntanos el inmueble y el resultado que necesitas."],["PASO 02","Captura","Registramos los espacios con el sistema PLANIX R1."],["PASO 03","Procesa","La información se organiza según el servicio elegido."],["PASO 04","Recibe","Accede a tus recorridos, planos o archivos técnicos."]].map(([step,title,text])=><li key={step}><span>{step}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </div></section>

    <section className="section container planix-teaser">
      <div><span className="eyebrow">HARDWARE DE CAPTURA</span><h2>PLANIX R1</h2><p>Fotografía 360° y tecnología LiDAR dentro del flujo de trabajo iGUIDE.</p><Link className="button button--secondary" href="/planix-r1">Conocer PLANIX R1 <Arrow /></Link></div>
      <div className="planix-teaser__image"><Image src="/images/planix/planix-clean-angle.png" alt="Sistema de cámara PLANIX R1" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
    </section>
    <FinalCta />
  </>;
}

export function ServicesPage() {
  return <>
    <section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Servicios"]]} /><span className="eyebrow">SERVICIOS iGUIDE</span><h1>Un nivel de información<br /><em>para cada objetivo.</em></h1><p>Compara recorridos, planos y documentación técnica sin mezclar alcances.</p></section>
    <section className="section container"><div className="service-stack">{serviceList.map((id,index)=>{const item=packages[id];return <article key={id}><div className="service-stack__image"><Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div><span>0{index+1} / {item.eyebrow}</span><h2>{item.name}</h2><h3>{item.summary}</h3><p>{item.description}</p><ul>{item.features.slice(0,4).map(f=><li key={f}><Check />{f}</li>)}</ul><Link className="button button--primary" href={`/servicios/${id}`}>Explorar {id} <Arrow /></Link></div></article>})}</div></section>
    <section className="mini-cta"><div><h2>¿Aún no sabes cuál elegir?</h2><p>Revisa los alcances lado a lado o cuéntanos tu proyecto.</p></div><div className="button-row"><Link className="button button--secondary" href="/servicios/comparar">Comparar servicios <Arrow /></Link><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_services">Hablar con ARQ360</WhatsAppLink></div></section>
  </>;
}

export function ServiceDetailPage({ id }: { id: PackageId }) {
  const item = packages[id];
  const example = packageExamples[id];
  return <>
    <section className={`detail-hero detail-hero--${id}`}>
      <div><Breadcrumbs items={[["Inicio","/"],["Servicios","/servicios"],[item.name]]} /><span className="eyebrow">{item.eyebrow}</span><h1>{item.name}</h1><h2>{item.summary}</h2><p>{item.description}</p><div className="button-row"><WhatsAppLink message={WHATSAPP_MESSAGES[id]} eventId={`whatsapp_${id}_hero`}>Solicitar cotización</WhatsAppLink><Link className="button button--secondary" href={`/ejemplos/${id}`}>Ver ejemplo <Arrow /></Link></div></div>
      <div className="detail-hero__image"><Image src={item.image} alt={`Vista de referencia para ${item.name}`} fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
    </section>
    <section className="section container split-section"><SectionHead eyebrow="INCLUYE" title={<>Un alcance definido.<br /><em>Sin confusiones.</em></>} /><ul className="feature-list">{item.features.map((feature,index)=><li key={feature}><span>{String(index+1).padStart(2,"0")}</span><p>{feature}</p></li>)}</ul></section>
    {id === "advanced" && <section className="section section--soft"><div className="container"><SectionHead eyebrow="AMPLÍA EL ALCANCE" title={<>Entregables técnicos <em>adicionales.</em></>} text="Estos entregables no forman parte del paquete base Advanced. ARQ360 los cotiza por separado según los m² y el alcance del proyecto." /><div className="addon-grid">{advancedAddons.map(addon=><article key={addon.title}><div><Image src={addon.image} alt={`Referencia de ${addon.title}`} fill sizes="(max-width: 800px) 100vw, 25vw" /></div><span>ADICIONAL ADVANCED</span><h3>{addon.title}</h3><b>{addon.format}</b><p>{addon.text}</p><small>COSTO ADICIONAL · SE COTIZA SEGÚN m² Y ALCANCE</small></article>)}</div></div></section>}
    <section className="section section--blue"><div className="container"><SectionHead eyebrow={`EJEMPLO ${id.toUpperCase()}`} title={<>Recorrido listo para <em>navegar.</em></>} text="Explora directamente el inmueble, consulta sus espacios y utiliza los controles del visor iGUIDE." /><InteractiveTour {...example} /></div></section>
    <nav className="package-nav" aria-label="Navegación entre servicios">{"previous" in item ? <Link href={item.previous.href}>← {item.previous.label}</Link> : <span /> }<Link href="/servicios">Todos los servicios</Link><Link href={item.next.href}>{item.next.label} →</Link></nav>
    <FinalCta />
  </>;
}

export function ComparePage() {
  const rows = [
    ["Recorrido virtual 3D","Incluido","Incluido","Incluido"],
    ["Planos codificados por color","Incluido","Incluido","—"],
    ["Mediciones y cálculos de área","Incluido","Incluido","Datos técnicos"],
    ["Planos detallados con objetos","—","Incluido","—"],
    ["Compatibilidad VR","—","Incluido","—"],
    ["Planos CAD LOD 200 (DWG)","—","—","Incluido"],
    ["Nube de puntos LiDAR (DXF)","—","—","Incluido"],
    ["Planos trazados (PDF)","—","—","Incluido"],
  ];
  return <>
    <section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Servicios","/servicios"],["Comparar"]]} /><span className="eyebrow">COMPARAR SERVICIOS</span><h1>Encuentra el alcance<br /><em>adecuado.</em></h1><p>Una lectura directa de lo que incluye cada servicio base.</p></section>
    <section className="section container comparison-page">
      <div className="table-wrap"><table><thead><tr><th>Resultado</th><th>Standard</th><th>Premium</th><th>Advanced</th></tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((cell,i)=><td key={cell+i} data-label={i ? serviceList[i-1] : undefined}>{i===0?<b>{cell}</b>:cell==="Incluido"?<span className="included"><Check /> Incluido</span>:cell}</td>)}</tr>)}</tbody></table></div>
      <p className="comparison-note">Los entregables Advanced adicionales —elevaciones, cubierta, cielo reflejado y modelo 3D— se cotizan por separado según m² y alcance.</p>
      <div className="package-grid compact">{serviceList.map(id=><article className={`package-card package-card--${id}`} key={id}><p>{packages[id].eyebrow}</p><h3>{packages[id].name}</h3><Link href={`/servicios/${id}`}>Ver detalles <Arrow /></Link></article>)}</div>
    </section><FinalCta />
  </>;
}

export function ExamplesPage() {
  return <>
    <section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Ejemplos"]]} /><span className="eyebrow">EJEMPLOS REALES</span><h1>Explora cada servicio<br /><em>por separado.</em></h1><p>Selecciona el nivel que quieres conocer. Cada recorrido está listo para navegar directamente en su página.</p></section>
    <section className="section container"><div className="image-card-grid examples-grid">{serviceList.map(id=>{const e=packageExamples[id];return <Link className="image-card" href={`/ejemplos/${id}`} key={id}><div><Image src={e.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /></div><span>ESTÁS ELIGIENDO: {packages[id].name}</span><h2>{e.title}</h2><p>{e.subtitle}</p><b>Explorar ejemplo <Arrow /></b></Link>})}</div></section>
  </>;
}

export function ExampleDetailPage({ id }: { id: PackageId }) {
  const e=packageExamples[id];
  return <>
    <section className="example-hero"><Breadcrumbs items={[["Inicio","/"],["Ejemplos","/ejemplos"],[packages[id].name]]} /><span className="viewing-pill">ESTÁS VIENDO: {packages[id].name.toUpperCase()}</span><h1>{e.title}</h1><p>{e.subtitle}</p></section>
    <div className="container"><InteractiveTour {...e} /></div>
    <section className="example-scope"><div><span className="eyebrow">ALCANCE RELACIONADO</span><h2>{packages[id].name}</h2><p>{packages[id].summary}</p></div><Link className="button button--primary" href={`/servicios/${id}`}>Ver servicio <Arrow /></Link></section>
    <nav className="package-nav" aria-label="Otros ejemplos">{serviceList.filter(x=>x!==id).map(x=><Link href={`/ejemplos/${x}`} key={x}>Ejemplo {packages[x].name} →</Link>)}</nav>
  </>;
}

export function SectorsPage() {
  return <>
    <section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Sectores"]]} /><span className="eyebrow">APLICACIONES</span><h1>Una tecnología.<br /><em>Distintos usos.</em></h1><p>Descubre cómo la información espacial apoya cada tipo de proyecto.</p></section>
    <section className="section container"><div className="sector-list">{sectors.map((sector,index)=><Link href={`/sectores/${sector.slug}`} key={sector.slug}><span>0{index+1}</span><div><h2>{sector.name}</h2><p>{sector.summary}</p></div><Arrow /></Link>)}</div></section>
  </>;
}

export function SectorDetailPage({ sector }: { sector: (typeof sectors)[number] }) {
  return <>
    <section className="sector-hero"><div><Breadcrumbs items={[["Inicio","/"],["Sectores","/sectores"],[sector.name]]} /><span className="eyebrow">SOLUCIÓN PARA</span><h1>{sector.name}</h1><p>{sector.summary}</p><WhatsAppLink message={getSectorWhatsAppMessage(sector.name)} eventId={`whatsapp_sector_${sector.slug}`}>Cotizar proyecto</WhatsAppLink></div><div><Image src={sector.image} alt={`Aplicación de captura espacial en ${sector.name}`} fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div></section>
    <section className="section container split-section"><SectionHead eyebrow="CÓMO SE UTILIZA" title={<>Información para <em>trabajar con claridad.</em></>} /><div><ul className="feature-list">{sector.uses.map((use,index)=><li key={use}><span>{String(index+1).padStart(2,"0")}</span><p>{use}</p></li>)}</ul><div className="recommendation"><b>Servicio recomendado</b><p>{sector.recommended}</p><small>La recomendación final depende del inmueble, el uso previsto y los entregables solicitados.</small></div></div></section>
    <section className="mini-cta"><div><h2>Define el alcance de tu proyecto.</h2><p>Te orientamos según el uso de la información y el tipo de inmueble.</p></div><Link className="button button--secondary" href="/servicios/comparar">Comparar servicios <Arrow /></Link></section>
  </>;
}

export function PlanixPage() {
  return <>
    <section className="planix-hero"><div><Breadcrumbs items={[["Inicio","/"],["PLANIX R1"]]} /><span className="eyebrow">SISTEMA DE CAPTURA iGUIDE</span><h1>PLANIX <em>R1</em></h1><p>Un sistema portátil que combina fotografía 360° y LiDAR para registrar espacios dentro del flujo de trabajo iGUIDE.</p><div className="button-row"><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_planix_service">Contratar captura</WhatsAppLink><Link className="button button--secondary" href="/contacto">Consultar compra <Arrow /></Link></div></div><div><Image src="/images/planix/planix-clean-front.png" alt="Sistema PLANIX R1 visto de frente" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div></section>
    <section className="section container"><SectionHead eyebrow="DOS FORMAS DE ACCEDER" title={<>Elige entre el servicio<br />o <em>tu propio equipo.</em></>} /><div className="choice-grid"><article><ScanLine /><span>OPCIÓN 01</span><h2>Contratar la captura</h2><p>ARQ360 registra el inmueble y entrega el servicio iGUIDE acordado. Ideal cuando necesitas un resultado terminado.</p><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_planix_capture" variant="secondary">Cotizar captura</WhatsAppLink></article><article><Box /><span>OPCIÓN 02</span><h2>Comprar PLANIX R1</h2><p>Consulta disponibilidad, orientación comercial y condiciones para incorporar el sistema a tu propia operación.</p><Link className="button button--secondary" href="/contacto">Solicitar información <Arrow /></Link></article></div></section>
    <section className="section section--blue"><div className="container split-section"><SectionHead eyebrow="FLUJO DE TRABAJO" title="Captura espacial conectada a iGUIDE." /><div className="feature-list">{[["360°","Registro visual del entorno"],["LiDAR","Datos de distancia para apoyar planos y mediciones"],["PORTÁTIL","Diseñado para recorrer distintos tipos de inmuebles"],["CONECTADO","La captura se procesa dentro del ecosistema iGUIDE"]].map(([a,b],i)=><div className="feature-row" key={a}><span>0{i+1}</span><b>{a}</b><p>{b}</p></div>)}</div></div></section>
  </>;
}

export function AboutPage() {
  return <>
    <section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Nosotros"]]} /><span className="eyebrow">ARQ360 SERVICES</span><h1>Del espacio real<br /><em>a información útil.</em></h1><p>Ayudamos a documentar inmuebles con tecnología iGUIDE para que equipos, propietarios y profesionales puedan visualizar, medir y trabajar con mayor claridad.</p></section>
    <section className="section container about-grid"><div className="about-image"><Image src="/images/site/homepage-master-concept.png" alt="Concepto visual de captura espacial ARQ360" fill sizes="(max-width: 900px) 100vw, 50vw" /></div><div><span className="eyebrow">NUESTRO ENFOQUE</span><h2>Captura profesional.<br />Entregables con propósito.</h2><p>Partimos del objetivo del proyecto, recomendamos el nivel de servicio apropiado y organizamos el alcance antes de capturar. Así cada recorrido, plano o archivo técnico responde a una necesidad concreta.</p><ul><li><Check /> Atención desde Bogotá D.C.</li><li><Check /> Servicios para distintos sectores</li><li><Check /> Alcances definidos antes de la captura</li></ul></div></section><FinalCta />
  </>;
}

export function ContactPage() {
  return <>
    <section className="contact-page"><div><Breadcrumbs items={[["Inicio","/"],["Contacto"]]} /><span className="eyebrow">CONTACTO</span><h1>Cuéntanos qué<br /><em>necesitas documentar.</em></h1><p>Atendemos proyectos desde {COVERAGE_CITY}. Escríbenos con el tipo de inmueble, ubicación aproximada y resultado que esperas.</p><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_contact">Hablar por WhatsApp</WhatsAppLink></div><aside><span>CONTACTO DIRECTO</span><p className="contact-email">{CONTACT_EMAIL}</p><p>{COVERAGE_CITY}, Colombia</p><small>{COVERAGE_MESSAGE}</small><hr /><b>Para ayudarte más rápido</b><ul><li>Tipo de inmueble</li><li>Ciudad y ubicación aproximada</li><li>Área estimada en m²</li><li>Servicio o entregables de interés</li></ul></aside></section>
  </>;
}

