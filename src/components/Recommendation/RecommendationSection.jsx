import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layers, Percent } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const InsightPanel = ({ title, content, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-loom-light/[0.02] border border-loom-light/10 p-8 rounded-lg backdrop-blur-sm h-full hover:bg-loom-light/5 transition-colors"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-loom-accent/10 rounded-full text-loom-accent">
        <Icon size={24} />
      </div>
      <h3 className="font-serif text-xl text-loom-light">
        {title}
      </h3>
    </div>

    <div className="text-loom-light/80 leading-relaxed font-sans text-lg space-y-4 prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-serif text-loom-light mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-serif text-loom-light mb-3">
              {children}
            </h2>
          ),
          strong: ({ children }) => (
            <strong className="text-loom-light font-semibold">
              {children}
            </strong>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 ml-4">
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <li className="text-loom-light/80">
              {children}
            </li>
          ),
          p: ({ children }) => (
            <p className="text-loom-light/80 leading-relaxed">
              {children}
            </p>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  </motion.div>
);

export const RecommendationSection = ({ recommendations }) => {
  if (!recommendations) return null;

  return (
    <section className="grid gap-6">
      <InsightPanel
        title="Strategic Analysis"
        content={recommendations.strategic_recommendations}
        icon={Lightbulb}
        delay={0.1}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <InsightPanel
          title="Bundle Opportunities"
          content={recommendations.bundling_recommendations}
          icon={Layers}
          delay={0.2}
        />
        <InsightPanel
          title="Clearance Strategy"
          content={recommendations.losers_discount_recommendations}
          icon={Percent}
          delay={0.3}
        />
      </div>
    </section>
  );
};
