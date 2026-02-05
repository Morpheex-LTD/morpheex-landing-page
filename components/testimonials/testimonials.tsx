import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry?: string;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function Testimonials({
  testimonials,
  title = "Trusted by Industry Leaders",
  subtitle,
}: TestimonialsProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border rounded-xl p-6 hover:border-brand/30 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground text-sm mb-5 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                  style={{
                    background: `linear-gradient(135deg, hsl(${(index * 60 + 270) % 360}, 70%, 45%), hsl(${(index * 60 + 300) % 360}, 70%, 55%))`,
                  }}
                >
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Industry Badge */}
              {testimonial.industry && (
                <Badge
                  variant="secondary"
                  className="mt-4 text-xs"
                >
                  {testimonial.industry}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
