import { CONTACT_EMAIL, COVERAGE_CITY, COVERAGE_MESSAGE, getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/contact";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { SiteHero } from "./SiteHero";

export function ContactPage() {
  const whatsappReady = Boolean(getWhatsAppUrl(WHATSAPP_MESSAGES.general));

  return (
    <>
      <SiteHero
        eyebrow="CONTACTO // ARQ360"
        title="HABLEMOS DE TU PROYECTO."
        summary={"Cuéntanos qué inmueble quieres digitalizar y qué información necesitas obtener. Actualmente prestamos servicios de captura en Bogotá D.C."}
        primaryLabel="HABLAR POR WHATSAPP"
        primaryMessage={WHATSAPP_MESSAGES.general}
        primaryEventId="whatsapp_contact"
        secondary={{ href: "mailto:" + CONTACT_EMAIL, label: "ENVIAR CORREO" }}
      />
      <section className="contact-channels page-container">
        <header>
          <span>01 — CANALES DE CONTACTO</span>
          <h2>ELIGE CÓMO<br /><b>HABLAR CON NOSOTROS.</b></h2>
        </header>
        <div className="contact-channels__grid">
          <article>
            <span>01</span>
            <h3>WHATSAPP</h3>
            <p>La forma más rápida de hablar con nosotros.</p>
            {whatsappReady ? (
              <WhatsAppLink message={WHATSAPP_MESSAGES.general} eventId="whatsapp_contact" appearance="text">INICIAR CONVERSACIÓN</WhatsAppLink>
            ) : (
              <small>CANAL PREPARADO · NÚMERO PENDIENTE DE CONFIGURACIÓN</small>
            )}
          </article>
          <article>
            <span>02</span>
            <h3>CORREO ELECTRÓNICO</h3>
            <p className="contact-channels__email">{CONTACT_EMAIL}</p>
            <a href={"mailto:" + CONTACT_EMAIL}>ENVIAR CORREO <i>↗</i></a>
          </article>
          <article>
            <span>03</span>
            <h3>COBERTURA</h3>
            <p>{COVERAGE_CITY}</p>
            <small>{COVERAGE_MESSAGE}</small>
          </article>
        </div>
      </section>
    </>
  );
}
