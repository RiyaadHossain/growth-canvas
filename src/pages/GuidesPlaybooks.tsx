import ResourcePageShell from "@/components/resources/ResourcePageShell";
import type { ResourceItem } from "@/components/resources/ResourceCard";

const items: ResourceItem[] = [
  {
    type: "Playbook",
    title: "The Travel Brand Positioning Playbook",
    excerpt: "A practical framework for clarifying your audience, value proposition, and market edge — so your brand becomes easier to understand, trust, and choose.",
    category: "Brand Strategy",
    date: "Mar 2026",
    readingTime: "25 min read",
    ctaLabel: "Read playbook",
    featured: true,
  },
  {
    type: "Guide",
    title: "How to Audit a Travel Website for Conversion Friction",
    excerpt: "A step-by-step guide to identifying the UX, messaging, and structural issues that quietly hurt your website's ability to convert.",
    category: "UX & Conversion",
    date: "Feb 2026",
    readingTime: "18 min read",
    ctaLabel: "Read guide",
  },
  {
    type: "Framework",
    title: "A Practical Growth Strategy Framework for Tour Operators",
    excerpt: "A structured approach to evaluating your market position, acquisition channels, and operational readiness for scalable growth.",
    category: "Growth Strategy",
    date: "Feb 2026",
    readingTime: "22 min read",
    ctaLabel: "Open framework",
  },
  {
    type: "Checklist",
    title: "The Paid Media Readiness Checklist for Travel Brands",
    excerpt: "Before you spend on ads, make sure your offer, landing experience, and tracking are ready to perform.",
    category: "Paid Media",
    date: "Jan 2026",
    readingTime: "12 min read",
    ctaLabel: "Open checklist",
  },
  {
    type: "Guide",
    title: "How to Build a Content & SEO System That Actually Compounds",
    excerpt: "A practical guide to creating a content architecture that drives organic discovery and builds authority over time.",
    category: "SEO & Content",
    date: "Jan 2026",
    readingTime: "20 min read",
    ctaLabel: "Read guide",
  },
  {
    type: "Framework",
    title: "The Booking UX Improvement Framework",
    excerpt: "Diagnose and fix the friction points in your booking flow that cost you conversions — without a full redesign.",
    category: "UX & Conversion",
    date: "Dec 2025",
    readingTime: "15 min read",
    ctaLabel: "Open framework",
  },
  {
    type: "Guide",
    title: "How to Structure Lead Nurturing for High-Consideration Travel Offers",
    excerpt: "When the buying cycle is long, follow-up matters. A guide to nurturing leads through to conversion in travel.",
    category: "CRM & Automation",
    date: "Dec 2025",
    readingTime: "16 min read",
    ctaLabel: "Read guide",
  },
  {
    type: "Playbook",
    title: "A Travel Business Funnel Mapping Playbook",
    excerpt: "Map your customer journey from first touch to booking — and identify where the biggest opportunities live.",
    category: "Growth Strategy",
    date: "Nov 2025",
    readingTime: "20 min read",
    ctaLabel: "Read playbook",
  },
];

const topics = [
  "Brand Strategy",
  "UX & Conversion",
  "Growth Strategy",
  "Paid Media",
  "SEO & Content",
  "CRM & Automation",
];

export default function GuidesPlaybooks() {
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
