"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

function FeaturedCard({
  label,
  title,
  text,
  href,
  cta,
  stats,
  delay = 0,
}: {
  label: string;
  title: string;
  text: string;
  href: string;
  cta: string;
  stats?: readonly { value: string; label: string }[];
  delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full min-w-0 flex-col justify-between gap-5 overflow-hidden rounded-[1.75rem] bg-void p-5 text-mist sm:p-7 md:p-8"
      >
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-voltage uppercase sm:text-xs">
            {label}
          </p>
          <h3 className="featured-heading mt-2">{title}</h3>
          <p className="body-copy mt-2 max-w-2xl text-sm leading-relaxed text-mist/70 sm:text-base">
            {text}
          </p>
          {stats ? (
            <div className="mt-4 flex flex-wrap gap-4 sm:gap-5">
              {stats.map((item) => (
                <div key={item.value + item.label} className="min-w-0">
                  <div className="font-display text-lg font-extrabold text-voltage sm:text-xl">
                    {item.value}
                  </div>
                  <div className="text-[0.65rem] tracking-wide text-mist/55 uppercase sm:text-xs">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <span className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-voltage px-4 py-3 text-center text-xs font-bold break-words text-void sm:w-auto sm:justify-start sm:px-5 sm:text-sm">
          {cta}
        </span>
      </a>
    </FadeUp>
  );
}

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="projects" className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <FadeUp>
          <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--voltage-dim)] uppercase">
            {lang === "ru" ? "Личные проекты" : "Personal projects"}
          </p>
          <h2 className="section-heading mt-3">
            {lang === "ru" ? "Публичные демо и сервисы" : "Public demos and services"}
          </h2>
        </FadeUp>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {site.projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.04}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-w-0 flex-col rounded-3xl border border-[var(--line)] bg-paper p-4 transition hover:-translate-y-1 hover:border-[color:var(--voltage-dim)] hover:shadow-[0_20px_50px_rgba(16,24,21,0.08)] sm:p-5"
              >
                <div className="mb-4 flex min-w-0 items-start justify-between gap-2 sm:mb-6">
                  <h3 className="card-heading min-w-0 flex-1">{project.title}</h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-voltage transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </div>
                <p className="body-copy text-sm leading-relaxed text-ink/65">{t(project.text)}</p>
              </a>
            </FadeUp>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <FeaturedCard
            label={lang === "ru" ? "Бизнес" : "Business"}
            title={site.coffee.title}
            text={t(site.coffee.text)}
            href={site.coffee.href}
            cta={site.coffee.cta}
            delay={0.08}
          />
          <FeaturedCard
            label={t(site.digitalMenu.label)}
            title={t(site.digitalMenu.title)}
            text={t(site.digitalMenu.text)}
            href={site.digitalMenu.href}
            cta={t(site.digitalMenu.cta)}
            stats={site.digitalMenu.stats.map((item) => ({
              value: item.value,
              label: t(item.label),
            }))}
            delay={0.12}
          />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {site.hobbies.map((hobby, index) => (
            <FadeUp key={hobby.title.ru} delay={index * 0.05}>
              <div className="min-w-0 rounded-3xl border border-[var(--line)] bg-paper p-4 sm:p-5">
                <h3 className="card-heading">{t(hobby.title)}</h3>
                <p className="body-copy mt-2 text-sm leading-relaxed text-ink/65">{t(hobby.text)}</p>
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
