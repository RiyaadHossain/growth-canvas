import { Search, Fingerprint, Smartphone, Bot, BarChart3, Megaphone, Video } from "lucide-react";

export const services = [
  // Research & Strategy
  { title: "Growth Strategy & Consulting", description: "Market insight, competitive analysis, and hands-on consulting that turn clarity into a prioritised growth roadmap.", icon: Search, category: "Research & Strategy", slug: "/services/market-research-growth-strategy" },
  // Brand & Product
  { title: "Brand & Positioning", description: "Positioning, messaging, and identity systems that make your travel brand easier to understand, trust, and choose.", icon: Fingerprint, category: "Brand & Product", slug: "/services/branding-identity" },
  { title: "Website & Landing Pages", description: "Conversion-focused websites and campaign landing pages built for travel operators, platforms, and experiences.", icon: Smartphone, category: "Brand & Product", slug: "/services/web-design-development" },
  { title: "AI & Workflow Automation", description: "Custom AI agents and workflow automations that remove manual work and personalise the traveler journey at scale.", icon: Bot, category: "Brand & Product", comingSoon: true, slug: "/services/ai-automation" },
  // Marketing & Growth
  { title: "Paid Advertising", description: "Data-driven ad campaigns across search, social, and travel platforms — optimised for bookings and ROI.", icon: BarChart3, category: "Marketing & Growth", slug: "/services/performance-marketing" },
  { title: "SEO & Content Marketing", description: "Organic reach through destination content, SEO strategy, and authority-building that compounds over time.", icon: Megaphone, category: "Marketing & Growth", slug: "/services/content-seo" },
  { title: "Video & Creative Production", description: "Video, photo, and ad creative that show your experiences at their best and earn attention across every channel.", icon: Video, category: "Marketing & Growth", slug: "/services/social-media" },
];

export const serviceCategories = ["Research & Strategy", "Brand & Product", "Marketing & Growth"] as const;
export type ServiceCategory = typeof serviceCategories[number];
