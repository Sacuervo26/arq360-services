"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

const services = [
  "Recorrido virtual 3D",
  "Planos 2D",
  "Mediciones",
  "CAD / DWG",
  "BIM / Revit",
  "Nube de puntos",
  "Elevaciones",
  "Cubierta",
  "Plano de cielo reflejado",
  "Site Plan",
  "Etiquetas espaciales",
  "Otro",
];

type FormState = "idle" | "sending" | "sent" | "prepared" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const searchParams = useSearchParams();
  const [preset, setPreset] = useState(() => searchParams.get("paquete") ?? "");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    if (!endpoint) {
      setState("prepared");
      return;
    }

    setState("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, servicios: formData.getAll("servicios") }),
      });
      if (!response.ok) throw new Error("No se pudo enviar la solicitud");
      setState("sent");
      form.reset();
      setPreset("");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form__grid">
        <label>TIPO DE CLIENTE<select required name="tipoCliente"><option value="">Selecciona</option><option>Inmobiliaria</option><option>Arquitectura</option><option>Construcción</option><option>Seguros / restauración</option><option>Gestión de instalaciones</option><option>Otro</option></select></label>
        <label>TIPO DE INMUEBLE<select required name="tipoInmueble"><option value="">Selecciona</option><option>Casa</option><option>Apartamento</option><option>Oficina</option><option>Comercial</option><option>Industrial</option><option>Edificio</option><option>Otro</option></select></label>
        <label>ÁREA APROXIMADA <span>m²</span><input name="area" type="number" min="1" /></label>
        <label>CIUDAD<input required name="ciudad" /></label>
        <label>PAQUETE<select name="paquete" value={preset} onChange={(event) => setPreset(event.target.value)}><option value="">No estoy seguro</option><option value="standard">Standard</option><option value="premium">Premium</option><option value="advanced">Advanced</option></select></label>
        <label>NOMBRE<input required name="nombre" autoComplete="name" /></label>
        <label>EMPRESA<input name="empresa" autoComplete="organization" /></label>
        <label>WHATSAPP<input name="whatsapp" type="tel" autoComplete="tel" /></label>
        <label>CORREO<input required name="correo" type="email" autoComplete="email" /></label>
      </div>
      <fieldset><legend>SERVICIOS</legend>{services.map((service) => <label key={service}><input type="checkbox" name="servicios" value={service} />{service}</label>)}</fieldset>
      <label>MENSAJE<textarea name="mensaje" rows={5} /></label>
      <button type="submit" disabled={state === "sending"}>{state === "sending" ? "ENVIANDO…" : "ENVIAR SOLICITUD"} <span>↗</span></button>
      {state === "sent" && <div className="form-status" role="status"><b>SOLICITUD ENVIADA</b><p>Gracias. El equipo de ARQ360 recibió la información del proyecto.</p></div>}
      {state === "prepared" && <div className="form-status" role="status"><b>SOLICITUD VALIDADA</b><p>El formulario funciona y está listo. Para recibir solicitudes, configura el endpoint comercial indicado en <code>.env.example</code>.</p></div>}
      {state === "error" && <div className="form-status form-status--error" role="alert"><b>NO PUDIMOS ENVIARLA</b><p>Conserva la información e inténtalo de nuevo cuando el canal comercial esté disponible.</p></div>}
    </form>
  );
}
