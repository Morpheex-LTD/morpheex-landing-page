import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getGuideBySlug, guides } from "@/lib/guides/data";
import {
  ArrowLeft,
  ArrowRight,
  Book,
  CheckCircle,
  Clock,
  Copy,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: `${guide.title} - Morphlix Guides`,
    description: guide.description,
  };
}

const difficultyColors = {
  beginner: "bg-green-500/10 text-green-500 border-green-500/20",
  intermediate: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  advanced: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Get related guides
  const relatedGuides = guide.relatedGuides
    ? guides.filter((g) => guide.relatedGuides?.includes(g.slug))
    : guides.filter((g) => g.product === guide.product && g.id !== guide.id).slice(0, 2);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline">{guide.product}</Badge>
            <Badge
              variant="outline"
              className={difficultyColors[guide.difficulty]}
            >
              {guide.difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-3 h-3" />
              {guide.readTime} read
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{guide.title}</h1>
          <p className="text-xl text-muted-foreground">{guide.description}</p>

          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date(guide.lastUpdated).toLocaleDateString()}
          </p>
        </div>

        {/* Prerequisites */}
        {guide.prerequisites && guide.prerequisites.length > 0 && (
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 mb-8">
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-amber-500" />
              Prerequisites
            </h2>
            <ul className="space-y-2">
              {guide.prerequisites.map((prereq, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Table of Contents */}
        <div className="bg-card border rounded-xl p-6 mb-8">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Book className="w-4 h-4 text-brand" />
            In This Guide
          </h2>
          <nav className="space-y-2">
            {guide.sections.map((section, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {index + 1}. {section.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {guide.sections.map((section, index) => (
            <section key={index} id={`section-${index}`}>
              <h2 className="text-2xl font-bold mb-4">
                {index + 1}. {section.title}
              </h2>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-muted-foreground leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.code && (
                <div className="mt-4 relative">
                  <div className="flex items-center justify-between bg-zinc-900 rounded-t-lg px-4 py-2 border border-zinc-700 border-b-0">
                    <span className="text-xs text-zinc-400 font-mono">
                      {section.code.language}
                    </span>
                    <button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors">
                      <Copy className="w-3 h-3" />
                      Copy
                    </button>
                  </div>
                  <pre className="bg-zinc-950 rounded-b-lg p-4 overflow-x-auto border border-zinc-700 border-t-0">
                    <code className="text-sm text-zinc-300 font-mono whitespace-pre">
                      {section.code.content}
                    </code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-12 bg-card border rounded-xl p-6">
          <h2 className="font-semibold mb-4">What&apos;s Next?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedGuides.map((related) => (
              <Link
                key={related.id}
                href={`/guides/${related.slug}`}
                className="block group"
              >
                <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {related.product}
                  </Badge>
                  <h3 className="font-medium group-hover:text-brand transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                    {related.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-xl p-6 text-center">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our team is here to help you get set up
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
            >
              <Link href="/contact">
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href="/products">View {guide.product}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
