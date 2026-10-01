"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import {
  teamStructureContent,
  type CubeBody,
  type LangText,
} from "@/lib/project-office-content";

function CubeCopy({
  body,
  t,
  leadClass,
  pointsClass,
  boundClass,
}: {
  body: CubeBody;
  t: (value: LangText) => string;
  leadClass: string;
  pointsClass: string;
  boundClass: string;
}) {
  return (
    <>
      <p className={leadClass}>{t(body.lead)}</p>
      <ul className={pointsClass}>
        {body.points.map((point) => (
          <li key={point.ru}>{t(point)}</li>
        ))}
      </ul>
      {body.boundary ? <p className={boundClass}>{t(body.boundary)}</p> : null}
    </>
  );
}

export function ProjectOfficeTeamPage() {
  const { t, lang } = useI18n();
  const c = teamStructureContent;

  return (
    <div className="project-office-theme po-metric min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet po-metric__sheet mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
          <Link href="/project-office/#how" className="po-back">
            ← {lang === "ru" ? "К разделу «Как устроено»" : "Back to how it works"}
          </Link>

          <FadeUp className="po-hero po-detail__hero mt-3">
            <div className="po-hero__body">
              <p className="po-kicker">
                {lang === "ru" ? "Справочник ролей" : "Role guide"}
              </p>
              <h1 className="po-hero__title">{t(c.title)}</h1>
              <p className="po-hero__lead">{t(c.lead)}</p>
            </div>
          </FadeUp>

          <FadeUp className="po-block po-detail__block" delay={0.02}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                01
              </span>
              <div>
                <h2 className="po-h2">{t(c.ownershipTitle)}</h2>
                <p className="po-lead">{t(c.ownershipLead)}</p>
              </div>
            </div>
            <ol className="po-own-map" aria-label={t(c.ownershipTitle)}>
              {c.ownership.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.highlight
                      ? "po-own-map__item is-highlight"
                      : "po-own-map__item"
                  }
                >
                  <p className="po-kicker">{item.n}</p>
                  <h3 className="po-own-map__title">{t(item.title)}</h3>
                  <CubeCopy
                    body={item}
                    t={t}
                    leadClass="po-own-map__lead"
                    pointsClass="po-own-map__points"
                    boundClass="po-own-map__bound"
                  />
                </li>
              ))}
            </ol>
          </FadeUp>

          <FadeUp className="po-glossary po-glossary--compact" delay={0.03}>
            <p className="po-kicker">{t(c.flowLeadTitle)}</p>
            <CubeCopy
              body={c.flowLead}
              t={t}
              leadClass="po-own-map__lead"
              pointsClass="po-own-map__points"
              boundClass="po-own-map__bound"
            />
          </FadeUp>

          <FadeUp className="po-block po-detail__block" delay={0.04}>
            <div className="po-block__head">
              <span className="po-num" aria-hidden>
                02
              </span>
              <div>
                <h2 className="po-h2">{t(c.chainTitle)}</h2>
              </div>
            </div>
            <ol className="po-team-chain" aria-label={t(c.chainTitle)}>
              {c.chain.map((item, index) => (
                <li key={item.n} className="po-team-chain__item">
                  <p className="po-kicker">{item.n}</p>
                  <h3 className="po-team-chain__title">{t(item.title)}</h3>
                  <CubeCopy
                    body={item}
                    t={t}
                    leadClass="po-own-map__lead"
                    pointsClass="po-own-map__points"
                    boundClass="po-own-map__bound"
                  />
                  {index < c.chain.length - 1 ? (
                    <span className="po-team-chain__arrow" aria-hidden>
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </FadeUp>

          <FadeUp className="po-detail__nav" delay={0.06}>
            <div>
              <p className="po-kicker">{t(c.relatedTitle)}</p>
              <div className="po-detail__links">
                {c.related.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {t(item.label)}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/project-office/" className="po-detail__all">
              {lang === "ru"
                ? "Все материалы проектного офиса"
                : "All project office materials"}{" "}
              →
            </Link>
          </FadeUp>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
