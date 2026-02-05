import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Headphones,
  Play,
  Search,
  Video,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free resources to help you master cloud infrastructure. Webinars, whitepapers, guides, and podcasts from AWS experts.",
};

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "webinar" | "whitepaper" | "guide" | "podcast" | "video";
  category: string;
  duration?: string;
  pages?: number;
  date: string;
  featured?: boolean;
  thumbnail?: string;
  link?: string;
  downloadLink?: string;
}

const resources: Resource[] = [
  {
    id: "1",
    title: "The Complete Guide to AWS Cost Optimization in 2026",
    description:
      "Learn the strategies that helped our clients save over $5M in AWS costs. Covers Reserved Instances, Savings Plans, spot instances, and architectural optimizations.",
    type: "whitepaper",
    category: "Cost Optimization",
    pages: 45,
    date: "2026-01-15",
    featured: true,
    downloadLink: "#",
  },
  {
    id: "2",
    title: "Migrating from Monolith to Microservices: A Practical Workshop",
    description:
      "2-hour recorded workshop walking through a real migration project. Includes code samples, architecture diagrams, and common pitfalls to avoid.",
    type: "webinar",
    category: "Architecture",
    duration: "2h 15m",
    date: "2026-01-10",
    featured: true,
    link: "#",
  },
  {
    id: "3",
    title: "Kubernetes Cost Management Best Practices",
    description:
      "Deep dive into managing costs in EKS/Kubernetes environments. Covers resource requests/limits, cluster autoscaling, and cost allocation strategies.",
    type: "video",
    category: "Kubernetes",
    duration: "45m",
    date: "2026-01-08",
    link: "#",
  },
  {
    id: "4",
    title: "SOC 2 Compliance on AWS: The Fast Track",
    description:
      "How to achieve SOC 2 Type II compliance in weeks, not months. Practical guide with templates, checklists, and automation scripts.",
    type: "whitepaper",
    category: "Security & Compliance",
    pages: 32,
    date: "2026-01-05",
    downloadLink: "#",
  },
  {
    id: "5",
    title: "Cloud Cost Conversations",
    description:
      "Weekly podcast discussing cloud economics, FinOps practices, and interviews with engineering leaders about managing cloud spend.",
    type: "podcast",
    category: "Cost Optimization",
    duration: "30m/episode",
    date: "2026-01-18",
    featured: true,
    link: "#",
  },
  {
    id: "6",
    title: "Infrastructure as Code Patterns with Terraform",
    description:
      "Best practices for organizing Terraform code, managing state, and building reusable modules. Includes real-world examples from production environments.",
    type: "guide",
    category: "DevOps",
    pages: 28,
    date: "2026-01-03",
    downloadLink: "#",
  },
  {
    id: "7",
    title: "Serverless Architecture Deep Dive",
    description:
      "When to use Lambda vs containers, handling cold starts, and building cost-effective serverless applications at scale.",
    type: "webinar",
    category: "Architecture",
    duration: "1h 30m",
    date: "2025-12-28",
    link: "#",
  },
  {
    id: "8",
    title: "AWS Well-Architected Review Checklist",
    description:
      "Comprehensive checklist covering all five pillars. Use this to self-assess your architecture before engaging with AWS.",
    type: "guide",
    category: "Architecture",
    pages: 15,
    date: "2025-12-20",
    downloadLink: "#",
  },
  {
    id: "9",
    title: "Real-Time Cost Monitoring with CloudPulse",
    description:
      "Tutorial video showing how to set up real-time cost alerts, custom dashboards, and anomaly detection.",
    type: "video",
    category: "Cost Optimization",
    duration: "25m",
    date: "2025-12-15",
    link: "#",
  },
  {
    id: "10",
    title: "Database Migration Strategies: Zero-Downtime Approaches",
    description:
      "Technical deep dive into migrating databases to AWS RDS/Aurora with zero downtime. Covers DMS, blue-green deployments, and data validation.",
    type: "whitepaper",
    category: "Migration",
    pages: 38,
    date: "2025-12-10",
    downloadLink: "#",
  },
  {
    id: "11",
    title: "FinOps for Engineering Teams",
    description:
      "How to build a cost-aware culture without slowing down development. Practical tips for integrating cost visibility into your workflow.",
    type: "podcast",
    category: "Cost Optimization",
    duration: "35m",
    date: "2025-12-05",
    link: "#",
  },
  {
    id: "12",
    title: "Multi-Account AWS Organization Strategy",
    description:
      "Guide to structuring your AWS Organization for security, cost allocation, and operational efficiency. Includes landing zone recommendations.",
    type: "guide",
    category: "Architecture",
    pages: 22,
    date: "2025-12-01",
    downloadLink: "#",
  },
];

const typeIcons = {
  webinar: Video,
  whitepaper: FileText,
  guide: BookOpen,
  podcast: Headphones,
  video: Play,
};

const typeColors = {
  webinar: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  whitepaper: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  guide: "bg-green-500/10 text-green-500 border-green-500/20",
  podcast: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  video: "bg-red-500/10 text-red-500 border-red-500/20",
};

const categories = [
  "All",
  "Cost Optimization",
  "Architecture",
  "Security & Compliance",
  "DevOps",
  "Migration",
  "Kubernetes",
];

const types = ["All", "Webinar", "Whitepaper", "Guide", "Podcast", "Video"];

export default function ResourcesPage() {
  const featuredResources = resources.filter((r) => r.featured);
  const allResources = resources.filter((r) => !r.featured);

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-3 h-3 mr-1" />
            Resource Library
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn from{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              Cloud Experts
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free webinars, whitepapers, and guides to help you master AWS and
            cloud infrastructure.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {types.slice(0, 4).map((type) => (
                <Badge
                  key={type}
                  variant="outline"
                  className="cursor-pointer hover:bg-brand/10 hover:border-brand/30 transition-colors"
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="cursor-pointer hover:bg-brand/10 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => {
              const Icon = typeIcons[resource.type];
              return (
                <div
                  key={resource.id}
                  className="bg-card border rounded-2xl overflow-hidden group hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
                >
                  {/* Thumbnail/Header */}
                  <div className="bg-gradient-to-br from-brand/20 to-brand-accent/20 p-8 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-brand" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className={typeColors[resource.type]}
                      >
                        {resource.type}
                      </Badge>
                      <Badge variant="secondary">{resource.category}</Badge>
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-brand transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {resource.duration || `${resource.pages} pages`}
                      </span>
                      {resource.downloadLink ? (
                        <Button size="sm" variant="outline">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Watch
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* All Resources */}
        <section>
          <h2 className="text-2xl font-bold mb-6">All Resources</h2>
          <div className="space-y-4">
            {allResources.map((resource) => {
              const Icon = typeIcons[resource.type];
              return (
                <div
                  key={resource.id}
                  className="bg-card border rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4 hover:border-brand/50 transition-colors group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-brand transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Badge
                        variant="outline"
                        className={`${typeColors[resource.type]} text-xs`}
                      >
                        {resource.type}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {resource.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(resource.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-semibold group-hover:text-brand transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {resource.description}
                    </p>
                  </div>

                  {/* Meta & Action */}
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-sm text-muted-foreground">
                      {resource.duration || `${resource.pages} pages`}
                    </span>
                    {resource.downloadLink ? (
                      <Button size="sm" variant="ghost">
                        <Download className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Get New Resources in Your Inbox
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for weekly cloud insights, new
                resources, and exclusive content.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Weekly cloud cost tips",
                  "New webinars and guides",
                  "Industry trends and insights",
                  "Exclusive subscriber content",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-card border rounded-xl p-6">
                <div className="space-y-4">
                  <Input type="email" placeholder="you@company.com" />
                  <Button className="w-full bg-gradient-to-r from-brand to-brand-accent hover:opacity-90">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
