"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import { rolloutContent } from "@/lib/project-office-content";

export function ProjectOfficeRolloutPage() {
  const { t, lang } = useI18n();
  const c = rolloutContent;

  return (
    <div className="project-office-theme po-metric min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet po-metric__sheet mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
          <Link href="/project-office/#rollout" className="po-back">
            ← {lang === "ru" ? "К разделу «Внедрение»" : "Back to rollout"}
          </Link>

          <FadeUp className="po-hero po-detail__hero mt-3">
            <div className="po-hero__body">
              <p className="po-kicker">{t(c.kicker)}</p>
              <h1 className="po-hero__title">{t(c.title)}</h1>
              <p className="po-hero__lead">{t(c.lead)}</p>
              <p className="po-hero__alt">{t(c.horizonNote)}</p>
              <div className="po-detail__links mt-3">
                <Link href={c.checklistsHref} className="po-detail__all">
                  {t(c.checklistsCta)} →
                </Link>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="po-block po-detail__block" delay={0.03}>
            <ol className="po-rollout" aria-label={t(c.title)}>
              {c.phases.map((phase, index) => (
                <li key={phase.id} className="po-rollout__item">
                  <div className="po-rollout__meta">
                    <p className="po-kicker">{phase.n}</p>
                    <span className="po-rollout__weeks">{t(phase.weeks)}</span>
                  </div>
                  <h2 className="po-rollout__title">{t(phase.title)}</h2>
                  <p className="po-rollout__lead">{t(phase.close)}</p>
                  <ul className="po-rollout__links">
                    {phase.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{t(link.label)}</Link>
                      </li>
                    ))}
                  </ul>
                  {index < c.phases.length - 1 ? (
                    <span className="po-rollout__arrow" aria-hidden>
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </FadeUp>

          <FadeUp className="po-detail__nav" delay={0.05}>
            <div>
              <p className="po-kicker">
                {lang === "ru" ? "Связанные разделы" : "Related sections"}
              </p>
              <div className="po-detail__links">
                <Link href="/project-office/#launch">
                  {lang === "ru" ? "Маршрут запуска" : "Launch route"}
                </Link>
                <Link href="/project-office/how/team/">
                  {lang === "ru" ? "Структура команд" : "Team structure"}
                </Link>
                <Link href="/project-office/#authority">
                  {lang === "ru" ? "Полномочия" : "Authority"}
                </Link>
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
