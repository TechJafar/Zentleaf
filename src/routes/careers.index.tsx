import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { ButtonLink, CtaBand, PageHero, Reveal, Section, SectionHeading } from "@/components/kit";
import { images, jobs } from "@/data/site";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers | Zentleaf" },
      {
        name: "description",
        content:
          "Join Zentleaf: engineering, design, AI and delivery roles building custom digital solutions for clients.",
      },
      { property: "og:title", content: "Careers at Zentleaf" },
      {
        property: "og:description",
        content: "Work on real client problems with a team that owns delivery end to end.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

import { engineeringCulture, hiringSteps, perks } from "@/data/overhaul";

function CareersPage() {
  const [query, setQuery] = useState("");
  const filtered = jobs.filter((j) =>
    (j.title + j.team + j.location).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build software that people actually use"
        body="We are a team of engineers, designers and delivery specialists solving real business problems for clients across sectors."
        image={images.team}
      >
        <ButtonLink to="/careers/apply">Start an application</ButtonLink>
        <ButtonLink to="/contact" variant="inverted" arrow={false}>
          Talk to us
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="How we engineer" title="Engineering Culture & Standards" />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {engineeringCulture.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07} className="bg-background">
              <div className="h-full p-8">
                <h3 className="display-3 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Open positions" title="Current roles" />
        <div className="mt-10 max-w-md">
          <label htmlFor="job-search" className="sr-only">
            Search roles
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="job-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by role, team or location"
              className="w-full rounded-sm border border-input bg-background py-3 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 border border-border bg-background p-10 text-center text-muted-foreground">
            No roles match that search. Try a different term, or send us a speculative message.
          </p>
        ) : (
          <div className="mt-12 border-t border-border">
            {filtered.map((job, i) => (
              <Reveal key={job.slug} delay={i * 0.05}>
                <Link
                  to="/careers/$slug"
                  params={{ slug: job.slug }}
                  className="group grid gap-2 border-b border-border py-7 transition-colors hover:bg-background md:grid-cols-[1.4fr_1fr_0.8fr_auto] md:items-center md:gap-8 md:px-4"
                >
                  <h3 className="display-3 text-xl transition-colors group-hover:text-primary">
                    {job.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{job.team}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.location} · {job.type}
                  </p>
                  <ArrowRight
                    className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <img
              src={images.product}
              alt="Working at Zentleaf"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <div>
            <p className="eyebrow mb-5">Life at Zentleaf</p>
            <Reveal>
              <h2 className="display-2">Remote-friendly, delivery-focused</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead mt-5">
                We work in small project teams with clear ownership, regular client contact and
                honest retrospectives. Nobody is handed a specification and left alone with it.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-muted-foreground">
                We hire for judgement as much as for technical range: the ability to ask the right
                question about a requirement is what makes the rest of the work worthwhile.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Benefits" title="Perks & Professional Development" />
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="bg-background p-7">
              <h3 className="display-3 text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Hiring" title="Our Transparent 4-Step Hiring Process" />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {hiringSteps.map((s, i) => (
            <Reveal
              as="li"
              key={s.number}
              delay={i * 0.07}
              className="relative border-t-2 border-primary pt-6"
            >
              <span className="font-display text-sm font-semibold text-primary">{s.number}</span>
              <h3 className="mt-3 display-3 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Nothing listed that fits?"
        body="Send us a note about what you do and the kind of work you want to be doing. We read everything."
        primaryLabel="Get in touch"
        secondary={false}
      />
    </>
  );
}


