"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import { ProjectOfficeDorDod } from "@/components/project-office-dor-dod";
import { layerPages, type MetricPage } from "@/lib/project-office-content";

export function ProjectOfficeMetricPage({ metric }: { metric: MetricPage }) {
  const { t, lang } = useI18n();
  const sections = [
    { title: { ru: "Что измеряем", en: "What we measure" }, items: metric.measure },
    { title: { ru: "Исходная линия", en: "Baseline" }, items: metric.baseline },
    { title: { ru: "Артефакты", en: "Artifacts" }, items: metric.artifacts },
    { title: { ru: "Ритм", en: "Cadence" }, items: metric.cadence },
    { title: { ru: "Ошибки", en: "Mistakes" }, items: metric.errors },
  ];
  const related = layerPages.filter((layer) => metric.relatedLayers.includes(layer.id));
  const showDorCallout = metric.id === "schedule";

  return (
    <div className="project-office-theme po-metric min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet po-metric__sheet mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
          <Link href="/project-office/" className="po-back">
            ← {lang === "ru" ? "К ориентирам" : "Back to targets"}
          </Link>

          <FadeUp className="po-hero po-detail__hero mt-3">
            <div className="po-hero__body">
              <p className="po-kicker">
                {lang === "ru"
                  ? "Ориентир после базовой линии"
                  : "Target after baseline"}
              </p>
              <h1 className="po-hero__title">
                <span className="po-metric__value">{metric.value}</span>{" "}
                {t(metric.label)}
              </h1>
              <p className="po-hero__lead">{t(metric.meaning)}</p>
            </div>
          </FadeUp>

          {showDorCallout ? (
            <FadeUp delay={0.02}>
              <ProjectOfficeDorDod mode="callout" className="mt-4" />
            </FadeUp>
          ) : null}

          <FadeUp className="po-block po-detail__block" delay={0.03}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                01
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru" ? "Как к этому прийти" : "How to get there"}
                </h2>
              </div>
            </div>
            <ol className="po-path po-detail__steps">
              {metric.steps.map((step, index) => (
                <li key={step.ru} className="po-path__step">
                  <div className="po-path__n">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="po-path__text">{t(step)}</p>
                </li>
              ))}
            </ol>
            {metric.resources?.length ? (
              <div className="po-metric__resources">
                {metric.resources.map((resource) => (
                  <a
                    key={resource.href}
                    className="po-metric__resource"
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${resource.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(resource.label)} →
                  </a>
                ))}
              </div>
            ) : null}
          </FadeUp>

          <FadeUp className="po-detail__grid" delay={0.05}>
            {sections.map((section, index) => (
              <section className="po-detail__card" key={section.title.ru}>
                <p className="po-kicker">{String(index + 2).padStart(2, "0")}</p>
                <h2 className="po-detail__title">{t(section.title)}</h2>
                <ul className="po-detail__list">
                  {section.items.map((item) => <li key={item.ru}>{t(item)}</li>)}
                </ul>
              </section>
            ))}
            <section className="po-detail__card po-detail__result">
              <p className="po-kicker">{lang === "ru" ? "Критерий результата" : "Result criterion"}</p>
              <p>{t(metric.result)}</p>
            </section>
          </FadeUp>

          <FadeUp className="po-detail__nav" delay={0.07}>
            <div>
              <p className="po-kicker">{lang === "ru" ? "Связанные слои" : "Related layers"}</p>
              <div className="po-detail__links">
                {related.map((layer) => (
                  <Link key={layer.id} href={`/project-office/how/${layer.id}/`}>
                    {layer.n} · {t(layer.title)}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/project-office/" className="po-detail__all">
              {lang === "ru" ? "Все материалы проектного офиса" : "All project office materials"} →
            </Link>
          </FadeUp>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
