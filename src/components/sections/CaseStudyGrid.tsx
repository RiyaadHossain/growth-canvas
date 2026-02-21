import { caseStudies } from "@/data/caseStudies";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function CaseStudyGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {caseStudies.map((cs, i) => (
        <ScrollReveal key={cs.client} delay={i * 0.05}>
          <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className={`aspect-[4/3] ${cs.image}`} />
            <div className="p-5">
              <p className="font-heading text-lg font-bold text-foreground">{cs.client}</p>
              <p className="mt-1 text-sm text-muted-foreground">{cs.result}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
