import ResourcePageShell from "@/components/resources/ResourcePageShell";
import type { ResourceItem } from "@/components/resources/ResourceCard";

const items: ResourceItem[] = [
  {
    type: "Strategy Session",
    title: "How to improve a travel website without a full redesign",
    excerpt: "A walkthrough of the highest-impact changes you can make to an existing travel website to improve trust, clarity, and conversion.",
    category: "Website & UX",
    date: "Mar 2026",
    duration: "18 min",
    ctaLabel: "Watch session",
    featured: true,
  },
  {
    type: "Strategy Session",
    title: "How to diagnose a low-converting travel homepage",
    excerpt: "We break down common patterns that kill homepage conversion — and what to fix first.",
    category: "Website & UX",
    date: "Feb 2026",
    duration: "14 min",
    ctaLabel: "Watch session",
  },
  {
    type: "Expert Interview",
    title: "What makes a booking journey feel trustworthy",
    excerpt: "A conversation about the micro-moments that build or break buyer confidence during the booking process.",
    category: "Booking & Conversion",
    date: "Feb 2026",
    duration: "22 min",
    ctaLabel: "Watch session",
  },
  {
    type: "Strategy Session",
    title: "Why some travel brands scale with ads and others stall",
    excerpt: "The structural differences between travel brands that grow profitably with paid media and those that burn budget.",
    category: "Paid Media",
    date: "Jan 2026",
    duration: "16 min",
    ctaLabel: "Watch session",
  },
  {
    type: "Strategy Session",
    title: "How to structure a content system for long-term discoverability",
    excerpt: "Building an organic content engine that compounds — not just a blog with random posts.",
    category: "SEO & Content",
    date: "Jan 2026",
    duration: "20 min",
    ctaLabel: "Watch session",
  },
  {
    type: "Case Breakdown",
    title: "The difference between brand awareness and booking intent",
    excerpt: "Understanding the gap between visibility and revenue — and how to close it strategically.",
    category: "Brand Positioning",
    date: "Dec 2025",
    duration: "12 min",
    ctaLabel: "Watch session",
  },
  {
    type: "Strategy Session",
    title: "Where automation creates the most leverage in travel operations",
    excerpt: "Identifying the workflows and touchpoints where automation delivers real ROI for travel businesses.",
    category: "CRM & Automation",
    date: "Dec 2025",
    duration: "15 min",
    ctaLabel: "Watch session",
  },
  {
    type: "Expert Interview",
    title: "Breaking down a travel offer that feels easier to say yes to",
    excerpt: "What makes some travel offers feel irresistible — and how to restructure yours for clarity and confidence.",
    category: "Brand Positioning",
    date: "Nov 2025",
    duration: "19 min",
    ctaLabel: "Watch session",
  },
];

const topics = [
  "Website & UX",
  "Booking & Conversion",
  "Paid Media",
  "SEO & Content",
  "Brand Positioning",
  "CRM & Automation",
];

export default function VideoSessions() {
  return (
    <ResourcePageShell
      headline="Video Sessions"
      description="A curated library of video-led insights covering positioning, travel marketing, website conversion, product thinking, and growth systems — designed for teams that prefer to learn by watching."
      items={items}
      browseTopics={topics}
      cta={{
        headline: "Want this applied to your business, not just explained?",
        subtext: "Our video sessions help you think more clearly. If you want help turning those ideas into execution, we can work directly on the strategy, systems, and implementation.",
        ctaLabel: "Book a Strategy Call",
      }}
      ctaSecondary={{ label: "Explore Services", to: "/services/market-research" }}
    />
  );
}
