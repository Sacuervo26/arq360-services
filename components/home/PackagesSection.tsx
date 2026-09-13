import Link from "next/link";
import { packages } from "@/data/packages";
import { SystemHeading } from "@/components/ui/SystemHeading";

export function PackagesSection() {
  const featured = packages.filter((item) => ["standard", "premium", "advanced"].includes(item.slug));
  return <section className="system-section home-packages" id="paquetes">
    <div className="section-head-row"><SystemHeading index="05" eyebrow="NIVELES DE SERVICIO" title={<>ELIGE EL NIVEL DE<br /><span>INFORMACIÓN QUE NECESITAS.</span></>} /><p>Desde recorridos virtuales y planos hasta documentación avanzada para arquitectura, construcción y BIM.</p></div>
    <div className="package-cards">{featured.map((item) => <article className="package-card" key={item.slug}>
      {item.badge && <span>{item.badge}</span>}<small>{item.group}</small><h3>{item.name}</h3><p>{item.tagline}</p>
      <ul>{item.includes.slice(0,4).map(feature => <li key={feature}>{feature}</li>)}</ul>
      <div className="package-card__actions"><Link href={`/servicios/${item.slug}`}>VER PAQUETE ↗</Link><Link href={`/contacto?paquete=${item.slug}`}>COTIZAR ↗</Link></div>
    </article>)}</div>
    <Link className="section-link" href="/servicios#paquetes">COMPARAR PAQUETES ↗</Link>
  </section>;
}
