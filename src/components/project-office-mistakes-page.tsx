"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import { mistakesContent } from "@/lib/project-office-content";

export function ProjectOfficeMistakesPage() {
  const { t, lang } = useI18n();
  const c = mistakesContent;

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
                {lang === "ru" ? "Каталог ловушек" : "Pitfalls catalog"}
              </p>
              <h1 className="po-hero__title">{t(c.title)}</h1>
              <p className="po-hero__lead">{t(c.lead)}</p>
            </div>
          </FadeUp>

          <nav className="po-mistakes__toc" aria-label={lang === "ru" ? "Контуры" : "Contours"}>
            {c.groups.map((group) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.n} · {t(group.title)}
              </a>
            ))}
          </nav>

          {c.groups.map((group, index) => (
            <FadeUp
              key={group.id}
              className="po-block po-mistakes__group"
              id={group.id}
              delay={0.02 + index * 0.01}
            >
              <div className="po-block__head">
                <span className="po-num" aria-hidden>
                  {group.n}
                </span>
                <div>
                  <h2 className="po-h2">{t(group.title)}</h2>
                </div>
              </div>

              <div className="po-mistakes__table" role="table">
                <div className="po-mistakes__head" role="row">
                  <span role="columnheader">
                    {lang === "ru" ? "Ошибка" : "Mistake"}
                  </span>
                  <span role="columnheader">
                    {lang === "ru" ? "У кого" : "Who"}
                  </span>
                  <span role="columnheader">
                    {lang === "ru" ? "Почему плохо" : "Why it hurts"}
                  </span>
                  <span role="columnheader">
                    {lang === "ru" ? "Как правильно" : "Right move"}
                  </span>
                </div>
                {group.rows.map((row) => (
                  <div className="po-mistakes__row" role="row" key={row.id}>
                    <span className="po-mistakes__error" role="cell">
                      {t(row.error)}
                    </span>
                    <span className="po-mistakes__role" role="cell">
                      {t(row.role)}
                    </span>
                    <span className="po-mistakes__why" role="cell">
                      {t(row.why)}
                    </span>
                    <span className="po-mistakes__fix" role="cell">
                      {t(row.fix)}{" "}
                      <Link href={row.href} className="po-mistakes__link">
                        {t(row.linkLabel)} →
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          ))}

          <FadeUp className="po-detail__nav" delay={0.08}>
            <div>
              <p className="po-kicker">
                {lang === "ru" ? "К правилам и ориентирам" : "To rules and targets"}
              </p>
              <div className="po-detail__links">
                {c.footLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {t(link.label)}
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
