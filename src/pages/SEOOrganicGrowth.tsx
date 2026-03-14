import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Search, TrendingUp, FileText, Globe, Layers, Target, BarChart3, Map,
  Shield, Sparkles, AlertTriangle, HelpCircle, Shuffle, Eye,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "SEO & Organic Growth for Travel Businesses",
    headline: "Build long-term visibility that",
    highlightedText: "compounds over time.",
    description: "Travel brands that win organically don't just publish more. They build search visibility around the right topics, the right pages, and the right user intent. We help you turn organic traffic into a sustainable growth channel.",
    trustLine: "Built for travel brands that want visibility without depending entirely on paid spend.",
  },
  problem: {
    headline: "Organic growth creates trust before the click. A strong SEO foundation helps travelers discover you earlier, compare you more confidently, and",
    highlightedText: "return when they're ready to act.",
    paragraph: "Most travel businesses either ignore SEO or approach it without a clear strategy tied to business outcomes.",
    painPoints: [
      { icon: Shuffle, text: "Low search visibility for important terms" },
      { icon: AlertTriangle, text: "Unclear content strategy without intent mapping" },
      { icon: Eye, text: "Ranking for the wrong keywords" },
      { icon: HelpCircle, text: "SEO efforts disconnected from business goals" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro: "A strategic SEO engagement designed to build sustainable organic visibility for your travel brand.",
    items: [
      { title: "SEO Opportunity Assessment", desc: "Audit your current visibility and identify the highest-impact opportunities.", icon: Search },
      { title: "Search Intent & Keyword Mapping", desc: "Map keywords to traveler intent so your content matches what people actually search for.", icon: Target },
      { title: "Site Structure Recommendations", desc: "Optimize your site architecture for search engines and user experience.", icon: Globe },
      { title: "Core Page SEO Strategy", desc: "Ensure your most important pages are optimized for the right terms and intent.", icon: FileText },
      { title: "Content Cluster Planning", desc: "Build topic clusters that establish authority and capture related search traffic.", icon: Layers },
      { title: "On-Page Optimization", desc: "Optimize titles, meta descriptions, headers, and content structure for better rankings.", icon: BarChart3 },
      { title: "Technical SEO Priorities", desc: "Identify and fix technical issues that impact crawlability, speed, and indexation.", icon: Map },
      { title: "Organic Growth Roadmap", desc: "A long-term plan for building and sustaining organic visibility.", icon: TrendingUp },
    ],
  },
  process: {
    heading: "How we build organic visibility that lasts",
    steps: [
      { number: "01", title: "Audit", desc: "Site and visibility review to understand your current organic performance." },
      { number: "02", title: "Map", desc: "Opportunity and intent mapping to identify the right keywords and topics." },
      { number: "03", title: "Prioritize", desc: "Page and content prioritization based on impact, competition, and intent." },
      { number: "04", title: "Plan", desc: "Structure and optimization recommendations with a long-term growth roadmap." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "A structured SEO strategy with clear priorities, content direction, and a roadmap for long-term organic growth.",
    groups: [
      { label: "Audit", items: ["SEO opportunity audit", "Technical SEO review", "Competitive visibility analysis", "Current performance baseline"] },
      { label: "Strategy", items: ["Keyword and intent map", "Page-level recommendations", "Content cluster direction", "Site structure guidance"] },
      { label: "Optimization", items: ["On-page optimization priorities", "Technical SEO fixes", "Internal linking strategy", "Metadata direction"] },
      { label: "Growth", items: ["Organic growth roadmap", "Content planning direction", "Performance tracking framework", "Quarterly priority plan"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Sustainable Visibility", desc: "Organic traffic that grows over time without increasing ad spend.", icon: Search },
      { title: "Higher-Intent Traffic", desc: "Attract travelers actively searching for what you offer.", icon: Target },
      { title: "Brand Authority", desc: "Become the trusted resource in your travel niche.", icon: Shield },
      { title: "Compounding Returns", desc: "SEO investments build on each other, creating long-term competitive advantage.", icon: Sparkles },
    ],
  },
  audience: {
    heading: "Built for travel businesses that want to own their organic presence",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & agencies", "Experience-led hospitality"],
    supportingLine: "Ideal for brands that want to reduce dependency on paid channels and build lasting organic visibility.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most SEO providers focus on rankings. We focus on business outcomes — connecting search visibility to the pages, content, and user experiences that actually drive growth.",
    points: [
      { title: "Intent-driven SEO", desc: "We optimize for traveler intent, not just keyword volume." },
      { title: "Travel-specific knowledge", desc: "We understand destination search behavior, seasonal patterns, and travel content strategy." },
      { title: "Connected to your brand", desc: "SEO strategy is aligned with your positioning, messaging, and content system." },
      { title: "Long-term focus", desc: "We build for compounding visibility, not quick-fix tactics." },
    ],
  },
  faq: {
    items: [
      { q: "How long does SEO take to show results?", a: "SEO is a long-term investment. Most travel brands start seeing meaningful improvement within 3–6 months, with compounding results over time." },
      { q: "Do you write the content too?", a: "We provide content strategy, topic direction, and optimization guidance. For full content creation, we work with your team or trusted content partners." },
      { q: "Is this a one-time engagement or ongoing?", a: "We offer both. A strategic foundation engagement gives you the roadmap, and ongoing support helps with execution and optimization." },
      { q: "Can you fix our existing SEO issues?", a: "Yes. Our audit identifies technical, structural, and content issues with clear priorities for fixing them." },
      { q: "Do you work with our existing CMS?", a: "Yes. We provide recommendations that can be implemented on any modern CMS or website platform." },
    ],
  },
  cta: {
    headline: "Want organic visibility that compounds?",
    subtext: "Let's build an SEO foundation that supports long-term growth. Start with a free discovery call and we'll show you where the opportunities are.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function SEOOrganicGrowth() {
  return <ServicePageLayout data={data} />;
}
