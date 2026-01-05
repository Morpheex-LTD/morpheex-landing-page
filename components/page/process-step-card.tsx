import { BarChart3, CheckCircle2, ClipboardCheck, LucideIcon } from "lucide-react";

interface ProcessStepCardProps {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  deliverables: string[];
  duration: string;
}

export function ProcessStepCard({
  id,
  label,
  title,
  description,
  icon: Icon,
  color,
  deliverables,
  duration,
}: ProcessStepCardProps) {
  return (
    <div className="group bg-card/80 backdrop-blur-sm border rounded-3xl p-8 hover:border-brand/40 transition-all duration-500 hover:scale-105 h-full flex flex-col">
      {/* Gradient Glow on Hover */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
        >
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>

        {/* Number & Label */}
        <div
          className={`text-6xl font-black bg-linear-to-br ${color} bg-clip-text text-transparent mb-3 opacity-40`}
        >
          {id}
        </div>
        <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
          {label}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Deliverables */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <ClipboardCheck className="w-4 h-4 text-brand" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Deliverables
            </span>
          </div>
          <ul className="space-y-2">
            {deliverables.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Duration Badge */}
        <div className="flex items-center gap-2 pt-4 border-t">
          <BarChart3 className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground font-mono">{duration}</span>
        </div>
      </div>
    </div>
  );
}
