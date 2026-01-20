"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Loader2, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "default" | "minimal" | "inline";
  title?: string;
  description?: string;
}

export function NewsletterSignup({
  variant = "default",
  title = "Stay in the loop",
  description = "Get the latest cloud insights, product updates, and exclusive tips delivered to your inbox.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Newsletter signup:", email);
    setIsSuccess(true);
    setIsLoading(false);
  };

  if (isSuccess) {
    return (
      <div
        className={`flex items-center gap-3 ${
          variant === "inline" ? "" : "justify-center py-4"
        }`}
      >
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span className="text-sm font-medium">
          Thanks for subscribing! Check your inbox.
        </span>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-brand hover:bg-brand/90"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <Input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-10"
        />
        <Button
          type="submit"
          disabled={isLoading}
          size="sm"
          className="bg-brand hover:bg-brand/90 h-10 px-4"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className="bg-gradient-to-br from-brand/5 to-brand-accent/5 border border-brand/10 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
          <Mail className="w-5 h-5 text-brand" />
        </div>
        <Sparkles className="w-5 h-5 text-brand-accent" />
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90 whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </form>

      <p className="text-xs text-muted-foreground mt-4">
        No spam, ever. Unsubscribe anytime. By subscribing, you agree to our
        Privacy Policy.
      </p>
    </div>
  );
}
