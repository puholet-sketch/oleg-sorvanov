"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import {
  authorityItems,
  launchSteps,
  type AuthorityPage,
} from "@/lib/project-office-content";

export function ProjectOfficeAuthorityPage({
  item,
}: {
  item: AuthorityPage;
}) {
  const { t, lang } = useI18n();
  const sections = [
    {
      title: { ru: "Что входит", en: "What is included" },
      items: item.scope,
    },
    {
      title: { ru: "Как закрепляется", en: "How it is locked in" },
      items: item.howFixed,
    },
    {
      title: { ru: "Что ломается без этого", en: "What breaks without it" },
      items: item.withoutIt,
    },
    {
      title: { ru: "Признаки «есть»", en: "Signs it is present" },
      items: item.signsYes,
    },
    {
      title: { ru: "Признаки «нет»", en: "Signs it is missing" },
      items: item.signsNo,
    },
  ];
  const relatedLaunch = launchSteps.filter((step) =>
    item.relatedLaunch.includes(step.id),
  );

  return (
    <div className="project-office-theme po-metric min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet po-metric__sheet mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
          <Link href="/project-office/#authority" className="po-back">
            ←{" "}
            {lang === "ru"
              ? "К полномочиям и периметру"
              : "Back to authority and scope"}
          </Link>

          <FadeUp className="po-hero po-detail__hero mt-3">
            <div className="po-hero__body">
              <p className="po-kicker">
                {lang === "ru"
                  ? `Полномочие ${item.n}`
                  : `Authority ${item.n}`}
              </p>
              <h1 className="po-hero__title">{t(item.title)}</h1>
              <p className="po-hero__lead">{t(item.purpose)}</p>
            </div>
          </FadeUp>

          <FadeUp className="po-detail__grid" delay={0.04}>
            {sections.map((section, index) => (
              <section className="po-detail__card" key={section.title.ru}>
                <p className="po-kicker">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="po-detail__title">{t(section.title)}</h2>
                <ul className="po-detail__list">
                  {section.items.map((entry) => (
                    <li key={entry.ru}>{t(entry)}</li>
                  ))}
                </ul>
              </section>
            ))}
          </FadeUp>

          <FadeUp className="po-detail__nav" delay={0.06}>
            <div>
              <p className="po-kicker">
                {lang === "ru"
                  ? "Связь с маршрутом запуска"
                  : "Link to launch route"}
              </p>
              <div className="po-detail__links">
                {relatedLaunch.map((step) => (
                  <Link
                    key={step.id}
                    href={`/project-office/launch/${step.id}/`}
                  >
                    {step.n} · {t(step.title)}
                  </Link>
                ))}
              </div>
            </div>
            <div className="po-detail__links po-detail__links--stack">
              <Link href="/project-office/#authority" className="po-detail__all">
                {lang === "ru" ? "Все полномочия" : "All authority items"} →
              </Link>
              <Link href="/project-office/" className="po-detail__all">
                {lang === "ru"
                  ? "Все материалы проектного офиса"
                  : "All project office materials"}{" "}
                →
              </Link>
            </div>
          </FadeUp>

          <FadeUp className="po-detail__siblings" delay={0.07}>
            <p className="po-kicker">
              {lang === "ru" ? "Периметр" : "Perimeter"}
            </p>
            <div className="po-detail__links">
              {authorityItems.map((entry) => (
                <Link
                  key={entry.id}
                  href={`/project-office/authority/${entry.id}/`}
                  aria-current={entry.id === item.id ? "page" : undefined}
                >
                  {entry.n} · {t(entry.title)}
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
