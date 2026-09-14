import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { TechButton } from "@/components/ui/TechButton";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { COVERAGE_CITY, WHATSAPP_MESSAGES } from "@/config/contact";

export function ColombiaCta() {
  return (
    <section className="colombia-cta" id="contacto">
      <Image src="/images/site/colombia-location-hero.png" alt="Colombia iluminada sobre la Tierra vista desde el espacio" fill sizes="100vw" unoptimized />
      <div className="colombia-cta__shade" />
      <div className="earth-grid" aria-hidden="true" />
      <Reveal className="colombia-cta__content">
        <div className="system-heading__index"><span>10</span><i />COLOMBIA</div>
        <h2>DE LO REAL<br /><span>AL MUNDO DIGITAL.</span><br />EN TIEMPO RÉCORD.</h2>
        <p>Transformamos espacios físicos en información precisa, visual y técnica lista para vender, diseñar, documentar y tomar mejores decisiones.</p>
        <small>CAPTURA ESPACIAL · PROCESAMIENTO DIGITAL · ENTREGA ÁGIL</small>
        <div className="hero__actions"><WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_colombia">SOLICITAR COTIZACIÓN</WhatsAppLink><TechButton href="/contacto">VER CONTACTO</TechButton></div>
      </Reveal>
      <div className="colombia-cta__label"><i />COLOMBIA<span>TECNOLOGÍA ESPACIAL</span></div>
      <div className="colombia-cta__coordinates" aria-hidden="true"><span>04° 34′ N</span><span>74° 18′ O</span><b>{COVERAGE_CITY}</b></div>
    </section>
  );
}
