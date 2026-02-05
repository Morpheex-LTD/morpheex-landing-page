import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRightIcon,
  Building2Icon,
  CheckCircle2,
  ClockIcon,
  DollarSign,
  TrendingUp,
  UsersIcon,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";

export function CaseStudy() {
  const metrics = [
    {
      label: "Cost Reduction",
      value: "42%",
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Deploy Speed",
      value: "10x",
      icon: <Zap className="w-5 h-5 text-brand" />,
    },
    {
      label: "Uptime",
      value: "99.99%",
      icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
    },
    {
      label: "Load Time",
      value: "-1.2s",
      icon: <TrendingUp className="w-5 h-5 text-violet-600" />,
    },
  ];

  return (
    <section id="case-study" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand mb-3 uppercase tracking-wide">
            Case Study
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            From Downtime to Market Leader
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How we helped a Fortune 500 e-commerce platform eliminate critical
            downtime and achieve industry-leading performance
          </p>
        </div>

        {/* Client Overview */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-card border rounded-lg p-5">
            <Building2Icon className="w-5 h-5 text-brand mb-3" />
            <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
              Client
            </div>
            <div className="text-foreground font-semibold">
              Fortune 500 E-commerce
            </div>
          </div>
          <div className="bg-card border rounded-lg p-5">
            <UsersIcon className="w-5 h-5 text-brand mb-3" />
            <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
              Scale
            </div>
            <div className="text-foreground font-semibold">10M+ Daily Users</div>
          </div>
          <div className="bg-card border rounded-lg p-5">
            <ClockIcon className="w-5 h-5 text-brand mb-3" />
            <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
              Timeline
            </div>
            <div className="text-foreground font-semibold">12 Weeks</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Challenge */}
            <div className="bg-card border border-red-200 dark:border-red-900/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                The Challenge
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Their monolithic architecture was costing{" "}
                <span className="text-red-600 font-medium">$15,000/hour</span>{" "}
                during peak traffic downtime.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>6+ week update cycles due to legacy codebase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>Unable to scale during holiday traffic surges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>3.2s page loads causing 35% cart abandonment</span>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-card border border-brand/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand" />
                Our Solution
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Frontend Overhaul",
                    desc: "Modern React framework deployed to edge CDN for sub-200ms global load times",
                  },
                  {
                    title: "Serverless Backend",
                    desc: "Event-driven architecture enabling auto-scaling to 10K+ concurrent requests",
                  },
                  {
                    title: "AI Integration",
                    desc: "ML-powered recommendations increasing conversions by 28%",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-brand">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <div className="text-foreground font-medium text-sm mb-0.5">
                        {item.title}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "Serverless",
                "Kubernetes",
                "PostgreSQL",
                "Redis",
                "Terraform",
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-card border rounded-lg p-5 text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted mb-3">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Impact */}
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                Business Outcomes
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Annual Cost Savings", value: "$912K" },
                  { label: "Revenue Increase", value: "+$2.4M" },
                  { label: "Customer Satisfaction", value: "4.8/5.0" },
                  { label: "Zero Downtime Days", value: "127" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-muted-foreground text-sm">
                      {item.label}
                    </span>
                    <span className="text-foreground font-semibold text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand rounded-lg p-6">
              <div className="text-white font-semibold text-lg mb-2">
                Get similar results for your platform
              </div>
              <div className="text-white/80 text-sm mb-4">
                Download the complete technical case study
              </div>
              <Button className="bg-white text-brand hover:bg-white/90 font-medium">
                Download Case Study
                <ArrowUpRightIcon className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
