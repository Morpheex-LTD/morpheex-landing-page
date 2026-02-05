"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Loader2, Mail } from "lucide-react";
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
    <div className="bg-card border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <Mail className="w-4 h-4 text-brand" />
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm mb-5">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2">
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
            className="bg-brand hover:bg-brand-dark whitespace-nowrap"
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

      <p className="text-xs text-muted-foreground mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
