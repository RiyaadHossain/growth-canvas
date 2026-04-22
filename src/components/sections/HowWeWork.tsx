import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, BarChart2, Palette, Code2, Rocket } from "lucide-react";

// Primary lime-green: hsl(72 79% 52%) — matches --primary
// Secondary accents: muted greens and a warm amber for contrast
const steps = [
  {
    number: "01",
    badge: "Discover",
    label: "Insight → Strategy / Direction",
    icon: BarChart2,
    color: "hsl(72 79% 52%)",
    accentClass: "from-primary/15 to-primary/5",
    borderClass: "border-primary/25",
    glowClass: "shadow-primary/10",
    points: [
      "Market & traveler insights",
      "Demand forecasting & trend analysis",
      "Competitive & destination analysis",
      "Business model & revenue strategy",
      "Positioning & differentiation",
      "Growth opportunity mapping",
      "Growth Audit",
    ],
    illustration: <DiscoverIllustration />,
    reverse: false,
  },
  {
    number: "02",
    badge: "Design",
    label: "Strategy → Experience",
    icon: Palette,
    color: "hsl(72 60% 40%)",
    accentClass: "from-primary/10 to-primary/5",
    borderClass: "border-primary/20",
    glowClass: "shadow-primary/8",
    points: [
      "Brand strategy & narrative",
      "Visual identity direction",
      "UX & customer journey design",
      "Website & funnel architecture",
      "Content & storytelling frameworks",
      "Experience design for destinations, hotels & operators",
    ],
    illustration: <DesignIllustration />,
    reverse: true,
  },
  {
    number: "03",
    badge: "Develop",
    label: "Experience → Systems",
    icon: Code2,
    color: "hsl(72 79% 52%)",
    accentClass: "from-primary/15 to-primary/5",
    borderClass: "border-primary/25",
    glowClass: "shadow-primary/10",
    points: [
      "Website & booking platform development",
      "Apps & digital products",
      "CRM & automation systems",
      "AI readiness & implementation",
      "Photography, videography & filmmaking",
      "Motion graphics & immersive content",
      "Platform optimization & integrations",
    ],
    illustration: <DevelopIllustration />,
    reverse: false,
  },
  {
    number: "04",
    badge: "Deliver",
    label: "Systems → Growth",
    icon: Rocket,
    color: "hsl(72 60% 40%)",
    accentClass: "from-primary/10 to-primary/5",
    borderClass: "border-primary/20",
    glowClass: "shadow-primary/8",
    points: [
      "SEO & AI search optimization",
      "Paid search & performance marketing",
      "Local search & destination visibility",
      "Campaign strategy & execution",
      "Content distribution & amplification",
      "Performance tracking & optimization",
      "Web Analytics & Tracking",
    ],
    illustration: <DeliverIllustration />,
    reverse: true,
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const textSide = (
    <motion.div
      initial={{ opacity: 0, x: step.reverse ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col justify-center w-full"
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
            style={{ background: step.color, color: "hsl(72 60% 8%)" }}
          >
            {step.number}
          </motion.span>
          <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">
            {step.badge}
          </h3>
        </div>
        <div className="ml-11">
          <span
            className="inline-block rounded-full border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
            style={{ color: step.color, borderColor: step.color + "55", background: step.color + "18" }}
          >
            {step.label}
          </span>
        </div>
      </div>
      <motion.ul
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="space-y-3"
      >
        {step.points.map((pt, ptIdx) => (
          <motion.li
            key={pt}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + ptIdx * 0.06 }}
            className="flex items-start gap-3"
          >
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{ background: step.color + "25", color: step.color }}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground">{pt}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );

  const illuSide = (
    <motion.div
      initial={{ opacity: 0, x: step.reverse ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="hidden lg:flex items-center justify-center"
    >
      <div
        className={`relative w-full max-w-sm rounded-3xl border bg-gradient-to-br p-8 ${step.accentClass} ${step.borderClass} hover:shadow-2xl ${step.glowClass} transition-all duration-500 hover:-translate-y-1`}
        style={{ background: "rgba(200,235,34,0.04)" }}
      >
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.accentClass} opacity-60`} />
        <div className="relative">{step.illustration}</div>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="relative">
      <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2 lg:gap-24">
        {step.reverse ? (
          <>
            {illuSide}
            {textSide}
          </>
        ) : (
          <>
            {textSide}
            {illuSide}
          </>
        )}
      </div>
    </div>
  );
}

// ---- SVG Illustrations (recolored to lime-green primary) ----

function DiscoverIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="20" y="20" width="280" height="200" rx="16" fill="rgba(200,235,34,0.06)" stroke="rgba(200,235,34,0.18)" strokeWidth="1"/>
      {[60,100,140,180].map(y => <line key={y} x1="20" y1={y} x2="300" y2={y} stroke="rgba(200,235,34,0.07)" strokeWidth="1"/>)}
      {[80,140,200,260].map(x => <line key={x} x1={x} y1="20" x2={x} y2="220" stroke="rgba(200,235,34,0.07)" strokeWidth="1"/>)}
      <rect x="50" y="140" width="28" height="60" rx="6" fill="rgba(200,235,34,0.25)" stroke="rgba(200,235,34,0.45)" strokeWidth="1"/>
      <rect x="90" y="110" width="28" height="90" rx="6" fill="rgba(200,235,34,0.4)" stroke="rgba(200,235,34,0.6)" strokeWidth="1"/>
      <rect x="130" y="90" width="28" height="110" rx="6" fill="rgba(200,235,34,0.6)" stroke="rgba(200,235,34,0.8)" strokeWidth="1"/>
      <rect x="170" y="120" width="28" height="80" rx="6" fill="rgba(200,235,34,0.35)" stroke="rgba(200,235,34,0.55)" strokeWidth="1"/>
      <rect x="210" y="80" width="28" height="120" rx="6" fill="rgba(200,235,34,0.8)" stroke="rgba(200,235,34,1)" strokeWidth="1"/>
      <polyline points="64,155 104,125 144,100 184,132 224,90" stroke="rgba(200,235,34,0.9)" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
      <circle cx="240" cy="55" r="10" fill="rgba(200,235,34,0.8)" stroke="white" strokeWidth="1.5"/>
      <circle cx="240" cy="55" r="4" fill="hsl(72 60% 8%)"/>
      <circle cx="270" cy="45" r="7" fill="rgba(200,235,34,0.6)" stroke="white" strokeWidth="1.5"/>
      <circle cx="270" cy="45" r="3" fill="hsl(72 60% 8%)"/>
      <circle cx="268" cy="160" r="18" fill="rgba(200,235,34,0.1)" stroke="rgba(200,235,34,0.35)" strokeWidth="1.5"/>
      <circle cx="265" cy="157" r="9" fill="none" stroke="rgba(200,235,34,0.8)" strokeWidth="2"/>
      <line x1="271" y1="163" x2="278" y2="170" stroke="rgba(200,235,34,0.8)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="20" y="20" width="280" height="200" rx="16" fill="rgba(200,235,34,0.05)" stroke="rgba(200,235,34,0.15)" strokeWidth="1"/>
      <circle cx="60" cy="55" r="22" fill="rgba(200,235,34,0.7)" stroke="white" strokeWidth="1.5"/>
      <circle cx="108" cy="55" r="22" fill="rgba(200,235,34,0.5)" stroke="white" strokeWidth="1.5"/>
      <circle cx="156" cy="55" r="22" fill="rgba(200,235,34,0.35)" stroke="white" strokeWidth="1.5"/>
      <circle cx="204" cy="55" r="22" fill="rgba(200,235,34,0.2)" stroke="white" strokeWidth="1.5"/>
      <rect x="40" y="100" width="110" height="80" rx="8" fill="rgba(200,235,34,0.07)" stroke="rgba(200,235,34,0.25)" strokeWidth="1.5"/>
      <rect x="50" y="110" width="90" height="14" rx="4" fill="rgba(200,235,34,0.18)"/>
      <rect x="50" y="132" width="60" height="8" rx="3" fill="rgba(255,255,255,0.08)"/>
      <rect x="50" y="146" width="75" height="8" rx="3" fill="rgba(255,255,255,0.08)"/>
      <rect x="50" y="160" width="45" height="8" rx="3" fill="rgba(255,255,255,0.08)"/>
      <rect x="170" y="100" width="110" height="80" rx="8" fill="rgba(200,235,34,0.07)" stroke="rgba(200,235,34,0.25)" strokeWidth="1.5"/>
      <circle cx="195" cy="130" r="10" fill="rgba(200,235,34,0.4)" stroke="rgba(200,235,34,0.7)" strokeWidth="1.5"/>
      <line x1="205" y1="130" x2="220" y2="130" stroke="rgba(200,235,34,0.5)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="230" cy="130" r="10" fill="rgba(200,235,34,0.25)" stroke="rgba(200,235,34,0.5)" strokeWidth="1.5"/>
      <line x1="240" y1="130" x2="255" y2="130" stroke="rgba(200,235,34,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="265" cy="130" r="10" fill="rgba(200,235,34,0.15)" stroke="rgba(200,235,34,0.4)" strokeWidth="1.5"/>
      <path d="M 245 175 L 270 195 L 280 180 L 265 165 Z" fill="rgba(200,235,34,0.2)" stroke="rgba(200,235,34,0.6)" strokeWidth="1.5"/>
      <circle cx="245" cy="175" r="4" fill="rgba(200,235,34,0.8)"/>
    </svg>
  );
}

function DevelopIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="30" y="30" width="180" height="120" rx="10" fill="rgba(200,235,34,0.08)" stroke="rgba(200,235,34,0.25)" strokeWidth="1.5"/>
      <rect x="38" y="38" width="164" height="104" rx="6" fill="rgba(10,12,18,0.7)" stroke="rgba(200,235,34,0.12)" strokeWidth="1"/>
      <rect x="48" y="50" width="60" height="6" rx="3" fill="rgba(200,235,34,0.7)"/>
      <rect x="55" y="64" width="90" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
      <rect x="55" y="78" width="70" height="6" rx="3" fill="rgba(200,235,34,0.4)"/>
      <rect x="55" y="92" width="100" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
      <rect x="48" y="106" width="50" height="6" rx="3" fill="rgba(200,235,34,0.5)"/>
      <rect x="55" y="120" width="80" height="6" rx="3" fill="rgba(255,255,255,0.13)"/>
      <rect x="20" y="150" width="200" height="8" rx="4" fill="rgba(200,235,34,0.15)" stroke="rgba(200,235,34,0.25)" strokeWidth="1"/>
      <rect x="230" y="60" width="60" height="110" rx="10" fill="rgba(200,235,34,0.08)" stroke="rgba(200,235,34,0.25)" strokeWidth="1.5"/>
      <rect x="237" y="72" width="46" height="86" rx="4" fill="rgba(10,12,18,0.7)"/>
      <circle cx="260" cy="160" r="4" fill="rgba(200,235,34,0.4)"/>
      <rect x="242" y="80" width="36" height="20" rx="4" fill="rgba(200,235,34,0.25)" stroke="rgba(200,235,34,0.45)" strokeWidth="1"/>
      <rect x="242" y="106" width="16" height="8" rx="3" fill="rgba(255,255,255,0.08)"/>
      <rect x="262" y="106" width="16" height="8" rx="3" fill="rgba(255,255,255,0.08)"/>
      <rect x="242" y="120" width="36" height="8" rx="3" fill="rgba(255,255,255,0.08)"/>
      <rect x="242" y="134" width="36" height="12" rx="4" fill="rgba(200,235,34,0.5)"/>
      <circle cx="70" cy="205" r="14" fill="rgba(200,235,34,0.15)" stroke="rgba(200,235,34,0.45)" strokeWidth="1.5"/>
      <path d="M 63 205 L 67 209 L 77 199" stroke="rgba(200,235,34,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="84" y1="205" x2="110" y2="205" stroke="rgba(200,235,34,0.35)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="124" cy="205" r="14" fill="rgba(200,235,34,0.1)" stroke="rgba(200,235,34,0.4)" strokeWidth="1.5"/>
      <text x="117" y="210" fontSize="12" fill="rgba(200,235,34,0.9)" fontFamily="monospace">AI</text>
      <line x1="138" y1="205" x2="164" y2="205" stroke="rgba(200,235,34,0.3)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="178" cy="205" r="14" fill="rgba(200,235,34,0.15)" stroke="rgba(200,235,34,0.45)" strokeWidth="1.5"/>
      <path d="M 171 205 L 175 209 L 185 199" stroke="rgba(200,235,34,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DeliverIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="20" y="20" width="280" height="200" rx="16" fill="rgba(200,235,34,0.04)" stroke="rgba(200,235,34,0.14)" strokeWidth="1"/>
      <polyline points="40,180 80,160 120,130 160,100 200,70 240,50 280,35" stroke="rgba(200,235,34,0.85)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="40,180 80,160 120,130 160,100 200,70 240,50 280,35 280,190 40,190" fill="rgba(200,235,34,0.07)"/>
      <polygon points="275,25 285,40 265,40" fill="rgba(200,235,34,0.9)"/>
      {[[80,160],[120,130],[160,100],[200,70],[240,50]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="rgba(200,235,34,0.9)" stroke="white" strokeWidth="1.5"/>
      ))}
      <rect x="40" y="30" width="70" height="30" rx="8" fill="rgba(200,235,34,0.12)" stroke="rgba(200,235,34,0.4)" strokeWidth="1.5"/>
      <text x="52" y="50" fontSize="11" fill="rgba(200,235,34,0.95)" fontFamily="sans-serif" fontWeight="bold">#1 SEO</text>
      <path d="M 200 130 Q 230 110 250 90" stroke="rgba(200,235,34,0.5)" strokeWidth="1.5" strokeDasharray="4 2" fill="none"/>
      <path d="M 150 150 Q 190 130 220 110" stroke="rgba(200,235,34,0.35)" strokeWidth="1.5" strokeDasharray="4 2" fill="none"/>
      <rect x="30" y="110" width="90" height="50" rx="8" fill="rgba(10,12,18,0.5)" stroke="rgba(200,235,34,0.25)" strokeWidth="1"/>
      <rect x="38" y="118" width="35" height="6" rx="3" fill="rgba(200,235,34,0.4)"/>
      <rect x="38" y="130" width="55" height="6" rx="3" fill="rgba(255,255,255,0.13)"/>
      <rect x="38" y="142" width="45" height="6" rx="3" fill="rgba(200,235,34,0.5)"/>
    </svg>
  );
}

export default function HowWeWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      {/* Match global dark background */}
      <div className="absolute inset-0 bg-background" />
      {/* Subtle primary-tinted ambient blobs */}
      <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-primary/4 blur-3xl" />

      <div className="container-wide relative px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Process
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            From insight to scalable growth for travel brands, destinations, and operators.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24 md:space-y-28">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
