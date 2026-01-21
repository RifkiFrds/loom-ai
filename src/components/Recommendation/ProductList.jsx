import React from 'react';
import { motion } from 'framer-motion';

export const ProductList = ({ products, title, type = "top" }) => {
    return (
        <div className="h-full bg-loom-light/[0.02] border border-loom-light/10 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className={`h-2 w-2 rounded-full ${type === "top" ? "bg-loom-accent" : "bg-red-400"}`} />
                <h3 className="font-serif text-lg text-loom-light">{title}</h3>
            </div>

            <div className="space-y-3">
                {products.map((product, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between group p-2 hover:bg-loom-light/5 transition-colors border-b border-loom-light/5 last:border-0"
                    >
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-xs text-loom-light/40">
                                {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span className="font-sans text-sm text-loom-light/90 group-hover:text-loom-light transition-colors">
                                {product.product}
                            </span>
                        </div>
                        <span className="font-mono text-xs text-loom-accent/80">
                            {product.count} sales
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
