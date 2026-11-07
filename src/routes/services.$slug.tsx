import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  ButtonLink,
  CtaBand,
  Faqs,
  Reveal,
} from "@/components/kit";
import { TechMarquee } from "@/components/TechMarquee";
import {
  company,
  services,
  serviceBySlug,
} from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service unavailable | Zentleaf" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} Services | Zentleaf`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <>
      {/* 1. Full-Width Service Hero Banner with Overlay & Breadcrumb */}
      <header className="relative overflow-hidden bg-ink pb-16 pt-36 text-ink-foreground md:pb-20 md:pt-44">
        <div
          className="absolute inset-0 opacity-15 mix-blend-luminosity bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/95 to-ink" />

        <div className="shell relative z-10 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Zentleaf Engineering Service
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {service.title} Services
            </h1>
          </Reveal>

          {/* Breadcrumb navigation */}
          <Reveal delay={0.12}>
            <nav
              aria-label="Breadcrumb"
              className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-ink-foreground/70 sm:text-sm"
            >
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-ink-foreground/40" />
              <Link to="/services" className="transition-colors hover:text-primary">
                Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-ink-foreground/40" />
              <span className="font-semibold text-primary">{service.title}</span>
            </nav>
          </Reveal>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* PART 1: TWO-COLUMN LAYOUT AT TOP (Sidebar + Service Overview)             */}
      {/* ========================================================================= */}
      <section className="shell pt-12 md:pt-16 pb-8 md:pb-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] xl:gap-12">
          
          {/* LEFT COLUMN: Sidebar (Compact, non-sticky, top-aligned) */}
          <aside className="space-y-6">
            {/* Box 1: Our Services */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
              <div className="flex items-center gap-2.5 border-b border-border bg-muted/40 px-5 py-4">
                <Layers className="h-5 w-5 text-primary" />
                <h2 className="font-display text-base font-bold text-foreground">
                  Our Services
                </h2>
              </div>
              <nav className="p-2.5">
                <ul className="space-y-1">
                  {services.map((s) => {
                    const isActive = s.slug === service.slug;
                    return (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className={cn(
                            "group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200",
                            isActive
                              ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        >
                          <span className="truncate pr-2">{s.title}</span>
                          <ArrowRight
                            className={cn(
                              "h-4 w-4 shrink-0 transition-transform duration-200",
                              isActive
                                ? "translate-x-0.5 text-primary-foreground"
                                : "text-muted-foreground/40 group-hover:translate-x-1 group-hover:text-foreground"
                            )}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Box 2: Chat with us */}
            <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-foreground">
                Chat with us
              </h3>

              <div className="mt-4 space-y-2.5">
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-normal text-muted-foreground">
                      Call Us Directly
                    </div>
                    <div className="truncate text-xs font-bold">{company.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-normal text-muted-foreground">
                      Email Inquiries
                    </div>
                    <div className="truncate text-xs font-bold">{company.email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-4">
                <ButtonLink to="/contact" className="w-full text-center">
                  Request a Quote
                </ButtonLink>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Service Overview (Single Unified Box with Banner Image & Text) */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
              {/* Banner Image Header */}
              <div className="relative aspect-[16/8] md:aspect-[21/9] w-full overflow-hidden border-b border-border/60">
                <img
                  src={service.image}
                  alt={`${service.title} overview`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    {service.title} Overview
                  </span>
                  <h2 className="mt-2 text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-3xl">
                    {service.title} Services
                  </h2>
                </div>
              </div>

              {/* Text Description inside the same card */}
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="display-3 text-xl md:text-2xl font-bold text-foreground">
                  Strategic Execution Built Around Your Business
                </h3>
                <p className="text-base leading-relaxed font-medium text-foreground">
                  {service.intro}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PART 2: FULL-WIDTH CONTENT CONTAINER (Core Solutions, Tech Stack, etc.)    */}
      {/* ========================================================================= */}
      <section className="shell pb-16 md:pb-24 space-y-16">
        
        {/* 1. Core Solutions: Specialized Capabilities in {service.title} */}
        {service.subServices && service.subServices.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-border/60 pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Core Solutions
              </span>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Specialized Capabilities in {service.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                Structured modular offerings tailored to specific business outcomes and technical requirements.
              </p>
            </div>

            <div className="divide-y divide-border/60">
              {service.subServices.map((sub, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <Reveal key={sub.title} delay={idx * 0.04}>
                    <article className="py-10 first:pt-4 last:pb-0">
                      <div
                        className={cn(
                          "grid grid-cols-1 items-center gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] lg:gap-12",
                          !isEven && "md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]"
                        )}
                      >
                        {/* Visual Side (25-30% width) */}
                        <div
                          className={cn(
                            "overflow-hidden rounded-xl border border-border/60 bg-muted shadow-xs",
                            !isEven && "md:order-2"
                          )}
                        >
                          <img
                            src={sub.image || service.image}
                            alt={sub.title}
                            className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>

                        {/* Content Side (70-75% width: Headings & Paragraphs) */}
                        <div
                          className={cn(
                            "space-y-3.5",
                            !isEven && "md:order-1"
                          )}
                        >
                          <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                            {sub.title}
                          </h3>

                          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {sub.description}
                          </p>

                          {sub.points && sub.points.length > 0 && (
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                              {sub.points.join(". ")}.
                            </p>
                          )}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Technology Stack: Continuous Marquee */}
        <div className="space-y-6">
          <div className="border-b border-border/60 pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Technology Stack
            </span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Technologies & Tools We Use
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
              Production-proven frameworks, cloud platforms, and modern tooling we engineer with.
            </p>
          </div>

          <TechMarquee />
        </div>

        {/* 3. Included Capabilities & Concrete Deliverables */}
        <div className="border-t border-b border-border/60 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
            {/* Capabilities */}
            <div className="space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Capabilities
              </span>
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Included Capabilities & Architecture
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every project delivers comprehensive technical capabilities tailored to your workflow. We provide {service.capabilities.map((c, i) => i === 0 ? c.charAt(0).toLowerCase() + c.slice(1) : c.toLowerCase()).join(", ")}.
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Deliverables
              </span>
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Concrete Deliverables & Assets
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our transparent engineering process guarantees tangible business assets. Engagements conclude with {service.deliverables.map((d, i) => i === 0 ? d.charAt(0).toLowerCase() + d.slice(1) : d.toLowerCase()).join(", ")}.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Frequently Asked Questions */}
        <div className="space-y-6">
          <div className="border-b border-border/60 pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              FAQ
            </span>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Common Questions About {service.title}
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
              Answers to common architectural, deployment, and engagement inquiries.
            </p>
          </div>
          <Faqs items={service.faqs} />
        </div>

      </section>

      {/* 3. Full-Width Bottom CTA Band */}
      <CtaBand
        title={`Discuss your ${service.title.toLowerCase()} requirement`}
        secondary={false}
      />
    </>
  );
}



