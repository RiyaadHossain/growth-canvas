import { useParams, Navigate } from "react-router-dom";
import ResourceDetailPage from "@/components/resources/ResourceDetailPage";
import { guidesPlaybooksItems } from "@/data/guidesPlaybooksItems";

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const fullSlug = `/resources/guides-playbooks/${slug}`;
  const item = guidesPlaybooksItems.find((i) => i.slug === fullSlug);

  if (!item) return <Navigate to="/resources/guides-playbooks" replace />;

  const related = guidesPlaybooksItems
    .filter((i) => i.slug !== fullSlug && i.category === item.category)
    .slice(0, 3);

  return (
    <ResourceDetailPage
      item={item}
      backLabel="Back to Guides & Playbooks"
      backTo="/resources/guides-playbooks"
      relatedItems={related}
      cta={{
        headline: "Need a framework built around your business?",
        subtext: "Our guides are designed to help you think better. If you want the same strategic structure tailored to your audience, offer, and growth stage, we can build it with you.",
        ctaLabel: "Request a Tailored Roadmap",
      }}
    />
  );
}
