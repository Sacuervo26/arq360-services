import Link from "next/link";
import { footerGroups } from "@/data/navigation";
import { CONTACT_EMAIL, COVERAGE_CITY, COVERAGE_MESSAGE, WHATSAPP_MESSAGES } from "@/config/contact";
import { LEGAL_NAME, SITE_URL } from "@/config/site";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function Footer() {
  return <footer className="footer">
    <div className="footer__brand"><Link className="brand" href="/" aria-label="ARQ360 Services, inicio"><span className="brand__main">ARQ<span>360.</span></span><span className="brand__sub">SERVICES</span></Link><p>CAPTURA ESPACIAL Y<br/>DOCUMENTACIÓN TÉCNICA.</p></div>
    <nav aria-label="Navegación de pie">{footerGroups.map(group => <div key={group.title}><b>{group.title}</b>{group.links.map(([label, href]) => <Link href={href} key={`${label}-${href}`}>{label}</Link>)}</div>)}<div><b>CONTACTO</b><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_footer" appearance="text">WhatsApp</WhatsAppLink><a className="footer__email" href={"mailto:" + CONTACT_EMAIL}>{CONTACT_EMAIL}</a><a href={SITE_URL}>arq360services.com</a><span>{COVERAGE_CITY}, Colombia</span><small>{COVERAGE_MESSAGE}</small></div></nav>
    <div className="footer__meta"><span>{LEGAL_NAME}</span><span>{COVERAGE_CITY}, Colombia</span><span>{COVERAGE_MESSAGE}</span></div>
    <p>ESPACIOS REALES.<br /><b>MÁS POSIBILIDADES.</b></p>
    <small>© {new Date().getFullYear()} {LEGAL_NAME}</small>
  </footer>;
}
