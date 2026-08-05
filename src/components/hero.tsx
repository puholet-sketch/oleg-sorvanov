"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-void text-mist">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt={t(site.fullName)}
          fill
          priority
          className="object-cover object-[center_18%] opacity-70"
          sizes="100vw"
        />
        <div className="mesh absolute inset-0" />
        <div className="blob left-[12%] top-[30%] size-56 bg-voltage/25" />
        <div
          className="blob right-[18%] top-[18%] size-72 bg-voltage/15"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="grain absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
        <motion.a
          href={site.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-voltage/40 bg-voltage/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-voltage"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-voltage" />
          {t(site.role)}
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3.2rem,10vw,7.2rem)] leading-[0.9] font-extrabold tracking-[-0.04em]"
        >
          {t(site.fullName)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg text-mist/80 md:text-xl"
        >
          <span className="font-semibold text-mist">{t(site.headline)}.</span> {t(site.tagline)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#cases"
            className="group relative overflow-hidden rounded-full bg-voltage px-7 py-3.5 text-sm font-bold tracking-wide text-void transition hover:scale-[1.03]"
          >
            <span className="relative z-10">
              {lang === "ru" ? "Смотреть кейсы" : "View cases"}
            </span>
            <span className="shine absolute inset-0" />
          </a>
          <a
            href="cv.html"
            className="rounded-full border border-mist/30 px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-voltage hover:text-voltage"
          >
            {lang === "ru" ? "Резюме" : "CV"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
