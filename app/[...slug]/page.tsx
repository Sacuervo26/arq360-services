import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { AboutPage, ComparePage, ContactPage, PlanixPage, SectorDetailPage, SectorsPage, ServiceDetailPage, ServicesPage } from "@/components/site/RedesignPages";
import { packages, sectorBySlug, sectors, type PackageId } from "@/data/redesign";

const packageIds: PackageId[] = ["standard","premium","advanced"];
const staticRoutes = [["servicios"],["servicios","standard"],["servicios","premium"],["servicios","advanced"],["servicios","comparar"],["sectores"],...sectors.map(s=>["sectores",s.slug]),["planix-r1"],["nosotros"],["contacto"]];

export function generateStaticParams(){return staticRoutes.map(slug=>({slug}));}

const pageMeta:Record<string,[string,string]>={
  servicios:["Servicios iGUIDE | ARQ360 Services","Compara Standard, Premium y Advanced para elegir recorridos, planos o documentación técnica."],
  "servicios/standard":["iGUIDE Standard Bogotá | ARQ360 Services","Recorrido virtual 3D, planos, mediciones y cálculo de áreas para presentar inmuebles."],
  "servicios/premium":["iGUIDE Premium Bogotá | ARQ360 Services","Todo Standard con planos detallados, objetos, elementos fijos y equipamiento."],
  "servicios/advanced":["iGUIDE Advanced Bogotá | ARQ360 Services","Recorrido Premium, planos técnicos PDF, CAD DWG y nube de puntos LiDAR DXF."],
  "servicios/comparar":["Comparar servicios iGUIDE | ARQ360 Services","Compara los alcances de Standard, Premium y Advanced."],
  sectores:["Sectores | ARQ360 Services","Captura espacial para inmobiliario, arquitectura, construcción, seguros, restauración y evacuación."],
  "planix-r1":["PLANIX R1 Colombia | ARQ360 Services","Conoce PLANIX R1 y consulta el servicio de captura o la compra del equipo."],
  nosotros:["Nosotros | ARQ360 Services","Conoce cómo ARQ360 transforma inmuebles en información visual y técnica útil."],
  contacto:["Contacto | ARQ360 Services","Solicita una cotización de captura espacial iGUIDE en Bogotá D.C."],
};

function resolveMeta(path:string):[string,string]{
  if(pageMeta[path]) return pageMeta[path];
  const [group,id]=path.split("/");
  if(group==="sectores"&&id&&sectorBySlug[id]) return [`${sectorBySlug[id].name} | ARQ360 Services`,sectorBySlug[id].summary];
  return ["ARQ360 Services","Captura espacial, recorridos virtuales, planos y documentación técnica."];
}

export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{
  const {slug}=await params; const path=slug.join("/"); const [title,description]=resolveMeta(path);
  return {title,description,alternates:{canonical:`/${path}`},openGraph:{title,description,url:`/${path}`}};
}

export default async function SiteRoute({params}:{params:Promise<{slug:string[]}>}){
  const {slug}=await params; const [group,id]=slug;
  if(group==="ejemplos") permanentRedirect(id&&packageIds.includes(id as PackageId)?`/servicios/${id}`:"/servicios");
  if(group==="proyectos") permanentRedirect("/sectores");
  if(group==="sectores"&&id==="evacuacion-emergencias") permanentRedirect("/sectores/evacuacion-emergencia");
  let content:React.ReactNode=null;
  if(slug.length===1) content=group==="servicios"?<ServicesPage/>:group==="sectores"?<SectorsPage/>:group==="planix-r1"?<PlanixPage/>:group==="nosotros"?<AboutPage/>:group==="contacto"?<ContactPage/>:null;
  else if(slug.length===2&&group==="servicios"&&packageIds.includes(id as PackageId)) content=<ServiceDetailPage id={id as PackageId}/>;
  else if(slug.length===2&&group==="servicios"&&id==="comparar") content=<ComparePage/>;
  else if(slug.length===2&&group==="sectores"&&sectorBySlug[id]) content=<SectorDetailPage sector={sectorBySlug[id]}/>;
  if(!content) notFound();
  return content;
}
