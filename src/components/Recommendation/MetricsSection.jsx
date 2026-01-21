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
