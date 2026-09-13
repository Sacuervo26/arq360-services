import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCta } from "@/components/home/FinalCta";
import { ServicePage, SolutionPage, PackagePage, ProjectPage } from "@/components/site/DetailPages";
import { ServicesLanding, SolutionsLanding, ProjectsLanding, PlanixPage, AboutPage } from "@/components/site/LandingPages";
import { ContactPage } from "@/components/site/SpecialPages";
import { services, serviceBySlug } from "@/data/services";
import { solutions, solutionBySlug } from "@/data/solutions";
import { packages, packageBySlug } from "@/data/packages";
import { projects, projectBySlug } from "@/data/projects";

const topRoutes = ["servicios", "soluciones", "planix-r1", "proyectos", "nosotros", "contacto"];

export function generateStaticParams() {
  return [
    ...topRoutes.map(slug => ({ slug: [slug] })),
    ...services.map(item => ({ slug: ["servicios", item.slug] })),
    ...packages.map(item => ({ slug: ["servicios", item.slug] })),
    ...solutions.map(item => ({ slug: ["soluciones", item.slug] })),
    ...projects.map(item => ({ slug: ["proyectos", item.slug] })),
  ];
}

export const dynamicParams = false;

function resolveTitle(slug: string[]) {
  const [group, id] = slug;
  if (group === "servicios" && id) return packageBySlug[id]?.name ?? serviceBySlug[id]?.title;
  if (group === "soluciones" && id) return solutionBySlug[id]?.eyebrow;
  if (group === "proyectos" && id) return projectBySlug[id]?.title;
  return ({ servicios: "Servicios", soluciones: "Soluciones", "planix-r1": "PLANIX R1 Colombia", proyectos: "Proyectos", nosotros: "Nosotros", contacto: "Contacto" } as Record<string, string>)[group];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = resolveTitle(slug);
  return title ? { title: `${title} | ARQ360 Services`, description: `${title}: captura espacial, recorridos, planos y documentación técnica en Colombia.`, alternates: { canonical: `/${slug.join("/")}` } } : {};
}

export default async function SiteRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const [group, id] = slug;
  let content: React.ReactNode = null;
  if (slug.length === 1) content = group === "servicios" ? <ServicesLanding/> : group === "soluciones" ? <SolutionsLanding/> : group === "planix-r1" ? <PlanixPage/> : group === "proyectos" ? <ProjectsLanding/> : group === "nosotros" ? <AboutPage/> : group === "contacto" ? <ContactPage/> : null;
  else if (slug.length === 2 && group === "servicios" && packageBySlug[id]) content = <PackagePage item={packageBySlug[id]}/>;
  else if (slug.length === 2 && group === "servicios" && serviceBySlug[id]) content = <ServicePage service={serviceBySlug[id]}/>;
  else if (slug.length === 2 && group === "soluciones" && solutionBySlug[id]) content = <SolutionPage solution={solutionBySlug[id]}/>;
  else if (slug.length === 2 && group === "proyectos" && projectBySlug[id]) content = <ProjectPage project={projectBySlug[id]}/>;
  if (!content) notFound();
  return <main><Navbar/>{content}<FinalCta/><Footer/></main>;
}
