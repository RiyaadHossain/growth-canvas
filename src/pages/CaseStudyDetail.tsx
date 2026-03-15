import { useParams, Navigate } from "react-router-dom";
import CaseStudyDetailPage from "@/components/resources/CaseStudyDetailPage";
import { caseStudiesItems } from "@/data/caseStudiesItems";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const fullSlug = `/resources/case-studies/${slug}`;
  const item = caseStudiesItems.find((i) => i.slug === fullSlug);

  if (!item) return <Navigate to="/resources/case-studies" replace />;

  const related = caseStudiesItems
    .filter((i) => i.slug !== fullSlug && i.category === item.category)
    .slice(0, 3);

  // Fallback to any other items if no same-category
  const relatedItems =
    related.length > 0
      ? related
      : caseStudiesItems.filter((i) => i.slug !== fullSlug).slice(0, 3);

  return (
    <CaseStudyDetailPage
      item={item}
      relatedItems={relatedItems}
      backTo="/resources/case-studies"
    />
  );
}
