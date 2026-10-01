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
      tx("Ограничивать незавершённую работу и разрешать конфликт приоритетов до старта.", "Limit work in progress and resolve priority conflicts before start."),
    ],
    outputs: [tx("Прогноз загрузки, список дефицитов, решение по приоритетам и найму/перераспределению.", "Capacity forecast, shortage list, and priority plus staffing/reallocation decisions.")],
    roles: [tx("Руководители потоков подтверждают спрос; ресурсные руководители — доступность; PMO сводит прогноз.", "Flow leads confirm demand; resource leads confirm availability; PMO consolidates the forecast.")],
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

export function metricById(id: string) {
  return metricPages.find((item) => item.id === id);
}

export function layerById(id: string) {
  return layerPages.find((item) => item.id === id);
}
