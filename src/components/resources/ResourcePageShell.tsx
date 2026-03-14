import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import CTABand from "@/components/sections/CTABand";
import { ResourceCard, FeaturedResourceCard, type ResourceItem } from "./ResourceCard";

interface ResourcePageShellProps {
  eyebrow?: string;
  headline: string;
  description: string;
  tags?: string[];
  items: ResourceItem[];
  browseTopics: string[];
  cta: { headline: string; subtext: string; ctaLabel: string };
  ctaSecondary?: { label: string; to: string };
}

export default function ResourcePageShell({
  eyebrow = "Resources",
  headline,
  description,
  tags,
  items,
  browseTopics,
  cta,
  ctaSecondary,
}: ResourcePageShellProps) {
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const featured = items.find((i) => i.featured);
  const filtered = useMemo(() => {
    return items.filter((i) => {
      if (i.featured) return false;
      const matchesSearch =
        !search ||
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesTopic = !activeTopic || i.category === activeTopic;
      return matchesSearch && matchesTopic;
    });
  }, [items, search, activeTopic]);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding !pb-0">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
            {tags && tags.length > 0 && (
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="section-padding !pb-0">
          <div className="container-wide">
            <FeaturedResourceCard item={featured} />
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="section-padding !py-10">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTopic(null)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  !activeTopic ? "border-primary bg-primary/10 text-primary" : "border-border bg-secondary text-secondary-foreground hover:border-primary/40"
                }`}
              >
                All
              </button>
              {browseTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(activeTopic === topic ? null : topic)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTopic === topic ? "border-primary bg-primary/10 text-primary" : "border-border bg-secondary text-secondary-foreground hover:border-primary/40"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding !pt-0">
        <div className="container-wide">
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, i) => (
                <ResourceCard key={item.title} item={item} index={i} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-muted-foreground">No results found. Try adjusting your filters.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">{cta.headline}</h2>
            <p className="mt-4 text-muted-foreground">{cta.subtext}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg">{cta.ctaLabel}</Button>
              {ctaSecondary && (
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to={ctaSecondary.to}>{ctaSecondary.label}</Link>
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
