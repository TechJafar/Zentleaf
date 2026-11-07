import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { capabilityTabs } from "@/data/overhaul";
import { cn } from "@/lib/utils";

export function CapabilitiesEngine() {
  const [active, setActive] = useState("objective");
  const reduced = useReducedMotion();
  const tab = capabilityTabs.find((t) => t.id === active) ?? capabilityTabs[0]!;

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Browse capabilities"
        className="flex flex-wrap gap-2 border-b border-border"
      >
        {capabilityTabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setActive(t.id)}
            className={cn(
              "-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors",
              active === t.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2"
        >
          {tab.items.map((c) => (
            <Link
              key={c.title}
              to="/services/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-surface"
            >
              <h3 className="display-3 transition-colors group-hover:text-primary">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.body}</p>
              <ul className="mt-5 flex flex-col gap-2 text-sm">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-primary">—</span>
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore{" "}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

