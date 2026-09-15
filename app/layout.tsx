import type { Metadata, Viewport } from "next";
import { GeistMono, GeistSans } from "geist/font";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { SITE_URL } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ARQ360 Services | Captura espacial y documentación técnica",
  description:
    "Captura espacial, recorridos virtuales, planos, mediciones y documentación técnica para proyectos en Colombia.",
  keywords: [
    "escaneo 3D Colombia",
    "recorridos virtuales 3D",
    "planos y mediciones",
    "levantamiento arquitectónico digital",
  ],
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
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}<WhatsAppFloatingButton /></body>
    </html>
  );
}
