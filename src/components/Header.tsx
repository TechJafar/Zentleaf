import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { services, industries } from "@/data/site";
import { cn } from "@/lib/utils";

type NavChild = { label: string; to: string; params?: Record<string, string> };
type NavItem = { label: string; to: string; children?: NavChild[] };

const nav: NavItem[] = [
  {
    label: "Services",
    to: "/services",
    children: services.map((s) => ({
      label: s.title,
      to: "/services/$slug",
      params: { slug: s.slug },
    })),
  },
  {
    label: "Industries",
    to: "/industries",
    children: industries.map((i) => ({
      label: i.title,
      to: "/industries/$slug",
      params: { slug: i.slug },
    })),
  },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Insights", to: "/insights" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Zentleaf", to: "/about" },
      { label: "Our Approach", to: "/about/$slug", params: { slug: "approach" } },
      { label: "Our Process", to: "/about/$slug", params: { slug: "process" } },
      { label: "Technology", to: "/about/$slug", params: { slug: "technology" } },
    ],
  },
  { label: "Careers", to: "/careers" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || !isHome || openMenu !== null;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-foreground"
      >
        Skip to content
      </a>
      <header
        onMouseLeave={() => setOpenMenu(null)}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-border bg-background shadow-[0_1px_0_0_var(--color-border)]"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-6 md:h-20">
          <Link to="/" aria-label="Zentleaf home" className="shrink-0">
            <Logo inverted={!solid} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors",
                    solid
                      ? "text-foreground hover:text-primary"
                      : "text-ink-foreground hover:text-ink-foreground/70",
                  )}
                  activeProps={{ className: "text-primary" }}
                  onFocus={() => setOpenMenu(item.children ? item.label : null)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-flex"
            >
              Discuss your project
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={cn("p-2 lg:hidden", solid ? "text-foreground" : "text-ink-foreground")}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {openMenu && (
            <motion.div
              key={openMenu}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden border-t border-border bg-background lg:block"
            >
              <div className="shell grid grid-cols-2 gap-x-10 gap-y-1 py-8 xl:grid-cols-3">
                {nav
                  .find((n) => n.label === openMenu)
                  ?.children?.map((child) => (
                    <Link
                      key={child.label + child.to}
                      to={child.to}
                      params={child.params as never}
                      className="group flex items-center justify-between gap-4 border-b border-border/70 py-3 text-sm font-medium transition-colors hover:text-primary"
                    >
                      {child.label}
                      <ArrowRight
                        className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="shell flex h-[72px] shrink-0 items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="shell flex-1 pb-16 pt-6">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-border py-4">
                  <Link to={item.to} className="font-display text-2xl font-semibold">
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-3 flex flex-col gap-2.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.label + child.to}
                          to={child.to}
                          params={child.params as never}
                          className="text-sm text-muted-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-primary px-6 py-4 font-semibold text-primary-foreground"
              >
                Discuss your project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

