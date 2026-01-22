import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Users, ShoppingBag, Calendar } from 'lucide-react';

const MetricCard = ({ label, value, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-loom-light/[0.02] border border-loom-light/10 p-6 rounded-lg backdrop-blur-sm flex items-start justify-between group hover:bg-loom-light/5 transition-all"
  >
    <div>
      <p className="text-loom-light/60 font-mono text-xs uppercase tracking-wider mb-2">{label}</p>
      <h3 className="text-2xl font-serif text-loom-light font-medium">{value}</h3>
    </div>
    <div className="p-3 bg-loom-accent/10 rounded-full text-loom-accent group-hover:bg-loom-accent/20 transition-colors">
      <Icon size={20} />
    </div>
  </motion.div>
);

export const MetricsSection = ({ data }) => {
  if (!data) return null;

  const { totalTransactions, totalCustomers, avgBasket, dateRange } = data;

  const formattedDateRange = dateRange
    ? `${dateRange.start_date} - ${dateRange.end_date}`
    : 'N/A';

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard label="Total Transactions" value={totalTransactions} icon={CreditCard} delay={0.1} />
      <MetricCard label="Unique Customers" value={totalCustomers} icon={Users} delay={0.2} />
      <MetricCard label="Avg Items / Basket" value={avgBasket} icon={ShoppingBag} delay={0.3} />
      <MetricCard label="Analysis Period" value={formattedDateRange} icon={Calendar} delay={0.4} />
    </section>
  );
};
