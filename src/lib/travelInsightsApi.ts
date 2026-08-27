import { travelInsightsItems } from "@/data/travelInsightsItems";
import type { ResourceItem } from "@/components/resources/ResourceCard";
import type {
  TravelInsightItem,
  TravelInsightBodySection,
  TravelInsightRelatedService,
} from "@/components/resources/TravelInsightDetailPage";

const API_BASE = "https://tripup-backend.vercel.app/api/v1";

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
  coverImgUrl?: string;
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
  try {
    const res = await fetch(`${API_BASE}/travel-insights/slug/${encodeURIComponent(id)}`);
    if (res.ok) {
      const json: ApiEnvelope<ApiDetailItem> = await res.json();
      if (json.data) return json.data;
    }
  } catch {
    // fall through to local data
  }
  const local = localInsightBySlug(id);
  if (local) return local;
  throw new Error("Failed to fetch travel insight");
}

function localInsightBySlug(slug: string): ApiDetailItem | undefined {
  const match = travelInsightsItems.find(
    (i) => i.slug === `/resources/travel-insights/${slug}` || i.slug === slug,
  );
  if (!match) return undefined;
  const cleanSlug = match.slug?.replace("/resources/travel-insights/", "") ?? slug;
  return {
    id: cleanSlug,
    title: match.title,
    slug: cleanSlug,
    description: match.excerpt,
    timeReadMin: parseInt(match.readingTime ?? "5", 10) || 5,
    author: match.author ?? "TripUp Studio",
    createdAt: new Date().toISOString(),
    isPublished: true,
    isFeatured: match.featured ?? false,
    category: { id: match.category, name: match.category },
    coverImgUrl: typeof match.coverImage === "string" ? match.coverImage : undefined,
    content: match.contentHtml,
    insights: match.keyTakeaways,
    takeAway: match.actionableTakeaways,
    relatedServices: match.relatedServices?.map((s) => ({
      id: s.to,
      title: s.title,
      slug: s.to.replace("/services/", ""),
      description: s.description,
    })),
  };
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
    slug: `/resources/travel-insights/${item.slug}`,
    coverImage: item.coverImgUrl,
  };
}

export function toTravelInsightItem(item: ApiDetailItem): TravelInsightItem {
  const contentHtml = item.content && item.content.trim() ? item.content : undefined;

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
    slug: `/resources/travel-insights/${item.slug}`,
    coverImage: item.coverImgUrl,
    keyTakeaways: item.insights,
    contentHtml,
    actionableTakeaways: item.takeAway,
    relatedServices,
  };
}
