import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: "20+", label: "Travel brands served" },
  { value: "3+", label: "Years in travel" },
  { value: "2", label: "Time zones covered" },
  { value: "95%", label: "Client retention" },
  { value: "8+", label: "Travel specialists" },
  { value: "5+", label: "Travel categories" },
];

export default function StatsStrip() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.05}>
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-foreground md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
