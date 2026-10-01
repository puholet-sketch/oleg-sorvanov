"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import {
  authorityItems,
  launchSteps,
  layerPages as layers,
  metricPages as metrics,
  metricPages,
} from "@/lib/project-office-content";

export function ProjectOfficePage() {
  const { t, lang } = useI18n();
  const [openMetric, setOpenMetric] = useState<string | null>(null);
  const opened = metricPages.find((item) => item.id === openMetric);

  return (
    <div className="project-office-theme min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet mx-auto max-w-[1100px] px-4 pb-16 pt-[max(4.5rem,6.5vh)] sm:px-6 md:px-8">
          <Link href="/#about" className="po-back">
            ← {lang === "ru" ? "К портфолио" : "Back to portfolio"}
          </Link>

          {/* 1. Hero — role + motto */}
          <FadeUp className="po-hero mt-5">
            <div className="po-hero__grid" aria-hidden>
              <span className="po-hero__mark">01</span>
            </div>
            <div className="po-hero__body">
              <p className="po-kicker">
                {lang === "ru"
                  ? "Офис проектов · управление портфелем"
                  : "Project office · portfolio management"}
              </p>
              <h1 className="po-hero__title">
                {lang === "ru"
                  ? "Руководитель проектного офиса"
                  : "Head of Project Office"}
              </h1>
              <p className="po-hero__lead">
                {lang === "ru"
                  ? "Прогнозируемое управление портфелем: регламенты, учёт, ритм мероприятий и прозрачность для заказчика — с измеримым эффектом после базовой линии."
                  : "Predictable portfolio management: rules, tracking, management cadence and customer visibility — with measurable effect after a baseline."}
              </p>
              <p className="po-hero__alt">
                {lang === "ru"
                  ? "Альтернатива по периметру: старший руководитель проектов с группой РП и набором проектов."
                  : "Alternative scope: senior project lead with a group of PMs and a set of projects."}
              </p>
            </div>
            <aside className="po-hero__motto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sadhguru.jpg`}
                alt={lang === "ru" ? "Садхгуру" : "Sadhguru"}
                className="po-hero__motto-photo"
                width={280}
                height={340}
              />
              <blockquote className="po-hero__motto-quote">
                {lang === "ru"
                  ? "Всё, что вы делаете — делайте с максимальной вовлечённостью! Когда вы идёте по большому, вы максимально вовлечены в процесс, иначе результата не будет! Почему бы не делать всё остальное по такому же принципу? В противном случае это можно не делать!"
                  : "Whatever you do — do it with full involvement! When you go after something big, you are fully in the process — otherwise there is no result. Why not live the rest the same way? Otherwise it need not be done at all!"}
              </blockquote>
              <p className="po-hero__motto-attr">
                {lang === "ru" ? (
                  <>
                    —{" "}
                    <a
                      href="https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D1%81%D1%83%D0%B4%D0%B5%D0%B2,_%D0%94%D0%B6%D0%B0%D0%B3%D0%B3%D0%B8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Садхгуру
                    </a>
                  </>
                ) : (
                  <>
                    —{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Sadhguru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sadhguru
                    </a>
                  </>
                )}
              </p>
            </aside>
          </FadeUp>

          {/* 2. KPI strip */}
          <FadeUp className="po-block" delay={0.04}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                02
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru"
                    ? "Ориентиры после базовой линии"
                    : "Targets after baseline"}
                </h2>
                <p className="po-lead">
                  {lang === "ru"
                    ? "Пример целевых уровней после аудита прошлого периода — не заявленные прошлые результаты. Сначала базовая линия, потом цели."
                    : "Example target levels after an audit of the prior period — not claimed past results. Baseline first, then goals."}
                </p>
              </div>
            </div>

            <div className="po-kpi" role="list">
              {metrics.map((m) => (
                  <Link
                    key={m.id}
                    href={`/project-office/${m.id}/`}
                    className="po-kpi__item po-kpi__hit"
                    role="listitem"
                    onMouseEnter={() => setOpenMetric(m.id)}
                    onFocus={() => setOpenMetric(m.id)}
                  >
                    <div className="po-kpi__value">{m.value}</div>
                    <div className="po-kpi__label">{t(m.label)}</div>
                    <div className="po-kpi__note">{t(m.note)}</div>
                    <span className="po-kpi__hint">
                      {lang === "ru" ? "Как прийти" : "How to get there"}
                    </span>
                  </Link>
              ))}
            </div>
            {opened ? (
              <div className="po-reveal" key={opened.id}>
                <p className="po-kicker">{opened.value}</p>
                <h3 className="po-reveal__title">{t(opened.label)}</h3>
                <p className="po-reveal__text">{t(opened.meaning)}</p>
                <ol className="po-reveal__steps">
                  {opened.steps.slice(0, 3).map((step) => (
                    <li key={step.ru}>{t(step)}</li>
                  ))}
                </ol>
                <Link href={`/project-office/${opened.id}/`} className="po-reveal__more">
                  {lang === "ru" ? "Открыть страницу" : "Open the page"} →
                </Link>
              </div>
            ) : null}
          </FadeUp>

          {/* 3. How it works — 6 layers */}
          <FadeUp className="po-block" delay={0.06}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                03
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru" ? "Как устроено" : "How it is built"}
                </h2>
                <p className="po-lead">
                  {lang === "ru"
                    ? "Шесть слоёв. Каждый опирается на предыдущий: без регламентов и артефактов ритм и метрики не держат прогноз."
                    : "Six layers. Each rests on the previous: without rules and artifacts, cadence and metrics cannot hold a forecast."}
                </p>
              </div>
            </div>

            <ol className="po-kpi po-layers-grid" id="how" role="list">
              {layers.map((layer) => (
                <li key={layer.n} role="listitem">
                  <Link
                    href={`/project-office/how/${layer.id}/`}
                    className="po-kpi__item po-kpi__hit"
                  >
                  <div className="po-kpi__value">{layer.n}</div>
                  <h3 className="po-kpi__label">{t(layer.title)}</h3>
                  <p className="po-kpi__note">{t(layer.summary)}</p>
                  <span className="po-kpi__hint">
                    {lang === "ru" ? "Открыть слой" : "Open layer"}
                  </span>
                  </Link>
                </li>
              ))}
            </ol>
          </FadeUp>

          {/* 4. Launch route */}
          <FadeUp className="po-block" id="launch" delay={0.08}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                04
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru" ? "Маршрут запуска" : "Launch route"}
                </h2>
                <p className="po-lead">
                  {lang === "ru"
                    ? "Короткий путь от встраивания до точечных изменений. Без базовой линии и артефактов метрики не заработают."
                    : "A short path from embedding to targeted changes. Without baseline and artifacts, metrics will not work."}
                </p>
              </div>
            </div>

            <ol className="po-path">
              {launchSteps.map((step, i) => (
                <li key={step.id}>
                  <Link
                    href={`/project-office/launch/${step.id}/`}
                    className="po-path__step po-path__hit"
                  >
                    <div className="po-path__n">{step.n}</div>
                    <h3 className="po-path__title">{t(step.title)}</h3>
                    <p className="po-path__text">{t(step.summary)}</p>
                    <span className="po-kpi__hint">
                      {lang === "ru" ? "Открыть шаг" : "Open step"}
                    </span>
                    {i < launchSteps.length - 1 ? (
                      <span className="po-path__arrow" aria-hidden>
                        →
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ol>
          </FadeUp>

          {/* 5. Perimeter */}
          <FadeUp className="po-block" id="authority" delay={0.1}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                05
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru"
                    ? "Полномочия и периметр"
                    : "Authority and scope"}
                </h2>
                <p className="po-lead">
                  {lang === "ru"
                    ? "Условия, без которых маршрут запуска и ориентиры не держатся в контуре."
                    : "Conditions without which the launch route and targets cannot hold in the contour."}
                </p>
              </div>
            </div>

            <ul className="po-scope">
              {authorityItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/project-office/authority/${item.id}/`}
                    className="po-scope__item po-scope__hit"
                  >
                    <span className="po-scope__n">{item.n}</span>
                    <span className="po-scope__title">{t(item.title)}</span>
                    <span className="po-scope__text">{t(item.summary)}</span>
                    <span className="po-kpi__hint">
                      {lang === "ru" ? "Открыть" : "Open"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="po-cta mt-10 flex flex-wrap gap-3" delay={0.12}>
            <Link href="/#contact" className="btn-orig btn-primary-orig">
              {lang === "ru" ? "Связаться" : "Contact"}
            </Link>
            <Link href="/#cases" className="btn-orig btn-ghost-orig">
              {lang === "ru" ? "Кейсы и инструменты" : "Cases & tools"}
            </Link>
          </FadeUp>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
