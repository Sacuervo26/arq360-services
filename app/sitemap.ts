import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { packages } from "@/data/packages";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://arq360.co";
  const paths = ["", "/servicios", "/soluciones", "/planix-r1", "/proyectos", "/nosotros", "/contacto", ...services.map(item => `/servicios/${item.slug}`), ...packages.map(item => `/servicios/${item.slug}`), ...solutions.map(item => `/soluciones/${item.slug}`), ...projects.map(item => `/proyectos/${item.slug}`)];
  return paths.map((path, index) => ({ url: `${base}${path}`, changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : path.split("/").length === 2 ? .8 : .65 }));
}
