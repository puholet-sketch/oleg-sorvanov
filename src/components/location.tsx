"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Location() {
  const { lang } = useI18n();

  return (
    <section id="location" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <FadeUp>
          <h2 className="section-heading">{lang === "ru" ? "Локация" : "Location"}</h2>
          <p className="mt-1 text-sm text-muted">
            {lang === "ru" ? site.locationNote.ru : site.locationNote.en}
          </p>
        </FadeUp>

        <FadeUp delay={0.04} className="glass-card mt-4 flex flex-wrap items-center justify-between gap-3 p-3.5 md:p-4">
          <p className="max-w-xl text-sm leading-relaxed">
            {lang === "ru" ? (
              <>
                Живу в районе <span className="hi">Очаково-Матвеевское</span> (ЗАО, Москва) — удобная
                точка для личной встречи, если хотите встретиться
              </>
            ) : (
              <>
                Based in <span className="hi">Ochakovo-Matveyevskoye</span> (ZAO, Moscow) — a
                convenient spot for an in-person meeting if you&apos;d like to meet up
              </>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={site.maps.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orig btn-primary-orig"
            >
              {lang === "ru" ? "Яндекс.Карты" : "Yandex Maps"}
            </a>
            <a
              href={site.maps.google}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orig btn-ghost-orig"
            >
              Google Maps
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
