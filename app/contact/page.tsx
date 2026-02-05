import { FAQ } from "@/components/faq/faq";
import { LeadForm } from "@/components/form/lead-form";
import { Clock, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Consultation",
  description:
    "Contact Morphlix for a free infrastructure consultation. Our cloud architects will analyze your setup and provide a modernization roadmap.",
  openGraph: {
    title: "Contact Morphlix | Free Consultation",
    description:
      "Get a free infrastructure consultation from our cloud experts. Transform your systems into modern, scalable solutions.",
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@Morphlix.com",
      link: "mailto:hello@Morphlix.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria (Serving clients globally)",
      link: null,
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  return (
    <main className="min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to modernize your infrastructure? Book a free consultation
            with our cloud architects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Form */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Book a Free Consultation
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              We'll review your infrastructure and provide a detailed
              modernization roadmap—completely free.
            </p>
            <LeadForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-brand" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.title}
                        </div>
                        <div className="text-foreground font-medium text-sm">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );

                  return item.link ? (
                    <a
                      key={item.title}
                      href={item.link}
                      className="block hover:opacity-70 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Why Work With Us
              </h3>
              <ul className="space-y-2">
                {[
                  "Deep AWS expertise",
                  "Senior architects on every project",
                  "Average 60% cost reduction",
                  "Knowledge transfer included",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-card border rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            What Happens Next
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "15-minute intro to understand your infrastructure and goals",
              },
              {
                step: "02",
                title: "Technical Review",
                desc: "Deep-dive analysis of your current architecture",
              },
              {
                step: "03",
                title: "Roadmap Delivery",
                desc: "Detailed modernization plan with costs and timeline",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-brand/20 mb-2">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <FAQ
          title="Common Questions"
          items={[
            {
              question: "How quickly can you start?",
              answer:
                "We can begin discovery within 48 hours. Most engagements kick off within 1-2 weeks after the initial consultation.",
            },
            {
              question: "Do you work with clients globally?",
              answer:
                "Yes! We serve clients worldwide. Our cloud-native approach means we work effectively across time zones.",
            },
            {
              question: "Is the consultation really free?",
              answer:
                "Absolutely. We'll review your infrastructure and provide recommendations with no strings attached.",
            },
            {
              question: "Which cloud platform do you work with?",
              answer:
                "We specialize in AWS. Our team has deep expertise across the entire AWS ecosystem.",
            },
          ]}
        />
      </div>
    </main>
  );
}
