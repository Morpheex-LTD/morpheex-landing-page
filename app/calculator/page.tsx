import { CostCalculator } from "@/components/calculator/cost-calculator";
import { Badge } from "@/components/ui/badge";
import { Calculator, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Cost Calculator | Estimate Your AWS Savings",
  description:
    "Calculate your potential AWS cost savings with Morpheex. Get instant estimates based on your current cloud spend and see how much you could save.",
  openGraph: {
    title: "Cloud Cost Calculator | Morpheex",
    description:
      "Calculate your potential AWS cost savings with Morpheex. Get instant estimates based on your current cloud spend.",
  },
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium bg-brand/10 border-brand/20 text-brand mb-6"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Free Cost Analysis
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cloud Cost{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Calculator
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See how much you could save on your AWS bill. Our clients save an
            average of 60% on their monthly cloud costs.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Instant results
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Based on real client data
            </span>
          </div>
        </div>

        {/* Calculator */}
        <CostCalculator />

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto">
          * Estimated savings are based on average results from our past client
          engagements. Actual savings may vary depending on your specific
          infrastructure, usage patterns, and optimization opportunities. A
          detailed audit will provide more accurate projections.
        </p>
      </div>
    </main>
  );
}
