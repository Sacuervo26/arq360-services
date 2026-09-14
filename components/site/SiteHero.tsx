import Image from "next/image";
import { TechButton } from "@/components/ui/TechButton";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WHATSAPP_MESSAGES } from "@/config/contact";

type SiteHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  image?: string;
  primary?: string;
  primaryLabel?: string;
  primaryMessage?: string;
  primaryEventId?: string;
  secondary?: { href?: string; label: string; message?: string; eventId?: string };
};

export function SiteHero({
  eyebrow,
  title,
  summary,
  image = "/images/hero-architecture-v3.png",
  primary,
  primaryLabel = "HABLAR POR WHATSAPP",
  primaryMessage = WHATSAPP_MESSAGES.general,
  primaryEventId = "whatsapp_general",
  secondary,
}: SiteHeroProps) {
  return <header className="site-hero"><Image src={image} alt="" fill priority unoptimized sizes="100vw" /><div className="site-hero__shade" /><div className="page-container site-hero__content"><span>{eyebrow}</span><h1>{title}</h1><p>{summary}</p><div>{primary ? <TechButton href={primary} variant="primary">{primaryLabel}</TechButton> : <WhatsAppLink message={primaryMessage} eventId={primaryEventId}>{primaryLabel}</WhatsAppLink>}{secondary && (secondary.message ? <WhatsAppLink message={secondary.message} eventId={secondary.eventId ?? "whatsapp_general"}>{secondary.label}</WhatsAppLink> : secondary.href ? <TechButton href={secondary.href}>{secondary.label}</TechButton> : null)}</div></div><i className="site-hero__grid" /></header>;
}
