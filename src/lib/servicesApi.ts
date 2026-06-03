import { useQuery } from "@tanstack/react-query";
import { icons, HelpCircle, type LucideIcon } from "lucide-react";
import { services as fallbackServices, serviceCategories } from "@/data/services";

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

export async function fetchServices(): Promise<ServiceItem[]> {
  const res = await fetch(`${API_BASE}/services`);
  if (!res.ok) throw new Error("Failed to fetch services");
  const json: ApiEnvelope<ApiService[]> = await res.json();
  const items = json.data || [];
  return items
    .slice()
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0))
    .map((s) => ({
      title: s.title,
      description: s.description,
      icon: resolveIcon(s.icon),
      category: s.category,
      slug: s.slug,
      displayOrder: s.displayOrder,
      comingSoon: s.comingSoon,
    }));
}

export function useServices() {
  const query = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
    staleTime: 5 * 60 * 1000,
  });

  const services: ServiceItem[] = query.data && query.data.length > 0 ? query.data : fallbackServices;

  const categories = Array.from(
    new Set([...serviceCategories, ...services.map((s) => s.category)]),
  );

  return { services, categories, isLoading: query.isLoading, error: query.error };
}
