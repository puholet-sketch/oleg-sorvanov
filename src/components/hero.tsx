"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative bg-void text-mist scroll-mt-0">
      <div className="mx-auto grid max-w-[1080px] gap-5 px-4 pb-7 pt-[max(4.75rem,8vh)] sm:px-6 md:grid-cols-[1fr_300px] md:items-start md:gap-7 md:px-8 md:pb-8">
        <div>
          <motion.a
            href={site.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-2 inline-flex w-fit items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-muted"
          >
            <span className="size-1.5 rounded-full bg-voltage" />
            {t(site.role)}
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-3xl text-[clamp(1.7rem,4.2vw,2.5rem)] leading-[1.12] font-semibold tracking-[-0.02em] uppercase"
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-muted"
          >
            {t(site.tagline)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-wrap gap-2"
          >
            <a href="#cases" className="btn-orig btn-primary-orig">
              {lang === "ru" ? "Кейсы" : "Cases"}
            </a>
            <a href="Oleg_Sorvanov_CV.pdf" className="btn-orig btn-ghost-orig" target="_blank" rel="noopener noreferrer">
              {lang === "ru" ? "Резюме" : "CV"}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-2"
          aria-label={lang === "ru" ? "Ключевые метрики" : "Key metrics"}
        >
          {site.stats.map((item) => (
            <div key={item.value + item.label.ru} className="stat-cube">
              <div className="font-display text-[1.35rem] leading-none font-semibold tracking-[-0.02em] text-voltage">
                {item.value}
              </div>
              <div className="mt-1.5 text-[0.7rem] leading-tight text-[#737373]">
                {t(item.label)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
