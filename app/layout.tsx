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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ARQ360 Services | Escaneo 3D, Recorridos Virtuales y Planos en Bogotá", template: "%s" },
  description: "Captura espacial iGUIDE, recorridos virtuales, planos, mediciones y documentación técnica en Bogotá.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_CO", url: "/", siteName: SITE_NAME, title: "ARQ360 Services | Escaneo 3D y Planos en Bogotá", description: "Digitalizamos inmuebles y convertimos cada captura en información visual y técnica útil." },
  keywords: ["escaneo 3D Bogotá","recorridos virtuales 3D","planos y mediciones","levantamiento arquitectónico digital","iGUIDE Colombia"],
};

const organizationJsonLd = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: SITE_NAME, legalName: LEGAL_NAME,
  url: SITE_URL, email: CONTACT_EMAIL, areaServed: { "@type": "City", name: COVERAGE_CITY },
  address: { "@type": "PostalAddress", addressLocality: COVERAGE_CITY, addressCountry: "CO" },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><head><link rel="preconnect" href="https://youriguide.com" /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationJsonLd).replace(/</g,"\\u003c")}} /></head><body className={`${GeistSans.variable} ${GeistMono.variable}`}><NewNavbar/><main>{children}</main><NewFooter/><WhatsAppFloatingButton/></body></html>;
}
