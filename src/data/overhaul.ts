// Content for the engineering-depth overhaul: delivery framework, comparisons,
// industry compliance, case-study reports, careers standards and contact timelines.

export const deliveryFramework = [
  {
    number: "01",
    title: "Understand & Plan",
    items: [
      "Conversation about your business and goals",
      "Review of tools you already use",
      "Written scope, timeline and cost range",
      "Short, fixed-price discovery phase",
    ],
  },
  {
    number: "02",
    title: "Design & Preview",
    items: [
      "Clickable preview you can try",
      "Feedback from real users",
      "Every scenario thought through",
      "Consistent look across all screens",
    ],
  },
  {
    number: "03",
    title: "Build in Stages",
    items: [
      "Progress demo every two weeks",
      "Automatic quality checks",
      "Every change reviewed by a second engineer",
      "Clear progress reporting",
    ],
  },
  {
    number: "04",
    title: "Launch & Support",
    items: [
      "Training and handover guides",
      "Monitoring after launch",
      "Agreed response times for issues",
      "You own all the code",
    ],
  },
];

export const saasComparison = [
  {
    criteria: "Data Ownership & IP",
    saas: "Data lives in the vendor's multi-tenant store; export formats and retention are set by the vendor's terms. No access to source code.",
    custom:
      "Full ownership of source code, schema and data from the first commit. Hosted in your own cloud account.",
  },
  {
    criteria: "Long-Term Total Cost of Ownership",
    saas: "Low year-one cost; per-seat pricing compounds as headcount grows, plus add-on modules and annual price uplifts over a 3-year term.",
    custom:
      "Higher year-one build cost; years two and three are hosting plus a scoped maintenance retainer, with no per-seat licensing.",
  },
  {
    criteria: "Custom Workflow Fit",
    saas: "Workflows are adapted to the product's model; exceptions handled in spreadsheets or manual steps.",
    custom:
      "Data model and state machines are designed around your actual approval chains, exceptions and roles.",
  },
  {
    criteria: "API / Database Integration Freedom",
    saas: "Limited to published endpoints, rate limits and webhook events the vendor chooses to expose.",
    custom:
      "Direct database access, purpose-built REST/GraphQL APIs and event streams to any internal or partner system.",
  },
  {
    criteria: "Compliance Control (HIPAA, GDPR)",
    saas: "Dependent on the vendor's BAA, sub-processor list and data-residency regions.",
    custom:
      "Residency, encryption keys, audit logging and retention policies configured to your compliance obligations.",
  },
];

export const engagementModels = [
  {
    title: "Dedicated Engineering Pod",
    lead: "Staff augmentation with embedded technical leads.",
    points: [
      "A tech lead plus 2–5 engineers embedded in your rituals and tooling",
      "Dedicated capacity billed monthly, scaled with 30 days' notice",
      "Your backlog, your roadmap — our engineering standards",
    ],
  },
  {
    title: "End-to-End Turnkey Delivery",
    lead: "Fixed scope, fixed timeline, end-to-end product delivery.",
    points: [
      "Scope and acceptance criteria agreed after the discovery sprint",
      "Milestone-based pricing tied to working software in staging",
      "Includes design, engineering, QA, launch and warranty period",
    ],
  },
  {
    title: "Modernization & Codebase Rescue",
    lead: "Codebase audit, refactoring and cloud migration.",
    points: [
      "Two-week audit: architecture, test coverage, security and dependency risk",
      "Strangler-pattern refactoring without a feature freeze",
      "Migration to containerised, IaC-managed cloud infrastructure",
    ],
  },
];

export const homeMetrics = [
  { value: "40+", label: "Types of project we design, build and support across our service range" },
  { value: "99.9%", label: "Uptime SLA target for supported production systems" },
  { value: "100%", label: "Client ownership of all code, data and documentation we produce" },
  { value: "<200ms", label: "Target page response time we engineer to by default" },
];

export type Capability = { title: string; body: string; points: string[]; slug: string };

export const capabilityTabs: { id: string; label: string; items: Capability[] }[] = [
  {
    id: "objective",
    label: "By Business Objective",
    items: [
      {
        title: "Replace an Old System",
        slug: "custom-software",
        body: "Move off ageing software step by step, without stopping the business.",
        points: [
          "Replace one part at a time",
          "Your data moved safely and checked",
          "Easy to roll back if anything goes wrong",
        ],
      },
      {
        title: "Sell More Online",
        slug: "ecommerce",
        body: "Online stores that stay fast and reliable during sales and busy seasons.",
        points: [
          "Fast pages even at peak traffic",
          "No duplicate or lost orders and payments",
          "Stock levels always accurate",
        ],
      },
      {
        title: "Run Operations in One System",
        slug: "business-automation",
        body: "One system for your approvals, tasks and exceptions — shaped around how you work.",
        points: [
          "Steps and approvals you can adjust",
          "Each person sees only what they should",
          "A record of every change",
        ],
      },
      {
        title: "Save Time with AI",
        slug: "ai-solutions",
        body: "Assistants and document reading that cut manual work, with accuracy you can check.",
        points: [
          "Answers based on your own documents",
          "Tested against real examples before launch",
          "Uncertain cases sent to a person",
        ],
      },
    ],
  },
  {
    id: "practice",
    label: "By Type of Solution",
    items: [
      {
        title: "Websites & Web Apps",
        slug: "web-app-development",
        body: "Websites, portals and internal tools that run in any browser.",
        points: [
          "Fast to load and found on Google",
          "Usable by people with disabilities",
          "Speed checked on every update",
        ],
      },
      {
        title: "Mobile Apps",
        slug: "mobile-app-development",
        body: "iPhone and Android apps for customers and field teams.",
        points: [
          "One build for both platforms where it fits",
          "Works without mobile signal",
          "Gradual store releases and quick updates",
        ],
      },
      {
        title: "Hosting & Reliability",
        slug: "software-maintenance",
        body: "Hosting that is monitored, backed up and quick to recover.",
        points: [
          "Set up the same way every time",
          "Automatic checks before every release",
          "Backup locations and instant alerts",
        ],
      },
      {
        title: "Connecting Your Systems",
        slug: "integration",
        body: "Information moving reliably between the tools you use.",
        points: [
          "Updates passed between systems automatically",
          "Secure access for partners and apps",
          "Connections that don't break on updates",
        ],
      },
    ],
  },
];

export const industryCompliance: Record<
  string,
  { points: { title: string; body: string }[]; benchmarks: { value: string; label: string }[] }
> = {
  healthcare: {
    points: [
      {
        title: "HIPAA compliance",
        body: "BAA-covered hosting, minimum-necessary access controls and PHI access logging reviewed quarterly.",
      },
      {
        title: "HL7/FHIR integrations",
        body: "FHIR R4 resources and HL7 v2 interfaces to EHRs, labs and scheduling systems through a validated integration layer.",
      },
      {
        title: "Encryption at rest and in transit",
        body: "AES-256 storage encryption with managed keys and TLS 1.2+ on every internal and external hop.",
      },
    ],
    benchmarks: [
      { value: "30–45%", label: "Reduction in clinical admin time per encounter" },
      { value: "60%", label: "Fewer manual re-entry errors after EHR integration" },
      { value: "< 1 day", label: "Typical referral turnaround, down from 3–5 days" },
    ],
  },
  finance: {
    points: [
      {
        title: "PCI-DSS Level 1",
        body: "Card data tokenised at the edge so application systems stay out of PCI scope.",
      },
      {
        title: "Immutable audit logging",
        body: "Append-only, hash-chained ledgers of every balance and permission change.",
      },
      {
        title: "Idempotent payment transactions",
        body: "Idempotency keys and outbox patterns so retries never double-charge.",
      },
      {
        title: "SOC 2 Type II controls",
        body: "Change management, access reviews and evidence collection built into the delivery pipeline.",
      },
    ],
    benchmarks: [
      { value: "70%", label: "Less manual reconciliation effort" },
      { value: "99.99%", label: "Ledger availability target" },
      { value: "3×", label: "Faster audit evidence preparation" },
    ],
  },
  logistics: {
    points: [
      {
        title: "Offline-first synchronization",
        body: "Local-first mobile storage with conflict resolution for depots and routes without coverage.",
      },
      {
        title: "Real-time geofencing",
        body: "Arrival, departure and dwell events triggered from device location streams.",
      },
      {
        title: "Sub-second route calculation",
        body: "Pre-computed road graphs and incremental re-routing when stops change.",
      },
      {
        title: "ERP webhook synchronization (SAP, NetSuite)",
        body: "Order, shipment and proof-of-delivery events pushed to SAP and NetSuite with retry queues.",
      },
    ],
    benchmarks: [
      { value: "18–25%", label: "Reduction in fuel and route mileage" },
      { value: "40%", label: "Fewer failed-delivery callbacks" },
      { value: "Same day", label: "Proof-of-delivery to invoice, down from 4 days" },
    ],
  },
  ecommerce: {
    points: [
      {
        title: "Headless Shopify Plus / Medusa",
        body: "Storefront decoupled from the commerce engine so merchandising evolves without replatforming.",
      },
      {
        title: "Sub-second checkout",
        body: "Edge-rendered checkout steps with pre-validated address and payment fields.",
      },
      {
        title: "Inventory reconciliation",
        body: "Warehouse system treated as source of truth, synced continuously to prevent oversells.",
      },
      {
        title: "Multi-currency VAT calculation",
        body: "Region-aware pricing and tax rules calculated server-side per destination.",
      },
    ],
    benchmarks: [
      { value: "+20–40%", label: "Mobile conversion uplift after checkout rebuild" },
      { value: "< 1%", label: "Oversell rate during promotions" },
      { value: "50%", label: "Faster campaign page launches" },
    ],
  },
  startups: {
    points: [
      {
        title: "SOC 2-ready foundations",
        body: "Access control, logging and change management set up early so enterprise sales are not blocked later.",
      },
      {
        title: "Multi-tenant data isolation",
        body: "Tenant scoping enforced in PostgreSQL row-level security rather than application code alone.",
      },
      {
        title: "GDPR-aware data handling",
        body: "Consent records, data export and deletion workflows built into the first release.",
      },
    ],
    benchmarks: [
      { value: "10–14 wks", label: "Typical MVP to first paying users" },
      { value: "< 5%", label: "Rework from discovery-validated scope" },
      { value: "0", label: "Re-platforming required at Series A" },
    ],
  },
  education: {
    points: [
      {
        title: "FERPA & GDPR student data controls",
        body: "Role-scoped access to student records with retention schedules per institution.",
      },
      {
        title: "LTI 1.3 & SSO integration",
        body: "Integration with LMS platforms and SAML/OIDC identity providers.",
      },
      {
        title: "WCAG 2.1 AA accessibility",
        body: "Learning interfaces tested with screen readers and keyboard-only navigation.",
      },
    ],
    benchmarks: [
      { value: "35%", label: "Less staff time on enrolment administration" },
      { value: "2×", label: "Faster course content publishing" },
      { value: "AA", label: "Accessibility conformance across learner flows" },
    ],
  },
  "real-estate": {
    points: [
      {
        title: "Lease & document audit trails",
        body: "Versioned lease records with e-signature evidence and immutable change history.",
      },
      {
        title: "Payment & escrow reconciliation",
        body: "Rent collection reconciled against bank feeds with idempotent ledger entries.",
      },
      {
        title: "Tenant data privacy (GDPR)",
        body: "Tenant records segregated per landlord entity with deletion workflows.",
      },
    ],
    benchmarks: [
      { value: "50%", label: "Faster lease turnaround" },
      { value: "90%", label: "Rent reconciliation automated" },
      { value: "30%", label: "Fewer maintenance follow-up calls" },
    ],
  },
  manufacturing: {
    points: [
      {
        title: "ISO 9001 traceability",
        body: "Batch, lot and inspection records linked from raw material to shipment.",
      },
      {
        title: "OT/IT network segregation",
        body: "Read-only data collection from shop-floor systems through a buffered gateway.",
      },
      {
        title: "ERP & MES synchronization",
        body: "Work orders and production counts synced between ERP and MES with reconciliation reports.",
      },
    ],
    benchmarks: [
      { value: "15–20%", label: "OEE improvement from downtime visibility" },
      { value: "80%", label: "Less paper-based inspection logging" },
      { value: "Minutes", label: "Batch recall traceability, down from days" },
    ],
  },
};

export type CaseReport = {
  kpis: { value: string; label: string }[];
  timeline: string;
  budget: string;
  team: string[];
  testimonial: { quote: string; name: string; title: string; company: string; initials: string };
  beforeAfter: { legacy: string; solution: string }[];
  stack: { category: string; items: string[] }[];
  sprints: string;
};

const defaultTeam = ["1 Tech Lead", "3 Full-stack Engineers", "1 Product Designer", "1 QA"];

export const caseReports: Record<string, CaseReport> = {
  "custom-ecommerce-platform": {
    kpis: [
      { value: "+140%", label: "Checkout Conversion" },
      { value: "4.8s → 0.9s", label: "Page Load" },
      { value: "$1.8M", label: "Annual Operational Savings" },
      { value: "10 Weeks", label: "Pilot Launch" },
    ],
    timeline: "10-week pilot, 6-month full rollout",
    budget: "$150k – $250k",
    team: defaultTeam,
    testimonial: {
      quote:
        "We stopped overselling during promotions in the first month. The team pushed back on scope where it mattered and handed over a codebase our own engineers now extend every week.",
      name: "Daniel Okafor",
      title: "VP of Technology",
      company: "Northfield Goods",
      initials: "DO",
    },
    beforeAfter: [
      {
        legacy: "Hosted theme with client-side rendering and 4.8s load",
        solution: "Server-rendered headless storefront on an edge CDN",
      },
      {
        legacy: "Stock updated by nightly CSV import",
        solution: "Event-driven stock sync from the warehouse system",
      },
      {
        legacy: "Five-step checkout with late validation errors",
        solution: "Two-step checkout with inline validation and wallet payments",
      },
    ],
    stack: [
      { category: "Frontend", items: ["React", "TanStack Start", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Medusa", "GraphQL"] },
      { category: "Database", items: ["PostgreSQL", "Redis"] },
      { category: "Cloud / Infrastructure", items: ["AWS", "Terraform", "CloudFront"] },
      { category: "Third-Party Integrations", items: ["Stripe", "Algolia", "Warehouse WMS"] },
    ],
    sprints: "Comparable storefront rebuilds typically run 5 sprints (10 weeks) to pilot.",
  },
  "field-operations-mobile-app": {
    kpis: [
      { value: "-38%", label: "Failed Deliveries" },
      { value: "4 days → same day", label: "POD to Invoice" },
      { value: "$920k", label: "Annual Operational Savings" },
      { value: "12 Weeks", label: "Pilot Launch" },
    ],
    timeline: "12-week pilot across 2 depots, national rollout in 5 months",
    budget: "$120k – $200k",
    team: defaultTeam,
    testimonial: {
      quote:
        "Drivers trusted the app because it kept working in dead zones. Our finance team now invoices the same day a delivery is signed for.",
      name: "Priya Raman",
      title: "Director of Product Operations",
      company: "Corridor Freight",
      initials: "PR",
    },
    beforeAfter: [
      {
        legacy: "Paper delivery notes scanned at end of shift",
        solution: "Offline-first mobile proof of delivery with photo and signature",
      },
      {
        legacy: "Dispatch by phone and spreadsheet",
        solution: "Live route board with geofenced arrival events",
      },
      {
        legacy: "Manual re-keying into NetSuite",
        solution: "Webhook sync of delivery events to NetSuite",
      },
    ],
    stack: [
      { category: "Frontend", items: ["React Native", "React", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "Kafka"] },
      { category: "Database", items: ["PostgreSQL", "SQLite (device)"] },
      { category: "Cloud / Infrastructure", items: ["GCP", "Docker", "Terraform"] },
      { category: "Third-Party Integrations", items: ["NetSuite", "Mapbox", "Twilio"] },
    ],
    sprints: "Comparable field-operations apps typically run 6 sprints (12 weeks) to pilot.",
  },
  "ai-document-intelligence": {
    kpis: [
      { value: "-72%", label: "Manual Review Time" },
      { value: "96.4%", label: "Extraction Accuracy" },
      { value: "$1.1M", label: "Annual Operational Savings" },
      { value: "8 Weeks", label: "Pilot Launch" },
    ],
    timeline: "8-week pilot on one document type, 4 types in production by month 5",
    budget: "$100k – $180k",
    team: ["1 Tech Lead", "2 Full-stack Engineers", "1 ML Engineer", "1 Product Designer", "1 QA"],
    testimonial: {
      quote:
        "They insisted on an evaluation set before writing a prompt. That is why our compliance team signed off — every extracted field shows where it came from.",
      name: "Helen Marsh",
      title: "Head of Operations Technology",
      company: "Ashgrove Capital",
      initials: "HM",
    },
    beforeAfter: [
      {
        legacy: "Analysts re-typing figures from PDF statements",
        solution: "LLM extraction with field-level source citations",
      },
      {
        legacy: "No measure of error rate",
        solution: "Versioned evaluation set run on every model or prompt change",
      },
      {
        legacy: "All documents reviewed manually",
        solution: "Confidence-threshold routing to a human review queue",
      },
    ],
    stack: [
      { category: "Frontend", items: ["React", "TypeScript"] },
      { category: "Backend", items: ["Python", "FastAPI"] },
      { category: "Database", items: ["PostgreSQL", "pgvector"] },
      { category: "Cloud / Infrastructure", items: ["Azure", "Docker", "GitHub Actions"] },
      { category: "Third-Party Integrations", items: ["Azure OpenAI", "SharePoint", "Okta SSO"] },
    ],
    sprints: "Comparable document-intelligence pilots typically run 4 sprints (8 weeks).",
  },
  "clinical-workflow-platform": {
    kpis: [
      { value: "-41%", label: "Admin Time per Patient" },
      { value: "5 days → 1 day", label: "Referral Turnaround" },
      { value: "$640k", label: "Annual Operational Savings" },
      { value: "14 Weeks", label: "Pilot Launch" },
    ],
    timeline: "14-week pilot in one clinic group, 3 sites live by month 7",
    budget: "$180k – $300k",
    team: defaultTeam,
    testimonial: {
      quote:
        "Clinicians were part of every design review. The FHIR integration with our EHR passed security review first time.",
      name: "Dr. Samuel Reyes",
      title: "Director of Clinical Systems",
      company: "Meridian Care Group",
      initials: "SR",
    },
    beforeAfter: [
      {
        legacy: "Referrals tracked in shared inboxes and fax",
        solution: "Structured referral workflow with status tracking",
      },
      {
        legacy: "Duplicate data entry into the EHR",
        solution: "FHIR R4 integration writing directly to patient records",
      },
      {
        legacy: "No audit of who viewed records",
        solution: "PHI access logging with quarterly review reports",
      },
    ],
    stack: [
      { category: "Frontend", items: ["React", "TanStack Start"] },
      { category: "Backend", items: ["Node.js", "HL7/FHIR gateway"] },
      { category: "Database", items: ["PostgreSQL (RLS)"] },
      { category: "Cloud / Infrastructure", items: ["AWS (HIPAA)", "Terraform", "KMS"] },
      { category: "Third-Party Integrations", items: ["EHR (FHIR R4)", "Twilio", "DocuSign"] },
    ],
    sprints: "Comparable clinical workflow platforms typically run 7 sprints (14 weeks) to pilot.",
  },
};

export const engineeringCulture = [
  {
    title: "Test coverage thresholds",
    body: "80% line coverage enforced in CI on business logic; critical paths require integration tests before merge.",
  },
  {
    title: "Pull request reviews",
    body: "Every change reviewed by at least one other engineer. PRs stay under 400 lines so reviews are real, not rubber stamps.",
  },
  {
    title: "Documentation-first RFCs",
    body: "Significant architecture decisions start as a written RFC, reviewed asynchronously before anyone writes code.",
  },
  {
    title: "No weekend on-call",
    body: "On-call rotations cover weekday business hours. Weekend incidents are handled by a paid, opt-in rotation only.",
  },
];

export const perks = [
  { title: "Annual hardware refresh", body: "A new laptop and peripherals budget every year." },
  { title: "$3,000 learning stipend", body: "Courses, books, conferences and certifications." },
  { title: "Remote-first stipend", body: "Home-office setup and a monthly co-working allowance." },
  {
    title: "Comprehensive medical insurance",
    body: "Medical, dental and vision for you and dependants.",
  },
  {
    title: "30 days PTO",
    body: "Plus local public holidays. Minimum 15 days taken is encouraged.",
  },
];

export const hiringSteps = [
  {
    number: "01",
    title: "30-min Intro & Role Alignment",
    body: "A conversation with the hiring manager about the role, your experience and what you want next.",
  },
  {
    number: "02",
    title: "Practical Code / Architecture Deep-Dive",
    body: "No live LeetCode puzzles. We discuss a real-world problem — a past project of yours or a scenario from our work.",
  },
  {
    number: "03",
    title: "Team Collaboration & Culture Chat",
    body: "Meet the engineers and designers you would work with day to day.",
  },
  {
    number: "04",
    title: "Written Offer within 48 Hours",
    body: "A clear written offer with salary, equity and start date within 48 hours of the final conversation.",
  },
];

export const contactNext = [
  {
    number: "01",
    title: "NDA",
    body: "Mutual NDA signed with a 4-hour turnaround during business hours.",
  },
  {
    number: "02",
    title: "Technical Review",
    body: "A senior engineer reviews your requirement within 24 hours and prepares questions.",
  },
  {
    number: "03",
    title: "Discovery",
    body: "A 30-minute discovery call with a senior engineer — not a sales representative.",
  },
];

export const timeZones = [
  {
    id: "EST",
    label: "EST",
    city: "New York",
    hours: "9:00 – 18:00 EST",
    overlap:
      "Full coverage from our Americas engineering leads; overlap with GMT team until 12:00 EST.",
  },
  {
    id: "GMT",
    label: "GMT",
    city: "London",
    hours: "8:00 – 18:00 GMT",
    overlap:
      "Full coverage from our European team, with afternoon overlap to EST and morning overlap to IST.",
  },
  {
    id: "SGT",
    label: "SGT",
    city: "Singapore",
    hours: "9:00 – 18:00 SGT",
    overlap: "Covered by our APAC engineers; IST team available for same-day follow-up.",
  },
  {
    id: "IST",
    label: "IST",
    city: "Bengaluru",
    hours: "9:30 – 18:30 IST",
    overlap: "Full coverage from our India delivery centre with evening overlap to GMT.",
  },
];

