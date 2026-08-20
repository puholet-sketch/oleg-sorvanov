"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Career() {
  const { t, lang } = useI18n();

  return (
    <section id="career" className="bg-void text-mist">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <FadeUp>
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-voltage uppercase">
            {lang === "ru" ? "Карьера" : "Career"}
          </p>
          <h2 className="section-heading mt-2 mb-7">
            {lang === "ru" ? "Профессиональный путь" : "Professional path"}
          </h2>
        </FadeUp>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {site.career.map((item, index) => (
            <FadeUp
              key={item.title.ru}
              delay={index * 0.05}
              className="grid gap-2 py-4 md:grid-cols-[7.5rem_1fr] md:gap-8 md:py-5"
            >
              <p className="font-display text-sm font-bold tracking-wide text-voltage">
                {t(item.period)}
              </p>
              <div>
                <h3 className="text-base font-semibold md:text-lg">{t(item.title)}</h3>
                <p className="body-copy mt-1 max-w-3xl text-sm leading-relaxed text-mist/65">
                  {t(item.text)}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
