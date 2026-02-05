"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Clock, ExternalLink, Video } from "lucide-react";
import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url?: string;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "ghost";
  showInline?: boolean;
}

export function CalendlyEmbed({
  url = "https://calendly.com/Morphlix/30min",
  buttonText = "Book a Call",
  buttonVariant = "default",
  showInline = false,
}: CalendlyEmbedProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  if (showInline) {
    return (
      <div className="bg-card border rounded-2xl overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand" />
            Schedule a Meeting
          </h3>
          <p className="text-sm text-muted-foreground">
            Book a free 30-minute consultation with our cloud architects.
          </p>
        </div>
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ minWidth: "320px", height: "630px" }}
        />
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={buttonVariant}
          className={
            buttonVariant === "default"
              ? "bg-gradient-to-r from-brand to-brand-accent hover:opacity-90"
              : ""
          }
        >
          <Calendar className="w-4 h-4 mr-2" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand" />
            Book Your Free Consultation
          </DialogTitle>
          <DialogDescription>
            Schedule a 30-minute call with our AWS architects to discuss your
            cloud infrastructure needs.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-4">
          {/* Meeting Info */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              30 minutes
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Video className="w-4 h-4" />
              Google Meet
            </span>
          </div>

          {/* Calendly Embed */}
          <div
            className="calendly-inline-widget rounded-lg overflow-hidden border"
            data-url={url}
            style={{ minWidth: "100%", height: "500px" }}
          />

          {/* Fallback Link */}
          <div className="mt-4 text-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              Open in new tab
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Booking Card Component for pages
export function BookingCard() {
  return (
    <div className="bg-gradient-to-br from-brand/5 to-brand-accent/5 border border-brand/10 rounded-2xl p-6 md:p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
          <Calendar className="w-6 h-6 text-brand" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">Free Cloud Consultation</h3>
          <p className="text-muted-foreground text-sm">
            30-minute call with our AWS-certified architects
          </p>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {[
          "Review your current infrastructure",
          "Identify optimization opportunities",
          "Get a custom modernization roadmap",
          "No commitment required",
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>

      <CalendlyEmbed buttonText="Schedule Free Call" />
    </div>
  );
}
