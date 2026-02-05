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
];

interface ClientLogosProps {
  title?: string;
  variant?: "default" | "minimal";
  className?: string;
}

export function ClientLogos({
  title = "Trusted by innovative teams",
  variant = "default",
  className,
}: ClientLogosProps) {
  return (
    <div className={cn("py-10", className)}>
      {variant === "default" && (
        <p className="text-center text-xs text-muted-foreground mb-6 uppercase tracking-wide">
          {title}
        </p>
      )}

      {/* Scrolling Logos */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex gap-10 md:gap-14 items-center shrink-0 pr-10 md:pr-14">
            {clients.map((client, index) => (
              <ClientLogo key={`first-${index}`} client={client} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex gap-10 md:gap-14 items-center shrink-0 pr-10 md:pr-14">
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
          animation: scroll 25s linear infinite;
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
    <div className="flex items-center justify-center">
      {client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          className="h-6 w-auto opacity-40 hover:opacity-70 transition-opacity grayscale"
        />
      ) : (
        <span className="text-base font-semibold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors whitespace-nowrap">
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
      <p className="text-center text-xs text-muted-foreground mb-5 uppercase tracking-wide">
        Trusted by innovative teams
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {clients.slice(0, 4).map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-3 rounded-lg border"
          >
            <span className="text-sm font-medium text-muted-foreground">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
