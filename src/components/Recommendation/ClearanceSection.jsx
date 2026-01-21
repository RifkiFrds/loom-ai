import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const ClearanceSection = ({ recommendation, variants }) => {
    return (
        <motion.div variants={variants}>
            <Card className="h-full bg-loom-light border-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-loom-dark" /> Clearance Action
                    </CardTitle>
                </CardHeader>
                <CardContent className="h-full pb-6">
                    <motion.div className="bg-white p-4 rounded-none border border-loom-accent/20 h-full flex flex-col justify-between" whileHover={{ scale: 1.02 }}>
                        <div>
                            <h4 className="font-serif font-bold text-loom-dark mb-2">{recommendation.item}</h4>
                            <p className="text-sm text-loom-dark/70 font-mono mb-4">{recommendation.reason}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2 gap-2">
                            <span className="text-2xl font-bold text-loom-dark font-serif">{recommendation.suggestedDiscount} OFF</span>
                            <Button size="sm" variant="outline" className="border-loom-accent text-loom-dark hover:bg-loom-dark hover:text-white rounded-none">Review</Button>
                        </div>
                    </motion.div>
                </CardContent>
            </Card>
        </motion.div>
    );
};
