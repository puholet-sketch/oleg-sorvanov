"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Career() {
  const { t, lang } = useI18n();

  return (
    <section id="career" className="bg-void text-mist">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeUp>
          <p className="text-xs font-semibold tracking-[0.22em] text-voltage uppercase">
            {lang === "ru" ? "Карьера" : "Career"}
          </p>
          <h2 className="font-display mt-3 mb-12 text-4xl font-extrabold tracking-tight md:text-5xl">
            {lang === "ru" ? "Профессиональный путь" : "Professional path"}
          </h2>
        </FadeUp>

        <ol className="relative space-y-0 border-l border-white/15 pl-8">
          {site.career.map((item, index) => (
            <FadeUp key={item.title.ru} delay={index * 0.08} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.35rem] top-1 size-3 rounded-full bg-voltage shadow-[0_0_24px_rgba(212,255,0,0.55)]" />
              <p className="text-sm tracking-[0.16em] text-mist/45 uppercase">
                {t(item.period)}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold">{t(item.title)}</h3>
              <p className="mt-2 max-w-3xl text-mist/70">{t(item.text)}</p>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}
