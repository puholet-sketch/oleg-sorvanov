export type LangText = { ru: string; en: string };

export type MetricPage = {
  id: string;
  value: string;
  label: LangText;
  note: LangText;
  hover: LangText;
  why: LangText;
  how: LangText[];
  before: LangText[];
};

export const metricPages: MetricPage[] = [
  {
    id: "schedule",
    value: "−15%",
    label: { ru: "сроки", en: "schedule" },
    note: {
      ru: "сжатие после выравнивания контура",
      en: "compression after contour alignment",
    },
    hover: {
      ru: "Фиксированный ритм релизов, шлюз требований до кода и загрузка на Timeline — срок сжимается, потому что очередь видна заранее.",
      en: "A fixed release rhythm, a requirements gate before code, and load on the Timeline — the date compresses because the queue is visible early.",
    },
    why: {
      ru: "Срок расползается, когда объём входа размыт, а загрузка собирается вручную. Ориентир −15% ставится после базовой линии: это сжатие календарного контура, а не обещание прошлого результата.",
      en: "Dates slip when the intake is fuzzy and load is collected by hand. The −15% target is set after a baseline: it is compression of the calendar contour, not a claim about the past.",
    },
    how: [
      {
        ru: "Релизный ритм фиксируется заранее, например два раза в месяц, вместе с правилами релиза и HotFix.",
        en: "The release rhythm is fixed in advance, for example twice a month, together with release and hotfix rules.",
      },
      {
        ru: "В разработку задача проходит только через шлюз бизнес-требований: шаблон, валидация, статус «принято».",
        en: "Work enters development only through the requirements gate: a template, a validation, a status of accepted.",
      },
      {
        ru: "Загрузка читается с Jira Timeline и бордов Delivery control и Release cycle. Полоска на человеке появляется только при оценке и датах.",
        en: "Load is read from the Jira Timeline and the Delivery control and Release cycle boards. A bar on a person appears only when the estimate and dates exist.",
      },
    ],
    before: [
      {
        ru: "Есть контур портфеля и канал статуса, иначе ритм релизов не к кому привязать.",
        en: "There is a portfolio contour and a status channel, otherwise the release rhythm has no owner.",
      },
      {
        ru: "На задачах заполнены оценка, даты и исполнитель — без этого Timeline пустой.",
        en: "Tasks carry an estimate, dates and an owner — without that the Timeline stays empty.",
      },
    ],
  },
  {
    id: "satisfaction",
    value: "+20%",
    label: { ru: "удовлетворённость заказчика", en: "customer satisfaction" },
    note: {
      ru: "при регулярной обратной связи",
      en: "with a regular feedback loop",
    },
    hover: {
      ru: "Статус собирается из Jira, инциденты видны в одном контуре, заказчик видит программу улучшений, а не пятничные слайды.",
      en: "Status is assembled from Jira, incidents sit in one contour, and the customer sees an improvement program rather than Friday slides.",
    },
    why: {
      ru: "Удовлетворённость падает, когда картину статуса заказчик собирает сам из переписки. Ориентир +20% держится на регулярной обратной связи: один язык статуса и видимый цикл улучшений.",
      en: "Satisfaction drops when the customer has to assemble the status from correspondence. The +20% target rests on a regular feedback loop: one status language and a visible improvement cycle.",
    },
    how: [
      {
        ru: "Еженедельный отчёт собирается из Jira по кнопке. Часы аналитиков уходят в смысл, а не в сборку слайдов.",
        en: "The weekly report is pulled from Jira. Analyst hours go into meaning, not into assembling slides.",
      },
      {
        ru: "Сбои, инциденты и статус по договору сопровождения живут в одном контуре, без отдельной ручной сводки.",
        en: "Failures, incidents and the support-contract status live in one contour, without a separate manual digest.",
      },
      {
        ru: "Заказчику показывают измеряемый ход по качеству, релизам и экономике проекта — программу улучшений, а не обещание «разберёмся».",
        en: "The customer is shown measurable movement on quality, releases and project economics — an improvement program, not a promise to look into it.",
      },
    ],
    before: [
      {
        ru: "Нижние слои уже дают факты: оценки, даты, стадии. Иначе отчёт снова рисуется руками.",
        en: "The lower layers already produce facts: estimates, dates, stages. Otherwise the report is drawn by hand again.",
      },
      {
        ru: "Есть прямой канал к заказчику и руководству.",
        en: "There is a direct channel to the customer and to leadership.",
      },
    ],
  },
  {
    id: "plan-fact",
    value: "−30%",
    label: { ru: "расхождение план/факт", en: "plan/fact drift" },
    note: { ru: "по проектам и командам", en: "across projects and teams" },
    hover: {
      ru: "Подзадачи не длиннее 24 часов, оценка в типе «Планирование», запрет списания в «План = 0», разбор по человеку и задаче.",
      en: "Subtasks no longer than 24 hours, an estimate on a Planning item, no time logged against Plan = 0, review by person and task.",
    },
    why: {
      ru: "Расхождение копится там, где задача крупнее 20–24 часов, план нулевой, а отклонение смотрят «по команде в среднем». Ориентир −30% — следствие видимого отклонения, а не более жёсткого отчёта.",
      en: "Drift accumulates where a task is larger than 20–24 hours, the plan is zero, and the gap is read as a team average. The −30% target follows from a visible gap, not from a harsher report.",
    },
    how: [
      {
        ru: "Подзадачи аналитика, разработки и теста дробятся на части не длиннее 24 часов. Крупная карточка прячет перерасход до конца.",
        en: "Analyst, development and test subtasks are split into pieces no longer than 24 hours. A large card hides overrun until the end.",
      },
      {
        ru: "Первичная оценка живёт в подзадаче «Планирование»: 4, 12 или 20 часов; дефект с прода — 16 часов как норма входа, не как обещание срока починки.",
        en: "The first estimate lives on a Planning subtask: 4, 12 or 20 hours; a production defect starts at 16 hours as an intake norm, not as a promise of the fix duration.",
      },
      {
        ru: "В задачу без оценки списывать нельзя. Отклонение смотрят по человеку, периоду и ключу задачи, встречу проводят только выше порога.",
        en: "Time cannot be logged on a task with no estimate. The gap is read by person, period and issue key; a meeting happens only above the threshold.",
      },
    ],
    before: [
      {
        ru: "Story разложена на BA / DEV / QA, сопровождение анализа отделено от первичной оценки.",
        en: "The story is split into BA / DEV / QA, and analysis support is separate from the first estimate.",
      },
      {
        ru: "Фильтр Jira уже собирает «факт больше плана» и «план = 0 при факте больше нуля».",
        en: "A Jira filter already collects “actual above plan” and “plan = 0 with actual above zero”.",
      },
    ],
  },
  {
    id: "tail-cost",
    value: "−20%",
    label: { ru: "хвост затрат", en: "backlog-tail cost" },
    note: {
      ru: "закрытие и передача устаревших задач",
      en: "close or hand off stale tasks",
    },
    hover: {
      ru: "Хвост — это зависшие задачи, которые продолжают стоить. Их закрывают или передают, а не держат в статусе «в работе».",
      en: "The tail is stuck work that still costs money. It is closed or handed off, not kept in progress.",
    },
    why: {
      ru: "Хвост затрат — устаревшие и зависшие задачи, которые продолжают занимать людей и портфель. Ориентир −20% достигается ревизией, а не новой доской: задачу закрывают или передают.",
      en: "Tail cost is stale and stuck work that still occupies people and the portfolio. The −20% target comes from a review, not from a new board: the task is closed or handed off.",
    },
    how: [
      {
        ru: "На базовой линии считают размер хвоста: сколько задач зависло и сколько часов в них ещё списывается.",
        en: "The baseline counts the tail: how many tasks are stuck and how many hours are still logged on them.",
      },
      {
        ru: "Каждую такую задачу либо закрывают, либо передают в живой контур с владельцем и сроком.",
        en: "Each such task is either closed or moved into a live contour with an owner and a date.",
      },
      {
        ru: "Повтор хвоста виден на борде People: входящий поток против незакрытого остатка.",
        en: "A returning tail shows up on the People board: inflow against the unfinished remainder.",
      },
    ],
    before: [
      {
        ru: "Стадии учёта уже отличают живую работу от архива.",
        en: "Stage tracking already separates live work from the archive.",
      },
      {
        ru: "У задачи есть владелец. Без владельца передавать некому.",
        en: "The task has an owner. Without an owner there is nobody to hand it to.",
      },
    ],
  },
  {
    id: "tech-debt",
    value: "−15%",
    label: { ru: "технический долг", en: "technical debt" },
    note: { ru: "объём относительно базовой линии", en: "volume vs baseline" },
    hover: {
      ru: "Ретро заканчивается задачей с исполнителем и сроком, тесты входят в релизный цикл, долг меряют от базовой линии.",
      en: "A retro ends as a task with an owner and a date, tests sit inside the release cycle, and debt is measured from the baseline.",
    },
    why: {
      ru: "Технический долг не сокращается протоколом ретроспективы. Ориентир −15% считается от базовой линии: доля часов на сбои и дефекты с прода должна уменьшиться, потому что действия стали задачами, а вход в релиз стал чище.",
      en: "Technical debt does not shrink because a retro produced minutes. The −15% target is measured from the baseline: the share of hours spent on failures and production defects should fall because actions became tasks and the release intake got cleaner.",
    },
    how: [
      {
        ru: "Ретроспектива и разбор инцидента заканчиваются задачей в Jira: исполнитель, срок, критерий готовности.",
        en: "A retrospective and an incident review end as a Jira task: owner, date, done criterion.",
      },
      {
        ru: "Нагрузочные и автотесты стоят внутри релизного цикла, а не отдельной кампанией «когда будет время».",
        en: "Load tests and automated tests sit inside the release cycle, not in a campaign for when there is time.",
      },
      {
        ru: "Дефект с прода входит с нормативной оценкой и, если это уже переработка, превращается в Story с дроблением до 24 часов.",
        en: "A production defect enters with a standard estimate and, if it is already a redesign, becomes a story split down to 24 hours.",
      },
    ],
    before: [
      {
        ru: "Базовая линия уже посчитала объём часов на дефекты и сбои.",
        en: "The baseline has already counted hours spent on defects and failures.",
      },
      {
        ru: "Есть ритм релизов, куда эти действия можно поставить.",
        en: "There is a release rhythm where those actions can be placed.",
      },
    ],
  },
  {
    id: "overspend",
    value: "−20%",
    label: { ru: "перерасход", en: "overspend" },
    note: { ru: "факт против оценки", en: "actual vs estimate" },
    hover: {
      ru: "Новый объём без Change Request не делается. Доля часов руководителя 10–15% от разработки. Мелкие задачи не тащат отдельного руководителя.",
      en: "New scope without a change request is not done. The lead’s hours stay at 10–15% of development. Small tasks do not carry a separate lead.",
    },
    why: {
      ru: "Перерасход — это факт против оценки и против нормы часов контракта. Он растёт, когда объём расширяют без оплаты и когда управленческие часы съедают разработку. Ориентир −20% держится на заморозке такого объёма и на норме оверхеда.",
      en: "Overspend is actual versus estimate and versus the contract hour norm. It grows when scope expands without payment and when management hours consume development. The −20% target rests on freezing that scope and on an overhead norm.",
    },
    how: [
      {
        ru: "Расширение объёма без оформленного Change Request и согласованной доплаты не берётся в работу.",
        en: "A scope increase without a formal change request and an agreed extra payment is not taken into work.",
      },
      {
        ru: "Если заказчик не платит за изменение, разговор идёт в двух сценариях: пересмотр цены или модель T&M с лимитом часов, либо сокращение объёма под текущий бюджет.",
        en: "If the customer will not pay for the change, the conversation has two scenarios: a new price or time-and-materials with an hour cap, or a smaller scope inside the current budget.",
      },
      {
        ru: "Доля часов руководителя проекта держится в районе 10–15% от часов разработки, доля аккаунта — до 10%. Задачи короче 40 часов разработки не несут отдельного руководителя: их ведёт аккаунт или пакет сопровождения.",
        en: "The project lead’s hours stay around 10–15% of development hours, the account share stays up to 10%. Tasks under 40 development hours do not carry a separate lead: an account or a support package runs them.",
      },
    ],
    before: [
      {
        ru: "Посчитана норма часов от выручки и целевой ставки, иначе перерасход не от чего отличать.",
        en: "The hour norm is calculated from revenue and the target rate, otherwise there is nothing to call overspend.",
      },
      {
        ru: "План/факт уже персональный: видно, какая задача и какой человек дают отклонение.",
        en: "Plan versus actual is already personal: it is clear which task and which person produce the gap.",
      },
    ],
  },
];

export function metricById(id: string) {
  return metricPages.find((item) => item.id === id);
}
