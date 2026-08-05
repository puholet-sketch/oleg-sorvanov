"use client";

const items = [
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

export function Marquee() {
  const row = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-[var(--line)] bg-ink text-mist">
      <div className="marquee gap-10 py-4 text-sm tracking-[0.18em] uppercase">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-10">
            <span className="text-voltage">◆</span>
            <span className="opacity-80">{item}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
