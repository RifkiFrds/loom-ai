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
