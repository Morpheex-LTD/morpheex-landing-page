import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Cloud,
  Code2,
  Layers,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Cloud Modernization & Software Development",
  description:
    "Explore Morpheex services: Cloud Modernization, Full-Stack Development, and AI & Data Strategy. AWS-certified architects building enterprise-grade solutions.",
};

const services = [
  {
    slug: "cloud-modernization",
    title: "Cloud Modernization",
    tagline: "Transform legacy infrastructure into scalable cloud-native systems",
    description:
      "Migrate from monoliths to microservices, on-premise to serverless. We handle the complexity so you can focus on building products.",
    icon: Cloud,
    features: [
      "Zero-downtime migrations",
      "Serverless architecture design",
      "Kubernetes orchestration",
      "Multi-region deployments",
      "Cost optimization (60% avg savings)",
      "24/7 monitoring & support",
    ],
    stats: [
      { value: "60%", label: "Avg Cost Reduction" },
      { value: "10x", label: "Faster Deployments" },
      { value: "99.99%", label: "Uptime SLA" },
    ],
    color: "from-blue-500 to-cyan-500",
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
      "Database design & optimization",
      "CI/CD pipeline setup",
    ],
    stats: [
      { value: "150+", label: "Projects Delivered" },
      { value: "40%", label: "Faster Time-to-Market" },
      { value: "100%", label: "Test Coverage" },
    ],
    color: "from-purple-500 to-pink-500",
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
      "ETL pipeline automation",
      "Real-time analytics dashboards",
      "Document intelligence systems",
    ],
    stats: [
      { value: "5x", label: "Faster Insights" },
      { value: "80%", label: "Process Automation" },
      { value: "3x", label: "ROI on Data" },
    ],
    color: "from-amber-500 to-orange-500",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium bg-brand/10 border-brand/20 text-brand mb-6"
          >
            <Layers className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-Grade{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Cloud Solutions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AWS-certified architects and engineers delivering cloud modernization,
            full-stack development, and AI solutions for ambitious companies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.slug}
                className="bg-card border rounded-2xl overflow-hidden hover:border-brand/30 transition-all"
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    isReversed ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`p-8 md:p-12 flex flex-col justify-center ${
                      isReversed ? "md:col-start-2" : ""
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {service.title}
                    </h2>
                    <p
                      className={`text-lg font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}
                    >
                      {service.tagline}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-2 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-fit">
                      <Link href={`/services/${service.slug}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Stats Visual */}
                  <div
                    className={`bg-gradient-to-br ${service.color} bg-opacity-10 p-8 md:p-12 flex items-center justify-center ${
                      isReversed ? "md:col-start-1" : ""
                    }`}
                    style={{
                      background: `linear-gradient(135deg, var(--card) 0%, var(--card) 100%)`,
                    }}
                  >
                    <div className="grid grid-cols-3 gap-6 w-full max-w-md">
                      {service.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p
                            className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                          >
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
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a free consultation with our architects. We&apos;ll assess your
              infrastructure and recommend the best path forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/calculator">Try Cost Calculator</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
