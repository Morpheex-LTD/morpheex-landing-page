import { CpuIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

const Value = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Why Partner with Morpheex?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AWS Optimized",
              desc: "We don't just use the cloud; we maximize its architectural potential.",
              icon: <CpuIcon className="w-8 h-8" />,
            },
            {
              title: "Velocity Focused",
              desc: "Automated CI/CD pipelines mean your code reaches production in minutes, not days.",
              icon: <ZapIcon className="w-8 h-8" />,
            },
            {
              title: "Security First",
              desc: "Deep knowledge of IAM, Encryption, and SOC2 compliance built-in.",
              icon: <ShieldCheckIcon className="w-8 h-8" />,
            },
          ].map((item, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-brand/20 to-brand-accent/20 rounded-2xl items-center justify-center mb-4 text-brand group-hover:scale-110 group-hover:rotate-3 transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-card/80 to-card/50 border rounded-2xl p-8 backdrop-blur-sm">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-card border p-2 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-background rounded-2xl p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-muted" />
                  <div className="w-3 h-3 rounded-full bg-muted" />
                  <div className="w-3 h-3 rounded-full bg-muted" />
                </div>
                <div className="space-y-1">
                  <p className="text-brand">
                    $ morpheex analyze --legacy-stack
                  </p>
                  <p className="text-muted-foreground">
                    ... Scanning infrastructure debt
                  </p>
                  <p className="text-yellow-600 dark:text-yellow-400">
                    ! Found: Over-provisioned EC2 clusters
                  </p>
                  <p className="text-brand font-bold">
                    $ morpheex refactor --target lambda
                  </p>
                  <p className="text-green-600 dark:text-green-400">
                    ✓ Modernization successful [0.8s]
                  </p>
                  <p className="text-foreground mt-4 font-bold animate-pulse">
                    &gt; SAVINGS DETECTED: 42% PER MONTH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
