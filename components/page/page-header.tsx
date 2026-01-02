import { LucideIcon } from "lucide-react";
import { Badge } from "../ui/badge";

interface PageHeaderProps {
  badgeIcon?: LucideIcon;
  badgeText?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function PageHeader({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  description,
  centered = false,
}: PageHeaderProps) {
  return (
    <div className={`mb-20 ${centered ? "text-center" : ""}`}>
      {badgeText && (
        <Badge
          className={`mb-6 bg-purple-500/10 text-purple-300 border-purple-500/30 px-4 py-2 text-sm hover:bg-purple-500/20 transition-all ${
            centered ? "inline-flex" : ""
          }`}
        >
          {BadgeIcon && <BadgeIcon className="w-4 h-4 mr-2 inline" />}
          {badgeText}
        </Badge>
      )}
      <h1
        className={`text-5xl md:text-7xl font-black italic mb-6 tracking-tighter leading-tight ${
          centered ? "" : ""
        }`}
      >
        <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      {description && (
        <p
          className={`text-xl text-slate-300 leading-relaxed ${
            centered ? "max-w-3xl mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
