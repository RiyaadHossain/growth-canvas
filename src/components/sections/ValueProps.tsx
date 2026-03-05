import { ScrollReveal } from "@/components/ScrollReveal";
import { Compass, Layers, TrendingUp } from "lucide-react";

const props = [
  {
    icon: Compass,
    title: "Travel expertise, not generic advice",
    description: "Every strategy, campaign, and product we build is rooted in deep knowledge of how travel businesses actually grow — not repurposed playbooks from other industries.",
  },
  {
    icon: Layers,
    title: "End-to-end, under one roof",
    description: "From initial research through to live campaigns and products, one accountable team handles it all. No handoffs, no communication gaps, no vendor sprawl.",
  },
  {
    icon: TrendingUp,
    title: "Systems built to scale",
    description: "We don't just deliver projects — we build the strategies, workflows, and technology foundations that let your travel business grow without breaking.",
  },
];

export default function ValueProps() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid gap-8 md:grid-cols-3">
          {props.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 md:mx-0">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
