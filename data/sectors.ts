export type Sector = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  includes: string[];
  package: "standard" | "premium" | "advanced";
  demoId?: string;
  image: string;
  cta: string;
};

export const sectors: Sector[] = [
  {
    slug: "inmobiliario", eyebrow: "SECTOR INMOBILIARIO", title: "MUESTRA MÁS. FACILITA LA DECISIÓN.",
    summary: "Permite a compradores y arrendatarios comprender la propiedad antes de visitarla mediante recorridos, planos y mediciones.",
    benefitsTitle: "¿QUÉ GANA TU INMOBILIARIA?", package: "standard", demoId: "inmobiliario", image: "/images/iguide/iguide-interactive-tour-reference.png", cta: "DIGITALIZAR UNA PROPIEDAD",
    benefits: [
      { title: "MEJORES PUBLICACIONES", text: "Complementa fotografías y descripciones con una experiencia completa del inmueble." },
      { title: "CLIENTES MEJOR INFORMADOS", text: "Permite conocer distribución, dimensiones y relación entre espacios antes de una visita." },
      { title: "MENOS VISITAS IMPRODUCTIVAS", text: "El interesado puede evaluar previamente si la propiedad se ajusta a sus necesidades." },
      { title: "MAYOR CONFIANZA", text: "Presenta información visual y dimensional más clara." },
      { title: "DIFERENCIACIÓN", text: "Ofrece una experiencia comercial más completa que una publicación tradicional." },
      { title: "MATERIAL COMPARTIBLE", text: "Comparte un enlace para recorrer, consultar planos y comprender la propiedad." },
    ],
    includes: ["Recorrido virtual 3D", "Planos 2D", "Mediciones del espacio", "Enlace compartible"],
  },
  {
    slug: "arquitectura-construccion", eyebrow: "ARQUITECTURA Y CONSTRUCCIÓN", title: "CAPTURA EL EXISTENTE. DISEÑA Y CONSTRUYE CON MEJOR INFORMACIÓN.",
    summary: "Levantamientos espaciales para arquitectura, remodelación y construcción con planos, mediciones y documentación técnica.",
    benefitsTitle: "DEL ESTADO ACTUAL AL PROYECTO", package: "advanced", demoId: "arquitectura", image: "/images/site/cad-dwg-hero-clean.png", cta: "COTIZAR LEVANTAMIENTO",
    benefits: [
      { title: "LEVANTAMIENTOS MÁS ÁGILES", text: "Reduce el tiempo dedicado a registrar manualmente un espacio." },
      { title: "INFORMACIÓN CENTRALIZADA", text: "Consulta recorridos, planos, medidas y documentación desde un mismo proyecto." },
      { title: "MENOS VISITAS DE VERIFICACIÓN", text: "Revisa nuevamente condiciones del espacio sin desplazarte cada vez." },
      { title: "BASE PARA DISEÑO", text: "Utiliza la información capturada para apoyar flujos CAD, BIM y documentación técnica." },
      { title: "ANTES · DURANTE · DESPUÉS", text: "Conserva registro visual de diferentes etapas del proyecto." },
    ],
    includes: ["Planos editables CAD / DWG", "Mediciones", "Datos LiDAR", "Modelo digital según alcance", "Documentación as-built"],
  },
  {
    slug: "seguros-restauracion", eyebrow: "SEGUROS Y RESTAURACIÓN", title: "DOCUMENTA ANTES DE QUE LA INFORMACIÓN SE PIERDA.",
    summary: "Registra visualmente las condiciones de un espacio y conserva medidas, planos y evidencia para apoyar procesos de restauración.",
    benefitsTitle: "INFORMACIÓN CLARA PARA REVISAR Y RESTAURAR", package: "premium", demoId: "seguros", image: "/images/iguide/iguide-tags-reference.png", cta: "DOCUMENTAR UN ESPACIO",
    benefits: [
      { title: "REGISTRO VISUAL", text: "Conserva el estado del inmueble en una experiencia consultable." },
      { title: "MEDICIONES Y PLANOS", text: "Relaciona evidencia visual con información dimensional." },
      { title: "FOTOS Y ETIQUETAS", text: "Vincula observaciones y referencias con puntos del espacio." },
      { title: "ANTES Y DESPUÉS", text: "Compara condiciones en diferentes momentos del proceso." },
    ],
    includes: ["Recorrido virtual", "Mediciones", "Planos", "Fotografías y documentación visual", "Comparación antes y después"],
  },
  {
    slug: "evacuacion-emergencias", eyebrow: "PLANOS DE EVACUACIÓN Y EMERGENCIA", title: "CONVIERTE TU PLANO EN INFORMACIÓN PARA LA SEGURIDAD.",
    summary: "A partir del levantamiento del espacio, ARQ360 puede apoyar la elaboración gráfica de planos de instalaciones, rutas y elementos de emergencia para empresas.",
    benefitsTitle: "APOYO GRÁFICO PARA PLANES DE EMERGENCIA", package: "advanced", image: "/images/iguide/cad-floor-plan-reference.png", cta: "COTIZAR PLANO DE EVACUACIÓN",
    benefits: [
      { title: "RUTAS Y SALIDAS", text: "Organiza gráficamente recorridos, salidas y puntos de encuentro." },
      { title: "EQUIPOS DE EMERGENCIA", text: "Ubica extintores, botiquines, camillas, alarmas y otros elementos definidos." },
      { title: "USTED ESTÁ AQUÍ", text: "Prepara referencias de ubicación claras para los usuarios del espacio." },
      { title: "BASE DEL ESPACIO", text: "Relaciona áreas e instalaciones con el levantamiento disponible." },
    ],
    includes: ["Rutas de evacuación", "Salidas", "Puntos de encuentro", "Extintores", "Botiquines y camilla", "Alarmas", "Ubicación «Usted está aquí»", "Áreas y recorridos"],
  },
];

export const sectorBySlug = Object.fromEntries(sectors.map((item) => [item.slug, item])) as Record<string, Sector>;
