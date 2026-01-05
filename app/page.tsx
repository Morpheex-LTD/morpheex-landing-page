import { CaseStudy } from "@/components/case-study";
import { FAQ } from "@/components/faq/faq";
import LandingPageHero from "@/components/hero/landing-page-hero";
import ReadyToMorph from "@/components/ready-to-morph";
import Services from "@/components/services";
import { StructuredData } from "@/components/structured-data";
import { Testimonials } from "@/components/testimonials/testimonials";
import Value from "@/components/value";

export default function MorpheexLanding() {
  const testimonials = [
    {
      quote:
        "Morpheex reduced our AWS bill by 62% while improving our deployment speed by 10x. Their serverless architecture transformed how we ship features.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Analytics",
      industry: "SaaS",
    },
    {
      quote:
        "We went from manual deployments to a fully automated CI/CD pipeline in 6 weeks. Zero downtime migrations and rock-solid infrastructure. Game changer.",
      author: "Marcus Rodriguez",
      role: "VP Engineering",
      company: "FinanceHub",
      industry: "FinTech",
    },
    {
      quote:
        "The team's AWS expertise is unmatched. They migrated our monolith to microservices with zero customer impact. Best decision we made this year.",
      author: "Emily Park",
      role: "Head of Infrastructure",
      company: "HealthSync",
      industry: "Healthcare",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical cloud modernization project take?",
      answer:
        "Most projects range from 4-12 weeks depending on scope. Our Sprint engagement (4-6 weeks) handles focused migrations like serverless refactors or CI/CD setup. Transform engagements (8-12 weeks) cover full infrastructure modernization with microservices architecture.",
    },
    {
      question: "Do you work with existing AWS accounts or start fresh?",
      answer:
        "We work with your existing AWS infrastructure. Our first step is always a comprehensive audit of your current setup, followed by a migration roadmap that minimizes disruption. We prioritize zero-downtime deployments and gradual rollouts.",
    },
    {
      question: "What's your approach to security and compliance?",
      answer:
        "Security is foundational, not an afterthought. Every architecture includes IAM least-privilege policies, encryption at rest and in transit, VPC isolation, and CloudTrail audit logging. We follow AWS Well-Architected Framework and can support SOC2, HIPAA, and PCI compliance requirements.",
    },
    {
      question: "How do you ensure knowledge transfer to our team?",
      answer:
        "Every engagement includes documentation, architecture diagrams, runbooks, and hands-on training sessions. We don't just build—we teach. Your team will understand every line of infrastructure code and feel confident maintaining it long-term.",
    },
    {
      question: "What if we need ongoing support after the project ends?",
      answer:
        "We offer flexible retainer agreements for ongoing optimization, monitoring, and feature development. Many clients start with a Sprint or Transform engagement, then continue with monthly support to handle scaling, cost optimization, and new feature requests.",
    },
  ];

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

      {/* --- TESTIMONIALS --- */}
      <div className="relative z-10">
        <Testimonials
          testimonials={testimonials}
          subtitle="See how we've transformed cloud infrastructure for companies like yours"
        />
      </div>

      <Value />

      {/* --- FAQ SECTION --- */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <FAQ
            items={faqs}
            subtitle="Everything you need to know about working with Morpheex"
          />
        </div>
      </div>

      <ReadyToMorph />
    </div>
  );
}
