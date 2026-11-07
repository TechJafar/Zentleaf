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
import { caseStudies, images, industries } from "@/data/site";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries | Zentleaf" },
      {
        name: "description",
        content:
          "Zentleaf builds digital solutions for startups, healthcare, finance, e-commerce, education, real estate, logistics and manufacturing.",
      },
      { property: "og:title", content: "Industries | Zentleaf" },
      { property: "og:description", content: "Sector context shapes the software we build." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const [featured] = caseStudies;
  if (!featured) return null;
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Software that respects how your sector works"
        body="Regulation, operational reality and user context change what good software looks like. We build with those constraints in view."
        image={images.industry}
      >
        <ButtonLink to="/contact">Discuss your project</ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Sectors" title="Where we work" />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 4) * 0.06}>
              <LinkCard
                to="/industries/$slug"
                params={{ slug: ind.slug }}
                title={ind.title}
                body={ind.short}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Example engagement" title="How we approached a similar problem" />
        <p className="mt-0 -translate-y-2 text-sm text-muted-foreground">Demonstration project — illustrative of the kind of work Zentleaf takes on.</p>
        <Reveal>
          <div className="mt-12 grid gap-0 border border-border bg-background lg:grid-cols-2">
            <img
              src={featured.image}
              alt={featured.title}
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="eyebrow">{featured.industry}</p>
              <h3 className="mt-4 display-2 text-3xl">{featured.title}</h3>
              <p className="mt-5 text-muted-foreground">{featured.summary}</p>
              <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm">
                {featured.outcomes.slice(0, 3).map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  to="/case-studies/$slug"
                  params={{ slug: featured.slug }}
                  variant="outline"
                >
                  Read the case study
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}


