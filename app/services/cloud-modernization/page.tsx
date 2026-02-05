import { BookingCard } from "@/components/booking/calendly-embed";
import { FAQ } from "@/components/faq/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  GitBranch,
  Globe,
  LineChart,
  Server,
  Shield,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Modernization Services | AWS Migration & Serverless",
  description:
    "Transform legacy systems to cloud-native AWS architecture. Zero-downtime migrations, serverless architecture, Kubernetes orchestration. 60% average cost reduction.",
};

const capabilities = [
  {
    icon: Server,
    title: "Legacy Migration",
    description:
      "Migrate monolithic applications to microservices with zero downtime. We handle the complexity of data migration, API versioning, and traffic shifting.",
  },
  {
    icon: Zap,
    title: "Serverless Architecture",
    description:
      "Design and implement serverless solutions using Lambda, API Gateway, DynamoDB, and Step Functions. Pay only for what you use.",
  },
  {
    icon: GitBranch,
    title: "Container Orchestration",
    description:
      "Deploy and manage containerized workloads with EKS, ECS, or Fargate. Automated scaling, rolling deployments, and service mesh integration.",
  },
  {
    icon: Globe,
    title: "Multi-Region Deployment",
    description:
      "Design globally distributed systems for low latency and high availability. Active-active and active-passive configurations.",
  },
  {
    icon: LineChart,
    title: "Cost Optimization",
    description:
      "Implement FinOps practices with Reserved Instances, Savings Plans, and spot instances. Average 60% reduction in cloud spend.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Implement security best practices following AWS Well-Architected Framework. Support for SOC2, HIPAA, and PCI compliance.",
  },
];

const process = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description:
      "We audit your current infrastructure, identify dependencies, and document the existing architecture. Deliverable: Technical assessment report.",
  },
  {
    step: 2,
    title: "Architecture Design",
    description:
      "Design the target cloud-native architecture with cost estimates, security controls, and migration strategy. Deliverable: Architecture decision records.",
  },
  {
    step: 3,
    title: "Incremental Migration",
    description:
      "Execute migration in phases using the strangler fig pattern. Each phase is tested and validated before proceeding.",
  },
  {
    step: 4,
    title: "Optimization & Handoff",
    description:
      "Fine-tune performance, implement monitoring, and conduct knowledge transfer. Your team will be confident maintaining the new system.",
  },
];

const faqs = [
  {
    question: "How do you ensure zero downtime during migration?",
    answer:
      "We use the strangler fig pattern combined with feature flags and traffic shifting. New services run alongside legacy systems, gradually taking over traffic. Automated rollback mechanisms ensure we can revert instantly if issues arise.",
  },
  {
    question: "What if we have a monolithic database?",
    answer:
      "Database decomposition is handled carefully. We typically start with read replicas, implement the outbox pattern for event-driven sync, then gradually migrate to service-specific databases. Data consistency is maintained throughout.",
  },
  {
    question: "Do you support hybrid cloud setups?",
    answer:
      "Yes. We work with AWS Outposts, Direct Connect, and VPN configurations. Many clients maintain on-premise systems for specific workloads while leveraging AWS for scalable components.",
  },
  {
    question: "How long does a typical migration take?",
    answer:
      "It depends on complexity. Simple lift-and-shift can be 4-6 weeks. Full modernization with microservices decomposition typically takes 8-16 weeks. We provide detailed timelines after the assessment phase.",
  },
];

export default function CloudModernizationPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Modernization
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Legacy Systems into{" "}
                <span className="text-brand">
                  Cloud-Native Architecture
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Migrate from on-premise to cloud, monoliths to microservices,
                servers to serverless. We handle the complexity so you can focus on
                building products.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-brand hover:bg-brand-dark"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Migration
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/calculator">Calculate Savings</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Zero-downtime migrations
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  60% avg cost reduction
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  99.99% uptime SLA
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "60%", label: "Avg Cost Reduction" },
                { value: "10x", label: "Faster Deployments" },
                { value: "150+", label: "Migrations Completed" },
                { value: "99.99%", label: "Uptime SLA" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border rounded-xl p-6 text-center"
                >
                  <p className="text-3xl font-bold text-brand">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-20 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cloud modernization services covering every aspect of
              your infrastructure transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="bg-card border rounded-xl p-6 hover:border-brand/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="font-bold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">
              A battle-tested methodology refined over 150+ successful migrations.
            </p>
          </div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="flex gap-6 items-start bg-card border rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block w-px h-full bg-border absolute left-5 top-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={faqs}
            title="Frequently Asked Questions"
            subtitle="Common questions about our cloud modernization services"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <BookingCard />
            <div className="bg-card border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Ready to modernize?</h3>
              <p className="text-muted-foreground mb-6">
                Get a free infrastructure assessment and migration roadmap. No
                commitment required.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Detailed infrastructure audit",
                  "Cost optimization analysis",
                  "Migration timeline estimate",
                  "Risk assessment report",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Request Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
