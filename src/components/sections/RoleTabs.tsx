import { useState } from "react";
import { roleTabs } from "@/data/roleTabs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check, ArrowRight } from "lucide-react";

export default function RoleTabs() {
  const [active, setActive] = useState(0);
  const tab = roleTabs[active];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">See How TripUp Studio Works for Your Business</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {roleTabs.map((t, i) => (
              <button
                key={t.role}
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === i
                    ? "bg-foreground text-background"
                    : "bg-card text-muted-foreground hover:bg-card/80"
                }`}
              >
                {t.role}
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-border bg-card p-8">
            <ul className="space-y-3">
              {tab.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 font-medium text-primary cursor-pointer">
              {tab.caseStudy} <ArrowRight className="h-4 w-4" />
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
