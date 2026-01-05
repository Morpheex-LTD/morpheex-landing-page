import { ArrowRightIcon, CloudIcon, ZapIcon } from "lucide-react";
import { LeadForm } from "../form/lead-form";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const LandingPageHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <Badge className="mb-6 bg-brand/10 text-brand-accent border-brand/30 px-4 py-2 text-sm hover:bg-brand/20 transition-all cursor-pointer">
          <CloudIcon className="w-4 h-4 mr-2 inline" />
          Official AWS Services Partner
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r text-brand bg-clip-text ">
            Morph Legacy Systems
          </span>
          <br />
          <span className="text-brand">into Future Advantages</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Morpheex helps enterprises stop managing technical debt. We engineer
          high-performance software and serverless cloud solutions that scale
          with your vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-linear-to-r from-brand to-brand-accent hover:opacity-90 shadow-lg shadow-brand/30 hover:shadow-brand/50 transition-all hover:scale-105 group"
              >
                Start Cloud Audit
                <ZapIcon className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Book Your Cloud Audit
                </DialogTitle>
                <DialogDescription>
                  Our architects will review your current AWS setup or legacy
                  stack and provide a modernization roadmap.
                </DialogDescription>
              </DialogHeader>
              <LeadForm />
            </DialogContent>
          </Dialog>

          <Button
            size="lg"
            variant="outline"
            className="border-brand/30 bg-transparent hover:text-brand-accent hover:border-brand hover:bg-brand/10 transition-all group"
          >
            View Our Solutions
            <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHero;
