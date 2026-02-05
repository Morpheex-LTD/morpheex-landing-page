import { Cloud, ShieldCheck, Zap, Users } from "lucide-react";

const Value = () => {
  const values = [
    {
      title: "AWS Experts",
      desc: "Deep expertise across the entire AWS ecosystem—Lambda, ECS, EKS, and 200+ managed services.",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      title: "Ship Faster",
      desc: "Automated CI/CD pipelines that deploy your code in minutes with zero-downtime releases.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Security Built-In",
      desc: "Best practices for access control, encryption, and compliance baked into every project.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Knowledge Transfer",
      desc: "We don't just build—we teach. Your team owns the architecture when we're done.",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Work With Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep cloud expertise combined with modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-card border rounded-lg p-6 hover:border-brand/30 transition-colors"
            >
              <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center mb-4 text-brand">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
