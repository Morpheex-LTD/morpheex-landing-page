import { FAQ } from "@/components/faq/faq";
import { PageContainer, PageHeader } from "@/components/page";
import { LeadForm } from "@/components/form/lead-form";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get Your Free Cloud Audit",
  description:
    "Contact Morpheex for a free cloud infrastructure audit. Our AWS-certified architects will analyze your current setup and provide a modernization roadmap.",
  openGraph: {
    title: "Contact Morpheex | Free Cloud Audit",
    description:
      "Get a free cloud infrastructure audit from our AWS-certified experts. Transform your legacy systems into modern, scalable solutions.",
  },
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@morpheex.com",
      link: "mailto:hello@morpheex.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 (0) 123-456-7890",
      link: "tel:+2340123456790",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "Lagos, Nigeria",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9AM-6PM WAT",
      link: null,
    },
  ];

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto">
        <PageHeader
          badgeText="Let's Transform Together"
          title="GET IN TOUCH"
          description="Ready to modernize your infrastructure? Book a free consultation with our AWS-certified architects."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-card/80 to-card/50 border rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Book Your Free Cloud Audit
            </h2>
            <p className="text-muted-foreground mb-8">
              Our architects will review your current setup and provide a
              detailed modernization roadmap—completely free.
            </p>
            <LeadForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-brand/10 to-brand-accent/10 border border-brand/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {item.title}
                        </div>
                        <div className="text-foreground font-semibold">
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

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-card/50 to-card/30 border rounded-3xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Why Partner With Us?
              </h3>
              <ul className="space-y-3">
                {[
                  "Official AWS Partner Network member",
                  "AWS-certified solutions architects",
                  "Serving clients globally from Nigeria",
                  "14+ years combined cloud experience",
                  "Average 60% AWS cost reduction",
                  "24/7 DevOps support included",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-gradient-to-r from-brand/20 to-brand-accent/20 border border-brand/30 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Happens Next?
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our proven process ensures you get actionable insights quickly
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "15-minute intro to understand your infrastructure and goals",
              },
              {
                step: "02",
                title: "Technical Audit",
                desc: "Deep-dive analysis of your current architecture and bottlenecks",
              },
              {
                step: "03",
                title: "Roadmap Delivery",
                desc: "Detailed modernization plan with costs, timeline, and ROI",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-black text-brand/30 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <FAQ
            title="Common Questions"
            items={[
              {
                question: "How quickly can you start?",
                answer:
                  "We can begin the discovery phase within 48 hours of your initial contact. Most full engagements kick off within 1-2 weeks after the audit is complete.",
              },
              {
                question: "Do you serve clients outside Nigeria?",
                answer:
                  "Absolutely! While we're based in Lagos, Nigeria, we serve clients globally. Our AWS expertise and cloud-native approach means we can work with businesses anywhere in the world. We operate across multiple time zones to ensure responsive communication regardless of your location.",
              },
              {
                question: "What information do you need for the audit?",
                answer:
                  "We'll need read-only AWS console access (or equivalent cloud platform), current architecture diagrams if available, and a brief overview of your technical challenges and business goals.",
              },
              {
                question: "Is the cloud audit really free?",
                answer:
                  "Absolutely. The audit (valued at $5K) is completely free with no strings attached. You'll receive a detailed report even if you don't proceed with our services.",
              },
              {
                question: "What if we're not on AWS?",
                answer:
                  "While AWS is our specialty, we also work with Google Cloud Platform and Azure. Our cloud-agnostic DevOps practices apply across all major providers.",
              },
            ]}
          />
        </div>
      </div>
    </PageContainer>
  );
}
