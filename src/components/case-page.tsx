"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useI18n } from "@/lib/i18n";

export type CaseBlock = {
  title: { ru: string; en: string };
  text?: { ru: string; en: string };
  items?: { ru: string; en: string }[];
};

export type CaseStat = {
  value: string;
  label: { ru: string; en: string };
};

type Props = {
  eyebrow: { ru: string; en: string };
  title: { ru: string; en: string };
  lead: { ru: string; en: string };
  stats?: CaseStat[];
  blocks: CaseBlock[];
};

export function CasePage({ eyebrow, title, lead, stats, blocks }: Props) {
  const { t, lang } = useI18n();

  return (
    <>
      <SiteHeader />
      <main className="bg-void">
        <div className="mx-auto max-w-[1080px] px-4 pb-12 pt-[max(4.75rem,7vh)] sm:px-6 md:px-8">
          <Link
            href="/#cases"
            className="text-sm text-muted transition hover:text-voltage"
          >
            ← {lang === "ru" ? "К кейсам" : "Back to cases"}
          </Link>

          <p className="card-label mt-5">{t(eyebrow)}</p>
          <h1 className="mt-2 max-w-4xl font-display text-2xl font-semibold tracking-tight text-mist sm:text-3xl">
            {t(title)}
          </h1>
          <p className="body-copy mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {t(lead)}
          </p>

          {stats?.length ? (
            <div className="mt-6 flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <div className="font-display text-2xl font-semibold text-voltage">{stat.value}</div>
                  <div className="mt-0.5 text-[0.65rem] uppercase tracking-wide text-[#737373]">
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-8 grid gap-3">
            {blocks.map((block) => (
              <section key={block.title.ru} className="glass-card p-4 sm:p-5">
                <h2 className="card-label">{t(block.title)}</h2>
                {block.text ? (
                  <p className="body-copy mt-2 text-sm leading-relaxed text-muted">{t(block.text)}</p>
                ) : null}
                {block.items?.length ? (
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {block.items.map((item) => (
                      <li
                        key={item.ru}
                        className="border-l-2 border-voltage/40 pl-3 text-sm leading-relaxed text-mist"
                      >
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/#contact" className="btn-orig btn-primary-orig">
              {lang === "ru" ? "Связаться" : "Contact"}
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
