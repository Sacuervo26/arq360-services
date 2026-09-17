"use client";

function embedUrl(url: string) {
  const target = new URL(url);
  target.pathname = `/embed${target.pathname.replace(/\/$/, "")}/`;
  target.searchParams.set("autostart", "1");
  target.searchParams.set("noinitanimation", "1");
  return target.toString();
}

export function InteractiveTour({ title, subtitle, url }: { title: string; subtitle: string; url: string; image: string }) {
  return (
    <section className="tour" aria-label={`Recorrido de ejemplo: ${title}`}>
      <div className="tour__frame">
        <iframe
          src={embedUrl(url)}
          title={`iGUIDE: ${title}`}
          allow="fullscreen; gyroscope; accelerometer"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="tour__caption"><div><span>EJEMPLO INTERACTIVO</span><h2>{title}</h2></div><p>{subtitle}</p></div>
    </section>
  );
}
