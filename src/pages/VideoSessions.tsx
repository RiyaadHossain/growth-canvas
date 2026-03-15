import ResourcePageShell from "@/components/resources/ResourcePageShell";
import { videoSessionsItems } from "@/data/videoSessionsItems";
import type { ResourceItem } from "@/components/resources/ResourceCard";

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
      items={videoSessionsItems as unknown as ResourceItem[]}
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
      items={videoSessionsItems}
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
