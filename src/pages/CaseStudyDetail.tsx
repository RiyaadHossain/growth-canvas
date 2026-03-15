import { useParams, Navigate } from "react-router-dom";
import ResourceDetailPage from "@/components/resources/ResourceDetailPage";
import { caseStudiesItems } from "@/data/caseStudiesItems";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const fullSlug = `/resources/case-studies/${slug}`;
  const item = caseStudiesItems.find((i) => i.slug === fullSlug);

  if (!item) return <Navigate to="/resources/case-studies" replace />;

  const related = caseStudiesItems
    .filter((i) => i.slug !== fullSlug && i.category === item.category)
    .slice(0, 3);

  return (
    <ResourceDetailPage
      item={item}
      backLabel="Back to Case Studies"
      backTo="/resources/case-studies"
      relatedItems={related}
      cta={{
        headline: "Want to create your own next case study?",
        subtext: "Every engagement starts with clarity. If you're navigating a growth bottleneck, conversion issue, or strategic gap, we can help identify the right next move.",
        ctaLabel: "Book a Strategy Call",
      }}
    />
  );
}
