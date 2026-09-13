export type ServicePackage = {
  slug: "standard" | "premium" | "advanced";
  name: string;
  group: string;
  tagline: string;
  description: string;
  includes: string[];
  idealFor: string[];
  formats: string[];
  addons: string[];
  badge?: string;
};

export const packages: ServicePackage[] = [
  { slug: "standard", name: "STANDARD", group: "VISUALIZACIÓN Y DOCUMENTACIÓN", tagline: "LO ESENCIAL PARA VISUALIZAR, MEDIR Y DOCUMENTAR UN ESPACIO.", description: "Un nivel de servicio claro para recorrer, comprender y compartir las condiciones generales de un inmueble.", includes: ["Recorrido virtual 3D", "Plano 2D", "Mediciones", "Áreas", "Documentación básica del espacio", "Experiencia compartible"], idealFor: ["Inmobiliarias", "Propietarios", "Espacios comerciales", "Documentación general"], formats: ["Experiencia web", "Plano PDF", "Archivos incluidos según alcance"], addons: ["CAD / DWG", "Elevaciones", "Plano de cubierta"] },
  { slug: "premium", name: "PREMIUM", group: "REPRESENTACIÓN AMPLIADA", tagline: "UNA REPRESENTACIÓN MÁS COMPLETA DEL ESPACIO.", description: "Incorpora todo lo esencial de Standard y amplía el nivel de detalle visual y planimétrico del inmueble.", includes: ["Todo lo incluido en Standard", "Planos con mayor nivel de detalle", "Elementos y objetos cuando corresponda", "Documentación visual ampliada", "Información adicional del inmueble"], idealFor: ["Propiedades de alto valor", "Arquitectura", "Remodelación", "Documentación avanzada"], formats: ["Experiencia web", "Planos PDF", "Archivos incluidos según alcance"], addons: ["CAD / DWG", "BIM / Revit", "Plano de cielo reflejado"], badge: "MÁS DETALLE" },
  { slug: "advanced", name: "ADVANCED", group: "ARQUITECTURA Y CONSTRUCCIÓN", tagline: "DEL ESPACIO REAL A INFORMACIÓN TÉCNICA.", description: "El nivel orientado a convertir la captura en documentación utilizable para diseñar, remodelar, coordinar y construir.", includes: ["Recorrido virtual", "Planos y mediciones", "CAD / DWG", "Información LiDAR", "DXF cuando corresponda", "Elevaciones", "Plano de cubierta", "Plano de cielo reflejado", "BIM / Revit cuando corresponda"], idealFor: ["Arquitectura", "Diseño", "Remodelación", "Construcción", "Documentación de existentes"], formats: ["DWG", "DXF cuando aplique", "PDF", "RVT cuando corresponda"], addons: ["Plano de sitio", "Documentación especializada"] },
];

export const packageBySlug = Object.fromEntries(packages.map((item) => [item.slug, item])) as Record<string, ServicePackage>;
