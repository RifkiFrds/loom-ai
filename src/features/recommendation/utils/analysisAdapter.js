export const adaptAnalysisResponse = (apiResponse) => {
  const insights = apiResponse.data_insights || {};
  const recs = apiResponse.ai_recommendations || {};

  return {
    metrics: {
      totalTransactions: insights.total_transactions ?? 0,
      totalCustomers: insights.total_unique_customers ?? 0,
      avgBasket: insights.average_items_per_basket ?? 0,
      dateRange: insights.date_range ?? null,
    },
    charts: {
      peakHours: insights.peak_shopping_hours ?? [],
      partOfDay: insights.shopping_by_part_of_day ?? {},
      topProducts: (insights.top_5_products ?? []).map(p => ({
        name: p.product,
        value: p.total,
      })),
      bottomProducts: (insights.losers_5_products ?? []).map(p => ({
        name: p.product,
        value: p.total,
      })),
    },
    recommendations: recs,
  };
};
