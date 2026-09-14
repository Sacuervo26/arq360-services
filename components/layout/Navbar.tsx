"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { contactLabel, navigation, serviceMenu, serviceMenuActions } from "@/data/navigation";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/contact";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const whatsappHref = getWhatsAppUrl(WHATSAPP_MESSAGES.general);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobileOpen);
    return () => document.body.classList.remove("nav-open");
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="ARQ360 Services, inicio" onClick={closeMenus}>
        <span className="brand__main">ARQ<span>360.</span></span>
        <span className="brand__sub">SERVICES</span>
      </Link>

      <nav className="navlinks" aria-label="Navegación principal">
        {navigation.map((item) => item.href === "/servicios" ? (
          <button
            type="button"
            key={item.href}
            className={pathname.startsWith(item.href) ? "is-active" : ""}
            aria-expanded={servicesOpen}
            aria-controls="services-menu"
            onMouseEnter={() => setServicesOpen(true)}
            onFocus={() => setServicesOpen(true)}
            onClick={() => setServicesOpen((value) => !value)}
          >
            {item.label}<ChevronDown size={14} />
          </button>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenus}
            className={pathname === item.href ? "is-active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {whatsappHref && <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_header" className="nav-cta" onClick={closeMenus}>
        {contactLabel} <span>→</span>
      </a>}

      <button
        className="menu-toggle"
        onClick={() => setMobileOpen((value) => !value)}
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {mobileOpen ? <X /> : <Menu />}
      </button>

      <div
        id="services-menu"
        className={`services-mega services-menu--compact ${servicesOpen ? "is-open" : ""}`}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="services-menu__levels">
          {serviceMenu.map((item) => (
            <Link href={item.href} key={item.label} onClick={closeMenus}>
              <span>{item.index}</span>
              <div><b>{item.label}</b><p>{item.text}</p></div>
              <i>↗</i>
            </Link>
          ))}
        </div>
        <div className="services-menu__actions">
          {serviceMenuActions.map(([label, href]) => <Link href={href} key={href} onClick={closeMenus}>{label}<i>→</i></Link>)}
          {whatsappHref && <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_services_menu" onClick={closeMenus}>HABLAR CON ARQ360<i>→</i></a>}
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        <span className="mobile-menu__status">NAVEGACIÓN // ACTIVA</span>
        {navigation.map((item, index) => item.href === "/servicios" ? (
          <div className="mobile-services" key={item.href}>
            <button type="button" onClick={() => setMobileServicesOpen((value) => !value)} aria-expanded={mobileServicesOpen}>
              <span>0{index + 1}</span>{item.label}<ChevronDown />
            </button>
            <div className={`mobile-services__panel ${mobileServicesOpen ? "is-open" : ""}`}>
              <Link href="/servicios" onClick={closeMenus}>VER SERVICIOS</Link>
              {serviceMenu.map((entry) => <Link href={entry.href} key={entry.href} onClick={closeMenus}>{entry.label}</Link>)}
            </div>
          </div>
        ) : (
          <Link key={item.href} href={item.href} onClick={closeMenus}>
            <span>0{index + 1}</span>{item.label}
          </Link>
        ))}
        {whatsappHref && <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_mobile_menu" className="mobile-menu__cta" onClick={closeMenus}>
          <span>06</span> CONTÁCTANOS →
        </a>}
      </div>
    </header>
  );
}
