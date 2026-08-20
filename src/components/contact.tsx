"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Contact() {
  const { lang } = useI18n();

  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl bg-void px-6 py-10 text-mist md:px-10 md:py-12">
            <div className="blob -right-10 -top-10 size-48 bg-voltage/22" />
            <div className="grain absolute inset-0 opacity-20" />

            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <p className="text-[0.68rem] tracking-[0.22em] text-voltage uppercase">
                  {lang === "ru" ? "Контакты" : "Contact"}
                </p>
                <h2 className="section-heading mt-2">
                  {lang === "ru" ? "Рекомендации по запросу" : "References on request"}
                </h2>
                <p className="mt-3 max-w-lg text-sm text-mist/68">
                  {lang === "ru" ? site.location.ru : site.location.en}.{" "}
                  {lang === "ru" ? site.locationNote.ru : site.locationNote.en}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href={`mailto:${site.email}`}
                    className="rounded-full bg-voltage px-4 py-2.5 text-sm font-bold text-void transition hover:scale-[1.03]"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.phoneHref}
                    className="rounded-full border border-mist/25 px-4 py-2.5 text-sm text-mist transition hover:border-voltage hover:text-voltage"
                  >
                    {site.phone}
                  </a>
                  <a
                    href={site.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-mist/25 px-4 py-2.5 text-sm text-mist transition hover:border-voltage hover:text-voltage"
                  >
                    {site.telegramLabel}
                  </a>
                  <a
                    href="cv.html"
                    className="rounded-full border border-mist/25 px-4 py-2.5 text-sm text-mist transition hover:border-voltage hover:text-voltage"
                  >
                    {lang === "ru" ? "Резюме / CV" : "CV"}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={site.maps.yandex}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-mist/15 px-4 py-3 text-sm transition hover:border-voltage/50"
                >
                  {lang === "ru" ? "Яндекс.Карты" : "Yandex Maps"}
                </a>
                <a
                  href={site.maps.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-mist/15 px-4 py-3 text-sm transition hover:border-voltage/50"
                >
                  Google Maps
                </a>
                <a
                  href={site.maxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-mist/15 px-4 py-3 text-sm transition hover:border-voltage/50"
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
