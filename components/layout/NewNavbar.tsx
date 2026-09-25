"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/contact";

const serviceLinks = [["Standard","/servicios/standard"],["Premium","/servicios/premium"],["Advanced","/servicios/advanced"],["Comparar servicios","/servicios/comparar"]] as const;
const sectorLinks = [["Inmobiliario","/sectores/inmobiliario"],["Arquitectura y construcción","/sectores/arquitectura-construccion"],["Seguros y restauración","/sectores/seguros-restauracion"],["Evacuación y emergencia","/sectores/evacuacion-emergencia"]] as const;

export function NewNavbar() {
  const [mobileOpen,setMobileOpen]=useState(false);
  const [desktopPanel,setDesktopPanel]=useState<"services"|"sectors"|null>(null);
  const [mobilePanel,setMobilePanel]=useState<"services"|"sectors"|null>(null);
  const path=usePathname();
  const ref=useRef<HTMLElement>(null);
  const whatsapp=getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  const close=()=>{setMobileOpen(false);setDesktopPanel(null);setMobilePanel(null)};

  useEffect(()=>{
    const outside=(event:PointerEvent)=>{if(!ref.current?.contains(event.target as Node)) setDesktopPanel(null)};
    const escape=(event:KeyboardEvent)=>{if(event.key==="Escape") close()};
    document.addEventListener("pointerdown",outside);
    document.addEventListener("keydown",escape);
    document.body.classList.toggle("menu-is-open",mobileOpen);
    return()=>{document.removeEventListener("pointerdown",outside);document.removeEventListener("keydown",escape);document.body.classList.remove("menu-is-open")};
  },[mobileOpen]);

  const dropdown=(type:"services"|"sectors",links:typeof serviceLinks|typeof sectorLinks)=> <div className={`new-nav__dropdown ${desktopPanel===type?"is-open":""}`} role="menu">{links.map(([label,href])=><Link role="menuitem" href={href} key={href} onClick={close}>{label}<span>→</span></Link>)}</div>;

  return <header className="new-nav" ref={ref}>
    <Link href="/" className="new-brand" onClick={close} aria-label="ARQ360 Services, inicio"><b>ARQ<span>360.</span></b><small>iGUIDE SERVICES</small></Link>
    <nav className="new-nav__desktop" aria-label="Navegación principal">
      <Link href="/" className={path==="/"?"is-active":""}>INICIO</Link>
      <div className="new-nav__item">
        <button type="button" className={path.startsWith("/servicios")?"is-active":""} onClick={()=>setDesktopPanel(desktopPanel==="services"?null:"services")} aria-expanded={desktopPanel==="services"} aria-haspopup="menu">SERVICIOS <ChevronDown size={14}/></button>
        {dropdown("services",serviceLinks)}
      </div>
      <div className="new-nav__item">
        <button type="button" className={path.startsWith("/sectores")?"is-active":""} onClick={()=>setDesktopPanel(desktopPanel==="sectors"?null:"sectors")} aria-expanded={desktopPanel==="sectors"} aria-haspopup="menu">SECTORES <ChevronDown size={14}/></button>
        {dropdown("sectors",sectorLinks)}
      </div>
      <Link href="/planix-r1" className={path==="/planix-r1"?"is-active":""}>PLANIX R1</Link>
      <Link href="/nosotros" className={path==="/nosotros"?"is-active":""}>NOSOTROS</Link>
    </nav>
    {whatsapp&&<a className="new-nav__cta" href={whatsapp} target="_blank" rel="noopener noreferrer">CONTÁCTANOS <span>→</span></a>}
    <button className="new-nav__toggle" type="button" onClick={()=>setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label={mobileOpen?"Cerrar menú":"Abrir menú"}>{mobileOpen?<X/>:<Menu/>}</button>
    <nav id="mobile-menu" className={`new-nav__mobile ${mobileOpen?"is-open":""}`} aria-label="Navegación móvil">
      <button type="button" onClick={()=>setMobilePanel(mobilePanel==="services"?null:"services")} aria-expanded={mobilePanel==="services"}>SERVICIOS <ChevronDown/></button>
      <div className={`mobile-subnav ${mobilePanel==="services"?"is-open":""}`}>{serviceLinks.map(([l,h])=><Link href={h} key={h} onClick={close}>{l}</Link>)}</div>
      <button type="button" onClick={()=>setMobilePanel(mobilePanel==="sectors"?null:"sectors")} aria-expanded={mobilePanel==="sectors"}>SECTORES <ChevronDown/></button>
      <div className={`mobile-subnav ${mobilePanel==="sectors"?"is-open":""}`}>{sectorLinks.map(([l,h])=><Link href={h} key={h} onClick={close}>{l}</Link>)}</div>
      <Link href="/planix-r1" onClick={close}>PLANIX R1</Link>
      <Link href="/nosotros" onClick={close}>NOSOTROS</Link>
      <Link href="/contacto" onClick={close}>CONTACTO</Link>
      {whatsapp&&<a className="button button--primary" href={whatsapp} target="_blank" rel="noopener noreferrer">SOLICITAR COTIZACIÓN</a>}
    </nav>
  </header>;
}
