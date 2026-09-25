import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Check, Compass, FileText, Layers3, Ruler, ScanLine } from "lucide-react";
import { CONTACT_EMAIL, COVERAGE_CITY, COVERAGE_MESSAGE, WHATSAPP_MESSAGES, getSectorWhatsAppMessage } from "@/config/contact";
import { advancedAddons, packageExamples, packages, sectors, type PackageId } from "@/data/redesign";
import { InteractiveTour } from "@/components/site/InteractiveTour";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const Arrow = () => <ArrowRight size={17} aria-hidden="true" />;
const serviceList: PackageId[] = ["standard", "premium", "advanced"];

function Breadcrumbs({ items }: { items: [string, string?][] }) {
  return <nav className="breadcrumbs" aria-label="Migas de pan">{items.map(([label, href], index) => <span key={label}>{index > 0 && <i>/</i>}{href ? <Link href={href}>{label}</Link> : <b>{label}</b>}</span>)}</nav>;
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return <header className="section-head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</header>;
}

function FinalCta() {
  return <section className="final-cta">
    <div><span className="eyebrow">HABLEMOS DE TU PROYECTO</span><h2>Convierte tu inmueble en información que puedas usar.</h2><p>Cuéntanos el tipo de espacio y el resultado que necesitas. Te ayudamos a definir el alcance adecuado.</p></div>
    <div className="button-row"><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_final">Solicitar cotización</WhatsAppLink><a className="button button--secondary" href={`mailto:${CONTACT_EMAIL}`}>Enviar correo <Arrow /></a></div>
  </section>;
}

export function HomePage() {
  const outcomes = [
    [Compass, "Recorrido virtual", "Explora el inmueble de forma remota y comprende cómo se conectan sus espacios."],
    [Layers3, "Planos", "Consulta una representación clara de la distribución y sus áreas."],
    [Ruler, "Mediciones", "Revisa dimensiones y datos útiles dentro de una misma experiencia."],
    [FileText, "Documentación técnica", "Lleva la captura a información de apoyo para diseño y construcción."],
  ] as const;
  const metrics = [["01","ALTA PRECISIÓN","Mediciones respaldadas por tecnología LiDAR."],["02","CAPTURA ÁGIL","Registra el inmueble de forma eficiente."],["03","UNA CAPTURA","Obtén múltiples entregables."],["04","INFORMACIÓN ÚTIL","Visualiza, mide, documenta y diseña."]];
  const cards = {
    standard:["Recorrido virtual 3D","Planos","Mediciones"],
    premium:["Todo Standard","Más detalle","Equipamiento representado"],
    advanced:["Recorrido Premium","PDF técnico","CAD / DWG","LiDAR / DXF"],
  } as const;
  return <>
    <section className="home-hero">
      <div className="home-hero__copy"><span className="eyebrow">CAPTURA ESPACIAL PROFESIONAL</span><h1>DIGITALIZAMOS INMUEBLES.<br/><em>CONVERTIMOS CADA CAPTURA</em><br/>EN INFORMACIÓN ÚTIL.</h1><p>Recorridos virtuales, planos, mediciones y documentación técnica para inmobiliario, arquitectura y construcción.</p><div className="button-row"><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_home_hero">Solicitar cotización</WhatsAppLink><Link className="button button--secondary" href="/servicios">Conocer servicios <Arrow/></Link></div></div>
      <div className="home-hero__visual"><Image src="/images/hero-architecture-v3.png" alt="Vivienda contemporánea transformada en información digital" fill priority sizes="(max-width: 900px) 100vw, 58vw"/><div className="scan-card"><ScanLine/><span>CAPTURA ESPACIAL</span><b>iGUIDE</b></div></div>
    </section>

    <section className="section container"><SectionHead eyebrow="QUÉ OBTIENES" title={<>Una captura. <em>Múltiples posibilidades.</em></>} text="El mismo registro espacial puede convertirse en recursos útiles según el objetivo del proyecto."/><div className="outcome-grid">{outcomes.map(([Icon,title,text])=><article className="icon-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="section section--soft"><div className="container"><SectionHead eyebrow="SERVICIOS" title={<>Elige el nivel de <em>información que necesitas.</em></>} text="Tres alcances claros, sin mezclar entregables."/><div className="package-grid">{serviceList.map((id,index)=>{const item=packages[id];return <article className={`package-card package-card--${id}`} key={id}><span>0{index+1}</span><p>{item.eyebrow}</p><h3>{item.name}</h3><ul>{cards[id].map(x=><li key={x}><Check/>{x}</li>)}</ul><Link href={`/servicios/${id}`}>Ver servicio <Arrow/></Link></article>})}</div></div></section>

    <section className="section container compare-home"><SectionHead eyebrow="COMPARACIÓN RÁPIDA" title="Tres niveles, una decisión clara."/><div className="table-wrap"><table><thead><tr><th>Resultado</th><th>Standard</th><th>Premium</th><th>Advanced</th></tr></thead><tbody>{[["Recorrido virtual 3D",1,1,1],["Planos y mediciones",1,1,0],["Planos detallados",0,1,0],["PDF técnico",0,0,1],["CAD / DWG",0,0,1],["LiDAR / DXF",0,0,1]].map(([label,...vals])=><tr key={String(label)}><th>{label}</th>{vals.map((v,i)=><td key={i}>{v?<Check aria-label="Incluido"/>:<span aria-label="No incluido">—</span>}</td>)}</tr>)}</tbody></table></div><Link className="text-link" href="/servicios/comparar">Ver comparación completa <Arrow/></Link></section>

    <section className="section section--blue"><div className="container"><SectionHead eyebrow="SECTORES" title={<>Información espacial para <em>decisiones reales.</em></>}/><div className="sector-grid">{sectors.map(sector=><Link href={`/sectores/${sector.slug}`} className="sector-card" key={sector.slug}><Image src={sector.image} alt={sector.name} fill sizes="(max-width: 800px) 100vw, 25vw"/><span/><div><h3>{sector.name}</h3><p>{sector.summary}</p><b>Explorar <Arrow/></b></div></Link>)}</div></div></section>

    <section className="metric-strip" aria-label="Beneficios principales">{metrics.map(([n,title,text])=><article key={n}><span>{n}</span><div><b>{title}</b><p>{text}</p></div></article>)}</section>

    <section className="section process-section"><div className="container"><SectionHead eyebrow="PROCESO" title="De la captura al resultado."/><ol className="process-grid">{[["PASO 01","Define","Cuéntanos el inmueble y el resultado que necesitas."],["PASO 02","Captura","Registramos los espacios con PLANIX R1."],["PASO 03","Procesa","Organizamos la información según el servicio elegido."],["PASO 04","Recibe","Accede a recorridos, planos o archivos técnicos."]].map(([step,title,text])=><li key={step}><span>{step}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

    <section className="section container planix-teaser"><div><span className="eyebrow">CAPTURA ESPACIAL PROFESIONAL</span><h2>PLANIX R1</h2><p>Fotografía 360° y tecnología LiDAR integradas en un flujo profesional de captura espacial.</p><Link className="button button--secondary" href="/planix-r1">Conocer PLANIX R1 <Arrow/></Link></div><div className="planix-teaser__image planix-contain"><Image src="/images/planix_r1_producto.png" alt="Sistema PLANIX R1 completo" fill sizes="(max-width: 800px) 100vw, 45vw"/></div></section>
    <FinalCta/>
  </>;
}

export function ServicesPage() {
  return <><section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Servicios"]]}/><span className="eyebrow">SERVICIOS iGUIDE</span><h1>Un nivel de información<br/><em>para cada objetivo.</em></h1><p>Compara recorridos, planos y documentación técnica con alcances claramente separados.</p></section><section className="section container"><div className="service-stack">{serviceList.map((id,index)=>{const item=packages[id];return <article key={id}><div className="service-stack__image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 800px) 100vw, 45vw"/></div><div><span>0{index+1} / {item.eyebrow}</span><h2>{item.name}</h2><h3>{item.summary}</h3><p>{item.description}</p><ul>{item.features.map(f=><li key={f}><Check/>{f}</li>)}</ul><Link className="button button--primary" href={`/servicios/${id}`}>Explorar {item.name} <Arrow/></Link></div></article>})}</div></section><section className="mini-cta"><div><h2>¿Aún no sabes cuál elegir?</h2><p>Compara los alcances lado a lado.</p></div><Link className="button button--secondary" href="/servicios/comparar">Comparar servicios <Arrow/></Link></section></>;
}

export function ServiceDetailPage({id}:{id:PackageId}) {
  const item=packages[id]; const example=packageExamples[id];
  return <><section className={`detail-hero detail-hero--${id}`}><div><Breadcrumbs items={[["Inicio","/"],["Servicios","/servicios"],[item.name]]}/><span className="eyebrow">{item.eyebrow}</span><h1>{item.name}</h1><h2>{item.summary}</h2><p>{item.description}</p><WhatsAppLink message={WHATSAPP_MESSAGES[id]} eventId={`whatsapp_${id}_hero`}>Solicitar cotización</WhatsAppLink></div><div className="detail-hero__image"><Image src={item.image} alt={`Referencia de ${item.name}`} fill priority sizes="(max-width: 900px) 100vw, 50vw"/></div></section>
    <section className="section container split-section"><SectionHead eyebrow="INCLUYE" title={<>Un alcance definido.<br/><em>Sin confusiones.</em></>}/><ul className="feature-list">{item.features.map((feature,index)=><li key={feature}><span>{String(index+1).padStart(2,"0")}</span><p>{feature}</p></li>)}</ul></section>
    {id!=="advanced"?<section className="section tour-band"><InteractiveTour {...example}/></section>:<section className="section section--blue advanced-preview"><div className="container"><header className="advanced-preview__header"><div><span className="eyebrow">EJEMPLOS ADVANCED</span><h2>Documentación técnica<br/><em>lista para trabajar.</em></h2></div><p>Vista de referencia de un plano técnico generado a partir de la captura del inmueble.</p></header><div className="advanced-preview__tabs" aria-label="Recursos Advanced"><span className="is-active">PLANO TÉCNICO</span><span>DESCARGAR EJEMPLOS · PRÓXIMAMENTE</span></div><div className="advanced-preview__image"><Image src="/images/advanced-floor-plan.png" alt="Plano técnico Advanced de 145 Pioneer Street" fill sizes="(max-width: 900px) 100vw, 1400px"/></div></div></section>}
    {id==="advanced"&&<section className="section section--soft"><div className="container"><SectionHead eyebrow="PERSONALIZA TU DOCUMENTACIÓN" title={<>Entregables técnicos <em>adicionales.</em></>} text="Estos elementos se cotizan por separado según el área y el alcance del proyecto."/><div className="addon-grid">{advancedAddons.map(addon=><article key={addon.title}><div><Image src={addon.image} alt={addon.title} fill sizes="(max-width: 800px) 100vw, 25vw"/></div><span>COSTO ADICIONAL</span><h3>{addon.title}</h3><b>{addon.format}</b><p>{addon.text}</p><small>VALOR SEGÚN ÁREA Y ALCANCE</small></article>)}</div></div></section>}
    <nav className="package-nav" aria-label="Navegación entre servicios">{"previous" in item?<Link href={item.previous.href}>← {item.previous.label}</Link>:<span/>}<Link href={item.next.href}>{item.next.label} →</Link></nav><FinalCta/></>;
}

export function ComparePage() {
  const rows=[["Recorrido virtual 3D","Incluido","Incluido","Premium incluido"],["Planos y mediciones","Incluido","Incluido","Datos técnicos"],["Objetos y equipamiento","—","Incluido","—"],["Planos técnicos PDF","—","—","Incluido"],["CAD / DWG","—","—","Incluido"],["LiDAR / DXF","—","—","Incluido"]];
  return <><section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Servicios","/servicios"],["Comparar"]]}/><span className="eyebrow">COMPARAR SERVICIOS</span><h1>Encuentra el alcance<br/><em>adecuado.</em></h1><p>Una lectura directa de lo que incluye cada servicio base.</p></section><section className="section container comparison-page"><div className="table-wrap"><table><thead><tr><th>Resultado</th><th>Standard</th><th>Premium</th><th>Advanced</th></tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((cell,i)=><td key={cell+i} data-label={i?serviceList[i-1]:undefined}>{i===0?<b>{cell}</b>:cell==="Incluido"?<span className="included"><Check/> Incluido</span>:cell}</td>)}</tr>)}</tbody></table></div><p className="comparison-note">Los adicionales de Advanced se cotizan por separado según el área y el alcance.</p></section><FinalCta/></>;
}

export function SectorsPage() {
  return <><section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Sectores"]]}/><span className="eyebrow">SECTORES</span><h1>Una tecnología.<br/><em>Distintos usos.</em></h1><p>Descubre cómo la información espacial apoya cada tipo de proyecto.</p></section><section className="section container"><div className="sector-list">{sectors.map((sector,index)=><Link href={`/sectores/${sector.slug}`} key={sector.slug}><span>0{index+1}</span><div><h2>{sector.name}</h2><p>{sector.summary}</p></div><Arrow/></Link>)}</div></section></>;
}

export function SectorDetailPage({sector}:{sector:(typeof sectors)[number]}) {
  return <><section className="sector-hero"><div><Breadcrumbs items={[["Inicio","/"],["Sectores","/sectores"],[sector.name]]}/><span className="eyebrow">SECTOR</span><h1>{sector.hero}</h1><p>{sector.summary}</p><WhatsAppLink message={getSectorWhatsAppMessage(sector.name)} eventId={`whatsapp_sector_${sector.slug}`}>Cotizar proyecto</WhatsAppLink></div><div><Image src={sector.image} alt={sector.name} fill priority sizes="(max-width: 900px) 100vw, 50vw"/></div></section>
    <section className="section container split-section"><SectionHead eyebrow="CÓMO SE UTILIZA" title={<>Información para <em>trabajar con claridad.</em></>}/><div><ul className="feature-list">{sector.uses.map((use,index)=><li key={use}><span>{String(index+1).padStart(2,"0")}</span><p>{use}</p></li>)}</ul><div className="recommendation"><b>Servicio recomendado</b><p>{sector.recommended}</p><small>La recomendación final depende del inmueble y de los entregables solicitados.</small></div></div></section>
    <section className="section section--blue"><div className="container"><SectionHead eyebrow="DEMO INTEGRADA" title={<>Explora un espacio <em>sin salir de la página.</em></>}/><InteractiveTour title={sector.tourTitle} subtitle={sector.summary} url={sector.tourUrl}/></div></section><FinalCta/></>;
}

export function PlanixPage() {
  return <><section className="planix-hero"><div><Breadcrumbs items={[["Inicio","/"],["PLANIX R1"]]}/><span className="eyebrow">CAPTURA ESPACIAL PROFESIONAL</span><h1>PLANIX <em>R1</em></h1><p>Fotografía 360° y tecnología LiDAR integradas en un flujo profesional de captura espacial.</p><Link className="button button--primary" href="#opciones-planix">Conocer PLANIX R1 <Arrow/></Link></div><div className="planix-contain"><Image src="/images/planix_r1_producto.png" alt="Sistema PLANIX R1 completo" fill priority sizes="(max-width: 900px) 100vw, 46vw"/></div></section>
    <section id="opciones-planix" className="section container"><SectionHead eyebrow="DOS CAMINOS" title={<>Elige cómo quieres <em>usar PLANIX R1.</em></>}/><div className="choice-grid"><article><ScanLine/><span>QUIERO DIGITALIZAR UN INMUEBLE</span><h2>Contratar servicio</h2><p>ARQ360 captura el inmueble y entrega el alcance iGUIDE acordado.</p><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_planix_capture">Contratar servicio</WhatsAppLink></article><article><Box/><span>QUIERO COMPRAR PLANIX R1</span><h2>Solicitar información</h2><p>Consulta disponibilidad y condiciones para incorporar el sistema a tu operación.</p><Link className="button button--secondary" href="/contacto">Solicitar información <Arrow/></Link></article></div></section></>;
}

export function AboutPage() {
  return <><section className="page-hero page-hero--center"><Breadcrumbs items={[["Inicio","/"],["Nosotros"]]}/><span className="eyebrow">ARQ360 SERVICES</span><h1>Del espacio real<br/><em>a información útil.</em></h1><p>Documentamos inmuebles con tecnología iGUIDE para que propietarios, equipos y profesionales puedan visualizar, medir y trabajar con claridad.</p></section><section className="section container about-grid"><div className="about-image"><Image src="/images/site/homepage-master-concept.png" alt="Captura espacial ARQ360" fill sizes="(max-width: 900px) 100vw, 50vw"/></div><div><span className="eyebrow">NUESTRO ENFOQUE</span><h2>Captura profesional. Entregables con propósito.</h2><p>Partimos del objetivo del proyecto, definimos el alcance y organizamos la captura para que cada resultado responda a una necesidad concreta.</p><ul><li><Check/>Atención desde Bogotá D.C.</li><li><Check/>Servicios para distintos sectores</li><li><Check/>Alcances definidos antes de la captura</li></ul></div></section><FinalCta/></>;
}

export function ContactPage() {
  return <section className="contact-page"><div><Breadcrumbs items={[["Inicio","/"],["Contacto"]]}/><span className="eyebrow">CONTACTO</span><h1>Cuéntanos qué<br/><em>necesitas documentar.</em></h1><p>Actualmente prestamos servicios de captura en Bogotá D.C. Próximamente en más ciudades de Colombia.</p><div className="button-row"><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_contact">Hablar por WhatsApp</WhatsAppLink><a className="button button--secondary" href={`mailto:${CONTACT_EMAIL}`}>Enviar correo <Arrow/></a></div></div><aside><span>CONTACTO DIRECTO</span><a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><p>{COVERAGE_CITY}, Colombia</p><small>{COVERAGE_MESSAGE}</small><hr/><b>Para ayudarte más rápido</b><ul><li>Tipo de inmueble</li><li>Ciudad y ubicación aproximada</li><li>Área estimada en m²</li><li>Servicio o entregables de interés</li></ul></aside></section>;
}
