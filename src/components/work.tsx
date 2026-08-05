"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Work() {
  const { t, lang } = useI18n();

  return (
    <section id="cases" className="bg-[var(--fog)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--ink)]/45">
              {lang === "ru" ? "Кейсы" : "Cases"}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--ink)] md:text-5xl">
              {lang === "ru"
                ? "Продуктовый delivery и PMO"
                : "Product delivery and PMO"}
            </h2>
          </div>
          <p className="max-w-md text-[var(--ink)]/65">
            {lang === "ru"
              ? "Портфель, стабилизация, аналитика и платформы страхового рынка."
              : "Portfolio, stabilization, analytics, and insurance-market platforms."}
          </p>
        </div>

        <ul className="divide-y divide-[var(--ink)]/10 border-y border-[var(--ink)]/10">
          {site.cases.map((item, index) => {
            const href = "href" in item ? item.href : "#contact";
            const external = href.startsWith("http");
            return (
              <motion.li
                key={item.title.ru}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group grid gap-4 py-8 transition-colors md:grid-cols-[1fr_auto] md:items-center md:gap-8"
                >
                  <div>
                    <p className="text-sm text-[var(--ink)]/45">{t(item.meta)}</p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[var(--ink)] transition-colors group-hover:text-[var(--accent-ink)] md:text-3xl">
                      {t(item.title)}
                    </h3>
                    <p className="mt-2 max-w-3xl text-[var(--ink)]/65">
                      {t(item.summary)}
                    </p>
                    {"stats" in item && item.stats ? (
                      <div className="mt-4 flex flex-wrap gap-4">
                        {item.stats.map((stat) => (
                          <div key={stat.value}>
                            <div className="font-[family-name:var(--font-display)] text-xl text-[var(--ink)]">
                              {stat.value}
                            </div>
                            <div className="text-xs uppercase tracking-wide text-[var(--ink)]/45">
                              {t(stat.label)}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-[var(--ink)]/70 transition-colors group-hover:text-[var(--accent-ink)]">
                    {"cta" in item && item.cta
                      ? t(item.cta)
                      : lang === "ru"
                        ? "Подробнее"
                        : "Details"}
                    <span className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--ink)]/15 transition-all group-hover:border-[var(--accent-ink)] group-hover:bg-[var(--accent)]">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
