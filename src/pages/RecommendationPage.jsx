import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBusinessAnalysis } from '@/hooks/useBusinessAnalysis';
import {
    UploadSection,
    MetricsSection,
    ChartsSection,
    RecommendationSection
} from '@/components/recommendation';
import { Button } from '@/components/ui/Button';
import { RotateCcw } from 'lucide-react';

const RecommendationPage = () => {
    const { data, loading, error, analyzeBusiness, resetAnalysis } = useBusinessAnalysis();

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 font-sans page-bg">
            <header className="max-w-7xl mx-auto mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xs font-mono text-loom-accent tracking-[0.2em] uppercase mb-4">
                        Enterprise Intelligence
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-loom-light mb-6">
                        AI Business Insights
                    </h1>
                    <p className="text-lg font-mono text-loom-light/60 max-w-2xl mx-auto leading-relaxed">
                        Upload your transaction data to unlock predictive analytics,
                        behavioral patterns, and strategic growth recommendations.
                    </p>
                </motion.div>
            </header>

            <main className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    {!data ? (
                        <motion.div
                            key="upload"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <UploadSection
                                onUpload={analyzeBusiness}
                                loading={loading}
                                error={error}
                            />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-20"
                        >
                            <div className="flex justify-end mb-8">
                                <Button
                                    variant="outline"
                                    onClick={resetAnalysis}
                                    className="border-loom-light/20 text-loom-light/70 hover:text-loom-light hover:bg-loom-light/10 font-mono text-xs uppercase tracking-wider"
                                >
                                    <RotateCcw className="mr-2 h-3 w-3" /> New Analysis
                                </Button>
                            </div>

                            {/* Section 1: Key Metrics */}
                            <section>
                                <h2 className="text-2xl font-serif text-loom-light mb-8 border-b border-loom-light/10 pb-4">
                                    Performance Overview
                                </h2>
                                <MetricsSection data={data.data_insights} />
                            </section>

                            {/* Section 2: Visualizations */}
                            <section>
                                <h2 className="text-2xl font-serif text-loom-light mb-8 border-b border-loom-light/10 pb-4">
                                    Behavioral Analytics
                                </h2>
                                <ChartsSection data={data.data_insights} />
                            </section>

                            {/* Section 3: AI Recommendations */}
                            <section>
                                <h2 className="text-2xl font-serif text-loom-light mb-8 border-b border-loom-light/10 pb-4">
                                    Strategic Intelligence
                                </h2>
                                <RecommendationSection recommendations={data.ai_recommendations} />
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default RecommendationPage;
