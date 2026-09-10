"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Work() {
  const { t, lang } = useI18n();

  return (
    <section id="cases" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <div className="mb-4">
          <h2 className="section-heading">{lang === "ru" ? "Кейсы" : "Cases"}</h2>
          <p className="mt-1 max-w-xl text-sm text-muted">
            {lang === "ru"
              ? "Продуктовый delivery · платформы · PMO-аналитика · стабилизация"
              : "Product delivery · platforms · PMO analytics · stabilization"}
          </p>
        </div>

        <div className="grid items-stretch gap-2.5 md:grid-cols-2">
          {site.cases.map((item, index) => {
            const href = "href" in item && item.href ? item.href : "#contact";
            const external = href.startsWith("http");
            const featured = index === 0;
            const spanClass = featured ? "md:col-span-2" : "";
            const cardClass =
              "glass-card group relative flex h-full min-w-0 flex-col p-3.5";
            const ctaLabel =
              "cta" in item && item.cta
                ? t(item.cta)
                : lang === "ru"
                  ? "Подробнее"
                  : "Details";
            const body = (
              <>
                <p className="card-label">
                  {String(index + 1).padStart(2, "0")} · {t(item.meta)}
                </p>
                <h3 className="card-heading mt-1.5 text-mist">{t(item.title)}</h3>
                <p className="body-copy mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                  {t(item.summary)}
                </p>
                {"stats" in item && item.stats ? (
                  <div className="mt-3 flex flex-wrap gap-5">
                    {item.stats.map((stat) => (
                      <div key={stat.value}>
                        <div className="font-display text-lg font-semibold text-voltage">
                          {stat.value}
                        </div>
                        <div className="text-[0.65rem] uppercase tracking-wide text-[#737373]">
                          {t(stat.label)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
                <span className="btn-orig btn-ghost-orig mt-4 w-fit shrink-0">
                  {ctaLabel}
                </span>
              </>
            );

            const motionProps = {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-40px" },
              transition: {
                duration: 0.4,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1] as const,
              },
            };

            return external ? (
              <motion.a
                key={item.title.ru}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
                className={`${cardClass} ${spanClass}`}
              >
                {body}
              </motion.a>
            ) : (
              <motion.div
                key={item.title.ru}
                {...motionProps}
                className={`h-full min-w-0 ${spanClass}`}
              >
                <Link href={href} className={cardClass}>
                  {body}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
