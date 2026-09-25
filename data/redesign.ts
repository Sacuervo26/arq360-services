export type PackageId = "standard" | "premium" | "advanced";

export const packages = {
  standard: {
    id: "standard", name: "STANDARD", eyebrow: "PRESENTACIÓN Y MEDICIÓN",
    summary: "Todo lo esencial para conocer y presentar un inmueble.",
    description: "Recorre, comprende y comparte el inmueble con una experiencia visual conectada a planos y mediciones.",
    image: "/images/rea-hero-image-7.png",
    features: ["Recorrido virtual 3D", "Planos", "Mediciones", "Cálculo de áreas", "Información fácil de compartir"],
    next: { label: "SIGUIENTE: PREMIUM", href: "/servicios/premium" },
  },
  premium: {
    id: "premium", name: "PREMIUM", eyebrow: "MAYOR DETALLE VISUAL",
    summary: "Más detalle para comprender cada espacio.",
    description: "Incluye todo Standard y amplía la representación del inmueble para mostrar con mayor claridad lo que contiene.",
    image: "/images/rea-hero-image-7.png",
    features: ["Todo lo incluido en Standard", "Planos más detallados", "Objetos", "Elementos fijos", "Equipamiento y electrodomésticos cuando aplican"],
    previous: { label: "ANTERIOR: STANDARD", href: "/servicios/standard" },
    next: { label: "SIGUIENTE: ADVANCED", href: "/servicios/advanced" },
  },
  advanced: {
    id: "advanced", name: "ADVANCED", eyebrow: "DOCUMENTACIÓN TÉCNICA",
    summary: "Del inmueble real a información lista para diseñar.",
    description: "Documenta el estado existente para arquitectura, remodelación y construcción con entregables técnicos coordinados.",
    image: "/images/advanced-floor-plan.png",
    features: ["Recorrido virtual 3D Premium", "Paquete de planos técnicos PDF", "Planos editables CAD / DWG", "Nube de puntos LiDAR / DXF"],
    previous: { label: "ANTERIOR: PREMIUM", href: "/servicios/premium" },
    next: { label: "COMPARAR SERVICIOS", href: "/servicios/comparar" },
  },
} as const;

export const advancedAddons = [
  { title: "Elevaciones exteriores", format: "DWG", image: "/images/iguide/exterior-elevations-reference.png", text: "Alzados de las fachadas principales para documentar condiciones existentes." },
  { title: "Plano de cubierta", format: "DWG", image: "/images/iguide/roof-plan-reference.png", text: "Representación de pendientes y bordes principales de la cubierta." },
  { title: "Plano de cielo reflejado", format: "RCP / DWG", image: "/images/iguide/reflected-ceiling-reference.png", text: "Documentación de elementos visibles del cielo, alturas e iluminación." },
  { title: "Modelo 3D / Revit", format: "RVT / DWG", image: "/images/iguide/3d-model-reference.png", text: "Modelo tridimensional de los niveles y elementos documentados." },
  { title: "Site Plan", format: "PLANO DE IMPLANTACIÓN", image: "/images/iguide/cad-floor-plan-reference.png", text: "Plano general de implantación según el área y alcance acordados." },
] as const;

export const packageExamples = {
  standard: { title: "Recorrido Standard real", subtitle: "Recorre el inmueble, consulta el plano y utiliza las herramientas del visor.", url: "https://youriguide.com/urwkb_1121_sample_road_kitchener_on" },
  premium: { title: "100 Chattel Street", subtitle: "Explora este proyecto Premium directamente y navega todos sus espacios.", url: "https://youriguide.com/100_chattel_st_haverhill_ma" },
  advanced: { title: "Documentación Advanced", subtitle: "Plano técnico de referencia del paquete Advanced.", url: "" },
} as const;

export const sectors = [
  { slug: "inmobiliario", name: "Inmobiliario", hero: "INMOBILIARIO", image: "/images/sector_inmobiliario.png", summary: "Presenta cada propiedad con información visual, planos y mediciones que ayudan a comprender mejor su distribución.", recommended: "Standard o Premium", tourTitle: "Recorrido inmobiliario real", tourUrl: "https://youriguide.com/urwkb_1121_sample_road_kitchener_on", uses: ["Presentación visual de la propiedad", "Consulta remota de distribución y medidas", "Información fácil de compartir"] },
  { slug: "arquitectura-construccion", name: "Arquitectura y construcción", hero: "LEVANTA. DISEÑA. CONSTRUYE.", image: "/images/sector_arquitectura_construccion.png", summary: "Documenta el estado actual del inmueble y convierte la captura en información útil para diseño, remodelación y construcción.", recommended: "Advanced", tourTitle: "Demo de arquitectura y construcción", tourUrl: "https://youriguide.com/56c4afe2-1548-495b-ac08-44ef56cc979e", uses: ["Levantamiento del estado existente", "Referencia para diseño y remodelación", "Coordinación de información para construcción"] },
  { slug: "seguros-restauracion", name: "Seguros y restauración", hero: "DOCUMENTA. COMPARA. RESTAURA.", image: "/images/sector_seguros_restauracion.png", summary: "Organiza un registro visual, mediciones y condiciones del inmueble para apoyar procesos de documentación y restauración.", recommended: "Según el nivel de documentación", tourTitle: "Demo de seguros y restauración", tourUrl: "https://youriguide.com/664e7263-4c29-4c6a-9b35-b4b98cf8bf57", uses: ["Registro visual navegable", "Consulta de condiciones y medidas", "Apoyo documental antes y después de una intervención"] },
  { slug: "evacuacion-emergencia", name: "Evacuación y emergencia", hero: "ORIENTA. SEÑALIZA. PREPARA.", image: "/images/sector_evacuacion_emergencia.png", summary: "Convierte la distribución del inmueble en una base clara para planos de evacuación y recursos de orientación.", recommended: "Según el alcance del proyecto", tourTitle: "Demo de instalaciones", tourUrl: "https://youriguide.com/v4H2RMIUYYJDD1", uses: ["Rutas, salidas y puntos de encuentro", "Ubicación de extintores, alarmas y primeros auxilios", "Señalización de «usted está aquí»"] },
] as const;

export const sectorBySlug = Object.fromEntries(sectors.map((sector) => [sector.slug, sector])) as Record<string, (typeof sectors)[number]>;
