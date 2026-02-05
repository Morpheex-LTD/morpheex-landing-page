import { ArrowRight, ArrowUpRight, BarChart3, Gauge, GitBranch, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Products = () => {
  const products = [
    {
      name: "CloudPulse",
      tagline: "Real-time infrastructure monitoring",
      description:
        "Monitor your AWS resources in real-time. Get alerts before issues become outages.",
      icon: Gauge,
      href: "/products?product=cloudpulse",
      status: "Live",
    },
    {
      name: "CostGuard",
      tagline: "AWS cost optimization",
      description:
        "Identify waste, right-size resources, and cut your AWS bill by up to 60%.",
      icon: BarChart3,
      href: "/products?product=costguard",
      status: "Live",
    },
    {
      name: "DeployKit",
      tagline: "One-click CI/CD pipelines",
      description:
        "Production-ready deployment pipelines for AWS. Zero config, instant setup.",
      icon: GitBranch,
      href: "/products?product=deploykit",
      status: "Beta",
    },
    {
      name: "SecureStack",
      tagline: "AWS security posture",
      description:
        "Continuous security scanning and compliance monitoring for your AWS accounts.",
      icon: Shield,
      href: "/products?product=securestack",
      status: "Coming Soon",
    },
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-brand mb-3 uppercase tracking-wide">
            Products
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Tools We&apos;ve Built
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Software products born from real client challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="group bg-card border rounded-xl p-6 hover:border-brand/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center group-hover:bg-brand transition-colors">
                    <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
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

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-brand font-medium mb-2">
                  {product.tagline}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>

                {product.status !== "Coming Soon" && (
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-sm font-medium text-brand hover:underline"
                  >
                    Learn more
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link href="/products">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
