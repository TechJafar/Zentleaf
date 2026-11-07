import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/kit";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Zentleaf" },
      {
        name: "description",
        content: "The terms that apply to the use of the Zentleaf website and its content.",
      },
      { property: "og:title", content: "Terms of Use | Zentleaf" },
      { property: "og:description", content: "Terms applying to use of the Zentleaf website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "Use of this website",
    body: "This website is provided for information about Zentleaf's services. You may browse and share its content for non-commercial purposes provided attribution is retained.",
  },
  {
    heading: "Content and accuracy",
    body: "We aim to keep content accurate and current, but the material on this website is general in nature and does not constitute professional advice for a specific situation.",
  },
  {
    heading: "Intellectual property",
    body: "All text, design, code and imagery on this website belong to Zentleaf unless otherwise stated, and may not be reproduced for commercial use without permission.",
  },
  {
    heading: "Enquiries",
    body: "Submitting an enquiry does not create a contract. Any engagement is governed by a separate signed agreement setting out scope, timeline and commercial terms.",
  },
  {
    heading: "External links",
    body: "This website may link to third-party sites. We are not responsible for their content or practices.",
  },
  {
    heading: "Contact",
    body: "Questions about these terms can be sent to hello@zentleaf.com.",
  },
];

function TermsPage() {
  return (
    <>
      <header className="bg-ink pb-14 pt-36 text-ink-foreground md:pt-44">
        <div className="shell">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="display-2 text-ink-foreground">Terms of Use</h1>
        </div>
      </header>
      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="display-3 text-xl">{s.heading}</h2>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}



