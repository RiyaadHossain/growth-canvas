import { useParams, Navigate } from "react-router-dom";
import ResourceDetailPage from "@/components/resources/ResourceDetailPage";
import { travelInsightsItems } from "@/data/travelInsightsItems";

export default function TravelInsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const fullSlug = `/resources/travel-insights/${slug}`;
  const item = travelInsightsItems.find((i) => i.slug === fullSlug);

  if (!item) return <Navigate to="/resources/travel-insights" replace />;

  const related = travelInsightsItems
    .filter((i) => i.slug !== fullSlug && i.category === item.category)
    .slice(0, 3);

  return (
    <ResourceDetailPage
      item={item}
      backLabel="Back to Travel Insights"
      backTo="/resources/travel-insights"
      relatedItems={related}
      cta={{
        headline: "Want insights applied to your business?",
        subtext: "Reading the market is one thing. Acting on the right opportunity is another. If you need help translating industry signals into a real growth direction, we can help.",
        ctaLabel: "Book a Strategy Call",
      }}
    />
  );
}
