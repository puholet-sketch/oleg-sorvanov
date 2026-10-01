"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import {
  authorityItems,
  launchStepById,
  launchSteps,
  layerPages,
  metricPages,
  type LaunchStepPage,
} from "@/lib/project-office-content";

export function ProjectOfficeLaunchPage({ step }: { step: LaunchStepPage }) {
  const { t, lang } = useI18n();
  const sections = [
    { title: { ru: "Что на входе", en: "Inputs" }, items: step.inputs },
    { title: { ru: "Выходы и артефакты", en: "Outputs and artifacts" }, items: step.outputs },
    { title: { ru: "Кто участвует", en: "Who takes part" }, items: step.roles },
    { title: { ru: "Срок и ритм", en: "Duration and cadence" }, items: step.cadence },
    { title: { ru: "Типовые ошибки", en: "Common mistakes" }, items: step.errors },
  ];
  const relatedMetrics = metricPages.filter((metric) =>
    step.relatedMetrics.includes(metric.id),
  );
  const relatedLayers = layerPages.filter((layer) =>
    step.relatedLayers.includes(layer.id),
  );
  const next = step.nextStep ? launchStepById(step.nextStep) : undefined;
  const relatedAuthority = authorityItems.filter((item) =>
    item.relatedLaunch.includes(step.id),
  );

  return (
    <div className="project-office-theme po-metric min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet po-metric__sheet mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
          <Link href="/project-office/#launch" className="po-back">
            ← {lang === "ru" ? "К маршруту запуска" : "Back to launch route"}
          </Link>

          <FadeUp className="po-hero po-detail__hero mt-3">
            <div className="po-hero__body">
              <p className="po-kicker">
                {lang === "ru"
                  ? `Шаг ${step.n} · Маршрут запуска`
                  : `Step ${step.n} · Launch route`}
              </p>
              <h1 className="po-hero__title">{t(step.title)}</h1>
              <p className="po-hero__lead">{t(step.purpose)}</p>
            </div>
          </FadeUp>

          <FadeUp className="po-block po-detail__block" delay={0.03}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                01
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru" ? "Что делаем" : "What we do"}
                </h2>
              </div>
            </div>
            <ol className="po-path po-detail__steps">
              {step.steps.map((item, index) => (
                <li key={item.ru} className="po-path__step">
                  <div className="po-path__n">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="po-path__text">{t(item)}</p>
                </li>
              ))}
            </ol>
          </FadeUp>

          <FadeUp className="po-detail__grid" delay={0.05}>
            {sections.map((section, index) => (
              <section className="po-detail__card" key={section.title.ru}>
                <p className="po-kicker">{String(index + 2).padStart(2, "0")}</p>
                <h2 className="po-detail__title">{t(section.title)}</h2>
                <ul className="po-detail__list">
                  {section.items.map((item) => (
                    <li key={item.ru}>{t(item)}</li>
                  ))}
                </ul>
              </section>
            ))}
            <section className="po-detail__card po-detail__result">
              <p className="po-kicker">
                {lang === "ru" ? "Критерий «шаг закрыт»" : "Step-done criterion"}
              </p>
              <p>{t(step.result)}</p>
            </section>
          </FadeUp>

          <FadeUp className="po-detail__nav" delay={0.07}>
            <div>
              <p className="po-kicker">
                {lang === "ru" ? "Связанные разделы" : "Related sections"}
              </p>
              <div className="po-detail__links">
                {next ? (
                  <Link href={`/project-office/launch/${next.id}/`}>
                    {lang === "ru" ? "Следующий шаг" : "Next step"} · {next.n}{" "}
                    {t(next.title)}
                  </Link>
                ) : null}
                {relatedMetrics.map((metric) => (
                  <Link key={metric.id} href={`/project-office/${metric.id}/`}>
                    {metric.value} · {t(metric.label)}
                  </Link>
                ))}
                {relatedLayers.map((layer) => (
                  <Link key={layer.id} href={`/project-office/how/${layer.id}/`}>
                    {layer.n} · {t(layer.title)}
                  </Link>
                ))}
                {relatedAuthority.map((item) => (
                  <Link
                    key={item.id}
                    href={`/project-office/authority/${item.id}/`}
                  >
                    {lang === "ru" ? "Полномочие" : "Authority"} · {t(item.title)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="po-detail__links po-detail__links--stack">
              <Link href="/project-office/#launch" className="po-detail__all">
                {lang === "ru" ? "Все шаги маршрута" : "All launch steps"} →
              </Link>
              <Link href="/project-office/" className="po-detail__all">
                {lang === "ru"
                  ? "Все материалы проектного офиса"
                  : "All project office materials"}{" "}
                →
              </Link>
            </div>
          </FadeUp>

          <FadeUp className="po-detail__siblings" delay={0.08}>
            <p className="po-kicker">
              {lang === "ru" ? "Маршрут" : "Route"}
            </p>
            <div className="po-detail__links">
              {launchSteps.map((item) => (
                <Link
                  key={item.id}
                  href={`/project-office/launch/${item.id}/`}
                  aria-current={item.id === step.id ? "page" : undefined}
                >
                  {item.n} · {t(item.title)}
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
