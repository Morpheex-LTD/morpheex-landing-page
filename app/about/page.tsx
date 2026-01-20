import { FAQ } from "@/components/faq/faq";
import { PageContainer, PageHeader, StatsCard, StatsGrid } from "@/components/page";
import { TeamMember, TeamMemberCard } from "@/components/team/team-member-card";
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

  const teamMembers: TeamMember[] = [
    {
      name: "David Okonkwo",
      role: "Principal Cloud Architect",
      bio: "AWS Hero and Solutions Architect with 12+ years of cloud experience. Led migrations for Fortune 500 companies, reducing infrastructure costs by $10M+.",
      certifications: ["AWS Solutions Architect Pro", "AWS DevOps Pro", "AWS Security"],
      skills: ["Serverless", "Kubernetes", "Terraform", "Cost Optimization"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Sarah Chen",
      role: "Lead Solutions Architect",
      bio: "Former AWS engineer specializing in serverless architectures and event-driven systems. Built real-time platforms processing 1M+ events/second.",
      certifications: ["AWS Solutions Architect Pro", "AWS Data Analytics", "Kubernetes CKA"],
      skills: ["Lambda", "EventBridge", "DynamoDB", "System Design"],
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Chidi Nwosu",
      role: "DevOps Lead",
      bio: "Infrastructure-as-code expert who has automated deployment pipelines for 100+ applications. Believes in GitOps and zero-touch deployments.",
      certifications: ["AWS DevOps Pro", "Terraform Associate", "Kubernetes CKD"],
      skills: ["CI/CD", "GitHub Actions", "ArgoCD", "Monitoring"],
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Amara Obi",
      role: "Security Engineer",
      bio: "Cloud security specialist focused on compliance and threat detection. Has secured systems handling PCI and HIPAA workloads.",
      certifications: ["AWS Security Specialty", "CISSP", "SOC2 Auditor"],
      skills: ["IAM", "GuardDuty", "Security Hub", "Compliance"],
      social: {
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Michael Adeyemi",
      role: "Full-Stack Developer",
      bio: "Senior engineer building scalable web applications with Next.js and Node.js. Passionate about developer experience and clean code.",
      certifications: ["AWS Developer Associate", "AWS Serverless"],
      skills: ["Next.js", "React", "Node.js", "TypeScript"],
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Fatima Bello",
      role: "Data Engineer",
      bio: "Data platform engineer specializing in AWS analytics services. Builds data lakes and real-time pipelines for actionable insights.",
      certifications: ["AWS Data Analytics", "AWS Machine Learning", "Databricks"],
      skills: ["Glue", "Athena", "Redshift", "Spark"],
      social: {
        linkedin: "https://linkedin.com",
      },
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

        {/* Team Members */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-accent/10 text-brand-accent border-brand-accent/30">
              <Users className="w-4 h-4 mr-2 inline" />
              Meet The Team
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              World-Class Cloud Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team brings together AWS-certified architects, DevOps engineers,
              and full-stack developers with decades of combined experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
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
