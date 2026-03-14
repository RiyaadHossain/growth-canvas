import ResourcePageShell from "@/components/resources/ResourcePageShell";
import type { ResourceItem } from "@/components/resources/ResourceCard";

const items: ResourceItem[] = [
  {
    type: "Insight",
    title: "What today's travelers actually expect before they book",
    excerpt: "Booking decisions are shaped long before the checkout page. Understanding pre-booking expectations helps brands build trust earlier in the journey.",
    category: "Booking Behavior",
    date: "Mar 2026",
    readingTime: "6 min read",
    ctaLabel: "Read insight",
    featured: true,
  },
  {
    type: "Insight",
    title: "Why most travel websites lose trust in the first 10 seconds",
    excerpt: "First impressions in travel are ruthless. We break down the patterns that erode credibility before visitors even scroll.",
    category: "Conversion & UX",
    date: "Mar 2026",
    readingTime: "5 min read",
    ctaLabel: "Read insight",
  },
  {
    type: "Insight",
    title: "The difference between traffic and booking intent in travel",
    excerpt: "Not all visitors are created equal. Learn how to distinguish awareness traffic from high-intent demand.",
    category: "Brand Strategy",
    date: "Feb 2026",
    readingTime: "7 min read",
    ctaLabel: "Read insight",
  },
  {
    type: "Insight",
    title: "What boutique travel brands can learn from high-converting DTC brands",
    excerpt: "Direct-to-consumer brands excel at clarity and conversion. Here's what travel operators can borrow from their playbook.",
    category: "Brand Strategy",
    date: "Feb 2026",
    readingTime: "8 min read",
    ctaLabel: "Read insight",
  },
  {
    type: "Insight",
    title: "SEO for travel brands: visibility is not the same as demand",
    excerpt: "Ranking for keywords doesn't guarantee bookings. We explore the gap between organic traffic and real traveler intent.",
    category: "Organic Growth",
    date: "Jan 2026",
    readingTime: "6 min read",
    ctaLabel: "Read insight",
  },
  {
    type: "Insight",
    title: "Why travelers compare emotionally before they compare prices",
    excerpt: "Price sensitivity in travel is often a symptom of weak positioning. Emotional differentiation changes the comparison game.",
    category: "Booking Behavior",
    date: "Jan 2026",
    readingTime: "5 min read",
    ctaLabel: "Read insight",
  },
  {
    type: "Insight",
    title: "The hidden cost of fragmented marketing systems in travel",
    excerpt: "Disconnected tools and channels create invisible friction. Here's how fragmentation quietly erodes growth.",
    category: "Distribution & Channels",
    date: "Dec 2025",
    readingTime: "7 min read",
    ctaLabel: "Read insight",
  },
  {
    type: "Insight",
    title: "How to position a travel brand without sounding like everyone else",
    excerpt: "Differentiation in travel starts with clarity, not creativity. A framework for finding your real market edge.",
    category: "Brand Strategy",
    date: "Dec 2025",
    readingTime: "6 min read",
    ctaLabel: "Read insight",
  },
];

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
      items={items}
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
