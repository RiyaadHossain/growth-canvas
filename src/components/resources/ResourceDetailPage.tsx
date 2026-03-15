import Layout from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import CTABand from "@/components/sections/CTABand";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Tag, CalendarDays, CheckCircle2 } from "lucide-react";
import type { ResourceItem } from "./ResourceCard";

interface ResourceDetailPageProps {
  item: ResourceItem;
  backLabel: string;
  backTo: string;
  relatedItems?: ResourceItem[];
  cta?: { headline: string; subtext: string; ctaLabel: string };
}

export default function ResourceDetailPage({
  item,
  backLabel,
  backTo,
  relatedItems = [],
  cta,
}: ResourceDetailPageProps) {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* ── Back nav ── */}
      <section className="section-padding !pb-0">
        <div className="container-wide">
          <ScrollReveal>
            <button
              onClick={() => navigate(backTo)}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Hero ── */}
      <section className="section-padding !pb-0">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              {item.type}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              {item.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{item.excerpt}</p>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              {item.category && (
                <span className="flex items-center gap-1.5">
                  <Tag className="h-3.5 w-3.5" />
                  {item.category}
                </span>
              )}
              {(item.readingTime || item.duration) && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {item.readingTime || item.duration}
                </span>
              )}
              {item.date && (
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {item.date}
                </span>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container-wide my-10 max-w-3xl border-t border-border" />

      {/* ── Body / Key Takeaways ── */}
      <section className="section-padding !pt-0">
        <div className="container-wide max-w-3xl">
          {item.keyTakeaways && item.keyTakeaways.length > 0 && (
            <ScrollReveal>
              <div className="mb-10 rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Key Takeaways</p>
                <ul className="space-y-3">
                  {item.keyTakeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}

          {item.body ? (
            <ScrollReveal delay={0.05}>
              <div
                className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-h2:text-2xl prose-h3:text-xl"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </ScrollReveal>
          ) : (
            /* Placeholder body when no full content is set */
            <ScrollReveal delay={0.05}>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  This {item.type.toLowerCase()} covers the strategic principles and practical frameworks that help travel brands navigate the challenge described above. The full content explores actionable approaches, real-world context, and specific recommendations tailored to travel operators, agencies, and destination brands.
                </p>
                <p>
                  Whether you're in the early stages of building your brand, refining your digital experience, or looking to optimise an existing growth system, the ideas here are designed to give you a clearer starting point — and a more structured way to think about what needs to change.
                </p>
                <p>
                  The frameworks shared here are drawn directly from our work with travel businesses across different scales and categories — and reflect what actually moves the needle when it comes to positioning, conversion, and sustainable growth.
                </p>
              </div>

              {/* Coming soon notice */}
              <div className="mt-10 rounded-xl border border-border bg-secondary p-6 text-center">
                <p className="text-sm font-semibold text-foreground">Full content coming soon</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We're publishing the complete version shortly. In the meantime, if you'd like to discuss the ideas in this {item.type.toLowerCase()} directly with our team, book a call below.
                </p>
                <Button variant="hero" size="sm" className="mt-4">
                  Book a Strategy Call
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── Related items ── */}
      {relatedItems.length > 0 && (
        <section className="section-padding">
          <div className="container-wide max-w-3xl">
            <ScrollReveal>
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Related</p>
            </ScrollReveal>
            <div className="space-y-4">
              {relatedItems.map((r, i) => (
                <ScrollReveal key={r.title} delay={i * 0.06}>
                  <Link
                    to={r.slug || backTo}
                    className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-primary">{r.type}</p>
                      <p className="mt-1 font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{r.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{r.excerpt}</p>
                    </div>
                    <span className="mt-1 shrink-0 text-sm font-semibold text-primary">→</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CTABand
        headline={cta?.headline ?? "Want these ideas applied to your business?"}
        subtext={cta?.subtext ?? "Reading frameworks is one thing. Executing them is another. If you'd like our team to work through this directly with your business, let's talk."}
        cta={cta?.ctaLabel ?? "Book a Strategy Call"}
      />
    </Layout>
  );
}
