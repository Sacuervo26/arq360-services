import type { MetadataRoute } from "next";
import { sectors } from "@/data/sectors";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://arq360.co";
  const paths = [
    "",
    "/servicios",
    "/planix-r1",
    "/proyectos",
    "/nosotros",
    "/contacto",
    ...sectors.map((item) => `/sectores/${item.slug}`),
    ...projects.map((item) => `/proyectos/${item.slug}`),
  ];
  return paths.map((path, index) => ({
    url: `${base}${path}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path.split("/").length === 2 ? 0.8 : 0.65,
  }));
}
