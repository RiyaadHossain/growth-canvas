import ResourcePageShell from "@/components/resources/ResourcePageShell";
import { guidesPlaybooksItems } from "@/data/guidesPlaybooksItems";
import type { ResourceItem } from "@/components/resources/ResourceCard";
import { usePlaybooks, usePlaybookCategoryLabels } from "@/lib/playbooksApi";

const fallbackTopics = [
  "Brand Strategy",
  "UX & Conversion",
  "Growth Strategy",
  "Paid Media",
  "SEO & Content",
  "CRM & Automation",
];

export default function GuidesPlaybooks() {
  const { data } = usePlaybooks();
  const { data: categories } = usePlaybookCategoryLabels();
  const items = (data && data.length > 0 ? data : guidesPlaybooksItems) as unknown as ResourceItem[];
  const topics = categories && categories.length > 0 ? categories : fallbackTopics;

  return (
    <ResourcePageShell
      headline="Guides & Playbooks"
      description="A growing library of in-depth frameworks designed to help travel businesses make sharper decisions across positioning, digital experience, acquisition, and growth operations."
      items={items}
      browseTopics={topics}
      cta={{
        headline: "Need a framework built around your business?",
        subtext: "Our guides are designed to help you think better. If you want the same strategic structure tailored to your audience, offer, and growth stage, we can build it with you.",
        ctaLabel: "Request a Tailored Roadmap",
      }}
      ctaSecondary={{ label: "Explore Strategy Services", to: "/services/market-research" }}
    />
  );
}
