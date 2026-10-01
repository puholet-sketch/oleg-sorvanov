"use client";

import Link from "next/link";
import { FadeUp } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useI18n } from "@/lib/i18n";
import { ProjectOfficeDorDod } from "@/components/project-office-dor-dod";
import { metricPages, type LayerPage } from "@/lib/project-office-content";

export function ProjectOfficeLayerPage({ layer }: { layer: LayerPage }) {
  const { t, lang } = useI18n();
  const sections = [
    { title: { ru: "Вход", en: "Input" }, items: layer.inputs, showRolesLink: false },
    { title: { ru: "Действие", en: "Action" }, items: layer.actions, showRolesLink: false },
    { title: { ru: "Выход", en: "Output" }, items: layer.outputs, showRolesLink: false },
    { title: { ru: "Роли", en: "Roles" }, items: layer.roles, showRolesLink: true },
    { title: { ru: "Ритм", en: "Cadence" }, items: layer.cadence, showRolesLink: false },
  ];
  const related = metricPages.filter((metric) => layer.relatedMetrics.includes(metric.id));

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
                {lang === "ru" ? `Слой ${layer.n}` : `Layer ${layer.n}`}
              </p>
              <h1 className="po-hero__title">{t(layer.title)}</h1>
              <p className="po-hero__lead">{t(layer.purpose)}</p>
            </div>
          </FadeUp>

          {layer.id === "artifacts" ? (
            <FadeUp className="po-detail__block" delay={0.03}>
              <ProjectOfficeDorDod mode="full" />
            </FadeUp>
          ) : null}

          <FadeUp className="po-detail__grid" delay={0.04}>
            {sections.map((section, index) => (
              <section className="po-detail__card" key={section.title.ru}>
                <p className="po-kicker">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="po-detail__title">{t(section.title)}</h2>
                <ul className="po-detail__list">
                  {section.items.map((item) => (
                    <li key={item.ru}>{t(item)}</li>
                  ))}
                </ul>
                {section.showRolesLink && layer.rolesLink ? (
                  <Link href={layer.rolesLink.href} className="po-glossary__more">
                    {t(layer.rolesLink.label)} →
                  </Link>
                ) : null}
              </section>
            ))}
          </FadeUp>

          <FadeUp className="po-detail__nav" delay={0.06}>
            <div>
              <p className="po-kicker">{lang === "ru" ? "Связь с ориентирами" : "Related targets"}</p>
              <div className="po-detail__links">
                {related.map((metric) => (
                  <Link key={metric.id} href={`/project-office/${metric.id}/`}>
                    {metric.value} · {t(metric.label)}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/project-office/" className="po-detail__all">
              {lang === "ru" ? "Все материалы проектного офиса" : "All project office materials"} →
            </Link>
          </FadeUp>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
