"use client";

import { motion } from "framer-motion";
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
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 md:px-10">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-[0.22em] text-mist mix-blend-difference md:text-base"
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-6 rounded-full border border-white/15 bg-void/40 px-5 py-2 backdrop-blur-xl lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist/80 transition hover:text-voltage"
            >
              {t(link.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-white/15 bg-void/40 p-0.5 backdrop-blur-xl">
            {(["ru", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`rounded-full px-2.5 py-1 text-xs uppercase tracking-wide transition ${
                  lang === code
                    ? "bg-voltage text-void"
                    : "text-mist/70 hover:text-mist"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-full bg-voltage px-4 py-2 text-xs font-semibold tracking-wide text-void transition hover:bg-white sm:inline-flex"
          >
            {lang === "ru" ? "Написать" : "Email"}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
