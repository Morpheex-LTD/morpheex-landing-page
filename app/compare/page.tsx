import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Code2,
  DollarSign,
  GitBranch,
  Scale,
  Shield,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare | Morpheex vs Traditional Agencies & Freelancers",
  description:
    "See how Morpheex compares to traditional consulting firms, freelance developers, and in-house teams. AWS expertise, transparent pricing, and proven results.",
};

const comparisonData = [
  {
    feature: "AWS Expertise",
    morpheex: "14+ certifications, AWS Partner",
    traditional: "Generalist knowledge",
    freelance: "Varies widely",
    inHouse: "Training required",
  },
  {
    feature: "Project Timeline",
    morpheex: "4-12 weeks typical",
    traditional: "8-24 weeks typical",
    freelance: "Unpredictable",
    inHouse: "Competes with roadmap",
  },
  {
    feature: "Cost Structure",
    morpheex: "Fixed project pricing",
    traditional: "Hourly billing",
    freelance: "Hourly/project mix",
    inHouse: "Salary + benefits + overhead",
  },
  {
    feature: "Team Continuity",
    morpheex: "Dedicated team throughout",
    traditional: "Staff rotation common",
    freelance: "Single point of failure",
    inHouse: "Subject to turnover",
  },
  {
    feature: "Knowledge Transfer",
    morpheex: "Documentation + training included",
    traditional: "Additional cost",
    freelance: "Often minimal",
    inHouse: "Internal by default",
  },
  {
    feature: "24/7 Support",
    morpheex: "Available with retainer",
    traditional: "Premium pricing",
    freelance: "Rarely available",
    inHouse: "Requires on-call rotation",
  },
  {
    feature: "Scalability",
    morpheex: "Team scales with need",
    traditional: "Slow to staff up",
    freelance: "Limited capacity",
    inHouse: "Hiring timeline",
  },
  {
    feature: "Code Quality",
    morpheex: "Code review + testing standards",
    traditional: "Varies by team",
    freelance: "Varies by individual",
    inHouse: "Depends on culture",
  },
];

const detailedComparisons = [
  {
    title: "Morpheex vs Big 4 Consulting",
    description:
      "Large consulting firms bring brand recognition but often lack hands-on technical depth.",
    morpheexAdvantages: [
      "Direct access to senior engineers (no junior staff)",
      "Fixed pricing vs hourly billing",
      "AWS-specialized vs generalist teams",
      "Faster delivery (weeks vs months)",
      "Production-ready code vs slide decks",
    ],
    theirAdvantages: [
      "Larger teams for massive projects",
      "Global presence and compliance expertise",
      "Established enterprise relationships",
    ],
    icon: Users,
  },
  {
    title: "Morpheex vs Freelance Developers",
    description:
      "Freelancers can be cost-effective but come with reliability and scalability concerns.",
    morpheexAdvantages: [
      "Team redundancy (no single point of failure)",
      "Consistent availability and response times",
      "Comprehensive documentation and handoff",
      "Broader expertise across the stack",
      "Professional project management",
    ],
    theirAdvantages: [
      "Lower hourly rates",
      "Flexibility for small tasks",
      "Direct communication with the developer",
    ],
    icon: Code2,
  },
  {
    title: "Morpheex vs Building In-House",
    description:
      "Hiring internal teams provides control but requires significant investment and time.",
    morpheexAdvantages: [
      "Immediate availability (no recruiting)",
      "Pre-built expertise and processes",
      "No training or onboarding overhead",
      "Scales up/down with project needs",
      "Lower total cost for project work",
    ],
    theirAdvantages: [
      "Long-term institutional knowledge",
      "Full control over priorities",
      "Deep product understanding",
    ],
    icon: GitBranch,
  },
];

const whyMorpheex = [
  {
    icon: Award,
    title: "AWS Specialized",
    description:
      "We don't spread thin across clouds. AWS is our focus, and it shows in our depth of expertise.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Fixed project pricing with clear deliverables. No surprise invoices or scope creep billing.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Our battle-tested processes and templates mean we deliver in weeks, not months.",
  },
  {
    icon: Shield,
    title: "Production Quality",
    description:
      "We build infrastructure that works on day one. No prototypes that need to be rebuilt.",
  },
  {
    icon: Zap,
    title: "Real Cost Savings",
    description:
      "60% average reduction in cloud costs. Our work pays for itself, usually within the first year.",
  },
  {
    icon: Scale,
    title: "Right-Sized Engagement",
    description:
      "From 4-week sprints to 12-month partnerships. We match our engagement to your actual needs.",
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium bg-brand/10 border-brand/20 text-brand mb-6"
          >
            <Scale className="w-4 h-4 mr-2" />
            Honest Comparison
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How Does Morpheex{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Compare?
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in transparency. Here&apos;s an honest look at how we stack
            up against consulting firms, freelancers, and building in-house.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="text-left p-4 font-medium text-brand">
                    Morpheex
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Traditional Agency
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    Freelancer
                  </th>
                  <th className="text-left p-4 font-medium text-muted-foreground">
                    In-House Team
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? "bg-card/50" : ""}
                  >
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-brand font-medium">
                      {row.morpheex}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {row.traditional}
                    </td>
                    <td className="p-4 text-muted-foreground">{row.freelance}</td>
                    <td className="p-4 text-muted-foreground">{row.inHouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Comparisons */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Detailed Comparisons</h2>
          <div className="space-y-8">
            {detailedComparisons.map((comparison) => {
              const Icon = comparison.icon;
              return (
                <div
                  key={comparison.title}
                  className="bg-card border rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {comparison.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {comparison.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-brand/5 border border-brand/20 rounded-xl p-5">
                      <h4 className="font-semibold text-brand mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Morpheex Advantages
                      </h4>
                      <ul className="space-y-2">
                        {comparison.morpheexAdvantages.map((adv) => (
                          <li
                            key={adv}
                            className="text-sm flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-5">
                      <h4 className="font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                        <XCircle className="w-4 h-4" />
                        Their Advantages
                      </h4>
                      <ul className="space-y-2">
                        {comparison.theirAdvantages.map((adv) => (
                          <li
                            key={adv}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                            {adv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Morpheex */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Companies Choose Us</h2>
            <p className="text-muted-foreground">
              The factors that matter most to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMorpheex.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-card border rounded-xl p-6 hover:border-brand/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to see the difference?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a free consultation. We&apos;ll assess your needs and give
              you an honest recommendation—even if it&apos;s not us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
              >
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/success">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
