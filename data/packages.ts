export type PackageSlug = "standard" | "premium" | "advanced";

export type ServicePackage = {
  slug: PackageSlug;
  name: string;
  group: string;
  tagline: string;
  description: string;
  includes: string[];
  idealFor: string[];
  formats: string[];
  addons: string[];
  badge?: string;
  customizable?: boolean;
};

export const packages: ServicePackage[] = [
  {
    slug: "standard",
    name: "STANDARD",
    group: "VISUALIZACIÓN Y DOCUMENTACIÓN",
    tagline: "PARA VER, ENTENDER Y COMPARTIR EL ESPACIO.",
    description: "Todo lo esencial para presentar, recorrer y comprender un inmueble.",
    includes: ["Recorrido virtual 3D", "Planos 2D", "Mediciones del espacio", "Áreas", "Enlace compartible", "Documentación del espacio"],
    idealFor: ["Inmobiliarias", "Propietarios", "Venta y arriendo", "Espacios comerciales", "Documentación general"],
    formats: ["Experiencia web compartible", "Planos y documentación según alcance"],
    addons: [],
  },
  {
    slug: "premium",
    name: "PREMIUM",
    group: "REPRESENTACIÓN AMPLIADA",
    badge: "MÁS DETALLE",
    tagline: "PARA QUIEN NECESITA VER MÁS DEL ESPACIO.",
    description: "Un nivel superior de documentación para proyectos donde cada detalle importa.",
    includes: ["Todo lo incluido en Standard", "Recorrido virtual 3D", "Planos detallados", "Mediciones y áreas", "Elementos del espacio cuando aplique", "Documentación visual ampliada"],
    idealFor: ["Propiedades de alto valor", "Arquitectos", "Remodelaciones", "Diseño", "Documentación detallada"],
    formats: ["Experiencia web compartible", "Planos detallados", "Documentación según alcance"],
    addons: [],
  },
  {
    slug: "advanced",
    name: "ADVANCED",
    group: "PERSONALIZABLE PARA ARQUITECTURA Y CONSTRUCCIÓN",
    badge: "PERSONALIZABLE",
    customizable: true,
    tagline: "INFORMACIÓN TÉCNICA A LA MEDIDA DE TU PROYECTO.",
    description: "Pensado para arquitectura, remodelación y construcción. Incluye una base de documentación espacial y permite añadir entregables técnicos según las necesidades del proyecto.",
    includes: ["Recorrido virtual", "Planos 2D", "Mediciones del espacio", "Documentación espacial base"],
    idealFor: ["Arquitectura", "Construcción", "Remodelación", "Diseño interior", "Levantamientos arquitectónicos", "Documentación as-built"],
    formats: ["Acceso digital y archivos según alcance"],
    addons: ["Planos editables CAD / DWG", "Modelo digital BIM / Revit", "Nube de puntos LiDAR", "Elevaciones exteriores", "Plano de cubierta", "Plano de cielo reflejado", "Plano de implantación"],
  },
];

export const packageBySlug = Object.fromEntries(packages.map((item) => [item.slug, item])) as Record<string, ServicePackage>;
