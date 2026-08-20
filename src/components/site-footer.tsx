"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[var(--line)] bg-mist px-4 py-5 sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-1.5 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-display tracking-[0.2em] text-ink">{site.brand}</p>
        <p>
          © {new Date().getFullYear()} · {t(site.fullName)}
        </p>
      </div>
    </footer>
  );
}
