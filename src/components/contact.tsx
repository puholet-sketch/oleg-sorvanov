"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Contact() {
  const { lang } = useI18n();

  return (
    <section id="contact" className="bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {lang === "ru" ? "Контакты" : "Contact"}
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {lang === "ru" ? "Рекомендации по запросу" : "References on request"}
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="card border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
              <p className="text-base-content/75">
                {lang === "ru" ? site.location.ru : site.location.en}.{" "}
                {lang === "ru" ? site.locationNote.ru : site.locationNote.en}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  {site.email}
                </a>
                <a href={site.phoneHref} className="btn btn-outline">
                  {site.phone}
                </a>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  {site.telegramLabel}
                </a>
                <a href="cv.html" className="btn btn-ghost">
                  {lang === "ru" ? "Резюме / CV" : "CV"}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={site.maps.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-block"
            >
              {lang === "ru" ? "Яндекс.Карты" : "Yandex Maps"}
            </a>
            <a
              href={site.maps.google}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-block"
            >
              Google Maps
            </a>
            <a
              href={site.maxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-block"
            >
              MAX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
