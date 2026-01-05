import { FAQ } from "@/components/faq/faq";
import { PageContainer, PageHeader } from "@/components/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Zap, Rocket, Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Flexible Cloud Modernization Packages",
  description:
    "Transparent pricing for AWS cloud modernization and serverless solutions. Choose from Sprint, Transform, or Enterprise packages. All include free audit and 24/7 support.",
  openGraph: {
    title: "Morpheex Pricing | Cloud Modernization Packages",
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
      description: "Perfect for targeted improvements and quick wins",
      features: [
        "Single service modernization",
        "AWS infrastructure audit",
        "Serverless migration (1 service)",
        "Performance optimization",
        "Cost analysis & recommendations",
        "2 weeks post-launch support",
        "Documentation & training",
      ],
      cta: "Start Sprint",
      popular: false,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Transform",
      icon: Rocket,
      price: "$45K",
      period: "8-12 weeks",
      description: "Full-stack modernization for growing businesses",
      features: [
        "Everything in Sprint, plus:",
        "Multi-service architecture redesign",
        "AWS Lambda + API Gateway setup",
        "Database migration (DynamoDB/RDS)",
        "CI/CD pipeline automation",
        "CloudFront CDN configuration",
        "3 months managed support",
        "Performance SLA guarantee",
        "Security audit & hardening",
      ],
      cta: "Get Transform",
      popular: true,
      gradient: "from-brand to-brand-accent",
    },
    {
      name: "Enterprise",
      icon: Star,
      price: "Custom",
      period: "12+ weeks",
      description: "Mission-critical systems requiring zero downtime",
      features: [
        "Everything in Transform, plus:",
        "Multi-region deployment",
        "AI/ML integration (Amazon Bedrock)",
        "Advanced monitoring & observability",
        "Disaster recovery planning",
        "Compliance (SOC2, HIPAA, PCI)",
        "Dedicated solutions architect",
        "6 months managed support",
        "White-glove migration service",
        "Custom SLA agreements",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto">
        <PageHeader
          badgeText="Transparent Pricing"
          title="CHOOSE YOUR PATH"
          description="No hidden fees. No surprises. Just honest pricing for world-class cloud modernization."
          centered
        />

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-gradient-to-br from-card/80 to-card/50 border rounded-3xl p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-brand shadow-2xl shadow-brand/20" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-primary-foreground border-0 px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} items-center justify-center mb-4`}
                  >
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-black text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 ${
                        feature.includes("Everything") ? "font-semibold text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* All Plans Include */}
        <div className="bg-gradient-to-br from-card/50 to-card/30 border rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Every Plan Includes
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Free Cloud Audit",
                desc: "$5K value included",
              },
              {
                title: "AWS Optimization",
                desc: "Avg 60% cost reduction",
              },
              {
                title: "24/7 Support",
                desc: "DevOps team on standby",
              },
              {
                title: "Money-Back Guarantee",
                desc: "30-day satisfaction guarantee",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand/10 mx-auto mb-4 flex items-center justify-center">
                  <Check className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ
          title="Pricing FAQs"
          items={[
            {
              question: "What's included in the free cloud audit?",
              answer:
                "A comprehensive analysis of your current infrastructure, including cost optimization opportunities, security gaps, and a detailed modernization roadmap with ROI projections.",
            },
            {
              question: "Can I upgrade my plan mid-project?",
              answer:
                "Absolutely. We'll credit your initial investment toward the upgraded package. Many clients start with Sprint to prove value, then scale to Transform.",
            },
            {
              question: "What if I need ongoing support after launch?",
              answer:
                "All plans include post-launch support. We also offer managed service packages starting at $2K/month for continuous optimization and monitoring.",
            },
            {
              question: "Do you offer payment plans?",
              answer:
                "Yes. Enterprise clients can spread payments across milestones. Contact us for custom financing options.",
            },
          ]}
        />
      </div>
    </PageContainer>
  );
}
