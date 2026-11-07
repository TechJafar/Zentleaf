import { createFileRoute } from "@tanstack/react-router";
import {
  CtaBand,
  LinkCard,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  ButtonLink,
} from "@/components/kit";
import { images, services } from "@/data/site";
import { deliveryFramework, engagementModels, saasComparison } from "@/data/overhaul";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Zentleaf" },
      {
        name: "description",
        content:
          "Website, web app, mobile, custom software, UI/UX, AI, e-commerce, automation, integration and support services from Zentleaf.",
      },
      { property: "og:title", content: "Services | Zentleaf" },
      {
        property: "og:description",
        content: "Ten core services, combined to fit your requirement.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Capabilities built around requirements"
        body="We combine design, engineering, AI and automation to deliver the solution your business actually needs — then support it."
        image={images.cloud}
      >
        <ButtonLink to="/contact">Discuss your project</ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Ten core services"
          body="Each service has its own delivery approach, technology set and deliverables. Most engagements combine several."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.07}>
              <LinkCard
                to="/services/$slug"
                params={{ slug: s.slug }}
                image={s.image}
                kicker="Service"
                title={s.title}
                body={s.short}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Delivery"
          title="Client Engagement & Delivery Framework"
          body="Four stages with defined outputs, from discovery to supported production."
        />
        <ol className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {deliveryFramework.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 0.06} className="bg-background">
              <div className="flex h-full flex-col p-8">
                <span className="font-display text-sm font-semibold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-4 display-3 text-xl">{step.title}</h3>
                <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
                  {step.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-primary">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Build vs buy"
          title="Custom Engineering vs. SaaS / Off-the-Shelf"
          body="Off-the-shelf is often the right answer. This is how we compare the two when advising clients."
        />
        <div className="mt-12 overflow-x-auto border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="w-1/4 p-5 font-semibold">
                  Criteria
                </th>
                <th scope="col" className="p-5 font-semibold">
                  Commercial SaaS
                </th>
                <th scope="col" className="p-5 font-semibold text-primary">
                  Zentleaf Custom Build
                </th>
              </tr>
            </thead>
            <tbody>
              {saasComparison.map((row) => (
                <tr key={row.criteria} className="border-t border-border align-top">
                  <th scope="row" className="p-5 font-display font-semibold">
                    {row.criteria}
                  </th>
                  <td className="p-5 text-muted-foreground">{row.saas}</td>
                  <td className="p-5">{row.custom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Commercials" title="Engineering Pods & Engagement Models" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {engagementModels.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 0.07}
              className="flex flex-col border-t-2 border-primary bg-background p-8"
            >
              <span className="font-display text-sm font-semibold text-primary">0{i + 1}</span>
              <h3 className="mt-3 display-3 text-xl">{m.title}</h3>
              <p className="mt-3 font-medium">{m.lead}</p>
              <ul className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
                {m.points.map((p) => (
                  <li key={p} className="border-b border-border pb-3 last:border-0">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not sure which service you need?"
        secondary={false}
        primaryLabel="Let's talk it through"
      />
    </>
  );
}


