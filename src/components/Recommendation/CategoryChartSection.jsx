import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { RushHourChart } from '@/components/charts/RushHourChart';

export const CategoryChartSection = ({ data, variants }) => {
    return (
        <motion.div variants={variants} className="h-full">
            <Card className="h-full bg-loom-light border-none">
                <CardContent className="pt-6">
                    <RushHourChart data={data} />
                </CardContent>
            </Card>
        </motion.div>
    );
};
