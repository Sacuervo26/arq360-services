import Link from "next/link";
import { CONTACT_EMAIL, COVERAGE_CITY, COVERAGE_MESSAGE, WHATSAPP_MESSAGES } from "@/config/contact";
import { LEGAL_NAME } from "@/config/site";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const groups = [
  ["SERVICIOS",[["Standard","/servicios/standard"],["Premium","/servicios/premium"],["Advanced","/servicios/advanced"]]],
  ["SECTORES",[["Inmobiliario","/sectores/inmobiliario"],["Arquitectura y construcción","/sectores/arquitectura-construccion"],["Seguros y restauración","/sectores/seguros-restauracion"],["Evacuación y emergencia","/sectores/evacuacion-emergencia"]]],
  ["EMPRESA",[["Nosotros","/nosotros"],["PLANIX R1","/planix-r1"],["Contacto","/contacto"],["Política de privacidad","/politica-de-privacidad"]]],
] as const;

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/arq360services/", network: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594788578154", network: "facebook" },
  { label: "TikTok", href: "https://www.tiktok.com/@arq360services?is_from_webapp=1&sender_device=pc", network: "tiktok" },
] as const;

function SocialIcon({ network }: { network: (typeof socialLinks)[number]["network"] }) {
  if (network === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>;
  if (network === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 3c.3 2.4 1.7 3.9 4.3 4.1v3.2a8.7 8.7 0 0 1-4.3-1v6.2a6.5 6.5 0 1 1-5.6-6.4v3.3a3.3 3.3 0 1 0 2.4 3.1V3h3.2Z" /></svg>;
}

export function NewFooter(){
  return <footer className="new-footer"><div className="new-footer__top">
    <div><Link href="/" className="new-brand new-brand--footer"><b>ARQ<span>360.</span></b><small>iGUIDE SERVICES</small></Link><p>Captura espacial y documentación de inmuebles.</p><nav className="new-footer__socials" aria-label="Redes sociales de ARQ360">{socialLinks.map(social=><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} data-network={social.network} key={social.network}><SocialIcon network={social.network}/></a>)}</nav></div>
    {groups.map(([title,links])=><nav key={title} aria-label={title}><b>{title}</b>{links.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav>)}
    <div className="new-footer__contact"><b>CONTACTO</b><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_footer" appearance="text">WhatsApp</WhatsAppLink><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a><span>{COVERAGE_CITY}, Colombia</span><small>{COVERAGE_MESSAGE}</small></div>
  </div><div className="new-footer__bottom"><span>© {new Date().getFullYear()} {LEGAL_NAME}</span><span>Espacios reales. Más posibilidades.</span></div></footer>;
}
