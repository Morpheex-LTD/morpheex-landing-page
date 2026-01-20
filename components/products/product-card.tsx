"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  status: "live" | "beta" | "coming-soon";
  features: string[];
  link?: string;
  demoLink?: string;
}

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const statusColors = {
    live: "bg-green-500/10 text-green-500 border-green-500/20",
    beta: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    "coming-soon": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  };

  const statusLabels = {
    live: "Live",
    beta: "Beta",
    "coming-soon": "Coming Soon",
  };

  if (featured) {
    return (
      <div className="group relative bg-gradient-to-br from-card to-card/50 border rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="relative aspect-video md:aspect-auto md:h-full min-h-[300px] bg-gradient-to-br from-brand/10 to-brand-accent/10 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center shadow-lg shadow-brand/30">
                <Box className="w-12 h-12 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
                {product.name}
              </span>
            </div>
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge variant="outline" className={statusColors[product.status]}>
                {statusLabels[product.status]}
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                Free
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
                {product.category}
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h3>
            <p className="text-lg text-brand font-medium mb-4">{product.tagline}</p>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            <ul className="space-y-2 mb-8">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {product.link && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
                >
                  <Link href={product.link}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              )}
              {product.demoLink && (
                <Button variant="outline" asChild>
                  <a href={product.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
              {product.status === "coming-soon" && (
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-card border rounded-xl overflow-hidden hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-video bg-gradient-to-br from-brand/10 to-brand-accent/10 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform duration-300">
            <Box className="w-7 h-7 text-white" />
          </div>
          <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
            {product.name}
          </span>
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="outline" className={statusColors[product.status]}>
            {statusLabels[product.status]}
          </Badge>
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
            Free
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-card/80 backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-1">{product.name}</h3>
        <p className="text-sm text-brand font-medium mb-3">{product.tagline}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {product.link && (
            <Button size="sm" variant="outline" asChild className="flex-1">
              <Link href={product.link}>
                Learn More
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </Button>
          )}
          {product.demoLink && (
            <Button size="sm" variant="ghost" asChild>
              <a href={product.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
