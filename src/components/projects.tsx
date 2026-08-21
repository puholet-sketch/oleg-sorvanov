"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="projects" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <FadeUp>
          <h2 className="section-heading">{lang === "ru" ? "Личные проекты" : "Personal projects"}</h2>
          <p className="mt-1 text-sm text-muted">
            {lang === "ru"
              ? "Публичные демо · PlanFact и статус — в кейсах выше"
              : "Public demos · PlanFact and status cases are above"}
          </p>
        </FadeUp>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {site.projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.02}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex h-full min-w-0 flex-col p-3.5"
              >
                <h3 className="card-label">{project.title}</h3>
                <p className="body-copy mt-2 text-sm leading-relaxed text-muted">{t(project.text)}</p>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
