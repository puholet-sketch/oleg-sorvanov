"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--ink)] text-[var(--fog)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt={t(site.fullName)}
          fill
          priority
          className="object-cover object-[center_18%] opacity-85"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,18,16,0.94)_14%,rgba(11,18,16,0.62)_48%,rgba(11,18,16,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(198,241,53,0.18),transparent_42%)]" />
        <div className="hero-grain absolute inset-0 opacity-[0.14]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 max-w-xl text-sm uppercase tracking-[0.18em] text-[var(--accent)]"
        >
          <a
            href={site.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            {t(site.role)}
          </a>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-display)] text-[clamp(3.4rem,11vw,7.5rem)] leading-[0.9] tracking-[-0.04em]"
        >
          {t(site.fullName)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--fog)]/85 md:text-xl"
        >
          {t(site.headline)}. {t(site.tagline)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild variant="accent" size="lg">
            <a href="#cases">
              {lang === "ru" ? "Смотреть кейсы" : "View cases"}
              <ArrowDownRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--fog)]/30 text-[var(--fog)] hover:border-[var(--accent)] hover:bg-transparent hover:text-[var(--accent)]"
          >
            <a href="cv.html">{lang === "ru" ? "Резюме" : "CV"}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
