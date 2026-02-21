import { pricingCards } from "@/data/pricingCards";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Check } from "lucide-react";

export default function PricingCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {pricingCards.map((card, i) => (
        <ScrollReveal key={card.title} delay={i * 0.05}>
          <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="font-heading text-lg font-bold text-foreground">{card.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
            <p className="mt-4 font-heading text-2xl font-bold text-foreground">
              {card.startingAt}<span className="text-sm font-normal text-muted-foreground">/mo</span>
            </p>
            <ul className="mt-4 flex-1 space-y-2">
              {card.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
