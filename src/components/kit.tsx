import { Link } from "@tanstack/react-router";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUp, Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------- motion --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      animate={inView || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* --------------------------------- buttons --------------------------------- */

const btnBase =
  "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover hover:gap-3",
  outline:
    "border border-current text-foreground hover:bg-ink hover:text-ink-foreground hover:border-ink",
  inverted:
    "border border-ink-foreground/50 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
  ghost: "px-0 py-0 text-foreground hover:text-primary hover:gap-3",
} as const;

type BtnProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  arrow?: boolean;
};

export function ButtonLink({
  to,
  params,
  variant = "primary",
  className,
  children,
  arrow = true,
}: BtnProps & { to: string; params?: Record<string, string> }) {
  return (
    <Link to={to} params={params as never} className={cn(btnBase, variants[variant], className)}>
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

export function ButtonAction({
  variant = "primary",
  className,
  children,
  arrow = false,
  ...rest
}: BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(btnBase, variants[variant], className)} {...rest}>
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

/* --------------------------------- headings -------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  inverted = false,
  action,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  inverted?: boolean;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <Reveal>
          <h2 className={cn("display-2", inverted && "text-ink-foreground")}>{title}</h2>
        </Reveal>
        {body && (
          <Reveal delay={0.08}>
            <p className={cn("lead mt-5", inverted && "text-ink-foreground/70")}>{body}</p>
          </Reveal>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "ink";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        tone === "surface" && "bg-surface",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

/* ----------------------------------- hero ---------------------------------- */

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  full = false,
  children,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  image: string;
  full?: boolean;
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();
  return (
    <header
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-ink",
        full ? "min-h-[92svh]" : "min-h-[58svh] md:min-h-[66svh]",
      )}
    >
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40"
        aria-hidden="true"
      />
      <div className="shell w-full pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.p
              className="eyebrow mb-5"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className={cn("text-ink-foreground", full ? "display-1" : "display-2")}
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>
          {body && (
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75 md:text-xl"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {body}
            </motion.p>
          )}
          {children && (
            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.44 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------- cards ---------------------------------- */

export function LinkCard({
  to,
  params,
  kicker,
  title,
  body,
  image,
  className,
}: {
  to: string;
  params?: Record<string, string>;
  kicker?: string;
  title: string;
  body?: string;
  image?: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      className={cn(
        "group flex h-full flex-col border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      {image && (
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {kicker && <p className="eyebrow mb-3">{kicker}</p>}
        <h3 className="display-3 text-xl">{title}</h3>
        {body && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
        )}
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

export function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-border pt-5">
      <p className="font-display text-3xl font-semibold text-primary md:text-4xl">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

/* -------------------------------- carousel --------------------------------- */

export function Carousel({ children, label }: { children: ReactNode[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 520), behavior: "smooth" });
  };
  return (
    <div className="relative" role="group" aria-roledescription="carousel" aria-label={label}>
      <div
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div key={i} className="w-[82vw] shrink-0 snap-start sm:w-[60vw] md:w-[42vw] lg:w-[30vw]">
            {child}
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous items"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next items"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/* ----------------------------------- faq ----------------------------------- */

export function Faqs({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-border">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-medium transition-colors hover:text-primary"
              >
                {item.q}
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-400",
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------------------------- cta ------------------------------------ */

export function CtaBand({
  title = "Tell us what you need to build.",
  body = "Share your requirement and we will come back with an approach, a shape for the work and an honest view of what it takes.",
  primaryLabel = "Discuss your project",
  secondary = true,
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  secondary?: boolean;
}) {
  return (
    <Section tone="ink">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <Reveal>
            <h2 className="display-2 text-ink-foreground">{title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-lg text-ink-foreground/70">{body}</p>
          </Reveal>
        </div>
        <Reveal delay={0.14} className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink to="/contact">{primaryLabel}</ButtonLink>
          {secondary && (
            <ButtonLink to="/services" variant="inverted">
              Explore services
            </ButtonLink>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ scroll to top ------------------------------ */

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-sm bg-ink text-ink-foreground shadow-lift transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

