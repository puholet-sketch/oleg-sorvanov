"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: { ru: "Обо мне", en: "About" } },
    { href: "#career", label: { ru: "Карьера", en: "Career" } },
    { href: "#cases", label: { ru: "Кейсы", en: "Cases" } },
    { href: "#projects", label: { ru: "Проекты", en: "Projects" } },
    { href: "#location", label: { ru: "Локация", en: "Location" } },
    { href: "#contact", label: { ru: "Контакты", en: "Contact" } },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#2a2a2a] backdrop-blur-xl ${
        scrolled ? "bg-[rgba(10,10,10,0.96)]" : "bg-[rgba(10,10,10,0.92)]"
      }`}
    >
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-8">
        <a href="#top" className="font-display text-sm font-semibold text-mist">
          Oleg <em className="not-italic text-voltage">Sorvanov</em>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-[0.75rem] font-medium text-muted transition hover:bg-[#1c1c1c] hover:text-mist"
            >
              {t(link.label)}
            </a>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="rounded-md px-2.5 py-1.5 text-[0.75rem] font-medium text-muted transition hover:bg-[#1c1c1c] hover:text-mist"
            >
              {lang === "ru" ? "Ещё" : "More"}
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-1 min-w-[9rem] rounded-md border border-[#2a2a2a] bg-[#141414] py-1 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <a href="#coffee" className="block px-3 py-1.5 text-[0.75rem] text-muted hover:bg-[#1c1c1c] hover:text-mist">
                Coffee
              </a>
              <a href="#life" className="block px-3 py-1.5 text-[0.75rem] text-muted hover:bg-[#1c1c1c] hover:text-mist">
                {lang === "ru" ? "Хобби" : "Hobbies"}
              </a>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-[6px] border border-[#2a2a2a]">
            {(["ru", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`px-2.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide transition ${
                  lang === code
                    ? "bg-voltage text-[#0a0a0a]"
                    : "text-muted hover:text-mist"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <a href={`mailto:${site.email}`} className="btn-orig btn-primary-orig hidden xl:inline-flex">
            {lang === "ru" ? "Написать" : "Email"}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
