import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRightIcon,
  BarChartIcon,
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
      icon: <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      color: "emerald",
    },
    {
      label: "Deployment Speed",
      value: "10x",
      icon: <Zap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      color: "cyan",
    },
    {
      label: "Uptime Achieved",
      value: "99.99%",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      color: "blue",
    },
    {
      label: "Load Time Improvement",
      value: "-1.2s",
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
      color: "purple",
    },
  ];

  return (
    <section id="case-study" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand/10 text-brand border-brand/30 px-4 py-2 hover:bg-brand/20 transition-all">
            <BarChartIcon className="w-4 h-4 mr-2 inline" />
            Case Study #01
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              From Downtime to{" "}
            </span>
            <span className="bg-gradient-to-r from-brand-accent to-brand bg-clip-text text-transparent">
              Domain Dominance
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            How we helped a Fortune 500 e-commerce platform eliminate critical
            downtime and achieve industry-leading performance
          </p>
        </div>

        {/* Client Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-card/50 to-card/30 border rounded-xl p-6 backdrop-blur-sm hover:border-brand/30 transition-colors">
            <Building2Icon className="w-8 h-8 text-brand mb-3" />
            <div className="text-sm text-muted-foreground mb-1">Client</div>
            <div className="text-foreground font-bold text-lg">
              Fortune 500 E-commerce
            </div>
          </div>
          <div className="bg-gradient-to-br from-card/50 to-card/30 border rounded-xl p-6 backdrop-blur-sm hover:border-brand-accent/30 transition-colors">
            <UsersIcon className="w-8 h-8 text-brand-accent mb-3" />
            <div className="text-sm text-muted-foreground mb-1">Scale</div>
            <div className="text-foreground font-bold text-lg">10M+ Daily Users</div>
          </div>
          <div className="bg-gradient-to-br from-card/50 to-card/30 border rounded-xl p-6 backdrop-blur-sm hover:border-brand/30 transition-colors">
            <ClockIcon className="w-8 h-8 text-brand mb-3" />
            <div className="text-sm text-muted-foreground mb-1">Timeline</div>
            <div className="text-foreground font-bold text-lg">
              12 Week Transformation
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side: The Story */}
          <div className="space-y-6">
            {/* Challenge */}
            <div className="bg-gradient-to-br from-red-500/5 to-card/50 border border-red-500/30 dark:border-red-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A leading e-commerce platform was hemorrhaging{" "}
                  <span className="text-red-600 dark:text-red-400 font-bold">
                    $15,000 per hour
                  </span>{" "}
                  during peak traffic downtime. Their monolithic legacy
                  architecture had become a business liability:
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Black-box codebase making updates take 6+ weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>Unable to scale during holiday shopping surges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>
                      3.2-second page loads causing 35% cart abandonment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                    <span>$180K/month in over-provisioned server costs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-brand/5 to-card/50 border border-brand/30 dark:border-brand/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  The Morpheex Solution
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We implemented a three-phase modernization strategy:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Frontend Revolution",
                      desc: "Decoupled the frontend using Next.js 14 with React Server Components, deployed to Vercel Edge Network for sub-200ms global load times",
                    },
                    {
                      title: "Serverless Backend",
                      desc: "Migrated core services to AWS Lambda with API Gateway, enabling automatic scaling from 0 to 10,000+ concurrent requests without manual intervention",
                    },
                    {
                      title: "AI-Powered Intelligence",
                      desc: "Integrated Amazon Bedrock to deliver personalized product recommendations, increasing conversion rates by 28% through intelligent customer insights",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-brand">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <div className="text-foreground font-semibold mb-1">
                          {item.title}
                        </div>
                        <div className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="bg-gradient-to-br from-card/50 to-card/30 border rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-foreground mb-4">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 14",
                  "AWS Lambda",
                  "API Gateway",
                  "DynamoDB",
                  "S3",
                  "CloudFront",
                  "Amazon Bedrock",
                  "Vercel Edge",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Results & Metrics */}
          <div className="space-y-6">
            {/* Key Results Header */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 dark:border-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Measurable Impact
              </h3>
              <p className="text-muted-foreground text-sm">
                Achieved within 12 weeks of deployment
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-gradient-to-br from-card/50 to-card/30 border rounded-2xl p-6 hover:border-brand/30 transition-all group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="mb-4 p-3 bg-muted rounded-xl group-hover:scale-110 transition-transform"
                    >
                      {metric.icon}
                    </div>
                    <div
                      className={`text-4xl font-black mb-2 bg-gradient-to-r from-${metric.color}-600 to-${metric.color}-500 dark:from-${metric.color}-400 dark:to-${metric.color}-300 bg-clip-text text-transparent`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Impact */}
            <div className="bg-gradient-to-br from-card/50 to-card/30 border rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
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
                    className="flex justify-between items-center py-2 border-b last:border-0"
                  >
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <span className="text-foreground font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-brand to-brand-accent rounded-2xl p-8 relative overflow-hidden group cursor-pointer hover:opacity-90 transition-all">
              <BarChartIcon className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10">
                <div className="text-primary-foreground font-bold text-xl mb-2">
                  Want these results for your platform?
                </div>
                <div className="text-primary-foreground/90 text-sm mb-4">
                  Download the complete technical case study with architecture
                  diagrams and implementation timeline
                </div>
                <Button className="bg-background text-foreground hover:bg-background/90 font-semibold group/btn shadow-lg">
                  Download Case Study
                  <ArrowUpRightIcon className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
