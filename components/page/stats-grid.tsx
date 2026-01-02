import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatsGridProps {
  title?: string;
  icon?: LucideIcon;
  children: ReactNode;
  columns?: 2 | 3 | 4;
}

export function StatsGrid({
  title,
  icon: Icon,
  children,
  columns = 4,
}: StatsGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className="relative bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-3xl p-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10">
        {title && (
          <div className="flex items-center gap-3 mb-8">
            {Icon && <Icon className="w-8 h-8 text-indigo-400" />}
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
        )}

        <div className={`grid grid-cols-2 ${gridCols[columns]} gap-8`}>
          {children}
        </div>
      </div>
    </div>
  );
}
