import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

export const SummarySection = ({ summary, variants }) => {
    return (
        <motion.div variants={variants}>
            <Card className="bg-loom-light text-loom-dark border-none shadow-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-loom-dark" /> <span className="font-mono text-sm tracking-widest uppercase text-loom-dark/70">Executive Summary</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-loom-dark text-xl md:text-2xl font-serif leading-relaxed italic">"{summary}"</p>
                </CardContent>
            </Card>
        </motion.div>
    );
};
