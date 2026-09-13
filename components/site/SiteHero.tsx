import Image from "next/image";
import { TechButton } from "@/components/ui/TechButton";
export function SiteHero({ eyebrow, title, summary, image = "/images/hero-architecture-v3.png", primary = "/contacto", primaryLabel = "SOLICITAR COTIZACIÓN", secondary }: { eyebrow: string; title: string; summary: string; image?: string; primary?: string; primaryLabel?: string; secondary?: { href: string; label: string } }) {
  return <header className="site-hero"><Image src={image} alt="" fill priority unoptimized sizes="100vw" /><div className="site-hero__shade" /><div className="page-container site-hero__content"><span>{eyebrow}</span><h1>{title}</h1><p>{summary}</p><div><TechButton href={primary} variant="primary">{primaryLabel}</TechButton>{secondary && <TechButton href={secondary.href}>{secondary.label}</TechButton>}</div></div><i className="site-hero__grid" /></header>;
}
