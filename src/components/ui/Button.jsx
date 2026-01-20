import React from 'react';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
        default: 'bg-loom-dark text-white hover:bg-black font-mono tracking-wide',
        outline: 'border border-loom-accent bg-transparent hover:bg-loom-light text-loom-dark font-mono',
        ghost: 'hover:bg-loom-light hover:text-loom-dark text-loom-light font-mono',
        secondary: 'bg-loom-light text-loom-dark hover:bg-gray-200 font-mono',
    };

    const sizes = {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
    };

    return (
        <button
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
});
Button.displayName = 'Button';

export { Button };
