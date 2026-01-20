import { BookingCard } from "@/components/booking/calendly-embed";
import { FAQ } from "@/components/faq/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  Database,
  FileSearch,
  MessageSquare,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Data Strategy Services | Amazon Bedrock, RAG, Data Lakes",
  description:
    "Build intelligent systems with AWS AI services. Amazon Bedrock integration, RAG architecture, data lakes, ETL pipelines. Turn data into competitive advantage.",
};

const capabilities = [
  {
    icon: Brain,
    title: "Amazon Bedrock Integration",
    description:
      "Deploy foundation models from Anthropic, Amazon, and others. Build conversational AI, content generation, and intelligent automation.",
  },
  {
    icon: FileSearch,
    title: "RAG Architecture",
    description:
      "Retrieval-Augmented Generation for accurate, grounded AI responses. Vector databases, semantic search, and knowledge base integration.",
  },
  {
    icon: Database,
    title: "Data Lake Implementation",
    description:
      "Build scalable data lakes on S3 with proper governance. Data catalogs, access controls, and cost-optimized storage tiers.",
  },
  {
    icon: Workflow,
    title: "ETL Pipelines",
    description:
      "Automated data pipelines with AWS Glue, Step Functions, and EventBridge. Real-time and batch processing at scale.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description:
      "Interactive dashboards with QuickSight, custom visualizations, and embedded analytics. Self-service BI for your team.",
  },
  {
    icon: MessageSquare,
    title: "Document Intelligence",
    description:
      "Extract insights from documents with Textract and Comprehend. Automated classification, entity extraction, and summarization.",
  },
];

const useCases = [
  {
    title: "Customer Support AI",
    description:
      "Build intelligent chatbots that understand context, retrieve relevant knowledge, and escalate appropriately.",
    results: "70% reduction in support tickets",
  },
  {
    title: "Document Processing",
    description:
      "Automate invoice processing, contract analysis, and compliance document review with AI.",
    results: "90% faster processing",
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast demand, detect anomalies, and optimize operations with machine learning models.",
    results: "25% improvement in accuracy",
  },
  {
    title: "Content Generation",
    description:
      "Generate product descriptions, marketing copy, and personalized recommendations at scale.",
    results: "10x content velocity",
  },
];

const faqs = [
  {
    question: "Which AI models do you work with?",
    answer:
      "We primarily use Amazon Bedrock for access to Claude (Anthropic), Amazon Titan, and other foundation models. We also work with OpenAI, Hugging Face models, and custom fine-tuned models when appropriate.",
  },
  {
    question: "How do you ensure AI responses are accurate?",
    answer:
      "We implement RAG (Retrieval-Augmented Generation) architectures that ground AI responses in your actual data. This includes vector databases for semantic search, citation tracking, and confidence scoring.",
  },
  {
    question: "What about data privacy and security?",
    answer:
      "All AI workloads run in your AWS account. We implement encryption, access controls, and audit logging. For sensitive data, we can deploy models that never leave your VPC.",
  },
  {
    question: "Can you work with our existing data infrastructure?",
    answer:
      "Yes. We integrate with existing data warehouses, databases, and BI tools. We focus on augmenting your current infrastructure rather than replacing it entirely.",
  },
];

export default function AIDataStrategyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-500/10 text-amber-500 border-amber-500/20">
                <Sparkles className="w-4 h-4 mr-2" />
                AI & Data Strategy
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Turn Your Data into{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Competitive Advantage
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Build intelligent systems with AWS AI services. From data lakes to
                ML pipelines, we help you extract insights and automate decisions.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90"
                  asChild
                >
                  <Link href="/contact">
                    Start AI Journey
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/products">Explore Morphlix AI Tools</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Amazon Bedrock experts
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Enterprise-grade security
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Proven ROI
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5x", label: "Faster Insights" },
                { value: "80%", label: "Process Automation" },
                { value: "3x", label: "ROI on Data" },
                { value: "50+", label: "AI Projects Delivered" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border rounded-xl p-6 text-center"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 py-20 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Build</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI and data solutions powered by AWS services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.title}
                  className="bg-card border rounded-xl p-6 hover:border-amber-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="font-bold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-muted-foreground">
              AI solutions delivering measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-card border rounded-xl p-6 hover:border-amber-500/30 transition-colors"
              >
                <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {useCase.description}
                </p>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  {useCase.results}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <FAQ
            items={faqs}
            title="Frequently Asked Questions"
            subtitle="Common questions about our AI & data services"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <BookingCard />
            <div className="bg-card border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Ready to leverage AI?</h3>
              <p className="text-muted-foreground mb-6">
                Get a free AI readiness assessment. We&apos;ll evaluate your data
                infrastructure and identify high-impact AI opportunities.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Data infrastructure audit",
                  "AI use case identification",
                  "ROI projections",
                  "Implementation roadmap",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/contact">Get AI Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
