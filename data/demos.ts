export const iguideDemos = [
  { id: "inmobiliario", label: "INMOBILIARIO", title: "1121 Sample Road", url: "https://youriguide.com/urwkb_1121_sample_road_kitchener_on", solutionHref: "/sectores/inmobiliario" },
  { id: "arquitectura", label: "ARQUITECTURA", title: "Muestra de prediseño", url: "https://youriguide.com/56c4afe2-1548-495b-ac08-44ef56cc979e", solutionHref: "/sectores/arquitectura-construccion" },
  { id: "construccion", label: "CONSTRUCCIÓN", title: "Antes y después de construcción", url: "https://youriguide.com/pre_and_post_construction", solutionHref: "/sectores/arquitectura-construccion" },
  { id: "seguros", label: "SEGUROS", title: "Documentación de propiedad", url: "https://youriguide.com/664e7263-4c29-4c6a-9b35-b4b98cf8bf57", solutionHref: "/sectores/seguros-restauracion" },
  { id: "gestion-instalaciones", label: "OFICINAS", title: "Oficina de demostración", url: "https://youriguide.com/v4H2RMIUYYJDD1", solutionHref: "/proyectos" },
] as const;

export function getIguideEmbedUrl(url: string) {
  const demo = new URL(url);
  demo.pathname = `/embed${demo.pathname.replace(/\/$/, "")}/`;
  demo.searchParams.set("autostart", "1");
  demo.searchParams.set("noinitanimation", "1");
  return demo.toString();
}
