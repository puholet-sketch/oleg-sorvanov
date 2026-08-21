"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Life() {
  const { t, lang } = useI18n();

  return (
    <section id="life" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <FadeUp>
          <h2 className="section-heading">{lang === "ru" ? "Хобби" : "Hobbies"}</h2>
          <p className="mt-1 text-sm text-muted">
            {lang === "ru"
              ? "Семья, спорт и рекомендованная литература"
              : "Family, sports & recommended reading"}
          </p>
        </FadeUp>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {site.hobbies.map((hobby, index) => (
            <FadeUp key={hobby.title.ru} delay={index * 0.03}>
              <article className="glass-card h-full min-w-0 p-3.5">
                <h3 className="card-label">{t(hobby.title)}</h3>
                <p className="body-copy mt-2 text-sm leading-relaxed text-muted">{t(hobby.text)}</p>
                {"href" in hobby && hobby.href ? (
                  <a
                    href={hobby.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-voltage hover:underline"
                  >
                    {lang === "ru" ? "Открыть →" : "Open →"}
                  </a>
                ) : null}
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
