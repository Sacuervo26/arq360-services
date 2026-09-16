import type { Metadata } from "next";
import { HomePage } from "@/components/site/RedesignPages";

export const metadata: Metadata = {
  title: "ARQ360 Services | Escaneo 3D, Recorridos Virtuales y Planos en Bogotá",
  description: "Digitalización de inmuebles con tecnología iGUIDE: recorridos virtuales, planos, mediciones y documentación técnica en Bogotá.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomePage />;
}
