import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">What Our Partners Say</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-12 mx-auto max-w-3xl rounded-2xl bg-card p-8 shadow-sm md:p-12">
            <Quote className="h-8 w-8 text-primary/30" />
            <p className="mt-4 text-lg leading-relaxed text-foreground md:text-xl">{t.quote}</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} className="rounded-full border border-border p-2 transition-colors hover:bg-secondary" aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <span className="text-sm text-muted-foreground">
              {current + 1} / {testimonials.length}
            </span>
            <button onClick={next} className="rounded-full border border-border p-2 transition-colors hover:bg-secondary" aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
