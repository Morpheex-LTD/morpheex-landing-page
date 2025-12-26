const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-20 relative z-10 bg-slate-950/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-xs text-white font-bold group-hover:rotate-12 transition-transform">
                X
              </div>
              <span className="font-black tracking-tighter uppercase text-xl">
                MORPHEEX
              </span>
            </div>
            <p className="text-slate-500 max-w-xs text-sm">
              Defining the next multiplier for software and cloud delivery. An
              Official AWS Services Partner.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h5 className="text-white font-bold text-xs uppercase tracking-widest">
                Navigation
              </h5>
              <ul className="text-slate-500 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold text-xs uppercase tracking-widest">
                Connect
              </h5>
              <ul className="text-slate-500 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AWS Partner Finder
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            © 2026 Morpheex Solutions Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-500 tracking-[0.2em]">
              AWS PARTNER NETWORK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
