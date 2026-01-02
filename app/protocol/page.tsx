import { PageContainer, PageHeader, ProcessStepCard } from "@/components/page";
import { ArrowRight, Rocket, Search, Settings, Sparkles, Target } from "lucide-react";

export default function ProtocolPage() {
  const steps = [
    {
      id: "01",
      label: "Discovery",
      title: "Infrastructure Audit",
      description:
        "Deep-dive technical assessment of your existing architecture, identifying bottlenecks, security gaps, and migration opportunities.",
      icon: Search,
      color: "from-purple-500 to-indigo-500",
      deliverables: [
        "System architecture diagram",
        "Cloud readiness report",
        "Cost-benefit analysis",
      ],
      duration: "1-2 weeks",
    },
    {
      id: "02",
      label: "Prototype",
      title: "Proof of Concept",
      description:
        "Build a working MVP of your cloud-native solution using AWS services. Test performance, validate architecture decisions, and refine the approach.",
      icon: Settings,
      color: "from-indigo-500 to-cyan-500",
      deliverables: [
        "Working prototype environment",
        "Performance benchmarks",
        "Technical documentation",
      ],
      duration: "2-3 weeks",
    },
    {
      id: "03",
      label: "Execute",
      title: "Migration Wave",
      description:
        "Phased rollout with zero downtime. We migrate services incrementally, monitor performance, and ensure business continuity throughout the process.",
      icon: Rocket,
      color: "from-cyan-500 to-violet-500",
      deliverables: [
        "Production deployment",
        "Monitoring dashboards",
        "Rollback procedures",
      ],
      duration: "4-8 weeks",
    },
    {
      id: "04",
      label: "Optimize",
      title: "FinOps & AI Layering",
      description:
        "Fine-tune cost efficiency, implement auto-scaling policies, and layer AI/ML capabilities for intelligent automation and insights.",
      icon: Sparkles,
      color: "from-violet-500 to-purple-500",
      deliverables: [
        "Cost optimization report",
        "Auto-scaling configurations",
        "AI/ML integration roadmap",
      ],
      duration: "Ongoing",
    },
  ];

  return (
    <PageContainer gradientPosition="center">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          badgeIcon={Target}
          badgeText="Our Battle-Tested Process"
          title="THE MORPHEEX PROTOCOL"
          description="A systematic approach to cloud transformation that minimizes risk while maximizing value. Every step is designed to keep your business running while we rebuild the engine."
          centered
        />

        {/* Timeline Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20" />

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative">
                <ProcessStepCard
                  id={step.id}
                  label={step.label}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  color={step.color}
                  deliverables={step.deliverables}
                  duration={step.duration}
                />

                {/* Arrow Between Steps (Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-purple-500/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-3xl p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Every successful cloud migration starts with understanding your
              unique infrastructure. Book a free consultation to begin your
              morphing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-full font-bold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Discovery Phase
              </button>
              <button
                type="button"
                className="px-8 py-4 border border-purple-500/30 bg-transparent hover:bg-purple-500/10 rounded-full font-semibold text-white transition-all flex items-center gap-2"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
