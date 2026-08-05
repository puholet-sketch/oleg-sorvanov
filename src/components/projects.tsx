"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="projects" className="bg-mist">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeUp>
          <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--voltage-dim)] uppercase">
            {lang === "ru" ? "Личные проекты" : "Personal projects"}
          </p>
          <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            {lang === "ru" ? "Публичные демо и сервисы" : "Public demos and services"}
          </h2>
        </FadeUp>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.04}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-[var(--line)] bg-paper p-5 transition hover:-translate-y-1 hover:border-[color:var(--voltage-dim)] hover:shadow-[0_20px_50px_rgba(16,24,21,0.08)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <span className="text-voltage transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
                <p className="text-sm text-ink/65">{t(project.text)}</p>
              </a>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <a
            href={site.coffee.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex flex-col justify-between gap-4 overflow-hidden rounded-[2rem] bg-void p-7 text-mist md:flex-row md:items-center md:p-10"
          >
            <div>
              <p className="text-xs tracking-[0.2em] text-voltage uppercase">Business</p>
              <h3 className="font-display mt-2 text-3xl font-extrabold">{site.coffee.title}</h3>
              <p className="mt-2 max-w-2xl text-mist/70">{t(site.coffee.text)}</p>
            </div>
            <span className="inline-flex rounded-full bg-voltage px-5 py-3 text-sm font-bold text-void">
              coffee.friends →
            </span>
          </a>
        </FadeUp>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.hobbies.map((hobby, index) => (
            <FadeUp key={hobby.title.ru} delay={index * 0.05}>
              <div className="rounded-3xl border border-[var(--line)] bg-paper p-5">
                <h3 className="font-display text-lg font-bold">{t(hobby.title)}</h3>
                <p className="mt-2 text-sm text-ink/65">{t(hobby.text)}</p>
                {"href" in hobby && hobby.href ? (
                  <a
                    href={hobby.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-[color:var(--voltage-dim)]"
                  >
                    {lang === "ru" ? "Открыть →" : "Open →"}
                  </a>
                ) : null}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
