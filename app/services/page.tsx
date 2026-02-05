import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, CheckCircle, Cloud, Code2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | AWS Cloud Modernization & Software Development",
  description:
    "Explore Morphlix services: AWS Cloud Modernization, Full-Stack Development, and AI & Data Strategy. AWS-certified architects building enterprise-grade solutions.",
};

const services = [
  {
    slug: "cloud-modernization",
    title: "Cloud Modernization",
    tagline:
      "Transform legacy infrastructure into scalable cloud-native systems",
    description:
      "Migrate from monoliths to microservices, on-premise to serverless. We handle the complexity so you can focus on building products.",
    icon: Cloud,
    features: [
      "Zero-downtime migrations",
      "Serverless architecture design",
      "Kubernetes orchestration",
      "Cost optimization (60% avg savings)",
    ],
    stats: [
      { value: "60%", label: "Avg Cost Reduction" },
      { value: "10x", label: "Faster Deployments" },
      { value: "99.99%", label: "Uptime SLA" },
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    tagline: "Build high-performance applications that scale",
    description:
      "From real-time APIs to responsive frontends, we build production-ready applications using modern frameworks and cloud-native patterns.",
    icon: Code2,
    features: [
      "Next.js & React applications",
      "Node.js & Python backends",
      "Real-time WebSocket systems",
      "GraphQL & REST APIs",
    ],
    stats: [
      { value: "150+", label: "Projects Delivered" },
      { value: "40%", label: "Faster Time-to-Market" },
      { value: "100%", label: "Test Coverage" },
    ],
  },
  {
    slug: "ai-data-strategy",
    title: "AI & Data Strategy",
    tagline: "Turn your data into competitive advantage",
    description:
      "Build intelligent systems with AWS AI services. From data lakes to ML pipelines, we help you extract insights and automate decisions.",
    icon: Brain,
    features: [
      "Amazon Bedrock integration",
      "RAG architecture design",
      "Data lake implementation",
      "Real-time analytics dashboards",
    ],
    stats: [
      { value: "5x", label: "Faster Insights" },
      { value: "80%", label: "Process Automation" },
      { value: "3x", label: "ROI on Data" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AWS-certified architects and engineers delivering cloud
            modernization, development, and AI solutions.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="bg-card border rounded-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-brand font-medium mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button asChild variant="outline" size="sm">
                      <Link href={`/services/${service.slug}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="bg-muted/30 p-6 md:p-8 flex items-center">
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {service.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p className="text-2xl md:text-3xl font-bold text-brand">
                            {stat.value}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-card border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3 text-foreground">
            Not sure which service you need?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book a free consultation. We'll assess your infrastructure and
            recommend the best path forward.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-brand hover:bg-brand-dark">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/calculator">Try Cost Calculator</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
