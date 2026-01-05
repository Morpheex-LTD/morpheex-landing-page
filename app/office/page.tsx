import {
  FeatureCard,
  PageContainer,
  PageHeader,
  StatsCard,
  StatsGrid,
} from "@/components/page";
import {
  Building2,
  CloudIcon,
  Code2,
  Lock,
  Rocket,
  Users,
  Zap,
} from "lucide-react";

export default function OfficePage() {
  const principles = [
    {
      icon: Code2,
      title: "Code Quality Over Speed",
      description:
        "Every line is reviewed, tested, and documented. We believe technical debt is the silent killer of enterprise velocity.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Lock,
      title: "Security by Design",
      description:
        "Zero-trust architecture, encrypted at rest and in transit, IAM best practices enforced from Day 1.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance Engineering",
      description:
        "Sub-100ms API responses, auto-scaling infrastructure, and obsessive latency monitoring across all layers.",
      gradient: "from-cyan-500 to-indigo-500",
    },
    {
      icon: CloudIcon,
      title: "AWS-Native Architecture",
      description:
        "We don't just lift-and-shift. We rebuild using serverless, event-driven patterns that reduce costs by 60%+.",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto">
        <PageHeader
          badgeIcon={Building2}
          badgeText="Where Systems Become Solutions"
          title="THE ARCHITECTURE OFFICE."
        />

        {/* Main Content */}
        <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed mb-20">
          <p className="leading-relaxed">
            Morpheex is not a personality-led agency. We are an{" "}
            <span className="font-semibold bg-linear-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Institutional Partner
            </span>{" "}
            for companies that view infrastructure as a competitive weapon.
          </p>
          <p className="leading-relaxed">
            {` The "Architecture Office" serves as our internal
            think-tank where we deconstruct legacy systems and reconstruct them
            using `}
            <span className="text-brand-accent font-semibold">
              AWS Cloud-Native protocols
            </span>
            {`. We don't chase trends—we engineer foundations that outlast
            them.`}
          </p>
          <p className="leading-relaxed">
            {`Our public leadership is focused on `}
            <span className="text-foreground font-bold italic underline underline-offset-4 decoration-brand">
              Client Strategy & Execution
            </span>
            {`, while our engineering core remains obsessed with code quality,
            security, and velocity. Every architect on our team holds multiple
            AWS certifications and has shipped production-grade systems at
            scale.`}
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <Users className="w-8 h-8 text-brand" />
            Our Engineering Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <FeatureCard
                key={principle.title}
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
                gradient={principle.gradient}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <StatsGrid title="By The Numbers" icon={Rocket}>
          <StatsCard
            value="14+"
            label="AWS Certifications"
            description="Solutions Architect, DevOps, Security"
            gradient="from-indigo-400 to-purple-400"
          />
          <StatsCard
            value="50+"
            label="Successful Morphs"
            description="Legacy → Cloud-Native"
            gradient="from-purple-400 to-pink-400"
          />
          <StatsCard
            value="$2M+"
            label="Client Savings"
            description="Infrastructure cost optimization"
            gradient="from-cyan-400 to-indigo-400"
          />
          <StatsCard
            value="24/7"
            label="Ops Support"
            description="DevOps & monitoring included"
            gradient="from-violet-400 to-purple-400"
          />
        </StatsGrid>
      </div>
    </PageContainer>
  );
}
