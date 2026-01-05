import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  gradient: string;
  icon?: LucideIcon;
}

const StatsCard = ({
  value,
  label,
  description,
  gradient,
  icon: Icon,
}: StatsCardProps) => {
  return (
    <div className="text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
        {Icon && <Icon className="w-4 h-4 text-current" />}
        <div
          className={`text-3xl md:text-4xl font-black text-transparent bg-linear-to-r ${gradient} bg-clip-text`}
        >
          {value}
        </div>
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
      {description && (
        <p className="text-xs text-muted-foreground mt-2">{description}</p>
      )}
    </div>
  );
};

export default StatsCard;
