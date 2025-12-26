import { CpuIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

const Value = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
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
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl items-center justify-center mb-4 text-indigo-400 group-hover:scale-110 group-hover:rotate-3 transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-slate-950 border border-white/10 p-2 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-[#020617] rounded-2xl p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                  <div className="w-3 h-3 rounded-full bg-slate-800" />
                </div>
                <div className="space-y-1">
                  <p className="text-indigo-400">
                    $ morpheex analyze --legacy-stack
                  </p>
                  <p className="text-slate-500">
                    ... Scanning infrastructure debt
                  </p>
                  <p className="text-yellow-400">
                    ! Found: Over-provisioned EC2 clusters
                  </p>
                  <p className="text-indigo-400 font-bold">
                    $ morpheex refactor --target lambda
                  </p>
                  <p className="text-green-400">
                    ✓ Modernization successful [0.8s]
                  </p>
                  <p className="text-white mt-4 font-bold animate-pulse">
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
