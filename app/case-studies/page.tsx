import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, getFeaturedCaseStudies } from "@/lib/case-studies/data";
import { ArrowRight, Building2, Clock, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how Morphlix helps companies reduce cloud costs, modernize infrastructure, and accelerate development. Real results from real clients.",
};

export default function CaseStudiesPage() {
  const featuredStudies = getFeaturedCaseStudies();
  const otherStudies = caseStudies.filter((cs) => !cs.featured);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Client Success Stories
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Real Results.{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Real Impact.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we&apos;ve helped companies reduce cloud costs by up to 70%,
            accelerate deployments, and modernize their infrastructure.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "$5M+", label: "Client Savings" },
            { value: "50+", label: "Projects Delivered" },
            { value: "99.9%", label: "Avg. Uptime" },
            { value: "4.9/5", label: "Client Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Case Studies</h2>
          <div className="space-y-8">
            {featuredStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="block group"
              >
                <div className="bg-card border rounded-2xl overflow-hidden hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Left Content */}
                    <div className="md:col-span-3 p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Badge variant="outline">{study.industry}</Badge>
                        <Badge className="bg-brand/10 text-brand border-brand/20">
                          Featured
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {study.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {study.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.timeline}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service) => (
                          <Badge key={service} variant="secondary">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Right - Results */}
                    <div className="md:col-span-2 bg-muted/50 p-6 md:p-8">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-brand" />
                        Key Results
                      </h4>
                      <div className="space-y-4">
                        {study.results.slice(0, 3).map((result) => (
                          <div key={result.metric}>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-bold text-brand">
                                {result.value}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {result.metric}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {result.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        className="mt-4 group-hover:text-brand"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Case Studies Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">More Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="block group"
              >
                <div className="bg-card border rounded-xl p-6 h-full hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
                  <Badge variant="outline" className="mb-4">
                    {study.industry}
                  </Badge>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {study.subtitle}
                  </p>

                  {/* Key Metric */}
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-brand">
                        {study.results[0].value}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {study.results[0].metric}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{study.company}</span>
                    <span className="flex items-center gap-1 group-hover:text-brand transition-colors">
                      Read more
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join 50+ companies that have transformed their cloud infrastructure
            with Morphlix. Start with a free cloud audit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
            >
              <Link href="/contact">
                Get Your Free Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/calculator">Calculate Your Savings</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
