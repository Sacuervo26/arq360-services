export const navigation = [
  { label: "INICIO", href: "/" },
  { label: "SERVICIOS", href: "/servicios" },
  { label: "PLANIX R1", href: "/planix-r1" },
  { label: "PROYECTOS", href: "/proyectos" },
  { label: "NOSOTROS", href: "/nosotros" },
] as const;

export const contactLabel = "CONTÁCTANOS";

export const serviceMenu = [
  { index: "01", label: "STANDARD", text: "Para visualizar, entender y compartir un espacio.", href: "/servicios#standard" },
  { index: "02", label: "PREMIUM", text: "Para obtener un nivel superior de detalle.", href: "/servicios#premium" },
  { index: "03", label: "ADVANCED", text: "Para arquitectura, diseño y construcción.", href: "/servicios#advanced" },
] as const;

export const serviceMenuActions = [
  ["VER TODOS LOS SERVICIOS", "/servicios"],
  ["ENTREGABLES ADVANCED", "/servicios#entregables"],
] as const;

export const footerGroups = [
  { title: "SERVICIOS", links: [["Standard", "/servicios#standard"], ["Premium", "/servicios#premium"], ["Advanced", "/servicios#advanced"], ["Entregables Advanced", "/servicios#entregables"]] },
  { title: "SECTORES", links: [["Inmobiliario", "/sectores/inmobiliario"], ["Arquitectura y Construcción", "/sectores/arquitectura-construccion"], ["Seguros y Restauración", "/sectores/seguros-restauracion"], ["Planos de Evacuación", "/sectores/evacuacion-emergencias"]] },
  { title: "TECNOLOGÍA", links: [["PLANIX R1", "/planix-r1"]] },
  { title: "EMPRESA", links: [["Nosotros", "/nosotros"], ["Proyectos", "/proyectos"], ["Contacto", "/contacto"]] },
] as const;
