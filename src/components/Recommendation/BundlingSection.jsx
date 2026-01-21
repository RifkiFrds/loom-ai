import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export const BundlingSection = ({ bundles, variants }) => {
    return (
        <motion.div variants={variants}>
            <Card className="h-full bg-loom-light border-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Tag className="h-5 w-5 text-loom-dark" /> Smart Bundle
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {bundles.map((bundle, idx) => (
                        <motion.div key={idx} className="bg-white p-4 rounded-none border border-loom-accent/20" whileHover={{ scale: 1.02 }}>
                            <div className="flex flex-col gap-2 mb-3">
                                <div className="font-serif font-bold text-loom-dark">{bundle.main}</div>
                                <div className="text-loom-accent text-xs font-mono">+</div>
                                <div className="font-serif font-bold text-loom-dark">{bundle.pair}</div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white bg-loom-dark px-3 py-1 w-fit shadow-sm font-mono tracking-tight">
                                <span>Save {bundle.discount}</span>
                            </div>
                        </motion.div>
                    ))}
                    <motion.button
                        className="w-full mt-4 bg-loom-dark hover:bg-black text-white h-10 px-4 py-2 text-sm font-mono transition-colors border border-loom-dark"
                        whileTap={{ scale: 0.95 }}
                    >
                        Apply Bundle
                    </motion.button>
                </CardContent>
            </Card>
        </motion.div>
    );
};
