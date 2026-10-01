"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import {
  checklistCadenceLabel,
  rolloutChecklistsContent,
} from "@/lib/project-office-content";

const STORAGE_KEY = "po-rollout-checks-v1";

type CheckState = Record<string, boolean>;

function readStored(): CheckState {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as CheckState;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function ProjectOfficeChecklistsPage() {
  const { t, lang } = useI18n();
  const c = rolloutChecklistsContent;
  const [checks, setChecks] = useState<CheckState>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setChecks(readStored());
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checks));
  }, [checks, ready]);

  const allIds = useMemo(
    () => c.phases.flatMap((phase) => phase.items.map((item) => item.id)),
    [c.phases],
  );

  const doneCount = allIds.filter((id) => checks[id]).length;
  const totalCount = allIds.length;

  const toggle = useCallback((id: string) => {
    setChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const reset = useCallback(() => {
    setChecks({});
  }, []);

  return (
    <div className="project-office-theme po-metric min-h-screen">
      <SiteHeader />
      <main>
        <div className="po-sheet po-metric__sheet mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
          <Link href="/project-office/rollout/" className="po-back">
            ← {t(c.roadmapCta)}
          </Link>

          <FadeUp className="po-hero po-detail__hero mt-3">
            <div className="po-hero__body">
              <p className="po-kicker">{t(c.kicker)}</p>
              <h1 className="po-hero__title">{t(c.title)}</h1>
              <p className="po-hero__lead">{t(c.lead)}</p>
              <div className="po-check__summary">
                <p className="po-check__progress">
                  <span>{t(c.progressLabel)}:</span>
                  <span className="po-count">
                    {doneCount}/{totalCount}
                  </span>
                </p>
                <button type="button" className="po-check__reset" onClick={reset}>
                  {t(c.resetLabel)}
                </button>
              </div>
            </div>
          </FadeUp>

          <div className="po-check__phases">
            {c.phases.map((phase, phaseIndex) => {
              const phaseDone = phase.items.filter((item) => checks[item.id]).length;
              return (
                <FadeUp
                  key={phase.id}
                  className="po-check__phase"
                  delay={0.02 + phaseIndex * 0.02}
                >
                  <div className="po-check__phase-head">
                    <div>
                      <p className="po-kicker">
                        {phase.n} · {t(phase.weeks)}
                      </p>
                      <h2 className="po-h2">{t(phase.title)}</h2>
                    </div>
                    <div className="po-check__phase-meta">
                      <span className="po-count po-check__phase-count">
                        {phaseDone}/{phase.items.length}
                      </span>
                      <Link href={phase.launchHref} className="po-glossary__more">
                        {lang === "ru" ? "Шаг запуска" : "Launch step"} →
                      </Link>
                    </div>
                  </div>

                  <ul className="po-check__list">
                    {phase.items.map((item) => {
                      const done = Boolean(checks[item.id]);
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            className={
                              done
                                ? "po-check__item is-done"
                                : "po-check__item"
                            }
                            onClick={() => toggle(item.id)}
                            aria-pressed={done}
                          >
                            <span className="po-check__box" aria-hidden>
                              {done ? "✓" : ""}
                            </span>
                            <span className="po-check__body">
                              <span className="po-check__label">{t(item.label)}</span>
                              <span className="po-check__chips">
                                <span className="po-check__chip po-check__chip--owner">
                                  {t(c.ownerLabel)}: {t(item.owner)}
                                </span>
                                <span className="po-check__chips-secondary">
                                  <span className="po-check__chip po-check__chip--muted">
                                    {t(c.cadenceLabel)}:{" "}
                                    {t(checklistCadenceLabel[item.cadence])}
                                  </span>
                                  <span
                                    className={
                                      done
                                        ? "po-check__chip po-check__chip--done"
                                        : "po-check__chip po-check__chip--todo"
                                    }
                                  >
                                    {done ? t(c.doneLabel) : t(c.todoLabel)}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp className="po-detail__nav" delay={0.08}>
            <div className="po-detail__links">
              <Link href={c.roadmapHref}>{t(c.roadmapCta)} →</Link>
              <Link href="/project-office/how/team/">
                {lang === "ru" ? "Структура команд" : "Team structure"}
              </Link>
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
