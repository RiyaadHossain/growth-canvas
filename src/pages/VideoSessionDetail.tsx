import { useParams, Navigate } from "react-router-dom";
import VideoSessionDetailPage from "@/components/resources/VideoSessionDetailPage";
import { videoSessionsItems } from "@/data/videoSessionsItems";

export default function VideoSessionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const fullSlug = `/resources/video-sessions/${slug}`;
  const item = videoSessionsItems.find((i) => i.slug === fullSlug);

  if (!item) return <Navigate to="/resources/video-sessions" replace />;

  const related = videoSessionsItems
    .filter((i) => i.slug !== fullSlug && i.category === item.category)
    .slice(0, 3);

  const relatedItems =
    related.length > 0
      ? related
      : videoSessionsItems.filter((i) => i.slug !== fullSlug).slice(0, 3);

  return (
    <VideoSessionDetailPage
      item={item}
      relatedItems={relatedItems}
      backTo="/resources/video-sessions"
    />
  );
}
