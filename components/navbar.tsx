"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LeadForm } from "./form/lead-form";
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
    { href: "/", label: "Home" },
    { href: "/office", label: "The Office" },
    { href: "/protocol", label: "Protocol" },
    { href: "/success", label: "Success Stories" },
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
          className={`border border-white/10 rounded-2xl px-6 h-14 flex items-center justify-between transition-all ${
            scrolled
              ? "bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/10"
              : "bg-slate-950/60 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
              <span className="text-white font-black italic text-sm">M</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">
              Morphee<span className="text-indigo-400">x</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-white relative group ${
                  isActive(link.href)
                    ? "text-white font-semibold"
                    : "text-slate-400"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                )}
              </Link>
            ))}

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white transition-all rounded-full px-6 h-9 text-xs font-bold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105">
                  Get Started
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-800">
                <DialogHeader>
                  <DialogTitle className="text-white">
                    Book Your Cloud Audit
                  </DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Our architects will review your current setup and provide a
                    modernization roadmap.
                  </DialogDescription>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
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
          <div className="absolute top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-indigo-500/10 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-all ${
                    isActive(link.href)
                      ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-white font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full font-bold shadow-lg shadow-indigo-500/20">
                      Get Started
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-800">
                    <DialogHeader>
                      <DialogTitle className="text-white">
                        Book Your Cloud Audit
                      </DialogTitle>
                      <DialogDescription className="text-slate-400">
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
