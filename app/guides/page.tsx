import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { guides } from "@/lib/guides/data";
import { ArrowRight, Book, Clock, Layers } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integration Guides",
  description:
    "Step-by-step guides for integrating Morphlix tools with your AWS infrastructure. From getting started to advanced configurations.",
};

const products = [
  { name: "All", slug: "all" },
  { name: "CloudPulse", slug: "CloudPulse" },
  { name: "CostGuard", slug: "CostGuard" },
  { name: "DeployKit", slug: "DeployKit" },
  { name: "InfraMap", slug: "InfraMap" },
];

const difficultyColors = {
  beginner: "bg-green-500/10 text-green-500 border-green-500/20",
  intermediate: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  advanced: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function GuidesPage() {
  // Group guides by product
  const guidesByProduct = guides.reduce(
    (acc, guide) => {
      if (!acc[guide.product]) {
        acc[guide.product] = [];
      }
      acc[guide.product].push(guide);
      return acc;
    },
    {} as Record<string, typeof guides>
  );

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Book className="w-3 h-3 mr-1" />
            Documentation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Integration{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Guides
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Step-by-step tutorials to help you get the most out of Morphlix
            tools. From quick starts to advanced configurations.
          </p>
        </div>

        {/* Product Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {products.map((product) => (
            <Badge
              key={product.slug}
              variant="outline"
              className="px-4 py-2 cursor-pointer hover:bg-brand/10 hover:border-brand/30 transition-colors"
            >
              {product.name}
            </Badge>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: guides.length, label: "Guides" },
            { value: "4", label: "Products" },
            {
              value: guides.filter((g) => g.difficulty === "beginner").length,
              label: "Beginner Friendly",
            },
            {
              value: `${guides.reduce((acc, g) => acc + parseInt(g.readTime), 0)} min`,
              label: "Total Reading",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-brand">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Guides by Product */}
        <div className="space-y-12">
          {Object.entries(guidesByProduct).map(([product, productGuides]) => (
            <section key={product}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{product}</h2>
                  <p className="text-sm text-muted-foreground">
                    {productGuides.length} guide
                    {productGuides.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {productGuides.map((guide) => (
                  <Link
                    key={guide.id}
                    href={`/guides/${guide.slug}`}
                    className="block group"
                  >
                    <div className="bg-card border rounded-xl p-6 h-full hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <Badge
                          variant="outline"
                          className={difficultyColors[guide.difficulty]}
                        >
                          {guide.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {guide.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {guide.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Updated{" "}
                          {new Date(guide.lastUpdated).toLocaleDateString()}
                        </span>
                        <span className="text-sm text-brand flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read guide
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Our team can help you set up and configure Morphlix tools for your
            specific infrastructure needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
            >
              <Link href="/contact">
                Schedule a Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
