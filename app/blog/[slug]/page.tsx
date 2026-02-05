import { BlogCard } from "@/components/blog/blog-card";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug } from "@/lib/blog/posts";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Linkedin,
  Link as LinkIcon,
  Twitter,
  User,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                <User className="w-6 h-6 text-brand" />
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {post.author.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-12
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-code:text-brand prose-code:bg-brand/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-card prose-pre:border prose-pre:rounded-xl
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:marker:text-brand"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pb-8 border-b">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center justify-between py-8 border-b">
          <p className="font-medium">Share this article</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://Morphlix.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://Morphlix.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <LinkIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-card border rounded-xl p-6 my-12">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-brand" />
            </div>
            <div>
              <p className="font-bold text-lg">{post.author.name}</p>
              <p className="text-sm text-muted-foreground mb-3">
                {post.author.role} at Morphlix
              </p>
              <p className="text-sm text-muted-foreground">
                Building cloud infrastructure that scales. AWS certified
                architect with a passion for serverless and cost optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="my-12">
          <NewsletterSignup
            title="Enjoyed this article?"
            description="Subscribe to get more cloud engineering insights delivered to your inbox."
          />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}

function formatContent(content: string): string {
  // Convert markdown-style content to HTML
  // This is a simple implementation - in production, use a proper markdown parser

  let html = content
    // Headers
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Code blocks
    .replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      '<pre><code class="language-$1">$2</code></pre>',
    )
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Lists
    .replace(/^- (.*$)/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
    // Numbered lists
    .replace(/^\d+\. (.*$)/gm, "<li>$1</li>")
    // Checkboxes
    .replace(
      /- \[ \] (.*$)/gm,
      '<li class="flex items-center gap-2"><input type="checkbox" disabled /> $1</li>',
    )
    .replace(
      /- \[x\] (.*$)/gm,
      '<li class="flex items-center gap-2"><input type="checkbox" checked disabled /> $1</li>',
    )
    // Paragraphs
    .replace(/\n\n/g, "</p><p>")
    // Line breaks
    .replace(/\n/g, "<br />");

  // Wrap in paragraph tags
  html = "<p>" + html + "</p>";

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, "");
  html = html.replace(/<p><br \/>/g, "<p>");
  html = html.replace(/<br \/><\/p>/g, "</p>");

  return html;
}
