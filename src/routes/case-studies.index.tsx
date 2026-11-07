import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ButtonLink,
  CtaBand,
  LinkCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/kit";
import { caseStudies, images } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies | Zentleaf" },
      {
        name: "description",
        content:
          "How Zentleaf turned client requirements into working software across commerce, field operations, finance and healthcare.",
      },
      { property: "og:title", content: "Case Studies | Zentleaf" },
      {
        property: "og:description",
        content: "Selected Zentleaf engagements, from requirement to launch.",
      },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const industriesList = useMemo(() => ["All", ...new Set(caseStudies.map((c) => c.industry))], []);
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? caseStudies : caseStudies.filter((c) => c.industry === filter);

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The kind of work we do"
        body="These are demonstration projects that illustrate our approach to different types of engagements — the problems we take on, the decisions we make and what changes as a result."
        image={images.product}
      >
        <ButtonLink to="/contact">Discuss your requirement</ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Our approach" title="Demonstration projects" />

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter case studies by industry"
        >
          {industriesList.map((ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => setFilter(ind)}
              aria-pressed={filter === ind}
              className={cn(
                "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
                filter === ind
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary hover:text-primary",
              )}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filtered.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.07}>
              <LinkCard
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                image={c.image}
                kicker={`${c.industry} · ${c.clientType}`}
                title={c.title}
                body={c.summary}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Have a similar requirement?" secondary={false} primaryLabel="Discuss your project" />
    </>
  );
}


