"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Coffee() {
  const { t, lang } = useI18n();

  return (
    <section id="coffee" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <FadeUp className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="section-heading">
              Coffee<span className="hi">Friends</span>
            </h2>
            <p className="mt-1 text-sm text-muted">{t(site.coffee.text)}</p>
          </div>
          <a
            href={site.coffee.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orig btn-primary-orig"
          >
            {site.coffee.cta}
          </a>
        </FadeUp>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {site.coffee.strip.map((item) => (
            <div
              key={item.value + item.phase.ru}
              className={`glass-card p-3.5 ${"current" in item && item.current ? "border-voltage" : ""}`}
            >
              <div className="font-display text-2xl font-semibold leading-none text-voltage">
                {item.value}
              </div>
              <div className="card-label mt-2">{t(item.phase)}</div>
              <p className="mt-1 text-sm text-muted">{t(item.note)}</p>
            </div>
          ))}
        </div>

        <FadeUp delay={0.05} className="glass-card mt-2 p-3.5">
          <h3 className="card-label">{lang === "ru" ? "Партнёры" : "Partners"}</h3>
          <ul className="mt-2 grid gap-1.5 text-sm text-muted sm:grid-cols-2">
            {site.coffee.partners.map((partner) => (
              <li key={partner.name}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-voltage hover:underline"
                >
                  {partner.name}
                </a>
                {" — "}
                {lang === "ru" ? partner.ru : partner.en}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={0.08} className="glass-card mt-2 flex flex-wrap items-center justify-between gap-3 p-3.5">
          <div>
            <h3 className="card-label">{t(site.digitalMenu.label)}</h3>
            <p className="featured-heading mt-1">{t(site.digitalMenu.title)}</p>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
              {t(site.digitalMenu.text)}
            </p>
          </div>
          <a
            href={site.digitalMenu.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orig btn-ghost-orig"
          >
            {t(site.digitalMenu.cta)}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
