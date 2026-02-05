import { BlogCard } from "@/components/blog/blog-card";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  blogPosts,
  getAllCategories,
  getFeaturedPosts,
} from "@/lib/blog/posts";
import { BookOpen, Rss } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Cloud Insights & Engineering Best Practices",
  description:
    "Expert insights on AWS, serverless architecture, cloud cost optimization, and modern software engineering from the Morphlix team.",
  openGraph: {
    title: "Morphlix Blog | Cloud Engineering Insights",
    description:
      "Expert insights on AWS, serverless architecture, and cloud cost optimization.",
  },
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const regularPosts = blogPosts.filter((post) => !post.featured);
  const categories = getAllCategories();

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium bg-brand/10 border-brand/20 text-brand mb-6"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Engineering Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cloud{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into AWS, serverless architecture, cost optimization, and
            modern engineering practices from our team of cloud architects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button
            variant="default"
            size="sm"
            className="bg-brand hover:bg-brand/90"
          >
            All Posts
          </Button>
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Rss className="w-5 h-5 text-brand" />
              Featured Articles
            </h2>
            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} featured />
              ))}
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-xl mx-auto">
          <NewsletterSignup
            title="Subscribe to Our Newsletter"
            description="Get weekly cloud engineering insights, tutorials, and best practices delivered to your inbox."
          />
        </section>
      </div>
    </main>
  );
}
