import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies/data";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle,
  Clock,
  Quote,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.company} Case Study - ${study.title}`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  // Get related case studies (same industry or services)
  const relatedStudies = caseStudies
    .filter(
      (cs) =>
        cs.id !== study.id &&
        (cs.industry === study.industry ||
          cs.services.some((s) => study.services.includes(s)))
    )
    .slice(0, 2);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline">{study.industry}</Badge>
            {study.featured && (
              <Badge className="bg-brand/10 text-brand border-brand/20">
                Featured
              </Badge>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-muted-foreground">{study.subtitle}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand" />
              <span className="text-muted-foreground">Company:</span>
              <span className="font-medium">{study.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand" />
              <span className="text-muted-foreground">Timeline:</span>
              <span className="font-medium">{study.timeline}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-brand" />
              <span className="text-muted-foreground">Team:</span>
              <span className="font-medium">{study.teamSize}</span>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {study.results.map((result) => (
            <div
              key={result.metric}
              className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-xl p-4 text-center"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
                {result.value}
              </p>
              <p className="text-sm font-medium mt-1">{result.metric}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Challenge Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
          <div className="bg-card border rounded-xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <div className="bg-card border rounded-xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-1.5">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {study.services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 bg-card border rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        {study.testimonial && (
          <section className="mb-12">
            <div className="bg-gradient-to-br from-brand/5 to-brand-accent/5 border rounded-2xl p-8">
              <Quote className="w-10 h-10 text-brand/30 mb-4" />
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-brand">
                    {study.testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{study.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {study.testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-card border rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Want Similar Results for Your Company?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let&apos;s discuss how we can help you achieve the same level of
              success. Start with a free cloud audit.
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
                <Link href="/apply">Apply for AWS Credits</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedStudies.map((related) => (
                <Link
                  key={related.id}
                  href={`/case-studies/${related.slug}`}
                  className="block group"
                >
                  <div className="bg-card border rounded-xl p-6 h-full hover:border-brand/50 transition-colors">
                    <Badge variant="outline" className="mb-3">
                      {related.industry}
                    </Badge>
                    <h3 className="font-bold mb-2 group-hover:text-brand transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {related.subtitle}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-brand">
                        {related.results[0].value}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {related.results[0].metric}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
