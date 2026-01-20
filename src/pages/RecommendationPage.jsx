import React from 'react';
import { useRecommendations } from '@/features/recommendation/hooks/useRecommendations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { RankChart } from '@/components/charts/RankChart';
import { RushHourChart } from '@/components/charts/RushHourChart';
import { Loader2, TrendingUp, Package, Tag, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const RecommendationPage = () => {
    const { data, loading, error } = useRecommendations();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center page-bg">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                    <p className="text-slate-500">Analyzing store data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center page-bg text-red-500">
                Error: {error}
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="min-h-screen p-6 md:p-12 font-sans page-bg"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end max-w-7xl mx-auto border-b border-loom-light/20 pb-6">
                <motion.div variants={itemVariants}>
                    <p className="text-xs font-mono text-loom-accent tracking-widest uppercase mb-2">Internal Dashboard</p>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-loom-light uppercase tracking-tight">AI Insights</h1>
                </motion.div>
                <motion.div className="text-right mt-4 md:mt-0" variants={itemVariants}>
                    <span className="text-xs font-mono font-medium text-loom-light/60 uppercase tracking-wider block mb-1">Overall Rank</span>
                    <div className="text-5xl font-serif font-bold text-loom-light">#{data.rank}</div>
                </motion.div>
            </header>

            <main className="max-w-7xl mx-auto space-y-8">

                {/* Summary Section */}
                <motion.div variants={itemVariants}>
                    <Card className="bg-loom-light text-loom-dark border-none shadow-xl">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <TrendingUp className="h-5 w-5 text-loom-dark" /> <span className="font-mono text-sm tracking-widest uppercase text-loom-dark/70">Executive Summary</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-loom-dark text-xl md:text-2xl font-serif leading-relaxed italic">"{data.summary}"</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Charts Section */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="h-full bg-loom-light border-none">
                            <CardContent className="pt-6">
                                <RankChart data={data.rankTrend} />
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="h-full bg-loom-light border-none">
                            <CardContent className="pt-6">
                                <RushHourChart data={data.rushHourData} />
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Top Products */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full bg-loom-light border-none">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Package className="h-5 w-5 text-loom-dark" /> Top Performers
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {data.topProducts.map((product, idx) => (
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

                    {/* Bundling Recommendation */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full bg-loom-light border-none">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Tag className="h-5 w-5 text-loom-dark" /> Smart Bundle
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {data.bundlingRecommendation.map((bundle, idx) => (
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

                    {/* Discount Recommendation */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full bg-loom-light border-none">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-loom-dark" /> Clearance Action
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="h-full pb-6">
                                <motion.div className="bg-white p-4 rounded-none border border-loom-accent/20 h-full flex flex-col justify-between" whileHover={{ scale: 1.02 }}>
                                    <div>
                                        <h4 className="font-serif font-bold text-loom-dark mb-2">{data.discountRecommendation.item}</h4>
                                        <p className="text-sm text-loom-dark/70 font-mono mb-4">{data.discountRecommendation.reason}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2 gap-2">
                                        <span className="text-2xl font-bold text-loom-dark font-serif">{data.discountRecommendation.suggestedDiscount} OFF</span>
                                        <Button size="sm" variant="outline" className="border-loom-accent text-loom-dark hover:bg-loom-dark hover:text-white rounded-none">Review</Button>
                                    </div>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </main>
        </motion.div>
    );
};

export default RecommendationPage;
