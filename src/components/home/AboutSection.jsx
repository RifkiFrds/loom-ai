import {
  Percent,
  TrendingUp,
  Grid,
  Settings,
} from "lucide-react";
import { RevealOnScroll } from "@/lib/motion";
import ScrollReveal from "../ui/ScrollReveal";


const AboutSection = () => {
  return (
    <RevealOnScroll>
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT — ICON GRID */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <IconCard
                icon={Percent}
                title="Efficiency"
                subtitle="Optimized performance"
            />
            <IconCard
                icon={TrendingUp}
                title="Growth"
                subtitle="Data-driven scaling"
            />
            <IconCard
                icon={Grid}
                title="Structure"
                subtitle="Organized systems"
            />
            <IconCard
                icon={Settings}
                title="Reliability"
                subtitle="Stable & configurable"
            />
            </div>

        {/* RIGHT — CONTENT */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="block text-xs tracking-[0.35em] uppercase text-loom-light/60">
              ABOUT US
            </span>

            <h2 className="text-4xl md:text-5xl border-b border-loom-roseTwo/50 max-w-md pb-2 uppercase tracking-[0.2em] mb-4 font-serif">
              Who We <span className="text-loom-accent">Are?</span>
            </h2>
          </div>

        <div className="space-y-7 max-w-xl">
        <ScrollReveal
            size="sm"
            baseOpacity={0.15}
            blurStrength={6}
            staggerDelay={0.03}
            threshold={0.4}
            textClassName="font-mono text-loom-light/65 leading-relaxed"
        >
            LOOM is an AI-driven platform designed to transform complex data into clear,
            actionable insight.
        </ScrollReveal>

        <ScrollReveal
            size="sm"
            baseOpacity={0.1}
            blurStrength={6}
            staggerDelay={0.03}
            threshold={0.4}
            textClassName="font-mono text-loom-light/55 leading-relaxed"
        >
            Built with a minimalist mindset and powered by modern intelligence,
            LOOM helps businesses analyze patterns, forecast outcomes, and
            make decisions with precision and confidence.
        </ScrollReveal>
        </div>
        </div>
      </div>
    </section>
    </RevealOnScroll>
  );
};

export default AboutSection;

/* ======================
   SUB COMPONENT
====================== */

const IconCard = ({ icon: Icon, title, subtitle }) => {
  return (
    <div
      className="
        aspect-square rounded-2xl
        bg-loom-rose/20
        border border-loom-light/10
        backdrop-blur-sm
        flex flex-col items-center justify-center
        text-center
        gap-3
        transition-transform duration-500
        hover:scale-105
      "
    >
      <Icon className="h-8 w-8 text-loom-light/90" />

      <div className="space-y-1">
        <div className="text-sm font-serif uppercase tracking-wide text-loom-light">
          {title}
        </div>
        <div className="text-[11px] font-mono tracking-wide text-loom-light/50">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
