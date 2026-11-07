import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CtaBand, LinkCard, PageHero, Reveal, Section, SectionHeading } from "@/components/kit";
import { images, insights } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights | Zentleaf" },
      {
        name: "description",
        content:
          "Practical writing from the Zentleaf team on product scoping, applied AI, automation and design systems.",
      },
      { property: "og:title", content: "Insights | Zentleaf" },
      {
        property: "og:description",
        content: "Technology and delivery thinking from the Zentleaf team.",
      },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  const categories = useMemo(() => ["All", ...new Set(insights.map((i) => i.category))], []);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = insights.filter(
    (i) =>
      (category === "All" || i.category === category) &&
      (i.title + i.excerpt).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes from building software for clients"
        body="Practical thinking on scoping, applied AI, automation and design — written by the people doing the work."
        image={images.team}
      />

      <Section>
        <SectionHeading eyebrow="Library" title="Latest thinking" />

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter insights by category"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={cn(
                  "rounded-sm border px-4 py-2 text-sm font-medium transition-colors",
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <label htmlFor="insight-search" className="sr-only">
              Search insights
            </label>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="insight-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full rounded-sm border border-input bg-background py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-14 border border-border p-10 text-center text-muted-foreground">
            No results found. Adjust your search or choose another category.
          </p>
        ) : (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.06}>
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
        )}
      </Section>

      <CtaBand />
    </>
  );
}


