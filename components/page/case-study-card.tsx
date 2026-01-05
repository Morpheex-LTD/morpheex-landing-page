import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";

interface CaseStudyCardProps {
  id: string;
  sector: string;
  challenge: string;
  solution: string;
  metric: string;
  tag: string;
  color: string;
}

export function CaseStudyCard({
  id,
  sector,
  challenge,
  solution,
  metric,
  tag,
  color,
}: CaseStudyCardProps) {
  return (
    <div className="group relative bg-card/50 backdrop-blur-sm border rounded-[32px] p-8 overflow-hidden hover:border-brand-accent/40 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
      {/* Background Glow */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-1">
            <div className="text-[10px] font-black text-brand-accent tracking-widest uppercase">
              {id}
            </div>
            <div className="text-xs text-muted-foreground font-mono">{sector}</div>
          </div>
          <div className="w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-brand-accent group-hover:to-brand group-hover:border-transparent transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
          </div>
        </div>

        <div className="flex-grow space-y-4 mb-12">
          <div className="flex items-start gap-2 mb-4">
            <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-600 dark:text-red-400 font-semibold">
              Challenge
            </div>
          </div>
          <div className="text-lg font-bold text-foreground group-hover:text-brand-accent transition-colors leading-snug">
            {challenge}
          </div>
          <div className="flex items-start gap-2 mt-4 mb-2">
            <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-600 dark:text-green-400 font-semibold">
              Solution
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{solution}</p>
        </div>

        <div className="pt-6 border-t flex items-center justify-between">
          <div className="text-3xl font-black text-transparent bg-gradient-to-r from-brand-accent to-brand bg-clip-text tracking-tighter">
            {metric}
          </div>
          <Badge
            variant="secondary"
            className="bg-brand-accent/10 text-brand-accent border-brand-accent/20 rounded-full text-[10px] font-bold px-3 py-1"
          >
            {tag}
          </Badge>
        </div>
      </div>
    </div>
  );
}
