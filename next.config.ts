import type { NextConfig } from "next";

const legacyAdvancedRoutes = ["cad-dwg","bim-revit","point-cloud","elevaciones","roof-plans","reflected-ceiling-plans","site-plans","real-time-tags","reportes"];

const nextConfig: NextConfig = {
  images: { formats: ["image/avif","image/webp"] },
  async redirects() {
    return [
      { source: "/soluciones", destination: "/sectores", permanent: true },
      { source: "/soluciones/inmobiliarias", destination: "/sectores/inmobiliario", permanent: true },
      { source: "/soluciones/arquitectura", destination: "/sectores/arquitectura-construccion", permanent: true },
      { source: "/soluciones/construccion", destination: "/sectores/arquitectura-construccion", permanent: true },
      { source: "/soluciones/seguros-restauracion", destination: "/sectores/seguros-restauracion", permanent: true },
      { source: "/soluciones/gestion-instalaciones", destination: "/sectores/evacuacion-emergencia", permanent: true },
      { source: "/paquetes", destination: "/servicios", permanent: true },
      { source: "/paquetes/:slug", destination: "/servicios/:slug", permanent: true },
      { source: "/servicios/recorridos-3d", destination: "/servicios/standard", permanent: true },
      { source: "/servicios/planos", destination: "/servicios/standard", permanent: true },
      { source: "/servicios/mediciones", destination: "/servicios/standard", permanent: true },
      ...legacyAdvancedRoutes.map(source=>({source:`/servicios/${source}`,destination:"/servicios/advanced",permanent:true})),
      { source: "/sectores/evacuacion-emergencias", destination: "/sectores/evacuacion-emergencia", permanent: true },
      { source: "/proyectos", destination: "/ejemplos", permanent: true },
      { source: "/proyectos/:slug", destination: "/ejemplos", permanent: true },
      { source: "/cotizador", destination: "/contacto", permanent: true },
      { source: "/recursos", destination: "/servicios", permanent: true },
    ];
  },
};

export default nextConfig;
