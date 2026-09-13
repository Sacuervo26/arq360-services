export const navigation = [
  { label: "INICIO", href: "/" },
  { label: "SERVICIOS", href: "/servicios" },
  { label: "SOLUCIONES", href: "/soluciones" },
  { label: "PLANIX R1", href: "/planix-r1" },
  { label: "PROYECTOS", href: "/proyectos" },
  { label: "NOSOTROS", href: "/nosotros" },
] as const;

export const contactLink = { label: "CONTÁCTANOS", href: "/contacto" } as const;

export const serviceNavGroups = [
  { title: "CAPTURA Y EXPERIENCIA", links: [["Recorrido virtual 3D", "/servicios/recorridos-3d"], ["Planos 2D", "/servicios/planos"], ["Mediciones", "/servicios/mediciones"], ["Nube de puntos", "/servicios/point-cloud"]] },
  { title: "DOCUMENTACIÓN TÉCNICA", links: [["CAD / DWG", "/servicios/cad-dwg"], ["BIM / Revit", "/servicios/bim-revit"], ["Elevaciones", "/servicios/elevaciones"], ["Plano de cubierta", "/servicios/roof-plans"], ["Plano de cielo reflejado", "/servicios/reflected-ceiling-plans"], ["Plano de sitio", "/servicios/site-plans"]] },
  { title: "INFORMACIÓN DEL ESPACIO", links: [["Etiquetas espaciales", "/servicios/real-time-tags"], ["Reportes", "/servicios/reportes"]] },
  { title: "NIVELES DE SERVICIO", links: [["Standard", "/servicios/standard"], ["Premium", "/servicios/premium"], ["Advanced", "/servicios/advanced"]] },
] as const;

export const footerGroups = [
  { title: "SERVICIOS", links: [["Recorrido 3D", "/servicios/recorridos-3d"], ["Planos", "/servicios/planos"], ["Mediciones", "/servicios/mediciones"], ["CAD / DWG", "/servicios/cad-dwg"], ["BIM / Revit", "/servicios/bim-revit"], ["Nube de puntos", "/servicios/point-cloud"]] },
  { title: "PAQUETES", links: [["Standard", "/servicios/standard"], ["Premium", "/servicios/premium"], ["Advanced", "/servicios/advanced"]] },
  { title: "SOLUCIONES", links: [["Inmobiliario", "/soluciones/inmobiliarias"], ["Arquitectura", "/soluciones/arquitectura"], ["Construcción", "/soluciones/construccion"], ["Seguros y restauración", "/soluciones/seguros-restauracion"], ["Gestión de instalaciones", "/soluciones/gestion-instalaciones"]] },
  { title: "EMPRESA", links: [["Nosotros", "/nosotros"], ["Proyectos", "/proyectos"], ["Contacto", "/contacto"]] },
  { title: "PRODUCTO", links: [["PLANIX R1", "/planix-r1"]] },
] as const;
