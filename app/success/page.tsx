"use client";

import {
  CaseStudyCard,
  PageContainer,
  StatsCard,
} from "@/components/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  Database,
  FileCode,
  GitBranch,
  Search,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const PROJECTS = [
  {
    id: "PROJECT_VLT_01",
    sector: "Fintech / Digital Ledger",
    challenge:
      "High-latency monolithic database causing 15% transaction drop-off.",
    solution:
      "Event-driven architecture using DynamoDB Streams and AWS Lambda.",
    metric: "-85% Latency",
    tag: "High Concurrency",
    color: "from-purple-500/20",
  },
  {
    id: "PROJECT_AMZ_04",
    sector: "E-Commerce / Global Retail",
    challenge:
      "Server crashes during seasonal surges of 100k+ concurrent users.",
    solution: "Auto-scaling Fargate clusters with CloudFront edge-caching.",
    metric: "100% Uptime",
    tag: "Elastic Scaling",
    color: "from-indigo-500/20",
  },
  {
    id: "PROJECT_GEN_AI",
    sector: "LegalTech / Document Intelligence",
    challenge: "Manual processing of 5,000+ legal documents per day.",
    solution: "Serverless RAG pipeline using Amazon Bedrock and OpenSearch.",
    metric: "4x Efficiency",
    tag: "GenAI Integration",
    color: "from-violet-500/20",
  },
];

export default function SuccessPage() {
  return (
    <PageContainer gradientPosition="corners">
      <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
              <div className="max-w-2xl">
                <Badge className="mb-6 bg-purple-500/10 text-purple-300 border-purple-500/30 px-4 py-2 text-sm hover:bg-purple-500/20 transition-all">
                  <Award className="w-4 h-4 mr-2 inline" />
                  Real Results, Real Impact
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6 leading-tight">
                  <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Proven Protocols.
                  </span>
                </h1>
                <p className="text-slate-300 text-xl leading-relaxed">
                  We don&apos;t just build apps; we engineer outcomes. Explore
                  our technical archives of architectural refactoring and
                  modernization.
                </p>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="border-indigo-500/30 bg-transparent hover:text-indigo-400 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all rounded-full"
                >
                  <Search className="w-4 h-4 mr-2" /> Filter by Service
                </Button>
              </div>
            </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-slate-900/50 border border-white/5 rounded-2xl backdrop-blur-sm">
            <StatsCard
              value="95%"
              label="Client Retention"
              gradient="from-green-400 to-emerald-400"
              icon={TrendingUp}
            />
            <StatsCard
              value="150+"
              label="Projects Delivered"
              gradient="from-indigo-400 to-purple-400"
              icon={FileCode}
            />
            <StatsCard
              value="60%"
              label="Avg Cost Reduction"
              gradient="from-yellow-400 to-orange-400"
              icon={Zap}
            />
            <StatsCard
              value="99.9%"
              label="Uptime SLA"
              gradient="from-cyan-400 to-blue-400"
              icon={ShieldCheck}
            />
          </div>
        </div>

        {/* Bento Grid Projects */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Featured Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <CaseStudyCard
                key={project.id}
                id={project.id}
                sector={project.sector}
                challenge={project.challenge}
                solution={project.solution}
                metric={project.metric}
                tag={project.tag}
                color={project.color}
              />
            ))}
          </div>
        </div>

        {/* System Diagram Showcase Block */}
        <div className="relative bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-[40px] p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-indigo-500/10 text-indigo-300 border-indigo-500/30 px-4 py-2 text-sm">
                <FileCode className="w-4 h-4 mr-2 inline" />
                For Enterprise Partners
              </Badge>
              <h3 className="text-4xl md:text-5xl font-black italic mb-6 leading-tight">
                <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  ARCHITECTURAL TRANSPARENCY.
                </span>
              </h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                For our Tier-1 partners, we provide full access to our
                proprietary{" "}
                <strong className="text-white">
                  Infrastructure-as-Code (IaC)
                </strong>{" "}
                library. See exactly how we map VPCs, IAM roles, and serverless
                logic.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Complete Terraform & CloudFormation templates
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Architecture decision records (ADRs)
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Security compliance documentation
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-full font-bold px-8 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-105"
              >
                Access Documentation Office
              </Button>
            </div>

            {/* Abstract Diagram Representation */}
            <div className="relative flex justify-center">
              <div className="w-full max-w-sm aspect-square relative flex items-center justify-center">
                <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-10 border border-purple-500/20 rounded-full animate-reverse-spin" />
                <div className="z-20 bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-2xl shadow-indigo-500/20">
                  <GitBranch className="w-16 h-16 text-white" />
                </div>
                {/* Floating Tech Icons */}
                <div className="absolute top-0 bg-slate-900 p-4 rounded-xl border border-indigo-500/30 shadow-xl translate-x-20 hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="absolute bottom-10 left-0 bg-slate-900 p-4 rounded-xl border border-purple-500/30 shadow-xl -translate-x-10 hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                </div>
                <div className="absolute top-20 left-0 bg-slate-900 p-4 rounded-xl border border-indigo-500/30 shadow-xl -translate-x-5 hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
