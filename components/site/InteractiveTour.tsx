"use client";

import Image from "next/image";
import { useState } from "react";

function embedUrl(url: string) {
  const target = new URL(url);
  target.pathname = `/embed${target.pathname.replace(/\/$/, "")}/`;
  target.searchParams.set("autostart", "1");
  target.searchParams.set("noinitanimation", "1");
  return target.toString();
}

export function InteractiveTour({ title, subtitle, url, image }: { title: string; subtitle: string; url: string; image: string }) {
  const [active, setActive] = useState(false);

  return (
    <section className="tour" aria-label={`Recorrido de ejemplo: ${title}`}>
      <div className="tour__frame">
        {active ? (
          <iframe src={embedUrl(url)} title={`iGUIDE: ${title}`} allow="fullscreen; gyroscope; accelerometer" allowFullScreen loading="lazy" />
        ) : (
          <button className="tour__preview" type="button" onClick={() => setActive(true)} aria-label={`Abrir recorrido: ${title}`}>
            <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 1100px" />
            <span className="tour__shade" />
            <span className="tour__play"><i aria-hidden="true">▶</i> Abrir recorrido</span>
          </button>
        )}
      </div>
      <div className="tour__caption"><div><span>EJEMPLO INTERACTIVO</span><h2>{title}</h2></div><p>{subtitle}</p></div>
    </section>
  );
}

