import { useParams, Navigate } from "react-router-dom";
import TravelInsightDetailPage from "@/components/resources/TravelInsightDetailPage";
import { travelInsightsItems } from "@/data/travelInsightsItems";

export default function TravelInsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const fullSlug = `/resources/travel-insights/${slug}`;
  const item = travelInsightsItems.find((i) => i.slug === fullSlug);

  if (!item) return <Navigate to="/resources/travel-insights" replace />;

  const related = travelInsightsItems
    .filter((i) => i.slug !== fullSlug)
    .filter((i) => i.category === item.category || true) // show up to 3 regardless of category
    .slice(0, 3);

  return (
    <TravelInsightDetailPage
      item={item}
      relatedItems={related}
      backTo="/resources/travel-insights"
    />
  );
}
