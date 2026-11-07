import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/*
 * Premium botanical background for the Career Application page only.
 * Very light base, decorative organic corner leaves with subtle red/pink
 * accents from the Zentleaf brand palette, and a few floating dots.
 * pointer-events-none, sits behind the form, respects reduced motion.
 */

function BotanicalCluster({
  className,
  flipped,
  gradientId = "leafGradient",
}: {
  className?: string;
  flipped?: boolean;
  gradientId?: string;
}) {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary/[0.14]", className)}
      aria-hidden="true"
      style={{ transform: flipped ? "rotate(180deg)" : undefined }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <g>
        {/* central curved stem */}
        <path
          d="M520 40 C420 120, 320 240, 200 420"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* leaf 1 — top of spray */}
        <path
          d="M490 70 C455 25, 380 35, 355 100 C375 145, 450 135, 490 70 Z"
          fill={`url(#${gradientId})`}
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        {/* leaf 2 */}
        <path
          d="M420 145 C380 100, 305 120, 285 180 C305 225, 380 210, 420 145 Z"
          fill={`url(#${gradientId})`}
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        {/* leaf 3 */}
        <path
          d="M340 235 C300 190, 225 210, 205 270 C225 315, 300 300, 340 235 Z"
          fill={`url(#${gradientId})`}
          stroke="currentColor"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
        {/* leaf 4 — small accent */}
        <path
          d="M465 115 C440 85, 390 90, 375 130 C395 160, 445 155, 465 115 Z"
          fill={`url(#${gradientId})`}
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
        {/* leaf 5 — lower accent */}
        <path
          d="M280 320 C255 285, 200 295, 185 340 C210 375, 265 365, 280 320 Z"
          fill={`url(#${gradientId})`}
          stroke="currentColor"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

function FloatingDots({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary/40", className)}
      aria-hidden="true"
    >
      <circle cx="460" cy="120" r="3" fill="currentColor" fillOpacity="0.35" />
      <circle cx="380" cy="80" r="2" fill="currentColor" fillOpacity="0.25" />
      <circle cx="300" cy="160" r="2.5" fill="currentColor" fillOpacity="0.3" />
      <circle cx="420" cy="220" r="2" fill="currentColor" fillOpacity="0.2" />
      <circle cx="240" cy="260" r="3" fill="currentColor" fillOpacity="0.25" />
      <circle cx="160" cy="340" r="2" fill="currentColor" fillOpacity="0.2" />
      <circle cx="340" cy="340" r="2.5" fill="currentColor" fillOpacity="0.2" />
      <circle cx="120" cy="420" r="3" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}

function Float({
  children,
  duration = 8,
  delay = 0,
  className,
}: {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={false}
      animate={
        reduced
          ? { y: 0, x: 0, rotate: 0 }
          : {
              y: [0, -10, 0],
              x: [0, 6, 0],
              rotate: [0, 1, 0],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

export function ApplyBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* very light wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-primary)_0%,transparent_60%)] opacity-[0.025]" />

      {/* top-right botanical decoration */}
      <Float
        duration={10}
        delay={0}
        className="absolute -right-14 -top-14 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[580px] lg:h-[580px]"
      >
        <BotanicalCluster className="h-full w-full text-primary/[0.13]" gradientId="leafTop" />
      </Float>
      <Float
        duration={12}
        delay={1}
        className="absolute -right-10 -top-10 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[440px] md:h-[440px] lg:w-[560px] lg:h-[560px]"
      >
        <FloatingDots className="h-full w-full" />
      </Float>

      {/* bottom-left botanical decoration */}
      <Float
        duration={11}
        delay={0.5}
        className="absolute -left-14 -bottom-14 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[440px] md:h-[440px] lg:w-[560px] lg:h-[560px]"
      >
        <BotanicalCluster
          className="h-full w-full text-primary/[0.17]"
          flipped
          gradientId="leafBottom"
        />
      </Float>
      <Float
        duration={13}
        delay={2}
        className="absolute -left-10 -bottom-10 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[440px] md:h-[440px] lg:w-[560px] lg:h-[560px]"
      >
        <FloatingDots className="h-full w-full text-primary/30" />
      </Float>
    </div>
  );
}

