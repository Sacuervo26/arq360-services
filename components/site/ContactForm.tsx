"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

const sectorOptions = [
  ["inmobiliario", "Inmobiliario"],
  ["arquitectura-construccion", "Arquitectura y Construcción"],
  ["seguros-restauracion", "Seguros y Restauración"],
  ["evacuacion-emergencias", "Planos de Evacuación"],
  ["otro", "Otro"],
] as const;

const additionalDeliverables = [
  ["cad", "Planos editables CAD / DWG"],
  ["bim", "Modelo digital BIM / Revit"],
  ["nube-puntos", "Nube de puntos / datos LiDAR"],
  ["elevaciones", "Elevaciones exteriores"],
  ["cubierta", "Plano de cubierta"],
  ["cielo-reflejado", "Plano de cielo reflejado"],
  ["implantacion", "Plano de implantación"],
  ["evacuacion", "Planos de evacuación"],
  ["otro", "Otro"],
] as const;

type FormState = "idle" | "sending" | "sent" | "prepared" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<FormState>("idle");
  const [packagePreset, setPackagePreset] = useState(() => searchParams.get("paquete") ?? "");
  const [sectorPreset, setSectorPreset] = useState(() => searchParams.get("sector") ?? "");
  const deliverablePreset = searchParams.get("entregable") ?? "";

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
        body: JSON.stringify({ ...payload, entregables: formData.getAll("entregables") }),
      });
      if (!response.ok) throw new Error("No se pudo enviar la solicitud");
      setState("sent");
      form.reset();
      setPackagePreset("");
      setSectorPreset("");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form__grid">
        <label>NOMBRE<input required name="nombre" autoComplete="name" /></label>
        <label>EMPRESA<input name="empresa" autoComplete="organization" /></label>
        <label>WHATSAPP<input required name="whatsapp" type="tel" autoComplete="tel" /></label>
        <label>CORREO<input required name="correo" type="email" autoComplete="email" /></label>
        <label>CIUDAD<input required name="ciudad" /></label>
        <label>TIPO DE INMUEBLE<select required name="tipoInmueble"><option value="">Selecciona</option><option>Casa</option><option>Apartamento</option><option>Oficina</option><option>Comercial</option><option>Industrial</option><option>Edificio</option><option>Otro</option></select></label>
        <label>ÁREA APROXIMADA <span>m²</span><input name="area" type="number" min="1" /></label>
        <label>SECTOR<select required name="sector" value={sectorPreset} onChange={(event) => setSectorPreset(event.target.value)}><option value="">Selecciona</option>{sectorOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
        <label>PAQUETE<select name="paquete" value={packagePreset} onChange={(event) => setPackagePreset(event.target.value)}><option value="">No estoy seguro</option><option value="standard">Standard</option><option value="premium">Premium</option><option value="advanced">Advanced</option></select></label>
      </div>
      <fieldset><legend>ENTREGABLES ADICIONALES</legend>{additionalDeliverables.map(([value, label]) => <label key={value}><input type="checkbox" name="entregables" value={value} defaultChecked={deliverablePreset === value} />{label}</label>)}</fieldset>
      <label>MENSAJE<textarea name="mensaje" rows={5} placeholder="Cuéntanos qué necesitas recibir y para qué usarás la información." /></label>
      <button type="submit" disabled={state === "sending"}>{state === "sending" ? "ENVIANDO…" : "ENVIAR SOLICITUD"} <span>↗</span></button>
      {state === "sent" && <div className="form-status" role="status"><b>SOLICITUD ENVIADA</b><p>Gracias. El equipo de ARQ360 recibió la información del proyecto.</p></div>}
      {state === "prepared" && <div className="form-status" role="status"><b>SOLICITUD VALIDADA</b><p>El formulario funciona y está listo. Para recibir solicitudes, configura el canal comercial del proyecto.</p></div>}
      {state === "error" && <div className="form-status form-status--error" role="alert"><b>NO PUDIMOS ENVIARLA</b><p>Conserva la información e inténtalo de nuevo cuando el canal comercial esté disponible.</p></div>}
    </form>
  );
}
