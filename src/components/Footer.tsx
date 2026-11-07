import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { company, industries, services } from "@/data/site";

const serviceLinks = services.slice(0, 6);

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-ink-foreground/15 pb-14 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Logo inverted size="lg" />
            <p className="mt-6 max-w-sm text-lg text-ink-foreground/70">{company.tagline}</p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:bg-primary-hover"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <FooterCol title="Company">
              <FLink to="/about">About</FLink>
              <FLink to="/about/$slug" params={{ slug: "process" }}>
                Process
              </FLink>
              <FLink to="/about/$slug" params={{ slug: "technology" }}>
                Technology
              </FLink>
              <FLink to="/about/$slug" params={{ slug: "approach" }}>
                Approach
              </FLink>
              <FLink to="/careers">Careers</FLink>
            </FooterCol>

            <FooterCol title="Services">
              {serviceLinks.map((s) => (
                <FLink key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                  {s.title}
                </FLink>
              ))}
              <FLink to="/services">All services</FLink>
            </FooterCol>

            <FooterCol title="Industries">
              {industries.map((i) => (
                <FLink key={i.slug} to="/industries/$slug" params={{ slug: i.slug }}>
                  {i.title}
                </FLink>
              ))}
            </FooterCol>

            <FooterCol title="Resources">
              <FLink to="/insights">Insights</FLink>
              <FLink to="/case-studies">Case studies</FLink>
              <FLink to="/contact">Contact</FLink>
              <a
                href={`mailto:${company.email}`}
                className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
              >
                {company.email}
              </a>
              <div className="flex flex-wrap gap-3 pt-1">
                {company.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </FooterCol>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-ink-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Zentleaf. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-ink-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-ink-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-foreground/50">
        {title}
      </h2>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FLink({
  to,
  params,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
    >
      {children}
    </Link>
  );
}

