import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/paquetes", destination: "/servicios#paquetes", permanent: true },
      { source: "/paquetes/standard", destination: "/servicios/standard", permanent: true },
      { source: "/paquetes/premium", destination: "/servicios/premium", permanent: true },
      { source: "/paquetes/advanced", destination: "/servicios/advanced", permanent: true },
      { source: "/paquetes/:slug", destination: "/servicios#paquetes", permanent: true },
      { source: "/cotizador", destination: "/contacto", permanent: true },
      { source: "/recursos", destination: "/servicios", permanent: true },
    ];
  },
};

export default nextConfig;
