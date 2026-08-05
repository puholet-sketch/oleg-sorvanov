"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="projects" className="bg-base-200">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {lang === "ru" ? "Личные проекты" : "Personal projects"}
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {lang === "ru" ? "Публичные демо и сервисы" : "Public demos and services"}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card border border-base-300 bg-base-100 shadow-sm transition hover:border-primary"
            >
              <div className="card-body">
                <h3 className="card-title text-lg">{project.title}</h3>
                <p className="text-sm text-base-content/70">{t(project.text)}</p>
              </div>
            </a>
          ))}
        </div>

        <a
          href={site.coffee.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card mt-4 border border-primary/40 bg-base-100 shadow-sm"
        >
          <div className="card-body md:flex-row md:items-center md:justify-between">
            <div>
              <div className="badge badge-primary badge-outline">Business</div>
              <h3 className="mt-2 text-2xl font-bold">{site.coffee.title}</h3>
              <p className="mt-2 max-w-2xl text-base-content/70">{t(site.coffee.text)}</p>
            </div>
            <span className="btn btn-primary btn-sm">coffee.friends →</span>
          </div>
        </a>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.hobbies.map((hobby) => (
            <div key={hobby.title.ru} className="card border border-base-300 bg-base-100">
              <div className="card-body">
                <h3 className="card-title text-base">{t(hobby.title)}</h3>
                <p className="text-sm text-base-content/70">{t(hobby.text)}</p>
                {"href" in hobby && hobby.href ? (
                  <a
                    href={hobby.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary text-sm"
                  >
                    {lang === "ru" ? "Открыть →" : "Open →"}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
