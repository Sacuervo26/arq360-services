"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { contactLink, navigation, serviceNavGroups } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const closeMenus = () => { setMobileOpen(false); setServicesOpen(false); setMobileServicesOpen(false); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onPointerDown = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) closeMenus(); };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenus(); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("pointerdown", onPointerDown); document.removeEventListener("keydown", onKeyDown); };
  }, []);

  return <header ref={headerRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
    <Link className="brand" href="/" aria-label="ARQ360 Services, inicio" onClick={closeMenus}><span className="brand__main">ARQ<span>360.</span></span><span className="brand__sub">SERVICES</span></Link>
    <nav className="navlinks" aria-label="Navegación principal">
      {navigation.map(item => item.href === "/servicios" ? <button type="button" key={item.href} className={pathname.startsWith(item.href) ? "is-active" : ""} aria-expanded={servicesOpen} onMouseEnter={() => setServicesOpen(true)} onFocus={() => setServicesOpen(true)} onClick={() => setServicesOpen(true)}>{item.label}<ChevronDown size={14}/></button> : <Link key={item.href} href={item.href} onClick={closeMenus} className={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "is-active" : ""}>{item.label}</Link>)}
    </nav>
    <Link href={contactLink.href} className="nav-cta" onClick={closeMenus}>{contactLink.label} <span>→</span></Link>
    <button className="menu-toggle" onClick={() => setMobileOpen(value => !value)} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}>{mobileOpen ? <X/> : <Menu/>}</button>
    <div className={`services-mega ${servicesOpen ? "is-open" : ""}`} onMouseLeave={() => setServicesOpen(false)}>
      <div className="services-mega__grid">{serviceNavGroups.map(group => <div key={group.title}><span>{group.title}</span>{group.links.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}<i>↗</i></Link>)}</div>)}</div>
      <div className="services-mega__footer"><Link href="/servicios" onClick={closeMenus}>VER TODOS LOS SERVICIOS →</Link><Link href="/servicios#comparador" onClick={closeMenus}>COMPARAR PAQUETES →</Link></div>
    </div>
    <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? "is-open" : ""}`}>
      <span className="mobile-menu__status">NAVEGACIÓN // ACTIVA</span>
      {navigation.map((item, index) => item.href === "/servicios" ? <div className="mobile-services" key={item.href}><button type="button" onClick={() => setMobileServicesOpen(value => !value)} aria-expanded={mobileServicesOpen}><span>0{index + 1}</span>{item.label}<ChevronDown/></button>{mobileServicesOpen && <div className="mobile-services__panel"><Link href="/servicios" onClick={closeMenus}>VER TODOS LOS SERVICIOS</Link>{serviceNavGroups.map(group => <div key={group.title}><b>{group.title}</b>{group.links.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}</Link>)}</div>)}</div>}</div> : <Link key={item.href} href={item.href} onClick={closeMenus}><span>0{index + 1}</span>{item.label}</Link>)}
      <Link href={contactLink.href} className="mobile-menu__cta" onClick={closeMenus}>CONTÁCTANOS →</Link>
    </div>
  </header>;
}
