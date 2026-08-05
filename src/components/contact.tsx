"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Contact() {
  const { lang } = useI18n();

  return (
    <section id="contact" className="bg-[var(--fog)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] bg-[var(--ink)] px-8 py-14 text-[var(--fog)] md:px-14 md:py-20"
        >
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-[var(--accent)]/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 size-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                {lang === "ru" ? "Контакты" : "Contact"}
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl">
                {lang === "ru"
                  ? "Рекомендации по запросу"
                  : "References on request"}
              </h2>
              <p className="mt-5 max-w-lg text-[var(--fog)]/70">
                {lang === "ru" ? site.location.ru : site.location.en}.{" "}
                {lang === "ru" ? site.locationNote.ru : site.locationNote.en}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="lg">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--fog)]/25 text-[var(--fog)] hover:border-[var(--accent)] hover:bg-transparent hover:text-[var(--accent)]"
                >
                  <a href={site.phoneHref}>{site.phone}</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--fog)]/25 text-[var(--fog)] hover:border-[var(--accent)] hover:bg-transparent hover:text-[var(--accent)]"
                >
                  <a href={site.telegram} target="_blank" rel="noopener noreferrer">
                    {site.telegramLabel}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--fog)]/25 text-[var(--fog)] hover:border-[var(--accent)] hover:bg-transparent hover:text-[var(--accent)]"
                >
                  <a href="cv.html">{lang === "ru" ? "Резюме / CV" : "CV"}</a>
                </Button>
              </div>
            </div>

            <div className="space-y-3 self-end">
              <a
                href={site.maps.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-[var(--fog)]/15 px-5 py-4 transition-colors hover:border-[var(--accent)]/50"
              >
                {lang === "ru" ? "Яндекс.Карты" : "Yandex Maps"}
              </a>
              <a
                href={site.maps.google}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-[var(--fog)]/15 px-5 py-4 transition-colors hover:border-[var(--accent)]/50"
              >
                Google Maps
              </a>
              <a
                href={site.maxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-[var(--fog)]/15 px-5 py-4 transition-colors hover:border-[var(--accent)]/50"
              >
                MAX
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
