"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  "VFOS B2B",
  "VirtuDrive",
  "РГС Ипотека",
  "Согласие",
  "ВСК / МСГ",
  "Node.js",
  "TypeScript",
  "Kubernetes",
  "Oracle",
  "PMO",
  "AI / Cursor",
];

type MarqueeProps = {
  items?: string[];
  className?: string;
  "aria-label"?: string;
  /** Keep scrolling even when prefers-reduced-motion is set (opt-in). */
  forceMotion?: boolean;
};

/** Repeat short lists so the strip stays wider than typical viewports. */
function expandItems(items: string[], minCount = 8): string[] {
  if (items.length >= minCount) return items;
  const out: string[] = [];
  while (out.length < minCount) out.push(...items);
  return out;
}

function MarqueeGroup({
  items,
  ariaHidden,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="marquee__group inline-flex items-center gap-8"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="inline-flex items-center gap-8">
          <span className="text-voltage" aria-hidden>
            ◆
          </span>
          <span className="text-muted">{item}</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee({
  items = DEFAULT_ITEMS,
  className,
  "aria-label": ariaLabel,
  forceMotion = false,
}: MarqueeProps) {
  const prefersReduced = useReducedMotion();
  const reducedMotion = Boolean(prefersReduced) && !forceMotion;
  const loop = reducedMotion ? items : expandItems(items);

  return (
    <section
      className={cn(
        "overflow-hidden border-y border-[#2a2a2a] bg-void text-mist",
        className,
      )}
      aria-label={ariaLabel}
    >
      <div
        className={cn(
          "marquee gap-8 py-2.5 text-[0.7rem] tracking-[0.16em] uppercase",
          reducedMotion && "marquee--static",
          forceMotion && "marquee--force",
        )}
      >
        <MarqueeGroup items={loop} />
        {!reducedMotion ? <MarqueeGroup items={loop} ariaHidden /> : null}
      </div>
    </section>
  );
}
