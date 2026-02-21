import { ScrollReveal } from "@/components/ScrollReveal";
import { Users, Zap, TrendingUp } from "lucide-react";

const props = [
  {
    icon: Users,
    title: "One team, every channel",
    description: "No more juggling five agencies. Get strategy, creative, media, and lifecycle from a single, accountable team.",
  },
  {
    icon: Zap,
    title: "Faster launches, fewer bottlenecks",
    description: "22-hour average turnaround. Weekly sprints. Same-day communication. Your campaigns launch on time, every time.",
  },
  {
    icon: TrendingUp,
    title: "Scalable support without overhead",
    description: "Scale up or down without the cost and complexity of hiring. Get senior talent across every discipline.",
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
