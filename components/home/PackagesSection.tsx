import Link from "next/link";
import { packages } from "@/data/packages";
import { SystemHeading } from "@/components/ui/SystemHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WHATSAPP_MESSAGES } from "@/config/contact";

export function PackagesSection() {
  const featured = packages.filter((item) => ["standard", "premium", "advanced"].includes(item.slug));
  return <section className="system-section home-packages" id="paquetes">
    <div className="section-head-row"><SystemHeading index="05" eyebrow="NIVELES DE SERVICIO" title={<>ELIGE EL NIVEL DE<br /><span>INFORMACIÓN QUE NECESITAS.</span></>} /><p>Desde recorridos virtuales y planos hasta documentación técnica para arquitectura y construcción.</p></div>
    <div className="package-cards">{featured.map((item) => <article className="package-card" key={item.slug}>
      {item.badge && <span>{item.badge}</span>}<small>{item.group}</small><h3>{item.name}</h3><p>{item.tagline}</p>
      <ul>{item.includes.slice(0,4).map(feature => <li key={feature}>{feature}</li>)}</ul>
      {item.customizable ? <div className="package-card__addons"><b>PUEDES AÑADIR</b><p>{item.addons.slice(0,4).join(" · ")}</p><small>Exclusivos de Advanced. Costo adicional según m² y alcance.</small></div> : <p className="package-card__advanced-note">Paquete definido. ¿Necesitas documentación técnica especializada? <Link href="/servicios#advanced">CONOCE ADVANCED →</Link></p>}
      <div className="package-card__actions"><Link href={`/servicios#${item.slug}`}>VER NIVEL ↗</Link><WhatsAppLink message={WHATSAPP_MESSAGES[item.slug]} eventId={`whatsapp_${item.slug}`} appearance="text">COTIZAR {item.name}</WhatsAppLink></div>
    </article>)}</div>
    <Link className="section-link" href="/servicios#comparador">COMPARAR SERVICIOS ↗</Link>
  </section>;
}
