import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  GuideItem,
  GuideFrameworkStep,
  GuideSamplePreview,
  GuideRelatedService,
} from "@/components/resources/GuideDetailPage";

const API_BASE = "https://tripup-backend.onrender.com/api/v1";

/* ─── API TYPES ─── */

export interface ApiPlaybookListItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime?: string;
  bestFor?: string;
  author?: string;
  ctaLabel?: string;
  isPublished: boolean;
  isFeatured: boolean;
  slug: string;
  coverImage?: string;
  createdAt: string;
  category?: { id: string; name: string };
  type?: { id: string; name: string };
}

export interface ApiPlaybookDetail extends ApiPlaybookListItem {
  keyTakeaways?: string[];
  whoIsItFor?: string[];
  outcomes?: string[];
  frameworkSteps?: GuideFrameworkStep[];
  samplePreviews?: GuideSamplePreview[];
  relatedServices?: GuideRelatedService[];
  relatedPlaybooks?: ApiPlaybookListItem[];
  updatedAt?: string;
}

interface ApiEnvelope<T> {
  success?: boolean;
  message?: string;
  data: T;
}

const detailSlug = (item: ApiPlaybookListItem): string => {
  // API slug may already be a full path like "/resources/guides-playbooks/foo"
  if (item.slug?.startsWith("/")) return item.slug;
  // Otherwise treat as bare slug
  return `/resources/guides-playbooks/${item.slug || item.id}`;
};

/* ─── MAPPERS ─── */

export function mapListItem(item: ApiPlaybookListItem): GuideItem {
  return {
    type: item.type?.name || "Playbook",
    title: item.title,
    excerpt: item.excerpt,
    category: item.category?.name ?? "",
    date: item.date,
    readingTime: item.readingTime,
    bestFor: item.bestFor,
    ctaLabel: item.ctaLabel ?? "Read playbook",
    featured: item.isFeatured,
    slug: detailSlug(item),
    coverImage: item.coverImage,
  };
}

export function mapDetail(item: ApiPlaybookDetail): GuideItem {
  return {
    ...mapListItem(item),
    keyTakeaways: item.keyTakeaways,
    whoIsItFor: item.whoIsItFor,
    outcomes: item.outcomes,
    frameworkSteps: item.frameworkSteps,
    samplePreviews: item.samplePreviews,
    relatedServices: item.relatedServices,
  };
}

/* ─── FETCHERS ─── */

interface ListResponse {
  data: ApiPlaybookListItem[];
  meta?: { total: number; page: number; limit: number; totalPages: number };
}

export async function fetchPlaybooks(): Promise<GuideItem[]> {
  const res = await fetch(`${API_BASE}/playbooks?limit=100`);
  if (!res.ok) throw new Error("Failed to fetch playbooks");
  const json:
    | ApiPlaybookListItem[]
    | ListResponse
    | ApiEnvelope<ApiPlaybookListItem[] | ListResponse> = await res.json();

  let raw: ApiPlaybookListItem[] = [];
  if (Array.isArray(json)) raw = json;
  else if ("data" in json) {
    const inner = (json as ApiEnvelope<ApiPlaybookListItem[] | ListResponse>).data ?? json;
    if (Array.isArray(inner)) raw = inner;
    else if (Array.isArray((inner as ListResponse).data)) raw = (inner as ListResponse).data;
  }
  return raw.filter((p) => p.isPublished !== false).map(mapListItem);
}

export async function fetchPlaybookBySlug(
  slugOrId: string,
): Promise<{ item: GuideItem; related: GuideItem[] }> {
  const res = await fetch(`${API_BASE}/playbooks/${slugOrId}`);
  if (!res.ok) throw new Error("Failed to fetch playbook");
  const json: ApiPlaybookDetail | ApiEnvelope<ApiPlaybookDetail> = await res.json();
  const data: ApiPlaybookDetail =
    (json as ApiEnvelope<ApiPlaybookDetail>).data ?? (json as ApiPlaybookDetail);

  const item = mapDetail(data);
  const related = (data.relatedPlaybooks ?? []).map(mapListItem);
  return { item, related };
}

/* ─── HOOKS ─── */

export function usePlaybooks() {
  return useQuery({
    queryKey: ["playbooks"],
    queryFn: fetchPlaybooks,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePlaybook(slugOrId: string | undefined) {
  return useQuery({
    queryKey: ["playbooks", "detail", slugOrId],
    queryFn: () => fetchPlaybookBySlug(slugOrId as string),
    enabled: !!slugOrId,
    staleTime: 5 * 60 * 1000,
  });
}

/* ─── CATEGORIES ─── */

export interface ApiPlaybookCategory {
  label: string;
  value: string;
}

export async function fetchPlaybookCategories(): Promise<ApiPlaybookCategory[]> {
  const res = await fetch(`${API_BASE}/admin/playbook-categories/listing`);
  if (!res.ok) throw new Error("Failed to fetch playbook categories");
  const json: ApiPlaybookCategory[] | { data?: ApiPlaybookCategory[] } = await res.json();
  return Array.isArray(json) ? json : (json.data ?? []);
}

export function usePlaybookCategories() {
  return useQuery({
    queryKey: ["playbooks", "categories"],
    queryFn: fetchPlaybookCategories,
    staleTime: 5 * 60 * 1000,
  });
}

export function usePlaybookCategoryLabels() {
  const { data, ...rest } = usePlaybookCategories();
  const labels = useMemo(() => (data ?? []).map((c) => c.label), [data]);
  return { data: labels, ...rest };
}
