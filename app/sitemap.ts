import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { sectors } from "@/data/redesign";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["","/servicios","/servicios/standard","/servicios/premium","/servicios/advanced","/servicios/comparar","/ejemplos","/ejemplos/standard","/ejemplos/premium","/ejemplos/advanced","/sectores",...sectors.map((item)=>`/sectores/${item.slug}`),"/planix-r1","/nosotros","/contacto"];
  return paths.map((path,index)=>({url:`${SITE_URL}${path}`,changeFrequency:index===0?"weekly":"monthly",priority:index===0?1:path.split("/").length<=2?.8:.7}));
}
