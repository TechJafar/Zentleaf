import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  FileText,
  Github,
  Globe,
  Linkedin,
  SlidersHorizontal,
  Upload,
  User,
  X,
} from "lucide-react";
import { ApplyBackground } from "@/components/apply/ApplyBackground";
import { ButtonAction, ButtonLink } from "@/components/kit";
import {
  Field,
  OptionGroup,
  ReviewCard,
  ReviewRow,
  SelectField,
  Stepper,
  TextAreaField,
  TextField,
  type StepDef,
} from "@/components/apply/form-kit";
import { jobs } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/careers/apply")({
  head: () => {
    const title = "Apply to Zentleaf | Careers Application";
    const description =
      "Apply to join Zentleaf in four short steps: personal details, professional profile, working preferences and a final review.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ApplyPage,
});

const steps: StepDef[] = [
  { id: 1, label: "Personal", icon: <User className="h-4 w-4" aria-hidden="true" /> },
  { id: 2, label: "Professional", icon: <Briefcase className="h-4 w-4" aria-hidden="true" /> },
  {
    id: 3,
    label: "Preferences",
    icon: <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />,
  },
  { id: 4, label: "Review", icon: <FileText className="h-4 w-4" aria-hidden="true" /> },
];

const skillOptions = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Go",
  "AWS",
  "Azure",
  "Kubernetes",
  "PostgreSQL",
  "Product Design",
  "Figma",
  "Data Engineering",
];

const experienceLevels = ["0–1 Years", "1–3 Years", "3–6 Years", "6–10 Years", "10+ Years"];
const qualifications = [
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
  "Diploma",
  "Self-taught",
];
const years = Array.from({ length: 16 }, (_, i) => String(new Date().getFullYear() - i));
const locations = [
  "London, UK",
  "Manchester, UK",
  "Berlin, Germany",
  "Remote (Europe)",
  "Remote (Global)",
];

type Data = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  role: string;
  experience: string;
  skills: string[];
  qualification: string;
  college: string;
  gradYear: string;
  resume: string;
  cover: string;
  availability: string;
  workPreference: string;
  preferredLocation: string;
  salary: string;
  relocate: string;
  confirm: boolean;
};

const initial: Data = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  github: "",
  portfolio: "",
  role: "",
  experience: "",
  skills: [],
  qualification: "",
  college: "",
  gradYear: "",
  resume: "",
  cover: "",
  availability: "",
  workPreference: "",
  preferredLocation: "",
  salary: "",
  relocate: "",
  confirm: false,
};

type Errors = Partial<Record<keyof Data, string>>;

function validate(step: number, d: Data): Errors {
  const e: Errors = {};
  if (step === 1) {
    if (!d.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))
      e.email = "Please enter a valid email address.";
    if (d.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
    if (!d.location.trim()) e.location = "Please enter your current location.";
  }
  if (step === 2) {
    if (!d.role) e.role = "Select the role you are applying for.";
    if (!d.experience) e.experience = "Select your experience level.";
    if (d.skills.length === 0) e.skills = "Add at least one skill.";
    if (!d.qualification) e.qualification = "Select your highest qualification.";
    if (!d.resume) e.resume = "Please attach your CV.";
  }
  if (step === 3) {
    if (!d.availability) e.availability = "Select your availability.";
    if (!d.workPreference) e.workPreference = "Select a working preference.";
    if (!d.preferredLocation) e.preferredLocation = "Select a preferred location.";
    if (!d.relocate) e.relocate = "Let us know if you can relocate.";
  }
  if (step === 4 && !d.confirm) e.confirm = "Please confirm your details are accurate.";
  return e;
}

function ApplyPage() {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof Data>(key: K, value: Data[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const goNext = () => {
    const e = validate(step, data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    if (step === 4) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (step === 1) {
      navigate({ to: "/careers" });
      return;
    }
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background pb-24 pt-32 md:pt-40">
      {/* premium botanical corner decorations — apply page only */}
      <ApplyBackground />

      <div className="shell">
        {submitted ? (
          <SuccessScreen data={data} />
        ) : (
          <>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-3">Careers at Zentleaf</p>
              <h1 className="display-2 text-3xl md:text-4xl">Start your application</h1>
              <p className="lead mt-4">
                Four short steps. You can review everything before it reaches our team.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <Stepper steps={steps} current={step} />
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-sm border border-border bg-card shadow-card">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 md:p-9"
                >
                  {step === 1 && <StepPersonal data={data} errors={errors} set={set} />}
                  {step === 2 && <StepProfessional data={data} errors={errors} set={set} />}
                  {step === 3 && <StepPreferences data={data} errors={errors} set={set} />}
                  {step === 4 && (
                    <StepReview data={data} errors={errors} set={set} goTo={setStep} />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col-reverse gap-3 border-t border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-9">
                <ButtonAction variant="outline" onClick={goBack} className="justify-center">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back
                </ButtonAction>
                <ButtonAction onClick={goNext} arrow className="justify-center">
                  {step === 4 ? "Submit application" : "Continue"}
                </ButtonAction>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

type StepProps = {
  data: Data;
  errors: Errors;
  set: <K extends keyof Data>(key: K, value: Data[K]) => void;
};

function StepHeading({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-8 border-b border-border pb-6">
      <h2 className="display-3 text-xl">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function StepPersonal({ data, errors, set }: StepProps) {
  return (
    <>
      <StepHeading title="Personal details" body="How we reach you and where you are based." />
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" htmlFor="fullName" error={errors.fullName}>
          <TextField
            id="fullName"
            value={data.fullName}
            invalid={!!errors.fullName}
            placeholder="Enter your full name"
            onChange={(e) => set("fullName", e.target.value)}
          />
        </Field>
        <Field label="Email address" htmlFor="email" error={errors.email}>
          <TextField
            id="email"
            type="email"
            value={data.email}
            invalid={!!errors.email}
            placeholder="Enter your email address"
            onChange={(e) => set("email", e.target.value)}
          />
        </Field>
        <Field label="Phone number" htmlFor="phone" error={errors.phone}>
          <TextField
            id="phone"
            type="tel"
            value={data.phone}
            invalid={!!errors.phone}
            placeholder="Enter your phone number"
            onChange={(e) => set("phone", e.target.value)}
          />
        </Field>
        <Field label="Current location" htmlFor="location" error={errors.location}>
          <TextField
            id="location"
            value={data.location}
            invalid={!!errors.location}
            placeholder="City, country"
            onChange={(e) => set("location", e.target.value)}
          />
        </Field>
        <Field label="LinkedIn URL" htmlFor="linkedin" optional>
          <TextField
            id="linkedin"
            value={data.linkedin}
            icon={<Linkedin className="h-4 w-4" aria-hidden="true" />}
            placeholder="https://linkedin.com/in/your-profile"
            onChange={(e) => set("linkedin", e.target.value)}
          />
        </Field>
        <Field label="GitHub URL" htmlFor="github" optional>
          <TextField
            id="github"
            value={data.github}
            icon={<Github className="h-4 w-4" aria-hidden="true" />}
            placeholder="https://github.com/your-username"
            onChange={(e) => set("github", e.target.value)}
          />
        </Field>
        <Field label="Portfolio URL" htmlFor="portfolio" optional className="md:col-span-2">
          <TextField
            id="portfolio"
            value={data.portfolio}
            icon={<Globe className="h-4 w-4" aria-hidden="true" />}
            placeholder="https://yourportfolio.com"
            onChange={(e) => set("portfolio", e.target.value)}
          />
        </Field>
      </div>
    </>
  );
}

function StepProfessional({ data, errors, set }: StepProps) {
  const toggleSkill = (skill: string) => {
    set(
      "skills",
      data.skills.includes(skill)
        ? data.skills.filter((s) => s !== skill)
        : [...data.skills, skill],
    );
  };
  return (
    <>
      <StepHeading
        title="Professional profile"
        body="The role you want and the experience you bring."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Applying for" htmlFor="role" error={errors.role}>
          <SelectField
            id="role"
            value={data.role}
            invalid={!!errors.role}
            onChange={(e) => set("role", e.target.value)}
          >
            <option value="">Select position</option>
            {jobs.map((j) => (
              <option key={j.slug} value={j.title}>
                {j.title}
              </option>
            ))}
            <option value="Speculative application">Speculative application</option>
          </SelectField>
        </Field>
        <Field label="Experience level" htmlFor="experience" error={errors.experience}>
          <SelectField
            id="experience"
            value={data.experience}
            invalid={!!errors.experience}
            onChange={(e) => set("experience", e.target.value)}
          >
            <option value="">Select experience level</option>
            {experienceLevels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </SelectField>
        </Field>

        <Field
          label="Skills"
          error={errors.skills}
          hint="Select everything that applies."
          className="md:col-span-2"
        >
          <div
            className={cn(
              "flex flex-wrap gap-2 rounded-sm border p-3",
              errors.skills ? "border-destructive" : "border-input",
            )}
          >
            {skillOptions.map((s) => {
              const on = data.skills.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleSkill(s)}
                  aria-pressed={on}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs font-medium transition-colors",
                    on
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  {s}
                  {on ? <X className="h-3 w-3" aria-hidden="true" /> : null}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Highest qualification" htmlFor="qualification" error={errors.qualification}>
          <SelectField
            id="qualification"
            value={data.qualification}
            invalid={!!errors.qualification}
            onChange={(e) => set("qualification", e.target.value)}
          >
            <option value="">Select qualification</option>
            {qualifications.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </SelectField>
        </Field>
        <Field label="College / university" htmlFor="college" optional>
          <TextField
            id="college"
            value={data.college}
            placeholder="Enter college or university"
            onChange={(e) => set("college", e.target.value)}
          />
        </Field>
        <Field label="Graduation year" htmlFor="gradYear" optional>
          <SelectField
            id="gradYear"
            value={data.gradYear}
            onChange={(e) => set("gradYear", e.target.value)}
          >
            <option value="">Select year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </SelectField>
        </Field>

        <Field label="CV / resume" error={errors.resume} hint="PDF, DOC or DOCX, up to 5MB.">
          <label
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed px-6 py-8 text-center transition-colors hover:border-primary",
              errors.resume ? "border-destructive" : "border-input",
            )}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-primary">
              {data.resume ? (
                <Check className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Upload className="h-4 w-4" aria-hidden="true" />
              )}
            </span>
            <span className="text-sm font-semibold">{data.resume || "Upload your CV"}</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => set("resume", e.target.files?.[0]?.name ?? "")}
            />
          </label>
        </Field>
        <Field
          label="Cover letter"
          htmlFor="cover"
          optional
          hint={`${data.cover.length} / 1000 characters`}
        >
          <TextAreaField
            id="cover"
            maxLength={1000}
            value={data.cover}
            placeholder="Write a brief cover letter (optional)"
            onChange={(e) => set("cover", e.target.value)}
          />
        </Field>
      </div>
    </>
  );
}

function StepPreferences({ data, errors, set }: StepProps) {
  return (
    <>
      <StepHeading
        title="Working preferences"
        body="How and where you would like to work with us."
      />
      <div className="flex flex-col gap-7">
        <OptionGroup
          legend="Availability to join"
          name="availability"
          columns={4}
          options={["Immediately", "Within 15 days", "Within 30 days", "More than 30 days"]}
          value={data.availability}
          onChange={(v) => set("availability", v)}
          error={errors.availability}
        />
        <OptionGroup
          legend="Work preference"
          name="workPreference"
          columns={3}
          options={["On-site", "Hybrid", "Remote"]}
          value={data.workPreference}
          onChange={(v) => set("workPreference", v)}
          error={errors.workPreference}
        />
        <Field
          label="Preferred location"
          htmlFor="preferredLocation"
          error={errors.preferredLocation}
        >
          <SelectField
            id="preferredLocation"
            value={data.preferredLocation}
            invalid={!!errors.preferredLocation}
            onChange={(e) => set("preferredLocation", e.target.value)}
          >
            <option value="">Select location</option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </SelectField>
        </Field>
        <div className="grid gap-7 md:grid-cols-2">
          <Field
            label="Expected salary"
            htmlFor="salary"
            optional
            hint="Annual, in your local currency."
          >
            <TextField
              id="salary"
              value={data.salary}
              placeholder="Enter expected salary"
              onChange={(e) => set("salary", e.target.value)}
            />
          </Field>
          <OptionGroup
            legend="Willing to relocate?"
            name="relocate"
            columns={2}
            options={["Yes", "No"]}
            value={data.relocate}
            onChange={(v) => set("relocate", v)}
            error={errors.relocate}
          />
        </div>
      </div>
    </>
  );
}

function StepReview({ data, errors, set, goTo }: StepProps & { goTo: (n: number) => void }) {
  return (
    <>
      <StepHeading
        title="Review your application"
        body="Check everything below, then submit when you are happy."
      />
      <div className="flex flex-col gap-5">
        <ReviewCard
          title="Personal details"
          icon={<User className="h-4 w-4" aria-hidden="true" />}
          onEdit={() => goTo(1)}
        >
          <ReviewRow label="Full name">{data.fullName}</ReviewRow>
          <ReviewRow label="LinkedIn">{data.linkedin}</ReviewRow>
          <ReviewRow label="Email">{data.email}</ReviewRow>
          <ReviewRow label="GitHub">{data.github}</ReviewRow>
          <ReviewRow label="Phone">{data.phone}</ReviewRow>
          <ReviewRow label="Portfolio">{data.portfolio}</ReviewRow>
          <ReviewRow label="Location">{data.location}</ReviewRow>
        </ReviewCard>

        <ReviewCard
          title="Professional profile"
          icon={<Briefcase className="h-4 w-4" aria-hidden="true" />}
          onEdit={() => goTo(2)}
        >
          <ReviewRow label="Applying for">{data.role}</ReviewRow>
          <ReviewRow label="Skills">
            <span className="flex flex-wrap gap-1.5">
              {data.skills.map((s) => (
                <span key={s} className="rounded-sm border border-border px-2 py-0.5 text-xs">
                  {s}
                </span>
              ))}
            </span>
          </ReviewRow>
          <ReviewRow label="Experience">{data.experience}</ReviewRow>
          <ReviewRow label="Education">
            {[data.qualification, data.college, data.gradYear].filter(Boolean).join(" · ")}
          </ReviewRow>
          <ReviewRow label="CV">{data.resume}</ReviewRow>
          <ReviewRow label="Cover letter">{data.cover ? "Included" : ""}</ReviewRow>
        </ReviewCard>

        <ReviewCard
          title="Preferences"
          icon={<SlidersHorizontal className="h-4 w-4" aria-hidden="true" />}
          onEdit={() => goTo(3)}
        >
          <ReviewRow label="Availability">{data.availability}</ReviewRow>
          <ReviewRow label="Expected salary">{data.salary}</ReviewRow>
          <ReviewRow label="Work preference">{data.workPreference}</ReviewRow>
          <ReviewRow label="Willing to relocate">{data.relocate}</ReviewRow>
          <ReviewRow label="Preferred location">{data.preferredLocation}</ReviewRow>
        </ReviewCard>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm">
            <input
              type="checkbox"
              checked={data.confirm}
              onChange={(e) => set("confirm", e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[oklch(0.555_0.221_28.5)]"
            />
            <span>I confirm that the information provided is accurate.</span>
          </label>
          {errors.confirm && (
            <p className="mt-2 text-xs font-medium text-destructive">{errors.confirm}</p>
          )}
        </div>
      </div>
    </>
  );
}

function SuccessScreen({ data }: { data: Data }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl"
    >
      <div className="rounded-sm border border-border bg-card p-8 text-center shadow-card md:p-14">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-sm border border-primary/30 bg-primary/5 text-primary">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="eyebrow mt-8">Application received</p>
        <h1 className="display-2 mt-4 text-3xl md:text-4xl">
          Thank you{data.fullName ? `, ${data.fullName.split(" ")[0]}` : ""}.
        </h1>
        <p className="lead mx-auto mt-5 max-w-xl">
          Your application{data.role ? ` for ${data.role}` : ""} is with our team. We review every
          submission personally and reply within five working days
          {data.email ? ` at ${data.email}` : ""}.
        </p>

        <ol className="mx-auto mt-10 grid max-w-2xl gap-px overflow-hidden rounded-sm border border-border bg-border text-left sm:grid-cols-3">
          {[
            { t: "Review", d: "A hiring lead reads your application." },
            { t: "Intro call", d: "A 30 minute conversation about your work." },
            { t: "Technical session", d: "A practical discussion with the team." },
          ].map((s, i) => (
            <li key={s.t} className="bg-card p-5">
              <p className="font-display text-xs font-semibold tracking-[0.16em] text-primary">
                0{i + 1}
              </p>
              <p className="mt-2 font-display text-base font-semibold">{s.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/careers">Back to open roles</ButtonLink>
          <ButtonLink to="/insights" variant="outline">
            Read our insights
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Questions in the meantime?{" "}
          <Link to="/contact" className="link-underline font-semibold text-primary">
            Talk to us
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
}


