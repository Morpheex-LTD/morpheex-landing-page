"use client";

import { cn } from "@/lib/utils";

interface Client {
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { name: "TechFlow" },
  { name: "FinanceHub" },
  { name: "HealthSync" },
  { name: "DataPrime" },
  { name: "CloudNine" },
  { name: "ScaleUp" },
  { name: "Nextera" },
  { name: "Quantum" },
  { name: "Elevate" },
  { name: "Horizon" },
];

interface ClientLogosProps {
  title?: string;
  variant?: "default" | "minimal";
  className?: string;
}

export function ClientLogos({
  title = "Trusted by innovative companies",
  variant = "default",
  className,
}: ClientLogosProps) {
  return (
    <div className={cn("py-12", className)}>
      {variant === "default" && (
        <p className="text-center text-sm text-muted-foreground mb-8">
          {title}
        </p>
      )}

      {/* Scrolling Logos */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex gap-8 md:gap-12 items-center shrink-0 pr-8 md:pr-12">
            {clients.map((client, index) => (
              <ClientLogo key={`first-${index}`} client={client} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-8 md:gap-12 items-center shrink-0 pr-8 md:pr-12">
            {clients.map((client, index) => (
              <ClientLogo key={`second-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

function ClientLogo({ client }: { client: Client }) {
  return (
    <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-card/50 border border-transparent hover:border-brand/20 transition-colors">
      {client.logo ? (
        // If logo image is provided, use it
        <img
          src={client.logo}
          alt={client.name}
          className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
        />
      ) : (
        // Placeholder with company name
        <span className="text-lg font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap">
          {client.name}
        </span>
      )}
    </div>
  );
}

// Static grid version for specific sections
export function ClientLogosGrid({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <p className="text-center text-sm text-muted-foreground mb-6">
        Trusted by innovative companies worldwide
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {clients.slice(0, 5).map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 rounded-lg bg-card/50 border hover:border-brand/20 transition-colors"
          >
            <span className="text-sm font-semibold text-muted-foreground">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
