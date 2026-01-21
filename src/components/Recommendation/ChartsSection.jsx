export const ChartsSection = ({ data }) => {
  if (!data) return null;

  const { peakHours, partOfDay, topProducts, bottomProducts } = data;

  const peakHoursData = {
    labels: peakHours.map(i => i.hour),
    datasets: [{
      label: 'Transactions',
      data: peakHours.map(i => i.count),
      fill: true,
      borderColor: '#C7A07A',
      backgroundColor: 'rgba(199,160,122,0.1)',
      tension: 0.4,
    }],
  };

  const partOfDayLabels = Object.keys(partOfDay);
  const partOfDayData = {
    labels: partOfDayLabels,
    datasets: [{
      data: partOfDayLabels.map(k => partOfDay[k]),
      backgroundColor: [
        'rgba(199,160,122,0.8)',
        'rgba(111,74,72,0.8)',
        'rgba(255,143,145,0.8)',
      ],
    }],
  };

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]">
        <Line data={peakHoursData} options={{ responsive: true }} />
        <Bar data={partOfDayData} options={{ responsive: true }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductList
          title="Top 5 Products"
          products={topProducts.map(p => ({ product: p.name, count: p.value }))}
        />
        <ProductList
          title="Bottom 5 Products"
          products={bottomProducts.map(p => ({ product: p.name, count: p.value }))}
          type="bottom"
        />
      </div>
    </section>
  );
};
