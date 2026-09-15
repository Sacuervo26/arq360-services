export const CONTACT_EMAIL = "contato@arq360services.com";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const COVERAGE_CITY = "Bogotá D.C.";

export const COVERAGE_MESSAGE = "Próximamente en más ciudades de Colombia.";

export const WHATSAPP_MESSAGES = {
  general: "Hola ARQ360 👋\n\nQuiero solicitar una cotización para digitalizar un inmueble.\n\n¿Me pueden ayudar?",
  standard: "Hola ARQ360 👋\n\nEstoy interesado en el servicio STANDARD.\n\nQuiero digitalizar un inmueble y conocer el alcance y la cotización.",
  premium: "Hola ARQ360 👋\n\nEstoy interesado en el servicio PREMIUM.\n\nQuisiera conocer el alcance y recibir una cotización para mi proyecto.",
  advanced: "Hola ARQ360 👋\n\nEstoy interesado en el servicio ADVANCED para un proyecto de arquitectura o construcción.\n\nTambién me gustaría conocer los entregables técnicos adicionales disponibles para mi proyecto.\n\n¿Me pueden ayudar con el alcance y la cotización?",
} as const;

export function getWhatsAppUrl(message: string) {
  if (!WHATSAPP_NUMBER) return null;
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

export function getDeliverableWhatsAppMessage(title: string, technical?: string) {
  const deliverable = technical ? title + " " + technical : title;
  return [
    "Hola ARQ360 👋",
    "",
    "Estoy interesado en el paquete ADVANCED y necesito agregar " + deliverable + ".",
    "",
    "Quisiera conocer el alcance y el costo adicional según los m² de mi proyecto.",
  ].join("\n");
}

export function getSectorWhatsAppMessage(sector: string) {
  return [
    "Hola ARQ360 👋",
    "",
    "Quiero solicitar una cotización para un proyecto de " + sector + ".",
    "",
    "Quisiera conocer el servicio recomendado, el alcance y los entregables disponibles.",
  ].join("\n");
}

export function getProjectWhatsAppMessage(project: string) {
  return [
    "Hola ARQ360 👋",
    "",
    "Quiero cotizar un proyecto similar a " + project + ".",
    "",
    "¿Me pueden ayudar a definir el alcance y los entregables?",
  ].join("\n");
}
