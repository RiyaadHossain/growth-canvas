import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import TravelInsightDetailPage from "@/components/resources/TravelInsightDetailPage";
import Layout from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchTravelInsightById,
  fetchTravelInsights,
  toTravelInsightItem,
  toResourceItem,
} from "@/lib/travelInsightsApi";
import type { TravelInsightItem } from "@/components/resources/TravelInsightDetailPage";

export default function TravelInsightDetail() {
  const { id } = useParams<{ id: string }>();

  const detailQuery = useQuery({
    queryKey: ["travel-insight", id],
    queryFn: () => fetchTravelInsightById(id!),
    enabled: !!id,
  });

  const listQuery = useQuery({
    queryKey: ["travel-insights"],
    queryFn: fetchTravelInsights,
    staleTime: 5 * 60 * 1000,
  });

  if (!id) return <Navigate to="/resources/travel-insights" replace />;

  if (detailQuery.isLoading) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-wide max-w-4xl space-y-6">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="aspect-[21/9] w-full rounded-2xl" />
          </div>
        </section>
      </Layout>
    );
  }

  if (detailQuery.isError || !detailQuery.data) {
    return <Navigate to="/resources/travel-insights" replace />;
  }

  const item = toTravelInsightItem(detailQuery.data);

  const related: TravelInsightItem[] = (listQuery.data || [])
    .filter((i) => i.slug !== id)
    .slice(0, 3)
    .map((i) => {
      const r = toResourceItem(i);
      return {
        type: r.type,
        title: r.title,
        excerpt: r.excerpt,
        category: r.category,
        date: r.date,
        readingTime: r.readingTime,
        slug: r.slug!,
      };
    });

  return (
    <TravelInsightDetailPage
      item={item}
      relatedItems={related}
      backTo="/resources/travel-insights"
    />
  );
}
