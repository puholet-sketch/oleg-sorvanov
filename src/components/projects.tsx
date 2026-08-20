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
        className="group flex h-full min-w-0 flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-void p-5 text-mist"
      >
        <div className="min-w-0">
          <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-voltage uppercase">
            {label}
          </p>
          <h3 className="featured-heading mt-1.5">{title}</h3>
          <p className="body-copy mt-2 text-sm leading-relaxed text-mist/68">{text}</p>
          {stats ? (
            <div className="mt-3 flex flex-wrap gap-4">
              {stats.map((item) => (
                <div key={item.value + item.label} className="min-w-0">
                  <div className="font-display text-lg font-extrabold text-voltage">
                    {item.value}
                  </div>
                  <div className="text-[0.65rem] tracking-wide text-mist/50 uppercase">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <span className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-voltage px-4 py-2.5 text-center text-xs font-bold text-void sm:w-auto sm:justify-start">
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
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <FadeUp>
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-[color:var(--voltage-dim)] uppercase">
            {lang === "ru" ? "Проекты" : "Projects"}
          </p>
          <h2 className="section-heading mt-2">
            {lang === "ru" ? "Демо, сервис и жизнь" : "Demos, services and life"}
          </h2>
        </FadeUp>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {site.projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.03}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-w-0 flex-col rounded-2xl border border-[var(--line)] bg-paper p-4 transition hover:-translate-y-0.5 hover:border-[color:var(--voltage-dim)]"
              >
                <div className="mb-3 flex min-w-0 items-start justify-between gap-2">
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

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <FeaturedCard
            label={lang === "ru" ? "Бизнес" : "Business"}
            title={site.coffee.title}
            text={t(site.coffee.text)}
            href={site.coffee.href}
            cta={site.coffee.cta}
            delay={0.06}
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
            delay={0.1}
          />
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {site.hobbies.map((hobby, index) => (
            <FadeUp key={hobby.title.ru} delay={index * 0.04}>
              <div className="min-w-0 rounded-2xl border border-[var(--line)] bg-paper p-4">
                <h3 className="card-heading">{t(hobby.title)}</h3>
                <p className="body-copy mt-1.5 text-sm leading-relaxed text-ink/65">
                  {t(hobby.text)}
                </p>
                {"href" in hobby && hobby.href ? (
                  <a
                    href={hobby.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-[color:var(--voltage-dim)]"
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
