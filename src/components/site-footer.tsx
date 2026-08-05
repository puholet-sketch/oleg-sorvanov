"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[var(--ink)]/10 bg-[var(--fog)] px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--ink)]/50 md:flex-row md:items-center md:justify-between">
        <p className="font-[family-name:var(--font-display)] tracking-[0.18em] text-[var(--ink)]">
          {site.brand}
        </p>
        <p>
          © {new Date().getFullYear()} · {t(site.fullName)}
        </p>
      </div>
    </footer>
  );
}
