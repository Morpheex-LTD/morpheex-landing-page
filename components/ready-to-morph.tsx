import { ArrowRightIcon } from "lucide-react";
import { LeadForm } from "./form/lead-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const ReadyToMorph = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to Transform Your Infrastructure?
        </h2>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          Let's discuss how we can help you build systems that scale with your
          ambitions.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-brand px-8 h-12 font-medium"
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
      </div>
    </section>
  );
};

export default ReadyToMorph;
