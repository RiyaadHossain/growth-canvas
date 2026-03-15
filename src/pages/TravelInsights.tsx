import ResourcePageShell from "@/components/resources/ResourcePageShell";
import { travelInsightsItems } from "@/data/travelInsightsItems";
import type { ResourceItem } from "@/components/resources/ResourceCard";

const topics = [
  "Brand Strategy",
  "Booking Behavior",
  "Conversion & UX",
  "Distribution & Channels",
  "Organic Growth",
  "Market Trends",
];

export default function TravelInsights() {
  return (
    <ResourcePageShell
      headline="Travel Insights"
      description="A curated stream of strategic thinking for travel operators, agencies, destinations, and hospitality-led brands. Explore market shifts, traveler behavior, channel trends, and practical perspectives that help you make smarter growth decisions."
      tags={["Market Trends", "Consumer Behavior", "Growth Signals", "Travel Strategy"]}
      items={travelInsightsItems}
      browseTopics={topics}
      cta={{
        headline: "Want insights applied to your business?",
        subtext: "Reading the market is one thing. Acting on the right opportunity is another. If you need help translating industry signals into a real growth direction, we can help.",
        ctaLabel: "Book a Strategy Call",
      }}
      ctaSecondary={{ label: "Explore Services", to: "/services/market-research" }}
    />
  );
}
