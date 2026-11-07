import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ButtonLink, CtaBand, PageHero, Reveal, Section, SectionHeading } from "@/components/kit";
import { images, jobBySlug, jobs } from "@/data/site";

const benefits = [
  "Remote-friendly working with flexible hours",
  "Dedicated learning time and conference budget",
  "Modern hardware of your choosing",
  "Paid time off and parental leave",
  "Regular team gatherings",
  "Progression discussed every cycle",
];

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const job = jobBySlug(params.slug);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Role unavailable | Zentleaf" }, { name: "robots", content: "noindex" }],
      };
    }
    const { job } = loaderData;
    const title = `${job.title} | Careers at Zentleaf`;
    return {
      meta: [
        { title },
        { name: "description", content: job.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: job.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/careers/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/careers/${params.slug}` }],
    };
  },
  component: JobDetail,
});

function JobDetail() {
  const { job } = Route.useLoaderData();
  const others = jobs.filter((j) => j.slug !== job.slug);

  return (
    <>
      <PageHero
        eyebrow={`${job.team} · ${job.location} · ${job.type}`}
        title={job.title}
        body={job.summary}
        image={images.team}
      >
        <ButtonLink to="/careers/apply">Apply for this role</ButtonLink>
        <ButtonLink to="/careers" variant="inverted">
          All roles
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.5fr_0.8fr] lg:gap-20">
          <div className="flex flex-col gap-12">
            <Reveal>
              <h2 className="display-2 text-3xl">Responsibilities</h2>
              <ul className="mt-6 flex flex-col">
                {job.responsibilities.map((r) => (
                  <li key={r} className="border-b border-border py-4 first:border-t">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 className="display-2 text-3xl">Requirements</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 className="display-2 text-3xl">Nice to have</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {job.niceToHave.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <h2 className="display-2 text-3xl">Benefits</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-border p-8">
              <h2 className="display-3 text-xl">Role details</h2>
              <dl className="mt-6 flex flex-col gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Team</dt>
                  <dd className="font-medium">{job.team}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium">{job.location}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Employment type</dt>
                  <dd className="font-medium">{job.type}</dd>
                </div>
              </dl>
              <div className="mt-8">
                <ButtonLink to="/careers/apply" className="w-full">
                  Apply now
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="More roles" title="Other open positions" />
        <div className="mt-10 border-t border-border">
          {others.map((j) => (
            <Link
              key={j.slug}
              to="/careers/$slug"
              params={{ slug: j.slug }}
              className="group flex flex-wrap items-center justify-between gap-4 border-b border-border py-6 transition-colors hover:text-primary"
            >
              <span className="display-3 text-xl">{j.title}</span>
              <span className="text-sm text-muted-foreground">
                {j.team} · {j.location}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Ready to apply?"
        body="Send us your details and a short note about why this role interests you."
        primaryLabel="Apply for this role"
        secondary={false}
      />
    </>
  );
}


