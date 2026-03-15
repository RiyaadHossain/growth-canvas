import { useParams, Navigate } from "react-router-dom";
import GuideDetailPage from "@/components/resources/GuideDetailPage";
import { guidesPlaybooksItems } from "@/data/guidesPlaybooksItems";

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const fullSlug = `/resources/guides-playbooks/${slug}`;
  const item = guidesPlaybooksItems.find((i) => i.slug === fullSlug);

  if (!item) return <Navigate to="/resources/guides-playbooks" replace />;

  const related = guidesPlaybooksItems
    .filter((i) => i.slug !== fullSlug)
    .sort((a, b) => {
      // prefer same category first
      const aMatch = a.category === item.category ? 0 : 1;
      const bMatch = b.category === item.category ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, 3);

  return (
    <GuideDetailPage
      item={item}
      backTo="/resources/guides-playbooks"
      relatedItems={related}
    />
  );
}
