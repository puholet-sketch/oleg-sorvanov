"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();

  const links = [
    { href: "#about", label: { ru: "Обо мне", en: "About" } },
    { href: "#cases", label: { ru: "Кейсы", en: "Cases" } },
    { href: "#career", label: { ru: "Карьера", en: "Career" } },
    { href: "#projects", label: { ru: "Проекты", en: "Projects" } },
    { href: "#contact", label: { ru: "Контакты", en: "Contact" } },
  ];

  return (
    <div className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/90 px-4 backdrop-blur md:px-8">
      <div className="navbar-start">
        <a href="#top" className="btn btn-ghost text-lg tracking-[0.18em]">
          {site.brand}
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{t(link.label)}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <div className="join">
          <button
            type="button"
            className={`btn btn-sm join-item ${lang === "ru" ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setLang("ru")}
          >
            RU
          </button>
          <button
            type="button"
            className={`btn btn-sm join-item ${lang === "en" ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
        <a href={`mailto:${site.email}`} className="btn btn-primary btn-sm hidden sm:inline-flex">
          {lang === "ru" ? "Написать" : "Email"}
        </a>
      </div>
    </div>
  );
}
