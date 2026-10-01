"use client";

import { useI18n } from "@/lib/i18n";
import { dorDodContent } from "@/lib/project-office-content";

export function ProjectOfficeDorDod({ className = "" }: { className?: string }) {
  const { t, lang } = useI18n();
  const c = dorDodContent;

  return (
    <section className={`po-dor ${className}`.trim()} aria-labelledby="po-dor-title">
      <div className="po-block__head">
        <span className="po-num po-num--wide" aria-hidden>
          DoR·DoD
        </span>
        <div>
          <h2 className="po-h2" id="po-dor-title">
            {t(c.title)}
          </h2>
          <p className="po-lead">{t(c.lead)}</p>
        </div>
      </div>

      <ol className="po-stage-ribbon" aria-label={lang === "ru" ? "Шкала поставки" : "Delivery scale"}>
        {c.stages.map((stage, index) => (
          <li
            key={stage.id}
            className={
              stage.kind === "gate" ? "po-stage-ribbon__item is-gate" : "po-stage-ribbon__item"
            }
          >
            <span className="po-stage-ribbon__hint">{t(stage.hint)}</span>
            <span className="po-stage-ribbon__label">{t(stage.label)}</span>
            {index < c.stages.length - 1 ? (
              <span className="po-stage-ribbon__arrow" aria-hidden>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="po-dor__grid">
        {[c.dor, c.dod].map((gate) => (
          <article className="po-dor__card" key={gate.abbr}>
            <p className="po-kicker">{gate.abbr}</p>
            <h3 className="po-dor__fullname">{t(gate.fullName)}</h3>
            <p className="po-dor__name">{t(gate.name)}</p>
            <p className="po-dor__when">
              <span className="po-dor__tag">
                {lang === "ru" ? "Когда" : "When"}
              </span>
              {t(gate.when)}
            </p>
            <p className="po-dor__what">{t(gate.what)}</p>
            <ul className="po-detail__list">
              {gate.checks.map((item) => (
                <li key={item.ru}>{t(item)}</li>
              ))}
            </ul>
            <p className="po-dor__owner">{t(gate.owner)}</p>
          </article>
        ))}
      </div>

      <article className="po-dor__ac" aria-labelledby="po-ac-title">
        <p className="po-kicker">{c.ac.abbr}</p>
        <h3 className="po-dor__fullname" id="po-ac-title">
          {t(c.ac.fullName)}
        </h3>
        <p className="po-dor__name">{t(c.ac.name)}</p>
        <p className="po-dor__what">{t(c.ac.what)}</p>
        <ul className="po-detail__list">
          {c.ac.links.map((item) => (
            <li key={item.ru}>{t(item)}</li>
          ))}
        </ul>
      </article>

      <div className="po-dor__groups" aria-labelledby="po-groups-title">
        <div className="po-block__head">
          <span className="po-num po-num--wide" aria-hidden>
            ART
          </span>
          <div>
            <h2 className="po-h2" id="po-groups-title">
              {t(c.groupsTitle)}
            </h2>
            <p className="po-lead">{t(c.groupsLead)}</p>
          </div>
        </div>
        <div className="po-dor__groups-grid">
          {c.groups.map((group) => (
            <article className="po-dor__card" key={group.id}>
              <p className="po-kicker">{t(group.gate)}</p>
              <h3 className="po-dor__fullname">{t(group.title)}</h3>
              <ul className="po-detail__list">
                {group.items.map((item) => (
                  <li key={item.ru}>{t(item)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
