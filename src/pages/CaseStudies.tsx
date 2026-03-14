import ResourcePageShell from "@/components/resources/ResourcePageShell";
import type { ResourceItem } from "@/components/resources/ResourceCard";

const items: ResourceItem[] = [
  {
    type: "Case Study",
    title: "How a boutique travel brand clarified its positioning before relaunch",
    excerpt: "A repositioning engagement that helped a boutique travel business define its audience, sharpen its offer, and relaunch with a cohesive brand system.",
    category: "Positioning",
    date: "Mar 2026",
    readingTime: "8 min read",
    ctaLabel: "View case study",
    featured: true,
  },
  {
    type: "Case Study",
    title: "Improving booking confidence for a high-consideration travel offer",
    excerpt: "How we identified and addressed the trust barriers in a premium travel booking journey to improve conversion rates.",
    category: "UX & Booking",
    date: "Feb 2026",
    readingTime: "7 min read",
    ctaLabel: "View case study",
  },
  {
    type: "Case Study",
    title: "Turning fragmented marketing into a clearer acquisition system",
    excerpt: "A growth strategy engagement that consolidated scattered channel activity into a structured, measurable acquisition framework.",
    category: "Growth Strategy",
    date: "Jan 2026",
    readingTime: "9 min read",
    ctaLabel: "View case study",
  },
  {
    type: "Case Study",
    title: "Rebuilding a travel website around trust, clarity, and conversion",
    excerpt: "A website redesign focused on aligning brand messaging, UX structure, and booking flow for a destination-led travel brand.",
    category: "UX & Booking",
    date: "Jan 2026",
    readingTime: "8 min read",
    ctaLabel: "View case study",
  },
  {
    type: "Case Study",
    title: "How content strategy improved discoverability for a destination-led brand",
    excerpt: "An organic growth engagement that built a content architecture connecting search intent to the brand's core travel experiences.",
    category: "Content & SEO",
    date: "Dec 2025",
    readingTime: "7 min read",
    ctaLabel: "View case study",
  },
  {
    type: "Case Study",
    title: "Streamlining lead follow-up for a travel business with longer sales cycles",
    excerpt: "How we mapped the lead journey and implemented automation to reduce drop-off and improve conversion in a high-consideration travel business.",
    category: "Automation",
    date: "Dec 2025",
    readingTime: "6 min read",
    ctaLabel: "View case study",
  },
];

const topics = [
  "Positioning",
  "UX & Booking",
  "Growth Strategy",
  "Content & SEO",
  "Automation",
  "Paid Media",
];

export default function CaseStudies() {
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
