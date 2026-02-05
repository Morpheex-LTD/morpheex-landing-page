"use client";

import { ArrowRightIcon, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { LeadForm } from "../form/lead-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const features = [
  "AWS Migrations",
  "Serverless Architecture",
  "Cost Optimization",
  "Kubernetes & ECS",
  "CI/CD Pipelines",
];

const LandingPageHero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-sm text-foreground">
          <Sparkles className="w-4 h-4 text-brand" />
          <span className="transition-all duration-300">{features[currentFeature]}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-foreground">
          Cloud Infrastructure
          <br />
          <span className="text-brand">That Actually Scales</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          We migrate legacy systems to modern cloud architecture, cut your
          infrastructure costs by 60%, and build systems that handle 10x growth
          without breaking.
        </p>

        {/* Key metrics */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand">60%</div>
            <div className="text-muted-foreground">Avg Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand">50+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand">99.9%</div>
            <div className="text-muted-foreground">Uptime SLA</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-brand hover:bg-brand-dark text-white px-8 h-12 text-base font-medium"
              >
                Book a Consultation
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Book a Free Consultation</DialogTitle>
                <DialogDescription>
                  Our architects will review your infrastructure and provide a
                  modernization roadmap tailored to your goals.
                </DialogDescription>
              </DialogHeader>
              <LeadForm />
            </DialogContent>
          </Dialog>

          <Button
            size="lg"
            variant="outline"
            className="px-8 h-12 text-base font-medium"
            asChild
          >
            <a href="#case-study">
              View Our Work
              <ArrowRightIcon className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHero;
