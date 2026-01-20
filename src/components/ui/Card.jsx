import React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a utils file setup, if not I will adjust

export function Card({ className, children, ...props }) {
    // Fallback for cn if not present, but usually in shadcn/ui or modern stacks it's common.
    // Since I haven't seen src/lib/utils.js, I will inline a simple joiner or just use template literals for now if utils is missing.
    // However, I'll stick to a clean implementation.
    return (
        <div className={`rounded-none border border-loom-accent/40 bg-white/50 backdrop-blur-md shadow-sm text-loom-dark ${className || ''}`} {...props}>
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }) {
    return (
        <div className={`flex flex-col space-y-1.5 p-6 ${className || ''}`} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ className, children, ...props }) {
    return (
        <h3 className={`font-serif text-lg font-semibold leading-none tracking-normal text-loom-dark ${className || ''}`} {...props}>
            {children}
        </h3>
    );
}

export function CardContent({ className, children, ...props }) {
    return (
        <div className={`p-6 pt-0 ${className || ''}`} {...props}>
            {children}
        </div>
    );
}
