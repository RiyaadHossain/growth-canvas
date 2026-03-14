import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Map, Target, TrendingUp, Layers, Compass, BarChart3, Shuffle,
  AlertTriangle, Eye, HelpCircle, Shield, Sparkles, Zap, Focus,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "Growth Strategy",
    headline: "Turn insight into a focused path for",
    highlightedText: "sustainable growth.",
    description:
      "Growth is rarely about doing more — it's about doing the right things in the right order. We help travel businesses build a clear, actionable roadmap from where they are today to a stronger, more scalable growth model.",
    trustLine: "Built for travel brands that want structured, intentional growth.",
  },
  problem: {
    headline: "Without a real strategy, execution becomes",
    highlightedText: "scattered.",
    paragraph:
      "Teams chase channels, campaigns, and ideas without a clear priority system. We help bring structure to what matters most so growth becomes more intentional and measurable.",
    painPoints: [
      { icon: Shuffle, text: "Scattered marketing execution across too many fronts" },
      { icon: AlertTriangle, text: "Too many channels, not enough focus" },
      { icon: Eye, text: "Weak prioritization leading to wasted effort" },
      { icon: HelpCircle, text: "Difficulty deciding what to do next" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro:
      "A structured growth strategy engagement that gives your travel business clarity, focus, and an actionable path forward.",
    items: [
      { title: "Growth Opportunity Prioritization", desc: "Identify and rank the highest-impact opportunities for your business stage.", icon: Target },
      { title: "Positioning & Offer Direction", desc: "Clarify your positioning and refine offers to better resonate with your audience.", icon: Compass },
      { title: "Channel & Acquisition Strategy", desc: "Determine the most effective channels and acquisition tactics for sustainable growth.", icon: BarChart3 },
      { title: "Funnel & Conversion Strategy", desc: "Map and optimize your funnel to improve conversion at every stage.", icon: Layers },
      { title: "Messaging Alignment", desc: "Ensure consistent, compelling messaging across all touchpoints.", icon: Sparkles },
      { title: "Execution Sequencing", desc: "Define the right order of initiatives so nothing is wasted.", icon: Zap },
      { title: "30–90 Day Growth Roadmap", desc: "A clear, actionable plan with prioritized next steps for immediate momentum.", icon: Map },
    ],
  },
  process: {
    eyebrow: "Our Process",
    heading: "How we build your growth roadmap",
    steps: [
      { number: "01", title: "Audit", desc: "Current-state audit to understand where you stand today." },
      { number: "02", title: "Map", desc: "Opportunity and bottleneck mapping to find the biggest levers." },
      { number: "03", title: "Prioritize", desc: "Priority definition and channel & funnel strategy." },
      { number: "04", title: "Roadmap", desc: "Execution direction with a clear 30–90 day roadmap." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph:
      "Every growth strategy engagement delivers a structured plan you can act on immediately.",
    groups: [
      { label: "Strategy", items: ["Strategic growth plan", "Prioritized initiatives", "Channel direction", "Funnel recommendations"] },
      { label: "Execution", items: ["30–90 day roadmap", "Execution sequencing", "Messaging alignment", "Priority framework"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Better Focus", desc: "Align your team around the initiatives that actually move the needle.", icon: Target },
      { title: "Faster Decisions", desc: "Stop debating what to do next — the roadmap makes it clear.", icon: Zap },
      { title: "Aligned Execution", desc: "Every channel, campaign, and effort works toward the same goals.", icon: Shield },
      { title: "Stronger Momentum", desc: "Less wasted effort, more compounding progress over time.", icon: TrendingUp },
    ],
  },
  audience: {
    heading: "Built for travel businesses ready to grow with intention",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & travel agencies", "Hospitality groups"],
    supportingLine: "Ideal for brands that have traction but need a structured plan to scale.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph:
      "Most agencies jump to tactics. We start with strategy because execution without direction is the fastest way to burn budget.",
    points: [
      { title: "Strategy-first approach", desc: "We don't guess — we prioritize based on evidence and business context." },
      { title: "Travel-specific expertise", desc: "We understand seasonality, booking cycles, and travel buyer psychology." },
      { title: "Strategy connected to execution", desc: "Our roadmaps directly inform campaigns, content, and product decisions." },
      { title: "One integrated partner", desc: "From strategy to execution, everything connects — no handoff gaps." },
    ],
  },
  faq: {
    items: [
      { q: "How is this different from market research?", a: "Market research uncovers insights. Growth strategy turns those insights into a prioritized, actionable plan for execution." },
      { q: "How long does the strategy engagement take?", a: "Typically 2–3 weeks depending on scope and business complexity." },
      { q: "Do we need market research first?", a: "Not always. If you already have solid market understanding, we can build strategy from your existing insights." },
      { q: "Can this work alongside an existing team?", a: "Yes. We can complement your internal team by providing strategic direction they can execute against." },
      { q: "What if our priorities change?", a: "The roadmap is designed to be flexible. We build in decision points so you can adapt as conditions evolve." },
    ],
  },
  cta: {
    headline: "Need a clearer path to growth?",
    subtext: "Let's build a smarter roadmap. Start with a free discovery call and we'll help you focus on what matters most.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function GrowthStrategy() {
  return <ServicePageLayout data={data} />;
}
