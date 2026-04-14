import { ScrollReveal } from "@/components/ScrollReveal";

const logos = [
  "Nomad Routes", "Apex Expeditions", "Selva Travel", "Drift Hospitality",
  "Kasa Collection", "Horizon DMC", "Via Terra", "Coral Routes",
  "Summit Stays", "BlueWave Tours", "Aria Hotels", "Trek Republic",
];

export default function LogoStrip() {
  return null;
  // return (
  //   <section className="section-padding !py-12 overflow-hidden">
  //     <ScrollReveal>
  //       <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
  //         Trusted by 500+ travel brands across the globe
  //       </p>
  //     </ScrollReveal>
  //     <div className="relative">
  //       <div className="flex animate-marquee gap-12 whitespace-nowrap">
  //         {[...logos, ...logos].map((name, i) => (
  //           <span
  //             key={i}
  //             className="inline-block rounded-md bg-secondary px-6 py-3 font-heading text-sm font-semibold text-muted-foreground/60"
  //           >
  //             {name}
  //           </span>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
