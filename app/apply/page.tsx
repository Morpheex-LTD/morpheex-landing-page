import { CreditApplicationForm } from "@/components/form/credit-application-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for AWS Credits",
  description:
    "Apply for AWS credits through Morphlix, an official AWS Advanced Partner. Get up to $50,000 in cloud credits for your startup or enterprise.",
  openGraph: {
    title: "Apply for AWS Credits | Morphlix",
    description:
      "Apply for AWS credits through Morphlix, an official AWS Advanced Partner. Get up to $50,000 in cloud credits.",
  },
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
            <span className="text-sm font-medium text-brand">
              Official AWS Advanced Partner
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Apply for{" "}
            <span className="bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              AWS Credits
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get up to $50,000 in AWS credits to power your cloud infrastructure.
            Trusted by over 2000 clients worldwide.
          </p>
        </div>

        {/* Form */}
        <CreditApplicationForm />
      </div>
    </main>
  );
}
