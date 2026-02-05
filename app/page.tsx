import { CaseStudy } from "@/components/case-study";
import { FAQ } from "@/components/faq/faq";
import LandingPageHero from "@/components/hero/landing-page-hero";
import { ClientLogos } from "@/components/logos/client-logos";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";
import Products from "@/components/products";
import ReadyToMorph from "@/components/ready-to-morph";
import Services from "@/components/services";
import { StructuredData } from "@/components/structured-data";
import { Testimonials } from "@/components/testimonials/testimonials";
import Value from "@/components/value";

export default function MorphlixLanding() {
  const testimonials = [
    {
      quote:
        "Morphlix reduced our cloud costs by 62% while improving deployment speed 10x. Their serverless architecture transformed how we ship features.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Analytics",
      industry: "SaaS",
    },
    {
      quote:
        "We went from manual deployments to a fully automated CI/CD pipeline in 6 weeks. Zero downtime migrations and rock-solid infrastructure.",
      author: "Marcus Rodriguez",
      role: "VP Engineering",
      company: "FinanceHub",
      industry: "FinTech",
    },
    {
      quote:
        "The team's cloud expertise is unmatched. They migrated our monolith to microservices with zero customer impact. Best decision we made this year.",
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
        "Most projects range from 4-12 weeks depending on scope. Our Sprint engagement (4-6 weeks) handles focused migrations. Transform engagements (8-12 weeks) cover full infrastructure modernization.",
    },
    {
      question: "Which cloud platform do you work with?",
      answer:
        "We specialize in AWS. Our team has deep expertise across the AWS ecosystem including Lambda, ECS, EKS, and the full suite of managed services.",
    },
    {
      question: "What's your approach to security and compliance?",
      answer:
        "Security is foundational. Every architecture includes least-privilege policies, encryption at rest and in transit, network isolation, and audit logging. We support SOC2, HIPAA, and PCI compliance requirements.",
    },
    {
      question: "How do you ensure knowledge transfer to our team?",
      answer:
        "Every engagement includes documentation, architecture diagrams, runbooks, and hands-on training. Your team will understand every component and feel confident maintaining it long-term.",
    },
    {
      question: "What if we need ongoing support after the project ends?",
      answer:
        "We offer flexible retainer agreements for ongoing optimization, monitoring, and feature development. Many clients start with a project engagement, then continue with monthly support.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-selection">
      <StructuredData />

      {/* Hero Section */}
      <LandingPageHero />

      {/* Client Logos */}
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-6">
          <ClientLogos />
        </div>
      </div>

      {/* Services */}
      <Services />

      {/* Case Study */}
      <CaseStudy />

      {/* Testimonials */}
      <div className="relative z-10 bg-muted/50">
        <Testimonials
          testimonials={testimonials}
          subtitle="See how we've transformed infrastructure for companies like yours"
        />
      </div>

      {/* Value Props */}
      <Value />

      {/* Products */}
      <Products />

      {/* FAQ */}
      <div className="relative z-10 py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <FAQ
            items={faqs}
            subtitle="Everything you need to know about working with Morphlix"
          />
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6 max-w-xl">
          <NewsletterSignup
            title="Stay Updated"
            description="Weekly insights on cloud architecture, cost optimization, and engineering best practices."
          />
        </div>
      </div>

      {/* Final CTA */}
      <ReadyToMorph />
    </div>
  );
}
