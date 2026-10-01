"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { dorDodContent } from "@/lib/project-office-content";

type Mode = "full" | "callout";

export function ProjectOfficeDorDod({
  mode = "full",
  className = "",
}: {
  mode?: Mode;
  className?: string;
}) {
  const { t, lang } = useI18n();
  const c = dorDodContent;

  if (mode === "callout") {
    return (
      <aside className={`po-glossary ${className}`.trim()}>
        <p className="po-kicker">{t(c.calloutTitle)}</p>
        <p className="po-glossary__text">{t(c.calloutBody)}</p>
        <dl className="po-glossary__pair">
          <div>
            <dt>DoR</dt>
            <dd>{t(c.dor.name)}</dd>
          </div>
          <div>
            <dt>DoD</dt>
            <dd>{t(c.dod.name)}</dd>
          </div>
        </dl>
        <Link href="/project-office/how/artifacts/" className="po-glossary__more">
          {t(c.moreLabel)} →
        </Link>
      </aside>
    );
  }

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
            <h3 className="po-dor__name">{t(gate.name)}</h3>
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
    </section>
  );
}
