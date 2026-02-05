import { FAQ } from "@/components/faq/faq";
import { Button } from "@/components/ui/button";
import { Check, Rocket, Star, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Flexible Cloud Modernization Packages",
  description:
    "Transparent pricing for cloud modernization and serverless solutions. Choose from Sprint, Transform, or Enterprise packages. All include free audit and 24/7 support.",
  openGraph: {
    title: "Morphlix Pricing | Cloud Modernization Packages",
    description:
      "Flexible pricing for cloud modernization. From quick wins to full enterprise transformation. Start with a free cloud audit.",
  },
};

export default function PricingPage() {
  const plans = [
    {
      name: "Sprint",
      icon: Zap,
      price: "$15K",
      period: "4-6 weeks",
      description: "Targeted improvements and quick wins",
      features: [
        "Single service modernization",
        "AWS infrastructure audit",
        "Performance optimization",
        "2 weeks post-launch support",
        "Documentation & training",
      ],
      popular: false,
    },
    {
      name: "Transform",
      icon: Rocket,
      price: "$45K",
      period: "8-12 weeks",
      description: "Full-stack modernization",
      features: [
        "Everything in Sprint, plus:",
        "Multi-service architecture",
        "AWS Lambda + API Gateway",
        "Database migration",
        "CI/CD pipeline automation",
        "3 months managed support",
        "Security audit & hardening",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Star,
      price: "Custom",
      period: "12+ weeks",
      description: "Mission-critical systems",
      features: [
        "Everything in Transform, plus:",
        "Multi-region deployment",
        "AI/ML integration",
        "Disaster recovery planning",
        "Compliance (SOC2, HIPAA)",
        "Dedicated architect",
        "6 months managed support",
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No surprises. Fixed pricing for world-class cloud
            modernization.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-card border rounded-xl p-6 ${
                  plan.popular ? "ring-2 ring-brand" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex w-12 h-12 rounded-xl bg-brand/10 items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm ${
                        feature.includes("Everything")
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-brand hover:bg-brand-dark"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* All Plans Include */}
        <div className="bg-card border rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Every Plan Includes
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free AWS Audit", desc: "$5K value included" },
              { title: "AWS Optimization", desc: "Avg 60% cost reduction" },
              { title: "24/7 Support", desc: "DevOps team on standby" },
              { title: "Money-Back Guarantee", desc: "30-day satisfaction" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-10 h-10 rounded-full bg-brand/10 mx-auto mb-3 flex items-center justify-center">
                  <Check className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <FAQ
          title="Pricing FAQs"
          items={[
            {
              question: "What's included in the free cloud audit?",
              answer:
                "A comprehensive analysis of your infrastructure, including cost optimization opportunities, security gaps, and a modernization roadmap with ROI projections.",
            },
            {
              question: "Can I upgrade my plan mid-project?",
              answer:
                "Yes. We'll credit your initial investment toward the upgraded package. Many clients start with Sprint to prove value, then scale to Transform.",
            },
            {
              question: "What if I need ongoing support after launch?",
              answer:
                "All plans include post-launch support. We also offer managed service packages starting at $2K/month for continuous optimization.",
            },
            {
              question: "Do you offer payment plans?",
              answer:
                "Yes. Enterprise clients can spread payments across milestones. Contact us for custom financing options.",
            },
          ]}
        />
      </div>
    </main>
  );
}
