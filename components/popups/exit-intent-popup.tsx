"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CheckCircle, Gift, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";

interface ExitIntentPopupProps {
  delay?: number; // Delay before enabling exit intent detection (ms)
  cookieDays?: number; // Days to remember dismissal
}

export function ExitIntentPopup({
  delay = 5000,
  cookieDays = 7,
}: ExitIntentPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem("exitIntentDismissed");
    if (hasSeenPopup) {
      const dismissedDate = new Date(hasSeenPopup);
      const now = new Date();
      const daysDiff = Math.floor(
        (now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (daysDiff < cookieDays) {
        return; // Don't show popup if dismissed within cookieDays
      }
    }

    // Enable exit intent detection after delay
    const enableTimer = setTimeout(() => {
      setIsEnabled(true);
    }, delay);

    return () => clearTimeout(enableTimer);
  }, [delay, cookieDays]);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from the top of the page
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isEnabled, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Remember that user dismissed the popup
    localStorage.setItem("exitIntentDismissed", new Date().toISOString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Exit intent signup:", email);
    setIsSuccess(true);
    setIsLoading(false);

    // Close popup after success
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">You&apos;re on the list!</h3>
            <p className="text-muted-foreground">
              Check your inbox for the free cloud audit checklist.
            </p>
          </div>
        ) : (
          <>
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-brand to-brand-accent p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Gift className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium opacity-90">
                  Before you go...
                </span>
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl text-white">
                  Get Your Free Cloud Audit Checklist
                </DialogTitle>
                <DialogDescription className="text-white/80">
                  50+ items our AWS architects check on every infrastructure review.
                  Used by 500+ companies.
                </DialogDescription>
              </DialogHeader>
            </div>

            {/* Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-brand to-brand-accent hover:opacity-90 text-base"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Me The Checklist"
                  )}
                </Button>
              </form>

              <div className="mt-6 space-y-2">
                {[
                  "Security & compliance review points",
                  "Cost optimization opportunities",
                  "Performance bottleneck indicators",
                  "Architecture best practices",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
