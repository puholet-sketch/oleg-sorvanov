"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";

const layers = [
  {
    n: "01",
    title: { ru: "Регламенты", en: "Rules of the game" },
    text: {
      ru: "База контура — согласованные правила, которые обязательно соблюдаются. Без них статусы и метрики остаются мнением, а не управлением.",
      en: "The foundation is agreed rules that must be followed. Without them, status and metrics stay opinions, not management.",
    },
  },
  {
    n: "02",
    title: {
      ru: "Порядок ведения и учёта",
      en: "Project and task hygiene",
    },
    text: {
      ru: "Единый порядок ведения и учёта проектов и задач на разных стадиях: что входит в портфель, как фиксируется старт/финиш, как закрывается этап.",
      en: "One way to run and track projects and tasks across stages: what enters the portfolio, how start/finish is recorded, how a stage is closed.",
    },
  },
  {
    n: "03",
    title: {
      ru: "Обязательные артефакты",
      en: "Mandatory artifacts",
    },
    text: {
      ru: "Оценка, даты, ответственность, критерии готовности — поля и документы, без которых задача не считается управляемой. Сначала дисциплина полей, потом отчёты.",
      en: "Estimate, dates, ownership, done criteria — fields and documents without which work is not manageable. Field discipline first, reports second.",
    },
  },
  {
    n: "04",
    title: {
      ru: "Ритм мероприятий",
      en: "Cadence of rituals",
    },
    text: {
      ru: "Регулярные оценки, планирование, статусы и ретро с измеримыми действиями — не «встречи ради встреч», а цикл, который держит прогноз.",
      en: "Regular estimates, planning, status and retros with measurable actions — not meetings for meetings’ sake, but a cycle that holds the forecast.",
    },
  },
  {
    n: "05",
    title: {
      ru: "Загрузка команд",
      en: "Team load forecast",
    },
    text: {
      ru: "Прогноз загрузки на горизонт от месяца: достаточность ресурса против избытка, перебалансировка до срыва сроков, а не после.",
      en: "Load forecast from a one-month horizon: resource sufficiency vs excess, rebalancing before deadlines slip — not after.",
    },
  },
  {
    n: "06",
    title: {
      ru: "Заказчик и удовлетворённость",
      en: "Customer and satisfaction",
    },
    text: {
      ru: "Унифицированный контур работы с заказчиком, показатели удовлетворённости и цикл улучшений — один язык статуса для бизнеса и команд.",
      en: "A unified customer working model, satisfaction measures and an improvement loop — one status language for business and teams.",
    },
  },
] as const;

const pathSteps = [
  {
    n: "01",
    title: {
      ru: "Базовая линия и аудит",
      en: "Baseline and audit",
    },
    text: {
      ru: "Снимок прошлого периода: гигиена план/факт, предсказуемость завершения стадий, достаточность ресурса, соблюдение регламентов. С эскалаций без учёта не начинаем.",
      en: "A snapshot of the prior period: plan/fact hygiene, stage-completion predictability, resource sufficiency, process adherence. We do not lead with untracked escalations.",
    },
  },
  {
    n: "02",
    title: {
      ru: "Контур правил и артефактов",
      en: "Rules and artifacts contour",
    },
    text: {
      ru: "Фиксируем регламенты, обязательные атрибуты задач и проектов, шаблоны входа и критерии «готово». Без этого следующий слой метрик врёт.",
      en: "Lock rules, mandatory task/project attributes, intake templates and done criteria. Without this, the next metrics layer lies.",
    },
  },
  {
    n: "03",
    title: {
      ru: "Ритм управления",
      en: "Management cadence",
    },
    text: {
      ru: "Оценки → планирование → статусы → ретро. Каждое мероприятие оставляет след в системе: решение, ответственный, срок.",
      en: "Estimates → planning → status → retro. Every ritual leaves a trail in the system: decision, owner, due date.",
    },
  },
  {
    n: "04",
    title: {
      ru: "Прогноз и утилизация",
      en: "Forecast and utilization",
    },
    text: {
      ru: "Горизонт загрузки от месяца: где узкое место, где простой, как перераспределить людей между проектами без ручного штурма в чате.",
      en: "Load horizon from a month: where the bottleneck is, where idle capacity sits, how to move people across projects without a chat fire drill.",
    },
  },
  {
    n: "05",
    title: {
      ru: "Прозрачность для руководства и заказчика",
      en: "Visibility for leadership and customer",
    },
    text: {
      ru: "Статус портфеля и удовлетворённость собираются из учёта, а не из пятничного Excel. Один контур — меньше сюрпризов на демо и в отчётах.",
      en: "Portfolio status and satisfaction come from the tracker, not Friday Excel. One contour — fewer surprises in demos and reports.",
    },
  },
  {
    n: "06",
    title: {
      ru: "Цикл улучшений",
      en: "Improvement loop",
    },
    text: {
      ru: "Отклонения план/факт и сигналы заказчика превращаются в точечные меры с проверкой эффекта на следующей базовой линии.",
      en: "Plan/fact gaps and customer signals become targeted measures, checked against the next baseline.",
    },
  },
] as const;

const metrics = [
  {
    id: "schedule",
    value: "~15%",
    label: {
      ru: "сжатие сроков",
      en: "schedule compression",
    },
    note: {
      ru: "после выравнивания контура",
      en: "after contour alignment",
    },
  },
  {
    id: "satisfaction",
    value: "+~20%",
    label: {
      ru: "удовлетворённость заказчика",
      en: "customer satisfaction",
    },
    note: {
      ru: "при регулярном контуре обратной связи",
      en: "with a regular feedback loop",
    },
  },
  {
    id: "plan-fact",
    value: "~30%",
    label: {
      ru: "меньше расхождения план/факт",
      en: "less plan/fact drift",
    },
    note: {
      ru: "по проектам и командам",
      en: "across projects and teams",
    },
  },
  {
    id: "tail-cost",
    value: "~20%",
    label: {
      ru: "оптимизация затрат на исторический хвост",
      en: "historical backlog-tail cost optimization",
    },
    note: {
      ru: "закрытие / передача устаревших задач после аудита",
      en: "close or hand off stale tasks after audit",
    },
  },
  {
    id: "tech-debt",
    value: "~15%",
    label: {
      ru: "снижение техдолга",
      en: "tech debt reduction",
    },
    note: {
      ru: "управляемый объём относительно базовой линии",
      en: "managed volume vs baseline",
    },
  },
  {
    id: "overspend",
    value: "~20%",
    label: {
      ru: "меньше перерасхода по задачам",
      en: "less task overspend",
    },
    note: {
      ru: "факт против оценки, точечный разбор причин",
      en: "actual vs estimate, targeted root-cause reviews",
    },
  },
] as const;

const measureItems = [
  {
    ru: "Гигиена план/факт по проектам и людям — не «средняя температура» по команде",
    en: "Plan/fact hygiene by project and person — not team averages",
  },
  {
    ru: "Предсказуемость завершения стадий на согласованном горизонте",
    en: "Predictability of stage completion on an agreed horizon",
  },
  {
    ru: "Достаточность ресурса против избытка: загрузка на месяц+",
    en: "Resource sufficiency vs excess: load on a month+ horizon",
  },
  {
    ru: "Соблюдение регламентов и заполненность обязательных артефактов",
    en: "Process adherence and completeness of mandatory artifacts",
  },
  {
    ru: "Объём и возраст «хвоста»: открытые задачи старше согласованного порога",
    en: "Tail volume and age: open tasks past an agreed age threshold",
  },
  {
    ru: "Перерасход: задачи, где факт труда выше оценки, с разбором по людям и причинам",
    en: "Overspend: tasks where actual effort exceeds estimate, reviewed by person and cause",
  },
] as const;

export function ProjectOfficePage() {
  const { t, lang } = useI18n();

  return (
    <div className="project-office-theme min-h-screen">
      <SiteHeader />
      <main>
        <div className="mx-auto max-w-[1080px] px-4 pb-14 pt-[max(4.75rem,7vh)] sm:px-6 md:px-8">
          <Link
            href="/#about"
            className="text-sm text-muted transition hover:text-voltage"
          >
            ← {lang === "ru" ? "К портфолио" : "Back to portfolio"}
          </Link>

          {/* Hero — one composition */}
          <FadeUp className="po-hero mt-5">
            <p className="card-label">
              {lang === "ru"
                ? "Delivery · проектный офис"
                : "Delivery · project office"}
            </p>
            <h1 className="mt-2 max-w-3xl font-display text-2xl font-semibold tracking-tight text-mist sm:text-3xl md:text-4xl">
              {lang === "ru"
                ? "Руководитель проектного офиса"
                : "Head of Project Office"}
            </h1>
            <p className="body-copy mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {lang === "ru"
                ? "Строю прогнозируемое управление поставкой и портфелем: регламенты, учёт, ритм мероприятий и прозрачность для заказчика — с измеримым эффектом после базовой линии."
                : "I build predictable delivery and portfolio management: rules, tracking, management cadence and customer visibility — with measurable effect after a baseline."}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-[#7d838a]">
              {lang === "ru"
                ? "Альтернатива по периметру: старший руководитель проектов с группой РП и набором проектов."
                : "Alternative scope: senior project lead with a group of PMs and a set of projects."}
            </p>
          </FadeUp>

          <div className="po-divider" aria-hidden />

          {/* Result + how we measure */}
          <FadeUp className="mt-8" delay={0.04}>
            <h2 className="section-heading">
              {lang === "ru"
                ? "За какой результат отвечаю"
                : "The result I own"}
            </h2>
            <p className="body-copy mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {lang === "ru"
                ? "Готовность взять контур, где сроки, загрузка, затраты и удовлетворённость заказчика становятся предсказуемыми — не за счёт героизма, а за счёт правил и учёта."
                : "Ready to own a contour where schedule, load, cost and customer satisfaction become predictable — through rules and hygiene, not heroics."}
            </p>

            <p className="card-label mt-6">
              {lang === "ru"
                ? "Ориентиры после базовой линии"
                : "Illustrative targets after baseline"}
            </p>
            <p className="mt-1 max-w-2xl text-xs leading-relaxed text-[#7d838a]">
              {lang === "ru"
                ? "Числа — пример целевых ориентиров после аудита прошлого периода, а не заявленные прошлые результаты. Сначала базовая линия, потом цели."
                : "Figures are example targets after an audit of the prior period — not claimed past results. Baseline first, then goals."}
            </p>

            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.id} className="stat-cube text-center sm:text-left">
                  <div className="font-display text-2xl font-semibold text-voltage">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-wide text-mist">
                    {t(m.label)}
                  </div>
                  <div className="mt-0.5 text-[0.65rem] text-[#7d838a]">
                    {t(m.note)}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card mt-4 p-4 sm:p-5">
              <h3 className="card-label">
                {lang === "ru" ? "Как измеряем" : "How we measure"}
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {measureItems.map((item) => (
                  <li
                    key={item.ru}
                    className="border-l-2 border-voltage/40 pl-3 text-sm leading-relaxed text-mist"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <div className="po-divider" aria-hidden />

          {/* Framework layers */}
          <FadeUp className="mt-8" delay={0.06}>
            <h2 className="section-heading">
              {lang === "ru"
                ? "Как устроено прогнозируемое управление"
                : "How predictable management is built"}
            </h2>
            <p className="body-copy mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {lang === "ru"
                ? "Шесть слоёв. Каждый опирается на предыдущий: без регламентов и артефактов ритм и метрики не держат прогноз."
                : "Six layers. Each rests on the previous: without rules and artifacts, cadence and metrics cannot hold a forecast."}
            </p>

            <div className="mt-5 grid gap-2">
              {layers.map((layer, i) => (
                <FadeUp
                  key={layer.n}
                  delay={i * 0.02}
                  className="glass-card grid gap-2 p-4 sm:grid-cols-[3.5rem_1fr] sm:gap-4 sm:p-5"
                >
                  <p className="font-display text-sm font-semibold tracking-wide text-voltage">
                    {layer.n}
                  </p>
                  <div>
                    <h3 className="card-heading text-mist">{t(layer.title)}</h3>
                    <p className="body-copy mt-1.5 text-sm leading-relaxed text-muted">
                      {t(layer.text)}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </FadeUp>

          <div className="po-divider" aria-hidden />

          {/* Path / activities — stabilization-path spirit */}
          <FadeUp className="mt-8" delay={0.08}>
            <h2 className="section-heading">
              {lang === "ru"
                ? "Маршрут запуска контура"
                : "Contour launch path"}
            </h2>
            <p className="body-copy mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {lang === "ru"
                ? "Рабочий маршрут, а не набор слайдов. Можно идти последовательно или усиливать узкие места — но без базовой линии и артефактов метрики не заработают."
                : "A working route, not a slide deck. Go in sequence or reinforce weak spots — but without baseline and artifacts, metrics will not work."}
            </p>

            <ol className="mt-5 grid gap-2">
              {pathSteps.map((step, i) => (
                <FadeUp
                  key={step.n}
                  delay={i * 0.02}
                  className="glass-card relative overflow-hidden p-4 sm:p-5"
                >
                  <div className="flex gap-3 sm:gap-4">
                    <span
                      className="font-display text-sm font-semibold text-voltage"
                      aria-hidden
                    >
                      {step.n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="card-heading text-mist">{t(step.title)}</h3>
                      <p className="body-copy mt-1.5 text-sm leading-relaxed text-muted">
                        {t(step.text)}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </ol>

            <p className="mt-4 text-sm text-muted">
              {lang === "ru" ? (
                <>
                  Близкий по духу пример программы стабилизации:{" "}
                  <a
                    href="https://puholet-sketch.github.io/stabilization-path/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-voltage hover:underline"
                  >
                    PATH · стабилизация
                  </a>
                  .
                </>
              ) : (
                <>
                  Related in spirit — a stabilization program example:{" "}
                  <a
                    href="https://puholet-sketch.github.io/stabilization-path/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-voltage hover:underline"
                  >
                    PATH · stabilization
                  </a>
                  .
                </>
              )}
            </p>
          </FadeUp>

          <div className="po-divider" aria-hidden />

          {/* Perimeter */}
          <FadeUp className="mt-8" delay={0.1}>
            <h2 className="section-heading">
              {lang === "ru" ? "Полномочия и периметр" : "Authority and scope"}
            </h2>
            <div className="glass-card mt-4 p-4 sm:p-5">
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
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
                ].map((item) => (
                  <li
                    key={item.ru}
                    className="border-l-2 border-voltage/40 pl-3 text-sm leading-relaxed text-mist"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp className="mt-10 flex flex-wrap gap-3" delay={0.12}>
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
