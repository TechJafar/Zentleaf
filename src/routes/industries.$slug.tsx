import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import {
  ButtonLink,
  CtaBand,
  LinkCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/kit";
import { caseStudies, industryBySlug, serviceBySlug } from "@/data/site";
import { industryCompliance } from "@/data/overhaul";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = industryBySlug(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Industry unavailable | Zentleaf" }, { name: "robots", content: "noindex" }],
      };
    }
    const { industry } = loaderData;
    const title = `${industry.title} Software Solutions | Zentleaf`;
    return {
      meta: [
        { title },
        { name: "description", content: industry.short },
        { property: "og:title", content: title },
        { property: "og:description", content: industry.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();
  const compliance = industryCompliance[industry.slug];
  const related = caseStudies
    .filter((c) => c.industry.toLowerCase() === industry.title.toLowerCase())
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        body={industry.short}
        image={industry.image}
      >
        <ButtonLink to="/contact">Discuss your project</ButtonLink>
        <ButtonLink to="/industries" variant="inverted">
          All industries
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <p className="eyebrow">Overview</p>
          <Reveal>
            <p className="display-3 max-w-3xl font-normal leading-snug">{industry.intro}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Challenges</p>
            <Reveal>
              <h2 className="display-2">What makes this sector hard</h2>
            </Reveal>
            <ul className="mt-8 flex flex-col">
              {industry.challenges.map((c, i) => (
                <Reveal
                  as="li"
                  key={c}
                  delay={i * 0.05}
                  className="border-b border-border py-4 first:border-t"
                >
                  {c}
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">Opportunities</p>
            <Reveal>
              <h2 className="display-2">Where digital changes the outcome</h2>
            </Reveal>
            <ul className="mt-8 flex flex-col gap-3">
              {industry.opportunities.map((o, i) => (
                <Reveal as="li" key={o} delay={i * 0.05} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {o}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Solutions" title="What Zentleaf provides" />
            <ul className="mt-8 flex flex-col">
              {industry.solutions.map((s, i) => (
                <Reveal
                  as="li"
                  key={s}
                  delay={i * 0.05}
                  className="border-b border-border py-4 first:border-t"
                >
                  {s}
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Examples" title="Applications we build" />
            <ul className="mt-8 flex flex-col">
              {industry.applications.map((a, i) => (
                <Reveal
                  as="li"
                  key={a}
                  delay={i * 0.05}
                  className="border-b border-border py-4 first:border-t"
                >
                  {a}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {compliance && (
        <Section tone="ink">
          <SectionHeading
            eyebrow="Compliance"
            title="Regulatory Compliance & Domain Architecture"
            inverted
          />
          <div className="mt-12 grid gap-px bg-ink-foreground/15 md:grid-cols-2">
            {compliance.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} className="bg-ink">
                <div className="h-full p-8">
                  <h3 className="display-3 text-lg text-ink-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm text-ink-foreground/65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <h3 className="mt-16 eyebrow">Industry benchmarks</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {compliance.benchmarks.map((b) => (
              <div key={b.label} className="border-t border-ink-foreground/20 pt-5">
                <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                  {b.value}
                </p>
                <p className="mt-2 text-sm text-ink-foreground/65">{b.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-foreground/45">
            Typical ranges observed across comparable engagements; actual results depend on baseline
            and scope.
          </p>
        </Section>
      )}

      <Section>
        <SectionHeading eyebrow="Services" title="Relevant Zentleaf services" />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industry.services.map((slug, i) => {
            const svc = serviceBySlug(slug);
            if (!svc) return null;
            return (
              <Reveal key={slug} delay={i * 0.05}>
                <LinkCard
                  to="/services/$slug"
                  params={{ slug }}
                  title={svc.title}
                  body={svc.short}
                />
              </Reveal>
            );
          })}
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="surface">
          <SectionHeading eyebrow="Related work" title="Demonstration projects in this sector" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {related.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.07}>
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
        </Section>
      )}

      <CtaBand title={`Build for ${industry.title.toLowerCase()}`} />
    </>
  );
}


