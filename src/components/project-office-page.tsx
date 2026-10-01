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
  mistakesLink,
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
        <div className="po-sheet mx-auto max-w-[1100px] px-4 pb-10 pt-[max(3.85rem,5.2vh)] sm:px-6 md:px-8">
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
                  ? "Методология поставки · проектный офис"
                  : "Delivery methodology · project office"}
              </p>
              <h1 className="po-hero__title">
                {lang === "ru"
                  ? "Директор по производственной системе"
                  : "Director of the Production System"}
              </h1>
              <p className="po-hero__lead">
                {lang === "ru"
                  ? "Владеет внедрением методологии поставки и PMO-контуром на согласованном периметре."
                  : "Owns delivery methodology rollout and the PMO contour across the agreed perimeter."}
              </p>
              <ul className="po-pillars" aria-label={lang === "ru" ? "Четыре столпа" : "Four pillars"}>
                {(lang === "ru"
                  ? ["Регламенты", "Учёт", "Ритм", "Прозрачность для заказчика"]
                  : ["Rules", "Tracking", "Cadence", "Customer visibility"]
                ).map((label) => (
                  <li key={label} className="po-pillars__item">
                    <span className="po-pillars__dot" aria-hidden />
                    <span className="po-pillars__label">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="po-pillars__caption">
                {lang === "ru"
                  ? "Измеримый эффект после базовой линии"
                  : "Measurable effect after the baseline"}
              </p>
              <p className="po-hero__alt">
                {lang === "ru" ? (
                  <>
                    Отдельная роль в операционном контуре.{" "}
                    <Link href="/project-office/how/team/" className="po-hero__alt-link">
                      Кто за что →
                    </Link>
                  </>
                ) : (
                  <>
                    A distinct role in the operating contour.{" "}
                    <Link href="/project-office/how/team/" className="po-hero__alt-link">
                      Who owns what →
                    </Link>
                  </>
                )}
              </p>
            </div>
            <aside className="po-hero__motto">
              <div className="po-hero__motto-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sadhguru.png`}
                  alt={lang === "ru" ? "Садхгуру" : "Sadhguru"}
                  className="po-hero__motto-photo"
                  width={120}
                  height={120}
                />
              </div>
              <div className="po-hero__motto-copy">
                <blockquote className="po-hero__motto-quote">
                  {lang === "ru" ? (
                    <>
                      <p className="po-hero__motto-lead">
                        Всё, что вы делаете — делайте с максимальной вовлечённостью!
                      </p>
                      <p>
                        Когда вы идёте по большому, вы максимально вовлечены в процесс,
                        иначе результата не будет.
                      </p>
                      <p>
                        Почему бы не делать всё остальное по такому же принципу? В
                        противном случае это можно не делать!
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="po-hero__motto-lead">
                        Whatever you do — do it with full involvement!
                      </p>
                      <p>
                        When you go after something big, you are fully in the process —
                        otherwise there is no result.
                      </p>
                      <p>
                        Why not live the rest the same way? Otherwise it need not be
                        done at all!
                      </p>
                    </>
                  )}
                </blockquote>
                <p className="po-hero__motto-attr">
                  {lang === "ru" ? (
                    <a
                      href="https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D1%81%D1%83%D0%B4%D0%B5%D0%B2,_%D0%94%D0%B6%D0%B0%D0%B3%D0%B3%D0%B8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Садхгуру
                    </a>
                  ) : (
                    <a
                      href="https://en.wikipedia.org/wiki/Sadhguru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sadhguru
                    </a>
                  )}
                </p>
              </div>
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
                  {lang === "ru" ? (
                    <>
                      Пример целей после аудита.{" "}
                      <span className="po-accent">
                        Сначала базовая линия, потом ориентиры
                      </span>{" "}
                      — не заявленные прошлые результаты.
                    </>
                  ) : (
                    <>
                      Example goals after an audit.{" "}
                      <span className="po-accent">
                        Baseline first, then targets
                      </span>{" "}
                      — not claimed past results.
                    </>
                  )}
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
                  {lang === "ru" ? (
                    <>
                      <span className="po-accent">6</span> слоёв.{" "}
                      <span className="po-accent">
                        Без регламентов и артефактов ритм и метрики не держат
                        прогноз.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="po-accent">6</span> layers.{" "}
                      <span className="po-accent">
                        Without rules and artifacts, cadence and metrics cannot
                        hold a forecast.
                      </span>
                    </>
                  )}
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
              <li role="listitem">
                <Link
                  href={mistakesLink.href}
                  className="po-kpi__item po-kpi__hit po-kpi__hit--mistakes"
                >
                  <div className="po-kpi__value">!</div>
                  <h3 className="po-kpi__label">{t(mistakesLink.label)}</h3>
                  <p className="po-kpi__note">
                    {lang === "ru"
                      ? "Ошибка × роль × как правильно — по всем контурам методологии."
                      : "Mistake × role × right move — across every methodology contour."}
                  </p>
                  <span className="po-kpi__hint">
                    {lang === "ru" ? "Открыть каталог" : "Open catalog"}
                  </span>
                </Link>
              </li>
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
                  {lang === "ru" ? (
                    <>
                      От встраивания до точечных мер.{" "}
                      <span className="po-accent">
                        Без базы и артефактов метрики не работают.
                      </span>
                    </>
                  ) : (
                    <>
                      From embedding to targeted measures.{" "}
                      <span className="po-accent">
                        Without baseline and artifacts, metrics do not work.
                      </span>
                    </>
                  )}
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

          {/* 5. Rollout */}
          <FadeUp className="po-block" id="rollout" delay={0.09}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                05
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru" ? "Внедрение" : "Rollout"}
                </h2>
                <p className="po-lead">
                  {lang === "ru" ? (
                    <>
                      План по времени и чек-листы исполнения.{" "}
                      <span className="po-accent">
                        Ориентир ~90 дней без внутренних цифр.
                      </span>
                    </>
                  ) : (
                    <>
                      Time-phased plan and execution checklists.{" "}
                      <span className="po-accent">
                        ~90-day guide without internal figures.
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="po-kpi po-rollout-home" role="list">
              <Link
                href="/project-office/rollout/"
                className="po-kpi__item po-kpi__hit"
                role="listitem"
              >
                <div className="po-kpi__value">01</div>
                <h3 className="po-kpi__label">
                  {lang === "ru" ? "План внедрения" : "Rollout plan"}
                </h3>
                <p className="po-kpi__note">
                  {lang === "ru"
                    ? "Фазы по неделям: встраивание → аудит → база → цели → меры."
                    : "Week-phased: embedding → audit → baseline → targets → measures."}
                </p>
                <span className="po-kpi__hint">
                  {lang === "ru" ? "Открыть роадмап" : "Open roadmap"}
                </span>
              </Link>
              <Link
                href="/project-office/rollout/checklists/"
                className="po-kpi__item po-kpi__hit"
                role="listitem"
              >
                <div className="po-kpi__value">02</div>
                <h3 className="po-kpi__label">
                  {lang === "ru" ? "Чек-листы" : "Checklists"}
                </h3>
                <p className="po-kpi__note">
                  {lang === "ru"
                    ? "Пункт · роль · регулярность · отметка в браузере."
                    : "Item · role · cadence · browser marks."}
                </p>
                <span className="po-kpi__hint">
                  {lang === "ru" ? "Открыть чек-листы" : "Open checklists"}
                </span>
              </Link>
            </div>
          </FadeUp>

          {/* 6. Perimeter */}
          <FadeUp className="po-block" id="authority" delay={0.1}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                06
              </span>
              <div>
                <h2 className="po-h2">
                  {lang === "ru"
                    ? "Полномочия и периметр"
                    : "Authority and scope"}
                </h2>
                <p className="po-lead">
                  {lang === "ru" ? (
                    <>
                      <span className="po-accent">
                        Условия, без которых маршрут и ориентиры не держатся.
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="po-accent">
                        Conditions without which the route and targets cannot
                        hold.
                      </span>
                    </>
                  )}
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
