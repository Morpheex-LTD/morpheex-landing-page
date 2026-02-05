import Logo from "./shared/logo";

const Footer = () => {
  return (
    <footer className="border-t py-20 relative z-10 bg-card/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="space-y-2">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm">
              AWS-specialized cloud modernization partner based in Lagos,
              Nigeria. Serving clients globally with enterprise-grade cloud
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h5 className="text-foreground font-bold text-xs uppercase tracking-widest">
                Services
              </h5>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="/services"
                    className="hover:text-foreground transition-colors"
                  >
                    All Services
                  </a>
                </li>
                <li>
                  <a
                    href="/services/cloud-modernization"
                    className="hover:text-foreground transition-colors"
                  >
                    Cloud Modernization
                  </a>
                </li>
                <li>
                  <a
                    href="/services/full-stack-development"
                    className="hover:text-foreground transition-colors"
                  >
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services/ai-data-strategy"
                    className="hover:text-foreground transition-colors"
                  >
                    AI & Data Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-foreground font-bold text-xs uppercase tracking-widest">
                Company
              </h5>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/success"
                    className="hover:text-foreground transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/compare"
                    className="hover:text-foreground transition-colors"
                  >
                    Why Morphlix
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-foreground font-bold text-xs uppercase tracking-widest">
                Tools
              </h5>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="/products"
                    className="hover:text-foreground transition-colors"
                  >
                    Morphlix Products
                  </a>
                </li>
                <li>
                  <a
                    href="/calculator"
                    className="hover:text-foreground transition-colors"
                  >
                    Cost Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="/apply"
                    className="hover:text-foreground transition-colors"
                  >
                    AWS Credits
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
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
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://aws.amazon.com/partners"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    AWS Partner Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4">
          <p className="text-muted-foreground text-[10px] uppercase tracking-widest">
            {`© ${new Date().getFullYear()} Morphlix Solutions Group. All rights reserved.`}
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
