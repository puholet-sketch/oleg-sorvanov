"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Career() {
  const { t, lang } = useI18n();

  return (
    <section id="career" className="bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {lang === "ru" ? "Карьера" : "Career"}
        </p>
        <h2 className="mt-3 mb-10 text-4xl font-bold tracking-tight md:text-5xl">
          {lang === "ru" ? "Профессиональный путь" : "Professional path"}
        </h2>

        <ul className="timeline timeline-vertical timeline-snap-icon">
          {site.career.map((item, index) => (
            <li key={item.title.ru}>
              {index > 0 ? <hr className="bg-primary/30" /> : null}
              <div className="timeline-middle">
                <span className="flex size-4 items-center justify-center rounded-full bg-primary" />
              </div>
              <div
                className={`timeline-box border-base-300 bg-base-100 ${
                  index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
                }`}
              >
                <p className="text-sm text-base-content/50">{t(item.period)}</p>
                <h3 className="mt-1 text-xl font-bold">{t(item.title)}</h3>
                <p className="mt-2 text-base-content/70">{t(item.text)}</p>
              </div>
              {index < site.career.length - 1 ? <hr className="bg-primary/30" /> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
