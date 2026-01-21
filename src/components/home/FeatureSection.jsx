import React from "react";
import { BarChart3, Zap, ShieldCheck } from "lucide-react";
import { RevealOnScroll} from "@/lib/motion"

const FeatureCard = ({ icon, title }) => (
    <RevealOnScroll>
    <div className="p-8 bg-loom-light/[0.02] border border-loom-light/10 backdrop-blur-sm">
        <div className="mb-4 text-loom-accent">{icon}</div>
        <h3 className="font-serif uppercase mb-2">{title}</h3>
        <p className="text-sm font-mono text-loom-light/50">
            AI-powered feature description here.
        </p>
    </div>
    </RevealOnScroll>
);

export const FeatureSection = () => {
    return (
        <section className="max-w-7xl mx-auto py-24 border-t border-loom-light/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard icon={<BarChart3 />} title="Analytics" />
                <FeatureCard icon={<Zap />} title="Bundling" />
                <FeatureCard icon={<ShieldCheck />} title="Forecasts" />
            </div>
        </section>
    );
};
