"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Calculator,
  CheckCircle,
  Cloud,
  DollarSign,
  Percent,
  TrendingDown,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface CalculatorResults {
  currentAnnual: number;
  estimatedSavings: number;
  newAnnual: number;
  savingsPercent: number;
  optimizations: string[];
}

function calculateSavings(monthlySpend: number): CalculatorResults {
  // Savings percentage varies based on spend level
  let savingsPercent: number;
  const optimizations: string[] = [];

  if (monthlySpend <= 5000) {
    savingsPercent = 35;
    optimizations.push(
      "Reserved Instance optimization",
      "Right-sizing recommendations",
      "Unused resource cleanup",
    );
  } else if (monthlySpend <= 20000) {
    savingsPercent = 45;
    optimizations.push(
      "Reserved Instance & Savings Plans",
      "Spot Instance integration",
      "Storage tier optimization",
      "Compute right-sizing",
    );
  } else if (monthlySpend <= 50000) {
    savingsPercent = 55;
    optimizations.push(
      "Enterprise Discount Program",
      "Multi-region optimization",
      "Serverless migration opportunities",
      "Data transfer cost reduction",
      "License optimization",
    );
  } else {
    savingsPercent = 62;
    optimizations.push(
      "Enterprise Discount Program",
      "Custom pricing negotiations",
      "Full serverless transformation",
      "Multi-cloud arbitrage",
      "Advanced FinOps implementation",
      "Dedicated capacity planning",
    );
  }

  const currentAnnual = monthlySpend * 12;
  const estimatedSavings = Math.round((currentAnnual * savingsPercent) / 100);
  const newAnnual = currentAnnual - estimatedSavings;

  return {
    currentAnnual,
    estimatedSavings,
    newAnnual,
    savingsPercent,
    optimizations,
  };
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function CostCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(15000);
  const results = calculateSavings(monthlySpend);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-card border rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h3 className="font-semibold">Cloud Cost Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Estimate your potential savings
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Monthly Spend Input */}
            <div>
              <label className="text-sm font-medium mb-4 block">
                Current Monthly AWS Spend
              </label>
              <div className="flex items-center gap-4 mb-4">
                <DollarSign className="w-5 h-5 text-muted-foreground" />
                <span className="text-4xl font-bold">
                  {formatCurrency(monthlySpend)}
                </span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <Slider
                value={[monthlySpend]}
                onValueChange={(value) => setMonthlySpend(value[0])}
                min={1000}
                max={100000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$1,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Quick Select */}
            <div>
              <label className="text-sm font-medium mb-3 block">
                Quick Select
              </label>
              <div className="flex flex-wrap gap-2">
                {[5000, 15000, 30000, 50000, 75000].map((amount) => (
                  <Button
                    key={amount}
                    variant={monthlySpend === amount ? "default" : "outline"}
                    size="sm"
                    onClick={() => setMonthlySpend(amount)}
                    className={cn(
                      "border border-transparent",
                      monthlySpend === amount
                        ? "bg-brand hover:bg-brand/90"
                        : "",
                    )}
                  >
                    {formatCurrency(amount)}
                  </Button>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="pt-6 border-t">
              <p className="text-sm font-medium mb-3">
                Optimization strategies included:
              </p>
              <ul className="space-y-2">
                {results.optimizations.map((opt, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Savings Card */}
          <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-green-500" />
                Your Estimated Savings
              </h3>
              <span className="text-sm bg-green-500/10 text-green-500 px-3 py-1 rounded-full font-medium">
                {results.savingsPercent}% reduction
              </span>
            </div>

            <div className="space-y-6">
              {/* Annual Savings */}
              <div className="text-center py-6 bg-card/50 rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">
                  Annual Savings
                </p>
                <p className="text-5xl font-bold text-green-500">
                  {formatCurrency(results.estimatedSavings)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  per year with Morphlix optimization
                </p>
              </div>

              {/* Comparison */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">
                    Current Annual Cost
                  </p>
                  <p className="text-xl font-bold text-red-400 line-through opacity-70">
                    {formatCurrency(results.currentAnnual)}
                  </p>
                </div>
                <div className="bg-card/50 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">
                    Optimized Annual Cost
                  </p>
                  <p className="text-xl font-bold text-green-500">
                    {formatCurrency(results.newAnnual)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-card border rounded-xl p-4 text-center">
              <Cloud className="w-5 h-5 mx-auto mb-2 text-brand" />
              <p className="text-lg font-bold">150+</p>
              <p className="text-xs text-muted-foreground">Projects Done</p>
            </div>
            <div className="bg-card border rounded-xl p-4 text-center">
              <Percent className="w-5 h-5 mx-auto mb-2 text-brand" />
              <p className="text-lg font-bold">60%</p>
              <p className="text-xs text-muted-foreground">Avg. Savings</p>
            </div>
            <div className="bg-card border rounded-xl p-4 text-center">
              <Zap className="w-5 h-5 mx-auto mb-2 text-brand" />
              <p className="text-lg font-bold">4-6</p>
              <p className="text-xs text-muted-foreground">Weeks to ROI</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border rounded-xl p-6 text-center">
            <p className="font-medium mb-2">Ready to start saving?</p>
            <p className="text-sm text-muted-foreground mb-4">
              Get a free detailed audit of your AWS infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
              >
                <Link href="/contact">
                  Get Free Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
