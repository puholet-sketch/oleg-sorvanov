"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Work() {
  const { t, lang } = useI18n();

  return (
    <section id="cases" className="bg-base-200">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {lang === "ru" ? "Кейсы" : "Cases"}
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {lang === "ru" ? "Продуктовый delivery и PMO" : "Product delivery and PMO"}
        </h2>
        <p className="mt-4 max-w-2xl text-base-content/70">
          {lang === "ru"
            ? "Портфель, стабилизация, аналитика и платформы страхового рынка."
            : "Portfolio, stabilization, analytics, and insurance-market platforms."}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {site.cases.map((item) => {
            const href = "href" in item ? item.href : "#contact";
            const external = href.startsWith("http");
            return (
              <article
                key={item.title.ru}
                className="card border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body">
                  <div className="badge badge-ghost badge-sm">{t(item.meta)}</div>
                  <h3 className="card-title">{t(item.title)}</h3>
                  <p className="text-base-content/70">{t(item.summary)}</p>
                  {"stats" in item && item.stats ? (
                    <div className="mt-2 flex flex-wrap gap-6">
                      {item.stats.map((stat) => (
                        <div key={stat.value}>
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs uppercase tracking-wide text-base-content/50">
                            {t(stat.label)}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="card-actions justify-end">
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="btn btn-primary btn-sm"
                    >
                      {"cta" in item && item.cta
                        ? t(item.cta)
                        : lang === "ru"
                          ? "Подробнее"
                          : "Details"}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
