import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  Bot, Workflow, Zap, Search, Users, RefreshCw, MessageSquare, Settings,
  Shield, TrendingUp, Sparkles, AlertTriangle, HelpCircle, Shuffle, Eye, Clock,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "AI & Automation for Travel Businesses",
    headline: "Streamline operations and personalise at scale with",
    highlightedText: "custom AI systems.",
    description: "Travel businesses often lose momentum in repetitive tasks, disconnected workflows, slow response times, and manual operational bottlenecks. We help brands identify where AI and automation can create leverage — from custom AI agents and internal process automation to smarter customer journeys and scalable personalization systems.",
    trustLine: "Built for travel brands ready to operate smarter and scale without adding overhead.",
  },
  problem: {
    headline: "Systemize the work that slows you down —",
    highlightedText: "let AI handle the rest.",
    paragraph: "Most travel businesses know they need smarter systems. The challenge is identifying where AI and automation create real leverage — not just adding tools, but designing workflows that genuinely reduce effort and improve outcomes.",
    painPoints: [
      { icon: Shuffle, text: "Repetitive manual tasks slowing down the team" },
      { icon: Clock, text: "Slow response times and inconsistent follow-up" },
      { icon: AlertTriangle, text: "Disconnected tools and fragmented workflows" },
      { icon: TrendingUp, text: "High operational overhead as the business grows" },
      { icon: Eye, text: "Personalization that doesn't scale" },
      { icon: HelpCircle, text: "Missed opportunities to use AI where it creates real leverage" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro: "A structured approach to identifying, designing, and implementing AI and automation systems that create measurable operational leverage.",
    items: [
      { title: "Workflow & Operations Audit", desc: "Assess current workflows to identify friction, redundancy, and automation-ready processes.", icon: Search },
      { title: "Automation Opportunity Mapping", desc: "Map the highest-impact areas where automation will save time and improve consistency.", icon: Workflow },
      { title: "Custom AI Use-Case Discovery", desc: "Identify where AI agents and intelligent systems can solve real business problems.", icon: Bot },
      { title: "AI Agent Strategy", desc: "Design AI agent direction for support, internal operations, or customer-facing experiences.", icon: Sparkles },
      { title: "Internal Process Automation", desc: "Plan automation for internal workflows — from team operations to reporting and handoffs.", icon: Settings },
      { title: "Lead & Response Automation", desc: "Build faster lead handling and follow-up systems that respond in real time.", icon: Zap },
      { title: "Journey Personalization", desc: "Design personalization systems that adapt the customer experience at scale.", icon: Users },
      { title: "CRM & Communication Workflows", desc: "Automate CRM, support, and communication workflows to reduce manual overhead.", icon: MessageSquare },
    ],
  },
  process: {
    heading: "How we design AI and automation systems that scale",
    steps: [
      { number: "01", title: "Discover", desc: "Business workflow discovery and operational bottleneck identification." },
      { number: "02", title: "Map", desc: "AI and automation opportunity mapping with priority use-case definition." },
      { number: "03", title: "Design", desc: "System and tool recommendations with logic design and implementation direction." },
      { number: "04", title: "Scale", desc: "Optimization for efficiency, scalability, and long-term operational improvement." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "A complete AI and automation framework with clear priorities, system recommendations, and an implementation roadmap.",
    groups: [
      { label: "Audit", items: ["Workflow audit summary", "Operational bottleneck analysis", "Current systems assessment", "Efficiency baseline"] },
      { label: "Strategy", items: ["AI & automation opportunities map", "Priority use-case recommendations", "Custom AI system direction", "Tool stack recommendations"] },
      { label: "Design", items: ["Automation logic and process flows", "AI agent design direction", "Personalization system planning", "Integration recommendations"] },
      { label: "Roadmap", items: ["Systems improvement roadmap", "Implementation priority plan", "Scalability recommendations", "Optimization milestones"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Faster Execution", desc: "Reduce manual workload and accelerate internal operations across the business.", icon: Zap },
      { title: "Consistent Workflows", desc: "Build reliable, automated processes that run the same way every time.", icon: RefreshCw },
      { title: "Scalable Personalization", desc: "Deliver personalized experiences across the customer journey without manual effort.", icon: Users },
      { title: "Operational Leverage", desc: "Stronger systems that grow with your business and reduce overhead at scale.", icon: Sparkles },
    ],
  },
  audience: {
    heading: "Built for travel businesses ready to operate smarter",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & agencies", "Experience-led hospitality"],
    supportingLine: "Ideal for brands looking to reduce manual overhead, automate key workflows, and use AI where it creates real impact.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most providers focus on tools. We focus on outcomes — connecting AI and automation to the operational challenges that actually slow growth down.",
    points: [
      { title: "Outcome-driven approach", desc: "We design systems around business impact, not just tool features or technical novelty." },
      { title: "Built for travel", desc: "We understand travel operations, seasonal demand, booking workflows, and multi-touchpoint journeys." },
      { title: "AI with purpose", desc: "We identify where AI creates real leverage — not where it sounds impressive but adds complexity." },
      { title: "Practical and actionable", desc: "We deliver systems you can implement and manage, not theoretical frameworks." },
    ],
  },
  faq: {
    items: [
      { q: "What kind of AI systems do you build?", a: "We design custom AI agents for support, operations, and customer experiences — as well as intelligent automation workflows that reduce manual effort across the business." },
      { q: "Do you implement the automation or just plan it?", a: "We provide the strategic framework, system design, and implementation direction. We can support execution directly or work with your team and development partners." },
      { q: "Is this relevant for small travel businesses?", a: "Yes. Even small teams benefit from targeted automation and smart AI use cases — it doesn't need to be complex to create meaningful operational improvement." },
      { q: "Which tools and platforms do you work with?", a: "We're platform-agnostic and recommend the best tools for your specific needs — whether that's CRM automation, AI agent platforms, workflow tools, or custom-built solutions." },
      { q: "How long does a typical engagement take?", a: "Most AI and automation strategy engagements take 4–8 weeks, depending on scope and the number of systems involved." },
    ],
  },
  cta: {
    headline: "Want your business to run smarter with AI and automation?",
    subtext: "Let's design systems that reduce friction and scale with you. Start with a free discovery call and we'll show you where the biggest opportunities are.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function CRMFunnelsAutomation() {
  return <ServicePageLayout data={data} />;
}
