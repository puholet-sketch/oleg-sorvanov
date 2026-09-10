"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Coffee() {
  const { t, lang } = useI18n();
  const current = site.coffee.strip.find((item) => "current" in item && item.current) ?? site.coffee.strip.at(-1);

  return (
    <section id="coffee" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <FadeUp className="glass-card flex flex-col gap-4 p-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-4">
          <div className="min-w-0 flex-1">
            <h2 className="section-heading">
              Coffee<span className="hi">Friends</span>
            </h2>
            <p className="mt-1 text-sm text-muted">{t(site.coffee.text)}</p>
          </div>

          {current ? (
            <div className="flex shrink-0 items-center gap-3 border-voltage/40 sm:border-l sm:pl-6">
              <div className="font-display text-3xl font-semibold leading-none text-voltage">{current.value}</div>
              <div>
                <div className="card-label">{t(current.phase)}</div>
                <p className="mt-0.5 text-sm text-muted">{t(current.note)}</p>
              </div>
            </div>
          ) : null}

          <a
            href={site.coffee.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orig btn-primary-orig shrink-0 self-start sm:self-center"
          >
            {site.coffee.cta}
          </a>
        </FadeUp>

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
