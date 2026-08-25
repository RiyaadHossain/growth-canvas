import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Search, TrendingUp, Users, BarChart3, Map, Target, Compass, Layers,
  Shield, Sparkles, Lightbulb, AlertTriangle, HelpCircle, Shuffle, Eye, Zap,
} from "lucide-react";

export const data: ServicePageData = {
  hero: {
    eyebrow: "Market Research & Growth Strategy",
    headline: "Find the real opportunities, then build a clear path to",
    highlightedText: "scalable growth.",
    description:
      "Before you invest in branding, websites, ads, or content, you need clarity — and a plan. We help travel businesses uncover market gaps, validate demand, understand their audience, and turn those insights into a prioritized, actionable growth roadmap.",
    trustLine: "Built for travel brands that want to grow with confidence, not guesswork.",
  },
  problem: {
    headline: "Effort without insight leads to",
    highlightedText: "scattered momentum.",
    paragraph:
      "Teams chase channels, campaigns, and ideas without knowing what actually works. We help you identify real opportunities, set priorities, and build a growth strategy grounded in evidence — not assumptions.",
    painPoints: [
      { icon: Shuffle, text: "Unclear positioning in a crowded travel market" },
      { icon: AlertTriangle, text: "Too many channels, not enough focus" },
      { icon: Eye, text: "Marketing decisions based on guesswork instead of data" },
      { icon: HelpCircle, text: "Difficulty deciding what to do next or where to invest" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro:
      "A structured research and strategy engagement that gives your travel business clarity, direction, and an actionable growth roadmap.",
    items: [
      { title: "Market Landscape Analysis", desc: "Map the competitive environment, trends, and whitespace in your travel segment.", icon: Search },
      { title: "Competitor Positioning Review", desc: "Understand how competitors position, price, and communicate — and where you can win.", icon: Target },
      { title: "Customer & Traveler Insights", desc: "Clarify who your ideal traveler is, what they care about, and what drives their decisions.", icon: Users },
      { title: "Offer Validation & Mapping", desc: "Assess your current offers against market demand and identify improvement opportunities.", icon: Layers },
      { title: "Messaging & Positioning Direction", desc: "Define the strategic messaging direction that makes your brand easier to understand and choose.", icon: Compass },
      { title: "Channel & Acquisition Strategy", desc: "Determine the most effective channels and acquisition tactics for sustainable growth.", icon: BarChart3 },
      { title: "Funnel & Conversion Strategy", desc: "Map and optimize your funnel to improve conversion at every stage.", icon: TrendingUp },
      { title: "Opportunity Identification", desc: "Discover overlooked gaps and positioning angles that competitors haven't claimed.", icon: Lightbulb },
      { title: "30–90 Day Growth Roadmap", desc: "A clear, actionable plan with prioritized next steps for immediate momentum.", icon: Map },
      { title: "Execution Sequencing", desc: "Define the right order of initiatives so nothing is wasted.", icon: Zap },
    ],
  },
  process: {
    heading: "How we uncover opportunities and build your growth roadmap",
    steps: [
      { number: "01", title: "Discover", desc: "Discovery and business context review to understand your goals, market, and current state." },
      { number: "02", title: "Analyse", desc: "Market, competitor, and audience research to identify patterns, gaps, and opportunities." },
      { number: "03", title: "Strategize", desc: "Opportunity mapping, priority definition, and channel & funnel strategy." },
      { number: "04", title: "Roadmap", desc: "Prioritized execution roadmap with clear 30–90 day action steps." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph:
      "Every engagement delivers structured insights, strategic direction, and a clear plan you can act on immediately.",
    groups: [
      { label: "Research", items: ["Research summary", "Market landscape overview", "Competitor benchmark", "Audience insights"] },
      { label: "Strategy", items: ["Positioning direction", "Opportunity map", "Channel & acquisition strategy", "Funnel recommendations"] },
      { label: "Execution", items: ["Strategic recommendations deck", "30–90 day growth roadmap", "Execution sequencing", "Priority framework"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Market Clarity", desc: "Understand where you stand, where competitors win, and where your opportunity is.", icon: Search },
      { title: "Confident Direction", desc: "Make branding, marketing, and product decisions backed by real evidence.", icon: Shield },
      { title: "Smarter Investment", desc: "Stop guessing where to spend and start investing in what actually works.", icon: TrendingUp },
      { title: "Growth Readiness", desc: "Enter your next phase with a clear, actionable strategy designed for your market.", icon: Sparkles },
    ],
  },
  audience: {
    heading: "Built for travel businesses that need clarity and a plan before committing to execution",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & travel agencies", "Hospitality groups"],
    supportingLine: "Ideal for brands preparing to invest in branding, websites, marketing, or entering a new market — and those with traction who need a structured plan to scale.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph:
      "Most agencies skip the research and jump straight to tactics. We start with evidence and strategy because building on assumptions is the most expensive mistake a travel brand can make.",
    points: [
      { title: "Research-first approach", desc: "We don't guess — we validate opportunities before recommending execution." },
      { title: "Travel-specific expertise", desc: "We understand travel demand cycles, booking psychology, seasonality, and destination marketing." },
      { title: "Strategy connected to execution", desc: "Our research and roadmaps directly inform branding, websites, campaigns, and content." },
      { title: "One integrated partner", desc: "From insight to strategy to execution, everything connects — no handoff gaps." },
    ],
  },
  faq: {
    items: [
      { q: "Is this just a market report?", a: "No. This is a strategic engagement that combines deep research with a prioritized, actionable growth roadmap — not just data." },
      { q: "How long does this engagement take?", a: "Typically 3–5 weeks depending on scope, complexity, and the depth of research and strategy required." },
      { q: "Can this work alongside an existing agency or team?", a: "Yes. We can complement your existing partners by providing the strategic foundation they can execute against." },
      { q: "Do we need this before building a website?", a: "In most cases, yes. A clear strategy ensures your website, messaging, and marketing efforts are aligned from day one." },
      { q: "What if we already know our audience?", a: "Even experienced teams benefit from validating assumptions. We often uncover positioning gaps and opportunities that internal teams miss." },
      { q: "What if our priorities change?", a: "The roadmap is designed to be flexible. We build in decision points so you can adapt as conditions evolve." },
    ],
  },
  cta: {
    headline: "Need clarity and a growth plan before you build or market?",
    subtext: "Let's identify the right opportunity and build a smarter roadmap. Start with a free discovery call.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function MarketResearchGrowthStrategy() {
  return <ServicePageLayout data={data} />;
}
