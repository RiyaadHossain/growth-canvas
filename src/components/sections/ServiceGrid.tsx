import { services } from "@/data/services";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ServiceGrid() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Full-Stack Marketing Services</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Everything you need to grow — strategy, creative, media, and technology — under one roof.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <service.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {service.title}
                  {service.isNew && (
                    <span className="ml-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                      New
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
