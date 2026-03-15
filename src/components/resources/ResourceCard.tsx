import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

export interface ResourceItem {
  type: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime?: string;
  duration?: string;
  ctaLabel: string;
  featured?: boolean;
  slug?: string;
  // Detail page fields (optional — for detail pages only)
  body?: string;
  keyTakeaways?: string[];
  relatedSlugs?: string[];
}

export function ResourceCard({ item, index }: { item: ResourceItem; index: number }) {
  const inner = (
    <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <p className="text-[11px] font-bold uppercase tracking-widest text-primary">{item.type}</p>
      <h3 className="mt-3 font-heading text-lg font-bold text-foreground leading-snug">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
        <span>{item.category}</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{item.readingTime || item.duration}</span>
        {item.date && (
          <>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{item.date}</span>
          </>
        )}
      </div>
      <p className="mt-4 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
        {item.ctaLabel} →
      </p>
    </div>
  );

  return (
    <ScrollReveal delay={index * 0.04}>
      {item.slug ? (
        <Link to={item.slug} className="block h-full">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </ScrollReveal>
  );
}

export function FeaturedResourceCard({ item }: { item: ResourceItem }) {
  const inner = (
    <div className="group cursor-pointer rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl md:p-10">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">Featured</span>
        <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{item.type}</span>
      </div>
      <h3 className="mt-5 font-heading text-2xl font-bold text-foreground md:text-3xl">{item.title}</h3>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground">{item.excerpt}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
        <span>{item.category}</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{item.readingTime || item.duration}</span>
      </div>
      <p className="mt-6 text-sm font-semibold text-primary">{item.ctaLabel} →</p>
    </div>
  );

  return (
    <ScrollReveal>
      {item.slug ? (
        <Link to={item.slug} className="block">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </ScrollReveal>
  );
}
