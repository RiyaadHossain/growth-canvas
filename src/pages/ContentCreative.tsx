import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Pen, Camera, Palette, MessageSquare, Layers, BookOpen, Film, Share2,
  Shield, TrendingUp, Sparkles, AlertTriangle, HelpCircle, Shuffle, Eye,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "Content & Creative Production for Travel Businesses",
    headline: "Create content that builds trust",
    highlightedText: "before the sale.",
    description: "Travel decisions are emotional, visual, and trust-driven. We help brands produce content systems and creative assets that communicate value clearly, support marketing performance, and make the brand feel more compelling across every touchpoint.",
    trustLine: "Built for travel brands that need content with strategic intent, not just volume.",
  },
  problem: {
    headline: "Good content doesn't just fill a feed — it drives",
    highlightedText: "every decision.",
    paragraph: "From discovery to decision, the right content builds confidence and moves travelers closer to action.",
    painPoints: [
      { icon: Shuffle, text: "Inconsistent brand communication across channels" },
      { icon: AlertTriangle, text: "Weak content that doesn't support conversion" },
      { icon: Eye, text: "Random posting without strategy" },
      { icon: HelpCircle, text: "Content that looks good but lacks business intent" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro: "A content and creative system built to support your brand, your marketing, and your growth — not just fill a calendar.",
    items: [
      { title: "Content Strategy & Planning", desc: "Define what to create, why it matters, and how it connects to your business goals.", icon: Pen },
      { title: "Messaging Direction", desc: "Ensure every piece of content communicates with clarity and purpose.", icon: MessageSquare },
      { title: "Campaign Content Concepts", desc: "Develop creative concepts for campaigns that resonate with your audience.", icon: Layers },
      { title: "Social Content Systems", desc: "Build repeatable content structures for consistent social presence.", icon: Share2 },
      { title: "Website Content Support", desc: "Create or refine website copy that supports trust and conversion.", icon: BookOpen },
      { title: "Visual Creative Direction", desc: "Guide the visual style and creative approach across all content.", icon: Palette },
      { title: "Ad Creative Support", desc: "Develop creative direction for paid campaigns that convert.", icon: Film },
      { title: "Content Ecosystem Planning", desc: "Map how content works together across channels and funnel stages.", icon: Camera },
    ],
  },
  process: {
    heading: "How we build content systems that support growth",
    steps: [
      { number: "01", title: "Context", desc: "Brand and audience context review to understand your voice, goals, and market." },
      { number: "02", title: "Map", desc: "Content role mapping by funnel stage to ensure every piece has a purpose." },
      { number: "03", title: "Direct", desc: "Messaging and concept direction to align content with your strategic positioning." },
      { number: "04", title: "Plan", desc: "Content system planning and asset guidance for consistent, scalable execution." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "A strategic content framework with creative direction, channel structure, and a roadmap for consistent execution.",
    groups: [
      { label: "Strategy", items: ["Content strategy direction", "Messaging pillars", "Audience content mapping", "Funnel-stage content plan"] },
      { label: "Creative", items: ["Campaign content concepts", "Creative direction", "Visual style guidance", "Ad creative direction"] },
      { label: "Channels", items: ["Channel content structure", "Social content system", "Website content direction", "Email content guidance"] },
      { label: "Execution", items: ["Content roadmap", "Asset planning", "Production guidance", "Content calendar framework"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Consistent Presence", desc: "Show up across every channel with a unified voice and clear brand story.", icon: Share2 },
      { title: "Strategic Impact", desc: "Every piece of content supports a business goal, not just engagement.", icon: TrendingUp },
      { title: "Stronger Trust", desc: "Content that builds credibility and reduces hesitation throughout the journey.", icon: Shield },
      { title: "Scalable Production", desc: "A content system that grows with your brand without losing quality or consistency.", icon: Sparkles },
    ],
  },
  audience: {
    heading: "Built for travel businesses that need content with purpose",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & agencies", "Experience-led hospitality"],
    supportingLine: "Ideal for brands that want content to drive trust, conversion, and long-term brand value.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most content agencies focus on volume. We focus on intent — connecting every piece of content to your brand strategy, your audience's journey, and your business outcomes.",
    points: [
      { title: "Strategy-led content", desc: "We start with your positioning and goals, then build the content system around it." },
      { title: "Built for travel", desc: "We understand how travelers consume content, what builds trust, and what drives action." },
      { title: "Connected to growth", desc: "Content is designed to support campaigns, SEO, social, and conversion — not exist in isolation." },
      { title: "Systems, not just assets", desc: "We build repeatable content systems, not one-off deliverables." },
    ],
  },
  faq: {
    items: [
      { q: "Do you produce the actual content?", a: "We provide strategic direction, creative concepts, and production guidance. For execution, we work with trusted production partners or your internal team." },
      { q: "Is this just social media management?", a: "No. This is a strategic content engagement that covers messaging, creative direction, and channel planning — not just posting schedules." },
      { q: "Can you work with our existing content team?", a: "Yes. We can provide the strategic framework and creative direction for your team to execute consistently." },
      { q: "How does this connect to our marketing campaigns?", a: "Content strategy is designed to directly support your campaigns, ads, SEO, and website — everything works as one system." },
      { q: "Do you handle photography or video production?", a: "We provide creative direction and can coordinate with production partners. For specific shoots, we'll recommend the right approach for your brand." },
    ],
  },
  cta: {
    headline: "Need content that actually supports growth?",
    subtext: "Let's build a content system with purpose. Start with a free discovery call and we'll help you define the right content strategy for your brand.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function ContentCreative() {
  return <ServicePageLayout data={data} />;
}
