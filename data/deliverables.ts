export type Deliverable = {
  id: string;
  title: string;
  technical?: string;
  summary: string;
  receives: string[];
  idealFor: string[];
  package: string;
  image: string;
};

export const deliverables: Deliverable[] = [
  { id: "cad", title: "PLANOS EDITABLES", technical: "CAD / DWG", summary: "Documentación técnica editable del estado actual de un espacio.", receives: ["Archivos DWG", "PDF", "Capas", "Dimensiones", "Geometría del existente"], idealFor: ["Arquitectura", "Remodelación", "Construcción"], package: "Disponible principalmente en Advanced", image: "/images/site/cad-dwg-hero-clean.png" },
  { id: "bim", title: "MODELO DIGITAL", technical: "BIM / REVIT", summary: "Información digital del espacio para apoyar procesos de arquitectura, coordinación y diseño.", receives: ["Modelo según alcance", "Condiciones existentes", "Documentación de referencia"], idealFor: ["Arquitectura", "Diseño", "Coordinación"], package: "Disponible según alcance del proyecto Advanced", image: "/images/iguide/3d-model-reference.png" },
  { id: "nube-puntos", title: "NUBE DE PUNTOS", technical: "DATOS LiDAR", summary: "Representación espacial del entorno para levantamientos y flujos técnicos.", receives: ["Datos espaciales", "Geometría de referencia", "Registro del entorno"], idealFor: ["Levantamientos", "CAD", "BIM"], package: "Disponible principalmente en Advanced", image: "/images/planix/planix-scanned-room-effect-reference.png" },
  { id: "elevaciones", title: "ELEVACIONES EXTERIORES", summary: "Representación técnica de fachadas y elementos exteriores del inmueble.", receives: ["Fachadas", "Aberturas", "Alturas y elementos exteriores según alcance"], idealFor: ["Arquitectura", "Remodelación", "Construcción"], package: "Disponible como entregable adicional", image: "/images/iguide/exterior-elevations-reference.png" },
  { id: "cubierta", title: "PLANO DE CUBIERTA", summary: "Documentación gráfica de la geometría y configuración de la cubierta.", receives: ["Contorno", "Geometría", "Pendientes cuando corresponda"], idealFor: ["Diseño", "Mantenimiento", "Seguros"], package: "Disponible como entregable adicional", image: "/images/iguide/roof-plan-reference.png" },
  { id: "cielo-reflejado", title: "PLANO DE CIELO REFLEJADO", technical: "RCP", summary: "Documenta cielos, luminarias, alturas y elementos superiores cuando el proyecto lo requiere.", receives: ["Luminarias", "Elementos superiores", "Alturas cuando aplique"], idealFor: ["Arquitectura interior", "Coordinación", "Remodelación"], package: "Disponible como entregable adicional", image: "/images/iguide/reflected-ceiling-reference.png" },
  { id: "implantacion", title: "PLANO DE IMPLANTACIÓN", technical: "SITE PLAN", summary: "Representa la relación entre el inmueble y su entorno inmediato.", receives: ["Implantación", "Accesos", "Elementos exteriores acordados"], idealFor: ["Planeación", "Diseño", "Documentación"], package: "Disponible según condiciones y alcance", image: "/images/site/cad-dwg-hero-clean.png" },
  { id: "etiquetas", title: "ETIQUETAS ESPACIALES", technical: "FOTOS · NOTAS · INFORMACIÓN", summary: "Añade fotografías, observaciones, equipos y referencias directamente sobre el espacio digital.", receives: ["Fotografías", "Notas", "Observaciones", "Referencias vinculadas"], idealFor: ["Inspección", "Seguros", "Registro de activos"], package: "Disponible según alcance", image: "/images/iguide/iguide-tags-reference.png" },
  { id: "reportes", title: "REPORTES DEL ESPACIO", summary: "Información organizada y compartible para documentación y toma de decisiones.", receives: ["Información del inmueble", "Documentación", "Datos disponibles según alcance"], idealFor: ["Archivo", "Presentación", "Colaboración"], package: "Disponible según paquete y alcance", image: "/images/iguide/iguide-analytics-reference.png" },
];

export const deliverableById = Object.fromEntries(deliverables.map((item) => [item.id, item])) as Record<string, Deliverable>;
