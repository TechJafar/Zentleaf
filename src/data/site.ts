import heroHome from "@/assets/hero-home.jpg";
import team from "@/assets/team.jpg";
import product from "@/assets/product.jpg";
import cloud from "@/assets/cloud.jpg";
import industryImg from "@/assets/industry.jpg";
import aiImg from "@/assets/ai.jpg";
import abstractGrid from "@/assets/abstract-grid.jpg";

export const images = { heroHome, team, product, cloud, industry: industryImg, ai: aiImg, abstract: abstractGrid };

export const company = {
  name: "Zentleaf",
  tagline: "You bring the requirement. Zentleaf builds the digital solution.",
  email: "hello@zentleaf.com",
  phone: "+1 (555) 018-4420",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/zentleaf" },
    { label: "GitHub", href: "https://github.com/zentleaf" },
    { label: "X", href: "https://x.com/zentleaf" },
  ],
};

export type Faq = { q: string; a: string };

export type SubService = {
  title: string;
  description: string;
  points: string[];
  image?: string;
  badge?: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  problems: string[];
  solutions: { title: string; body: string }[];
  subServices: SubService[];
  capabilities: string[];
  technology: string[];
  deliverables: string[];
  industries: string[];
  faqs: Faq[];
};

const baseFaqs = (title: string): Faq[] => [
  {
    q: `I'm not technical. Can I still start a ${title} project?`,
    a: "Yes. Most of our clients are business owners and managers, not developers. Tell us what is slowing you down or what you want to offer your customers, in your own words. We translate that into a plan and explain every decision in plain language.",
  },
  {
    q: "What happens in the first conversation?",
    a: "We ask about your business, who will use the solution, what you use today and what a good result looks like. Afterwards you receive a written summary with a recommended approach, an estimated timeline and a cost range — before you commit to anything.",
  },
  {
    q: "Can you work with the tools and team we already have?",
    a: "Yes. We can handle the whole project for you, or work alongside your staff and connect to the systems you already use, so you don't have to replace what works.",
  },
  {
    q: "What happens after launch?",
    a: "You own what we build, with documentation so any team can continue the work. If you want, we stay on to keep it secure, fix issues and make improvements on an agreed monthly plan.",
  },
  {
    q: "How is pricing decided?",
    a: "Clearly defined projects get a fixed price. Projects that will evolve as you learn are priced in short, budgeted phases, so you always know what the next stage costs and can pause between them.",
  },
];

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Custom Website Development",
    short:
      "A professional website that explains what you do clearly and turns visitors into enquiries.",
    intro:
      "Your website is often the first conversation a customer has with your business. We build websites that load quickly, read clearly on any phone or laptop, are easy for your team to update, and make it obvious how to get in touch.",
    image: product,
    problems: [
      "Your current site looks dated or like every other template",
      "Visitors leave because pages are slow or confusing on mobile",
      "Every small text or image change needs a developer",
      "You can't tell whether the website brings in any business",
    ],
    solutions: [
      {
        title: "Structured around your customers",
        body: "We organise pages around the questions your customers ask before they buy, so they find answers and contact you sooner.",
      },
      {
        title: "Fast on every device",
        body: "Pages are built to load quickly, even on mobile data, because slow sites quietly lose visitors.",
      },
      {
        title: "Easy for your team to update",
        body: "You get a simple editing system so your staff can change text, images and news without calling us.",
      },
    ],
    subServices: [
      {
        title: "Corporate & B2B Websites",
        description:
          "Engineered to establish immediate credibility with institutional buyers, decision-makers, and partners. Structured around clarity of offering, structured case studies, and fast lead generation.",
        points: [
          "Architected for executive buyer decision journeys",
          "Zero-friction lead capture and RFQ routing",
          "Enterprise-grade performance with sub-second page loads",
        ],
        image: product,
        badge: "B2B Focus",
      },
      {
        title: "High-Performance Marketing & Landing Pages",
        description:
          "Conversion-focused landing systems designed for paid campaigns and product launches with strict A/B testing infrastructure and instant page interactivity.",
        points: [
          "Granular conversion tracking & analytics integrations",
          "Ultra-responsive layouts engineered for mobile ad traffic",
          "Instant interactivity with minimal client-side overhead",
        ],
        image: heroHome,
        badge: "Growth & CRO",
      },
      {
        title: "Headless CMS & Content Publishing Hubs",
        description:
          "Empower your marketing and communications teams to publish case studies, blogs, and landing pages without touching code or waiting on engineering cycles.",
        points: [
          "Sanity, Strapi, or Contentful headless architectures",
          "Visual preview environments for editorial teams",
          "Role-based publishing workflows and approval chains",
        ],
        image: cloud,
        badge: "Content Freedom",
      },
      {
        title: "Accessible & Responsive Frontend Engineering",
        description:
          "Accessible, semantic HTML5 structure with modern React/TypeScript frameworks meeting international regulatory and WCAG 2.1 AA accessibility standards.",
        points: [
          "Strict WCAG 2.1 AA accessibility compliance",
          "Cross-browser consistency across all legacy and modern devices",
          "Automated Lighthouse CI performance and SEO score validation",
        ],
        image: team,
        badge: "Engineering Standard",
      },
    ],
    capabilities: [
      "Clear page structure and copy guidance",
      "Content you can edit yourself",
      "Websites in more than one language",
      "Enquiry tracking so you see what works",
      "Accessible to people with disabilities",
      "Set up to be found on Google",
    ],
    technology: [
      "React",
      "TypeScript",
      "Next.js / TanStack Start",
      "Tailwind CSS",
      "Headless CMS",
      "Edge hosting and CDN",
    ],
    deliverables: [
      "A page plan agreed with you before design starts",
      "Design for every page type",
      "Your live website",
      "Training for your team on editing content",
      "A speed and search-readiness report",
    ],
    industries: ["startups", "finance", "real-estate", "education"],
    faqs: baseFaqs("website"),
  },
  {
    slug: "web-app-development",
    title: "Web Application Development",
    short:
      "Online software your team or customers use through a browser — built around how your business actually runs.",
    intro:
      "When work is managed through spreadsheets, email chains and several disconnected tools, things get missed. A web application brings that work into one place your team can log into from anywhere — a customer portal, a booking system, an internal operations tool or a dashboard.",
    image: cloud,
    problems: [
      "Important work is tracked in spreadsheets that only one person understands",
      "Staff type the same information into several systems",
      "Nobody can see the status of an order, job or request at a glance",
      "Your current software can't adapt as the business changes",
    ],
    solutions: [
      {
        title: "We learn your process first",
        body: "We sit with the people doing the work and map how it really happens — including the exceptions — before designing any screens.",
      },
      {
        title: "The right access for each person",
        body: "Staff, managers, customers and partners each see only what they should, with a record of who changed what.",
      },
      {
        title: "Useful early, improved over time",
        body: "A first working version goes to real users quickly, then grows based on their feedback rather than guesses.",
      },
    ],
    subServices: [
      {
        title: "Custom SaaS & Cloud Product Platforms",
        description:
          "Multi-tenant, cloud-native web applications engineered for scale, high concurrency, and reliable recurring subscription operations with robust tenant data isolation.",
        points: [
          "Robust multi-tenant database isolation",
          "Stripe & automated billing lifecycle integrations",
          "Granular role-based access control (RBAC) and audit logging",
        ],
        image: cloud,
        badge: "SaaS Scale",
      },
      {
        title: "Internal Operations & Workflow Portals",
        description:
          "Consolidate fragmented spreadsheets and disparate manual tools into a unified operational command center for your internal teams and department heads.",
        points: [
          "Custom workflow state machines and task routing",
          "Real-time sync between operations, inventory, and finance",
          "Complete audit trail tracking every edit, approval, and transaction",
        ],
        image: product,
        badge: "Operations",
      },
      {
        title: "Customer & Client Self-Service Portals",
        description:
          "Secure, self-service portals where clients can review project milestones, download invoices, submit tickets, and manage accounts independently 24/7.",
        points: [
          "Bi-directional data synchronization with core backends",
          "Secure document repository and digital signature capture",
          "Custom branding and white-labeling capabilities",
        ],
        image: team,
        badge: "Client Experience",
      },
      {
        title: "Real-Time Dashboards & Analytics Engines",
        description:
          "High-speed data visualization engines processing telemetry, financial KPIs, and operational metrics with sub-second update cycles.",
        points: [
          "Interactive charts, filtered queries, and scheduled CSV/PDF exports",
          "WebSockets and Server-Sent Events for live data feeds",
          "Optimized aggregation queries for million-row datasets",
        ],
        image: abstractGrid,
        badge: "Live Telemetry",
      },
    ],
    capabilities: [
      "Dashboards and reports",
      "Different access levels for different users",
      "Approvals and task tracking",
      "Customer and partner portals",
      "Document uploads and storage",
      "Connections to your existing tools",
    ],
    technology: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST and GraphQL APIs",
      "Cloud hosting",
    ],
    deliverables: [
      "A map of your current and future process",
      "Clickable preview of key screens",
      "Your working application, released in stages",
      "Automated checks that catch errors before users do",
      "Hosting set up and handed over",
    ],
    industries: ["logistics", "manufacturing", "finance", "healthcare"],
    faqs: baseFaqs("web application"),
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    short: "iPhone and Android apps for your customers, or for staff working away from a desk.",
    intro:
      "Some work happens on the move — customers ordering or booking from their phone, technicians on site, drivers on the road, inspectors in the field. We build mobile apps for those moments, and handle the App Store and Google Play process for you.",
    image: product,
    problems: [
      "Staff in the field can't use desktop tools properly",
      "Work stops when there is no mobile signal",
      "Building separate iPhone and Android apps looks too expensive",
      "Previous apps were rejected by the app stores or were slow to update",
    ],
    solutions: [
      {
        title: "One app, both platforms",
        body: "Where it suits the project, one shared build runs on both iPhone and Android, which keeps cost and maintenance down.",
      },
      {
        title: "Works without signal",
        body: "Information is saved on the phone and syncs automatically once a connection returns.",
      },
      {
        title: "Store launch handled",
        body: "We prepare the store listings, manage approval and roll the app out gradually so problems are caught early.",
      },
    ],
    subServices: [
      {
        title: "Cross-Platform iOS & Android Apps",
        description:
          "Deliver high-fidelity native iOS and Android user experiences from a unified React Native / TypeScript codebase, reducing development overhead and release cycles.",
        points: [
          "Shared business logic across iOS and Android",
          "Native UI performance matching 60fps fluid animations",
          "Over-the-air (OTA) rapid hotfix deployment pipelines",
        ],
        image: product,
        badge: "Dual Platform",
      },
      {
        title: "Field Operations & Offline-First Apps",
        description:
          "Engineered for field technicians, inspectors, and logistics drivers who operate in remote environments with intermittent or zero cellular connectivity.",
        points: [
          "Local SQLite storage with automatic conflict resolution",
          "Background data sync upon network reconnection",
          "Hardware sensor integration: GPS tracking, barcode & QR scanning",
        ],
        image: industryImg,
        badge: "Offline Ready",
      },
      {
        title: "Consumer Mobile Apps & In-App Commerce",
        description:
          "Mobile applications designed for frictionless user onboarding, push notification engagement, biometric authentication, and seamless checkout flows.",
        points: [
          "Apple Pay, Google Pay, and localized digital wallet support",
          "Personalized push notification campaigns and deep linking",
          "Biometric Face ID / Fingerprint instant login",
        ],
        image: heroHome,
        badge: "Customer Engagement",
      },
      {
        title: "App Store & Play Store Lifecycle Launch",
        description:
          "End-to-end guidance through Apple Developer Program and Google Play Store compliance, review guidelines, and phased production rollouts.",
        points: [
          "Zero-rejection App Store review compliance audits",
          "Automated Fastlane build and screenshot generation pipelines",
          "Phased staging rollouts to eliminate release risks",
        ],
        image: team,
        badge: "Store Compliance",
      },
    ],
    capabilities: [
      "Apps for iPhone and Android",
      "Offline use with automatic sync",
      "Notifications to users",
      "Camera, GPS and barcode scanning",
      "In-app payments",
      "App Store and Google Play publishing",
    ],
    technology: ["React Native", "Swift", "Kotlin", "Firebase", "REST APIs", "CI/CD for mobile"],
    deliverables: [
      "A test version you can try on your own phone",
      "Published iPhone and Android apps",
      "Store listings and screenshots",
      "Usage and crash reporting",
      "An ongoing support plan",
    ],
    industries: ["healthcare", "logistics", "ecommerce", "real-estate"],
    faqs: baseFaqs("mobile app"),
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    short: "Software built around the way your business works, when ready-made products don't fit.",
    intro:
      "Off-the-shelf software is the right choice for many needs — and we'll tell you when it is. But when your process is what makes you different, or you keep paying for features you don't use while missing the ones you need, custom software can pay for itself.",
    image: cloud,
    problems: [
      "Ready-made products force you to change how you work",
      "Subscription costs keep rising without matching value",
      "An old system runs the business but nobody dares change it",
      "Key business rules exist only in one person's head",
    ],
    solutions: [
      {
        title: "Your rules, written into the software",
        body: "Pricing logic, approvals, exceptions — we capture how your business decides things so the software does it consistently.",
      },
      {
        title: "Built in replaceable parts",
        body: "The system is split into clear sections, so one part can be changed later without rebuilding everything.",
      },
      {
        title: "Nothing locked in",
        body: "You receive documentation and tests so your own team, or another supplier, can take over at any time.",
      },
    ],
    subServices: [
      {
        title: "Enterprise Business Logic & Rule Engines",
        description:
          "Bespoke software systems built specifically to enforce your unique proprietary operational algorithms, pricing formulas, and regulatory compliance rules.",
        points: [
          "Zero dependency on restrictive off-the-shelf SaaS constraints",
          "Complex calculation engines and validation pipelines",
          "Complete code ownership and intellectual property retention",
        ],
        image: cloud,
        badge: "Bespoke Logic",
      },
      {
        title: "Legacy Software Modernization & Refactoring",
        description:
          "Safely migrate critical legacy systems off obsolete technologies onto modern, containerized cloud stacks without pausing live business operations.",
        points: [
          "Strangler-fig pattern for zero-downtime phased migration",
          "Comprehensive automated test suites safeguarding business logic",
          "Elimination of obsolete server maintenance and licensing fees",
        ],
        image: abstractGrid,
        badge: "Modernization",
      },
      {
        title: "Data Migration & Schema Synchronization",
        description:
          "Extract, clean, transform, and load mission-critical enterprise data between disparate legacy databases and modern cloud schemas.",
        points: [
          "Zero-data-loss validation and checksum parity tests",
          "Automated rollback safety nets and dry-run execution",
          "High-throughput batch processing pipelines",
        ],
        image: product,
        badge: "Data Integrity",
      },
      {
        title: "Secure Cloud Infrastructure & API Backends",
        description:
          "Resilient backend architectures built on Node.js, Python, PostgreSQL, and Docker with automated CI/CD and immutable infrastructure.",
        points: [
          "Infrastructure as Code (Terraform / CloudFormation)",
          "High-availability clustering and automated disaster recovery",
          "Strict security hardening and vulnerability scanning",
        ],
        image: industryImg,
        badge: "Cloud Resilient",
      },
    ],
    capabilities: [
      "Replacing or modernising old systems",
      "Moving data safely from old to new",
      "Connecting to the tools you already use",
      "Reporting on the numbers that matter to you",
      "Long-term maintenance",
      "Advice on build versus buy",
    ],
    technology: ["TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "Cloud infrastructure"],
    deliverables: [
      "A recommendation on whether to build, buy or combine",
      "A plan for the system and how data will move",
      "Working software delivered in stages",
      "Data moved from your old system",
      "Full documentation you own",
    ],
    industries: ["manufacturing", "finance", "logistics", "healthcare"],
    faqs: baseFaqs("custom software"),
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Designing websites and software that people understand without training.",
    intro:
      "Good design is not just how something looks — it's whether customers can complete a purchase, or staff can finish a task without asking for help. We design and test before anything is built, which is far cheaper than fixing problems after launch.",
    image: team,
    problems: [
      "Users need training or support for simple tasks",
      "The product feels inconsistent as features are added",
      "Developers can't build accurately from the designs you have",
      "Accessibility was never considered",
    ],
    solutions: [
      {
        title: "Talk to users first",
        body: "We speak to the people who will use the product and watch how they work, so design decisions are based on evidence.",
      },
      {
        title: "Test before you build",
        body: "You get a clickable preview we test with real users — changes at this stage cost hours, not weeks.",
      },
      {
        title: "A reusable design kit",
        body: "Colours, buttons and layouts are documented so every new page stays consistent.",
      },
    ],
    subServices: [
      {
        title: "User Research & Information Architecture",
        description:
          "Deep qualitative and quantitative analysis of how your actual users, customers, and operators interact with your digital workflows.",
        points: [
          "Stakeholder interviews and user persona synthesis",
          "Information architecture and clickable wireflow diagrams",
          "Identification of cognitive friction points and churn drop-offs",
        ],
        image: team,
        badge: "User Insights",
      },
      {
        title: "Interactive Prototyping & Usability Testing",
        description:
          "High-fidelity clickable Figma prototypes that allow you to validate workflows, test with users, and secure stakeholder buy-in before writing code.",
        points: [
          "Clickable full-fidelity prototypes mirroring real product feel",
          "Moderated usability testing sessions and feedback synthesis",
          "Rapid iteration cycles saving weeks of developer refactoring",
        ],
        image: product,
        badge: "Rapid Validation",
      },
      {
        title: "Scalable Design Systems & Component Kits",
        description:
          "A unified design token repository, typography hierarchy, and reusable component library connecting Figma directly to code.",
        points: [
          "Production-ready component libraries synced with Tailwind CSS",
          "Comprehensive documentation for buttons, forms, tables, and modals",
          "Consistency across web, mobile, and internal tool suites",
        ],
        image: abstractGrid,
        badge: "System Scale",
      },
      {
        title: "Accessibility (WCAG 2.1 AA) & Visual Polish",
        description:
          "Refined aesthetic treatments balancing modern visual hierarchy with strict compliance for color contrast, screen readers, and keyboard navigation.",
        points: [
          "Full WCAG 2.1 AA color contrast and focus state audit",
          "Micro-animations and subtle interactive feedback states",
          "Responsive breakpoint specifications for all device viewports",
        ],
        image: heroHome,
        badge: "WCAG Compliance",
      },
    ],
    capabilities: [
      "User interviews and research",
      "Page and menu structure",
      "Clickable prototypes",
      "Visual design",
      "Reusable design systems",
      "Accessibility reviews",
    ],
    technology: ["Figma", "Design tokens", "Storybook", "Usability testing", "Analytics review"],
    deliverables: [
      "A summary of what users told us",
      "Sketches and clickable prototypes",
      "Final screen designs",
      "A design kit for future work",
      "An accessibility checklist",
    ],
    industries: ["startups", "healthcare", "education", "finance"],
    faqs: baseFaqs("design"),
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short:
      "Practical AI that saves your team time — answering questions, reading documents and supporting decisions.",
    intro:
      "AI is useful when it removes real work: answering repeat customer questions from your own information, pulling details out of invoices and forms, or summarising long documents for your team. We start by finding where AI genuinely helps your business, test it on your real data, and build in checks so its answers can be trusted.",
    image: aiImg,
    problems: [
      "You've tried AI tools but they never made it into daily work",
      "You're not sure the answers AI gives are accurate",
      "You're worried about customer or company data leaving your control",
      "Running costs are unpredictable",
    ],
    solutions: [
      {
        title: "Start where it pays off",
        body: "We identify tasks where AI saves real time and where occasional mistakes can be caught, and avoid the rest.",
      },
      {
        title: "Answers from your own information",
        body: "The AI answers using your documents and data, shows where each answer came from, and hands over to a person when unsure.",
      },
      {
        title: "Measured, not assumed",
        body: "Before launch we test it against real examples and share the results, so you know how well it performs.",
      },
    ],
    subServices: [
      {
        title: "RAG & Enterprise Knowledge Retrieval",
        description:
          "Connect large language models to your internal documents, wikis, and databases to deliver verified, citation-backed answers to your staff and customers.",
        points: [
          "Vector database indexing (pgvector, Pinecone, Qdrant)",
          "Source attribution and hallucination mitigation filters",
          "Strict document-level permission and access controls",
        ],
        image: aiImg,
        badge: "RAG Architecture",
      },
      {
        title: "Intelligent Customer Support & Agentic Assistants",
        description:
          "Conversational AI assistants capable of handling multi-turn customer inquiries, resolving tickets, and handing off gracefully to human agents.",
        points: [
          "Integrated with Zendesk, Intercom, or custom CRM backends",
          "Multi-lingual support with customizable brand tone of voice",
          "Deterministic fallback mechanisms when confidence is low",
        ],
        image: cloud,
        badge: "Agentic AI",
      },
      {
        title: "Automated Document Extraction & Vision OCR",
        description:
          "Extract structured tabular data from invoices, medical records, legal agreements, and logistics manifests with high accuracy.",
        points: [
          "Hybrid vision-language models for unstructured documents",
          "Automated validation rules and human-in-the-loop review queues",
          "Direct webhook export into ERP and accounting software",
        ],
        image: abstractGrid,
        badge: "Document OCR",
      },
      {
        title: "Custom LLM Fine-Tuning & Evaluation Benchmarks",
        description:
          "Tailor open-source and proprietary models to your domain terminology, and implement rigorous benchmark suites to measure accuracy over time.",
        points: [
          "Data curation and synthetic dataset generation",
          "Automated regression test suites for prompt and model changes",
          "Real-time token cost, latency, and drift monitoring",
        ],
        image: product,
        badge: "Model Eval",
      },
    ],
    capabilities: [
      "Finding the right AI opportunities",
      "Assistants for customers or staff",
      "Reading and extracting data from documents",
      "Summaries and drafting help",
      "Adding AI to your existing software",
      "Accuracy testing and monitoring",
    ],
    technology: [
      "LLM APIs",
      "Vector search",
      "RAG pipelines",
      "Python",
      "TypeScript",
      "Observability and evaluation tooling",
    ],
    deliverables: [
      "A short report on where AI fits your business",
      "A working trial tested on your data",
      "The finished tool in your daily workflow",
      "Privacy and data-handling safeguards",
      "A running cost estimate and monitoring",
    ],
    industries: ["finance", "healthcare", "ecommerce", "logistics"],
    faqs: baseFaqs("AI"),
  },
  {
    slug: "ecommerce",
    title: "E-commerce Development",
    short: "Online stores that are easy to buy from and easy for your team to run.",
    intro:
      "Selling online well depends on details: products that are easy to find, a checkout that doesn't lose buyers on mobile, and stock and orders that stay accurate behind the scenes. We build the store your customers see and connect it to the systems your team uses to fulfil orders.",
    image: industryImg,
    problems: [
      "Customers abandon their basket at checkout, especially on mobile",
      "Stock levels on the website don't match the warehouse",
      "Your store platform can't do the promotions or pricing you want",
      "Product pages are slow and hurt your advertising results",
    ],
    solutions: [
      {
        title: "A store built for buying",
        body: "Clear product pages, fast search and a short checkout with the payment methods your customers expect.",
      },
      {
        title: "Flexible where it matters",
        body: "We choose a setup that lets you run your own promotions, pricing and content without platform limits.",
      },
      {
        title: "Orders and stock in sync",
        body: "Your store connects to stock, delivery and accounting systems so information stays accurate automatically.",
      },
    ],
    subServices: [
      {
        title: "B2B & B2C Headless Storefronts",
        description:
          "Ultra-fast online shopping experiences decoupled from slow traditional monolithic platforms, engineered for instant page transitions and high checkout conversion.",
        points: [
          "Sub-second product catalog loading and faceted search",
          "Optimized mobile checkout funnel reducing cart abandonment",
          "Custom CMS integration for rich editorial product storytelling",
        ],
        image: industryImg,
        badge: "Headless Speed",
      },
      {
        title: "Inventory, ERP & Fulfillment Automation",
        description:
          "Bi-directional real-time synchronization between your digital store and warehouse management, ERP, and delivery carrier systems.",
        points: [
          "Automated stock level updates preventing overselling",
          "Real-time shipping rate calculation and label generation",
          "Multi-warehouse and drop-shipping routing logic",
        ],
        image: product,
        badge: "Warehouse Sync",
      },
      {
        title: "Custom Pricing & Wholesale B2B Portals",
        description:
          "Tiered pricing matrices, bulk quantity discounting, credit term invoicing, and custom order approvals for enterprise B2B clients.",
        points: [
          "Customer-specific catalog pricing and tier discounts",
          "Purchase order (PO) upload and offline payment terms",
          "Multi-user corporate account hierarchies",
        ],
        image: team,
        badge: "B2B Wholesale",
      },
      {
        title: "Global Payments, Tax & Fraud Prevention",
        description:
          "Integrate multi-currency gateways, automated regional VAT/sales tax calculations, and 3D Secure fraud mitigation.",
        points: [
          "Stripe, PayPal, Apple Pay, and local payment methods",
          "Automated tax calculation via Stripe Tax or Avalara",
          "PCI-DSS compliant payment tokenization",
        ],
        image: heroHome,
        badge: "Secure Checkout",
      },
    ],
    capabilities: [
      "Online stores and marketplaces",
      "Payments and tax",
      "Subscriptions and repeat orders",
      "Promotions and discounts",
      "Stock and delivery connections",
      "Trade and wholesale portals",
    ],
    technology: [
      "Headless commerce platforms",
      "React",
      "Payment gateways",
      "ERP and OMS integration",
      "CDN and edge caching",
    ],
    deliverables: [
      "A recommended store setup for your size and plans",
      "Your designed and built store",
      "Payments and delivery connected",
      "Tools for your team to manage products and offers",
      "A launch checklist and monitoring",
    ],
    industries: ["ecommerce", "manufacturing", "logistics", "startups"],
    faqs: baseFaqs("e-commerce"),
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    short: "Hand repetitive tasks to software so your team can focus on work that needs people.",
    intro:
      "If staff spend hours copying data between systems, chasing approvals or building the same report every week, that work can usually be automated. We look at where time actually goes, automate the tasks with the clearest payback first, and measure the hours saved.",
    image: abstractGrid,
    problems: [
      "Staff retype the same information into several systems",
      "Approvals sit in inboxes and delay work",
      "Weekly reports are assembled by hand",
      "Mistakes are only noticed days later",
    ],
    solutions: [
      {
        title: "Measure before automating",
        body: "We record how often a task happens, how long it takes and how often it goes wrong, so we automate what's worth it.",
      },
      {
        title: "Automate the biggest wins first",
        body: "Small, focused automations that start saving time within weeks, rather than one large risky project.",
      },
      {
        title: "People stay in control",
        body: "When something unusual happens, it goes to the right person with all the details, instead of failing silently.",
      },
    ],
    subServices: [
      {
        title: "Cross-System Workflow Automation",
        description:
          "Eliminate repetitive manual data entry by connecting CRM, accounting, communication, and project management tools into unified automated pipelines.",
        points: [
          "Custom webhook handlers and event-driven architectures",
          "Zero-data-loss queuing with automatic retry mechanisms",
          "Elimination of hours spent on manual copying and pasting",
        ],
        image: abstractGrid,
        badge: "Zero Manual Work",
      },
      {
        title: "Automated Document & Invoice Processing",
        description:
          "Automatically ingest emailed invoices, extract line items, route for management approval, and trigger payment in accounting systems.",
        points: [
          "Automated PDF invoice parsing and data validation",
          "Conditional approval routing based on expense thresholds",
          "Sync with QuickBooks, Xero, or custom finance backends",
        ],
        image: product,
        badge: "Invoice Automation",
      },
      {
        title: "Scheduled Reports & Data Aggregation",
        description:
          "Automated daily, weekly, and monthly data extraction from disparate sources into clean executive summary dashboards and automated email reports.",
        points: [
          "Custom automated Slack/email KPI digests",
          "Multi-source ETL pipelines feeding data warehouses",
          "Automated anomaly alerts when performance metrics deviate",
        ],
        image: cloud,
        badge: "Automated Reporting",
      },
      {
        title: "Error Handling, Audit Trails & Observability",
        description:
          "Enterprise-grade reliability with structured logging, dead-letter queues, and instant notifications if an external API fails.",
        points: [
          "Centralized audit logging tracking every automated action",
          "Instant incident alerts sent to designated support engineers",
          "Manual replay capabilities for interrupted data transfers",
        ],
        image: team,
        badge: "Reliable Queues",
      },
    ],
    capabilities: [
      "Moving data between systems automatically",
      "Reading invoices, forms and emails",
      "Automatic approvals and reminders",
      "Scheduled reports",
      "Alerts when something goes wrong",
      "Dashboards showing time saved",
    ],
    technology: [
      "Node.js",
      "Python",
      "Queues and schedulers",
      "Webhooks",
      "iPaaS tooling",
      "Cloud functions",
    ],
    deliverables: [
      "A review of where your team's time goes",
      "A prioritised list of what to automate",
      "The automations, live and running",
      "Alerts if anything stops working",
      "A report on hours saved",
    ],
    industries: ["logistics", "manufacturing", "finance", "healthcare"],
    faqs: baseFaqs("automation"),
  },
  {
    slug: "integration",
    title: "API & Third-party Integrations",
    short:
      "Connect the tools your business already uses so information moves between them automatically.",
    intro:
      "Most businesses run on several systems — accounting, CRM, store, payments, delivery. When they don't talk to each other, people fill the gaps by hand. We connect those systems so information flows automatically and stays the same everywhere.",
    image: cloud,
    problems: [
      "Connections between your tools break whenever one is updated",
      "A partner's system goes down and orders get lost",
      "Nobody notices when information stops syncing",
      "The same customer appears differently in each system",
    ],
    solutions: [
      {
        title: "Connections that are documented",
        body: "Each connection is written down clearly, so changes in one system don't quietly break another.",
      },
      {
        title: "Nothing gets lost",
        body: "If a system is temporarily unavailable, information is held and retried automatically instead of disappearing.",
      },
      {
        title: "You see problems first",
        body: "Alerts tell your team when a connection has an issue — before customers notice.",
      },
    ],
    subServices: [
      {
        title: "Custom REST & GraphQL API Engineering",
        description:
          "Secure, well-documented, and performant API gateways designed to connect mobile apps, partner platforms, and internal microservices.",
        points: [
          "OpenAPI / Swagger interactive documentation",
          "Rate limiting, DDoS protection, and token throttling",
          "High-throughput response caching and query optimization",
        ],
        image: cloud,
        badge: "API Architecture",
      },
      {
        title: "Payment & Financial Gateway Integrations",
        description:
          "Seamless integration with Stripe, Adyen, banking APIs, and financial ledger systems with idempotent transaction guarantees.",
        points: [
          "Idempotency keys preventing double-charging risks",
          "Automated refund and chargeback webhook reconciliation",
          "PCI-DSS compliant architecture",
        ],
        image: product,
        badge: "Payments & Ledger",
      },
      {
        title: "SSO & Enterprise Identity (OAuth 2.0 / SAML)",
        description:
          "Enable single sign-on across your application suite using Google Workspace, Microsoft Azure AD, Okta, and Auth0.",
        points: [
          "SAML 2.0 and OIDC protocol implementation",
          "Automated user provisioning and de-provisioning (SCIM)",
          "Multi-factor authentication (MFA) enforcement",
        ],
        image: team,
        badge: "Identity & Security",
      },
      {
        title: "Message Queues & Event-Driven Architecture",
        description:
          "Decouple monolithic systems using RabbitMQ, Apache Kafka, or AWS SQS/SNS for resilient asynchronous processing.",
        points: [
          "Asynchronous background job and notification workers",
          "Guaranteed at-least-once message delivery semantics",
          "Horizontal scaling capability under peak traffic spikes",
        ],
        image: abstractGrid,
        badge: "Event Streams",
      },
    ],
    capabilities: [
      "Connecting accounting, CRM and store systems",
      "Linking payment and delivery providers",
      "Automatic updates between systems",
      "Single sign-in across your tools",
      "Bringing data together for reporting",
      "Giving partners secure access to your data",
    ],
    technology: [
      "OpenAPI",
      "Node.js",
      "Message queues",
      "OAuth 2.0",
      "PostgreSQL",
      "Monitoring stack",
    ],
    deliverables: [
      "A map of your systems and how they should connect",
      "The working connections",
      "Documentation for each connection",
      "Error alerts and automatic retries",
      "A guide for your team on what to do if something fails",
    ],
    industries: ["finance", "ecommerce", "logistics", "healthcare"],
    faqs: baseFaqs("integration"),
  },
  {
    slug: "software-maintenance",
    title: "Software Maintenance & Support",
    short: "Keep your website or software secure, fast and improving after launch.",
    intro:
      "Software needs regular care: security updates, fixes, and performance work as your data and users grow. Our support plans give you a team accountable for your system, agreed response times when something breaks, and steady improvements every month. We also take over software built by others.",
    image: team,
    problems: [
      "Your software hasn't had security updates in a long time",
      "It's getting slower as more people use it",
      "Nobody is responsible when something breaks",
      "A list of small fixes never gets done",
    ],
    solutions: [
      {
        title: "A health check first",
        body: "We review security, speed and stability before taking over, and tell you honestly what we find.",
      },
      {
        title: "Agreed response times",
        body: "You know how quickly we respond to urgent issues versus routine requests, and who to contact.",
      },
      {
        title: "Monthly improvements",
        body: "Regular updates that reduce risk and deliver small improvements your users notice.",
      },
    ],
    subServices: [
      {
        title: "24/7 Production Monitoring & Incident Response",
        description:
          "Continuous observability across servers, databases, and application runtimes with dedicated on-call escalation and rapid recovery.",
        points: [
          "Automated uptime, latency, and error rate tracking",
          "Guaranteed response SLA for critical production outages",
          "Root-cause analysis and post-mortem mitigation reports",
        ],
        image: team,
        badge: "24/7 SLA",
      },
      {
        title: "Security Patching & Vulnerability Audits",
        description:
          "Proactive dependency scanning, OS security patching, and vulnerability remediation to protect against zero-day exploits.",
        points: [
          "Automated Dependabot and CVE security scanning",
          "Scheduled zero-downtime security patch deployments",
          "SSL/TLS certificate renewal and firewall management",
        ],
        image: cloud,
        badge: "Security Hardening",
      },
      {
        title: "Database Optimization & Performance Tuning",
        description:
          "Routine profiling of slow SQL queries, table indexing, cache hit ratios, and storage cleanups to maintain high speed.",
        points: [
          "Slow query analysis and index optimization",
          "Redis / Memcached caching layer configuration",
          "Connection pooling and dead-lock resolution",
        ],
        image: abstractGrid,
        badge: "Performance",
      },
      {
        title: "Codebase Refactoring & Legacy Takeover",
        description:
          "Smoothly transition maintenance of existing codebases from previous agencies or developers with zero disruption.",
        points: [
          "Initial comprehensive 50-point health audit",
          "Introduction of automated CI/CD and regression tests",
          "Monthly allocated hours for progressive feature enhancements",
        ],
        image: product,
        badge: "Codebase Rescue",
      },
    ],
    capabilities: [
      "24/7 monitoring",
      "Security updates",
      "Speed improvements",
      "Bug fixes",
      "Small new features",
      "Hosting management",
    ],
    technology: [
      "Observability tooling",
      "CI/CD",
      "Dependency scanning",
      "Cloud infrastructure",
      "Automated testing",
    ],
    deliverables: [
      "A health check report",
      "A clear support agreement",
      "Monthly summaries of what changed",
      "Uptime and speed reports",
      "A plan for upcoming improvements",
    ],
    industries: ["finance", "healthcare", "manufacturing", "education"],
    faqs: baseFaqs("support"),
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export type Industry = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  challenges: string[];
  opportunities: string[];
  solutions: string[];
  applications: string[];
  services: string[];
};

export const industries: Industry[] = [
  {
    slug: "startups",
    title: "Startups",
    short: "Move from idea to a product in market without over-building.",
    intro:
      "Early-stage teams need to learn quickly without accumulating technical debt that blocks the next round of growth. We help founders scope the smallest credible product and build it properly.",
    image: team,
    challenges: [
      "Limited runway and time to market",
      "Unvalidated product assumptions",
      "Small or non-technical founding team",
      "Architecture that must scale later",
    ],
    opportunities: [
      "Launch a focused MVP",
      "Test with real users early",
      "Build investor-ready product demos",
      "Establish a scalable technical foundation",
    ],
    solutions: [
      "Product discovery and scoping",
      "MVP design and build",
      "Iterative release cycles",
      "Fractional engineering support",
    ],
    applications: [
      "Marketplace platforms",
      "SaaS dashboards",
      "Mobile products",
      "AI-assisted tools",
    ],
    services: ["ui-ux-design", "web-app-development", "mobile-app-development", "ai-solutions"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Patient and clinician tools built with privacy and reliability first.",
    intro:
      "Healthcare software carries obligations most products do not. We build clinical and patient-facing tools with data protection, auditability and reliability designed in from the first sprint.",
    image: product,
    challenges: [
      "Sensitive data and regulatory obligation",
      "Fragmented clinical systems",
      "Administrative burden on staff",
      "Access equity across devices",
    ],
    opportunities: [
      "Reduce administrative time",
      "Improve patient communication",
      "Connect records across systems",
      "Support decisions with structured data",
    ],
    solutions: [
      "Patient portals",
      "Clinical workflow tools",
      "Secure integrations",
      "Document intelligence",
    ],
    applications: [
      "Appointment and triage platforms",
      "Care coordination tools",
      "Remote monitoring dashboards",
      "Consent and records management",
    ],
    services: ["custom-software", "integration", "ai-solutions", "software-maintenance"],
  },
  {
    slug: "finance",
    title: "Finance",
    short: "Secure platforms for lending, payments, advisory and back-office operations.",
    intro:
      "Financial products live or die on trust, accuracy and auditability. We build platforms and internal tooling where every calculation and state change can be explained.",
    image: cloud,
    challenges: [
      "Regulatory and audit requirements",
      "Legacy core systems",
      "Manual reconciliation work",
      "Fraud and security exposure",
    ],
    opportunities: [
      "Automate onboarding and checks",
      "Give clients self-service access",
      "Reduce reconciliation effort",
      "Surface risk earlier",
    ],
    solutions: [
      "Client portals",
      "Back-office automation",
      "Reporting platforms",
      "API integration with providers",
    ],
    applications: [
      "Onboarding and KYC flows",
      "Lending and application platforms",
      "Portfolio reporting",
      "Reconciliation automation",
    ],
    services: ["web-app-development", "business-automation", "integration", "custom-software"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    short: "Commerce experiences and operations that scale with catalogue and demand.",
    intro:
      "Retail and D2C businesses need storefronts that convert and operations that keep up. We work across both sides of the commerce stack.",
    image: industryImg,
    challenges: [
      "Mobile conversion drop-off",
      "Catalogue and stock accuracy",
      "Platform limitations",
      "Rising acquisition costs",
    ],
    opportunities: [
      "Faster, better-converting storefronts",
      "Personalised merchandising",
      "Automated fulfilment operations",
      "B2B and wholesale channels",
    ],
    solutions: [
      "Headless storefronts",
      "Checkout optimisation",
      "Stock and order integration",
      "Customer service tooling",
    ],
    applications: [
      "D2C storefronts",
      "B2B ordering portals",
      "Subscription commerce",
      "Product data management",
    ],
    services: ["ecommerce", "web-development", "integration", "business-automation"],
  },
  {
    slug: "education",
    title: "Education",
    short: "Learning platforms and administration tools for institutions and edtech.",
    intro:
      "Education products serve very different users at once — learners, teachers, administrators and parents. Each needs a clear, accessible interface onto the same data.",
    image: team,
    challenges: [
      "Multiple user types with different needs",
      "Accessibility obligations",
      "Seasonal load peaks",
      "Disconnected administrative systems",
    ],
    opportunities: [
      "Blended learning experiences",
      "Automated administration",
      "Progress visibility for all parties",
      "Content reuse at scale",
    ],
    solutions: [
      "Learning platforms",
      "Assessment tools",
      "Administration portals",
      "Content delivery systems",
    ],
    applications: [
      "Course delivery platforms",
      "Student information portals",
      "Assessment and marking tools",
      "Parent communication apps",
    ],
    services: ["web-app-development", "ui-ux-design", "web-development", "software-maintenance"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    short: "Listing, transaction and property management platforms.",
    intro:
      "Property businesses run on listings, documents and long transaction chains. We build the platforms that keep those moving and visible to everyone involved.",
    image: product,
    challenges: [
      "Slow document-heavy transactions",
      "Listing data spread across portals",
      "Field teams working on mobile",
      "Long sales cycles to track",
    ],
    opportunities: [
      "Self-service enquiry and booking",
      "Digital document workflows",
      "Portfolio and tenancy dashboards",
      "Rich property presentation",
    ],
    solutions: [
      "Listing platforms",
      "Transaction workflow tools",
      "Property management systems",
      "Portal integrations",
    ],
    applications: [
      "Search and enquiry portals",
      "Viewing and booking apps",
      "Tenancy management dashboards",
      "Document signing workflows",
    ],
    services: ["web-development", "mobile-app-development", "integration", "business-automation"],
  },
  {
    slug: "logistics",
    title: "Logistics",
    short: "Visibility and control across fleets, warehouses and delivery networks.",
    intro:
      "Logistics operations generate constant data and constant exceptions. The software has to make status obvious and let people act on problems quickly.",
    image: industryImg,
    challenges: [
      "Limited shipment visibility",
      "Paper-based field processes",
      "Manual scheduling and dispatch",
      "Fragmented partner systems",
    ],
    opportunities: [
      "Real-time tracking",
      "Automated dispatch and routing",
      "Digital proof of delivery",
      "Partner and customer portals",
    ],
    solutions: [
      "Operations dashboards",
      "Driver and warehouse apps",
      "Carrier integrations",
      "Exception automation",
    ],
    applications: [
      "Fleet and route dashboards",
      "Warehouse scanning apps",
      "Customer tracking portals",
      "Freight booking platforms",
    ],
    services: [
      "web-app-development",
      "mobile-app-development",
      "business-automation",
      "integration",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    short: "Connecting production, quality and supply chain data.",
    intro:
      "Manufacturers often have the data but not the visibility. We build the layer that turns machine, quality and planning data into decisions people can act on.",
    image: industryImg,
    challenges: [
      "Production data trapped in machines",
      "Paper quality records",
      "Unplanned downtime",
      "Complex supply chain dependencies",
    ],
    opportunities: [
      "Live production visibility",
      "Digital quality assurance",
      "Predictive maintenance signals",
      "Supplier collaboration portals",
    ],
    solutions: [
      "Production dashboards",
      "Quality and inspection apps",
      "Maintenance scheduling",
      "ERP integration",
    ],
    applications: [
      "Shop-floor dashboards",
      "Inspection and defect logging",
      "Maintenance planning tools",
      "Supplier portals",
    ],
    services: ["custom-software", "business-automation", "integration", "software-maintenance"],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);

export type CaseStudy = {
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  image: string;
  summary: string;
  problem: string;
  requirements: string[];
  strategy: string;
  solution: string[];
  design: string;
  development: string;
  technology: string[];
  outcomes: string[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "custom-ecommerce-platform",
    title: "A composable commerce platform for a growing D2C brand",
    clientType: "Direct-to-consumer retail brand",
    industry: "E-commerce",
    image: industryImg,
    summary:
      "Replacing a constrained hosted store with a composable storefront and connected operations.",
    problem:
      "The client's hosted storefront could not support their merchandising plans, and stock data was maintained separately from the warehouse system, causing oversells during promotions.",
    requirements: [
      "Faster product and category pages",
      "Merchandising control without developer involvement",
      "Single source of truth for stock",
      "A checkout suited to mobile traffic",
    ],
    strategy:
      "We separated the storefront from the commerce engine so presentation could evolve quickly, and made the warehouse system authoritative for stock, syncing continuously into the storefront.",
    solution: [
      "Composable storefront with server-rendered product and category pages",
      "Merchandising tools for ordering, badging and campaign landing pages",
      "Continuous stock and price synchronisation with the warehouse system",
      "Rebuilt checkout with fewer steps and clear validation states",
    ],
    design:
      "A product-led visual system with large imagery, restrained typography and consistent state design across the purchase journey.",
    development:
      "Delivered in fortnightly increments behind feature flags, starting with product pages, then category browsing, then checkout.",
    technology: [
      "React",
      "TypeScript",
      "Headless commerce API",
      "PostgreSQL",
      "Edge CDN",
      "Payment gateway integration",
    ],
    outcomes: [
      "Stock accuracy issues during promotions resolved",
      "Merchandising changes now made by the marketing team without a release",
      "Measurably faster product page loads against the previous platform",
      "A storefront the client can extend without replatforming",
    ],
    services: ["ecommerce", "web-development", "integration"],
  },
  {
    slug: "field-operations-mobile-app",
    title: "Offline-first mobile app for a field service operation",
    clientType: "National field service provider",
    industry: "Logistics",
    image: product,
    summary:
      "Replacing paper job sheets with an offline-capable mobile application and dispatch dashboard.",
    problem:
      "Engineers completed job sheets on paper, which were scanned and re-keyed days later. Scheduling had no view of live progress and customers could not be given accurate arrival information.",
    requirements: [
      "Works without connectivity",
      "Photo and signature capture",
      "Live dispatch visibility",
      "Integration with the existing scheduling system",
    ],
    strategy:
      "Design for the worst network conditions first: all job data is available locally, and every action queues for sync with conflict handling on the server.",
    solution: [
      "Cross-platform mobile app with local job storage and background sync",
      "Photo, signature and asset scanning captured against each job",
      "Dispatch dashboard showing live job state and exceptions",
      "Two-way integration with the existing scheduling system",
    ],
    design:
      "A high-contrast interface designed for gloved hands, bright daylight and one-handed use.",
    development:
      "Piloted with a single region for six weeks before national rollout, with crash reporting and usage analytics from day one.",
    technology: [
      "React Native",
      "SQLite",
      "Node.js",
      "PostgreSQL",
      "Push notifications",
      "CI/CD for mobile",
    ],
    outcomes: [
      "Paper job sheets removed from the field process",
      "Job status visible to dispatch as work happens",
      "Re-keying step eliminated from back-office work",
      "Rollout completed region by region without service disruption",
    ],
    services: ["mobile-app-development", "integration", "business-automation"],
  },
  {
    slug: "ai-document-intelligence",
    title: "AI document intelligence for a finance back office",
    clientType: "Commercial finance provider",
    industry: "Finance",
    image: cloud,
    summary:
      "Extracting structured data from incoming documents with human review where confidence is low.",
    problem:
      "An operations team manually read incoming statements and invoices to key figures into the core system. Volume was growing faster than the team, and errors were found late.",
    requirements: [
      "Structured extraction from mixed document formats",
      "Auditable output with source references",
      "Human review for low-confidence results",
      "No document content leaving approved infrastructure",
    ],
    strategy:
      "Treat AI as one stage in a controlled pipeline: classification, extraction, confidence scoring, then either straight-through processing or routed human review.",
    solution: [
      "Document classification and extraction pipeline",
      "Confidence scoring with configurable thresholds per document type",
      "Review interface showing extracted values beside the source document",
      "Evaluation suite run against a labelled document set on every change",
    ],
    design:
      "A review interface built for speed: keyboard-first navigation, side-by-side source and extracted values, and clear correction affordances.",
    development:
      "Built as an isolated service with a strict data-handling boundary and full audit logging of every extraction and correction.",
    technology: [
      "Python",
      "LLM APIs",
      "Vector search",
      "PostgreSQL",
      "React",
      "Observability tooling",
    ],
    outcomes: [
      "Manual keying replaced by review-and-confirm for most documents",
      "Every extracted value traceable to its source page",
      "Quality tracked continuously through an evaluation suite",
      "Processing capacity no longer tied to headcount growth",
    ],
    services: ["ai-solutions", "custom-software", "business-automation"],
  },
  {
    slug: "clinical-workflow-platform",
    title: "Care coordination platform for a healthcare provider",
    clientType: "Multi-site healthcare provider",
    industry: "Healthcare",
    image: team,
    summary:
      "One coordinated view of patient pathways across previously disconnected teams and systems.",
    problem:
      "Coordination between clinical teams relied on email, phone calls and separate systems, so status was unclear and handovers were slow.",
    requirements: [
      "Single view of a patient pathway",
      "Role-appropriate access and audit trails",
      "Integration with existing records systems",
      "Usable on shared devices in clinical settings",
    ],
    strategy:
      "Model the pathway explicitly, then give each role a focused view of it, keeping the existing systems of record authoritative.",
    solution: [
      "Pathway model with stages, owners and handover points",
      "Role-based dashboards for coordinators and clinical teams",
      "Secure integration with existing records systems",
      "Full audit trail of access and status changes",
    ],
    design:
      "Accessible, high-contrast interfaces designed for shared clinical workstations and interruption-heavy work.",
    development:
      "Delivered service by service with clinical staff involved in fortnightly reviews and structured usability testing.",
    technology: ["React", "TypeScript", "Node.js", "PostgreSQL", "SSO", "Encrypted integrations"],
    outcomes: [
      "Pathway status visible to every involved team",
      "Handovers recorded in one place instead of email threads",
      "Access fully audited by role",
      "Rolled out site by site with clinical sign-off",
    ],
    services: ["custom-software", "ui-ux-design", "integration"],
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "scoping-software-around-requirements",
    title: "Scoping software around requirements, not around features",
    category: "Product",
    date: "2026-07-14",
    readingTime: "6 min read",
    excerpt:
      "Feature lists are a poor starting point. Requirements — with their constraints and exceptions — produce better software and fewer surprises.",
    image: team,
    body: [
      {
        heading: "Feature lists hide the real problem",
        paragraphs: [
          "Most project briefs arrive as a list of features. It is an understandable way to describe software, but it skips the part that determines whether the project succeeds: the business outcome the software is supposed to change.",
          "A requirement describes a situation, the people involved, the constraints they operate under and what a good outcome looks like. A feature describes one possible response to that situation. Starting from features locks in a solution before the problem has been examined.",
        ],
      },
      {
        heading: "Exceptions define the architecture",
        paragraphs: [
          "The happy path is rarely where complexity lives. The exceptions — the cancelled order, the partial delivery, the patient who moves site, the invoice in a format nobody planned for — decide how a system must be structured.",
          "Documenting exceptions during scoping is uncomfortable because it makes projects look larger. It is far cheaper than discovering them during user acceptance testing.",
        ],
      },
      {
        heading: "How to run a requirement session",
        paragraphs: [
          "Bring the people who do the work, not only the people who own the budget. Walk through a recent real case end to end and record where information is re-entered, where people wait, and where mistakes get caught.",
          "Then agree what the software must guarantee, what it should assist with, and what should remain a human judgement. That distinction shapes scope more usefully than any feature list.",
        ],
      },
    ],
  },
  {
    slug: "putting-ai-into-production",
    title: "What separates an AI pilot from an AI product",
    category: "AI",
    date: "2026-06-02",
    readingTime: "7 min read",
    excerpt:
      "A convincing demo and a dependable product are different engineering problems. The gap is evaluation, guardrails and operational cost.",
    image: cloud,
    body: [
      {
        heading: "Demos optimise for the best case",
        paragraphs: [
          "It is straightforward to produce an impressive AI demonstration. The prompts are curated, the inputs are clean and a person is present to interpret the output. Production has none of those advantages.",
          "The move to production is mostly about defining acceptable behaviour when the model is wrong, uncertain, slow, or unavailable.",
        ],
      },
      {
        heading: "Evaluation before scale",
        paragraphs: [
          "Build a labelled set of representative inputs, including the awkward ones, and measure output against it on every change. Without this, quality claims are anecdotes and regressions go unnoticed.",
          "Evaluation also lets you compare models honestly, which matters as cost and capability change month to month.",
        ],
      },
      {
        heading: "Design the human path",
        paragraphs: [
          "Confidence thresholds, review interfaces and clear provenance make AI output usable in regulated and high-consequence settings. Users accept an assistant that shows its sources far more readily than one that simply asserts.",
          "Finally, treat inference cost as an architectural constraint. Caching, retrieval scope and model selection determine whether a successful pilot is affordable at ten times the volume.",
        ],
      },
    ],
  },
  {
    slug: "automation-that-survives-contact-with-operations",
    title: "Automation that survives contact with operations",
    category: "Automation",
    date: "2026-04-21",
    readingTime: "5 min read",
    excerpt:
      "Automation fails when it assumes a tidy process. Measuring the current process first is what makes the difference.",
    image: industryImg,
    body: [
      {
        heading: "Measure before you automate",
        paragraphs: [
          "Before automating a process, record how often it runs, how long each step takes and how frequently it goes wrong. This creates both a business case and a baseline to judge the result against.",
          "It also frequently reveals that the highest-volume step is not the most expensive one.",
        ],
      },
      {
        heading: "Automate the rule, route the exception",
        paragraphs: [
          "Robust automation handles the deterministic majority and routes the rest to a person with full context. Systems that try to automate every case tend to fail silently and quietly erode trust.",
          "Make exception queues visible and owned. An unmonitored queue is worse than a manual process.",
        ],
      },
      {
        heading: "Keep people informed",
        paragraphs: [
          "Teams accept automation when they can see what it did and why. Activity logs, notifications and a clear override path convert scepticism into adoption faster than any training session.",
        ],
      },
    ],
  },
  {
    slug: "design-systems-that-engineers-actually-use",
    title: "Design systems that engineers actually use",
    category: "Design",
    date: "2026-03-09",
    readingTime: "5 min read",
    excerpt:
      "A design system only pays back when implementation and design share one source of truth for tokens, states and behaviour.",
    image: product,
    body: [
      {
        heading: "Tokens before components",
        paragraphs: [
          "Colour, spacing, radius and typography decisions belong in named tokens before any component is drawn. Components built on ad hoc values drift within weeks.",
          "Tokens also make theming, contrast compliance and later brand changes a configuration task rather than a rebuild.",
        ],
      },
      {
        heading: "Document states, not just appearance",
        paragraphs: [
          "Most implementation defects come from undefined states: loading, empty, error, disabled, truncated, and long-content cases. A design system that specifies these removes the guesswork.",
        ],
      },
      {
        heading: "One source of truth",
        paragraphs: [
          "Where the design file and the code disagree, the code wins in production — so keep the gap small. Shared token files and a component catalogue reviewed by both disciplines keep the system honest as the product grows.",
        ],
      },
    ],
  },
];

export const insightBySlug = (slug: string) => insights.find((i) => i.slug === slug);

export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  team: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-full-stack-engineer",
    title: "Senior Full-Stack Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    team: "Engineering",
    summary:
      "Lead delivery on client projects spanning web applications, integrations and custom software.",
    responsibilities: [
      "Own technical delivery on one or two client engagements",
      "Design data models, APIs and front-end architecture",
      "Review code and mentor engineers on the team",
      "Work directly with clients during requirement and review sessions",
    ],
    requirements: [
      "Strong TypeScript across front end and back end",
      "Experience designing relational data models and APIs",
      "Comfort with testing, CI/CD and production operations",
      "Clear written and spoken communication with non-technical stakeholders",
    ],
    niceToHave: [
      "Cloud infrastructure experience",
      "Consulting or agency background",
      "Experience with regulated industries",
    ],
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    location: "Remote / Hybrid",
    type: "Full-time",
    team: "Design",
    summary:
      "Shape products from research through to a documented design system engineers can build from.",
    responsibilities: [
      "Run discovery, interviews and journey mapping",
      "Produce wireframes, prototypes and high-fidelity interfaces",
      "Maintain design systems and accessibility standards",
      "Partner with engineers throughout implementation",
    ],
    requirements: [
      "A portfolio showing end-to-end product work",
      "Strong interaction and information design skills",
      "Experience building and maintaining design systems",
      "Working knowledge of WCAG accessibility requirements",
    ],
    niceToHave: [
      "Front-end familiarity",
      "Experience designing complex internal tools",
      "Usability research experience",
    ],
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    location: "Remote",
    type: "Full-time",
    team: "AI",
    summary: "Build applied AI features with evaluation, guardrails and production reliability.",
    responsibilities: [
      "Design retrieval and extraction pipelines",
      "Build evaluation sets and quality measurement tooling",
      "Integrate AI capability into client applications",
      "Advise clients on feasibility, risk and cost",
    ],
    requirements: [
      "Python and TypeScript proficiency",
      "Experience with LLM APIs, retrieval and vector search",
      "A rigorous approach to measuring output quality",
      "Understanding of data privacy considerations",
    ],
    niceToHave: [
      "MLOps experience",
      "Experience with document processing",
      "Published writing or open-source work",
    ],
  },
  {
    slug: "delivery-manager",
    title: "Delivery Manager",
    location: "Hybrid",
    type: "Full-time",
    team: "Delivery",
    summary:
      "Keep engagements clear, predictable and well-communicated from requirement to support.",
    responsibilities: [
      "Run delivery planning and client communication",
      "Track scope, risk and dependencies across engagements",
      "Facilitate requirement and review sessions",
      "Support commercial scoping with the engineering team",
    ],
    requirements: [
      "Experience managing software delivery in a client-facing setting",
      "Confidence handling scope and expectation conversations",
      "Familiarity with iterative delivery practices",
      "Excellent written communication",
    ],
    niceToHave: [
      "Technical background",
      "Experience with fixed-scope and iterative commercial models",
    ],
  },
];

export const jobBySlug = (slug: string) => jobs.find((j) => j.slug === slug);

export const processSteps = [
  {
    number: "01",
    title: "Requirement",
    body: "You tell us what you need in your own words. We ask about your business, your users and what a good result looks like — no technical knowledge needed.",
  },
  {
    number: "02",
    title: "Strategy",
    body: "We recommend a solution, what to build first, a timeline and a cost range — in writing, before you commit.",
  },
  {
    number: "03",
    title: "Design",
    body: "You see and click through how it will look and work, and we adjust it with your feedback before building.",
  },
  {
    number: "04",
    title: "Development",
    body: "We build in short stages and show you progress regularly, so there are no surprises at the end.",
  },
  {
    number: "05",
    title: "Testing",
    body: "We check everything works correctly, quickly and on every device before real users see it.",
  },
  {
    number: "06",
    title: "Launch",
    body: "We launch carefully, train your team and hand over everything you need to own and run it.",
  },
  {
    number: "07",
    title: "Support",
    body: "If you want, we stay on to keep it secure, fix issues and keep improving it.",
  },
];

export const buildItems = [
  {
    title: "Websites",
    body: "A website that explains your business clearly and brings in enquiries.",
    to: "/services/$slug",
    slug: "web-development",
  },
  {
    title: "Web Applications",
    body: "Online tools and portals that replace spreadsheets and manual tracking.",
    to: "/services/$slug",
    slug: "web-app-development",
  },
  {
    title: "Mobile Applications",
    body: "iPhone and Android apps for customers or staff on the move.",
    to: "/services/$slug",
    slug: "mobile-app-development",
  },
  {
    title: "Custom Software",
    body: "Software built around how your business works when ready-made tools don't fit.",
    to: "/services/$slug",
    slug: "custom-software",
  },
  {
    title: "AI Solutions",
    body: "Practical AI that answers questions, reads documents and saves staff time.",
    to: "/services/$slug",
    slug: "ai-solutions",
  },
  {
    title: "E-commerce Platforms",
    body: "Online stores that are easy to buy from and easy to run.",
    to: "/services/$slug",
    slug: "ecommerce",
  },
  {
    title: "Business Automation",
    body: "Hand repetitive tasks to software so your team can do more valuable work.",
    to: "/services/$slug",
    slug: "business-automation",
  },
  {
    title: "Digital Products",
    body: "Turn a new product idea into something people understand and want to use.",
    to: "/services/$slug",
    slug: "ui-ux-design",
  },
];

export const needSolutions = [
  {
    need: "I need a new or better website",
    body: "Whether starting fresh or improving what you have, we build a site that looks professional and turns visitors into enquiries.",
    cta: "Build my website",
    slug: "web-development",
  },
  {
    need: "I want to stop running the business on spreadsheets",
    body: "We bring orders, jobs, bookings or customers into one online system your whole team can use.",
    cta: "Build my web app",
    slug: "web-app-development",
  },
  {
    need: "I want an app for my customers or staff",
    body: "We build and publish iPhone and Android apps — including ones that work without signal.",
    cta: "Build my app",
    slug: "mobile-app-development",
  },
  {
    need: "Ready-made software doesn't fit how we work",
    body: "We'll tell you honestly whether to buy or build, and build only when it makes sense.",
    cta: "Discuss custom software",
    slug: "custom-software",
  },
  {
    need: "I want to use AI in a practical way",
    body: "We find tasks where AI genuinely saves time and test it on your real data first.",
    cta: "Discuss an AI solution",
    slug: "ai-solutions",
  },
  {
    need: "My team wastes hours on repetitive tasks",
    body: "We automate data entry, approvals and reports, and measure the hours you get back.",
    cta: "Automate my business",
    slug: "business-automation",
  },
];

export const whyZentleaf = [
  {
    title: "Your problem comes first",
    body: "We don't sell a fixed product. We recommend what fits your problem — even if that's something smaller.",
  },
  {
    title: "One team from scope to support",
    body: "The people you meet at the start are the people who build and support your solution.",
  },
  {
    title: "No lock-in",
    body: "You own everything we build, with documentation so you're never tied to us.",
  },
  {
    title: "Honest advice",
    body: "We tell you when something should be smaller, later or bought instead of built.",
  },
];

export const techStack = [
  {
    group: "Front end",
    items: ["React", "TypeScript", "Next.js", "TanStack Start", "React Native", "Tailwind CSS"],
  },
  { group: "Back end", items: ["Node.js", "Python", "PostgreSQL", "Redis", "REST", "GraphQL"] },
  {
    group: "AI & data",
    items: [
      "LLM APIs",
      "Vector search",
      "RAG pipelines",
      "Evaluation tooling",
      "ETL pipelines",
      "Analytics",
    ],
  },
  {
    group: "Platform",
    items: ["Docker", "CI/CD", "Cloud hosting", "Edge CDN", "Observability", "Automated testing"],
  },
];

