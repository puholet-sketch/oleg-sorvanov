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
    <section className="overflow-hidden border-y border-white/10 bg-ink text-mist">
      <div className="marquee gap-8 py-2.5 text-[0.7rem] tracking-[0.16em] uppercase">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-8">
            <span className="text-voltage">◆</span>
            <span className="opacity-75">{item}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
