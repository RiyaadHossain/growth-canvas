import { useQuery } from "@tanstack/react-query";
import ResourcePageShell from "@/components/resources/ResourcePageShell";
import { Skeleton } from "@/components/ui/skeleton";
import Layout from "@/components/layout/Layout";
import {
  fetchTravelInsights,
  fetchTravelInsightCategories,
  toResourceItem,
} from "@/lib/travelInsightsApi";
import { travelInsightsItems } from "@/data/travelInsightsItems";
import type { ResourceItem } from "@/components/resources/ResourceCard";

const localItems = travelInsightsItems as unknown as ResourceItem[];
const localTopics = [...new Set(travelInsightsItems.map((i) => i.category).filter(Boolean))];

export default function TravelInsights() {
  const insightsQuery = useQuery({
    queryKey: ["travel-insights"],
    queryFn: fetchTravelInsights,
    staleTime: 5 * 60 * 1000,
  });

  const categoriesQuery = useQuery({
    queryKey: ["travel-insight-categories"],
    queryFn: fetchTravelInsightCategories,
    staleTime: 5 * 60 * 1000,
  });

  if (insightsQuery.isLoading || categoriesQuery.isLoading) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-wide max-w-3xl text-center space-y-4">
            <Skeleton className="mx-auto h-4 w-24" />
            <Skeleton className="mx-auto h-12 w-3/4" />
            <Skeleton className="mx-auto h-4 w-2/3" />
          </div>
        </section>
        <section className="section-padding !pt-0">
          <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-56 w-full rounded-xl" />
            ))}
          </div>
        </section>
      </Layout>
    );
  }

  const apiItems = insightsQuery.isError ? [] : (insightsQuery.data || []).map(toResourceItem);
  const items = apiItems.length > 0 ? apiItems : localItems;
  const apiTopics = (categoriesQuery.data || []).map((c) => c.label);
  const topics = apiTopics.length > 0 ? apiTopics : localTopics;

  return (
    <ResourcePageShell
      headline="Travel Insights"
      description="A curated stream of strategic thinking for travel operators, agencies, destinations, and hospitality-led brands. Explore market shifts, traveler behavior, channel trends, and practical perspectives that help you make smarter growth decisions."
      tags={["Market Trends", "Consumer Behavior", "Growth Signals", "Travel Strategy"]}
      items={items}
      browseTopics={topics}
      cta={{
        headline: "Want insights applied to your business?",
        subtext:
          "Reading the market is one thing. Acting on the right opportunity is another. If you need help translating industry signals into a real growth direction, we can help.",
        ctaLabel: "Book a Strategy Call",
      }}
      ctaSecondary={{ label: "Explore Services", to: "/services/market-research" }}
    />
  );
}
