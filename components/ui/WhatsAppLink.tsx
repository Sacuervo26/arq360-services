import type { ReactNode } from "react";
import { getWhatsAppUrl } from "@/config/contact";

type Props = {
  message: string;
  eventId: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  appearance?: "button" | "text";
  className?: string;
};

export function WhatsAppLink({
  message,
  eventId,
  children,
  variant = "primary",
  appearance = "button",
  className,
}: Props) {
  const href = getWhatsAppUrl(message);
  if (!href) return null;

  const classes = className ?? (appearance === "text"
    ? "whatsapp-text-link"
    : "tech-button tech-button--" + variant);

  return (
    <a
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-event={eventId}
    >
      <span>{children}</span>
      <span aria-hidden="true" className={appearance === "text" ? "whatsapp-text-link__arrow" : "tech-button__arrow"}>↗</span>
    </a>
  );
}
