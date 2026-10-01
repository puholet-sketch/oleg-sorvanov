export type LangText = { ru: string; en: string };

export type Resource = { label: LangText; href: string };

export type MetricPage = {
  id: string;
  value: string;
  label: LangText;
  note: LangText;
  meaning: LangText;
  measure: LangText[];
  baseline: LangText[];
  steps: LangText[];
  artifacts: LangText[];
  cadence: LangText[];
  errors: LangText[];
  result: LangText;
  relatedLayers: string[];
  resources?: Resource[];
};

export type LayerPage = {
  id: string;
  n: string;
  title: LangText;
  summary: LangText;
  purpose: LangText;
  inputs: LangText[];
  actions: LangText[];
  outputs: LangText[];
  roles: LangText[];
  cadence: LangText[];
  relatedMetrics: string[];
};

export type LaunchStepPage = {
  id: string;
  n: string;
  title: LangText;
  summary: LangText;
  purpose: LangText;
  inputs: LangText[];
  steps: LangText[];
  outputs: LangText[];
  roles: LangText[];
  cadence: LangText[];
  errors: LangText[];
  result: LangText;
  nextStep?: string;
  relatedMetrics: string[];
  relatedLayers: string[];
};

export type AuthorityPage = {
  id: string;
  n: string;
  title: LangText;
  summary: LangText;
  purpose: LangText;
  scope: LangText[];
  howFixed: LangText[];
  withoutIt: LangText[];
  signsYes: LangText[];
  signsNo: LangText[];
  relatedLaunch: string[];
};

const tx = (ru: string, en: string): LangText => ({ ru, en });

export const metricPages: MetricPage[] = [
  {
    id: "schedule",
    value: "−15%",
    label: tx("сроки", "schedule"),
    note: tx("целевой ориентир после исходной линии", "target after the baseline"),
    meaning: tx(
      "Сократить календарный цикл без скрытого урезания качества или объёма работ. Процент — пример цели, которую подтверждают после аудита.",
      "Shorten the calendar cycle without silently cutting quality or work volume. The percentage is a target example confirmed after an audit.",
    ),
    measure: [
      tx("Время от принятия задачи до поставки и долю просроченных этапов.", "Lead time from acceptance to delivery and the share of overdue stages."),
      tx("Возраст очереди, время ожидания согласований и стабильность релизного ритма.", "Queue age, approval waiting time, and release cadence stability."),
    ],
    baseline: [
      tx("Зафиксировать одинаковые точки начала и окончания для сопоставимых задач.", "Fix consistent start and finish points for comparable work."),
      tx("Отделить активную работу от ожидания, блокировок и изменения объёма.", "Separate active work from waiting, blockers, and work-volume changes."),
    ],
    steps: [
      tx("Определить путь задачи от входа до приёмки и владельца каждого перехода.", "Define the path from intake to acceptance and an owner for every transition."),
      tx("Ввести критерии готовности DoR/DoD и контроль качества требований до разработки.", "Introduce DoR/DoD and requirements quality control before development."),
      tx("Установить устойчивый релизный ритм и правила срочных исправлений.", "Set a sustainable release cadence and emergency-fix rules."),
      tx("Заполнить оценки, даты и исполнителей, чтобы Timeline показывал реальную очередь.", "Populate estimates, dates, and owners so Timeline shows the real queue."),
      tx("Устранять главную причину ожидания и повторять замер на сопоставимом периоде.", "Remove the main waiting cause and repeat the measurement over a comparable period."),
    ],
    artifacts: [
      tx("Карта потока, календарь релизов, реестр блокировок; владелец — руководитель поставки.", "Flow map, release calendar, blocker log; owner: delivery lead."),
      tx("Шаблон требований и критерии готовности; владельцы — аналитик и технический лидер.", "Requirements template and readiness criteria; owners: analyst and technical lead."),
    ],
    cadence: [
      tx("Очередь и блокировки — еженедельно; релизный прогноз — на каждом планировании.", "Queue and blockers weekly; release forecast at every planning session."),
    ],
    errors: [
      tx("Считать срок без времени ожидания или сравнивать задачи разного типа.", "Ignoring waiting time or comparing unlike work."),
      tx("Ускорять поставку отменой тестов и проверки требований.", "Speeding delivery by skipping tests or requirements review."),
    ],
    result: tx(
      "Медианный цикл устойчиво сокращается относительно исходной линии, а качество и согласованный объём не ухудшаются.",
      "Median cycle time falls sustainably against the baseline while quality and agreed work volume do not deteriorate.",
    ),
    relatedLayers: ["rules", "stages", "artifacts", "cadence", "capacity"],
  },
  {
    id: "satisfaction",
    value: "+20%",
    label: tx("удовлетворённость заказчика", "customer satisfaction"),
    note: tx("целевой ориентир после исходной линии", "target after the baseline"),
    meaning: tx(
      "Повысить предсказуемость взаимодействия: заказчик видит статус, риски и решения, а обратная связь превращается в проверяемые действия.",
      "Make collaboration predictable: the customer sees status, risks, and decisions, while feedback becomes verifiable action.",
    ),
    measure: [
      tx("CSAT — долю оценок 4–5 в коротком опросе; показатель объясняет удовлетворённость за период.", "CSAT: the share of ratings 4–5 in a short survey, measuring period satisfaction."),
      tx("Причины низких оценок, скорость ответа и выполнение согласованных улучшений.", "Reasons for low scores, response time, and completion of agreed improvements."),
    ],
    baseline: [
      tx("Провести одинаковый опрос для согласованной группы респондентов.", "Run the same survey for an agreed respondent group."),
      tx("Зафиксировать частоту статуса, каналы эскалации и текущие темы недовольства.", "Record status frequency, escalation channels, and current dissatisfaction themes."),
    ],
    steps: [
      tx("Согласовать один источник статуса и понятный формат еженедельного отчёта.", "Agree one status source and a clear weekly report format."),
      tx("Показывать сделанное, даты, отклонения, риски и решения, ожидаемые от заказчика.", "Show completed work, dates, deviations, risks, and customer decisions needed."),
      tx("Вести инциденты и обязательства по сопровождению в общем контуре Jira.", "Track incidents and support commitments in one Jira contour."),
      tx("После опроса выбирать ограниченное число улучшений с владельцем и сроком.", "After each survey, select a limited set of improvements with owners and dates."),
      tx("Закрывать цикл обратной связи: сообщать, что изменилось и какой эффект получен.", "Close the feedback loop by reporting what changed and its effect."),
    ],
    artifacts: [
      tx("Еженедельный отчёт, журнал решений, доска инцидентов; владелец — руководитель проекта.", "Weekly report, decision log, incident board; owner: project lead."),
      tx("Опрос CSAT и реестр улучшений; владелец — ответственный за заказчика.", "CSAT survey and improvement log; owner: customer lead."),
    ],
    cadence: [
      tx("Статус — еженедельно; CSAT — после значимого этапа или по согласованному циклу.", "Status weekly; CSAT after a meaningful stage or on an agreed cycle."),
    ],
    errors: [
      tx("Собирать только итоговую оценку без причины и без ответа заказчику.", "Collecting a score without reasons or a response to the customer."),
      tx("Подменять фактический статус вручную подготовленной презентацией.", "Replacing factual status with a manually curated presentation."),
    ],
    result: tx(
      "CSAT растёт относительно исходной линии, а повторяющиеся причины недовольства уменьшаются и подтверждены закрытыми действиями.",
      "CSAT improves against the baseline, while recurring dissatisfaction causes decline and are backed by completed actions.",
    ),
    relatedLayers: ["stages", "artifacts", "cadence", "customer"],
    resources: [{ label: tx("Опросник CSAT", "CSAT questionnaire"), href: "/project-office/csat-zakazchik.html" }],
  },
  {
    id: "plan-fact",
    value: "−30%",
    label: tx("расхождение план/факт", "plan-versus-actual variance"),
    note: tx("целевой ориентир после исходной линии", "target after the baseline"),
    meaning: tx(
      "Сделать отклонение видимым достаточно рано, чтобы переоценить работу или изменить решение до исчерпания бюджета.",
      "Expose variance early enough to re-estimate work or change a decision before the budget is exhausted.",
    ),
    measure: [
      tx("Отклонение Δ = Факт − План и коэффициент Факт / План по сопоставимым задачам.", "Variance Δ = Actual − Plan and Actual / Plan for comparable work."),
      tx("Долю списаний без оценки и долю подзадач крупнее 24 часов.", "Share of time logged without an estimate and subtasks larger than 24 hours."),
    ],
    baseline: [
      tx("Зафиксировать период, набор типов работ и правила учёта времени.", "Fix the period, work types, and time-accounting rules."),
      tx("Отделить первичную оценку от аналитического сопровождения и изменения объёма.", "Separate initial estimation from analysis support and work-volume changes."),
    ],
    steps: [
      tx("Разложить истории на BA/DEV/QA-подзадачи не крупнее 24 часов.", "Split stories into BA/DEV/QA subtasks no larger than 24 hours."),
      tx("Запретить списание времени при нулевой исходной оценке.", "Disallow time logging against a zero initial estimate."),
      tx("При каждом списании обновлять оставшуюся оценку и фиксировать результат.", "Update remaining estimate and record the result with every time entry."),
      tx("Автоматически выбирать случаи, где факт выше плана или план равен нулю.", "Automatically select cases where actual exceeds plan or plan is zero."),
      tx("Разбирать корневую причину по задаче и роли, затем менять правило или оценку.", "Review the root cause by task and role, then adjust the rule or estimate."),
    ],
    artifacts: [
      tx("Реестр отклонений, фильтр Jira, классификатор причин; владелец — PMO.", "Variance register, Jira filter, cause taxonomy; owner: PMO."),
      tx("Структура Story и шкала оценки; владельцы — аналитик и команда.", "Story structure and estimation scale; owners: analyst and team."),
    ],
    cadence: [
      tx("Сигналы — еженедельно; причины — на планировании и ретроспективе.", "Signals weekly; causes during planning and retrospectives."),
    ],
    errors: [
      tx("Усреднять отклонение по команде и терять конкретную причину.", "Averaging variance across the team and losing the specific cause."),
      tx("Менять исходный план задним числом вместо фиксации переоценки.", "Overwriting the original plan instead of recording a re-estimate."),
    ],
    result: tx(
      "Медианное абсолютное отклонение и доля нулевого плана снижаются; переоценка оформляется до перерасхода.",
      "Median absolute variance and zero-plan share fall; re-estimation happens before overspend.",
    ),
    relatedLayers: ["rules", "stages", "artifacts", "cadence"],
  },
  {
    id: "tail-cost",
    value: "−20%",
    label: tx("хвост затрат", "cost tail"),
    note: tx("целевой ориентир после исходной линии", "target after the baseline"),
    meaning: tx(
      "Освободить ёмкость, занятую зависшими и потерявшими ценность задачами, не скрывая их переносом между списками.",
      "Release capacity tied up in stalled or obsolete work without hiding it by moving items between lists.",
    ),
    measure: [
      tx("Количество и возраст задач без движения, остаточную оценку и продолжающиеся списания.", "Count and age of inactive items, remaining estimate, and continuing time logs."),
      tx("Долю хвоста в общей незавершённой работе и стоимость его завершения.", "Tail share in total work in progress and its completion cost."),
    ],
    baseline: [
      tx("Определить признак «зависла» отдельно для каждого типа работ.", "Define stalled status separately for each work type."),
      tx("Зафиксировать владельца, последнюю активность, остаток и ожидаемую ценность.", "Record owner, last activity, remaining effort, and expected value."),
    ],
    steps: [
      tx("Собрать единый список задач старше согласованного порога без движения.", "Build one list of items inactive beyond the agreed threshold."),
      tx("Для каждой задачи подтвердить ценность, владельца, зависимость и остаток.", "Confirm value, owner, dependency, and remainder for every item."),
      tx("Принять решение: закрыть, завершить, передать или вернуть на повторную оценку.", "Decide: close, finish, hand off, or return for re-estimation."),
      tx("Ограничить незавершённую работу и запретить новые задачи без владельца.", "Limit work in progress and reject new ownerless items."),
      tx("Отслеживать повторное накопление по входящему потоку и возрасту очереди.", "Track reaccumulation through inflow and queue age."),
    ],
    artifacts: [
      tx("Реестр хвоста и протокол решений; владельцы — руководители потоков.", "Tail register and decision log; owners: flow leads."),
      tx("Правило закрытия и передачи; владелец — PMO.", "Closure and handoff rule; owner: PMO."),
    ],
    cadence: [
      tx("Возраст очереди — еженедельно; полная ревизия — по согласованному циклу.", "Queue age weekly; full review on an agreed cycle."),
    ],
    errors: [
      tx("Считать весь список задач хвостом без учёта типа и ожидаемой ценности.", "Treating the entire backlog as tail regardless of type or expected value."),
      tx("Закрывать карточку без решения по обязательству, данным или документации.", "Closing a card without resolving the commitment, data, or documentation."),
    ],
    result: tx(
      "Стоимость и возраст хвоста снижаются относительно исходной линии, а каждая оставшаяся задача имеет владельца и решение.",
      "Tail cost and age fall against the baseline, and every remaining item has an owner and a decision.",
    ),
    relatedLayers: ["rules", "stages", "capacity"],
  },
  {
    id: "tech-debt",
    value: "−15%",
    label: tx("технический долг", "technical debt"),
    note: tx("целевой ориентир после исходной линии", "target after the baseline"),
    meaning: tx(
      "Сокращать измеримый объём последствий отложенных технических решений, а не объявлять долгом любое несовершенство.",
      "Reduce measurable consequences of deferred technical decisions instead of labeling every imperfection as debt.",
    ),
    measure: [
      tx("Часы на дефекты в эксплуатации, повторные инциденты и задачи подтверждённого долга.", "Hours spent on production defects, recurring incidents, and validated debt items."),
      tx("Возраст долга, влияние на поставку и долю выполненных предупреждающих действий.", "Debt age, delivery impact, and completion share of preventive actions."),
    ],
    baseline: [
      tx("Согласовать классификацию долга и отделить дефекты от новых требований.", "Agree a debt taxonomy and separate defects from new requirements."),
      tx("Связать записи долга с инцидентами, компонентами и трудозатратами.", "Link debt records to incidents, components, and effort."),
    ],
    steps: [
      tx("После ретроспективы и разбора инцидента создавать задачи с владельцем и сроком.", "Create owned, dated tasks after retrospectives and incident reviews."),
      tx("Оценивать влияние долга на риск, время поставки и стоимость сопровождения.", "Assess debt impact on risk, delivery time, and support cost."),
      tx("Включать автотесты, нагрузочные проверки и регресс в релизный цикл.", "Include automated, load, and regression tests in the release cycle."),
      tx("Резервировать ёмкость на приоритетный долг в общем плане поставки.", "Reserve capacity for priority debt in the shared delivery plan."),
      tx("Проверять, уменьшились ли повторные сбои после закрытия задачи.", "Verify whether recurring failures decrease after task completion."),
    ],
    artifacts: [
      tx("Реестр долга, журнал инцидентов, план тестов; владелец — технический лидер.", "Debt register, incident log, test plan; owner: technical lead."),
      tx("Задачи улучшения с DoD; владельцы — команда и руководитель поставки.", "Improvement tasks with DoD; owners: team and delivery lead."),
    ],
    cadence: [
      tx("Триаж — на планировании; тенденция — ежемесячно или на каждом релизном цикле.", "Triage during planning; trend monthly or every release cycle."),
    ],
    errors: [
      tx("Измерять долг только числом карточек без влияния и трудозатрат.", "Measuring debt only by card count without impact or effort."),
      tx("Проводить ретроспективу без задач и проверки результата.", "Running retrospectives without tasks or outcome verification."),
    ],
    result: tx(
      "Объём приоритетного долга и повторных инцидентов снижается от исходной линии без роста скрытой очереди дефектов.",
      "Priority debt and recurring incidents fall from baseline without a hidden defect queue growing.",
    ),
    relatedLayers: ["artifacts", "cadence", "capacity"],
  },
  {
    id: "overspend",
    value: "−20%",
    label: tx("перерасход", "overspend"),
    note: tx("целевой ориентир после исходной линии", "target after the baseline"),
    meaning: tx(
      "Сократить неоплаченный и несогласованный расход ресурсов, сохранив прозрачную связь между объёмом, ценой и фактом.",
      "Reduce unpaid and unapproved resource use while preserving a transparent link between work volume, price, and actuals.",
    ),
    measure: [
      tx("Факт против исходной и актуальной оценки, а также против нормы часов договора.", "Actuals against original and current estimates, and against the contract-hour norm."),
      tx("Неоплаченные изменения объёма, прямые расходы, маржу и удельную прибыль на DEV-час.", "Unpaid work-volume changes, direct costs, margin, and profit per DEV hour."),
    ],
    baseline: [
      tx("Зафиксировать состав прямых расходов, правила распределения и целевую ставку R.", "Fix direct-cost composition, allocation rules, and target rate R."),
      tx("Разделить исходный объём, согласованные изменения CR и внутреннюю переделку.", "Separate original volume, approved CRs, and internal rework."),
    ],
    steps: [
      tx("Рассчитать норму DEV-часов: выручка / целевая ставка R.", "Calculate the DEV-hour norm: revenue / target rate R."),
      tx("Связать каждое превышение с причиной: оценка, изменение объёма, дефект или ожидание.", "Link every overrun to a cause: estimate, work-volume change, defect, or waiting."),
      tx("Не начинать новый объём без оформленного изменения объёма работ (CR).", "Do not start new volume without an approved change request (CR)."),
      tx("Предлагать выбор: пересмотр цены или T&M с лимитом либо сокращение объёма.", "Offer a choice: repricing or capped T&M, or reducing work volume."),
      tx("Калибровать доли управления и сопровождения по сопоставимым типам работ.", "Calibrate management and support shares by comparable work types."),
    ],
    artifacts: [
      tx("PnL проекта, реестр CR, расчёт нормы часов; владельцы — PM и финансовая функция.", "Project PnL, CR register, hour-norm calculation; owners: PM and finance."),
      tx("Панель исходной линии и факта; владелец — PMO.", "Baseline-versus-actual dashboard; owner: PMO."),
    ],
    cadence: [
      tx("План/факт — еженедельно; PnL — по финансовому циклу и перед решением по CR.", "Plan versus actual weekly; PnL on the financial cycle and before CR decisions."),
    ],
    errors: [
      tx("Считать высокой загрузкой полезный результат, даже если часы не покрыты выручкой.", "Treating high utilization as success when hours are not covered by revenue."),
      tx("Смешивать проектные часы управления с корпоративными косвенными расходами.", "Mixing project management hours with corporate indirect costs."),
    ],
    result: tx(
      "Неоплаченный перерасход снижается относительно исходной линии; новый объём имеет оценку, источник оплаты и решение до начала работы.",
      "Unpaid overspend falls against baseline; new work has an estimate, funding source, and decision before it starts.",
    ),
    relatedLayers: ["rules", "stages", "artifacts", "capacity", "customer"],
  },
];

export const layerPages: LayerPage[] = [
  {
    id: "rules",
    n: "01",
    title: tx("Регламенты", "Rules"),
    summary: tx("Единые правила учёта, декомпозиции и изменений.", "Shared rules for tracking, decomposition, and change."),
    purpose: tx("Сделать одинаковые действия и показатели сопоставимыми во всём согласованном контуре.", "Make actions and measures comparable across the agreed contour."),
    inputs: [tx("Границы портфеля, договорные модели, текущие правила Jira.", "Portfolio boundaries, contract models, and current Jira rules.")],
    actions: [
      tx("Согласовать правила списаний, декомпозиции ≤24 ч и изменения объёма.", "Agree time logging, decomposition ≤24h, and work-volume change rules."),
      tx("Определить обязательные поля, исключения и маршрут срочных исправлений.", "Define mandatory fields, exceptions, and the emergency-fix route."),
      tx("Назначить владельцев правил и порядок изменения версий.", "Assign rule owners and version-change procedure."),
    ],
    outputs: [tx("Короткий регламент, памятка ролей, журнал исключений.", "Concise rules, role guide, and exception log.")],
    roles: [tx("PMO владеет системой; руководители потоков внедряют; команды дают обратную связь.", "PMO owns the system; flow leads implement; teams provide feedback.")],
    cadence: [tx("Проверка соблюдения еженедельно; пересмотр после значимого изменения или по циклу.", "Compliance weekly; review after major change or on a set cycle.")],
    relatedMetrics: ["schedule", "plan-fact", "tail-cost", "overspend"],
  },
  {
    id: "stages",
    n: "02",
    title: tx("Учёт стадий", "Stage tracking"),
    summary: tx("Путь от заявки до приёмки и закрытия.", "The path from request to acceptance and closure."),
    purpose: tx("Показывать фактическое состояние работы по проверяемому событию, а не по субъективному проценту готовности.", "Show actual work state through verifiable events, not subjective completion percentages."),
    inputs: [tx("Типы запросов, жизненный цикл поставки, договорные контуры.", "Request types, delivery lifecycle, and contract contours.")],
    actions: [
      tx("Описать стадии и критерии перехода между ними.", "Describe stages and transition criteria."),
      tx("Развести оценку, реализацию, сопровождение и внутренние инициативы.", "Separate estimation, implementation, support, and internal initiatives."),
      tx("Настроить статусы Jira и правила закрытия Epic, Story и подзадач.", "Configure Jira states and closure rules for epics, stories, and subtasks."),
    ],
    outputs: [tx("Карта жизненного цикла, схема статусов, правила закрытия.", "Lifecycle map, status scheme, and closure rules.")],
    roles: [tx("Руководитель поставки отвечает за поток; аналитик — за вход; команда — за актуальный статус.", "Delivery lead owns flow; analyst owns intake; team owns current status.")],
    cadence: [tx("Статусы обновляются по факту события; качество стадий проверяется еженедельно.", "Status updates on events; stage quality checked weekly.")],
    relatedMetrics: ["schedule", "satisfaction", "plan-fact", "tail-cost", "overspend"],
  },
  {
    id: "artifacts",
    n: "03",
    title: tx("Артефакты и атрибуты", "Artifacts and attributes"),
    summary: tx("Оценка, даты, роли и критерии готовности.", "Estimate, dates, roles, and readiness criteria."),
    purpose: tx("Дать каждой задаче минимальный набор данных для оценки, исполнения, приёмки и прогноза.", "Give each item the minimum data needed for estimation, execution, acceptance, and forecasting."),
    inputs: [tx("Карта стадий, шаблоны требований, правила учёта.", "Stage map, requirements templates, and tracking rules.")],
    actions: [
      tx("Ввести критерии готовности DoR/DoD и проверяемые условия приёмки.", "Introduce DoR/DoD and testable acceptance criteria."),
      tx("Заполнять оценку, даты, владельца и связи Epic → Story → Subtask.", "Populate estimate, dates, owner, and Epic → Story → Subtask links."),
      tx("Автоматизировать контроль обязательных полей и тестов.", "Automate mandatory-field and test checks."),
    ],
    outputs: [tx("Шаблон требований, карточка Story, проверки контроля качества.", "Requirements template, story card, and quality-control checks.")],
    roles: [tx("Аналитик отвечает за готовность входа; технический и QA-лиды — за DoD; исполнитель — за факт.", "Analyst owns intake readiness; technical and QA leads own DoD; assignee owns actuals.")],
    cadence: [tx("Проверка до начала работы и перед переходом к приёмке.", "Check before work starts and before acceptance.")],
    relatedMetrics: ["schedule", "satisfaction", "plan-fact", "tech-debt", "overspend"],
  },
  {
    id: "cadence",
    n: "04",
    title: tx("Ритм управления", "Management cadence"),
    summary: tx("Планирование, статус, релиз и улучшения в одном цикле.", "Planning, status, release, and improvement in one cycle."),
    purpose: tx("Связать решения во времени: увидеть отклонение, назначить действие и проверить эффект.", "Connect decisions over time: spot variance, assign action, and verify effect."),
    inputs: [tx("Актуальные стадии, оценки, риски, инциденты и решения прошлого цикла.", "Current stages, estimates, risks, incidents, and prior-cycle decisions.")],
    actions: [
      tx("Установить минимальный набор встреч и цель каждой.", "Set the minimum meeting set and purpose of each."),
      tx("Проводить планирование и статус по данным Jira, а не по отдельным таблицам.", "Run planning and status from Jira data, not separate spreadsheets."),
      tx("Завершать ретроспективу задачами улучшения с владельцем и сроком.", "End retrospectives with owned, dated improvement tasks."),
    ],
    outputs: [tx("Календарь управления, журнал решений, задачи улучшения, прогноз релиза.", "Management calendar, decision log, improvement tasks, and release forecast.")],
    roles: [tx("PM фасилитирует решения; команда даёт факты; владельцы действий отвечают за результат.", "PM facilitates decisions; team provides facts; action owners deliver outcomes.")],
    cadence: [tx("Ежедневная синхронизация — при необходимости; статус — еженедельно; ретроспектива — по циклу поставки.", "Daily sync as needed; status weekly; retrospective per delivery cycle.")],
    relatedMetrics: ["schedule", "satisfaction", "plan-fact", "tech-debt"],
  },
  {
    id: "capacity",
    n: "05",
    title: tx("Прогноз загрузки", "Capacity forecast"),
    summary: tx("Ёмкость, очередь и перегрузка до срыва.", "Capacity, queue, and overload before failure."),
    purpose: tx("Заранее увидеть дефицит, избыток и конфликт приоритетов на основе оценённых работ.", "See shortages, excess, and priority conflicts early from estimated work."),
    inputs: [tx("Оценки, даты, исполнители, календарь доступности и приоритеты.", "Estimates, dates, assignees, availability calendar, and priorities.")],
    actions: [
      tx("Показывать в Timeline только оценённые работы с датами и владельцами.", "Show only estimated, dated, owned work in Timeline."),
      tx("Сопоставлять спрос и доступную ёмкость по ролям и периодам.", "Compare demand and available capacity by role and period."),
      tx("Сверять состав потока с рекомендацией: ядро 5–9 (BA/DEV/QA), PM на 1–3 команды; настройщики — в контуре поставки на потоках с печатными формами; дизайнер — общий пул; PO как правило на стороне заказчика. Пропорции калибровать после аудита.", "Check stream staffing against a guide: core 5–9 (BA/DEV/QA), PM for 1–3 teams; configurers in the delivery contour for print-form streams; designer as a shared pool; PO usually on the customer side. Calibrate ratios after an audit."),
      tx("Ограничивать незавершённую работу и разрешать конфликт приоритетов до старта.", "Limit work in progress and resolve priority conflicts before start."),
    ],
    outputs: [tx("Прогноз загрузки, список дефицитов, решение по приоритетам и найму/перераспределению.", "Capacity forecast, shortage list, and priority plus staffing/reallocation decisions.")],
    roles: [tx("Руководители потоков подтверждают спрос; ресурсные руководители BA/DEV/QA — доступность; настройщики закрепляются за потоками с печатными формами; дизайнер — из общего пула; PMO сводит прогноз и держит рекомендательный каркас состава (PO обычно на стороне заказчика).", "Flow leads confirm demand; BA/DEV/QA resource leads confirm availability; configurers attach to print-form streams; designer comes from a shared pool; PMO consolidates the forecast and keeps the staffing guide (PO usually on the customer side).")],
    cadence: [tx("Обновление еженедельно; горизонт — не короче согласованного цикла планирования.", "Update weekly; horizon no shorter than the agreed planning cycle.")],
    relatedMetrics: ["schedule", "tail-cost", "tech-debt", "overspend"],
  },
  {
    id: "customer",
    n: "06",
    title: tx("Работа с заказчиком", "Customer collaboration"),
    summary: tx("Один статус, обратная связь и управление изменениями.", "One status, feedback, and change control."),
    purpose: tx("Сделать ожидания, риски, решения и изменения объёма прозрачными для обеих сторон.", "Make expectations, risks, decisions, and work-volume changes transparent to both sides."),
    inputs: [tx("Факты поставки, риски, инциденты, договорные лимиты и обратная связь.", "Delivery facts, risks, incidents, contract limits, and feedback.")],
    actions: [
      tx("Согласовать единый канал и формат статуса.", "Agree one status channel and format."),
      tx("Проводить изменения объёма через CR с оценкой влияния на срок и цену.", "Route work-volume changes through CR with schedule and price impact."),
      tx("Измерять CSAT и закрывать цикл обратной связи проверяемыми улучшениями.", "Measure CSAT and close feedback loops with verifiable improvements."),
    ],
    outputs: [tx("Еженедельный отчёт, журнал решений и CR, опрос CSAT, программа улучшений.", "Weekly report, decision and CR logs, CSAT survey, and improvement program.")],
    roles: [tx("Ответственный за заказчика ведёт коммуникацию; PM даёт факты; заказчик подтверждает решения.", "Customer lead manages communication; PM provides facts; customer confirms decisions.")],
    cadence: [tx("Статус — еженедельно; решения — по событию; CSAT — по согласованному циклу.", "Status weekly; decisions event-driven; CSAT on an agreed cycle.")],
    relatedMetrics: ["satisfaction", "overspend"],
  },
];

export const launchSteps: LaunchStepPage[] = [
  {
    id: "embedding",
    n: "01",
    title: tx("Встраивание", "Embedding"),
    summary: tx(
      "Вход в контур: роли, границы ответственности, каналы статуса к руководству и заказчику.",
      "Enter the contour: roles, ownership boundaries, status channels to leadership and customer.",
    ),
    purpose: tx(
      "Зафиксировать, кто за что отвечает и куда смотрит статус, до аудита и базовой линии. Без этого данные и решения собираются из чатов и разрозненных таблиц.",
      "Lock who owns what and where status is read before audit and baseline. Without this, data and decisions are assembled from chats and scattered sheets.",
    ),
    inputs: [
      tx("Согласованный портфель или группа проектов и список заказчиков / потоков.", "Agreed portfolio or project group and the list of customers / streams."),
      tx("Текущие роли BA, DEV, QA и PM; фактические каналы отчётности.", "Current BA, DEV, QA and PM roles; actual reporting channels."),
      tx("Доступ к трекеру задач (Jira) и к существующим регламентам, если они есть.", "Access to the task tracker (Jira) and any existing rules."),
    ],
    steps: [
      tx("Описать границы контура: какие проекты входят, какие — вне периметра.", "Describe contour boundaries: which projects are in scope and which are out."),
      tx("Назначить владельцев потоков и уточнить роли BA / DEV / QA / PM; настройщиков закрепить за потоками с печатными формами; дизайнера учитывать как общий пул. Ориентир ядра — 5–9 человек (BA/DEV/QA); PM на 1–3 команды. PO как правило на стороне заказчика.", "Assign stream owners and clarify BA / DEV / QA / PM roles; attach configurers to print-form streams; treat designer as a shared pool. Core guide is 5–9 people (BA/DEV/QA); PM for 1–3 teams. PO is usually on the customer side."),
      tx("Согласовать один канал статуса для заказчика и руководства: отчёт, доска или панель — без параллельной ручной сводки из чатов.", "Agree one status channel for customer and leadership: report, board, or panel — no parallel manual chat summary."),
      tx("Зафиксировать эскалацию: кому и когда передают срыв срока, перерасход и конфликт приоритетов.", "Fix escalation: who receives schedule slip, overspend, and priority conflicts, and when."),
      tx("Коротко описать входные ожидания к аудиту: период, типы работ, доступ к данным.", "Briefly set audit intake expectations: period, work types, data access."),
    ],
    outputs: [
      tx("Карта контура и ролей с границами ответственности.", "Contour and role map with ownership boundaries."),
      tx("Описание единого канала статуса и маршрута эскалации.", "Description of the single status channel and escalation route."),
      tx("Согласованный список проектов / потоков для аудита.", "Agreed project / stream list for the audit."),
    ],
    roles: [
      tx("Руководитель проектного офиса согласует контур и канал статуса.", "Head of project office agrees the contour and status channel."),
      tx("Руководители потоков подтверждают границы и владельцев.", "Stream leads confirm boundaries and owners."),
      tx("Заказчик и руководство подтверждают, куда смотрят статус.", "Customer and leadership confirm where they read status."),
    ],
    cadence: [
      tx("Обычно 1–2 недели на старт; дальше канал статуса работает еженедельно.", "Typically 1–2 weeks to start; then the status channel runs weekly."),
      tx("Пересмотр границ — при изменении портфеля или состава потоков.", "Review boundaries when the portfolio or stream mix changes."),
    ],
    errors: [
      tx("Оставить несколько параллельных «истин» статуса (чат, таблица, презентация).", "Leaving several parallel status truths (chat, sheet, deck)."),
      tx("Начинать аудит без списка проектов и без владельцев потоков.", "Starting an audit without a project list and stream owners."),
      tx("Считать встраивание «настройкой Jira» вместо договорённости о ролях и канале.", "Treating embedding as a Jira setup instead of an agreement on roles and channel."),
    ],
    result: tx(
      "Контур назван, роли и эскалация понятны, один канал статуса согласован — можно переходить к аудиту за период.",
      "Contour is named, roles and escalation are clear, one status channel is agreed — ready to move to the period audit.",
    ),
    nextStep: "audit",
    relatedMetrics: ["satisfaction", "schedule"],
    relatedLayers: ["rules", "customer", "capacity"],
  },
  {
    id: "audit",
    n: "02",
    title: tx("Аудит за год", "Year audit"),
    summary: tx(
      "Снимок прошлого периода: план/факт, завершение стадий, загрузка, соблюдение регламентов, хвост задач.",
      "Snapshot of the prior period: plan/fact, stage completion, load, process adherence, task tail.",
    ),
    purpose: tx(
      "Получить объективный снимок процессов, артефактов и экономики. Без этой точки нельзя измерить прогресс и выставить целевые уровни.",
      "Get an objective snapshot of processes, artifacts, and economics. Without this point you cannot measure progress or set targets.",
    ),
    inputs: [
      tx("Карта контура и доступ к данным трекера за согласованный период (часто год или полный цикл портфеля).", "Contour map and tracker data for the agreed period (often a year or a full portfolio cycle)."),
      tx("Правила учёта времени и типы работ, как они есть сейчас — даже если неидеальны.", "Current time-accounting rules and work types — even if imperfect."),
      tx("Финансовые агрегаты контура в обезличенном виде, если доступны: выручка, прямые расходы, часы.", "Anonymized contour financial aggregates if available: revenue, direct costs, hours."),
    ],
    steps: [
      tx("Снять стадии жизненного цикла: от заявки и согласования до Epic → Story → приёмки и закрытия.", "Capture lifecycle stages: from request and approval to Epic → Story → acceptance and closure."),
      tx("Собрать реестр перерасходов: Факт > План или План = 0 при Факт > 0; классифицировать причины.", "Build an overspend register: Actual > Plan or Plan = 0 with Actual > 0; classify causes."),
      tx("Оценить загрузку людей и команд; отметить перегрузку и простой.", "Assess people and team load; mark overload and idle capacity."),
      tx("Измерить хвост задач: открытый backlog в трудочасах → оценка денег, нужных ролей и гипотетических дат закрытия.", "Measure the task tail: open backlog in effort hours → money, required roles, and hypothetical close dates."),
      tx("Проверить зрелость артефактов: доля задач с оценкой, датами и ролями; наличие контроля качества и релизного ритма.", "Check artifact maturity: share of items with estimate, dates, and roles; quality control and release cadence presence."),
      tx("При наличии данных — карта рентабельности и доли часов управления / сопровождения относительно разработки.", "If data exists — profitability map and management / support hour shares versus development."),
    ],
    outputs: [
      tx("Реестр план/факт с причинами и картотекой ошибок структуры BA/DEV/QA и гранулярности >24 ч.", "Plan/fact register with causes and a file of BA/DEV/QA structure and >24h granularity errors."),
      tx("Снимок хвоста, загрузки и зрелости артефактов.", "Tail, load, and artifact-maturity snapshot."),
      tx("Карта рентабельности и аудит управленческих затрат — если данные позволяют.", "Profitability map and management-cost audit — if data allows."),
    ],
    roles: [
      tx("PMO ведёт аудит и сводит артефакты.", "PMO runs the audit and consolidates artifacts."),
      tx("Руководители потоков подтверждают факты по своим проектам.", "Stream leads confirm facts for their projects."),
      tx("Финансовая функция помогает с обезличенными агрегатами, не подменяя PMO.", "Finance helps with anonymized aggregates without replacing PMO."),
    ],
    cadence: [
      tx("Полный снимок — один раз на старте и затем по согласованному циклу (часто год или полугодие).", "Full snapshot once at start, then on an agreed cycle (often yearly or half-yearly)."),
      tx("Лёгкая сверка сигналов план/факт и хвоста — еженедельно после запуска ритма.", "Light plan/fact and tail signal check weekly after cadence starts."),
    ],
    errors: [
      tx("Выставлять целевые уровни до фиксации снимка.", "Setting targets before locking the snapshot."),
      tx("Сравнивать несопоставимые контуры и типы работ.", "Comparing unlike contours and work types."),
      tx("Оставлять выводы без артефактов: только «ощущение, что плохо».", "Leaving conclusions without artifacts: only a feeling that things are bad."),
    ],
    result: tx(
      "Есть проверяемый снимок периода по план/факту, стадиям, загрузке, хвосту и зрелости артефактов — можно фиксировать базовую линию.",
      "There is a verifiable period snapshot for plan/fact, stages, load, tail, and artifact maturity — ready to lock the baseline.",
    ),
    nextStep: "baseline",
    relatedMetrics: ["plan-fact", "tail-cost", "overspend", "tech-debt", "schedule"],
    relatedLayers: ["rules", "stages", "artifacts", "capacity"],
  },
  {
    id: "baseline",
    n: "03",
    title: tx("База", "Baseline"),
    summary: tx(
      "Фиксируем базовую линию и обязательные артефакты. Без этого целевые уровни и метрики не опираются на факты.",
      "Lock the baseline and mandatory artifacts. Without this, targets and metrics have no factual footing.",
    ),
    purpose: tx(
      "Закрепить исходную линию измерений и минимальный набор правил с артефактами, на которые потом опираются цели и проверки эффекта.",
      "Lock the measurement baseline and the minimum rules-plus-artifacts set that later goals and effect checks rest on.",
    ),
    inputs: [
      tx("Артефакты аудита: реестр план/факт, снимок хвоста, зрелость полей, экономика при наличии.", "Audit artifacts: plan/fact register, tail snapshot, field maturity, economics if available."),
      tx("Согласованный контур проектов и канал статуса.", "Agreed project contour and status channel."),
    ],
    steps: [
      tx("Внедрить или доадаптировать регламенты слоёв 1–3: списание, декомпозиция ≤24 ч, Planning, запрет нулевого плана.", "Introduce or adapt layers 1–3 rules: time logging, decomposition ≤24h, Planning, ban on zero plan."),
      tx("Сделать обязательными артефакты задачи: оценка, даты начала и окончания, исполнитель, условия приёмки и критерии готовности.", "Make task artifacts mandatory: estimate, start and end dates, assignee, acceptance criteria and readiness criteria."),
      tx("Ввести шаблон бизнес-требований и оценку по ролям BA / DEV / QA.", "Introduce a business-requirements template and BA / DEV / QA role estimates."),
      tx("Зафиксировать период, набор типов работ и правила учёта — это и есть исходная линия для сравнения.", "Lock the period, work types, and accounting rules — this is the baseline for comparison."),
      tx("Согласовать с руководством, что измеряем одинаково до и после изменений.", "Agree with leadership that measurement stays consistent before and after changes."),
    ],
    outputs: [
      tx("Короткий регламент учёта и декомпозиции; памятка ролей.", "Concise tracking and decomposition rules; role guide."),
      tx("Шаблоны Story / требований и список обязательных полей.", "Story / requirements templates and mandatory-field list."),
      tx("Зафиксированные значения исходной линии по выбранным показателям.", "Locked baseline values for the chosen measures."),
    ],
    roles: [
      tx("PMO владеет системой правил и исходной линией.", "PMO owns the rule system and baseline."),
      tx("Руководители потоков внедряют правила в командах.", "Stream leads embed the rules in teams."),
      tx("Аналитик и технические лиды отвечают за качество входа и DoD.", "Analyst and technical leads own intake quality and DoD."),
    ],
    cadence: [
      tx("Фиксация базы — после аудита, обычно в течение 2–4 недель внедрения правил.", "Baseline lock after audit, typically within 2–4 weeks of rule rollout."),
      tx("Соблюдение полей и списаний — еженедельно; пересмотр регламента — по событию или циклу.", "Field and logging compliance weekly; rule review on event or cycle."),
    ],
    errors: [
      tx("Ставить KPI до очистки данных и обязательных полей.", "Setting KPIs before cleaning data and mandatory fields."),
      tx("Считать базой красивый дашборд без оценок, дат и владельцев.", "Treating a pretty dashboard as baseline without estimates, dates, and owners."),
      tx("Менять правила учёта задним числом без новой исходной линии.", "Changing accounting rules retroactively without a new baseline."),
    ],
    result: tx(
      "Правила слоёв 1–3 действуют в контуре, обязательные артефакты заполняются, исходная линия зафиксирована письменно — можно согласовывать целевые уровни.",
      "Layers 1–3 rules run in the contour, mandatory artifacts are filled, baseline is written down — ready to agree target levels.",
    ),
    nextStep: "targets",
    relatedMetrics: ["plan-fact", "schedule", "overspend"],
    relatedLayers: ["rules", "stages", "artifacts"],
  },
  {
    id: "targets",
    n: "04",
    title: tx("Целевые уровни", "Target levels"),
    summary: tx(
      "Согласуем ориентиры по срокам, удовлетворённости, план/факту, хвосту, техническому долгу и перерасходу.",
      "Agree targets for schedule, satisfaction, plan/fact, tail, technical debt and overspend.",
    ),
    purpose: tx(
      "Поставить проверяемые ориентиры только после базовой линии. Проценты на сайте — пример целей, которые подтверждают фактами аудита, а не заявленные прошлые результаты.",
      "Set verifiable targets only after the baseline. Site percentages are example goals confirmed by audit facts, not claimed past results.",
    ),
    inputs: [
      tx("Зафиксированная исходная линия и артефакты аудита.", "Locked baseline and audit artifacts."),
      tx("Приоритеты руководства: срок, маржа, качество, прозрачность для заказчика.", "Leadership priorities: schedule, margin, quality, customer transparency."),
    ],
    steps: [
      tx("Выбрать ограниченный набор ориентиров из карты: сроки, удовлетворённость, план/факт, хвост, технический долг, перерасход.", "Pick a limited target set from the map: schedule, satisfaction, plan/fact, tail, technical debt, overspend."),
      tx("Для каждого ориентира зафиксировать формулу, период сравнения и владельца сигнала.", "For each target, lock the formula, comparison period, and signal owner."),
      tx("Согласовать реалистичный коридор цели с учётом зрелости данных — не «всё сразу на максимум».", "Agree a realistic target band given data maturity — not everything to the max at once."),
      tx("Связать каждый ориентир с механизмом: регламент, артефакт, ритм или точечная мера.", "Link every target to a mechanism: rule, artifact, cadence, or targeted measure."),
      tx("Опубликовать ориентиры в том же канале статуса, куда смотрит руководство.", "Publish targets in the same status channel leadership already reads."),
    ],
    outputs: [
      tx("Согласованная карта ориентиров с формулами и владельцами.", "Agreed target map with formulas and owners."),
      tx("Связь «ориентир → слой / мера» для программы изменений.", "Target → layer / measure link for the change program."),
    ],
    roles: [
      tx("Руководство утверждает коридор целей.", "Leadership approves the target band."),
      tx("PMO готовит предложения на фактах базы.", "PMO prepares proposals from baseline facts."),
      tx("Владельцы потоков принимают ответственность за сигналы в своём контуре.", "Stream owners accept signal ownership in their contour."),
    ],
    cadence: [
      tx("Утверждение — один раз после базы; пересмотр — при новой базовой линии или смене стратегии.", "Approval once after baseline; review on a new baseline or strategy change."),
      tx("Контроль движения к цели — в еженедельном статусе и на цикле ревизии базы.", "Progress control in weekly status and on the baseline review cycle."),
    ],
    errors: [
      tx("Копировать чужие проценты без своей исходной линии.", "Copying someone else’s percentages without your own baseline."),
      tx("Ставить цели на все метрики сразу без приоритета и ёмкости.", "Setting goals on every metric at once without priority or capacity."),
      tx("Измерять «процент готовности» вместо принятых историй и проверяемых событий.", "Measuring completion percentage instead of accepted stories and verifiable events."),
    ],
    result: tx(
      "Ориентиры утверждены на фактах базы, у каждого есть формула, период и владелец — можно запускать точечные изменения.",
      "Targets are approved on baseline facts; each has a formula, period, and owner — ready to run targeted changes.",
    ),
    nextStep: "changes",
    relatedMetrics: ["schedule", "satisfaction", "plan-fact", "tail-cost", "tech-debt", "overspend"],
    relatedLayers: ["cadence", "artifacts", "customer"],
  },
  {
    id: "changes",
    n: "05",
    title: tx("Точечные изменения", "Targeted changes"),
    summary: tx(
      "Меры по узким местам с проверкой эффекта на следующей базовой линии — не кампания «всё сразу».",
      "Measures on bottlenecks, checked against the next baseline — not a change-everything campaign.",
    ),
    purpose: tx(
      "Устранять главные причины отклонений ограниченным набором мер и проверять эффект на следующем цикле измерений.",
      "Remove main variance causes with a limited set of measures and verify effect on the next measurement cycle.",
    ),
    inputs: [
      tx("Карта ориентиров и узкие места из аудита / еженедельных сигналов.", "Target map and bottlenecks from audit / weekly signals."),
      tx("Ёмкость команд на улучшения — без скрытого срыва поставки.", "Team capacity for improvements — without silently breaking delivery."),
    ],
    steps: [
      tx("Выбрать отклонения выше порога: план/факт, хвост, дефекты, неоплаченный объём.", "Select above-threshold variances: plan/fact, tail, defects, unpaid volume."),
      tx("Назначить ограниченное число мер с владельцем, сроком и критерием готовности.", "Assign a limited set of measures with owner, date, and readiness criterion."),
      tx("Встроить меры в ритм: планирование, статус, ретроспектива → задачи улучшения в трекере.", "Embed measures in cadence: planning, status, retrospective → improvement tasks in the tracker."),
      tx("Автоматизировать выборку сигналов (фильтр превышений, Timeline), а разборы держать точечными.", "Automate signal selection (overrun filter, Timeline) and keep reviews targeted."),
      tx("На следующей базовой линии сравнить сопоставимый период и решить: усилить, скорректировать или закрыть меру.", "On the next baseline, compare a like period and decide: reinforce, adjust, or close the measure."),
    ],
    outputs: [
      tx("Реестр мер с владельцами и статусом проверки эффекта.", "Measure register with owners and effect-check status."),
      tx("Задачи улучшения в трекере; обновлённые регламенты при устойчивом эффекте.", "Improvement tasks in the tracker; updated rules when effect holds."),
    ],
    roles: [
      tx("PMO держит пороги, реестр мер и проверку на следующей базе.", "PMO holds thresholds, the measure register, and the next-baseline check."),
      tx("Владельцы мер отвечают за исполнение в потоке.", "Measure owners deliver inside the stream."),
      tx("Команда даёт факты на ретроспективе; без разбора личностей.", "Team provides facts in retrospectives; no personality reviews."),
    ],
    cadence: [
      tx("Отбор мер — по еженедельным сигналам и после ретроспективы.", "Measure selection from weekly signals and after retrospectives."),
      tx("Проверка эффекта — на следующем цикле базовой линии (часто квартал / полугодие).", "Effect check on the next baseline cycle (often quarter / half-year)."),
    ],
    errors: [
      tx("Кампания «перестроить всё» без приоритета и без повторного замера.", "A rebuild-everything campaign without priority or a repeat measurement."),
      tx("Разбор «средней температуры» по команде вместо задач выше порога.", "Reviewing team averages instead of above-threshold items."),
      tx("Закрывать карточку улучшения без проверки, уменьшилась ли причина отклонения.", "Closing an improvement card without checking whether the variance cause fell."),
    ],
    result: tx(
      "Узкие места закрыты ограниченным набором мер, эффект виден на сопоставимой следующей базовой линии — цикл запуска повторяется, а не «настраивается разово».",
      "Bottlenecks are closed with a limited measure set; effect shows on the next comparable baseline — the launch cycle repeats instead of a one-off setup.",
    ),
    relatedMetrics: ["plan-fact", "tail-cost", "tech-debt", "overspend", "schedule", "satisfaction"],
    relatedLayers: ["cadence", "rules", "capacity", "customer"],
  },
];

export const authorityItems: AuthorityPage[] = [
  {
    id: "contour",
    n: "01",
    title: tx("Согласованный контур", "Agreed contour"),
    summary: tx(
      "Портфель или группа проектов с понятными границами ответственности.",
      "A portfolio or project group with clear ownership boundaries.",
    ),
    purpose: tx(
      "Ограничить зону, в которой проектный офис вправе задавать правила, измерять базу и вести статус. Без границ метрики и регламенты невозможно сделать сопоставимыми.",
      "Limit the zone where the project office may set rules, measure baseline, and run status. Without boundaries, metrics and rules cannot be made comparable.",
    ),
    scope: [
      tx("Список проектов / потоков, входящих в контур, и явный список исключений.", "List of projects / streams in the contour and an explicit exclusion list."),
      tx("Владельцы потоков и границы ответственности BA / DEV / QA / PM.", "Stream owners and BA / DEV / QA / PM ownership boundaries."),
      tx("Типы договорённостей учёта внутри контура: фиксированный бюджет, сопровождение, оценки, внутренние инициативы.", "Accounting agreement types inside the contour: fixed budget, support, estimation, internal initiatives."),
    ],
    howFixed: [
      tx("Письменное согласование с руководством: состав контура и дата пересмотра.", "Written agreement with leadership: contour composition and review date."),
      tx("Карта ролей на старте маршрута запуска (шаг «Встраивание»).", "Role map at launch-route start (Embedding step)."),
      tx("Альтернатива по периметру: старший руководитель проектов с группой РП и набором проектов — тот же принцип границ.", "Scope alternative: a senior project lead with a PM group and a project set — same boundary principle."),
    ],
    withoutIt: [
      tx("Сравнивают чужие проекты с разными правилами учёта и получают ложный план/факт.", "Unlike projects with different accounting rules get compared and yield false plan/fact."),
      tx("Регламенты «висят в воздухе»: команды не понимают, на кого они распространяются.", "Rules hang in the air: teams do not know who they apply to."),
      tx("Статус собирается выборочно — удобные проекты попадают в отчёт, проблемные нет.", "Status is selective — convenient projects enter the report, problem ones do not."),
    ],
    signsYes: [
      tx("Есть актуальный список проектов контура и владельцы потоков.", "There is a current contour project list and stream owners."),
      tx("Новый проект не попадает в отчётность, пока не включён в контур явно.", "A new project does not enter reporting until explicitly added to the contour."),
    ],
    signsNo: [
      tx("«Мы ведём всё» без списка и без исключений.", "“We run everything” with no list and no exclusions."),
      tx("Одни и те же люди отвечают «за всё», границы ролей не описаны.", "The same people own “everything”; role boundaries are undescribed."),
    ],
    relatedLaunch: ["embedding", "audit", "baseline"],
  },
  {
    id: "horizon",
    n: "02",
    title: tx("Горизонт от полугода", "Horizon from six months"),
    summary: tx(
      "Горизонт работы от полугода — чтобы базовая линия, ритм и эффект успели проявиться.",
      "Engagement horizon from six months — so baseline, cadence and effect can show.",
    ),
    purpose: tx(
      "Дать время на встраивание, аудит, фиксацию базы, целевые уровни и проверку точечных мер на следующей линии. Короткий «настроить Jira за месяц» не даёт сопоставимого эффекта.",
      "Allow time for embedding, audit, baseline lock, targets, and checking targeted measures on the next line. A short “fix Jira in a month” does not yield a comparable effect.",
    ),
    scope: [
      tx("Полный маршрут запуска: встраивание → аудит → база → цели → точечные изменения.", "Full launch route: embedding → audit → baseline → targets → targeted changes."),
      tx("Минимум один повторный замер на сопоставимом периоде после мер.", "At least one repeat measurement on a comparable period after measures."),
      tx("Ритм управления (статус, релизы, ретроспектива) как постоянная практика, не разовый проект.", "Management cadence (status, releases, retrospective) as ongoing practice, not a one-off project."),
    ],
    howFixed: [
      tx("В договорённости о роли или программе стабилизации указывают горизонт и циклы ревизии базы.", "Role or stabilization-program agreement states the horizon and baseline review cycles."),
      tx("Календарь: когда фиксируют базу, когда утверждают цели, когда сверяют эффект.", "Calendar: when baseline locks, when targets approve, when effect is checked."),
    ],
    withoutIt: [
      tx("Отменяют программу до повторного замера — «не взлетело» без факта.", "The program is cancelled before a repeat measurement — “didn’t take off” without evidence."),
      tx("Меняют правила учёта каждый месяц — исходная линия становится бесполезной.", "Accounting rules change every month — the baseline becomes useless."),
      tx("Цели ставят на квартал без базы и без ёмкости на улучшения.", "Goals are set for a quarter without baseline or improvement capacity."),
    ],
    signsYes: [
      tx("В плане есть даты базы, целей и следующей сверки эффекта.", "The plan has dates for baseline, targets, and the next effect check."),
      tx("Руководство понимает, что эффект смотрят на сопоставимом периоде, а не через две недели.", "Leadership understands effect is judged on a comparable period, not in two weeks."),
    ],
    signsNo: [
      tx("Ожидание «покажите рост KPI в следующем спринте» без исходной линии.", "Expectation to “show KPI growth next sprint” without a baseline."),
      tx("Программа свёрнута после настройки досок, до аудита и мер.", "Program stopped after board setup, before audit and measures."),
    ],
    relatedLaunch: ["baseline", "targets", "changes"],
  },
  {
    id: "mandate",
    n: "03",
    title: tx("Право на регламенты и артефакты", "Mandate for rules and artifacts"),
    summary: tx(
      "Право фиксировать регламенты и обязательные артефакты в согласованном контуре.",
      "Mandate to set rules and mandatory artifacts inside the agreed contour.",
    ),
    purpose: tx(
      "Сделать правила игры и обязательные поля едиными в контуре. Иначе слои 1–3 не держатся, а метрики и Timeline остаются мнением.",
      "Make the rules and mandatory fields uniform in the contour. Otherwise layers 1–3 do not hold, and metrics plus Timeline stay opinions.",
    ),
    scope: [
      tx("Регламенты списания, декомпозиции ≤24 ч, Planning и запрета нулевого плана.", "Rules for time logging, decomposition ≤24h, Planning, and zero-plan ban."),
      tx("Обязательные артефакты: оценка, даты, исполнитель, условия приёмки, критерии готовности, шаблон требований.", "Mandatory artifacts: estimate, dates, assignee, acceptance criteria, readiness criteria, requirements template."),
      tx("Порядок изменения версий правил и журнал исключений.", "Rule version-change procedure and exception log."),
    ],
    howFixed: [
      tx("Полномочие прямо входит в зону ответственности руководителя проектного офиса для согласованного контура.", "The mandate is explicit in the head of project office responsibility for the agreed contour."),
      tx("Регламент утверждается с руководством и владельцами потоков; PMO владеет системой, потоки внедряют.", "Rules are approved with leadership and stream owners; PMO owns the system, streams implement."),
      tx("Исключения оформляют явно — не «тихим» обходом в чате.", "Exceptions are recorded explicitly — not a quiet chat workaround."),
    ],
    withoutIt: [
      tx("Каждая команда ведёт учёт по-своему — план/факт несопоставим.", "Each team tracks differently — plan/fact is not comparable."),
      tx("Timeline пустой: нет оценок и дат, отчёт заказчику снова собирают руками.", "Timeline is empty: no estimates or dates, customer report is hand-built again."),
      tx("Точечные разборы невозможны: нет порога и нет одинаковых полей.", "Targeted reviews are impossible: no threshold and no shared fields."),
    ],
    signsYes: [
      tx("Есть короткий утверждённый регламент и список обязательных полей.", "There is a short approved rule set and mandatory-field list."),
      tx("Новая версия правил имеет дату и владельца; исключения в журнале.", "A new rule version has a date and owner; exceptions are in the log."),
    ],
    signsNo: [
      tx("PMO «советует», но команды вправе игнорировать обязательные поля.", "PMO “advises” but teams may ignore mandatory fields."),
      tx("Правила есть только в головах или в устаревшей презентации.", "Rules exist only in heads or an obsolete deck."),
    ],
    relatedLaunch: ["embedding", "baseline", "changes"],
  },
  {
    id: "status-channel",
    n: "04",
    title: tx("Прямой канал статуса", "Direct status channel"),
    summary: tx(
      "Прямой канал статуса к заказчику и руководству — без ручной сборки разрозненных таблиц.",
      "Direct status channel to customer and leadership — without stitching ad-hoc spreadsheets.",
    ),
    purpose: tx(
      "Дать один согласованный источник правды: сделанное, даты, отклонения, риски и решения. Это основа удовлетворённости и раннего управления перерасходом.",
      "Provide one agreed source of truth: done work, dates, deviations, risks, and decisions. This underpins satisfaction and early overspend control.",
    ),
    scope: [
      tx("Еженедельный отчёт или панель из трекера задач, а не сводка из чатов.", "Weekly report or panel from the task tracker, not a chat digest."),
      tx("Канал эскалации срывов, перерасхода и решений, ожидаемых от заказчика.", "Escalation channel for slips, overspend, and decisions needed from the customer."),
      tx("Связка с контуром инцидентов и программой улучшений по обратной связи.", "Link to the incident contour and the feedback improvement program."),
    ],
    howFixed: [
      tx("На шаге встраивания согласовать формат и аудиторию канала; закрепить в карте контура.", "At embedding, agree channel format and audience; lock it in the contour map."),
      tx("Статус ведёт PM / поток на фактах трекера; PMO задаёт шаблон и качество сигнала.", "PM / stream runs status from tracker facts; PMO sets the template and signal quality."),
      tx("Заказчик и руководство подтверждают, что смотрят именно этот канал.", "Customer and leadership confirm they read this channel."),
    ],
    withoutIt: [
      tx("Статус узнают постфактум; CSAT падает по прозрачности.", "Status is learned after the fact; CSAT drops on transparency."),
      tx("Руководство получает разные цифры из разных таблиц.", "Leadership gets different numbers from different sheets."),
      tx("Эскалации теряются в переписке — перерасход и срыв срока замечают поздно.", "Escalations die in chat — overspend and schedule slip are noticed late."),
    ],
    signsYes: [
      tx("Один отчёт / доска на неделю; расхождения с трекером разбирают как дефект данных.", "One report / board per week; tracker mismatches are treated as data defects."),
      tx("В статусе видны риски, решения и владельцы — не только «процент готовности».", "Status shows risks, decisions, and owners — not only a completion percentage."),
    ],
    signsNo: [
      tx("Перед каждым совещанием заново собирают презентацию из чатов.", "Before every meeting a deck is rebuilt from chats."),
      tx("Заказчик ведёт свой параллельный учёт, потому что официальному не доверяет.", "The customer keeps a parallel tracker because the official one is not trusted."),
    ],
    relatedLaunch: ["embedding", "targets", "changes"],
  },
];

export function metricById(id: string) {
  return metricPages.find((item) => item.id === id);
}

export function layerById(id: string) {
  return layerPages.find((item) => item.id === id);
}

export function launchStepById(id: string) {
  return launchSteps.find((item) => item.id === id);
}

export function authorityById(id: string) {
  return authorityItems.find((item) => item.id === id);
}
