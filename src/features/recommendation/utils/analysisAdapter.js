export const adaptAnalysisResponse = (response) => {
  // Guard clause for empty or invalid response
  if (!response || !response.data_insights) {
    console.warn('Analysis Adapter: Received invalid response structure', response);
    return null;
  }

  // Safe destructuring with defaults
  const {
    data_insights = {},
    ai_recommendations = {}
  } = response;

  // 1. Adapt Metrics
  const metrics = {
    totalTransactions: data_insights.total_transactions || 0,
    totalCustomers: data_insights.total_unique_customers || 0,
    avgBasket: data_insights.average_items_per_basket || 0,
    dateRange: data_insights.date_range ? {
      start_date: data_insights.date_range.start_date || 'N/A',
      end_date: data_insights.date_range.end_date || 'N/A'
    } : null
  };

  // 2. Adapt Charts Data
  const charts = {
    // Peak Shopping Hours
    peakHours: Array.isArray(data_insights.peak_shopping_hours)
      ? data_insights.peak_shopping_hours.map(item => ({
        hour: item.hour || '',
        count: item.transaction_count || 0
      }))
      : [],

    // Shopping by Part of Day
    partOfDay: data_insights.shopping_by_part_of_day || {
      Morning: 0,
      Afternoon: 0,
      Evening: 0
    },

    // Top Products
    topProducts: Array.isArray(data_insights.top_5_products)
      ? data_insights.top_5_products.map(item => ({
        name: item.product_name || 'Unknown Product',
        value: item.purchase_count || 0,
        percentage: item.percentage || 0
      }))
      : [],

    // Bottom Products (Losers)
    bottomProducts: Array.isArray(data_insights.losers_5_products)
      ? data_insights.losers_5_products.map(item => ({
        name: item.product_name || 'Unknown Product',
        value: item.purchase_count || 0,
        percentage: item.percentage || 0,
        status: item.status || 'needs_attention'
      }))
      : []
  };

  // 3. Adapt Recommendations
  const recommendations = {
    strategic_recommendations: ai_recommendations.strategic_recommendations || 'No logical strategy available.',
    bundling_recommendations: ai_recommendations.bundling_recommendations || 'No bundling opportunities detected.',
    losers_discount_recommendations: ai_recommendations.losers_discount_recommendations || 'No clearance advice generated.'
  };

  return {
    metrics,
    charts,
    recommendations
  };
};
