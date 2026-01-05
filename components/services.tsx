import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, CheckCircle2Icon, Cloud, Code2Icon } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-accent/10 text-brand-accent border-brand-accent/30">
            The Multiplier Effect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Strategic services to accelerate your digital transformation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="bg-gradient-to-br from-card/50 to-card/30 hover:border-brand/50 transition-all hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 backdrop-blur-sm group">
            <CardHeader>
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-all group-hover:scale-110">
                <Cloud className="w-6 h-6 text-brand" />
              </div>
              <CardTitle className="text-foreground text-2xl">
                Cloud Modernization
              </CardTitle>
              <CardDescription>
                Stop paying for idle servers. We refactor your stack into an
                elastic, AWS-optimized engine.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Serverless Migration",
                  "Docker/Kubernetes Orchestration",
                  "FinOps Cost Reduction",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle2Icon className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-gradient-to-br from-card/50 to-card/30 hover:border-brand-accent/50 transition-all hover:shadow-xl hover:shadow-brand-accent/10 hover:-translate-y-1 backdrop-blur-sm group">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-all group-hover:scale-110">
                <Code2Icon className="w-6 h-6 text-brand-accent" />
              </div>
              <CardTitle className="text-foreground text-2xl">
                Full-Stack Dev
              </CardTitle>
              <CardDescription>
                High-performance Next.js and Node.js applications built for
                scale, speed, and security.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Next.js Enterprise Scaling",
                  "Real-time Architecture",
                  "Custom API Design",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle2Icon className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-gradient-to-br from-card/50 to-card/30 hover:border-brand/50 transition-all hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 backdrop-blur-sm group">
            <CardHeader>
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-all group-hover:scale-110">
                <Bot className="w-6 h-6 text-brand" />
              </div>
              <CardTitle className="text-foreground text-2xl">
                AI & Data Strategy
              </CardTitle>
              <CardDescription>
                Leverage Amazon Bedrock to integrate generative AI directly into
                your business workflows.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Amazon Bedrock Integration",
                  "S3 Data Lake Infrastructure",
                  "Automated Document Insight",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <CheckCircle2Icon className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
