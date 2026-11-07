import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/kit";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Zentleaf" },
      {
        name: "description",
        content:
          "How Zentleaf collects, uses and protects information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy | Zentleaf" },
      {
        property: "og:description",
        content: "How Zentleaf handles information submitted through this website.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    heading: "Information we collect",
    body: "We collect the details you choose to submit through our project enquiry form: your name, email address, company, phone number, project type, budget range and project description. We also collect standard technical information such as browser type and pages visited.",
  },
  {
    heading: "How we use it",
    body: "Enquiry details are used solely to respond to your request and to discuss a potential engagement. Technical information is used to maintain and improve the website.",
  },
  {
    heading: "Storage and retention",
    body: "Enquiry details submitted through this website are retained only as long as needed to respond to your request and maintain a record of our correspondence.",
  },
  {
    heading: "Sharing",
    body: "We do not sell your information. We share it only with service providers necessary to operate this website and our business correspondence, and where required by law.",
  },
  {
    heading: "Your rights",
    body: "You may request access to, correction of, or deletion of the information you have provided by contacting us at hello@zentleaf.com.",
  },
  {
    heading: "Contact",
    body: "Questions about this policy can be sent to hello@zentleaf.com.",
  },
];

function PrivacyPage() {
  return (
    <>
      <header className="bg-ink pb-14 pt-36 text-ink-foreground md:pt-44">
        <div className="shell">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="display-2 text-ink-foreground">Privacy Policy</h1>
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


