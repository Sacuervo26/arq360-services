"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HeroHud } from "@/components/hud/HeroHud";
import { TechButton } from "@/components/ui/TechButton";
import type { SpatialQuality } from "@/components/three/spatialTypes";

const SpatialHeroCanvas = dynamic(() => import("@/components/three/SpatialHeroCanvas").then((mod) => mod.SpatialHeroCanvas), {
  ssr: false,
});

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const scanProgress = useRef(0);
  const pointerTarget = useRef({ x: 0, y: 0 });
  const pointerCurrent = useRef({ x: 0, y: 0 });
  const [enhance, setEnhance] = useState(false);
  const [active, setActive] = useState(true);
  const [quality, setQuality] = useState<SpatialQuality>("desktop");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = document.createElement("canvas");
    const webglAvailable = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    const updateQuality = () => setQuality(window.innerWidth < 640 ? "mobile" : window.innerWidth < 1100 ? "tablet" : "desktop");
    updateQuality();
    window.addEventListener("resize", updateQuality, { passive: true });
    if (reduced || !webglAvailable) {
      scanProgress.current = 0.78;
      heroRef.current?.style.setProperty("--scan-progress", "0.78");
      return () => window.removeEventListener("resize", updateQuality);
    }
    const id = window.requestIdleCallback?.(() => setEnhance(true), { timeout: 1100 }) ?? window.setTimeout(() => setEnhance(true), 450);
    return () => {
      window.removeEventListener("resize", updateQuality);
      if (typeof id === "number") {
        window.cancelIdleCallback?.(id);
        window.clearTimeout(id);
      }
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { rootMargin: "20% 0px", threshold: 0.01 });
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!heroRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let cleanup = () => {};
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, scrollModule]) => {
      if (disposed || !heroRef.current) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      const auto = { value: 0 };
      const scroll = { value: 0 };
      const renderProgress = () => {
        const value = Math.max(auto.value, scroll.value * 0.98);
        const waveOpacity = Math.sin(value * Math.PI) * 0.46;
        scanProgress.current = value;
        heroRef.current?.style.setProperty("--scan-progress", value.toFixed(4));
        heroRef.current?.style.setProperty("--scan-opacity", waveOpacity.toFixed(4));
        heroRef.current?.style.setProperty("--digital-opacity", String(0.16 + value * 0.62));
      };
      const autoTween = gsap.to(auto, { value: 1, duration: 12, ease: "power1.inOut", repeat: -1, repeatDelay: 4, onUpdate: renderProgress });
      const scrollTween = gsap.to(scroll, {
        value: 1,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 0.55 },
        onUpdate: renderProgress,
      });
      cleanup = () => {
        autoTween.kill();
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      };
    });
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  useEffect(() => {
    if (!active || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      pointerCurrent.current.x += (pointerTarget.current.x - pointerCurrent.current.x) * 0.055;
      pointerCurrent.current.y += (pointerTarget.current.y - pointerCurrent.current.y) * 0.055;
      heroRef.current?.style.setProperty("--pointer-x", pointerCurrent.current.x.toFixed(4));
      heroRef.current?.style.setProperty("--pointer-y", pointerCurrent.current.y.toFixed(4));
      frame = window.requestAnimationFrame(update);
    };
    frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, [active]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (!heroRef.current || event.pointerType === "touch") return;
    const rect = heroRef.current.getBoundingClientRect();
    pointerTarget.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerTarget.current.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { pointerTarget.current = { x: 0, y: 0 }; }}
    >
      <div className="hero__backdrop" aria-hidden="true">
        <Image
          src="/images/hero-architecture-v3.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="hero__architecture"
        />
        <div className="hero__physical-mask" />
        <div className="hero__digital-mask" />
        <div className="hero__grid" />
        <div className="hero__capture-beam"><i /></div>
        <div className="hero__scan"><i /><b /></div>
        {enhance && <SpatialHeroCanvas active={active} progress={scanProgress} quality={quality} />}
      </div>

      <div className="hero__content">
        <div className="hero__copy">
          <div className="eyebrow"><i /> ESPACIOS REALES <span>{"//"}</span> SISTEMAS DIGITALES</div>
          <h1>TRANSFORMADOS<br />EN <span>INTELIGENCIA</span><br /><span>DIGITAL</span></h1>
          <p>Escaneo 3D, recorridos virtuales, planos, mediciones y documentación técnica con captura espacial profesional.</p>
          <div className="hero__actions">
            <TechButton href="/contacto" variant="primary">SOLICITAR COTIZACIÓN</TechButton>
            <TechButton href="/planix-r1">CONOCER PLANIX R1</TechButton>
          </div>
          <a className="scroll-cue" href="#metricas">
            <span>↓</span><i />
            <small>DESPLAZA<br />EXPLORA UN NUEVO MUNDO<br />DE POSIBILIDADES</small>
          </a>
        </div>

        <div className="planix-stage" aria-label="PLANIX R1, sistema de captura espacial">
          <div className="planix-stage__aura" aria-hidden="true" />
          <div className="planix-stage__product">
            <Image src="/images/planix/planix-r1-transparent.png" alt="PLANIX R1 completo" fill priority unoptimized sizes="(max-width: 580px) 58vw, 18vw" />
          </div>
          <div className="planix-stage__platform" aria-hidden="true"><i /></div>
          <div className="planix-stage__label"><span>REALIDAD CAPTURADA.</span><b>POTENCIAL LIBERADO.</b></div>
        </div>
        <HeroHud />
      </div>
      <div id="metricas" className="hero__baseline" aria-hidden="true" />
    </section>
  );
}
