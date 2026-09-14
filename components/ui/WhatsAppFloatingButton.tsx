import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/config/contact";

export function WhatsAppFloatingButton() {
  const href = getWhatsAppUrl(WHATSAPP_MESSAGES.general);
  if (!href) return null;

  return (
    <a
      className="whatsapp-floating"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp con ARQ360"
      data-analytics-event="whatsapp_floating"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.55 0 .23 5.32.23 11.87c0 2.09.55 4.13 1.59 5.92L.13 24l6.36-1.67a11.86 11.86 0 0 0 5.61 1.43h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.48-8.39Zm-8.39 18.25h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.22-3.78.99 1.01-3.68-.24-.38a9.83 9.83 0 1 1 8.4 4.67Zm5.39-7.37c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.92 8.92 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.56-.34Z" />
      </svg>
      <span>HABLAR POR WHATSAPP</span>
    </a>
  );
}
