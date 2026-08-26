import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoMark from "@/assets/logos/logo-mark.png";
import { useNavServices } from "@/lib/servicesApi";
import { resources } from "@/data/resources";
import { motion, AnimatePresence } from "framer-motion";
import { CALENDLY_URL } from "@/data/constants";

type MegaMenuKey = "services" | "resources";

const navLinks = [
  { label: "Our Work", to: "/our-work" },
  { label: "Why Us", to: "/why-us" },
  // { label: "Pricing", to: "/pricing" },
  // { label: "About Us", to: "/about" },
];

export default function Header() {
  const { services, categories: serviceCategories } = useNavServices();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<MegaMenuKey | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenu(null);
  }, [location]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaMenu(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleMouseEnter = (key: MegaMenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenu(key);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setMegaMenu(null), 120);
  };

  const handleMegaMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleMegaMouseLeave = () => {
    closeTimer.current = setTimeout(() => setMegaMenu(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container-wide flex h-16 items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading text-xl tracking-tight text-foreground">
          <img src={logoMark} alt="TripUp Studio logo" className="h-8 w-auto object-contain mix-blend-screen rounded-md" />
          <span><span className="font-bold">TripUp</span> Studio</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" ref={megaRef}>
          {(["services", "resources"] as const).map((key) => (
            <button
              key={key}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {key === "services" ? "Services" : "Resources"}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${megaMenu === key ? "rotate-180" : ""}`} />
            </button>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          {/* Mega Menu */}
          <AnimatePresence>
            {megaMenu && (
              <motion.div
                key={megaMenu}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                onMouseEnter={handleMegaMouseEnter}
                onMouseLeave={handleMegaMouseLeave}
                className="absolute left-0 top-full w-full border-b border-border bg-card shadow-xl"
              >
                {megaMenu === "services" ? (
                  <div className="container-wide px-6 py-8">
                    <div className="grid gap-8 lg:grid-cols-3">
                      {serviceCategories.map((cat) => (
                        <div key={cat}>
                          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{cat}</p>
                          <div className="space-y-1">
                            {services.filter((s) => s.category === cat).map((item) => {
                              const inner = (
                                <>
                                  <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                  <div>
                                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                                      {item.title}
                                      {item.comingSoon && (
                                        <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                                          Coming Soon
                                        </span>
                                      )}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{item.description}</p>
                                  </div>
                                </>
                              );
                              return item.comingSoon ? (
                                <div
                                  key={item.title}
                                  className="group flex gap-3 rounded-lg p-3 opacity-60 cursor-default"
                                >
                                  {inner}
                                </div>
                              ) : (
                                <Link
                                  key={item.title}
                                  to={item.slug}
                                  className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                                >
                                  {inner}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="container-wide grid gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
                    {resources.map((item) => (
                      <Link
                        key={item.title}
                        to={item.slug}
                        className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-secondary cursor-pointer"
                      >
                        <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button variant="hero" size="default" className="text-sm" asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-card lg:hidden"
          >
            {/* Services with categories */}
            <MobileServicesSection />
            {/* Resources */}
            <MobileSimpleSection title="Resources" items={resources} />
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-6 py-3 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="p-6">
              <Button variant="hero" className="w-full" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book a Strategy Call</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileServicesSection() {
  const { services, categories: serviceCategories } = useNavServices();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-3 text-sm font-medium text-foreground/80"
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            {serviceCategories.map((cat) => (
              <div key={cat} className="px-8 pb-2">
                <p className="py-2 text-[11px] font-bold uppercase tracking-widest text-primary">{cat}</p>
                {services.filter((s) => s.category === cat).map((item) => {
                  const content = (
                    <>
                      <p className="text-sm font-medium text-foreground flex items-center gap-2">
                        {item.title}
                        {item.comingSoon && (
                          <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                            Coming Soon
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </>
                  );
                  return item.comingSoon ? (
                    <div key={item.title} className="block px-2 py-1.5 opacity-60 cursor-default">
                      {content}
                    </div>
                  ) : (
                    <Link key={item.title} to={item.slug} className="block px-2 py-1.5">
                      {content}
                    </Link>
                  );
                })}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSimpleSection({
  title,
  items,
}: {
  title: string;
  items: { title: string; description: string; slug?: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-3 text-sm font-medium text-foreground/80"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            {items.map((item) => {
              const content = (
                <>
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </>
              );
              return item.slug ? (
                <Link key={item.title} to={item.slug} className="block px-10 py-2">
                  {content}
                </Link>
              ) : (
                <div key={item.title} className="px-10 py-2">
                  {content}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
