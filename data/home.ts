export const deliverables = [
  { title: "RECORRIDO VIRTUAL 3D", note: "Explora y comparte el espacio", image: "/images/hero-architecture-v3.png", href: "/servicios#standard" },
  { title: "PLANOS 2D", note: "Comprende la distribución", image: "/images/site/cad-dwg-hero-clean.png", href: "/servicios#standard" },
  { title: "MEDICIONES DEL ESPACIO", note: "Consulta dimensiones y áreas", image: "/images/planix/planix-scanned-room-effect-reference.png", href: "/servicios#comparador" },
  { title: "PLANOS EDITABLES", note: "CAD / DWG", image: "/images/site/cad-dwg-hero-clean.png", href: "/servicios?detalle=cad#entregables" },
  { title: "MODELO DIGITAL", note: "BIM / REVIT", image: "/images/iguide/3d-model-reference.png", href: "/servicios?detalle=bim#entregables" },
  { title: "NUBE DE PUNTOS", note: "Datos LiDAR", image: "/images/planix/planix-scanned-room-effect-reference.png", href: "/servicios?detalle=nube-puntos#entregables" },
  { title: "REPORTES DEL ESPACIO", note: "Información organizada", image: "/images/iguide/iguide-analytics-reference.png", href: "/servicios?detalle=reportes#entregables" },
] as const;

export const planixFeatures = [
  { title: "CAPTURA PROFESIONAL 360°", description: "Cobertura visual inmersiva del espacio." },
  { title: "LiDAR", description: "Medición espacial integrada al flujo de captura." },
  { title: "FLUJO DE CAPTURA RÁPIDO", description: "Registro ágil para proyectos en campo." },
  { title: "BATERÍA INTERCAMBIABLE", description: "Continuidad operativa durante la jornada." },
  { title: "DATOS ESPACIALES", description: "Información lista para múltiples entregables." },
  { title: "FLUJO PROFESIONAL", description: "Captura, proceso y entrega dentro de una metodología coordinada." },
] as const;

export const workflow = [
  { title: "CUÉNTANOS QUÉ NECESITAS", text: "Cuéntanos qué espacio deseas digitalizar y qué información necesitas recibir.", microcopy: "Te ayudamos a definir el nivel y los entregables.", href: "/contacto" },
  { title: "CAPTURAMOS TU ESPACIO", text: "Coordinamos la visita y realizamos la captura espacial profesional.", microcopy: "Una captura puede alimentar múltiples resultados." },
  { title: "PROCESAMOS LA INFORMACIÓN", text: "Generamos los entregables seleccionados para tu proyecto.", microcopy: "Visualización · Planos · Mediciones · Información técnica" },
  { title: "RECIBES TUS ENTREGABLES", text: "Obtén información lista para vender, diseñar, documentar, construir o gestionar.", microcopy: "Acceso digital y archivos según alcance.", href: "/servicios" },
] as const;

export const industries = [
  { title: "INMOBILIARIO", text: "Presenta mejor cada propiedad.", href: "/sectores/inmobiliario", position: "0%" },
  { title: "ARQUITECTURA Y CONSTRUCCIÓN", text: "Levanta y documenta en tiempo récord.", href: "/sectores/arquitectura-construccion", position: "33%" },
  { title: "SEGUROS Y RESTAURACIÓN", text: "Documenta con precisión.", href: "/sectores/seguros-restauracion", position: "66%" },
  { title: "PLANOS DE EVACUACIÓN", text: "Información para espacios más seguros.", href: "/sectores/evacuacion-emergencias", position: "100%" },
] as const;

export const technicalOutputs = [
  { title: "PLANOS EDITABLES · CAD / DWG", image: "/images/site/cad-dwg-hero-clean.png", text: "Documentación editable para continuar trabajando en software de dibujo y diseño." },
  { title: "PLANO DE CUBIERTA", image: "/images/iguide/roof-plan-reference.png", text: "Documentación gráfica de la geometría y configuración de la cubierta." },
  { title: "ELEVACIONES EXTERIORES", image: "/images/site/cad-dwg-hero-clean.png", text: "Elevaciones técnicas derivadas del levantamiento espacial." },
  { title: "PLANO DE CIELO REFLEJADO · RCP", image: "/images/iguide/reflected-ceiling-reference.png", text: "Cielos, luminarias, alturas y elementos superiores organizados para coordinación." },
  { title: "MODELO DIGITAL · BIM / REVIT", image: "/images/iguide/3d-model-reference.png", text: "Información digital del espacio para apoyar arquitectura, coordinación y diseño." },
  { title: "NUBE DE PUNTOS · DATOS LiDAR", image: "/images/planix/planix-scanned-room-effect-reference.png", text: "Representación espacial del entorno para levantamientos y flujos técnicos." },
] as const;

export const footerLinks = ["INICIO", "SERVICIOS", "PLANIX R1", "PROYECTOS", "NOSOTROS", "CONTACTO"] as const;
