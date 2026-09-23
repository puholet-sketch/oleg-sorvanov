"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";

const metrics = [
  {
    id: "schedule",
    value: "−15%",
    label: { ru: "сроки", en: "schedule" },
    note: {
      ru: "сжатие после выравнивания контура",
      en: "compression after contour alignment",
    },
  },
  {
    id: "satisfaction",
    value: "+20%",
    label: {
      ru: "удовлетворённость заказчика",
      en: "customer satisfaction",
    },
    note: {
      ru: "при регулярной обратной связи",
      en: "with a regular feedback loop",
    },
  },
  {
    id: "plan-fact",
    value: "−30%",
    label: {
      ru: "расхождение план/факт",
      en: "plan/fact drift",
    },
    note: {
      ru: "по проектам и командам",
      en: "across projects and teams",
    },
  },
  {
    id: "tail-cost",
    value: "−20%",
    label: {
      ru: "хвост затрат",
      en: "backlog-tail cost",
    },
    note: {
      ru: "закрытие и передача устаревших задач",
      en: "close or hand off stale tasks",
    },
  },
  {
    id: "tech-debt",
    value: "−15%",
    label: {
      ru: "технический долг",
      en: "technical debt",
    },
    note: {
      ru: "объём относительно базовой линии",
      en: "volume vs baseline",
    },
  },
  {
    id: "overspend",
    value: "−20%",
    label: {
      ru: "перерасход",
      en: "overspend",
    },
    note: {
      ru: "факт против оценки",
      en: "actual vs estimate",
    },
  },
] as const;

const layers = [
  {
    n: "01",
    title: { ru: "Регламенты", en: "Rules of the game" },
    text: {
      ru: "Согласованные правила, которые обязательно соблюдаются. Без них статусы и метрики остаются мнением, а не управлением.",
      en: "Agreed rules that must be followed. Without them, status and metrics stay opinions, not management.",
    },
  },
  {
    n: "02",
    title: {
      ru: "Учёт стадий",
      en: "Stage tracking",
    },
    text: {
      ru: "Единый порядок ведения проектов и задач: что входит в портфель, как фиксируется старт и финиш, как закрывается этап.",
      en: "One way to run projects and tasks: what enters the portfolio, how start/finish is recorded, how a stage is closed.",
    },
  },
  {
    n: "03",
    title: {
      ru: "Артефакты и атрибуты",
      en: "Artifacts and attributes",
    },
    text: {
      ru: "Оценка, даты, ответственность, критерии готовности — поля и документы, без которых задача не считается управляемой.",
      en: "Estimate, dates, ownership, done criteria — fields and documents without which work is not manageable.",
    },
  },
  {
    n: "04",
    title: {
      ru: "Ритм мероприятий",
      en: "Cadence of rituals",
    },
    text: {
      ru: "Оценки, планирование, статусы и ретроспективы с измеримыми действиями — цикл, который держит прогноз.",
      en: "Estimates, planning, status and retrospectives with measurable actions — a cycle that holds the forecast.",
    },
  },
  {
    n: "05",
    title: {
      ru: "Прогноз загрузки",
      en: "Load forecast",
    },
    text: {
      ru: "Горизонт от месяца: достаточность ресурса против избытка, перебалансировка до срыва сроков, а не после.",
      en: "From a one-month horizon: resource sufficiency vs excess, rebalancing before deadlines slip — not after.",
    },
  },
  {
    n: "06",
    title: {
      ru: "Работа с заказчиком",
      en: "Customer working model",
    },
    text: {
      ru: "Единый контур общения, показатели удовлетворённости и цикл улучшений — один язык статуса для бизнеса и команд.",
      en: "One working model, satisfaction measures and an improvement loop — one status language for business and teams.",
    },
  },
] as const;

const pathSteps = [
  {
    n: "01",
    title: { ru: "Встраивание", en: "Embedding" },
    text: {
      ru: "Вход в контур: роли, границы ответственности, каналы статуса к руководству и заказчику.",
      en: "Enter the contour: roles, ownership boundaries, status channels to leadership and customer.",
    },
  },
  {
    n: "02",
    title: { ru: "Аудит за год", en: "Year audit" },
    text: {
      ru: "Снимок прошлого периода: план/факт, завершение стадий, загрузка, соблюдение регламентов, хвост задач.",
      en: "Snapshot of the prior period: plan/fact, stage completion, load, process adherence, task tail.",
    },
  },
  {
    n: "03",
    title: { ru: "База", en: "Baseline" },
    text: {
      ru: "Фиксируем базовую линию и обязательные артефакты. Без этого целевые уровни и метрики не опираются на факты.",
      en: "Lock the baseline and mandatory artifacts. Without this, targets and metrics have no factual footing.",
    },
  },
  {
    n: "04",
    title: {
      ru: "Целевые уровни",
      en: "Target levels",
    },
    text: {
      ru: "Согласуем ориентиры по срокам, удовлетворённости, план/факту, хвосту, техническому долгу и перерасходу.",
      en: "Agree targets for schedule, satisfaction, plan/fact, tail, technical debt and overspend.",
    },
  },
  {
    n: "05",
    title: {
      ru: "Точечные изменения",
      en: "Targeted changes",
    },
    text: {
      ru: "Меры по узким местам с проверкой эффекта на следующей базовой линии — не кампания «всё сразу».",
      en: "Measures on bottlenecks, checked against the next baseline — not a change-everything campaign.",
    },
  },
] as const;

const perimeter = [
  {
    ru: "Согласованный контур: портфель или группа проектов с понятными границами ответственности",
    en: "Agreed contour: a portfolio or project group with clear ownership boundaries",
  },
  {
    ru: "Горизонт работы от полугода — чтобы базовая линия, ритм и эффект успели проявиться",
    en: "Engagement horizon from six months — so baseline, cadence and effect can show",
  },
  {
    ru: "Право фиксировать регламенты и обязательные артефакты в согласованном контуре",
    en: "Mandate to set rules and mandatory artifacts inside the agreed contour",
  },
  {
    ru: "Прямой канал статуса к заказчику и руководству — без ручной сборки разрозненных таблиц",
    en: "Direct status channel to customer and leadership — without stitching ad-hoc spreadsheets",
  },
] as const;

export function ProjectOfficePage() {
  const { t, lang } = useI18n();

  return (
    <div className="project-office-theme min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet mx-auto max-w-[1100px] px-4 pb-16 pt-[max(4.5rem,6.5vh)] sm:px-6 md:px-8">
          <Link href="/#about" className="po-back">
            ← {lang === "ru" ? "К портфолио" : "Back to portfolio"}
          </Link>

          {/* 1. Hero — one composition */}
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
                <div key={m.id} className="po-kpi__item" role="listitem">
                  <div className="po-kpi__value">{m.value}</div>
                  <div className="po-kpi__label">{t(m.label)}</div>
                  <div className="po-kpi__note">{t(m.note)}</div>
                </div>
              ))}
            </div>
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

            <ol className="po-layers">
              {layers.map((layer, i) => (
                <li key={layer.n} className="po-layer">
                  <div className="po-layer__rail" aria-hidden>
                    <span className="po-layer__dot">{layer.n}</span>
                    {i < layers.length - 1 ? (
                      <span className="po-layer__line" />
                    ) : null}
                  </div>
                  <div className="po-layer__body">
                    <h3 className="po-layer__title">{t(layer.title)}</h3>
                    <p className="po-layer__text">{t(layer.text)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeUp>

          {/* 4. Launch route */}
          <FadeUp className="po-block" delay={0.08}>
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
              {pathSteps.map((step, i) => (
                <li key={step.n} className="po-path__step">
                  <div className="po-path__n">{step.n}</div>
                  <h3 className="po-path__title">{t(step.title)}</h3>
                  <p className="po-path__text">{t(step.text)}</p>
                  {i < pathSteps.length - 1 ? (
                    <span className="po-path__arrow" aria-hidden>
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </FadeUp>

          {/* 5. Perimeter */}
          <FadeUp className="po-block" delay={0.1}>
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
              </div>
            </div>

            <ul className="po-scope">
              {perimeter.map((item) => (
                <li key={item.ru} className="po-scope__item">
                  {t(item)}
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
