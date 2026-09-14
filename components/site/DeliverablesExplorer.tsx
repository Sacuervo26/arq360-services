"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { deliverables } from "@/data/deliverables";
import { getDeliverableWhatsAppMessage } from "@/config/contact";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const deliverableEvents: Record<string, string> = {
  cad: "whatsapp_cad",
  bim: "whatsapp_bim",
  "nube-puntos": "whatsapp_lidar",
};

export function DeliverablesExplorer() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("detalle");
    if (requested && deliverables.some((item) => item.id === requested)) {
      window.requestAnimationFrame(() => {
        setOpenId(requested);
        document.getElementById(`entregable-${requested}`)?.scrollIntoView({ block: "center" });
      });
    }
  }, []);

  function toggle(id: string) {
    const next = openId === id ? null : id;
    setOpenId(next);
    const url = new URL(window.location.href);
    if (next) url.searchParams.set("detalle", next);
    else url.searchParams.delete("detalle");
    window.history.replaceState({}, "", `${url.pathname}${url.search}${next ? "#entregables" : ""}`);
  }

  return (
    <div className="deliverable-explorer">
      {deliverables.map((item, index) => {
        const open = openId === item.id;
        return (
          <article id={`entregable-${item.id}`} className={`deliverable-panel ${open ? "is-open" : ""}`} key={item.id}>
            <button type="button" onClick={() => toggle(item.id)} aria-expanded={open} aria-controls={`panel-${item.id}`}>
              <div className="deliverable-panel__image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 35vw, 16vw" /></div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.title}</h3>{item.technical && <b>{item.technical}</b>}<div className="deliverable-panel__badges"><small>EXCLUSIVO ADVANCED</small><small>COSTO ADICIONAL</small></div><p>{item.summary}</p></div>
              <i>{open ? "−" : "+"}</i>
            </button>
            <div id={`panel-${item.id}`} className="deliverable-panel__details" hidden={!open}>
              <div><span>QUÉ PUEDES RECIBIR</span><ul>{item.receives.map((value) => <li key={value}>{value}</li>)}</ul></div>
              <div><span>IDEAL PARA</span><ul>{item.idealFor.map((value) => <li key={value}>{value}</li>)}</ul></div>
              <div><span>DISPONIBILIDAD</span><p>{item.package}</p><small className="deliverable-panel__cost">{item.costNote}</small><WhatsAppLink message={getDeliverableWhatsAppMessage(item.title, item.technical)} eventId={deliverableEvents[item.id] ?? "whatsapp_advanced_addon"} appearance="text">COTIZAR ESTE ENTREGABLE</WhatsAppLink></div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
