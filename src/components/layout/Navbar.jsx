import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-loom-dark/80 backdrop-blur-md border-b border-loom-light/10"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between px-6 transition-all duration-300",
          "max-w-7xl",
          scrolled ? "py-4" : "py-6"
        )}
      >
        {/* Logo */}
        <div className="text-xl font-serif tracking-tight text-loom-light font-bold">
          LOOM
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono uppercase tracking-widest text-loom-light/70 hover:text-loom-roseTwo transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "absolute h-[2px] w-6 bg-loom-light transition-all duration-300",
              open ? "rotate-45" : "-translate-y-2"
            )}
          />
          <span
            className={cn(
              "absolute h-[2px] w-6 bg-loom-light transition-all duration-300",
              open ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute h-[2px] w-6 bg-loom-light transition-all duration-300",
              open ? "-rotate-45" : "translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
            "md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300",
            open ? "max-h-96" : "max-h-0"
        )}
        >
        <div className="relative px-6 py-6 space-y-6">

            {/* Background Layer */}
            <div className="absolute inset-0 bg-loom-warm/90 backdrop-blur-lg" />

            {/* Content */}
            <div className="relative z-10 space-y-6">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-mono uppercase tracking-widest text-loom-light hover:text-white transition-colors"
                >
                {link.name}
                </a>
            ))}
            </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
