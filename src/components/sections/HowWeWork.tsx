import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, BarChart2, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    badge: "Discover (FREE)",
    label: "Insight → Strategy / Direction",
    icon: BarChart2,
    color: "hsl(var(--primary))",
    accentClass: "from-teal-400/20 to-teal-600/10",
    borderClass: "border-teal-400/30",
    glowClass: "shadow-teal-400/10",
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
    color: "hsl(38 92% 60%)",
    accentClass: "from-orange-400/20 to-orange-600/10",
    borderClass: "border-orange-400/30",
    glowClass: "shadow-orange-400/10",
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
    color: "hsl(217 91% 70%)",
    accentClass: "from-blue-400/20 to-blue-600/10",
    borderClass: "border-blue-400/30",
    glowClass: "shadow-blue-400/10",
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
    color: "hsl(var(--primary))",
    accentClass: "from-teal-400/20 to-emerald-600/10",
    borderClass: "border-teal-400/30",
    glowClass: "shadow-teal-400/10",
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
      className="flex flex-col justify-center"
    >
      {/* Badge */}
      <div className="mb-4 flex items-center gap-3">
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-[hsl(var(--background))]"
          style={{ background: step.color }}
        >
          {step.number}
        </span>
        <span
          className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{ color: step.color, borderColor: step.color + "44" }}
        >
          {step.label}
        </span>
      </div>
      <h3 className="font-heading text-3xl font-extrabold text-white md:text-4xl">
        {step.badge}
      </h3>
      <ul className="mt-6 space-y-3">
        {step.points.map((pt) => (
          <li key={pt} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{ background: step.color + "22", color: step.color }}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-sm leading-relaxed text-slate-300">{pt}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const illuSide = (
    <motion.div
      initial={{ opacity: 0, x: step.reverse ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="flex items-center justify-center"
    >
      <div
        className={`relative w-full max-w-sm rounded-3xl border bg-gradient-to-br p-8 ${step.accentClass} ${step.borderClass} hover:shadow-2xl ${step.glowClass} transition-all duration-500 hover:-translate-y-1`}
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.accentClass} opacity-60`} />
        <div className="relative">{step.illustration}</div>
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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

// ---- SVG Illustrations ----

function DiscoverIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Map background */}
      <rect x="20" y="20" width="280" height="200" rx="16" fill="rgba(20,184,166,0.08)" stroke="rgba(20,184,166,0.2)" strokeWidth="1"/>
      {/* Grid lines */}
      {[60,100,140,180].map(y => <line key={y} x1="20" y1={y} x2="300" y2={y} stroke="rgba(20,184,166,0.08)" strokeWidth="1"/>)}
      {[80,140,200,260].map(x => <line key={x} x1={x} y1="20" x2={x} y2="220" stroke="rgba(20,184,166,0.08)" strokeWidth="1"/>)}
      {/* Bar chart */}
      <rect x="50" y="140" width="28" height="60" rx="6" fill="rgba(20,184,166,0.3)" stroke="rgba(20,184,166,0.5)" strokeWidth="1"/>
      <rect x="90" y="110" width="28" height="90" rx="6" fill="rgba(20,184,166,0.5)" stroke="rgba(20,184,166,0.7)" strokeWidth="1"/>
      <rect x="130" y="90" width="28" height="110" rx="6" fill="rgba(20,184,166,0.7)" stroke="rgba(20,184,166,0.9)" strokeWidth="1"/>
      <rect x="170" y="120" width="28" height="80" rx="6" fill="rgba(20,184,166,0.4)" stroke="rgba(20,184,166,0.6)" strokeWidth="1"/>
      <rect x="210" y="80" width="28" height="120" rx="6" fill="rgba(20,184,166,0.9)" stroke="rgba(20,184,166,1)" strokeWidth="1"/>
      {/* Trend line */}
      <polyline points="64,155 104,125 144,100 184,132 224,90" stroke="rgba(251,191,36,0.8)" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
      {/* Map pins */}
      <circle cx="240" cy="55" r="10" fill="rgba(20,184,166,0.8)" stroke="white" strokeWidth="1.5"/>
      <circle cx="240" cy="55" r="4" fill="white"/>
      <circle cx="270" cy="45" r="7" fill="rgba(251,191,36,0.8)" stroke="white" strokeWidth="1.5"/>
      <circle cx="270" cy="45" r="3" fill="white"/>
      {/* Search icon */}
      <circle cx="268" cy="160" r="18" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5"/>
      <circle cx="265" cy="157" r="9" fill="none" stroke="rgba(251,191,36,0.8)" strokeWidth="2"/>
      <line x1="271" y1="163" x2="278" y2="170" stroke="rgba(251,191,36,0.8)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Brand board bg */}
      <rect x="20" y="20" width="280" height="200" rx="16" fill="rgba(251,146,60,0.06)" stroke="rgba(251,146,60,0.18)" strokeWidth="1"/>
      {/* Color palette circles */}
      <circle cx="60" cy="55" r="22" fill="rgba(20,184,166,0.8)" stroke="white" strokeWidth="1.5"/>
      <circle cx="108" cy="55" r="22" fill="rgba(251,191,36,0.8)" stroke="white" strokeWidth="1.5"/>
      <circle cx="156" cy="55" r="22" fill="rgba(99,102,241,0.8)" stroke="white" strokeWidth="1.5"/>
      <circle cx="204" cy="55" r="22" fill="rgba(251,146,60,0.8)" stroke="white" strokeWidth="1.5"/>
      {/* Wireframe lines */}
      <rect x="40" y="100" width="110" height="80" rx="8" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.3)" strokeWidth="1.5"/>
      <rect x="50" y="110" width="90" height="14" rx="4" fill="rgba(251,146,60,0.2)"/>
      <rect x="50" y="132" width="60" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="50" y="146" width="75" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="50" y="160" width="45" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
      {/* Journey map arrows */}
      <rect x="170" y="100" width="110" height="80" rx="8" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.3)" strokeWidth="1.5"/>
      <circle cx="195" cy="130" r="10" fill="rgba(20,184,166,0.5)" stroke="rgba(20,184,166,0.8)" strokeWidth="1.5"/>
      <line x1="205" y1="130" x2="220" y2="130" stroke="rgba(251,146,60,0.6)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="230" cy="130" r="10" fill="rgba(251,191,36,0.5)" stroke="rgba(251,191,36,0.8)" strokeWidth="1.5"/>
      <line x1="240" y1="130" x2="255" y2="130" stroke="rgba(251,146,60,0.6)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="265" cy="130" r="10" fill="rgba(251,146,60,0.5)" stroke="rgba(251,146,60,0.8)" strokeWidth="1.5"/>
      {/* Pen tool */}
      <path d="M 245 175 L 270 195 L 280 180 L 265 165 Z" fill="rgba(251,191,36,0.3)" stroke="rgba(251,191,36,0.7)" strokeWidth="1.5"/>
      <circle cx="245" cy="175" r="4" fill="rgba(251,191,36,0.8)"/>
    </svg>
  );
}

function DevelopIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Laptop */}
      <rect x="30" y="30" width="180" height="120" rx="10" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5"/>
      <rect x="38" y="38" width="164" height="104" rx="6" fill="rgba(14,14,40,0.6)" stroke="rgba(96,165,250,0.15)" strokeWidth="1"/>
      {/* Code lines */}
      <rect x="48" y="50" width="60" height="6" rx="3" fill="rgba(20,184,166,0.7)"/>
      <rect x="55" y="64" width="90" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="55" y="78" width="70" height="6" rx="3" fill="rgba(251,191,36,0.5)"/>
      <rect x="55" y="92" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="48" y="106" width="50" height="6" rx="3" fill="rgba(20,184,166,0.5)"/>
      <rect x="55" y="120" width="80" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
      {/* Laptop base */}
      <rect x="20" y="150" width="200" height="8" rx="4" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.3)" strokeWidth="1"/>
      {/* Mobile */}
      <rect x="230" y="60" width="60" height="110" rx="10" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5"/>
      <rect x="237" y="72" width="46" height="86" rx="4" fill="rgba(14,14,40,0.6)"/>
      <circle cx="260" cy="160" r="4" fill="rgba(96,165,250,0.4)"/>
      {/* Booking UI dots on mobile */}
      <rect x="242" y="80" width="36" height="20" rx="4" fill="rgba(20,184,166,0.3)" stroke="rgba(20,184,166,0.5)" strokeWidth="1"/>
      <rect x="242" y="106" width="16" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="262" y="106" width="16" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="242" y="120" width="36" height="8" rx="3" fill="rgba(255,255,255,0.1)"/>
      <rect x="242" y="134" width="36" height="12" rx="4" fill="rgba(20,184,166,0.5)"/>
      {/* AI / flow diagram */}
      <circle cx="70" cy="205" r="14" fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5"/>
      <path d="M 63 205 L 67 209 L 77 199" stroke="rgba(96,165,250,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="84" y1="205" x2="110" y2="205" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="124" cy="205" r="14" fill="rgba(251,191,36,0.2)" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5"/>
      <text x="120" y="210" fontSize="12" fill="rgba(251,191,36,0.9)" fontFamily="monospace">AI</text>
      <line x1="138" y1="205" x2="164" y2="205" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
      <circle cx="178" cy="205" r="14" fill="rgba(20,184,166,0.2)" stroke="rgba(20,184,166,0.5)" strokeWidth="1.5"/>
      <path d="M 171 205 L 175 209 L 185 199" stroke="rgba(20,184,166,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DeliverIllustration() {
  return (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* World map outline hint */}
      <rect x="20" y="20" width="280" height="200" rx="16" fill="rgba(20,184,166,0.05)" stroke="rgba(20,184,166,0.15)" strokeWidth="1"/>
      {/* Growth chart */}
      <polyline points="40,180 80,160 120,130 160,100 200,70 240,50 280,35" stroke="rgba(20,184,166,0.8)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="40,180 80,160 120,130 160,100 200,70 240,50 280,35 280,190 40,190" fill="rgba(20,184,166,0.08)"/>
      {/* Arrow tip */}
      <polygon points="275,25 285,40 265,40" fill="rgba(20,184,166,0.9)"/>
      {/* Data points */}
      {[[80,160],[120,130],[160,100],[200,70],[240,50]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="rgba(20,184,166,0.9)" stroke="white" strokeWidth="1.5"/>
      ))}
      {/* Rank badges */}
      <rect x="40" y="30" width="70" height="30" rx="8" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5"/>
      <text x="52" y="50" fontSize="11" fill="rgba(251,191,36,0.9)" fontFamily="sans-serif" fontWeight="bold">#1 SEO</text>
      {/* Traffic arrows */}
      <path d="M 200 130 Q 230 110 250 90" stroke="rgba(251,146,60,0.6)" strokeWidth="1.5" strokeDasharray="4 2" fill="none" markerEnd="url(#arrow)"/>
      <path d="M 150 150 Q 190 130 220 110" stroke="rgba(251,146,60,0.4)" strokeWidth="1.5" strokeDasharray="4 2" fill="none"/>
      {/* Campaign dashboard minicard */}
      <rect x="30" y="110" width="90" height="50" rx="8" fill="rgba(14,14,40,0.5)" stroke="rgba(96,165,250,0.3)" strokeWidth="1"/>
      <rect x="38" y="118" width="35" height="6" rx="3" fill="rgba(96,165,250,0.4)"/>
      <rect x="38" y="130" width="55" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
      <rect x="38" y="142" width="45" height="6" rx="3" fill="rgba(20,184,166,0.5)"/>
    </svg>
  );
}

// ---- Dotted Connector ----
function DottedConnector({ reverse }: { reverse: boolean }) {
  return (
    <div className="relative hidden h-24 lg:block">
      <svg
        viewBox="0 0 1200 96"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            reverse
              ? "M 1100 8 C 900 8, 800 88, 600 88 C 400 88, 300 8, 100 8"
              : "M 100 8 C 300 8, 400 88, 600 88 C 800 88, 900 8, 1100 8"
          }
          stroke="rgba(20,184,166,0.35)"
          strokeWidth="2"
          strokeDasharray="8 6"
          strokeLinecap="round"
        />
        {/* Arrow head */}
        {!reverse && <polygon points="1090,3 1105,8 1090,13" fill="rgba(20,184,166,0.5)"/>}
        {reverse && <polygon points="110,3 95,8 110,13" fill="rgba(20,184,166,0.5)"/>}
      </svg>
    </div>
  );
}

export default function HowWeWork() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,10%)] via-[hsl(224,50%,8%)] to-[hsl(220,45%,6%)]" />
      {/* Subtle ambient blobs */}
      <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="container-wide relative px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-400">
            Our Process
          </p>
          <h2 className="font-heading text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            From insight to scalable growth for travel brands, destinations, and operators.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={step.number}>
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && <DottedConnector reverse={step.reverse} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
