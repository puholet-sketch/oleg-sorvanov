"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {lang === "ru" ? "Обо мне" : "About"}
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          {t(site.about.intro)}
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-base-content/70">{t(site.about.focus)}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-lg">
                {lang === "ru" ? "Образование" : "Education"}
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-base-content/75">
                {site.about.education[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-lg">
                {lang === "ru" ? "Проектный офис" : "Project office"}
              </h3>
              <p className="text-base-content/75">{t(site.about.office)}</p>
            </div>
          </div>
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-lg">{lang === "ru" ? "Стек" : "Stack"}</h3>
              <p className="text-base-content/75">{t(site.about.stack)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
