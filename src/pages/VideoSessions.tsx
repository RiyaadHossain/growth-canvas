import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Play, Clock, CalendarDays, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import CTABand from "@/components/sections/CTABand";
import { videoSessionsItems } from "@/data/videoSessionsItems";

const topics = [
  "Website & UX",
  "Booking & Conversion",
  "Paid Media",
  "SEO & Content",
  "Brand Positioning",
  "CRM & Automation",
];

export default function VideoSessions() {
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const featured = videoSessionsItems.find((i) => i.featured);
  const filtered = useMemo(() => {
    return videoSessionsItems.filter((i) => {
      if (i.featured) return false;
      const matchesSearch =
        !search ||
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesTopic = !activeTopic || i.category === activeTopic;
      return matchesSearch && matchesTopic;
    });
  }, [search, activeTopic]);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding !pb-0">
        <div className="container-wide max-w-3xl text-center">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Resources</p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Video Sessions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A curated library of video-led insights covering positioning, travel marketing, website conversion, product thinking, and growth systems — designed for teams that prefer to learn by watching.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="section-padding !pb-0">
          <div className="container-wide">
            <ScrollReveal>
              <Link
                to={featured.slug}
                className="group block overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden aspect-video lg:aspect-auto lg:min-h-[280px]">
                    {featured.thumbnail ? (
                      <img
                        src={featured.thumbnail}
                        alt={featured.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-card">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur-sm border border-primary/20 transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-7 w-7 text-primary ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="rounded-full bg-primary/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
                        Featured
                      </span>
                    </div>
                    {featured.duration && (
                      <div className="absolute bottom-4 right-4">
                        <span className="flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-foreground">
                          <Clock className="h-3 w-3 text-primary" />
                          {featured.duration}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                        {featured.type}
                      </span>
                      {featured.categoryPill && (
                        <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                          {featured.categoryPill}
                        </span>
                      )}
                      {featured.format && (
                        <span className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                          {featured.format}
                        </span>
                      )}
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl leading-snug">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {featured.duration}
                      </span>
                      {featured.date && (
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5 text-primary" />
                          {featured.date}
                        </span>
                      )}
                      {featured.audience && (
                        <span className="text-muted-foreground">{featured.audience}</span>
                      )}
                    </div>
                    <p className="mt-6 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                      Watch Session →
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
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
                placeholder="Search sessions..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTopic(null)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  !activeTopic
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-secondary text-secondary-foreground hover:border-primary/40"
                }`}
              >
                All
              </button>
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(activeTopic === topic ? null : topic)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeTopic === topic
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-secondary text-secondary-foreground hover:border-primary/40"
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
                <ScrollReveal key={item.slug} delay={i * 0.04}>
                  <Link
                    to={item.slug}
                    className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden aspect-video w-full">
                      {item.thumbnail ? (
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card">
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
                        </div>
                      )}
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-background/75 shadow backdrop-blur-sm border border-primary/20 transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-4 w-4 text-primary ml-0.5" />
                        </div>
                      </div>
                      {/* Duration badge */}
                      {item.duration && (
                        <div className="absolute bottom-3 right-3">
                          <span className="flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-medium text-foreground">
                            <Clock className="h-3 w-3 text-primary" />
                            {item.duration}
                          </span>
                        </div>
                      )}
                      {/* Format badge */}
                      {item.format && (
                        <div className="absolute top-3 left-3">
                          <span className="rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-primary">
                            {item.format}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5">
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-primary">
                          {item.category}
                        </span>
                        {item.categoryPill && item.categoryPill !== item.category && (
                          <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                            {item.categoryPill}
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug flex-1">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                        {item.date && (
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <CalendarDays className="h-3 w-3 text-primary" />
                            {item.date}
                          </span>
                        )}
                        <span className="ml-auto text-xs font-semibold text-primary">Watch →</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-muted-foreground">
              No sessions found. Try adjusting your filters.
            </p>
          )}
        </div>
      </section>

      <CTABand
        headline="Want this applied to your business, not just explained?"
        subtext="Our video sessions help you think more clearly. If you want help turning those ideas into execution, we can work directly on the strategy, systems, and implementation."
        cta="Book a Strategy Call"
      />
    </Layout>
  );
}
