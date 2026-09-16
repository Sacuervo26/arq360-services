import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { AboutPage, ComparePage, ContactPage, ExampleDetailPage, ExamplesPage, PlanixPage, SectorDetailPage, SectorsPage, ServiceDetailPage, ServicesPage } from "@/components/site/RedesignPages";
import { packages, sectorBySlug, sectors, type PackageId } from "@/data/redesign";

const packageIds: PackageId[] = ["standard", "premium", "advanced"];
const staticRoutes = [["servicios"],["servicios","standard"],["servicios","premium"],["servicios","advanced"],["servicios","comparar"],["ejemplos"],["ejemplos","standard"],["ejemplos","premium"],["ejemplos","advanced"],["sectores"],...sectors.map(s=>["sectores",s.slug]),["planix-r1"],["nosotros"],["contacto"]];

export function generateStaticParams() {
  return staticRoutes.map((slug) => ({ slug }));
}

const pageMeta: Record<string, [string,string]> = {
  servicios: ["Servicios iGUIDE | ARQ360 Services","Compara iGUIDE Standard, Premium y Advanced para elegir recorridos, planos o documentación técnica."],
  "servicios/standard": ["iGUIDE Standard Bogotá | Recorrido Virtual y Planos | ARQ360","Recorrido virtual 3D, planos codificados por color y mediciones para presentar y comprender inmuebles."],
  "servicios/premium": ["iGUIDE Premium Bogotá | Planos Detallados | ARQ360","Todo iGUIDE Standard más planos detallados con objetos, accesorios y compatibilidad VR."],
  "servicios/advanced": ["iGUIDE Advanced Bogotá | CAD, DWG y LiDAR | ARQ360","Documentación técnica con planos CAD DWG LOD 200, nube de puntos DXF, PDF y recorrido 3D."],
  "servicios/comparar": ["Comparar servicios iGUIDE | ARQ360 Services","Compara los alcances de iGUIDE Standard, Premium y Advanced."],
  ejemplos: ["Ejemplos iGUIDE | ARQ360 Services","Explora ejemplos interactivos separados por servicio Standard, Premium y Advanced."],
  sectores: ["Sectores | ARQ360 Services","Aplicaciones de captura espacial para inmobiliario, arquitectura, construcción, seguros y evacuación."],
  "planix-r1": ["PLANIX R1 Colombia | Servicio de Captura y Compra | ARQ360","Conoce el sistema PLANIX R1 y consulta el servicio de captura o la compra del equipo en Colombia."],
  nosotros: ["Nosotros | ARQ360 Services","Conoce el enfoque de ARQ360 para transformar inmuebles en información visual y técnica útil."],
  contacto: ["Contacto | ARQ360 Services","Solicita una cotización de captura espacial iGUIDE con ARQ360 Services en Bogotá."],
};

function resolveMeta(path:string):[string,string] {
  if(pageMeta[path]) return pageMeta[path];
  const [group,id]=path.split("/");
  if(group==="ejemplos"&&id&&id in packages) return [`Ejemplo ${packages[id as PackageId].name} | ARQ360`,`Explora un ejemplo interactivo relacionado con ${packages[id as PackageId].name}.`];
  if(group==="sectores"&&id&&sectorBySlug[id]) return [`${sectorBySlug[id].name} | Soluciones ARQ360`,sectorBySlug[id].summary];
  return ["ARQ360 Services","Captura espacial, recorridos virtuales, planos y documentación técnica."];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug }=await params; const path=slug.join("/"); const [title,description]=resolveMeta(path);
  return { title, description, alternates:{canonical:`/${path}`}, openGraph:{title,description,url:`/${path}`} };
}

export default async function SiteRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug }=await params; const [group,id]=slug;

  if(group==="proyectos") permanentRedirect("/ejemplos");
  if(group==="sectores"&&id==="evacuacion-emergencias") permanentRedirect("/sectores/evacuacion-emergencia");

  let content:React.ReactNode=null;
  if(slug.length===1) {
    content=group==="servicios"?<ServicesPage/>:group==="ejemplos"?<ExamplesPage/>:group==="sectores"?<SectorsPage/>:group==="planix-r1"?<PlanixPage/>:group==="nosotros"?<AboutPage/>:group==="contacto"?<ContactPage/>:null;
  } else if(slug.length===2&&group==="servicios"&&packageIds.includes(id as PackageId)) {
    content=<ServiceDetailPage id={id as PackageId}/>;
  } else if(slug.length===2&&group==="servicios"&&id==="comparar") {
    content=<ComparePage/>;
  } else if(slug.length===2&&group==="ejemplos"&&packageIds.includes(id as PackageId)) {
    content=<ExampleDetailPage id={id as PackageId}/>;
  } else if(slug.length===2&&group==="sectores"&&sectorBySlug[id]) {
    content=<SectorDetailPage sector={sectorBySlug[id]}/>;
  }

  if(!content) notFound();
  return content;
}
