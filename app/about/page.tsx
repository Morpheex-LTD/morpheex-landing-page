import { FAQ } from "@/components/faq/faq";
import { PageContainer, PageHeader, StatsCard, StatsGrid } from "@/components/page";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Zap, Shield, TrendingUp, Rocket } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AWS Cloud Experts & Modernization Partners",
  description:
    "Morpheex is an official AWS Partner specializing in cloud modernization and serverless solutions. 14+ AWS certifications, 60% average cost savings, 99.9% uptime SLA.",
  openGraph: {
    title: "About Morpheex | Your AWS Cloud Modernization Partner",
    description:
      "Meet the team behind enterprise cloud transformations. AWS-certified architects with a proven track record of eliminating technical debt.",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every architecture decision starts with security. IAM, encryption, and SOC2 compliance aren't afterthoughts—they're foundational.",
    },
    {
      icon: Zap,
      title: "Velocity Over Speed",
      description:
        "Moving fast matters, but moving smart matters more. We optimize for sustainable pace with automated pipelines and zero-downtime deployments.",
    },
    {
      icon: Users,
      title: "Partnership, Not Transactions",
      description:
        "We're not vendors—we're strategic partners invested in your long-term success. Your infrastructure becomes our responsibility.",
    },
  ];

  const team = [
    {
      role: "Solutions Architecture",
      description: "AWS-certified architects with 10+ years cloud experience",
      certifications: "14+ AWS certifications",
    },
    {
      role: "DevOps Engineering",
      description: "Infrastructure-as-code specialists and automation experts",
      certifications: "Kubernetes, Terraform, GitHub Actions",
    },
    {
      role: "Full-Stack Development",
      description: "Next.js, Node.js, and serverless application experts",
      certifications: "React, TypeScript, Lambda, DynamoDB",
    },
  ];

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto">
        <PageHeader
          badgeIcon={Award}
          badgeText="Official AWS Partner"
          title="THE ARCHITECTURE OFFICE"
          centered
        />

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-3xl p-12 mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            We Don't Just Use the Cloud.
            <br />
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              We Master Its Architectural Potential.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Morpheex exists because too many companies treat infrastructure as
            an IT problem instead of a competitive weapon. We're here to change
            that—one serverless migration at a time.
          </p>
        </div>

        {/* Stats Grid */}
        <StatsGrid title="By The Numbers" icon={TrendingUp} columns={4}>
          <StatsCard
            value="50+"
            label="Projects Delivered"
            gradient="from-brand to-brand-accent"
            icon={Rocket}
          />
          <StatsCard
            value="60%"
            label="Avg Cost Reduction"
            gradient="from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400"
            icon={TrendingUp}
          />
          <StatsCard
            value="99.9%"
            label="Uptime SLA"
            gradient="from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
            icon={Shield}
          />
          <StatsCard
            value="14+"
            label="AWS Certifications"
            gradient="from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
            icon={Award}
          />
        </StatsGrid>

        {/* Core Values */}
        <div className="mb-20 mt-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Engineering Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-gradient-to-br from-card/50 to-card/30 border rounded-2xl p-8 hover:border-brand/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-accent/10 text-brand-accent border-brand-accent/30">
              <Users className="w-4 h-4 mr-2 inline" />
              Expert Team
            </Badge>
            <h2 className="text-3xl font-bold text-foreground">
              World-Class Expertise
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-card/80 to-card/50 border rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-black text-brand/20 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {member.role}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {member.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {member.certifications}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Why We're Different */}
        <div className="bg-gradient-to-br from-card/50 to-card/30 border rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Companies Choose Morpheex
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "No Personality Cult",
                desc: "We're an institutional partner, not a consulting freelancer. Your project doesn't depend on one person's availability.",
              },
              {
                title: "Code Quality Over Speed",
                desc: "Every line is reviewed, tested, and documented. Technical debt is the silent killer—we eliminate it at the source.",
              },
              {
                title: "AWS-Native Architecture",
                desc: "We don't just lift-and-shift. We rebuild using serverless, event-driven patterns that reduce costs by 60%+.",
              },
              {
                title: "Transparent Communication",
                desc: "No jargon. No hand-waving. Just honest updates about what's working, what's not, and how we're fixing it.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <FAQ
            title="About Our Team"
            items={[
              {
                question: "What makes Morpheex different from other consulting firms?",
                answer:
                  "We're not generalist consultants—we're AWS specialists who live and breathe cloud architecture. Our team holds 14+ AWS certifications and focuses exclusively on modernization, not legacy system maintenance. We build production-ready infrastructure, not PowerPoint decks.",
              },
              {
                question: "Who will be working on my project?",
                answer:
                  "You'll work directly with senior engineers—no junior staff or offshore handoffs. Every project is led by an AWS-certified Solutions Architect with 10+ years of experience. You'll have a dedicated point of contact throughout the entire engagement.",
              },
              {
                question: "Do you only work with AWS?",
                answer:
                  "AWS is our primary expertise and where we deliver the most value. However, we're cloud-agnostic when needed and have experience with Google Cloud Platform and Azure for multi-cloud strategies or specific workload requirements.",
              },
              {
                question: "What industries do you serve?",
                answer:
                  "We've worked across SaaS, FinTech, HealthTech, e-commerce, and enterprise B2B. Our expertise is in cloud architecture patterns, not industry-specific features—so we can modernize infrastructure for any sector.",
              },
              {
                question: "How do you stay current with AWS updates?",
                answer:
                  "Our team maintains active AWS certifications, attends re:Invent annually, and participates in AWS partner training programs. We test new services in sandbox environments before recommending them to clients, ensuring proven stability.",
              },
            ]}
          />
        </div>
      </div>
    </PageContainer>
  );
}
