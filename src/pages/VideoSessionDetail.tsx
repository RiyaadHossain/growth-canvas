import { useParams, Navigate } from "react-router-dom";
import ResourceDetailPage from "@/components/resources/ResourceDetailPage";
import { videoSessionsItems } from "@/data/videoSessionsItems";

export default function VideoSessionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const fullSlug = `/resources/video-sessions/${slug}`;
  const item = videoSessionsItems.find((i) => i.slug === fullSlug);

  if (!item) return <Navigate to="/resources/video-sessions" replace />;

  const related = videoSessionsItems
    .filter((i) => i.slug !== fullSlug && i.category === item.category)
    .slice(0, 3);

  return (
    <ResourceDetailPage
      item={item}
      backLabel="Back to Video Sessions"
      backTo="/resources/video-sessions"
      relatedItems={related}
      cta={{
        headline: "Want this applied to your business, not just explained?",
        subtext: "Our video sessions help you think more clearly. If you want help turning those ideas into execution, we can work directly on the strategy, systems, and implementation.",
        ctaLabel: "Book a Strategy Call",
      }}
    />
  );
}
