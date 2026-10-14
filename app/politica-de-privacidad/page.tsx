import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | ARQ360 Services",
  description:
    "Conoce cómo ARQ360 SERVICES recopila, utiliza, protege y conserva la información personal suministrada a través de sus canales digitales.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
  openGraph: {
    title: "Política de Privacidad | ARQ360 Services",
    description:
      "Información sobre el tratamiento y la protección de datos personales en ARQ360 SERVICES.",
    url: "/politica-de-privacidad",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <article className="legal-page">
        <header className="legal-page__hero">
          <div className="container">
            <span className="eyebrow">INFORMACIÓN LEGAL</span>
            <h1>Política de Privacidad</h1>
            <time dateTime="2026-10">Última actualización: octubre de 2026</time>
          </div>
        </header>

        <div className="container legal-page__body">
          <p className="legal-page__intro">
            ARQ360 SERVICES SAS informa a sus clientes, usuarios y prospectos sobre el tratamiento de la información suministrada a través de nuestros canales digitales, incluyendo WhatsApp, Instagram, correo electrónico, formularios y demás medios de contacto.
          </p>

          <section>
            <h2>Información que podemos recopilar</h2>
            <p>Podemos recopilar información como nombre, número de teléfono, correo electrónico, ciudad o ubicación del proyecto, tipo de inmueble, área aproximada, servicio solicitado, información necesaria para preparar cotizaciones, datos relacionados con agendamientos y el contenido de las conversaciones sostenidas con ARQ360 SERVICES.</p>
          </section>

          <section>
            <h2>Finalidad del tratamiento</h2>
            <p>La información podrá utilizarse para atender solicitudes, elaborar cotizaciones, recomendar servicios, coordinar visitas y levantamientos, realizar seguimiento comercial, prestar los servicios contratados, brindar soporte y mejorar nuestros procesos de atención.</p>
          </section>

          <section>
            <h2>Automatización e inteligencia artificial</h2>
            <p>ARQ360 SERVICES puede utilizar herramientas de automatización e inteligencia artificial para apoyar la atención al cliente, organizar información, clasificar solicitudes, preparar respuestas y facilitar procesos internos. Las decisiones comerciales o valores no configurados expresamente no serán inventados por estos sistemas y podrán requerir revisión adicional.</p>
          </section>

          <section>
            <h2>Proveedores tecnológicos</h2>
            <p>Para operar nuestros servicios podemos utilizar proveedores tecnológicos tales como Meta/WhatsApp, plataformas de automatización, servicios de inteligencia artificial, Google Workspace y otros proveedores necesarios para la operación. La información será tratada únicamente en la medida necesaria para prestar el servicio correspondiente.</p>
          </section>

          <section>
            <h2>Conservación y seguridad</h2>
            <p>ARQ360 SERVICES adopta medidas razonables para proteger la información contra accesos no autorizados, pérdida, alteración o uso indebido. Los datos se conservarán durante el tiempo necesario para las finalidades para las cuales fueron recopilados y para cumplir obligaciones legales o contractuales aplicables.</p>
          </section>

          <section>
            <h2>Derechos del titular</h2>
            <p>Los titulares podrán solicitar conocer, actualizar, corregir o solicitar la eliminación de su información cuando corresponda, así como realizar consultas relacionadas con el tratamiento de sus datos personales.</p>
          </section>

          <section>
            <h2>Contacto</h2>
            <p>Para consultas relacionadas con esta política o con el tratamiento de información personal, puede comunicarse con ARQ360 SERVICES a través de nuestros <Link href="/contacto">canales oficiales de atención</Link>.</p>
          </section>

          <section>
            <h2>Cambios en esta política</h2>
            <p>ARQ360 SERVICES podrá actualizar esta Política de Privacidad cuando sea necesario. La versión vigente estará disponible públicamente en nuestro sitio web.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
