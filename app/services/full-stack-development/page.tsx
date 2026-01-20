import { BookingCard } from "@/components/booking/calendly-embed";
import { FAQ } from "@/components/faq/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Database,
  Globe,
  Layers,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Full-Stack Development Services | Next.js, Node.js, React",
  description:
    "Build high-performance web applications with modern frameworks. Next.js, React, Node.js, Python. Real-time systems, APIs, and cloud-native architecture.",
};

const capabilities = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Build fast, SEO-friendly web apps with Next.js and React. Server-side rendering, static generation, and incremental static regeneration.",
  },
  {
    icon: Zap,
    title: "API Development",
    description:
      "Design and implement RESTful and GraphQL APIs. Type-safe with OpenAPI specs, comprehensive documentation, and automated testing.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "PostgreSQL, MongoDB, DynamoDB - we choose the right database for your use case. Schema design, query optimization, and migration strategies.",
  },
  {
    icon: Layers,
    title: "Real-Time Systems",
    description:
      "WebSocket-based real-time features, event-driven architectures, and pub/sub systems. Live updates, notifications, and collaborative features.",
  },
  {
    icon: Rocket,
    title: "CI/CD Pipelines",
    description:
      "Automated testing, preview deployments, and production releases. GitHub Actions, AWS CodePipeline, and custom automation.",
  },
  {
    icon: Shield,
    title: "Security & Auth",
    description:
      "Implement secure authentication with OAuth, JWT, and passwordless. Role-based access control and audit logging.",
  },
];

const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "GraphQL"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"] },
  { category: "Infrastructure", items: ["AWS", "Vercel", "Docker", "Kubernetes"] },
];

const faqs = [
  {
    question: "What frameworks and languages do you specialize in?",
    answer:
      "Our core stack is Next.js/React for frontend and Node.js/Python for backend. We also work with Go for performance-critical services. All projects use TypeScript for type safety.",
  },
  {
    question: "Do you provide ongoing maintenance after launch?",
    answer:
      "Yes. We offer flexible retainer agreements for bug fixes, feature development, and infrastructure maintenance. Many clients start with a project engagement and continue with monthly support.",
  },
  {
    question: "How do you handle project handoffs?",
    answer:
      "Every project includes comprehensive documentation, architecture diagrams, and runbooks. We conduct hands-on training sessions and remain available for questions during the transition period.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Absolutely. We regularly take over existing projects, conduct code audits, and implement improvements incrementally. We can modernize legacy codebases while maintaining business continuity.",
  },
];

export default function FullStackDevelopmentPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 border-purple-500/20">
                <Code2 className="w-4 h-4 mr-2" />
                Full-Stack Development
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Build{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  High-Performance
                </span>{" "}
                Applications
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                From real-time APIs to responsive frontends, we build
                production-ready applications using modern frameworks and
                cloud-native patterns.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/success">View Case Studies</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Modern tech stack
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  100% test coverage
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Agile delivery
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "40%", label: "Faster Development" },
                { value: "100%", label: "Test Coverage" },
                { value: "95%", label: "Client Retention" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border rounded-xl p-6 text-center"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
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

      {/* Tech Stack */}
      <section className="px-4 py-20 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-muted-foreground">
              Modern tools and frameworks for building scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="bg-card border rounded-xl p-6">
                <h3 className="font-bold mb-4 text-purple-500">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Build</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end development capabilities for web applications, APIs, and
              real-time systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="bg-card border rounded-xl p-6 hover:border-purple-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-500" />
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

      {/* FAQ */}
      <section className="px-4 py-20 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={faqs}
            title="Frequently Asked Questions"
            subtitle="Common questions about our development services"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <BookingCard />
            <div className="bg-card border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Have a project in mind?</h3>
              <p className="text-muted-foreground mb-6">
                Tell us about your requirements and we&apos;ll provide a detailed
                proposal with timeline and budget.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Technical requirements review",
                  "Architecture recommendations",
                  "Timeline and milestone plan",
                  "Transparent pricing",
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
                <Link href="/contact">Request a Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
