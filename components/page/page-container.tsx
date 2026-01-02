import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  gradientPosition?: "default" | "center" | "corners";
}

export function PageContainer({
  children,
  gradientPosition = "default",
}: PageContainerProps) {
  const gradientPositions = {
    default: (
      <>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </>
    ),
    center: (
      <>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </>
    ),
    corners: (
      <>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30">
      {/* Grid & Gradient Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {gradientPositions[gradientPosition]}
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6">{children}</div>
    </div>
  );
}
