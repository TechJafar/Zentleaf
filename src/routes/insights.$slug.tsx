import { createFileRoute, notFound } from "@tanstack/react-router";
import { CtaBand, LinkCard, PageHero, Reveal, Section, SectionHeading } from "@/components/kit";
import { insightBySlug, insights } from "@/data/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = insightBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable | Zentleaf" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    const title = `${article.title} | Zentleaf Insights`;
    return {
      meta: [
        { title },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            datePublished: article.date,
            description: article.excerpt,
            author: { "@type": "Organization", name: "Zentleaf" },
          }),
        },
      ],
    };
  },
  component: InsightDetail,
});

function InsightDetail() {
  const { article } = Route.useLoaderData();
  const related = insights.filter((i) => i.slug !== article.slug).slice(0, 3);
  const formatted = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        eyebrow={`${article.category} · ${formatted} · ${article.readingTime}`}
        title={article.title}
        body={article.excerpt}
        image={article.image}
      />

      <Section>
        <article className="mx-auto flex max-w-3xl flex-col gap-12">
          {article.body.map((block, i) => (
            <Reveal key={block.heading} delay={i * 0.05}>
              <h2 className="display-2 text-3xl">{block.heading}</h2>
              {block.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-5 text-lg leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </article>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Keep reading" title="Related articles" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {related.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}>
              <LinkCard
                to="/insights/$slug"
                params={{ slug: a.slug }}
                image={a.image}
                kicker={`${a.category} · ${a.readingTime}`}
                title={a.title}
                body={a.excerpt}
                className="bg-background"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand title="Have a requirement of your own?" />
    </>
  );
}


