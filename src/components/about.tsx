"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function About() {
  const { t, lang } = useI18n();

  const chips =
    lang === "ru"
      ? ["ИТ-Лидер", "Предприниматель", "Лыжник", "Яхтсмен", "Отец троих"]
      : ["IT Leader", "Entrepreneur", "Skier", "Yachtsman", "Father of three"];

  return (
    <section id="about" className="bg-mist">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[0.92fr_1.08fr] md:gap-10 md:px-10 md:py-16">
        <FadeUp>
          <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-[color:var(--voltage-dim)] uppercase">
            {lang === "ru" ? "Обо мне" : "About"}
          </p>
          <h2 className="section-heading mt-2">{t(site.about.intro)}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 md:text-[0.95rem]">
            {t(site.about.focus)}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--line)] bg-paper px-2.5 py-1 text-[0.7rem] font-medium text-ink/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.08} className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--line)] bg-paper p-4">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.16em] text-[color:var(--voltage-dim)] uppercase">
              {lang === "ru" ? "Образование" : "Education"}
            </h3>
            <ul className="mt-2.5 space-y-1.5 text-sm text-ink/70">
              {site.about.education[lang].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-voltage" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-paper p-4">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.16em] text-[color:var(--voltage-dim)] uppercase">
              {lang === "ru" ? "Стек" : "Stack"}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{t(site.about.stack)}</p>
          </div>
          <div className="rounded-2xl bg-void p-4 text-mist sm:col-span-2">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.16em] text-voltage uppercase">
              {lang === "ru" ? "Проектный офис" : "Project office"}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-mist/75">{t(site.about.office)}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
