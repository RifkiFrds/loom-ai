import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Service', href: '#service' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-300",
                scrolled ? "bg-loom-dark/80 backdrop-blur-md py-4 border-b border-loom-light/10" : "bg-transparent"
            )}
        >
            <div className="text-2xl font-serif tracking-tight text-loom-light font-bold">
                LOOM
            </div>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-mono uppercase tracking-widest text-loom-light/70 hover:text-loom-light transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile menu button placeholder if needed, for now just hidden on mobile or simple links */}
            <div className="md:hidden">
                {/* Simple mobile placeholder */}
            </div>
        </nav>
    );
};

export default Navbar;
