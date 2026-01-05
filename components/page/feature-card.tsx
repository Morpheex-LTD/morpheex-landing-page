import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradient,
}: FeatureCardProps) => {
  return (
    <div className="group relative bg-card/50 border rounded-2xl p-8 hover:border-brand-accent/30 transition-all duration-300 overflow-hidden">
      {/* Gradient Glow on Hover */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
      />

      <div className="relative z-10">
        <div
          className={`w-10 h-10 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
        >
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="text-md font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
