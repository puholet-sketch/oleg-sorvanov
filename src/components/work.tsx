"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Work() {
  const { t, lang } = useI18n();

  return (
    <section id="cases" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--voltage-dim)] uppercase">
              {lang === "ru" ? "Кейсы" : "Cases"}
            </p>
            <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
              {lang === "ru" ? "Продуктовый delivery и PMO" : "Product delivery and PMO"}
            </h2>
          </div>
          <p className="max-w-md text-ink/60">
            {lang === "ru"
              ? "Портфель, стабилизация, аналитика и платформы страхового рынка."
              : "Portfolio, stabilization, analytics, and insurance-market platforms."}
          </p>
        </div>

        <div className="space-y-4">
          {site.cases.map((item, index) => {
            const href = "href" in item ? item.href : "#contact";
            const external = href.startsWith("http");
            return (
              <motion.a
                key={item.title.ru}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.01 }}
                className="group relative block overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-mist p-6 transition md:p-8"
              >
                <div className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-voltage/0 via-voltage/15 to-voltage/0 transition duration-700 group-hover:translate-x-[100%]" />
                <div className="relative grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="text-sm text-muted">{t(item.meta)}</p>
                    <h3 className="font-display mt-2 text-2xl font-bold md:text-3xl">
                      {t(item.title)}
                    </h3>
                    <p className="mt-2 max-w-3xl text-ink/65">{t(item.summary)}</p>
                    {"stats" in item && item.stats ? (
                      <div className="mt-4 flex flex-wrap gap-6">
                        {item.stats.map((stat) => (
                          <div key={stat.value}>
                            <div className="font-display text-xl font-extrabold text-[color:var(--voltage-dim)]">
                              {stat.value}
                            </div>
                            <div className="text-xs uppercase tracking-wide text-muted">
                              {t(stat.label)}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <span className="inline-flex h-12 items-center justify-center rounded-full bg-void px-5 text-sm font-semibold text-mist transition group-hover:bg-voltage group-hover:text-void">
                    {"cta" in item && item.cta
                      ? t(item.cta)
                      : lang === "ru"
                        ? "Подробнее"
                        : "Details"}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
