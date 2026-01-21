import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export const TopProductsSection = ({ products, variants }) => {
    return (
        <motion.div variants={variants}>
            <Card className="h-full bg-loom-light border-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-loom-dark" /> Top Performers
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            className="flex justify-between items-center bg-white p-3 rounded-none border border-loom-accent/20"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-loom-dark text-white font-mono h-8 w-8 flex items-center justify-center text-xs">
                                    {idx + 1}
                                </div>
                                <div>
                                    <p className="font-serif font-bold text-sm text-loom-dark">{product.name}</p>
                                    <p className="text-xs text-loom-dark/60 font-mono">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
                                </div>
                            </div>
                            <div className="text-loom-dark font-bold text-sm font-mono">{product.score} pts</div>
                        </motion.div>
                    ))}
                </CardContent>
            </Card>
        </motion.div>
    );
};
