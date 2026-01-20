import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ArrowRight, BarChart3, Zap, ShieldCheck, Activity } from "lucide-react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 px-6">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block border-b border-loom-accent/50 text-loom-accent font-mono text-xs uppercase tracking-[0.2em] mb-4 pb-1">
              AI-Driven Analytics
            </span>

            <h1 className="text-6xl md:text-8xl font-serif font-bold uppercase leading-[0.9]">
              Smart <br />
              <span className="text-loom-accent/90">Insights</span> <br />
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

      {/* Feature Section */}
      <section className="max-w-7xl mx-auto py-24 border-t border-loom-light/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<BarChart3 />} title="Analytics" />
          <FeatureCard icon={<Zap />} title="Bundling" />
          <FeatureCard icon={<ShieldCheck />} title="Forecasts" />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title }) => (
  <div className="p-8 bg-loom-light/[0.02] border border-loom-light/10 backdrop-blur-sm">
    <div className="mb-4 text-loom-accent">{icon}</div>
    <h3 className="font-serif uppercase mb-2">{title}</h3>
    <p className="text-sm font-mono text-loom-light/50">
      AI-powered feature description here.
    </p>
  </div>
);

export default LandingPage;
