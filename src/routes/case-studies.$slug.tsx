import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { BadgeCheck, CheckCircle2 } from "lucide-react";
import {
  ButtonAction,
  ButtonLink,
  LinkCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/kit";
import { caseStudies, caseStudyBySlug, serviceBySlug } from "@/data/site";
import { caseReports } from "@/data/overhaul";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = caseStudyBySlug(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study unavailable | Zentleaf" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} | Zentleaf Case Study`;
    return {
      meta: [
        { title },
        { name: "description", content: study.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: study.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/case-studies/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/case-studies/${params.slug}` }],
    };
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { study } = Route.useLoaderData();
  const report = caseReports[study.slug];
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={study.industry}
        title={study.title}
        body={study.summary}
        image={study.image}
      >
        <ButtonLink to="/contact">Discuss a Similar Requirement</ButtonLink>
      </PageHero>

      {/* Disclosure notice */}
      <div className="border-b border-border bg-surface">
        <div className="shell py-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Demonstration project.</span>{" "}
          This case study illustrates the kind of work Zentleaf takes on and the approach we apply. Client names, metrics and testimonials are representative examples, not verified client records.
        </div>
      </div>


      {report && (
        <section className="border-b border-border bg-background">
          <div className="shell grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
            {report.kpis.map((k, i) => (
              <Reveal key={k.label} delay={i * 0.05} className="bg-background px-2 py-8 md:px-6">
                <p className="font-display text-2xl font-semibold text-primary md:text-4xl">
                  {k.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Section>
        {report && (
          <div className="grid gap-8 border border-border p-8 sm:grid-cols-2 lg:grid-cols-4">
            <Info label="Client" value={study.clientType} />
            <Info label="Project timeline" value={report.timeline} />
            <Info label="Budget tier" value={report.budget} />
            <div>
              <p className="eyebrow">Team structure</p>
              <ul className="mt-2 text-sm">
                {report.team.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <article className="mt-16 grid gap-14 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
          <div className="hidden lg:block">
            <p className="eyebrow sticky top-32">Technical report</p>
          </div>
          <div className="flex max-w-3xl flex-col gap-12">
            <Reveal>
              <h2 className="display-2">The problem</h2>
              <p className="lead mt-5">{study.problem}</p>
              <ul className="mt-6 flex flex-col">
                {study.requirements.map((r) => (
                  <li key={r} className="border-b border-border py-3 first:border-t">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 className="display-2">Approach</h2>
              <p className="mt-5 text-muted-foreground">{study.strategy}</p>
              <p className="mt-4 text-muted-foreground">{study.development}</p>
            </Reveal>
            <Reveal>
              <h2 className="display-2">Outcomes</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {study.outcomes.map((o) => (
                  <li key={o} className="border-l-2 border-primary pl-5">
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </article>
      </Section>

      {report && (
        <>
          <Section tone="surface">
            <SectionHeading eyebrow="Architecture" title="Technical Architecture Breakdown" />
            <div className="mt-12 overflow-x-auto border border-border bg-background">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="bg-surface">
                    <th scope="col" className="p-5 font-semibold">
                      Legacy Bottleneck
                    </th>
                    <th scope="col" className="p-5 font-semibold text-primary">
                      Zentleaf Solution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {report.beforeAfter.map((r) => (
                    <tr key={r.legacy} className="border-t border-border align-top">
                      <td className="p-5 text-muted-foreground">{r.legacy}</td>
                      <td className="p-5">{r.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {report.stack.map((g) => (
                <div key={g.category}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {g.category}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <li
                        key={t}
                        className="rounded-sm border border-border bg-background px-3 py-1.5 text-sm"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <Reveal>
              <figure className="mx-auto max-w-4xl border border-border p-8 md:p-12">
                <blockquote className="display-3 font-normal leading-snug">
                  “{report.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display font-semibold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {report.testimonial.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{report.testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {report.testimonial.title}, {report.testimonial.company}
                    </p>
                  </div>
                  <span className="ml-auto hidden items-center gap-1.5 rounded-sm border border-primary/40 px-3 py-1 text-xs font-semibold text-primary sm:inline-flex">
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" /> Verified client
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </Section>
        </>
      )}

      <Section tone="surface">
        <SectionHeading eyebrow="More work" title="Other case studies" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {others.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <LinkCard
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                image={c.image}
                kicker={c.industry}
                title={c.title}
                body={c.summary}
                className="bg-background"
              />
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Services used:{" "}
          {study.services
            .map((s) => serviceBySlug(s)?.title)
            .filter(Boolean)
            .join(", ")}
        </p>
      </Section>

      <ScopingForm sprints={report?.sprints} />
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <p className="mt-2 text-sm">{value}</p>
    </div>
  );
}

const scopes = [
  { label: "Pilot / MVP (4–6 sprints, 8–12 weeks)", value: "pilot" },
  { label: "Full platform build (8–12 sprints, 16–24 weeks)", value: "platform" },
  { label: "Modernization of an existing system (6–10 sprints)", value: "modernize" },
];

function ScopingForm({ sprints }: { sprints?: string | undefined }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("pilot");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const cls =
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("Please enter a valid work email.");
    const existing = JSON.parse(localStorage.getItem("Zentleaf-enquiries") ?? "[]");
    existing.push({
      email,
      scope,
      notes,
      source: "case-study",
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("Zentleaf-enquiries", JSON.stringify(existing));
    setSent(true);
  };

  return (
    <Section tone="ink">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-4">Scope a similar requirement</p>
          <h2 className="display-2 text-ink-foreground">Estimate your sprint timeline</h2>
          {sprints && <p className="mt-5 text-ink-foreground/70">{sprints}</p>}
          <p className="mt-4 text-sm text-ink-foreground/55">
            A senior engineer replies within 24 hours with a scoping outline.
          </p>
        </div>
        {sent ? (
          <div role="status" className="border border-ink-foreground/20 p-8">
            <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
            <p className="mt-4 display-3 text-ink-foreground">Scoping request received.</p>
            <p className="mt-2 text-sm text-ink-foreground/65">
              We'll reply to {email} within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="flex flex-col gap-5 text-foreground">
            <label className="flex flex-col gap-2 text-sm text-ink-foreground">
              Work email
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className={cls}
                autoComplete="email"
              />
            </label>
            {error && (
              <p role="alert" className="text-sm text-primary">
                {error}
              </p>
            )}
            <label className="flex flex-col gap-2 text-sm text-ink-foreground">
              Estimated scope
              <select value={scope} onChange={(e) => setScope(e.target.value)} className={cls}>
                {scopes.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-ink-foreground">
              Requirement summary
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={cls}
              />
            </label>
            <div>
              <ButtonAction type="submit" arrow>
                Request scoping
              </ButtonAction>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}


