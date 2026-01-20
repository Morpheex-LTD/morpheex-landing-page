"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LeadForm } from "./form/lead-form";
import { ModeToggle } from "./mode-toggle";
import Logo from "./shared/logo";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/products", label: "Morphlix" },
    { href: "/blog", label: "Blog" },
    { href: "/calculator", label: "Calculator" },
    { href: "/about", label: "About" },
    { href: "/portal", label: "Portal" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-4 inset-x-0 max-w-6xl mx-auto z-50 px-4 transition-all duration-300 ${
          scrolled ? "top-2" : "top-4"
        }`}
      >
        <div
          className={`border rounded-2xl px-6 h-14 flex items-center justify-between transition-all ${
            scrolled
              ? "bg-card/80 backdrop-blur-xl shadow-2xl shadow-brand/10"
              : "bg-card/60 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-foreground relative group ${
                    isActive(link.href)
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-brand to-brand-accent rounded-full" />
                  )}
                </Link>
              ))}

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-brand to-brand-accent hover:opacity-90 text-primary-foreground transition-all rounded-full px-6 h-9 text-xs font-bold shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:scale-105">
                    Get Started
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>
                      Book Your Cloud Audit
                    </DialogTitle>
                    <DialogDescription>
                      Our architects will review your current setup and provide
                      a modernization roadmap.
                    </DialogDescription>
                  </DialogHeader>
                  <LeadForm />
                </DialogContent>
              </Dialog>
            </div>

            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-20 left-4 right-4 bg-card/95 backdrop-blur-xl border rounded-2xl p-6 shadow-2xl shadow-brand/10 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-all ${
                    isActive(link.href)
                      ? "bg-gradient-to-r from-brand/20 to-brand-accent/20 border border-brand/30 text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-brand to-brand-accent hover:opacity-90 text-primary-foreground rounded-full font-bold shadow-lg shadow-brand/20">
                      Get Started
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>
                        Book Your Cloud Audit
                      </DialogTitle>
                      <DialogDescription>
                        Our architects will review your current setup and
                        provide a modernization roadmap.
                      </DialogDescription>
                    </DialogHeader>
                    <LeadForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
