import { CaseStudy } from "@/components/case-study";
import LandingPageHero from "@/components/hero/landing-page-hero";
import ReadyToMorph from "@/components/ready-to-morph";
import Services from "@/components/services";
import Value from "@/components/value";

export default function MorpheexLanding() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-indigo-500/30">
      {/* --- GRID & GRADIENT OVERLAY --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
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
