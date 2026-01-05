import Logo from "./shared/logo";

const Footer = () => {
  return (
    <footer className="border-t py-20 relative z-10 bg-card/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="space-y-2">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm">
              Defining the next multiplier for software and cloud delivery. An
              Official AWS Services Partner.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h5 className="text-foreground font-bold text-xs uppercase tracking-widest">
                Navigation
              </h5>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-foreground font-bold text-xs uppercase tracking-widest">
                Connect
              </h5>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    AWS Partner Finder
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4">
          <p className="text-muted-foreground text-[10px] uppercase tracking-widest">
            © 2026 Morpheex Solutions Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-muted-foreground tracking-[0.2em]">
              AWS PARTNER NETWORK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
