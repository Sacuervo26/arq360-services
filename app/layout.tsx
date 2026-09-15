import type { Metadata, Viewport } from "next";
import { GeistMono, GeistSans } from "geist/font";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { CONTACT_EMAIL, COVERAGE_CITY } from "@/config/contact";
import { LEGAL_NAME, SITE_NAME, SITE_URL } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ARQ360 Services | Captura espacial y documentación técnica",
  description:
    "Captura espacial, recorridos virtuales, planos, mediciones y documentación técnica para proyectos en Colombia.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: SITE_NAME,
    title: "ARQ360 Services | Captura espacial y documentación técnica",
    description:
      "Captura espacial, recorridos virtuales, planos, mediciones y documentación técnica para proyectos en Colombia.",
  },
  keywords: [
    "escaneo 3D Colombia",
    "recorridos virtuales 3D",
    "planos y mediciones",
    "levantamiento arquitectónico digital",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: COVERAGE_CITY,
    addressCountry: "CO",
  },
};

export const viewport: Viewport = {
  themeColor: "#020810",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://youriguide.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}<WhatsAppFloatingButton /></body>
    </html>
  );
}
