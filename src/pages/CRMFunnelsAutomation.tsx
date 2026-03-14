import ServicePageLayout from "@/components/services/ServicePageLayout";
import type { ServicePageData } from "@/components/services/ServicePageLayout";
import {
  GitBranch, Mail, Users, BarChart3, Workflow, Zap, Filter, RefreshCw,
  Shield, TrendingUp, Sparkles, AlertTriangle, HelpCircle, Shuffle, Eye,
} from "lucide-react";

const data: ServicePageData = {
  hero: {
    eyebrow: "CRM, Funnels & Automation for Travel Businesses",
    headline: "Turn scattered lead flow into a structured",
    highlightedText: "growth system.",
    description: "Generating interest is only part of the equation. If follow-up is slow, lead journeys are unclear, or systems are disconnected, growth stalls. We help travel businesses build cleaner funnels, smarter automation, and better lead handling across the customer journey.",
    trustLine: "Built for travel brands that need operational clarity between marketing and conversion.",
  },
  problem: {
    headline: "Many travel businesses lose revenue after the click. Not because demand is weak — but because",
    highlightedText: "systems are fragmented.",
    paragraph: "We create operational clarity between marketing, lead capture, nurturing, and conversion.",
    painPoints: [
      { icon: Shuffle, text: "Leads falling through the cracks" },
      { icon: AlertTriangle, text: "Slow or inconsistent follow-up" },
      { icon: Eye, text: "Disconnected tools and workflows" },
      { icon: HelpCircle, text: "Poor visibility into funnel performance" },
    ],
  },
  capabilities: {
    heading: "What's included",
    intro: "A structured approach to funnels, automation, and lead management designed to turn interest into reliable revenue.",
    items: [
      { title: "Funnel Journey Mapping", desc: "Map the complete lead journey from first touch to conversion.", icon: GitBranch },
      { title: "Lead Capture Flow Strategy", desc: "Design capture points that align with your audience's decision-making process.", icon: Filter },
      { title: "CRM Structure Recommendations", desc: "Organize your CRM so leads are properly segmented, scored, and managed.", icon: Users },
      { title: "Automation Logic Planning", desc: "Build smart automation sequences that nurture leads without losing the human touch.", icon: Workflow },
      { title: "Email & Nurture Flow Direction", desc: "Create email sequences that build trust and guide leads toward action.", icon: Mail },
      { title: "Conversion Bottleneck Identification", desc: "Find and fix the points where leads drop off or stall.", icon: BarChart3 },
      { title: "Follow-Up System Design", desc: "Build reliable follow-up processes that ensure no opportunity is missed.", icon: Zap },
      { title: "Lifecycle Optimization", desc: "Improve the full customer lifecycle from lead to repeat traveler.", icon: RefreshCw },
    ],
  },
  process: {
    heading: "How we build systems that turn leads into revenue",
    steps: [
      { number: "01", title: "Audit", desc: "Funnel and workflow audit to understand your current lead handling and conversion path." },
      { number: "02", title: "Map", desc: "Journey and conversion mapping to identify gaps, bottlenecks, and opportunities." },
      { number: "03", title: "Structure", desc: "CRM, automation, and nurture planning to create a connected system." },
      { number: "04", title: "Optimize", desc: "System recommendations and optimization priorities for sustained improvement." },
    ],
  },
  deliverables: {
    heading: "What you get",
    paragraph: "A complete funnel and automation framework designed to create reliable, repeatable conversion paths.",
    groups: [
      { label: "Funnels", items: ["Funnel map", "Lead journey structure", "Conversion flow design", "Capture point strategy"] },
      { label: "CRM", items: ["CRM workflow recommendations", "Lead segmentation plan", "Pipeline structure", "Data hygiene guidance"] },
      { label: "Automation", items: ["Automation flow outline", "Nurture sequence direction", "Follow-up system design", "Trigger logic planning"] },
      { label: "Optimization", items: ["Funnel optimization roadmap", "Performance tracking setup", "Bottleneck analysis", "Lifecycle improvement plan"] },
    ],
  },
  outcomes: {
    heading: "What this unlocks for your travel business",
    items: [
      { title: "Reliable Pipeline", desc: "A structured system that captures, nurtures, and converts leads consistently.", icon: GitBranch },
      { title: "Faster Follow-Up", desc: "Automation that ensures timely, relevant communication at every stage.", icon: TrendingUp },
      { title: "Better Visibility", desc: "Clear reporting on funnel performance, bottlenecks, and conversion rates.", icon: Shield },
      { title: "Scalable Operations", desc: "Systems that grow with your business without adding manual overhead.", icon: Sparkles },
    ],
  },
  audience: {
    heading: "Built for travel businesses that need a cleaner system after the click",
    tags: ["Hotels & resorts", "Tour operators", "Travel startups", "Destination brands", "DMCs & agencies", "Experience-led hospitality"],
    supportingLine: "Ideal for brands generating leads but struggling with conversion, follow-up, or operational consistency.",
  },
  whyUs: {
    heading: "Why TripUp Studio",
    paragraph: "Most automation providers focus on tools. We focus on the journey — connecting your marketing, lead handling, and follow-up into one system designed for conversion.",
    points: [
      { title: "Journey-first thinking", desc: "We design systems around the traveler's decision process, not just tool features." },
      { title: "Built for travel", desc: "We understand travel booking timelines, seasonal demand, and multi-touch decision journeys." },
      { title: "Connected to marketing", desc: "Funnels and automation are designed to work with your campaigns, website, and content." },
      { title: "Practical and actionable", desc: "We deliver systems you can implement and manage, not theoretical frameworks." },
    ],
  },
  faq: {
    items: [
      { q: "Which CRM platforms do you work with?", a: "We're platform-agnostic and can work with HubSpot, ActiveCampaign, Salesforce, or whatever tools fit your business best." },
      { q: "Do you set up the automation or just plan it?", a: "We provide the strategic framework and can support implementation, or work with your team to execute the setup." },
      { q: "Is this relevant for small travel businesses?", a: "Yes. Even small businesses benefit from structured lead handling and basic automation — it doesn't have to be complex to be effective." },
      { q: "Can you integrate with our booking system?", a: "We can design the workflow and integration logic. For technical implementation, we work with your development team or partners." },
      { q: "How long does a typical engagement take?", a: "Most funnel and CRM strategy engagements take 3–6 weeks, depending on complexity and the number of systems involved." },
    ],
  },
  cta: {
    headline: "Need a cleaner system after the click?",
    subtext: "Let's turn your lead flow into a more reliable growth engine. Start with a free discovery call and we'll help you see where the biggest improvements are.",
    ctaLabel: "Book a Free Discovery Call",
  },
};

export default function CRMFunnelsAutomation() {
  return <ServicePageLayout data={data} />;
}
