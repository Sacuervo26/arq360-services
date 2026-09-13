import { workflow } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { SystemHeading } from "@/components/ui/SystemHeading";
import Link from "next/link";

export function WorkflowSection() {
  return (
    <section className="system-section workflow" id="proceso">
      <SystemHeading index="07" eyebrow="TU PROYECTO" title={<>DE TU ESPACIO<br /><span>A INFORMACIÓN QUE PUEDES USAR.</span></>} copy="Un proceso simple. Nosotros nos encargamos del resto." />
      <div className="workflow-line" aria-hidden="true"><i /></div>
      <div className="workflow-steps">
        {workflow.map((step, index) => <Reveal className="workflow-step" delay={index * .08} key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><b><i /></b><h3>{step.title}</h3><p>{step.text}</p><small>{step.microcopy}</small>{"href" in step && <Link href={step.href}>{index === 0 ? "SOLICITAR COTIZACIÓN" : "VER SERVICIOS"} ↗</Link>}</Reveal>)}
      </div>
    </section>
  );
}
