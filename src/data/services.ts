import { Palette, Fingerprint, Layout, Globe, Smartphone, Bot, BarChart3, Search } from "lucide-react";

export const services = [
  // Design
  { title: "Creatives", description: "Scroll-stopping ads, visuals, and brand assets designed to convert.", icon: Palette, category: "Design" },
  { title: "Branding", description: "Visual identity, messaging, and brand systems built for scale.", icon: Fingerprint, category: "Design" },
  { title: "UI/UX", description: "User-centric interfaces and experiences that delight and retain.", icon: Layout, category: "Design" },
  // Development
  { title: "Website", description: "High-converting websites and landing pages, launched in weeks.", icon: Globe, category: "Development" },
  { title: "Apps", description: "Web and mobile apps engineered for speed and scalability.", icon: Smartphone, category: "Development" },
  { title: "AI Agent", description: "Custom AI agents and automations that work while you sleep.", icon: Bot, category: "Development", isNew: true },
  // Marketing
  { title: "Paid Ads", description: "Data-driven paid media across every major platform, optimized daily.", icon: BarChart3, category: "Marketing" },
  { title: "SEO & Content", description: "Organic growth through search, content strategy, and authority building.", icon: Search, category: "Marketing" },
];

export const serviceCategories = ["Design", "Development", "Marketing"] as const;
export type ServiceCategory = typeof serviceCategories[number];
