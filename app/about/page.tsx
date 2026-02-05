import { FAQ } from "@/components/faq/faq";
import { Shield, Target, Users, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AWS Cloud Modernization Experts",
  description:
    "Morphlix helps companies modernize their infrastructure with cloud-native AWS architectures. 60% average cost savings, 99.9% uptime SLA.",
  openGraph: {
    title: "About Morphlix | AWS Cloud Partners",
    description:
      "Meet the team behind enterprise AWS transformations. Senior architects with a proven track record.",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every architecture decision starts with security. Access control, encryption, and compliance are foundational.",
    },
    {
      icon: Zap,
      title: "Sustainable Velocity",
      description:
        "We optimize for long-term pace with automated pipelines and zero-downtime deployments.",
    },
    {
      icon: Users,
      title: "Partnership Focused",
      description:
        "We're strategic partners invested in your success, not vendors selling hours.",
    },
    {
      icon: Target,
      title: "Outcome Driven",
      description:
        "We measure success by your business results—cost savings, performance, and reliability.",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "60%", label: "Avg Cost Reduction" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "14+", label: "AWS Certifications" },
  ];

  const team = [
    {
      name: "David Okonkwo",
      role: "Principal Cloud Architect",
      bio: "12+ years of AWS experience. Led migrations reducing infrastructure costs by $10M+. AWS Solutions Architect Professional certified.",
    },
    {
      name: "Sarah Chen",
      role: "Lead Solutions Architect",
      bio: "Specializes in serverless architectures and event-driven systems. Built platforms processing 1M+ events/second.",
    },
    {
      name: "Chidi Nwosu",
      role: "DevOps Lead",
      bio: "Infrastructure-as-code expert. Automated deployment pipelines for 100+ applications on AWS. Terraform and CDK specialist.",
    },
    {
      name: "Amara Obi",
      role: "Security Engineer",
      bio: "Cloud security specialist focused on compliance and threat detection for PCI and HIPAA workloads.",
    },
  ];

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Morphlix
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We help companies turn infrastructure into a competitive advantage,
            not just an IT cost center.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-card border rounded-lg p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Too many companies treat infrastructure as an IT problem instead of
            a strategic asset. We're here to change that—one modernization
            project at a time.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border rounded-lg p-5 text-center"
            >
              <div className="text-3xl font-bold text-brand mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-card border rounded-lg p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Our Team
            </h2>
            <p className="text-muted-foreground">
              Senior AWS-certified architects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {team.map((member) => (
              <div key={member.name} className="bg-card border rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand font-semibold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-brand mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <FAQ
          title="About Our Team"
          items={[
            {
              question:
                "What makes Morphlix different from other consulting firms?",
              answer:
                "We're cloud specialists who focus on modernization, not legacy maintenance. We build production-ready infrastructure, not slide decks.",
            },
            {
              question: "Which cloud platform do you work with?",
              answer:
                "We specialize in AWS. Our team has deep expertise across the AWS ecosystem and holds multiple AWS certifications.",
            },
            {
              question: "Who will be working on my project?",
              answer:
                "You'll work directly with senior engineers—no junior staff or offshore handoffs. Every project is led by an experienced Solutions Architect.",
            },
            {
              question: "What industries do you serve?",
              answer:
                "We've worked across SaaS, FinTech, HealthTech, e-commerce, and enterprise B2B. Our expertise is in cloud patterns, not industry-specific features.",
            },
          ]}
        />
      </div>
    </main>
  );
}
