import type { ResourceItem } from "@/components/resources/ResourceCard";
import type {
  TravelInsightItem,
  TravelInsightBodySection,
  TravelInsightRelatedService,
} from "@/components/resources/TravelInsightDetailPage";

const API_BASE = "https://tripup-backend.onrender.com/api/v1";

export interface ApiListItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  timeReadMin: number;
  author: string;
  createdAt: string;
  isPublished: boolean;
  isFeatured: boolean;
  category: { id: string; name: string };
}

export interface ApiDetailItem extends ApiListItem {
  coverImgUrl?: string;
  content?: string;
  insights?: string[];
  takeAway?: string[];
  tags?: string[];
  updatedAt?: string;
  relatedServices?: Array<{
    id: string;
    title: string;
    slug: string;
    description: string;
    author?: string;
    createdAt?: string;
    timeReadMin?: number;
  }>;
}

export interface CategoryOption {
  label: string;
  value: string;
}

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

const formatDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  } catch {
    return "";
  }
};

export async function fetchTravelInsights(): Promise<ApiListItem[]> {
  const res = await fetch(`${API_BASE}/travel-insights`);
  if (!res.ok) throw new Error("Failed to fetch travel insights");
  const json: ApiEnvelope<ApiListItem[]> = await res.json();
  return (json.data || []).filter((i) => i.isPublished !== false);
}

export async function fetchTravelInsightCategories(): Promise<CategoryOption[]> {
  const res = await fetch(`${API_BASE}/admin/travel-insight-categories/listing`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  const json: ApiEnvelope<CategoryOption[]> = await res.json();
  return json.data || [];
}

export async function fetchTravelInsightById(id: string): Promise<ApiDetailItem> {
  const res = await fetch(`${API_BASE}/travel-insights/${id}`);
  if (!res.ok) throw new Error("Failed to fetch travel insight");
  const json: ApiEnvelope<ApiDetailItem> = await res.json();
  return json.data;
}

export function toResourceItem(item: ApiListItem): ResourceItem {
  return {
    type: "Insight",
    title: item.title,
    excerpt: item.description,
    category: item.category?.name ?? "",
    date: formatDate(item.createdAt),
    readingTime: `${item.timeReadMin} min read`,
    ctaLabel: "Read insight",
    featured: item.isFeatured,
    slug: `/resources/travel-insights/${item.id}`,
  };
}

export function toTravelInsightItem(item: ApiDetailItem): TravelInsightItem {
  const paragraphs = (item.content || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const bodySections: TravelInsightBodySection[] | undefined =
    paragraphs.length > 0 ? [{ paragraphs }] : undefined;

  const relatedServices: TravelInsightRelatedService[] | undefined = item.relatedServices?.length
    ? item.relatedServices.map((s) => ({
        title: s.title,
        description: s.description,
        to: `/services/${s.slug}`,
      }))
    : undefined;

  return {
    type: "Insight",
    title: item.title,
    excerpt: item.description,
    category: item.category?.name ?? "",
    date: formatDate(item.createdAt),
    readingTime: `${item.timeReadMin} min read`,
    author: item.author,
    slug: `/resources/travel-insights/${item.id}`,
    coverImage: item.coverImgUrl,
    keyTakeaways: item.insights,
    bodySections,
    actionableTakeaways: item.takeAway,
    relatedServices,
  };
}
