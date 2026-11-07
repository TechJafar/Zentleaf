import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ButtonLink, CtaBand, LinkCard, Reveal, Section, SectionHeading } from "@/components/kit";
import { CapabilitiesEngine } from "@/components/CapabilitiesEngine";
import { homeMetrics } from "@/data/overhaul";
import {
  caseStudies,
  images,
  industries,
  insights,
  processSteps,
  techStack,
  whyZentleaf,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zentleaf | Custom Software, Web, Mobile & AI Development" },
      {
        name: "description",
        content:
          "Zentleaf builds digital solutions around your business requirements — websites, web and mobile apps, custom software, AI solutions and business automation.",
      },
      { property: "og:title", content: "Zentleaf | Custom Software, Web, Mobile & AI Development" },
      {
        property: "og:description",
        content:
          "Understand, design, develop, launch and support. Zentleaf turns business requirements into custom digital products.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const reduced = useReducedMotion();
  return (
    <>
      {/* Hero */}
      <header className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
        <motion.img
          src={images.heroHome}
          alt="Zentleaf engineering studio at dusk"
          width={1920}
          height={1080}
          initial={reduced ? false : { opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/35"
          aria-hidden="true"
        />

        <div className="shell w-full pb-20 pt-36 md:pb-28">
          <div className="max-w-5xl">
            <motion.p
              className="eyebrow mb-6"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Technology · Software · AI
            </motion.p>
            <motion.h1
              className="display-1 text-ink-foreground"
              initial={reduced ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              We build digital solutions around your business
            </motion.h1>
            <motion.p
              className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/75 md:text-xl"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              From websites and applications to custom software, AI solutions and business
              automation, Zentleaf designs and develops technology around your specific requirements.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <ButtonLink to="/contact">Discuss your project</ButtonLink>
              <ButtonLink to="/services" variant="inverted">
                Explore our services
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 flex items-center gap-3 text-ink-foreground/60"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.span
              animate={reduced ? { y: 0 } : { y: [0, 8, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </motion.span>
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          </motion.div>
        </div>
      </header>

      {/* What Zentleaf does */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">What Zentleaf does</p>
            <Reveal>
              <h2 className="display-2">
                You bring the requirement. We build the right digital solution around it.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col gap-6">
            <Reveal delay={0.08}>
              <p className="lead">
                Zentleaf is a technology partner, not a product vendor. Every engagement starts with
                your business problem — the people involved, the constraints, and what a good
                outcome would actually change — before any technology is chosen.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-muted-foreground">
                We then design, develop, test, launch and support the solution: a website, an
                application, a mobile product, custom software, an AI capability, or the automation
                that removes work from your operations. Different clients need different things;
                that is the point.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 rule-top pt-6 text-sm font-medium">
                {["Understand", "Design", "Build", "Launch", "Support"].map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-3">
                    {i > 0 && <span className="text-primary">→</span>}
                    {step}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Metrics */}
      <section className="border-y border-border bg-surface">
        <div className="shell grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {homeMetrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05} className="bg-surface px-2 py-10 md:px-6">
              <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities engine */}
      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title="Zentleaf Solutions & Capabilities Engine"
          body="Start from the business objective or from the engineering practice — both lead to the same delivery teams."
          action={
            <ButtonLink to="/services" variant="ghost">
              All services
            </ButtonLink>
          }
        />
        <CapabilitiesEngine />
      </Section>

      {/* How we work */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="How we work"
          title="Requirement to support, in seven steps"
          body="A predictable delivery model, adapted in depth to the size and risk of the engagement."
        />
        <ol className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.06} className="bg-surface">
              <div className="flex h-full flex-col p-8">
                <span className="font-display text-sm font-semibold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-4 display-3 text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal as="li" delay={0.42} className="bg-primary text-primary-foreground">
            <Link
              to="/about/$slug"
              params={{ slug: "process" }}
              className="group flex h-full flex-col justify-between p-8"
            >
              <h3 className="display-3 text-xl text-primary-foreground">See the full process</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Read more
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        </ol>
      </Section>

      {/* Technology */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={images.cloud}
                alt="Data centre corridor representing Zentleaf's platform engineering work"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
          </Reveal>
          <div>
            <p className="eyebrow mb-5">Technology &amp; expertise</p>
            <Reveal>
              <h2 className="display-2">Modern engineering, chosen for the problem</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead mt-5">
                We work with a deliberately focused stack so our teams are deep rather than
                superficially broad — and we choose within it based on your requirement, not habit.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {techStack.map((group, i) => (
                <Reveal key={group.group} delay={0.1 + i * 0.06}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {group.group}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm">
                    {group.items.map((item) => (
                      <li key={item} className="border-b border-border pb-0.5">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <ButtonLink to="/about/$slug" params={{ slug: "technology" }} variant="outline">
                Our technology approach
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Case studies */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Our work"
          title="How we approach different engagements"
          body="Demonstration projects showing the types of problems we work on and the approaches we take."
          action={
            <ButtonLink to="/case-studies" variant="ghost">
              All case studies
            </ButtonLink>
          }
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {caseStudies.slice(0, 2).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="group block h-full bg-background"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="eyebrow">{c.industry}</p>
                  <h3 className="mt-4 display-3">{c.title}</h3>
                  <p className="mt-4 text-muted-foreground">{c.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read the case study
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {caseStudies.slice(2).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <LinkCard
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                kicker={c.industry}
                title={c.title}
                body={c.summary}
                className="bg-background"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Context matters as much as code"
          body="We work across sectors where software has to respect real operational and regulatory constraints."
          action={
            <ButtonLink to="/industries" variant="ghost">
              All industries
            </ButtonLink>
          }
        />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.04} className="bg-background">
              <Link
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                className="group flex h-full flex-col p-7 transition-colors hover:bg-surface"
              >
                <h3 className="display-3 text-lg transition-colors group-hover:text-primary">
                  {ind.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{ind.short}</p>
                <ArrowRight
                  className="mt-6 h-4 w-4 text-primary transition-transform group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why Zentleaf */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Why Zentleaf</p>
            <Reveal>
              <h2 className="display-2">Built to be a long-term technology partner</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden">
                <img
                  src={images.team}
                  alt="Zentleaf team working through a requirement session"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <ul className="flex flex-col">
            {whyZentleaf.map((w, i) => (
              <Reveal
                as="li"
                key={w.title}
                delay={i * 0.07}
                className="border-b border-border py-7 first:border-t"
              >
                <h3 className="display-3 text-xl">{w.title}</h3>
                <p className="mt-3 text-muted-foreground">{w.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Insights */}
      <Section>
        <SectionHeading
          eyebrow="Insights"
          title="Latest thinking"
          action={
            <ButtonLink to="/insights" variant="ghost">
              View all insights
            </ButtonLink>
          }
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {insights.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.07}>
              <LinkCard
                to="/insights/$slug"
                params={{ slug: a.slug }}
                image={a.image}
                kicker={`${a.category} · ${a.readingTime}`}
                title={a.title}
                body={a.excerpt}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}


