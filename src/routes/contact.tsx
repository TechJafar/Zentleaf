import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Mail, Phone, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { ButtonAction, Reveal, Section } from "@/components/kit";
import { company } from "@/data/site";
import { contactNext, timeZones } from "@/data/overhaul";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Discuss Your Project with Zentleaf" },
      {
        name: "description",
        content:
          "Tell Zentleaf about your requirement — website, web app, mobile app, custom software, AI or automation — and we'll come back with an approach.",
      },
      { property: "og:title", content: "Contact Zentleaf" },
      {
        property: "og:description",
        content: "Let's build your solution. Start a project conversation with Zentleaf.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const projectTypes = [
  "Website",
  "Web Application",
  "Mobile Application",
  "Custom Software",
  "AI Solution",
  "E-commerce",
  "Automation",
  "UI/UX",
  "Other",
];

const budgets = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
  "Not sure yet",
];

type Fields = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
};

const empty: Fields = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  budget: "",
  description: "",
};

function ContactPage() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [zone, setZone] = useState("GMT");
  const activeZone = timeZones.find((z) => z.id === zone);

  const set =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      if (status === "error") setStatus("idle");
    };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.projectType) next.projectType = "Please choose a project type.";
    if (values.description.trim().length < 20)
      next.description = "Please describe your project in at least 20 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 900));
      const existing = JSON.parse(localStorage.getItem("Zentleaf-enquiries") ?? "[]");
      existing.push({ ...values, submittedAt: new Date().toISOString() });
      localStorage.setItem("Zentleaf-enquiries", JSON.stringify(existing));
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <header className="bg-ink pb-16 pt-36 text-ink-foreground md:pb-24 md:pt-44">
        <div className="shell">
          <motion.p
            className="eyebrow mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.p>
          <motion.h1
            className="display-1 max-w-4xl text-ink-foreground"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's build your solution
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-ink-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Tell us what you need to build. We'll come back with an approach, a shape for the work
            and an honest view of what it takes.
          </motion.p>
        </div>
      </header>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.8fr] lg:gap-24">
          <div>
            {status === "success" ? (
              <div role="status" className="border border-primary/40 bg-surface p-10">
                <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
                <h2 className="mt-6 display-2 text-3xl">Thank you — your enquiry is in.</h2>
                <p className="mt-4 text-muted-foreground">
                  We've recorded your project details and will respond within two working days with
                  questions or a suggested next step.
                </p>
                <div className="mt-8">
                  <ButtonAction onClick={() => setStatus("idle")} variant="outline">
                    Send another enquiry
                  </ButtonAction>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field id="name" label="Name" required error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={set("name")}
                      className={inputCls(!!errors.name)}
                      autoComplete="name"
                    />
                  </Field>
                  <Field id="email" label="Email" required error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={set("email")}
                      className={inputCls(!!errors.email)}
                      autoComplete="email"
                    />
                  </Field>
                  <Field id="company" label="Company">
                    <input
                      id="company"
                      name="company"
                      value={values.company}
                      onChange={set("company")}
                      className={inputCls(false)}
                      autoComplete="organization"
                    />
                  </Field>
                  <Field id="phone" label="Phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={set("phone")}
                      className={inputCls(false)}
                      autoComplete="tel"
                    />
                  </Field>
                  <Field id="projectType" label="Project type" required error={errors.projectType}>
                    <select
                      id="projectType"
                      name="projectType"
                      value={values.projectType}
                      onChange={set("projectType")}
                      className={inputCls(!!errors.projectType)}
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="budget" label="Budget range">
                    <select
                      id="budget"
                      name="budget"
                      value={values.budget}
                      onChange={set("budget")}
                      className={inputCls(false)}
                    >
                      <option value="">Select a budget range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field
                  id="description"
                  label="Project description"
                  required
                  error={errors.description}
                >
                  <textarea
                    id="description"
                    name="description"
                    rows={7}
                    value={values.description}
                    onChange={set("description")}
                    placeholder="What problem are you trying to solve? Who is it for, and what does success look like?"
                    className={inputCls(!!errors.description)}
                  />
                </Field>

                {status === "error" && (
                  <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    Something needs attention — please check the highlighted fields above.
                  </p>
                )}

                <div className="flex items-center gap-4">
                  <ButtonAction
                    type="submit"
                    disabled={status === "loading"}
                    arrow
                    className={cn(status === "loading" && "opacity-60")}
                  >
                    {status === "loading" ? "Sending…" : "Start your project"}
                  </ButtonAction>
                  {status === "loading" && (
                    <span
                      className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-primary"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </form>
            )}
          </div>

          <aside className="flex flex-col gap-10">
            <Reveal>
              <h2 className="display-3 text-xl">Direct contact</h2>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  {company.phone}
                </a>
              </div>
              <div className="mt-5 flex gap-4 text-sm">
                {company.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="display-3 text-xl">What happens next?</h2>
              <ol className="mt-5 flex flex-col gap-4 border-t border-border pt-5 text-sm">
                {contactNext.map((s) => (
                  <li key={s.number}>
                    <span className="font-display font-semibold text-primary">{s.number}</span>{" "}
                    <span className="font-medium">{s.title}</span>
                    <p className="mt-1 text-muted-foreground">{s.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.12}>
              <h2 className="display-3 text-xl">Global coverage</h2>
              <div
                role="radiogroup"
                aria-label="Select your time zone"
                className="mt-5 grid grid-cols-4 gap-2"
              >
                {timeZones.map((z) => (
                  <button
                    key={z.id}
                    type="button"
                    role="radio"
                    aria-checked={zone === z.id}
                    onClick={() => setZone(z.id)}
                    className={cn(
                      "rounded-sm border px-2 py-2 text-sm font-semibold transition-colors",
                      zone === z.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary",
                    )}
                  >
                    {z.label}
                  </button>
                ))}
              </div>
              {activeZone && (
                <div className="mt-4 border border-border p-4 text-sm" aria-live="polite">
                  <p className="font-medium">
                    {activeZone.city} · {activeZone.hours}
                  </p>
                  <p className="mt-1 text-muted-foreground">{activeZone.overlap}</p>
                </div>
              )}
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-sm border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary",
    hasError ? "border-destructive" : "border-input",
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}


