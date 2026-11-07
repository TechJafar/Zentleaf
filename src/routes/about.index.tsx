import { createFileRoute } from "@tanstack/react-router";
import {
  ButtonLink,
  CtaBand,
  LinkCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/kit";
import { images, processSteps, whyZentleaf } from "@/data/site";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About Zentleaf | Technology Partner for Custom Solutions" },
      {
        name: "description",
        content:
          "Zentleaf is a technology partner that turns business requirements into custom digital products, software and AI solutions.",
      },
      { property: "og:title", content: "About Zentleaf" },
      {
        property: "og:description",
        content: "Who we are, how we work and why clients choose custom solutions.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A technology partner, not a product vendor"
        body="Zentleaf exists to turn business requirements into working digital products — and to stay with them after launch."
        image={images.team}
      >
        <ButtonLink to="/contact">Discuss your project</ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <p className="eyebrow">Who we are</p>
          <div className="flex max-w-3xl flex-col gap-6">
            <Reveal>
              <p className="display-3 font-normal leading-snug">
                We are a team of engineers, designers and delivery specialists who build software
                for businesses that need something specific.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-muted-foreground">
                Some clients arrive with a clear specification. Most arrive with a problem: a
                process that does not scale, a customer experience that loses people, a system that
                cannot be changed, or an opportunity they cannot service manually. Our job is to
                understand it properly and then build the appropriate solution.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-muted-foreground">
                That means we sometimes recommend a smaller build, an off-the-shelf product, or a
                phased approach. Being right about scope matters more to a long relationship than
                winning a larger first project.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Principles" title="What we hold to" />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
          {whyZentleaf.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} className="bg-surface">
              <div className="h-full p-8 md:p-10">
                <h3 className="display-3 text-xl">{w.title}</h3>
                <p className="mt-3 text-muted-foreground">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Read more" title="How we work in detail" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Reveal>
            <LinkCard
              to="/about/$slug"
              params={{ slug: "approach" }}
              title="Our Approach"
              body="Client-first methodology: how we scope, decide and keep projects honest."
            />
          </Reveal>
          <Reveal delay={0.07}>
            <LinkCard
              to="/about/$slug"
              params={{ slug: "process" }}
              title="Our Process"
              body="Requirement to support — the seven steps every engagement follows."
            />
          </Reveal>
          <Reveal delay={0.14}>
            <LinkCard
              to="/about/$slug"
              params={{ slug: "technology" }}
              title="Technology"
              body="The stack we work in, and how we choose within it."
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading eyebrow="Delivery model" title="Requirement to support" inverted />
        <ol className="mt-12 grid gap-px bg-ink-foreground/15 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.number} delay={i * 0.05} className="bg-ink">
              <div className="h-full p-7">
                <span className="font-display text-sm font-semibold text-primary">{s.number}</span>
                <h3 className="mt-3 display-3 text-lg text-ink-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-foreground/65">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  );
}


