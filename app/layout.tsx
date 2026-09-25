import type { Metadata, Viewport } from "next";
import { GeistMono, GeistSans } from "geist/font";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { NewNavbar } from "@/components/layout/NewNavbar";
import { NewFooter } from "@/components/layout/NewFooter";
import { CONTACT_EMAIL, COVERAGE_CITY } from "@/config/contact";
import { LEGAL_NAME, SITE_NAME, SITE_URL } from "@/config/site";
import "./globals.css";
import "./redesign.css";
import "./responsive-fixes.css";
import "./final-redesign.css";

export const metadata:Metadata={
  metadataBase:new URL(SITE_URL),
  title:{default:"ARQ360 Services | Captura espacial y documentación en Bogotá",template:"%s"},
  description:"Recorridos virtuales, planos, mediciones y documentación técnica con tecnología iGUIDE en Bogotá D.C.",
  alternates:{canonical:"/"},
  openGraph:{type:"website",locale:"es_CO",url:"/",siteName:SITE_NAME,title:"ARQ360 Services | Captura espacial profesional",description:"Digitalizamos inmuebles y convertimos cada captura en información visual y técnica útil.",images:[{url:"/images/hero-architecture-v3.png",width:1920,height:1080,alt:"ARQ360 Services"}]},
  twitter:{card:"summary_large_image",title:"ARQ360 Services",description:"Captura espacial, recorridos virtuales, planos y documentación técnica.",images:["/images/hero-architecture-v3.png"]},
  keywords:["captura espacial Bogotá","escaneo 3D Bogotá","recorridos virtuales 3D","planos y mediciones","levantamiento arquitectónico digital","iGUIDE Colombia"],
};

const organizationJsonLd={
  "@context":"https://schema.org","@type":"ProfessionalService",name:SITE_NAME,legalName:LEGAL_NAME,url:SITE_URL,email:CONTACT_EMAIL,
  areaServed:{"@type":"City",name:COVERAGE_CITY},address:{"@type":"PostalAddress",addressLocality:COVERAGE_CITY,addressCountry":"CO"},
};

export const viewport:Viewport={themeColor:"#ffffff",colorScheme:"light"};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return <html lang="es"><head><link rel="preconnect" href="https://youriguide.com"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd).replace(/</g,"\\u003c")}}/></head><body className={`${GeistSans.variable} ${GeistMono.variable}`}><NewNavbar/><main>{children}</main><NewFooter/><WhatsAppFloatingButton/></body></html>;
}
