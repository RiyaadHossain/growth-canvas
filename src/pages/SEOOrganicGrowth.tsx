import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Search, TrendingUp, FileText, Globe, Layers, Target, BarChart3, BookOpen,
  Shield, Sparkles, AlertTriangle, HelpCircle, Shuffle, Eye, PenTool,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "Content & SEO for Travel Businesses",
    headline: "Build organic reach through strategic content and",
    highlightedText: "authority that compounds.",
    description: "Travel decisions begin long before booking. People search, compare, explore destinations, evaluate trust, and gather inspiration before they act. We help travel brands build content and SEO systems that improve discoverability, strengthen authority, and support long-term growth through useful, search-aligned content.",
    trustLine: "Built for travel brands that want organic visibility without depending entirely on paid spend.",
  },
  problem: {
    headline: "Content without strategy is noise. SEO without content is",
    highlightedText: "invisible.",
    paragraph: "When content and SEO work together, your brand stays top-of-mind before a booking decision is made. Most travel businesses either lack a clear content direction or run SEO in isolation from their content strategy.",
    painPoints: [
      { icon: Eye, text: "Low search visibility in competitive travel categories" },
      { icon: Shuffle, text: "Weak or inconsistent content direction" },
      { icon: AlertTriangle, text: "Content that looks active but doesn't support discovery" },
      { icon: Target, text: "Ranking for the wrong topics or low-intent terms" },
      { icon: HelpCircle, text: "No clear authority-building strategy" },
      { icon: Search, text: "SEO efforts disconnected from real content systems" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro: "A strategic content and SEO engagement designed to build sustainable organic visibility and authority for your travel brand.",
    items: [
      { title: "Organic Growth Analysis", desc: "Assess your current visibility and identify the highest-impact content and SEO opportunities.", icon: BarChart3 },
      { title: "Search Intent Mapping", desc: "Map keywords and topics to traveler intent so your content matches what people actually search for.", icon: Target },
      { title: "Content Strategy Direction", desc: "Define a clear content direction aligned with your brand, audience, and growth goals.", icon: PenTool },
      { title: "Destination & Discovery Content", desc: "Plan destination-led and editorial content that drives organic discovery and builds trust.", icon: Globe },
      { title: "Content Cluster Planning", desc: "Build topic clusters that establish authority and capture related search traffic over time.", icon: Layers },
      { title: "Core Page SEO", desc: "Optimize your most important pages for the right terms, intent, and search structure.", icon: FileText },
      { title: "Authority-Building Direction", desc: "Develop a strategy for building topical authority through consistent, useful content.", icon: BookOpen },
      { title: "Organic Growth Roadmap", desc: "A long-term plan for building and sustaining content-driven organic visibility.", icon: TrendingUp },
    ],
  },
  process: {
    heading: "How we build content and SEO systems that compound",
    steps: [
      { number: "01", title: "Audit", desc: "Visibility and content audit to understand your current organic performance and gaps." },
      { number: "02", title: "Map", desc: "Search intent and traveler journey analysis to identify the right topics and opportunities." },
      { number: "03", title: "Plan", desc: "Content system and SEO structure planning with prioritization of pages, clusters, and themes." },
      { number: "04", title: "Build", desc: "Optimization direction and long-term roadmap for sustained organic growth." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "A structured content and SEO strategy with clear priorities, content direction, and a roadmap for long-term organic growth.",
    groups: [
      { label: "Audit", items: ["Organic opportunity audit", "Competitive visibility analysis", "Content performance baseline", "Technical SEO review"] },
      { label: "Strategy", items: ["Search intent and topic map", "Content strategy direction", "Destination & editorial recommendations", "Content cluster framework"] },
      { label: "Optimization", items: ["Page-level SEO priorities", "On-page optimization direction", "Internal linking strategy", "Authority-building roadmap"] },
      { label: "Growth", items: ["Long-term content & SEO growth plan", "Content ecosystem planning", "Performance tracking framework", "Quarterly priority plan"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Better Discoverability", desc: "Show up when travelers are searching, comparing, and exploring destinations.", icon: Search },
      { title: "Stronger Trust", desc: "Build authority and credibility through useful, well-positioned content.", icon: Shield },
      { title: "Relevant Traffic", desc: "Attract higher-intent visitors who are actively looking for what you offer.", icon: Target },
      { title: "Compounding Growth", desc: "A content engine that reduces dependency on paid channels and grows over time.", icon: Sparkles },
    ],
  },
  audience: {
    heading: "Built for travel businesses that want content and SEO to work as a real growth channel",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & agencies", "Experience-led hospitality"],
    supportingLine: "Ideal for brands that want to reduce overdependence on paid acquisition and build lasting organic visibility through strategic content.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most providers treat content and SEO as separate disciplines. We integrate them — connecting search visibility to the content, pages, and user experiences that actually drive growth.",
    points: [
      { title: "Content + SEO, integrated", desc: "We build systems where content strategy and SEO structure work together, not in silos." },
      { title: "Travel-specific knowledge", desc: "We understand destination search behavior, seasonal patterns, and travel content strategy." },
      { title: "Authority-first approach", desc: "We focus on building topical authority, not chasing keyword volume." },
      { title: "Long-term focus", desc: "We build for compounding visibility through strategic content, not quick-fix tactics." },
    ],
  },
  faq: {
    items: [
      { q: "Is this just an SEO service?", a: "No. This is a combined content and SEO engagement. We build the content strategy and SEO structure together so they reinforce each other and drive sustainable organic growth." },
      { q: "Do you create the content too?", a: "We provide content strategy, topic direction, and editorial planning. For full content production, we work with your team or trusted content partners." },
      { q: "How long does it take to see results?", a: "Content and SEO are long-term investments. Most travel brands start seeing meaningful improvement within 3–6 months, with compounding results over time." },
      { q: "Is this a one-time engagement or ongoing?", a: "We offer both. A strategic foundation engagement gives you the roadmap, and ongoing support helps with execution and optimization." },
      { q: "Can you work with our existing content and website?", a: "Yes. We audit what you have, identify gaps and opportunities, and build a strategy that works with your current setup." },
    ],
  },
  cta: {
    headline: "Want content and SEO to work together as a real growth channel?",
    subtext: "Let's build a smarter organic visibility system. Start with a free discovery call and we'll show you where the opportunities are.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function SEOOrganicGrowth() {
  return <ServicePageLayout data={data} />;
}
