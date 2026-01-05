import { CaseStudy } from "@/components/case-study";
import LandingPageHero from "@/components/hero/landing-page-hero";
import ReadyToMorph from "@/components/ready-to-morph";
import Services from "@/components/services";
import { StructuredData } from "@/components/structured-data";
import Value from "@/components/value";

export default function MorpheexLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-selection">
      <StructuredData />
      {/* --- GRID & GRADIENT OVERLAY --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(var(--grid-pattern) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse bg-gradient-glow-primary" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse delay-700 bg-gradient-glow-secondary" />
      </div>

      {/* --- HERO SECTION --- */}
      <LandingPageHero />

      {/* --- THE MULTIPLIER EFFECT (Bento Grid) --- */}
      <Services />

      <CaseStudy />

      <Value />

      <ReadyToMorph />
    </div>
  );
}
