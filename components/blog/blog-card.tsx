import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/blog/posts";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="bg-gradient-to-br from-card to-card/50 border rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image/Visual Section */}
            <div className="relative aspect-video md:aspect-auto md:h-full min-h-[250px] bg-gradient-to-br from-brand/10 to-brand-accent/10 flex items-center justify-center p-8">
              <div className="text-center">
                <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
                  {post.category}
                </Badge>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-white">
                    {post.title.charAt(0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">
                {post.title}
              </h2>

              <p className="text-muted-foreground mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-1 text-sm font-medium text-brand group-hover:gap-2 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-card border rounded-xl overflow-hidden hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 h-full flex flex-col">
        {/* Header Visual */}
        <div className="relative aspect-[16/9] bg-gradient-to-br from-brand/5 to-brand-accent/5 flex items-center justify-center p-6">
          <div className="absolute top-3 left-3">
            <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
              {post.category}
            </Badge>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl font-bold text-white">
              {post.title.charAt(0)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-bold mb-2 group-hover:text-brand transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                <User className="w-3 h-3 text-brand" />
              </div>
              <span className="text-xs text-muted-foreground">
                {post.author.name}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </article>
    </Link>
  );
}
