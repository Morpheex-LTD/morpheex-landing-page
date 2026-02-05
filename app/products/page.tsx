import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Gauge,
  GitBranch,
  Shield,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Morphlix AWS Tools",
  description:
    "Explore Morphlix products: CloudPulse monitoring, CostGuard optimization, DeployKit CI/CD, and SecureStack security scanning for AWS.",
};

const products = [
  {
    slug: "cloudpulse",
    name: "CloudPulse",
    tagline: "Real-time infrastructure monitoring",
    description:
      "Monitor your AWS resources in real-time. Get intelligent alerts before issues become outages. Track performance metrics across EC2, Lambda, RDS, and more.",
    icon: Gauge,
    status: "Live",
    features: [
      "Real-time AWS resource monitoring",
      "Intelligent alerting with anomaly detection",
      "Custom dashboards and metrics",
      "Slack and PagerDuty integrations",
      "30-day metric retention",
    ],
    cta: "Start Monitoring",
  },
  {
    slug: "costguard",
    name: "CostGuard",
    tagline: "AWS cost optimization",
    description:
      "Identify waste, right-size resources, and cut your AWS bill by up to 60%. Get actionable recommendations backed by usage data.",
    icon: BarChart3,
    status: "Live",
    features: [
      "Automated cost anomaly detection",
      "Right-sizing recommendations",
      "Reserved Instance planning",
      "Tag compliance monitoring",
      "Monthly savings reports",
    ],
    cta: "Cut Your Costs",
  },
  {
    slug: "deploykit",
    name: "DeployKit",
    tagline: "One-click CI/CD pipelines",
    description:
      "Production-ready deployment pipelines for AWS. Zero config, instant setup. Deploy to ECS, Lambda, or EKS in minutes.",
    icon: GitBranch,
    status: "Beta",
    features: [
      "Zero-config pipeline setup",
      "GitHub and GitLab integration",
      "Blue-green deployments",
      "Automatic rollbacks",
      "Deploy previews for PRs",
    ],
    cta: "Join Beta",
  },
  {
    slug: "securestack",
    name: "SecureStack",
    tagline: "AWS security posture",
    description:
      "Continuous security scanning and compliance monitoring for your AWS accounts. Stay ahead of vulnerabilities and meet compliance requirements.",
    icon: Shield,
    status: "Coming Soon",
    features: [
      "Continuous security scanning",
      "CIS benchmark compliance",
      "IAM policy analysis",
      "S3 bucket auditing",
      "SOC2 and HIPAA reports",
    ],
    cta: "Join Waitlist",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools built from real client challenges. Each product solves a
            problem we&apos;ve seen dozens of times.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.slug}
                className="bg-card border rounded-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          product.status === "Live"
                            ? "bg-green-500/10 text-green-600"
                            : product.status === "Beta"
                              ? "bg-brand/10 text-brand"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-1">
                      {product.name}
                    </h2>
                    <p className="text-sm text-brand font-medium mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm mb-5">
                      {product.description}
                    </p>

                    <Button
                      asChild
                      className={
                        product.status === "Coming Soon"
                          ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          : "bg-brand hover:bg-brand-dark"
                      }
                    >
                      <Link href={`/contact?product=${product.slug}`}>
                        {product.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="bg-muted/30 p-6 md:p-8">
                    <h3 className="font-semibold text-foreground mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-card border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3 text-foreground">
            Need a custom solution?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our products are built on the same expertise we bring to client
            projects. Let&apos;s discuss your specific needs.
          </p>
          <Button asChild className="bg-brand hover:bg-brand-dark">
            <Link href="/contact">
              Talk to Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
