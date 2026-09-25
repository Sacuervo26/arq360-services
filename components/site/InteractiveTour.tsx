"use client";

import { useEffect, useRef, useState } from "react";

function embedUrl(url: string) {
  const target = new URL(url);
  target.pathname = `/embed${target.pathname.replace(/\/$/, "")}/`;
  target.searchParams.set("autostart", "1");
  target.searchParams.set("noinitanimation", "1");
  return target.toString();
}

export function InteractiveTour({ title, subtitle, url }: { title: string; subtitle: string; url: string }) {
  const root = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!root.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px 0px" });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  return <section className="tour-experience" ref={root} aria-label={title}>
    <header className="tour-experience__header">
      <div><span>RECORRIDO INTERACTIVO</span><h2>{title}</h2></div>
      <p>{subtitle}</p>
    </header>
    <div className="tour__frame">
      {visible ? <iframe src={embedUrl(url)} title={`iGUIDE: ${title}`} allow="fullscreen; gyroscope; accelerometer" allowFullScreen /> : <div className="tour__loading" role="status">Preparando el recorrido interactivo…</div>}
    </div>
  </section>;
}
