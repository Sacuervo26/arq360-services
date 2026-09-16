"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/contact";

const serviceLinks = [["Standard","/servicios/standard"],["Premium","/servicios/premium"],["Advanced","/servicios/advanced"],["Comparar","/servicios/comparar"]] as const;
const sectorLinks = [["Inmobiliario","/sectores/inmobiliario"],["Arquitectura y construcción","/sectores/arquitectura-construccion"],["Seguros y restauración","/sectores/seguros-restauracion"],["Evacuación y emergencia","/sectores/evacuacion-emergencia"]] as const;
const mainLinks = [["INICIO","/"],["SERVICIOS","/servicios"],["EJEMPLOS","/ejemplos"],["SECTORES","/sectores"],["PLANIX R1","/planix-r1"],["NOSOTROS","/nosotros"]] as const;

export function NewNavbar() {
  const [open,setOpen]=useState(false);
  const [panel,setPanel]=useState<"services"|"sectors"|null>(null);
  const path=usePathname();
  const ref=useRef<HTMLElement>(null);
  const whatsapp=getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  const close=()=>{setOpen(false);setPanel(null)};

  useEffect(()=>{
    const outside=(e:PointerEvent)=>{if(!ref.current?.contains(e.target as Node)) close()};
    const escape=(e:KeyboardEvent)=>{if(e.key==="Escape") close()};
    document.addEventListener("pointerdown",outside);document.addEventListener("keydown",escape);
    document.body.classList.toggle("menu-is-open",open);
    return()=>{document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",escape);document.body.classList.remove("menu-is-open")};
  },[open]);

  const dropdown=(type:"services"|"sectors",links:typeof serviceLinks|typeof sectorLinks)=>(
    <div className={`new-nav__dropdown ${panel===type?"is-open":""}`}>
      {links.map(([label,href])=><Link href={href} key={href} onClick={close}>{label}<span>→</span></Link>)}
    </div>
  );

  return <header className="new-nav" ref={ref}>
    <Link href="/" className="new-brand" onClick={close} aria-label="ARQ360 Services, inicio"><b>ARQ<span>360.</span></b><small>iGUIDE SERVICES</small></Link>
    <nav className="new-nav__desktop" aria-label="Navegación principal">
      {mainLinks.map(([label,href])=>label==="SERVICIOS"||label==="SECTORES"?<div className="new-nav__item" key={href}>
        <button type="button" className={path.startsWith(href)?"is-active":""} onClick={()=>setPanel(panel===(label==="SERVICIOS"?"services":"sectors")?null:(label==="SERVICIOS"?"services":"sectors"))} aria-expanded={panel===(label==="SERVICIOS"?"services":"sectors")}>{label}<ChevronDown size={13}/></button>
        {dropdown(label==="SERVICIOS"?"services":"sectors",label==="SERVICIOS"?serviceLinks:sectorLinks)}
      </div>:<Link href={href} className={path===href?"is-active":""} key={href}>{label}</Link>)}
    </nav>
    {whatsapp&&<a className="new-nav__cta" href={whatsapp} target="_blank" rel="noopener noreferrer">CONTÁCTANOS <span>→</span></a>}
    <button className="new-nav__toggle" type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?"Cerrar menú":"Abrir menú"}>{open?<X/>:<Menu/>}</button>
    <nav className={`new-nav__mobile ${open?"is-open":""}`} aria-label="Navegación móvil">
      <Link href="/servicios" onClick={close}>Servicios</Link><div className="mobile-subnav">{serviceLinks.map(([l,h])=><Link href={h} key={h} onClick={close}>{l}</Link>)}</div>
      <Link href="/ejemplos" onClick={close}>Ejemplos</Link><Link href="/sectores" onClick={close}>Sectores</Link><Link href="/planix-r1" onClick={close}>Planix R1</Link><Link href="/nosotros" onClick={close}>Nosotros</Link><Link href="/contacto" onClick={close}>Contacto</Link>
    </nav>
  </header>;
}

