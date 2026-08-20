"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden bg-void text-mist scroll-mt-0">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt={t(site.fullName)}
          fill
          priority
          className="object-cover object-[center_18%] opacity-55"
          sizes="100vw"
        />
        <div className="mesh absolute inset-0" />
        <div className="blob left-[10%] top-[28%] size-44 bg-voltage/20" />
        <div
          className="blob right-[14%] top-[16%] size-56 bg-voltage/12"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="grain absolute inset-0 opacity-25" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-[max(5.25rem,11vh)] sm:px-6 md:px-10 md:pb-10">
        <motion.a
          href={site.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-voltage/40 bg-voltage/10 px-3.5 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-voltage"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-voltage" />
          {t(site.role)}
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-4xl text-[clamp(2.1rem,7.2vw,4.6rem)] leading-[0.96] font-extrabold tracking-[-0.04em]"
        >
          {lang === "ru" ? (
            <>
              IT-лидер <span className="text-voltage">страхового</span> рынка
            </>
          ) : (
            <>
              <span className="text-voltage">Insurance</span> IT leader
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-mist/78 md:text-base"
        >
          {t(site.tagline)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-wrap gap-2.5"
        >
          <a
            href="#cases"
            className="group relative overflow-hidden rounded-full bg-voltage px-5 py-2.5 text-sm font-bold tracking-wide text-void transition hover:scale-[1.03]"
          >
            <span className="relative z-10">
              {lang === "ru" ? "Кейсы" : "Cases"}
            </span>
            <span className="shine absolute inset-0" />
          </a>
          <a
            href="cv.html"
            className="rounded-full border border-mist/30 px-5 py-2.5 text-sm font-semibold text-mist transition hover:border-voltage hover:text-voltage"
          >
            {lang === "ru" ? "Резюме" : "CV"}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="stat-board mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
          aria-label={lang === "ru" ? "Ключевые метрики" : "Key metrics"}
        >
          {site.stats.map((item) => (
            <div key={item.value + item.label.ru} className="stat-cube">
              <div className="font-display text-[1.45rem] leading-none font-extrabold text-voltage md:text-[1.65rem]">
                {item.value}
              </div>
              <div className="mt-1.5 text-[0.68rem] leading-tight text-mist/55">
                {t(item.label)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
