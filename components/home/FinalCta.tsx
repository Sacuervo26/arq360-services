import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WHATSAPP_MESSAGES } from "@/config/contact";
export function FinalCta() { return <section className="final-cta"><span>ARQ360 // BOGOTÁ D.C.</span><h2>¿LISTO PARA<br /><b>DIGITALIZAR TU ESPACIO?</b></h2><p>Cuéntanos qué necesitas y te ayudamos a definir la mejor opción para tu proyecto.</p><div><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_final">HABLAR POR WHATSAPP</WhatsAppLink></div></section>; }
