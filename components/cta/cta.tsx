import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "brand" | "minimal";
}

export function CTA({
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
  variant = "default",
}: CTAProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case "brand":
        return "bg-gradient-to-r from-brand/20 to-brand-accent/20 border-brand/30";
      case "minimal":
        return "bg-gradient-to-br from-card/50 to-card/30";
      default:
        return "bg-gradient-to-br from-card/80 to-card/50";
    }
  };

  return (
    <div
      className={`border rounded-3xl p-12 text-center ${getBackgroundClass()}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href={primaryButtonHref}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90 text-primary-foreground rounded-full px-8 font-bold shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:scale-105 transition-all"
          >
            {primaryButtonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
        {secondaryButtonText && secondaryButtonHref && (
          <Link href={secondaryButtonHref}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 font-semibold"
            >
              {secondaryButtonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
