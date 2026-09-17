import Link from "next/link";
import { CONTACT_EMAIL, COVERAGE_CITY, COVERAGE_MESSAGE, WHATSAPP_MESSAGES } from "@/config/contact";
import { LEGAL_NAME } from "@/config/site";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const groups = [
  ["SERVICIOS",[["Standard","/servicios/standard"],["Premium","/servicios/premium"],["Advanced","/servicios/advanced"],["Comparar","/servicios/comparar"]]],
  ["SECTORES",[["Inmobiliario","/sectores/inmobiliario"],["Arquitectura y construcción","/sectores/arquitectura-construccion"],["Seguros y restauración","/sectores/seguros-restauracion"],["Evacuación y emergencia","/sectores/evacuacion-emergencia"]]],
  ["EMPRESA",[["Ejemplos","/ejemplos"],["PLANIX R1","/planix-r1"],["Nosotros","/nosotros"],["Contacto","/contacto"]]],
] as const;

export function NewFooter(){
  return <footer className="new-footer"><div className="new-footer__top">
    <div><Link href="/" className="new-brand new-brand--footer"><b>ARQ<span>360.</span></b><small>iGUIDE SERVICES</small></Link><p>Captura espacial y documentación de inmuebles.</p></div>
    {groups.map(([title,links])=><nav key={title} aria-label={title}><b>{title}</b>{links.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav>)}
    <div className="new-footer__contact"><b>CONTACTO</b><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_footer" appearance="text">WhatsApp</WhatsAppLink><span>{CONTACT_EMAIL}</span><span>{COVERAGE_CITY}, Colombia</span><small>{COVERAGE_MESSAGE}</small></div>
  </div><div className="new-footer__bottom"><span>© {new Date().getFullYear()} {LEGAL_NAME}</span><span>Espacios reales. Más posibilidades.</span></div></footer>;
}

