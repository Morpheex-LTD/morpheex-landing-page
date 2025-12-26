"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { LeadForm } from "./form/lead-form";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-4 inset-x-0 max-w-6xl mx-auto z-50 px-4 transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div
        className={`border border-white/10 rounded-2xl px-6 h-14 flex items-center justify-between transition-all ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <span className="text-white font-black italic text-sm">X</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">
            Morphee<span className="text-indigo-400">x</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#services"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#case-study"
            className="text-slate-300 hover:text-white transition-colors hover:scale-105 transform duration-200"
          >
            Case Studies
          </a>
          <a
            href="#process"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Process
          </a>
          <Button
            variant="ghost"
            className="text-slate-400 hover:text-white hover:bg-white/5"
          >
            Client Portal
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-slate-950 hover:bg-indigo-400 transition-all rounded-full px-5 h-9 text-xs font-bold">
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-125 bg-slate-950 border-white/10 text-white backdrop-blur-2xl">
              <LeadForm />
            </DialogContent>
          </Dialog>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-400"
        >
          {mobileMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
