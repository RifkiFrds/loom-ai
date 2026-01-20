import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-loom-light/10 bg-loom-dark text-center">
            <div className="mb-4">
                <span className="text-2xl font-serif font-bold text-loom-light tracking-tight">LOOM</span>
            </div>
            <p className="text-xs font-mono text-loom-light/40 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Loom AI Solutions. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
