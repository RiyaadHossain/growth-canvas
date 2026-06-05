import ResourcePageShell from "@/components/resources/ResourcePageShell";
import { caseStudiesItems } from "@/data/caseStudiesItems";
import type { ResourceItem } from "@/components/resources/ResourceCard";
import { useCaseStudies } from "@/lib/caseStudiesApi";

const topics = [
  "Positioning",
  "UX & Booking",
  "Growth Strategy",
  "Content & SEO",
  "Automation",
  "Paid Media",
];

export default function CaseStudies() {
  const { data } = useCaseStudies();
  const items = (data && data.length > 0 ? data : caseStudiesItems) as unknown as ResourceItem[];

  return (
    <ResourcePageShell
      headline="Case Studies"
      description="A closer look at how thoughtful positioning, better digital experiences, stronger acquisition systems, and smarter operations create measurable momentum for travel brands."
      items={items}
      browseTopics={topics}
      cta={{
        headline: "Want to create your own next case study?",
        subtext: "Every engagement starts with clarity. If you're navigating a growth bottleneck, conversion issue, or strategic gap, we can help identify the right next move.",
        ctaLabel: "Book a Strategy Call",
      }}
      ctaSecondary={{ label: "Explore Services", to: "/services/market-research" }}
    />
  );
}
