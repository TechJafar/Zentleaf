import { createFileRoute, notFound } from "@tanstack/react-router";
import { ButtonLink, CtaBand, PageHero, Reveal, Section, SectionHeading } from "@/components/kit";
import { images, processSteps, techStack } from "@/data/site";

type Block = { heading: string; paragraphs: string[] };
type AboutPageData = {
  title: string;
  intro: string;
  description: string;
  image: string;
  blocks: Block[];
  showProcess?: boolean;
  showTech?: boolean;
};

const pages: Record<string, AboutPageData> = {
  approach: {
    title: "Our Approach",
    intro: "How we contract, scope and manage risk — written down before work starts.",
    description:
      "Zentleaf's engagement approach: contractual honesty, fixed vs. agile models, scoping methodology and risk mitigation.",
    image: images.team,
    blocks: [
      {
        heading: "Contractual honesty",
        paragraphs: [
          "Statements of work list what is excluded as clearly as what is included. Assumptions that affect cost — third-party API availability, client-side data quality, approval turnaround — are named with the impact if they prove wrong.",
          "Change requests are priced before they are built, never reconciled after the fact. If a requirement is better served by an existing product, we say so in writing, even when it reduces our scope.",
        ],
      },
      {
        heading: "Fixed vs. agile engagement models",
        paragraphs: [
          "Fixed-price works when scope is stable and acceptance criteria are testable — typically after a discovery sprint. We use milestone payments tied to working software in staging.",
          "Time-and-materials suits evolving products where learning changes the backlog. Here we commit to a capacity and a sprint cadence, with a monthly budget cap and burn reporting every two weeks.",
        ],
      },
      {
        heading: "Scoping methodology",
        paragraphs: [
          "Discovery is fixed-time (usually two weeks) and fixed-price. Outputs are a user-story map, non-functional requirements (load, latency, availability, compliance), a risk register and a three-point estimate per epic.",
          "Estimates are given as ranges with confidence levels, not single numbers. Ranges narrow as each sprint replaces assumptions with measured velocity.",
        ],
      },
      {
        heading: "Risk mitigation",
        paragraphs: [
          "The riskiest technical assumption is built first — an integration spike, a performance prototype or a data migration dry-run — before UI polish.",
          "Every engagement keeps a living risk register reviewed at each sprint demo, with an owner, likelihood, impact and mitigation. Source code lives in your repository from day one, so the commercial relationship never holds the codebase hostage.",
        ],
      },
    ],
  },
  process: {
    title: "Our Process",
    intro:
      "Seven steps from requirement to long-term support, adapted in depth to each engagement.",
    description:
      "The seven-step Zentleaf delivery process: requirement, strategy, design, development, testing, launch and support.",
    image: images.product,
    blocks: [
      {
        heading: "A predictable shape, a flexible depth",
        paragraphs: [
          "The same seven steps apply whether we are building a marketing website or a multi-year platform. What changes is the depth of each one — a two-week site does not need the discovery programme a clinical platform requires.",
          "Each step has an agreed output, so you always know what you will receive and when.",
        ],
      },
      {
        heading: "Review points you control",
        paragraphs: [
          "Work is reviewable at the end of every increment, in a running environment rather than a slide deck. Feedback at that point is cheap; feedback after launch is not.",
        ],
      },
      {
        heading: "Support is part of the plan",
        paragraphs: [
          "Launch is not the end of the engagement. Monitoring, security upkeep, performance work and a steady improvement backlog keep the product healthy as usage and data grow.",
        ],
      },
    ],
    showProcess: true,
  },
  technology: {
    title: "Technology",
    intro: "The engineering trade-offs behind our default choices — and when we depart from them.",
    description:
      "Zentleaf's technical decision-making: PostgreSQL vs MongoDB, SSR frameworks, edge compute and AI model governance.",
    image: images.cloud,
    blocks: [
      {
        heading: "PostgreSQL vs. MongoDB",
        paragraphs: [
          "Most business systems are relational: orders belong to customers, invoices reference orders, permissions reference roles. PostgreSQL gives us foreign keys, transactions across tables and row-level security, so integrity is enforced by the database rather than hoped for in application code.",
          "JSONB columns cover genuinely schemaless fields. We choose a document store like MongoDB only where the data is naturally hierarchical, write-heavy and rarely joined — event payloads or content blobs, for example.",
        ],
      },
      {
        heading: "TanStack Start / Next.js for SSR",
        paragraphs: [
          "Server-side rendering gives crawlers and slow devices complete HTML on first response and keeps secrets on the server. TanStack Start suits applications that need type-safe routing and server functions with minimal framework magic; Next.js suits teams already invested in its ecosystem and React Server Components.",
          "Either way we set Core Web Vitals budgets (LCP under 2.5s on 4G) and fail the CI build when a change exceeds them.",
        ],
      },
      {
        heading: "Edge compute",
        paragraphs: [
          "We run rendering, caching, authentication checks and personalisation at the edge, where proximity to users cuts latency toward our sub-200ms p95 standard.",
          "We keep stateful work — transactional writes and long-running jobs — in a regional primary close to the database. Pushing writes to the edge without a matching data strategy usually moves latency rather than removing it.",
        ],
      },
      {
        heading: "AI model governance",
        paragraphs: [
          "Every model-backed feature ships with a versioned evaluation set, and prompt or model changes go through the same pull-request review and CI gate as code.",
          "We log inputs, outputs, model version and cost per request; route low-confidence results to human review; and keep client data out of provider training through contractual and technical controls. Model vendors are abstracted behind an interface so they can be swapped as pricing or quality changes.",
        ],
      },
    ],
    showTech: true,
  },
};

export const Route = createFileRoute("/about/$slug")({
  loader: ({ params }) => {
    const page = pages[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Page unavailable | Zentleaf" }, { name: "robots", content: "noindex" }],
      };
    }
    const { page } = loaderData;
    const title = `${page.title} | Zentleaf`;
    return {
      meta: [
        { title },
        { name: "description", content: page.description },
        { property: "og:title", content: title },
        { property: "og:description", content: page.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/about/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/about/${params.slug}` }],
    };
  },
  component: AboutDetail,
});

function AboutDetail() {
  const { page } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="About Zentleaf" title={page.title} body={page.intro} image={page.image}>
        <ButtonLink to="/contact">Discuss your project</ButtonLink>
        <ButtonLink to="/about" variant="inverted">
          About Zentleaf
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-12">
          {page.blocks.map((block, i) => (
            <Reveal key={block.heading} delay={i * 0.05}>
              <h2 className="display-2 text-3xl">{block.heading}</h2>
              {block.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 20)}
                  className="mt-5 text-lg leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </Section>

      {page.showProcess && (
        <Section tone="surface">
          <SectionHeading eyebrow="Steps" title="The seven steps in full" />
          <ol className="mt-12 flex flex-col border-t border-border">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 0.04}>
                <div className="grid gap-2 border-b border-border py-7 md:grid-cols-[100px_240px_1fr] md:gap-8">
                  <span className="font-display text-sm font-semibold text-primary">
                    {s.number}
                  </span>
                  <h3 className="display-3 text-xl">{s.title}</h3>
                  <p className="text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>
      )}

      {page.showTech && (
        <Section tone="surface">
          <SectionHeading eyebrow="Stack" title="What we build with" />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.06}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {group.group}
                </h3>
                <ul className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}


