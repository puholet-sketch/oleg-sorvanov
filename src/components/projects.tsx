"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="projects" className="bg-[var(--ink)] px-6 py-24 text-[var(--fog)] md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
            {lang === "ru" ? "Личные проекты" : "Personal projects"}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
            {lang === "ru" ? "Публичные демо и сервисы" : "Public demos and services"}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group rounded-3xl border border-[var(--fog)]/10 bg-[var(--ink-soft)] p-5 transition-colors hover:border-[var(--accent)]/50"
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-xl">
                  {project.title}
                </h3>
                <ArrowUpRight className="size-4 shrink-0 text-[var(--fog)]/50 transition-colors group-hover:text-[var(--accent)]" />
              </div>
              <p className="text-sm leading-relaxed text-[var(--fog)]/65">
                {t(project.text)}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.a
          href={site.coffee.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col justify-between gap-4 rounded-3xl border border-[var(--accent)]/30 bg-[linear-gradient(135deg,rgba(198,241,53,0.12),transparent_55%)] p-6 transition-colors hover:border-[var(--accent)] md:flex-row md:items-center md:p-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Business
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl md:text-3xl">
              {site.coffee.title}
            </h3>
            <p className="mt-2 max-w-2xl text-[var(--fog)]/70">{t(site.coffee.text)}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-[var(--accent)]">
            coffee.friends →
          </span>
        </motion.a>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.hobbies.map((hobby) => (
            <div
              key={hobby.title.ru}
              className="rounded-3xl border border-[var(--fog)]/10 p-5"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg">
                {t(hobby.title)}
              </h3>
              <p className="mt-2 text-sm text-[var(--fog)]/65">{t(hobby.text)}</p>
              {"href" in hobby && hobby.href ? (
                <a
                  href={hobby.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-[var(--accent)] hover:opacity-80"
                >
                  {lang === "ru" ? "Открыть →" : "Open →"}
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
