"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="bg-[var(--ink)] px-6 py-24 text-[var(--fog)] md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
            {lang === "ru" ? "Обо мне" : "About"}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
            {t(site.about.intro)}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 text-[var(--fog)]/80"
        >
          <p className="text-lg leading-relaxed md:text-xl">{t(site.about.focus)}</p>
          <div>
            <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
              {lang === "ru" ? "Образование" : "Education"}
            </h3>
            <ul className="space-y-2">
              {site.about.education[lang].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
              {lang === "ru" ? "Проектный офис" : "Project office"}
            </h3>
            <p>{t(site.about.office)}</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
              {lang === "ru" ? "Стек" : "Stack"}
            </h3>
            <p>{t(site.about.stack)}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
