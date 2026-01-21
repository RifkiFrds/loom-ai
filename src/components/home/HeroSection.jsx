import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Activity } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
            {/* LEFT */}
            <div className="lg:col-span-7 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-loom-accent font-mono text-xs uppercase tracking-[0.2em] mb-4 pb-1">
                        AI-Driven Analytics
                    </span>

                    <h1 className="text-6xl md:text-8xl font-serif font-bold border-b border-loom-roseTwo/50 max-w-xl pb-2 uppercase leading-[1.2]">
                        Smart <br />
                        <span className="text-loom-roseTwo/100">Insights</span> <br />
                        Precision
                    </h1>
                </motion.div>

                <p className="text-lg font-mono text-loom-light/60 max-w-xl border-l-2 border-loom-accent/20 pl-6">
                    Unlock real-time data analysis, sales forecasting, and bundling recommendations.
                </p>

                <div className="flex gap-6 pt-4">
                    <Button
                        className="h-14 px-8 rounded-none bg-loom-light text-loom-dark hover:bg-white"
                        onClick={() => navigate("/recommendations")}
                    >
                        Get Started
                    </Button>

                    <Button
                        variant="ghost"
                        className="h-14 px-8 rounded-none border border-loom-light/20"
                    >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* RIGHT */}
            <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                <div className="aspect-[4/5] rounded-2xl bg-loom-light/5 backdrop-blur-sm border border-loom-light/10 flex items-center justify-center">
                    <Activity className="h-20 w-20 text-loom-accent/30" />
                </div>
            </motion.div>
        </section>
    );
};
