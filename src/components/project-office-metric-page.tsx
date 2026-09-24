"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import type { MetricPage } from "@/lib/project-office-metrics";

export function ProjectOfficeMetricPage({ metric }: { metric: MetricPage }) {
  const { t, lang } = useI18n();

  return (
    <div className="project-office-theme min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet mx-auto max-w-[1100px] px-4 pb-16 pt-[max(4.5rem,6.5vh)] sm:px-6 md:px-8">
          <Link href="/project-office/" className="po-back">
            ← {lang === "ru" ? "К ориентирам" : "Back to targets"}
          </Link>

          <FadeUp className="po-hero mt-5">
            <div className="po-hero__grid" aria-hidden>
              <span className="po-hero__mark">{metric.value}</span>
            </div>
            <div className="po-hero__body">
              <p className="po-kicker">
                {lang === "ru" ? "Ориентир после базовой линии" : "Target after baseline"}
              </p>
              <h1 className="po-hero__title">{t(metric.label)}</h1>
              <p className="po-hero__lead">{t(metric.why)}</p>
            </div>
          </FadeUp>

          <FadeUp className="po-block" delay={0.04}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                01
              </span>
              <div>
                <h2 className="po-h2">{lang === "ru" ? "Как к этому прийти" : "How to get there"}</h2>
              </div>
            </div>
            <ol className="po-path">
              {metric.how.map((step, index) => (
                <li key={step.ru} className="po-path__step">
                  <div className="po-path__n">{String(index + 1).padStart(2, "0")}</div>
                  <p className="po-path__text">{t(step)}</p>
                </li>
              ))}
            </ol>
          </FadeUp>

          <FadeUp className="po-block" delay={0.06}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                02
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru" ? "Почему цифра держится" : "Why the figure holds"}
                </h2>
                <p className="po-lead">{t(metric.note)}</p>
              </div>
            </div>
            <ul className="po-scope">
              {metric.before.map((item) => (
                <li key={item.ru} className="po-scope__item">
                  {t(item)}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
