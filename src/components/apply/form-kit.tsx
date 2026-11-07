import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

/* --------------------------------- stepper -------------------------------- */

export type StepDef = { id: number; label: string; icon: ReactNode };

export function Stepper({ steps, current }: { steps: StepDef[]; current: number }) {
  return (
    <ol className="flex items-start gap-1 sm:gap-2" aria-label="Application progress">
      {steps.map((step, i) => {
        const done = current > step.id;
        const active = current === step.id;
        return (
          <li key={step.id} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex w-full items-center gap-1 sm:gap-2">
              <span
                className={cn(
                  "hidden h-px flex-1 transition-colors duration-500 sm:block",
                  i === 0 && "invisible",
                  done || active ? "bg-primary/60" : "bg-border",
                )}
              />
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border transition-all duration-300 sm:h-11 sm:w-11",
                  done && "border-primary bg-primary text-primary-foreground",
                  active && "border-primary text-primary shadow-card",
                  !done && !active && "border-border text-muted-foreground",
                )}
                aria-current={active ? "step" : undefined}
              >
                {done ? <Check className="h-4 w-4" aria-hidden="true" /> : step.icon}
              </span>
              <span
                className={cn(
                  "hidden h-px flex-1 transition-colors duration-500 sm:block",
                  i === steps.length - 1 && "invisible",
                  done ? "bg-primary/60" : "bg-border",
                )}
              />
            </div>
            <div className="text-center">
              <p
                className={cn(
                  "font-display text-xs font-semibold tracking-[0.16em]",
                  active || done ? "text-primary" : "text-muted-foreground",
                )}
              >
                {String(step.id).padStart(2, "0")}
              </p>
              <p
                className={cn(
                  "mt-0.5 text-[11px] leading-tight sm:text-sm",
                  active ? "font-semibold text-foreground" : "text-muted-foreground",
                )}
              >
                {step.label}
              </p>
            </div>
            <span
              className={cn(
                "h-0.5 w-full max-w-24 rounded-sm transition-colors duration-300",
                active ? "bg-primary" : "bg-transparent",
              )}
            />
          </li>
        );
      })}
    </ol>
  );
}

/* ---------------------------------- fields -------------------------------- */

export function Field({
  label,
  htmlFor,
  error,
  hint,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor?: string | undefined;
  error?: string | undefined;
  hint?: string | undefined;
  optional?: boolean | undefined;
  className?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-semibold tracking-tight">
        {label}
        {optional && <span className="ml-1.5 font-normal text-muted-foreground">(Optional)</span>}
      </label>
      {children}
      {error ? (
        <p className="text-xs font-medium text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

const controlBase =
  "w-full rounded-sm border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-primary disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground";

export function TextField({
  invalid,
  icon,
  className,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean; icon?: ReactNode }) {
  if (icon) {
    return (
      <div
        className={cn(
          "flex items-stretch overflow-hidden rounded-sm border bg-card transition-colors focus-within:border-primary",
          invalid ? "border-destructive" : "border-input",
        )}
      >
        <span className="flex w-11 shrink-0 items-center justify-center border-r border-border bg-surface text-muted-foreground">
          {icon}
        </span>
        <input
          {...rest}
          aria-invalid={invalid || undefined}
          className={cn(
            "min-w-0 flex-1 bg-card px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70",
            className,
          )}
        />
      </div>
    );
  }
  return (
    <input
      {...rest}
      aria-invalid={invalid || undefined}
      className={cn(controlBase, invalid ? "border-destructive" : "border-input", className)}
    />
  );
}

export function SelectField({
  invalid,
  className,
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  return (
    <select
      {...rest}
      aria-invalid={invalid || undefined}
      className={cn(
        controlBase,
        "appearance-none bg-[length:16px] pr-10",
        invalid ? "border-destructive" : "border-input",
        className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'><path d='m6 9 6 6 6-6'/></svg>\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 0.9rem center",
      }}
    >
      {children}
    </select>
  );
}

export function TextAreaField({
  invalid,
  className,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      {...rest}
      aria-invalid={invalid || undefined}
      className={cn(
        controlBase,
        "min-h-32 resize-y",
        invalid ? "border-destructive" : "border-input",
        className,
      )}
    />
  );
}

export function OptionGroup({
  legend,
  name,
  options,
  value,
  onChange,
  columns = 4,
  error,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  columns?: 2 | 3 | 4;
  error?: string | undefined;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-sm font-semibold tracking-tight">{legend}</legend>
      <div
        className={cn(
          "grid overflow-hidden rounded-sm border",
          error ? "border-destructive" : "border-input",
          columns === 2 && "grid-cols-1 sm:grid-cols-2",
          columns === 3 && "grid-cols-1 sm:grid-cols-3",
          columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        )}
      >
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <label
              key={opt}
              className={cn(
                "flex cursor-pointer items-center gap-3 border-b border-border px-4 py-3.5 text-sm transition-colors last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0",
                selected
                  ? "bg-primary/5 font-medium text-foreground"
                  : "text-muted-foreground hover:bg-surface",
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={selected}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              <span
                className={cn(
                  "flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border transition-colors",
                  selected ? "border-primary" : "border-input",
                )}
              >
                <span
                  className={cn(
                    "h-2 w-2 rounded-full transition-transform",
                    selected ? "scale-100 bg-primary" : "scale-0 bg-transparent",
                  )}
                />
              </span>
              <span className="min-w-0 truncate">{opt}</span>
            </label>
          );
        })}
      </div>
      {error && <p className="mt-2 text-xs font-medium text-destructive">{error}</p>}
    </fieldset>
  );
}

/* --------------------------------- review --------------------------------- */

export function ReviewCard({
  title,
  icon,
  onEdit,
  children,
}: {
  title: string;
  icon: ReactNode;
  onEdit: () => void;
  children: ReactNode;
}) {
  return (
    <section className="rounded-sm border border-border bg-card">
      <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border text-primary">
            {icon}
          </span>
          <h3 className="truncate font-display text-base font-semibold">{title}</h3>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="shrink-0 rounded-sm border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
        >
          Edit
        </button>
      </header>
      <dl className="grid gap-x-10 gap-y-3 px-5 py-5 md:grid-cols-2 md:px-6">{children}</dl>
    </section>
  );
}

export function ReviewRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,9rem)_minmax(0,1fr)] items-start gap-4 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="min-w-0 break-words font-medium">
        {children || <span className="text-muted-foreground">—</span>}
      </dd>
    </div>
  );
}

