import { Product, ProductCard } from "@/components/products/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Boxes,
  Code2,
  Cpu,
  Globe,
  Layers,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Morphlix Products | Software Solutions by Morpheex",
  description:
    "Discover Morphlix - innovative software products built by Morpheex. From developer tools to enterprise solutions, explore our suite of cloud-native applications.",
  openGraph: {
    title: "Morphlix Products | Software Solutions by Morpheex",
    description:
      "Discover Morphlix - innovative software products built by Morpheex. Cloud-native applications and developer tools.",
  },
};

const products: Product[] = [
  {
    id: "cloudpulse",
    name: "CloudPulse",
    tagline: "Real-time AWS Cost Intelligence",
    description:
      "Monitor, analyze, and optimize your AWS spending in real-time. Get instant alerts on cost anomalies, AI-powered recommendations, and detailed breakdowns by service, team, or project.",
    image: "/products/cloudpulse.png",
    category: "FinOps",
    status: "live",
    features: [
      "Real-time cost monitoring dashboard",
      "AI-powered optimization recommendations",
      "Custom alerts and budgets",
      "Team-based cost allocation",
      "Slack & Teams integration",
    ],
    link: "/products/cloudpulse",
    demoLink: "https://demo.cloudpulse.morphlix.com",
  },
  {
    id: "deploykit",
    name: "DeployKit",
    tagline: "Zero-Config CI/CD for AWS",
    description:
      "Deploy to AWS with a single command. DeployKit handles infrastructure provisioning, containerization, and CI/CD pipelines automatically. Built for teams who want to ship faster.",
    image: "/products/deploykit.png",
    category: "DevOps",
    status: "live",
    features: [
      "One-command deployments",
      "Auto-generated infrastructure",
      "Built-in preview environments",
      "GitHub & GitLab integration",
      "Automatic rollbacks",
    ],
    link: "/products/deploykit",
    demoLink: "https://demo.deploykit.morphlix.com",
  },
  {
    id: "serverless-studio",
    name: "Serverless Studio",
    tagline: "Visual Serverless Architecture Builder",
    description:
      "Design, visualize, and deploy serverless architectures with a drag-and-drop interface. Export to CloudFormation, Terraform, or CDK. Perfect for architects and developers alike.",
    image: "/products/serverless-studio.png",
    category: "Developer Tools",
    status: "beta",
    features: [
      "Visual architecture designer",
      "Export to IaC formats",
      "Real-time cost estimation",
      "Architecture templates library",
      "Team collaboration",
    ],
    link: "/products/serverless-studio",
  },
  {
    id: "api-forge",
    name: "API Forge",
    tagline: "API Development Platform",
    description:
      "Build, test, and deploy APIs at lightning speed. API Forge provides auto-generated documentation, mock servers, and seamless integration with your existing workflow.",
    image: "/products/api-forge.png",
    category: "Developer Tools",
    status: "live",
    features: [
      "Visual API builder",
      "Auto-generated OpenAPI docs",
      "Mock server generation",
      "Request/response validation",
      "Performance testing built-in",
    ],
    link: "/products/api-forge",
    demoLink: "https://demo.apiforge.morphlix.com",
  },
  {
    id: "dataflow",
    name: "DataFlow",
    tagline: "ETL Pipelines Made Simple",
    description:
      "Build data pipelines visually without writing code. Connect to 100+ data sources, transform data with drag-and-drop, and orchestrate workflows with built-in scheduling.",
    image: "/products/dataflow.png",
    category: "Data",
    status: "beta",
    features: [
      "Visual pipeline builder",
      "100+ pre-built connectors",
      "No-code transformations",
      "Scheduled orchestration",
      "Data quality monitoring",
    ],
    link: "/products/dataflow",
  },
  {
    id: "securestack",
    name: "SecureStack",
    tagline: "Cloud Security Posture Management",
    description:
      "Continuous security monitoring for your AWS infrastructure. Detect misconfigurations, compliance violations, and security threats before they become incidents.",
    image: "/products/securestack.png",
    category: "Security",
    status: "coming-soon",
    features: [
      "Continuous compliance monitoring",
      "Misconfiguration detection",
      "Threat intelligence integration",
      "Automated remediation",
      "SOC2 & HIPAA reports",
    ],
    link: "/products/securestack",
  },
];

const categories = [
  { name: "All", icon: Boxes },
  { name: "FinOps", icon: Zap },
  { name: "DevOps", icon: Rocket },
  { name: "Developer Tools", icon: Code2 },
  { name: "Data", icon: Layers },
  { name: "Security", icon: Globe },
];

export default function ProductsPage() {
  const featuredProduct = products[0];
  const otherProducts = products.slice(1);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-brand/20" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] bg-brand-accent/20" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center gap-2 mb-6">
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium bg-brand/10 border-brand/20 text-brand"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Morphlix Product Suite
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium bg-green-500/10 border-green-500/20 text-green-500"
            >
              100% Free
            </Badge>
          </div>

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software Products by{" "}
              <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
                Morphlix
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Cloud-native tools and platforms built by the Morpheex team — completely free to use.
              From cost optimization to deployment automation, we build the tools we wished existed.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: "6", label: "Free Products" },
              { value: "10K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "$0", label: "Forever Free" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card/50 border rounded-xl p-4 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-brand">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-brand" />
            <h2 className="text-lg font-semibold">Featured Product</h2>
          </div>
          <ProductCard product={featuredProduct} featured />
        </div>
      </section>

      {/* All Products */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-2xl font-bold">All Products</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.name}
                    variant={category.name === "All" ? "default" : "outline"}
                    size="sm"
                    className={
                      category.name === "All"
                        ? "bg-brand hover:bg-brand/90"
                        : ""
                    }
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a product idea?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for the next challenge. If you have an idea
              for a cloud tool or need a custom solution, let&apos;s talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/apply">Apply for AWS Credits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-4 border-t">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get notified when we launch new products and features.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 h-10 px-4 rounded-lg border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
            />
            <Button className="bg-brand hover:bg-brand/90">Subscribe</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
