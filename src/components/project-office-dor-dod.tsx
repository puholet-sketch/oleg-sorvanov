"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { dorDodContent } from "@/lib/project-office-content";

export function ProjectOfficeDorDod({ className = "" }: { className?: string }) {
  const { t, lang } = useI18n();
  const c = dorDodContent;

  return (
    <section className={`po-dor ${className}`.trim()} aria-labelledby="po-dor-title">
      <div className="po-block__head">
        <span className="po-num" aria-hidden>
          01
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

      <div className="po-dor__grid po-dor__grid--quartet">
        {c.quartet.map((item) => (
          <article className="po-dor__card" key={item.id}>
            <p className="po-kicker">{item.abbr}</p>
            <h3 className="po-dor__fullname">{t(item.fullName)}</h3>
            <p className="po-dor__name">{t(item.name)}</p>
            <p className="po-dor__when">
              <span className="po-dor__tag">
                {lang === "ru" ? "Когда" : "When"}
              </span>
              {t(item.when)}
            </p>
            <p className="po-dor__what">{t(item.what)}</p>
            <ul className="po-detail__list">
              {item.checks.map((check) => (
                <li key={check.ru}>{t(check)}</li>
              ))}
            </ul>
            <p className="po-dor__owner">{t(item.owner)}</p>
          </article>
        ))}
      </div>

      <div className="po-dor__groups" aria-labelledby="po-groups-title">
        <div className="po-block__head">
          <span className="po-num" aria-hidden>
            02
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

      <div className="po-dor__boosts" aria-labelledby="po-boosts-title">
        <div className="po-block__head">
          <span className="po-num" aria-hidden>
            03
          </span>
          <div>
            <h2 className="po-h2" id="po-boosts-title">
              {t(c.boostsTitle)}
            </h2>
            <p className="po-lead">{t(c.boostsLead)}</p>
          </div>
        </div>
        <ul className="po-dor__boost-list">
          {c.boosts.map((boost) => (
            <li key={boost.id}>
              <span>{t(boost.text)}</span>{" "}
              <Link href={boost.href} className="po-mistakes__link">
                {t(boost.linkLabel)} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
