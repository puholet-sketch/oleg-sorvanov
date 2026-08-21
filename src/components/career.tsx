"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Career() {
  const { t, lang } = useI18n();

  return (
    <section id="career" className="bg-void text-mist">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <FadeUp>
          <h2 className="section-heading">
            {lang === "ru" ? "Профессиональный путь" : "Professional path"}
          </h2>
          <p className="mt-1 text-sm text-muted">{lang === "ru" ? "2006 — сегодня" : "2006 — today"}</p>
        </FadeUp>

        <div className="mt-5 flex flex-col gap-2">
          {site.career.map((item, index) => (
            <FadeUp
              key={item.title.ru}
              delay={index * 0.03}
              className="glass-card grid gap-1.5 p-3.5 md:grid-cols-[6.5rem_1fr] md:gap-5"
            >
              <p className="font-display text-sm font-semibold tracking-wide text-voltage">
                {item.year}
                <span className="mt-0.5 block text-[0.65rem] font-medium tracking-normal text-[#737373]">
                  {t(item.duration)}
                </span>
              </p>
              <div>
                <h3 className="card-heading">
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-voltage"
                    >
                      {t(item.title)}
                    </a>
                  ) : (
                    t(item.title)
                  )}
                </h3>
                {item.lines[lang].map((line) => (
                  <p key={line} className="body-copy mt-1 max-w-3xl text-sm leading-relaxed text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </FadeUp>
          ))}
        </div>

        <p className="card-label mt-5 mb-2">{lang === "ru" ? "Образование" : "Education"}</p>
        <div className="flex flex-col gap-2">
          {site.educationPath.map((item, index) => (
            <FadeUp
              key={item.title.ru}
              delay={index * 0.03}
              className="glass-card grid gap-1.5 p-3.5 md:grid-cols-[6.5rem_1fr] md:gap-5"
            >
              <p className="font-display text-sm font-semibold tracking-wide text-voltage">
                {item.year}
                <span className="mt-0.5 block text-[0.65rem] font-medium tracking-normal text-[#737373]">
                  {t(item.duration)}
                </span>
              </p>
              <div>
                <h3 className="card-heading">{t(item.title)}</h3>
                <p className="body-copy mt-1 text-sm leading-relaxed text-muted">{t(item.text)}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-4">
          <a href="cv.html" className="btn-orig btn-ghost-orig">
            {lang === "ru" ? "Резюме PDF" : "CV PDF"}
          </a>
        </div>
      </div>
    </section>
  );
}
