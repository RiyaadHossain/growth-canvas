import { useQuery } from "@tanstack/react-query";
import { icons, HelpCircle, type LucideIcon } from "lucide-react";
import { services as fallbackServices, serviceCategories } from "@/data/services";
import type { ServicePageData } from "@/components/services/ServicePageLayout";

const API_BASE = "https://tripup-backend.onrender.com/api/v1";

export interface ApiService {
  title: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  displayOrder?: number;
  comingSoon?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  slug: string;
  displayOrder?: number;
  comingSoon?: boolean;
}

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

const resolveIcon = (name: string): LucideIcon => {
  const Icon = (icons as Record<string, LucideIcon>)[name];
  return Icon || HelpCircle;
};

const normalizeSlug = (slug: string): string => {
  if (!slug) return slug;
  if (slug.startsWith("/")) return slug;
  return `/services/${slug}`;
};

const mapAndSort = (items: ApiService[]): ServiceItem[] =>
  items
    .slice()
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0))
    .map((s) => ({
      title: s.title,
      description: s.description,
      icon: resolveIcon(s.icon),
      category: s.category,
      slug: normalizeSlug(s.slug),
      displayOrder: s.displayOrder,
      comingSoon: s.comingSoon,
    }));

export async function fetchServices(): Promise<ServiceItem[]> {
  const res = await fetch(`${API_BASE}/travel-services`);
  if (!res.ok) throw new Error("Failed to fetch services");
  const json: ApiEnvelope<ApiService[]> = await res.json();
  return mapAndSort(json.data || []);
}

export async function fetchNavServices(): Promise<ServiceItem[]> {
  const res = await fetch(`${API_BASE}/travel-services/nav-items`);
  if (!res.ok) throw new Error("Failed to fetch nav services");
  const json: ApiEnvelope<ApiService[]> = await res.json();
  return mapAndSort(json.data || []);
}

export function useServices() {
  const query = useQuery({
    queryKey: ["travel-services"],
    queryFn: fetchServices,
    staleTime: 5 * 60 * 1000,
  });

  const services: ServiceItem[] =
    query.data && query.data.length > 0 ? query.data : fallbackServices;

  const categories = Array.from(
    new Set([...serviceCategories, ...services.map((s) => s.category)]),
  );

  return { services, categories, isLoading: query.isLoading, error: query.error };
}

export function useNavServices() {
  const query = useQuery({
    queryKey: ["travel-services", "nav-items"],
    queryFn: fetchNavServices,
    staleTime: 5 * 60 * 1000,
  });

  const services: ServiceItem[] =
    query.data && query.data.length > 0 ? query.data : fallbackServices;

  const categories = Array.from(
    new Set([...serviceCategories, ...services.map((s) => s.category)]),
  );

  return { services, categories, isLoading: query.isLoading, error: query.error };
}

/* ─── SERVICE DETAIL ─── */

interface ApiIconItem {
  icon: string;
  title?: string;
  desc?: string;
  text?: string;
}

interface ApiServiceDetail {
  slug: string;
  title: string;
  hero: ServicePageData["hero"];
  problem: Omit<ServicePageData["problem"], "painPoints"> & {
    painPoints: ApiIconItem[];
  };
  capabilities: Omit<ServicePageData["capabilities"], "items"> & {
    items: ApiIconItem[];
  };
  process: ServicePageData["process"];
  deliverables: ServicePageData["deliverables"];
  outcomes: Omit<ServicePageData["outcomes"], "items"> & {
    items: ApiIconItem[];
  };
  audience: ServicePageData["audience"];
  whyUs: ServicePageData["whyUs"];
  faq: ServicePageData["faq"];
  cta: ServicePageData["cta"];
}

const mapDetail = (d: ApiServiceDetail): ServicePageData => ({
  hero: d.hero,
  problem: {
    ...d.problem,
    painPoints: (d.problem?.painPoints || []).map((p) => ({
      icon: resolveIcon(p.icon),
      text: p.text || "",
    })),
  },
  capabilities: {
    ...d.capabilities,
    items: (d.capabilities?.items || []).map((i) => ({
      title: i.title || "",
      desc: i.desc || "",
      icon: resolveIcon(i.icon),
    })),
  },
  process: d.process,
  deliverables: d.deliverables,
  outcomes: {
    ...d.outcomes,
    items: (d.outcomes?.items || []).map((i) => ({
      title: i.title || "",
      desc: i.desc || "",
      icon: resolveIcon(i.icon),
    })),
  },
  audience: d.audience,
  whyUs: d.whyUs,
  faq: d.faq,
  cta: d.cta,
});

export async function fetchServiceBySlug(slug: string): Promise<ServicePageData | null> {
  const res = await fetch(`${API_BASE}/travel-services`);
  if (!res.ok) throw new Error("Failed to fetch services");
  const json: ApiEnvelope<ApiServiceDetail[]> = await res.json();
  const match = (json.data || []).find((s) => s.slug === slug);
  return match ? mapDetail(match) : null;
}

export function useServiceDetail(slug: string | undefined) {
  return useQuery({
    queryKey: ["travel-services", "detail", slug],
    queryFn: () => fetchServiceBySlug(slug as string),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}
