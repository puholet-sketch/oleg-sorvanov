"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative min-h-[88vh] overflow-hidden bg-base-200">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt={t(site.fullName)}
          fill
          priority
          className="object-cover object-[center_18%] opacity-50"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl items-end px-6 pb-16 pt-28 md:px-10">
        <div className="max-w-3xl">
          <a
            href={site.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="badge badge-primary badge-outline mb-4"
          >
            {t(site.role)}
          </a>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {t(site.fullName)}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-base-content/75 md:text-xl">
            <span className="font-semibold text-base-content">{t(site.headline)}.</span>{" "}
            {t(site.tagline)}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cases" className="btn btn-primary">
              {lang === "ru" ? "Смотреть кейсы" : "View cases"}
            </a>
            <a href="cv.html" className="btn btn-outline">
              {lang === "ru" ? "Резюме" : "CV"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
