import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = ({ rank, variants }) => {
    return (
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end max-w-7xl mx-auto border-b border-loom-light/20 pb-6">
            <motion.div variants={variants}>
                <p className="text-xs font-mono text-loom-accent tracking-widest uppercase mb-2">Internal Dashboard</p>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-loom-light uppercase tracking-tight">AI Insights</h1>
            </motion.div>
            <motion.div className="text-right mt-4 md:mt-0" variants={variants}>
                <span className="text-xs font-mono font-medium text-loom-light/60 uppercase tracking-wider block mb-1">Overall Rank</span>
                <div className="text-5xl font-serif font-bold text-loom-light">#{rank}</div>
            </motion.div>
        </header>
    );
};
