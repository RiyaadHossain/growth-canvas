import { useParams, Navigate } from "react-router-dom";
import CaseStudyDetailPage from "@/components/resources/CaseStudyDetailPage";
import { useCaseStudy } from "@/lib/caseStudiesApi";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading, error } = useCaseStudy(slug);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (error || !data?.item) {
    return <Navigate to="/resources/case-studies" replace />;
  }

  return (
    <CaseStudyDetailPage
      item={data.item}
      relatedItems={data.related}
      backTo="/resources/case-studies"
    />
  );
}
