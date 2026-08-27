import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type {
  CaseStudyItem,
  CaseStudyMetric,
  CaseStudySnapshot,
  CaseStudyChallenge,
  CaseStudyApproachStep,
  CaseStudyTransformation,
  CaseStudyTestimonial,
} from "@/components/resources/CaseStudyDetailPage";
import { caseStudiesItems } from "@/data/caseStudiesItems";

const API_BASE = "https://tripup-backend.vercel.app/api/v1";

/* ─── API TYPES ─── */

export interface ApiCaseStudyListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readingTime?: string;
  ctaLabel?: string;
  industryTag?: string;
  coverImage?: string;
  createdAt: string;
  isPublished: boolean;
  isFeatured: boolean;
  category: { id: string; name: string };
}

export interface ApiCaseStudyDetail extends ApiCaseStudyListItem {
  categoryId: string;
  updatedAt?: string;
  metrics?: CaseStudyMetric[];
  snapshot?: CaseStudySnapshot;
  challenge?: CaseStudyChallenge;
  approachSteps?: CaseStudyApproachStep[];
  deliverables?: string[];
  transformation?: CaseStudyTransformation;
  results?: CaseStudyMetric[];
  keyTakeaways?: string[];
  testimonial?: CaseStudyTestimonial;
  relatedCaseStudies?: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage?: string;
    date: string;
    readingTime?: string;
    createdAt: string;
  }>;
}

interface ApiListResponse {
  data: ApiCaseStudyListItem[];
  meta?: { total: number; page: number; limit: number; totalPages: number };
}

interface ApiListEnvelope {
  success?: boolean;
  message?: string;
  data: ApiCaseStudyListItem[] | ApiListResponse;
  meta?: ApiListResponse["meta"];
}

const buildSlug = (id: string) => `/resources/case-studies/${id}`;

/* ─── MAPPERS ─── */

export function mapListItem(item: ApiCaseStudyListItem): CaseStudyItem {
  return {
    type: "Case Study",
    title: item.title,
    excerpt: item.excerpt,
    category: item.category?.name ?? "",
    date: item.date,
    readingTime: item.readingTime,
    ctaLabel: item.ctaLabel ?? "View case study",
    featured: item.isFeatured,
    slug: buildSlug(item.slug),
    industryTag: item.industryTag,
    coverImage: item.coverImage,
  };
}

export function mapDetail(item: ApiCaseStudyDetail): CaseStudyItem {
  return {
    ...mapListItem(item),
    metrics: item.metrics,
    snapshot: item.snapshot,
    challenge: item.challenge,
    approachSteps: item.approachSteps,
    deliverables: item.deliverables,
    transformation: item.transformation,
    results: item.results,
    keyTakeaways: item.keyTakeaways,
    testimonial: item.testimonial,
  };
}

/* ─── FETCHERS ─── */

export async function fetchCaseStudies(): Promise<CaseStudyItem[]> {
  const res = await fetch(`${API_BASE}/case-studies?limit=100`);
  if (!res.ok) throw new Error("Failed to fetch case studies");
  const json: ApiListEnvelope = await res.json();
  const raw = Array.isArray(json.data)
    ? json.data
    : (json.data?.data ?? []);
  return raw.map(mapListItem);
}

function localCaseStudyBySlug(
  slug: string,
): { item: CaseStudyItem; related: CaseStudyItem[] } | null {
  const fullSlug = `/resources/case-studies/${slug}`;
  const item = caseStudiesItems.find((i) => i.slug === fullSlug);
  if (!item) return null;
  const related = caseStudiesItems
    .filter((i) => i.slug !== fullSlug)
    .sort((a, b) => (a.category === item.category ? 0 : 1) - (b.category === item.category ? 0 : 1))
    .slice(0, 3);
  return { item, related };
}

export async function fetchCaseStudyById(
  id: string,
): Promise<{ item: CaseStudyItem; related: CaseStudyItem[] }> {
  try {
    const res = await fetch(`${API_BASE}/case-studies/slug/${encodeURIComponent(id)}`);
    if (!res.ok) throw new Error("Failed to fetch case study");
    const json: { success?: boolean; data: ApiCaseStudyDetail } | ApiCaseStudyDetail =
      await res.json();
    const data: ApiCaseStudyDetail =
      (json as { data?: ApiCaseStudyDetail }).data ?? (json as ApiCaseStudyDetail);
    if (!data?.title) throw new Error("Case study not found");

    const item = mapDetail(data);
    const related: CaseStudyItem[] = (data.relatedCaseStudies ?? []).map((r) => ({
      type: "Case Study",
      title: r.title,
      excerpt: r.excerpt,
      category: data.category?.name ?? "",
      date: r.date,
      readingTime: r.readingTime,
      ctaLabel: "View case study",
      slug: buildSlug(r.slug),
      coverImage: r.coverImage,
    }));

    return { item, related };
  } catch (err) {
    const local = localCaseStudyBySlug(id);
    if (local) return local;
    throw err;
  }
}

/* ─── HOOKS ─── */

export function useCaseStudies() {
  return useQuery({
    queryKey: ["case-studies"],
    queryFn: fetchCaseStudies,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCaseStudy(id: string | undefined) {
  return useQuery({
    queryKey: ["case-studies", "detail", id],
    queryFn: () => fetchCaseStudyById(id as string),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}

/* ─── CATEGORIES ─── */

export interface ApiCaseStudyCategory {
  label: string;
  value: string;
}

export async function fetchCaseStudyCategories(): Promise<ApiCaseStudyCategory[]> {
  const res = await fetch(`${API_BASE}/admin/case-study-categories/listing`);
  if (!res.ok) throw new Error("Failed to fetch case study categories");
  const json: ApiCaseStudyCategory[] | { data?: ApiCaseStudyCategory[] } = await res.json();
  return Array.isArray(json) ? json : (json.data ?? []);
}

export function useCaseStudyCategories() {
  return useQuery({
    queryKey: ["case-studies", "categories"],
    queryFn: fetchCaseStudyCategories,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCaseStudyCategoryLabels() {
  const { data, ...rest } = useCaseStudyCategories();
  const labels = useMemo(() => (data ?? []).map((c) => c.label), [data]);
  return { data: labels, ...rest };
}
