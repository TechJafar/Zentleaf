import { useId } from "react";

export type TechItem = {
  name: string;
  category: string;
  svg: (id: string) => React.ReactNode;
};

export const technologies: TechItem[] = [
  {
    name: "React",
    category: "Frontend",
    svg: () => (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-12 w-12 text-[#61DAFB] transition-transform duration-300 group-hover:scale-110">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Frontend",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M72.2 88.5c1.6 1.8 3.5 3.3 5.8 4.3 2.3 1 5 1.5 8.1 1.5 2.6 0 4.9-.4 6.8-1.3 1.9-.9 3.4-2.1 4.5-3.6 1.1-1.5 1.7-3.3 1.7-5.3 0-1.8-.4-3.3-1.3-4.5-.9-1.2-2.1-2.2-3.8-3.1-1.6-.9-4.2-2-7.8-3.3-4.6-1.7-8-3.3-10.4-4.8-2.3-1.5-4.1-3.4-5.3-5.7-1.2-2.3-1.8-5-1.8-8.2 0-3.3.8-6.3 2.5-8.9 1.7-2.6 4.1-4.7 7.2-6.2 3.1-1.5 6.9-2.3 11.2-2.3 4.2 0 8 .8 11.3 2.4 3.3 1.6 5.9 3.8 7.7 6.6l-9.1 7.2c-1.3-1.6-2.8-2.8-4.6-3.7-1.8-.9-3.9-1.3-6.2-1.3-2.3 0-4.2.4-5.8 1.2-1.6.8-2.8 1.9-3.7 3.2-.8 1.3-1.3 2.8-1.3 4.4 0 1.6.4 3 1.2 4.1.8 1.1 1.9 2 3.4 2.8 1.5.8 4.1 1.9 7.8 3.3 4.6 1.7 8.2 3.4 10.7 5.1 2.5 1.7 4.3 3.7 5.6 6.1 1.3 2.4 1.9 5.3 1.9 8.7 0 3.6-.9 6.8-2.8 9.6-1.9 2.8-4.5 5-7.9 6.6-3.4 1.6-7.5 2.4-12.3 2.4-5.5 0-10.4-1.1-14.6-3.3-4.2-2.2-7.3-5.2-9.4-8.9l9.3-6.8zm-39.7-38.3h33.6v10.6H54.4v51.2H42.7V60.8H32.5V50.2z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Frontend",
    svg: () => (
      <svg viewBox="0 0 180 180" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path d="M149.508 157.438L69.147 54H54V125.97H66.624V69.897L139.757 164.717C143.217 162.535 146.49 160.091 149.508 157.438Z" fill="url(#next_grad)" />
        <rect x="115" y="54" width="13" height="72" fill="#FFF" />
        <defs>
          <linearGradient id="next_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "TanStack Start",
    category: "Fullstack",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <rect width="128" height="128" rx="24" fill="#0F172A" />
        <path d="M64 24L104 48V80L64 104L24 80V48L64 24Z" fill="none" stroke="#F59E0B" strokeWidth="6" />
        <path d="M64 42L86 55V73L64 86L42 73V55L64 42Z" fill="#3B82F6" />
        <circle cx="64" cy="64" r="7" fill="#10B981" />
      </svg>
    ),
  },
  {
    name: "React Native",
    category: "Mobile",
    svg: () => (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-12 w-12 text-[#38BDF8] transition-transform duration-300 group-hover:scale-110">
        <circle cx="0" cy="0" r="2.2" fill="#38BDF8" />
        <g stroke="#38BDF8" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    svg: () => (
      <svg viewBox="0 0 48 48" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <path d="M24 10c-6.6 0-10.7 3.3-12.4 10 2.5-3.3 5.4-4.5 8.7-3.7 1.9.5 3.2 1.9 4.7 3.4 2.5 2.5 5.3 5.3 11.4 5.3 6.6 0 10.7-3.3 12.4-10-2.5 3.3-5.4 4.5-8.7 3.7-1.9-.5-3.2-1.9-4.7-3.4-2.5-2.5-5.3-5.3-11.4-5.3zm-12.4 15c-6.6 0-10.7 3.3-12.4 10 2.5-3.3 5.4-4.5 8.7-3.7 1.9.5 3.2 1.9 4.7 3.4 2.5 2.5 5.3 5.3 11.4 5.3 6.6 0 10.7-3.3 12.4-10-2.5 3.3-5.4 4.5-8.7 3.7-1.9-.5-3.2-1.9-4.7-3.4-2.5-2.5-5.3-5.3-11.4-5.3z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Backend",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <path d="M64 12L108 38V88L64 114L20 88V38L64 12Z" fill="#339933" />
        <path d="M64 22L99 42V82L64 102L29 82V42L64 22Z" fill="#026E00" />
        <text x="64" y="70" fill="#FFF" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NODE</text>
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Backend & AI",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <path d="M63.6 13c-27.1 0-25.5 11.7-25.5 11.7l.1 12.1h26v3.7H27.5S13 38.9 13 66c0 27.2 12.7 26.2 12.7 26.2h7.6v-10.7s-.4-12.7 12.5-12.7h24.7s12-.2 12-11.6V24.7S84 13 63.6 13zm-14 8a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z" fill="#3776AB" />
        <path d="M64.4 115c27.1 0 25.5-11.7 25.5-11.7l-.1-12.1H63.8v-3.7h36.7s14.5 1.6 14.5-25.5c0-27.2-12.7-26.2-12.7-26.2h-7.6v10.7s.4 12.7-12.5 12.7H47.5s-12 .2-12 11.6v22.5s-1.5 11.7 18.9 11.7zm14-8a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z" fill="#FFD438" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <circle cx="64" cy="64" r="56" fill="#336791" />
        <path d="M64 24C44 24 34 38 34 52c0 22 14 36 22 48h16c8-12 22-26 22-48 0-14-10-28-30-28zm-8 28a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm16 0a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Redis",
    category: "Cache & Store",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <path d="M16 48l48-26 48 26-48 26-48-26z" fill="#D82C20" />
        <path d="M16 64l48 26 48-26-48 26-48-26z" fill="#A41E11" />
        <path d="M16 80l48 26 48-26-48 26-48-26z" fill="#78140B" />
      </svg>
    ),
  },
  {
    name: "GraphQL",
    category: "API & Data",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <path d="M64 16L105.6 40V88L64 112L22.4 88V40L64 16Z" fill="none" stroke="#E10098" strokeWidth="6" />
        <circle cx="64" cy="16" r="10" fill="#E10098" />
        <circle cx="105.6" cy="40" r="10" fill="#E10098" />
        <circle cx="105.6" cy="88" r="10" fill="#E10098" />
        <circle cx="64" cy="112" r="10" fill="#E10098" />
        <circle cx="22.4" cy="88" r="10" fill="#E10098" />
        <circle cx="22.4" cy="40" r="10" fill="#E10098" />
        <path d="M64 16L105.6 88M64 16L22.4 88M22.4 40L105.6 40M22.4 40L64 112M105.6 40L64 112" stroke="#E10098" strokeWidth="4" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "Platform",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <path d="M118 64c-2.4-1.6-7.8-1.2-11.2 1.2-3.8-14-16-16-16-16H88v-9H76v9h-9v-9H55v9h-9v-9H34v9H23c-11 0-19 8-21 21-2 11 3 23 15 28 27 11 58 8 78-7 14-1 21-8 23-14v-2.2c0-.3-.3-.7-.5-1z" fill="#2496ED" />
        <rect x="34" y="39" width="9" height="9" fill="#2496ED" />
        <rect x="45" y="39" width="9" height="9" fill="#2496ED" />
        <rect x="56" y="39" width="9" height="9" fill="#2496ED" />
        <rect x="45" y="28" width="9" height="9" fill="#2496ED" />
        <rect x="56" y="28" width="9" height="9" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "AWS Cloud",
    category: "Infrastructure",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <rect width="128" height="128" rx="20" fill="#232F3E" />
        <path d="M42 45h8v24h-8zm18 0h8l10 18V45h8v24h-8L68 51v18h-8z" fill="#FFF" />
        <path d="M30 84c20 12 48 12 68 0" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    category: "Edge & CDN",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <path d="M96 68c0-15.5-12.5-28-28-28-12.2 0-22.7 7.8-26.6 18.7-2.3-.9-4.8-1.4-7.4-1.4-11 0-20 9-20 20 0 1.2.1 2.3.3 3.4C10.5 83.1 8 87.3 8 92c0 6.6 5.4 12 12 12h76c11 0 20-9 20-20 0-7.8-4.5-14.6-11-17.7.6-2.6.9-5.3.9-8.3z" fill="#F38020" />
        <path d="M98 62c-2.5 0-4.8.5-7 1.3C88.6 51 77.8 42 65 42c-14.3 0-26 11.2-26.9 25.3-2.6-1.5-5.6-2.3-8.8-2.3-9.9 0-18 8.1-18 18 0 1.5.2 3 .5 4.4C5 89 0 95 0 102c0 9.9 8.1 18 18 18h82c13.3 0 24-10.7 24-24 0-11.8-8.5-21.6-19.8-23.6.4-1.8.6-3.6.6-5.4-.1-13.8-11.3-25-24.8-25z" fill="#FAAD3F" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: "OpenAI / LLMs",
    category: "AI & Data",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <circle cx="64" cy="64" r="56" fill="#10A37F" />
        <path d="M64 36v18m0 20v18M40 48l16 10m16 10l16 10M88 48L72 58m-16 10L40 78" stroke="#FFF" strokeWidth="6" strokeLinecap="round" />
        <circle cx="64" cy="64" r="9" fill="#FFF" />
      </svg>
    ),
  },
  {
    name: "Vector & RAG",
    category: "AI Search",
    svg: () => (
      <svg viewBox="0 0 128 128" className="h-12 w-12 transition-transform duration-300 group-hover:scale-110">
        <rect width="128" height="128" rx="20" fill="#0B132B" />
        <circle cx="64" cy="64" r="32" fill="none" stroke="#64DFDF" strokeWidth="4" strokeDasharray="4 4" />
        <circle cx="64" cy="12" r="6" fill="#7209B7" />
        <circle cx="40" cy="48" r="6" fill="#4CC9F0" />
        <circle cx="88" cy="52" r="7" fill="#F72585" />
        <circle cx="64" cy="96" r="6" fill="#4361EE" />
      </svg>
    ),
  },
];

export function TechMarquee() {
  const id = useId();
  // Duplicate list to achieve continuous seamless loop
  const marqueeItems = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Edge gradient fade masks for seamless right-to-left effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />

      {/* Scrolling Track */}
      <div className="animate-marquee flex items-center gap-6 md:gap-8">
        {marqueeItems.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="group flex w-[190px] sm:w-[210px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex h-14 w-14 items-center justify-center">
              {tech.svg(`${id}-${i}`)}
            </div>
            <div className="text-center">
              <span className="block text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {tech.name}
              </span>
              <span className="block text-[11px] font-medium text-muted-foreground">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
