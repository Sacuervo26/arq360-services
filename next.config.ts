import type { NextConfig } from "next";

const deliverableRedirects = [
  ["recorridos-3d", ""],
  ["planos", ""],
  ["mediciones", ""],
  ["cad-dwg", "cad"],
  ["bim-revit", "bim"],
  ["point-cloud", "nube-puntos"],
  ["elevaciones", "elevaciones"],
  ["roof-plans", "cubierta"],
  ["reflected-ceiling-plans", "cielo-reflejado"],
  ["site-plans", "implantacion"],
  ["real-time-tags", "etiquetas"],
  ["reportes", "reportes"],
] as const;

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/soluciones", destination: "/#sectores", permanent: true },
      { source: "/soluciones/inmobiliarias", destination: "/sectores/inmobiliario", permanent: true },
      { source: "/soluciones/arquitectura", destination: "/sectores/arquitectura-construccion", permanent: true },
      { source: "/soluciones/construccion", destination: "/sectores/arquitectura-construccion", permanent: true },
      { source: "/soluciones/seguros-restauracion", destination: "/sectores/seguros-restauracion", permanent: true },
      { source: "/soluciones/gestion-instalaciones", destination: "/sectores/evacuacion-emergencias", permanent: true },
      { source: "/paquetes", destination: "/servicios#niveles", permanent: true },
      { source: "/paquetes/:slug", destination: "/servicios#:slug", permanent: true },
      { source: "/servicios/standard", destination: "/servicios#standard", permanent: true },
      { source: "/servicios/premium", destination: "/servicios#premium", permanent: true },
      { source: "/servicios/advanced", destination: "/servicios#advanced", permanent: true },
      ...deliverableRedirects.map(([source, detail]) => ({
        source: `/servicios/${source}`,
        destination: detail ? `/servicios?detalle=${detail}#entregables` : "/servicios",
        permanent: true,
      })),
      { source: "/cotizador", destination: "/contacto", permanent: true },
      { source: "/recursos", destination: "/servicios", permanent: true },
    ];
  },
};

export default nextConfig;
