import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, Bot, Cloud, Code2 } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Modernization",
      description:
        "Migrate legacy systems to modern, scalable cloud architectures. We handle the complexity of containerization, serverless, and multi-cloud deployments.",
      href: "/services/cloud-modernization",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Software Development",
      description:
        "Build high-performance applications with modern frameworks. From real-time APIs to responsive frontends, we deliver production-ready code.",
      href: "/services/full-stack-development",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI & Data Solutions",
      description:
        "Turn your data into competitive advantage. We build intelligent systems, data pipelines, and ML infrastructure that drive business decisions.",
      href: "/services/ai-data-strategy",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategic engineering services to modernize your infrastructure and
            accelerate your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <Card className="h-full bg-card border hover:border-brand/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-brand transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
