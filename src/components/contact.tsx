"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Contact() {
  const { lang } = useI18n();

  const items = [
    {
      label: "Email",
      href: `mailto:${site.email}`,
      value: site.email,
    },
    {
      label: lang === "ru" ? "тел." : "Phone",
      href: site.phoneHref,
      value: site.phone,
    },
    {
      label: "Telegram",
      href: site.telegram,
      value: site.telegramLabel,
      external: true,
    },
    {
      label: "MAX",
      href: site.maxUrl,
      value: lang === "ru" ? "написать в MAX" : "Message on MAX",
      external: true,
    },
    {
      label: "CV",
      href: "cv.html",
      value: "2026 →",
    },
    {
      label: "HH",
      href: "hh-otkliki/",
      value: lang === "ru" ? "отклики →" : "responses →",
    },
  ];

  return (
    <section id="contact" className="bg-void">
      <div className="mx-auto max-w-[1080px] px-4 py-8 sm:px-6 md:px-8 md:py-9">
        <FadeUp>
          <h2 className="section-heading">{lang === "ru" ? "Контакты" : "Contact"}</h2>
          <p className="mt-1 text-sm text-muted">
            {lang === "ru" ? "Рекомендации по запросу" : "References on request"}
          </p>
        </FadeUp>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,1.45fr)_repeat(5,minmax(0,1fr))]">
          {items.map((item) => {
            const isEmail = item.label === "Email";
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="glass-card block min-w-0 p-3.5"
                title={isEmail ? item.value : undefined}
              >
                <div className="card-label">{item.label}</div>
                <div
                  className={`mt-1.5 text-mist ${
                    isEmail
                      ? "text-[0.78rem] leading-snug break-all"
                      : "text-sm"
                  }`}
                >
                  {item.value}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
