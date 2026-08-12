"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="bg-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10 md:py-32">
        <FadeUp>
          <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--voltage-dim)] uppercase">
            {lang === "ru" ? "Обо мне" : "About"}
          </p>
          <h2 className="section-heading mt-3">
            {t(site.about.intro)}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} className="space-y-8">
          <p className="text-lg leading-relaxed text-ink/75 md:text-xl">
            {t(site.about.focus)}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[var(--line)] bg-paper p-5">
              <h3 className="font-display text-lg font-bold">
                {lang === "ru" ? "Образование" : "Education"}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/70">
                {site.about.education[lang].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-voltage" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[var(--line)] bg-paper p-5 sm:col-span-1">
              <h3 className="font-display text-lg font-bold">
                {lang === "ru" ? "Стек" : "Stack"}
              </h3>
              <p className="mt-3 text-sm text-ink/70">{t(site.about.stack)}</p>
            </div>
          </div>
          <div className="rounded-3xl bg-void p-6 text-mist">
            <h3 className="font-display text-lg font-bold text-voltage">
              {lang === "ru" ? "Проектный офис" : "Project office"}
            </h3>
            <p className="mt-3 text-sm text-mist/75">{t(site.about.office)}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
