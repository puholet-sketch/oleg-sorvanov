"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { rulesStandardsContent } from "@/lib/project-office-content";

export function ProjectOfficeRulesStandards({ className = "" }: { className?: string }) {
  const { t, lang } = useI18n();
  const c = rulesStandardsContent;

  return (
    <section
      className={`po-rules-std ${className}`.trim()}
      aria-labelledby="po-rules-std-title"
    >
      <div className="po-block__head">
        <span className="po-num" aria-hidden>
          00
        </span>
        <div>
          <h2 className="po-h2" id="po-rules-std-title">
            {t(c.title)}
          </h2>
          <p className="po-lead">{t(c.lead)}</p>
        </div>
      </div>

      <div className="po-rules-std__grid">
        <article className="po-rules-std__card">
          <p className="po-kicker">{lang === "ru" ? "Заведение" : "Creation"}</p>
          <h3 className="po-rules-std__title">{t(c.decompose.title)}</h3>
          <ul className="po-detail__list">
            {c.decompose.items.map((item) => (
              <li key={item.ru}>{t(item)}</li>
            ))}
          </ul>
        </article>
        <article className="po-rules-std__card">
          <p className="po-kicker">{lang === "ru" ? "Переоценка" : "Re-estimate"}</p>
          <h3 className="po-rules-std__title">{t(c.reestimate.title)}</h3>
          <ol className="po-detail__list po-rules-std__ol">
            {c.reestimate.items.map((item) => (
              <li key={item.ru}>{t(item)}</li>
            ))}
          </ol>
          <p className="po-rules-std__example">{t(c.reestimate.example)}</p>
        </article>
      </div>

      <div className="po-detail__links po-rules-std__links">
        {c.links.map((link) => (
          <Link key={link.href} href={link.href}>
            {t(link.label)}
          </Link>
        ))}
      </div>
    </section>
  );
}
