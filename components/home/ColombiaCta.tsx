import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { TechButton } from "@/components/ui/TechButton";

export function ColombiaCta() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  return (
    <section className="colombia-cta" id="contacto">
      <Image src="/images/site/colombia-location-hero.png" alt="Colombia iluminada sobre la Tierra vista desde el espacio" fill sizes="100vw" unoptimized />
      <div className="colombia-cta__shade" />
      <div className="earth-grid" aria-hidden="true" />
      <Reveal className="colombia-cta__content">
        <div className="system-heading__index"><span>10</span><i />COLOMBIA</div>
        <h2>DE LO REAL<br /><span>AL MUNDO DIGITAL.</span></h2>
        <p>En ARQ360 transformamos espacios físicos en información precisa, visual y útil para diseñar, documentar, vender, gestionar y tomar mejores decisiones.</p>
        <div className="hero__actions"><TechButton href="/contacto" variant="primary">SOLICITAR COTIZACIÓN</TechButton>{whatsapp && <TechButton href={`https://wa.me/${whatsapp}`}>HABLAR POR WHATSAPP</TechButton>}</div>
      </Reveal>
      <div className="colombia-cta__label"><i />COLOMBIA<span>TECNOLOGÍA ESPACIAL</span></div>
      <div className="colombia-cta__coordinates" aria-hidden="true"><span>04° 34′ N</span><span>74° 18′ O</span><b>COBERTURA NACIONAL</b></div>
    </section>
  );
}
