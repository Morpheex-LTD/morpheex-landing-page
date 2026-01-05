import { CTA } from "@/components/cta/cta";
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
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand/20 via-brand-accent/20 to-brand/20" />

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
                    <ArrowRight className="w-8 h-8 text-brand/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <CTA
          title="Ready to Start Your Transformation?"
          description="Every successful cloud migration starts with understanding your unique infrastructure. Book a free consultation to begin your morphing journey."
          primaryButtonText="Start Discovery Phase"
          primaryButtonHref="/contact"
          secondaryButtonText="View Case Studies"
          secondaryButtonHref="/success"
          variant="brand"
        />
      </div>
    </PageContainer>
  );
}
