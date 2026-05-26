import { useQuery } from "@tanstack/react-query";
import ResourcePageShell from "@/components/resources/ResourcePageShell";
import { Skeleton } from "@/components/ui/skeleton";
import Layout from "@/components/layout/Layout";
import {
  fetchTravelInsights,
  fetchTravelInsightCategories,
  toResourceItem,
} from "@/lib/travelInsightsApi";

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

  if (insightsQuery.isError) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-wide max-w-2xl text-center">
            <h1 className="font-heading text-3xl font-bold">Couldn't load Travel Insights</h1>
            <p className="mt-3 text-muted-foreground">Please refresh the page or try again shortly.</p>
          </div>
        </section>
      </Layout>
    );
  }

  const items = (insightsQuery.data || []).map(toResourceItem);
  const topics = (categoriesQuery.data || []).map((c) => c.label);

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
