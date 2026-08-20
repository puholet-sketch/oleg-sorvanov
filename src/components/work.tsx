"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Work() {
  const { t, lang } = useI18n();

  return (
    <section id="cases" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mb-7 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-[color:var(--voltage-dim)] uppercase">
              {lang === "ru" ? "Кейсы" : "Cases"}
            </p>
            <h2 className="section-heading mt-2">
              {lang === "ru" ? "Delivery и PMO" : "Delivery and PMO"}
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/55">
            {lang === "ru"
              ? "Платформы, портфель, стабилизация и аналитика страхового рынка."
              : "Platforms, portfolio, stabilization, and insurance-market analytics."}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {site.cases.map((item, index) => {
            const href = "href" in item ? item.href : "#contact";
            const external = href.startsWith("http");
            const featured = index === 0;
            return (
              <motion.a
                key={item.title.ru}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative block overflow-hidden rounded-2xl border border-[var(--line)] p-5 transition hover:-translate-y-0.5 hover:border-[color:var(--voltage-dim)] ${
                  featured
                    ? "bg-void text-mist md:col-span-2 md:grid md:grid-cols-[1.4fr_auto] md:items-center md:gap-6 md:p-6"
                    : "bg-mist"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-voltage/0 via-voltage/12 to-voltage/0 transition duration-700 group-hover:translate-x-[110%] ${
                    featured ? "via-voltage/20" : ""
                  }`}
                />
                <div className="relative">
                  <p
                    className={`text-[0.7rem] tracking-[0.12em] uppercase ${
                      featured ? "text-voltage/80" : "text-muted"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")} · {t(item.meta)}
                  </p>
                  <h3 className={`card-heading mt-1.5 ${featured ? "text-mist" : ""}`}>
                    {t(item.title)}
                  </h3>
                  <p
                    className={`body-copy mt-1.5 max-w-3xl text-sm leading-relaxed ${
                      featured ? "text-mist/68" : "text-ink/65"
                    }`}
                  >
                    {t(item.summary)}
                  </p>
                  {"stats" in item && item.stats ? (
                    <div className="mt-3 flex flex-wrap gap-5">
                      {item.stats.map((stat) => (
                        <div key={stat.value}>
                          <div className="font-display text-lg font-extrabold text-voltage">
                            {stat.value}
                          </div>
                          <div
                            className={`text-[0.65rem] uppercase tracking-wide ${
                              featured ? "text-mist/45" : "text-muted"
                            }`}
                          >
                            {t(stat.label)}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                <span
                  className={`relative mt-4 inline-flex h-10 shrink-0 items-center justify-center rounded-full px-4 text-xs font-semibold transition md:mt-0 ${
                    featured
                      ? "bg-voltage text-void group-hover:bg-white"
                      : "bg-void text-mist group-hover:bg-voltage group-hover:text-void"
                  }`}
                >
                  {"cta" in item && item.cta
                    ? t(item.cta)
                    : lang === "ru"
                      ? "Подробнее"
                      : "Details"}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
