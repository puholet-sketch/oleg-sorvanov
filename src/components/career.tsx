"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Career() {
  const { t, lang } = useI18n();

  return (
    <section id="career" className="bg-[var(--fog)] px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--ink)]/45">
          {lang === "ru" ? "Карьера" : "Career"}
        </p>
        <h2 className="mb-12 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] md:text-5xl">
          {lang === "ru" ? "Профессиональный путь" : "Professional path"}
        </h2>

        <ol className="space-y-0 border-l border-[var(--ink)]/15 pl-6 md:pl-8">
          {site.career.map((item, index) => (
            <motion.li
              key={item.title.ru}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full bg-[var(--accent)] md:-left-[2.4rem]" />
              <p className="text-sm uppercase tracking-[0.16em] text-[var(--ink)]/45">
                {t(item.period)}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                {t(item.title)}
              </h3>
              <p className="mt-2 max-w-3xl text-[var(--ink)]/65">{t(item.text)}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
