import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Speed" },
  { label: "Quality" },
  { label: "Scalable" },
  { label: "Simple" },
  { label: "Affordable" },
  { label: "All-in-one" },
];

const columns = [
  {
    key: "tripup",
    label: "TripUp Studio",
    highlight: true,
    values: [true, true, true, true, true, true],
  },
  {
    key: "freelancers",
    label: "Freelancers",
    highlight: false,
    values: [false, true, false, true, true, false],
  },
  {
    key: "inhouse",
    label: "In-house teams",
    highlight: false,
    values: [true, true, false, false, false, false],
  },
  {
    key: "diy",
    label: "DIY tools",
    highlight: false,
    values: [false, false, false, true, true, false],
  },
];

function CheckIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15">
      <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
    </span>
  );
}

function CrossIcon() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted/60">
      <X className="h-3.5 w-3.5 text-muted-foreground/50" strokeWidth={2.5} />
    </span>
  );
}

/* ── Desktop / Tablet table ───────────────────────────────────────── */
function DesktopTable({ inView }: { inView: boolean }) {
  return (
    <div className="hidden md:block overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr>
            {/* empty first cell */}
            <th className="w-36 border-b border-border bg-card px-6 py-5 text-left" />
            {columns.map((col, ci) => (
              <th
                key={col.key}
                className={`border-b border-border px-6 py-5 text-center align-middle ${
                  col.highlight
                    ? "bg-primary/8 border-l border-r border-primary/20"
                    : "bg-card"
                }`}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: ci * 0.08 }}
                  className={`font-heading text-sm font-bold ${
                    col.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {col.label}
                </motion.span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <motion.tr
              key={row.label}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + ri * 0.07 }}
              className="group transition-colors hover:bg-muted/30"
            >
              <td className="border-b border-border bg-card px-6 py-4 text-sm font-medium text-foreground group-hover:bg-muted/30">
                {row.label}
              </td>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`border-b border-border px-6 py-4 text-center align-middle ${
                    col.highlight
                      ? "bg-primary/5 group-hover:bg-primary/10 border-l border-r border-primary/15"
                      : "bg-card group-hover:bg-muted/30"
                  }`}
                >
                  {col.values[ri] ? <CheckIcon /> : <CrossIcon />}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Mobile stacked cards ─────────────────────────────────────────── */
function MobileCards({ inView }: { inView: boolean }) {
  return (
    <div className="grid gap-4 md:hidden">
      {columns.map((col, ci) => (
        <motion.div
          key={col.key}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: ci * 0.1 }}
          className={`rounded-2xl border p-5 ${
            col.highlight
              ? "border-primary/30 bg-primary/5"
              : "border-border bg-card"
          }`}
        >
          <p
            className={`font-heading text-base font-bold mb-4 ${
              col.highlight ? "text-primary" : "text-foreground"
            }`}
          >
            {col.label}
          </p>
          <ul className="space-y-3">
            {rows.map((row, ri) => (
              <li key={row.label} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{row.label}</span>
                {col.values[ri] ? <CheckIcon /> : <CrossIcon />}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Main export ──────────────────────────────────────────────────── */
export default function ComparisonTable() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Making the decision easy
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Finally, everything your travel business{" "}
            <br className="hidden md:block" />
            needs, in one place.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Compare traditional approaches with the TripUp Studio full-stack model.
          </p>
        </motion.div>

        <DesktopTable inView={inView} />
        <MobileCards inView={inView} />
      </div>
    </section>
  );
}
