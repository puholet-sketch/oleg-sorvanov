"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Contact() {
  const { lang } = useI18n();

  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[2rem] bg-void px-8 py-14 text-mist md:px-14 md:py-20">
            <div className="blob -right-10 -top-10 size-64 bg-voltage/25" />
            <div
              className="blob bottom-0 left-10 size-72 bg-voltage/10"
              style={{ animationDelay: "2s" }}
            />
            <div className="grain absolute inset-0 opacity-20" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs tracking-[0.22em] text-voltage uppercase">
                  {lang === "ru" ? "Контакты" : "Contact"}
                </p>
                <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                  {lang === "ru" ? "Рекомендации по запросу" : "References on request"}
                </h2>
                <p className="mt-5 max-w-lg text-mist/70">
                  {lang === "ru" ? site.location.ru : site.location.en}.{" "}
                  {lang === "ru" ? site.locationNote.ru : site.locationNote.en}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="rounded-full bg-voltage px-5 py-3 text-sm font-bold text-void transition hover:scale-[1.03]"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.phoneHref}
                    className="rounded-full border border-mist/25 px-5 py-3 text-sm text-mist transition hover:border-voltage hover:text-voltage"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={site.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-mist/25 px-5 py-3 text-sm text-mist transition hover:border-voltage hover:text-voltage"
                  >
                    {site.telegramLabel}
                  </a>
                  <a
                    href="cv.html"
                    className="rounded-full border border-mist/25 px-5 py-3 text-sm text-mist transition hover:border-voltage hover:text-voltage"
                  >
                    {lang === "ru" ? "Резюме / CV" : "CV"}
                  </a>
                  <a
                    href="hh-otkliki/"
                    className="rounded-full border border-mist/25 px-5 py-3 text-sm text-mist transition hover:border-voltage hover:text-voltage"
                  >
                    {lang === "ru" ? "HH-отклики" : "HH responses"}
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-end gap-3">
                <a
                  href={site.maps.yandex}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-mist/15 px-5 py-4 transition hover:border-voltage/50"
                >
                  {lang === "ru" ? "Яндекс.Карты" : "Yandex Maps"}
                </a>
                <a
                  href={site.maps.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-mist/15 px-5 py-4 transition hover:border-voltage/50"
                >
                  Google Maps
                </a>
                <a
                  href={site.maxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-mist/15 px-5 py-4 transition hover:border-voltage/50"
                >
                  MAX
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
