import Image from "next/image";
import Link from "next/link";
import { deliverables } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { SystemHeading } from "@/components/ui/SystemHeading";

export function DeliverablesSection() {
  return (
    <section className="system-section deliverables" id="servicios">
      <div className="section-head-row">
        <SystemHeading index="04" eyebrow="SISTEMA MULTIFORMATO" title={<>UN ESCANEO.<br /><span>MÚLTIPLES ENTREGABLES.</span></>} />
        <p>Convierte espacios físicos en información precisa, visual y lista para usar.</p>
      </div>
      <div className="deliverables-grid">
        {deliverables.map((item, index) => (
          <Reveal className={index === 0 ? "deliverable--wide" : ""} delay={(index % 4) * .04} key={item.title}>
            <Link className="deliverable" href={item.href}>
              <div className="deliverable__media"><Image src={item.image} alt={item.title} fill sizes={index === 0 ? "(max-width: 700px) 84vw, 30vw" : "(max-width: 700px) 62vw, 16vw"} /></div>
              <span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.note}</p><i>VER SERVICIO ↗</i>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
