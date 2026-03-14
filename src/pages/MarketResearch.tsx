import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Search, TrendingUp, Users, BarChart3, Map, Target, Compass, Layers,
  Shield, Sparkles, Lightbulb, AlertTriangle, HelpCircle, Shuffle, Eye,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "Market Research & Growth Strategy",
    headline: "Find the real opportunities before you",
    highlightedText: "invest in execution.",
    description: "Before you spend on branding, websites, ads, or content, you need clarity. We help travel businesses uncover market gaps, validate demand, understand their audience, and build a growth strategy grounded in evidence—not assumptions.",
    trustLine: "Built for travel brands that want to grow with confidence, not guesswork.",
  },
  problem: {
    headline: "Effort without insight leads to",
    highlightedText: "wasted momentum.",
    paragraph: "We help you identify what's working, what's missing, where competitors are winning, and where your next best opportunity actually is.",
    painPoints: [
      { icon: Shuffle, text: "Unclear positioning in a crowded travel market" },
      { icon: AlertTriangle, text: "Weak or generic offers that don't convert" },
      { icon: Eye, text: "Marketing decisions based on guesswork" },
      { icon: HelpCircle, text: "Poor channel focus and scattered execution" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro: "A structured research and strategy engagement designed to give your travel business clarity, direction, and a confident path forward.",
    items: [
      { title: "Market Landscape Analysis", desc: "Map the competitive environment, trends, and whitespace in your travel segment.", icon: Search },
      { title: "Competitor Positioning Review", desc: "Understand how competitors position, price, and communicate — and where you can win.", icon: Target },
      { title: "Customer & Traveler Insights", desc: "Clarify who your ideal traveler is, what they care about, and what drives their decisions.", icon: Users },
      { title: "Offer Validation & Mapping", desc: "Assess your current offers against market demand and identify improvement opportunities.", icon: Layers },
      { title: "Messaging & Positioning Direction", desc: "Define the strategic messaging direction that makes your brand easier to understand and choose.", icon: Compass },
      { title: "Channel & Growth Assessment", desc: "Identify the highest-impact channels and tactics for your business stage and goals.", icon: BarChart3 },
      { title: "Strategic Recommendations", desc: "Receive clear, prioritized recommendations with a roadmap for execution.", icon: Map },
      { title: "Opportunity Identification", desc: "Discover overlooked gaps and positioning angles that competitors haven't claimed.", icon: Lightbulb },
    ],
  },
  process: {
    heading: "How we uncover the right strategy for your travel business",
    steps: [
      { number: "01", title: "Discover", desc: "Discovery and business context review to understand your goals, market, and current state." },
      { number: "02", title: "Analyse", desc: "Market, competitor, and audience research to identify patterns and opportunities." },
      { number: "03", title: "Map", desc: "Opportunity mapping and strategic direction to define where your business should focus." },
      { number: "04", title: "Recommend", desc: "Prioritized roadmap and actionable next steps for confident execution." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "Every research and strategy engagement delivers structured insights and a clear direction you can act on immediately.",
    groups: [
      { label: "Research", items: ["Research summary", "Market landscape overview", "Competitor benchmark", "Audience insights"] },
      { label: "Strategy", items: ["Positioning insights", "Opportunity map", "Channel assessment", "Growth direction"] },
      { label: "Execution", items: ["Strategic recommendations deck", "30–90 day growth direction", "Prioritized action roadmap", "Messaging direction"] },
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
    heading: "Built for travel businesses that need clarity before committing to execution",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & travel agencies", "Hospitality groups"],
    supportingLine: "Ideal for brands preparing to invest in branding, websites, marketing, or entering a new market segment.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most agencies skip the research and jump straight to execution. We start with evidence because building on assumptions is the most expensive mistake a travel brand can make.",
    points: [
      { title: "Research-first approach", desc: "We don't guess — we validate opportunities before recommending execution." },
      { title: "Travel-specific expertise", desc: "We understand travel demand cycles, booking psychology, and destination marketing." },
      { title: "Strategy connected to execution", desc: "Our research directly informs branding, websites, campaigns, and content." },
      { title: "One integrated partner", desc: "From insight to execution, everything connects — no handoff gaps." },
    ],
  },
  faq: {
    items: [
      { q: "Is this just a market report?", a: "No. This is a strategic engagement that delivers research, positioning insights, and an actionable growth roadmap — not just data." },
      { q: "How long does the research phase take?", a: "Typically 2–4 weeks depending on scope, complexity, and the depth of competitive analysis required." },
      { q: "Can this work alongside an existing agency or team?", a: "Yes. We can complement your existing partners by providing the strategic foundation they can execute against." },
      { q: "Do we need this before building a website?", a: "In most cases, yes. A clear strategy ensures your website, messaging, and marketing efforts are aligned from day one." },
      { q: "What if we already know our audience?", a: "Even experienced teams benefit from validating assumptions. We often uncover positioning gaps and opportunities that internal teams miss." },
    ],
  },
  cta: {
    headline: "Need clarity before you build or market?",
    subtext: "Let's identify the right opportunity first. Start with a free discovery call and we'll help you understand where the real growth potential is.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function MarketResearch() {
  return <ServicePageLayout data={data} />;
}
