import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { MetricsBar } from "@/components/home/MetricsBar";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { DeliverablesSection } from "@/components/home/DeliverablesSection";
import { PlanixSection } from "@/components/home/PlanixSection";
import { WorkflowSection } from "@/components/home/WorkflowSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TechnicalOutputsSection } from "@/components/home/TechnicalOutputsSection";
import { ColombiaCta } from "@/components/home/ColombiaCta";
import { PackagesSection } from "@/components/home/PackagesSection";
import { FinalCta } from "@/components/home/FinalCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MetricsBar />
      <ExperienceSection />
      <DeliverablesSection />
      <PackagesSection />
      <PlanixSection />
      <WorkflowSection />
      <IndustriesSection />
      <TechnicalOutputsSection />
      <ColombiaCta />
      <FinalCta />
      <Footer />
    </main>
  );
}
