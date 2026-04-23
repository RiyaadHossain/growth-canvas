import { team } from "@/data/team";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function TeamSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Meet a Few of the Specialists</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Senior talent across every discipline — no juniors learning on your dime.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.05}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mb-4 h-16 w-16 rounded-full object-cover border border-border"
                  loading="lazy"
                />
                <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
