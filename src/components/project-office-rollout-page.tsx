"use client";

import Link from "next/link";
import { useId, useMemo, useState, type CSSProperties } from "react";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import { rolloutContent, type RolloutPhase } from "@/lib/project-office-content";

function weekList(total: number) {
  return Array.from({ length: total }, (_, i) => i + 1);
}

function isActiveWeek(phase: RolloutPhase, week: number) {
  return week >= phase.weekStart && week <= phase.weekEnd;
}

export function ProjectOfficeRolloutPage() {
  const { t, lang } = useI18n();
  const c = rolloutContent;
  const weeks = useMemo(() => weekList(c.totalWeeks), [c.totalWeeks]);
  const [activeId, setActiveId] = useState(c.phases[0]?.id ?? "");
  const hatchId = useId().replace(/:/g, "");
  const active = c.phases.find((p) => p.id === activeId) ?? c.phases[0];

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
            <p className="po-gantt__hint">{t(c.chartHint)}</p>

            <div className="po-gantt" role="region" aria-label={t(c.title)}>
              <div className="po-gantt__scroll">
                <div
                  className="po-gantt__matrix"
                  style={{ "--po-gantt-cols": c.totalWeeks } as CSSProperties}
                >
                  <div className="po-gantt__corner" aria-hidden>
                    <span>{t(c.axisPhases)}</span>
                    <span>/</span>
                    <span>{t(c.axisWeeks)}</span>
                  </div>
                  <div className="po-gantt__weeks" aria-hidden>
                    {weeks.map((week) => (
                      <span key={`h-${week}`} className="po-gantt__weekhead">
                        {week}
                      </span>
                    ))}
                  </div>

                  {c.phases.map((phase) => {
                    const selected = phase.id === active?.id;
                    return (
                      <div
                        key={phase.id}
                        className={`po-gantt__row${selected ? " is-active" : ""}`}
                      >
                        <button
                          type="button"
                          className="po-gantt__label"
                          aria-pressed={selected}
                          onClick={() => setActiveId(phase.id)}
                        >
                          <span className="po-gantt__n">{phase.n}</span>
                          <span className="po-gantt__name">{t(phase.title)}</span>
                          <span className="po-gantt__span">{t(phase.weeks)}</span>
                        </button>

                        <button
                          type="button"
                          className="po-gantt__track"
                          aria-label={`${t(phase.title)} · ${t(phase.weeks)}`}
                          aria-pressed={selected}
                          onClick={() => setActiveId(phase.id)}
                        >
                          <span
                            className="po-gantt__bar"
                            style={{
                              gridColumn: `${phase.weekStart} / ${phase.weekEnd + 1}`,
                            }}
                            aria-hidden
                          />
                          {weeks.map((week) => {
                            const on = isActiveWeek(phase, week);
                            const patternId = `${hatchId}-${phase.id}-${week}`;
                            return (
                              <span
                                key={`${phase.id}-${week}`}
                                className={`po-gantt__dot${on ? " is-on" : ""}`}
                                style={{ gridColumn: week }}
                                aria-hidden
                              >
                                {on ? (
                                  <svg viewBox="0 0 20 20" className="po-gantt__dot-svg">
                                    <defs>
                                      <pattern
                                        id={patternId}
                                        width="4"
                                        height="4"
                                        patternUnits="userSpaceOnUse"
                                        patternTransform="rotate(45)"
                                      >
                                        <rect width="4" height="4" fill="#f0c419" />
                                        <line
                                          x1="0"
                                          y1="0"
                                          x2="0"
                                          y2="4"
                                          stroke="#1a1400"
                                          strokeWidth="1.6"
                                          strokeOpacity="0.5"
                                        />
                                      </pattern>
                                    </defs>
                                    <circle
                                      cx="10"
                                      cy="10"
                                      r="8"
                                      fill={`url(#${patternId})`}
                                      stroke="#f0c419"
                                      strokeWidth="1.5"
                                    />
                                  </svg>
                                ) : (
                                  <span className="po-gantt__dot-empty" />
                                )}
                              </span>
                            );
                          })}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {active ? (
                <article className="po-gantt__detail" aria-live="polite">
                  <div className="po-gantt__detail-meta">
                    <p className="po-kicker">{active.n}</p>
                    <span className="po-gantt__detail-weeks">{t(active.weeks)}</span>
                  </div>
                  <h2 className="po-gantt__detail-title">{t(active.title)}</h2>
                  <p className="po-gantt__detail-lead">{t(active.close)}</p>
                  <ul className="po-rollout__links">
                    {active.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{t(link.label)}</Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </div>

            <ol className="po-gantt-mobile" aria-label={t(c.title)}>
              {c.phases.map((phase) => {
                const selected = phase.id === active?.id;
                const startPct = ((phase.weekStart - 1) / c.totalWeeks) * 100;
                const widthPct =
                  ((phase.weekEnd - phase.weekStart + 1) / c.totalWeeks) * 100;
                return (
                  <li key={`m-${phase.id}`}>
                    <div
                      className={`po-gantt-mobile__card${selected ? " is-active" : ""}`}
                    >
                      <button
                        type="button"
                        className="po-gantt-mobile__toggle"
                        aria-pressed={selected}
                        onClick={() => setActiveId(phase.id)}
                      >
                        <div className="po-gantt-mobile__head">
                          <span className="po-gantt__n">{phase.n}</span>
                          <strong>{t(phase.title)}</strong>
                          <span className="po-gantt__span">{t(phase.weeks)}</span>
                        </div>
                        <div className="po-gantt-mobile__rail" aria-hidden>
                          <span
                            className="po-gantt-mobile__fill"
                            style={{ left: `${startPct}%`, width: `${widthPct}%` }}
                          />
                        </div>
                      </button>
                      {selected ? (
                        <div className="po-gantt-mobile__body">
                          <p className="po-gantt-mobile__lead">{t(phase.close)}</p>
                          <ul className="po-rollout__links">
                            {phase.links.map((link) => (
                              <li key={link.href}>
                                <Link href={link.href}>{t(link.label)}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </li>
                );
              })}
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
