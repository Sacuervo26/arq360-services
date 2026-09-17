export type PackageId = "standard" | "premium" | "advanced";

export const packages = {
  standard: {
    id: "standard", name: "iGUIDE Standard", eyebrow: "VISUALIZACIÓN Y MEDICIÓN",
    summary: "Una base clara para presentar, recorrer y comprender un inmueble.",
    description: "Integra recorrido virtual, planos codificados por color y herramientas de medición en una experiencia fácil de compartir.",
    image: "/images/iguide/iguide-floorplans-reference.png",
    features: ["Recorrido virtual 3D", "Planos codificados por color", "Herramienta de generación de clientes potenciales", "Estándar de medición de propiedades", "Exportación a Floorplanner", "Archivo descargable para consulta sin conexión", "Cálculos 2D de área compatibles con ANSI Z765 / RMS", "Alojamiento durante un año"],
    next: { label: "Continuar a Premium", href: "/servicios/premium" },
  },
  premium: {
    id: "premium", name: "iGUIDE Premium", eyebrow: "MAYOR DETALLE VISUAL",
    summary: "Más contexto en el plano para inmuebles donde cada detalle importa.",
    description: "Incluye todo Standard y añade planos mejorados con objetos, accesorios y electrodomésticos, además de compatibilidad con realidad virtual.",
    image: "/images/iguide/iguide-floorplan-tablet-reference.png",
    features: ["Todo lo incluido en Standard", "Planos mejorados y detallados", "Objetos, accesorios y electrodomésticos cuando aplican", "Experiencia compatible con realidad virtual"],
    previous: { label: "Volver a Standard", href: "/servicios/standard" },
    next: { label: "Continuar a Advanced", href: "/servicios/advanced" },
  },
  advanced: {
    id: "advanced", name: "Advanced Drawing Package", eyebrow: "DOCUMENTACIÓN TÉCNICA",
    summary: "Una base técnica para levantamientos, diseño y construcción.",
    description: "Convierte la captura del sitio en archivos de referencia para flujos de arquitectura, remodelación y construcción.",
    image: "/images/iguide/3d-model-reference.png",
    features: ["Recorrido virtual 3D", "Planos CAD en DWG con nivel de detalle LOD 200", "Nube de puntos LiDAR en DXF", "Paquete de planos trazados en PDF"],
    previous: { label: "Volver a Premium", href: "/servicios/premium" },
    next: { label: "Comparar servicios", href: "/servicios/comparar" },
  },
} as const;

export const advancedAddons = [
  { title: "Elevaciones exteriores", format: "DWG", image: "/images/iguide/exterior-elevations-reference.png", text: "Alzados de las fachadas principales para apoyar documentación de condiciones existentes." },
  { title: "Plano de cubierta", format: "DWG", image: "/images/iguide/roof-plan-reference.png", text: "Representación de pendientes y bordes principales de la cubierta." },
  { title: "Plano de cielo reflejado", format: "RCP / DWG", image: "/images/iguide/reflected-ceiling-reference.png", text: "Documentación de elementos visibles del cielo, alturas e iluminación cuando corresponda." },
  { title: "Modelo 3D", format: "DWG / RVT", image: "/images/iguide/3d-model-reference.png", text: "Modelo de los niveles documentados con muros, puertas, ventanas y elementos estructurales básicos." },
] as const;

export const packageExamples = {
  standard: { title: "Vivienda residencial", subtitle: "Recorrido y plano para comprender la distribución del inmueble.", url: "https://youriguide.com/urwkb_1121_sample_road_kitchener_on", image: "/images/hero-architecture-v3.png" },
  premium: { title: "Oficina de demostración", subtitle: "Ejemplo con mayor contexto visual para consultar espacios y elementos.", url: "https://youriguide.com/v4H2RMIUYYJDD1", image: "/images/iguide/iguide-floorplan-tablet-reference.png" },
  advanced: { title: "Antes y después de construcción", subtitle: "Referencia espacial aplicada a la documentación de un proyecto.", url: "https://youriguide.com/pre_and_post_construction", image: "/images/planix/planix-scanned-room-effect-reference.png" },
} as const;

export const sectors = [
  { slug: "inmobiliario", name: "Inmobiliario", image: "/images/iguide/iguide-interactive-tour-reference.png", summary: "Presenta el inmueble con un recorrido conectado a su plano y medidas.", recommended: "Standard o Premium", uses: ["Publicación y presentación del inmueble", "Consulta remota de distribución y medidas", "Material visual fácil de compartir"] },
  { slug: "arquitectura-construccion", name: "Arquitectura y construcción", image: "/images/iguide/cad-floor-plan-reference.png", summary: "Documenta condiciones existentes para iniciar diseño, coordinación o intervención.", recommended: "Advanced", uses: ["Levantamientos y documentación as-built", "Referencia para prediseño y remodelación", "Archivos CAD y datos espaciales según alcance"] },
  { slug: "seguros-restauracion", name: "Seguros y restauración", image: "/images/iguide/iguide-tags-reference.png", summary: "Organiza evidencia visual y espacial para consultar el estado de una propiedad.", recommended: "Según el nivel de documentación", uses: ["Registro visual navegable", "Consulta remota de espacios y medidas", "Apoyo documental antes o después de una intervención"] },
  { slug: "evacuacion-emergencia", name: "Evacuación y emergencia", image: "/images/iguide/iguide-floorplans-reference.png", summary: "Aporta una base gráfica del inmueble para desarrollar documentación de orientación.", recommended: "Según el alcance del proyecto", uses: ["Referencia de distribución y circulación", "Base gráfica para piezas informativas", "Coordinación con el profesional responsable"] },
] as const;

export const sectorBySlug = Object.fromEntries(sectors.map((sector) => [sector.slug, sector])) as Record<string, (typeof sectors)[number]>;
