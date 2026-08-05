"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[var(--line)] bg-mist px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-display tracking-[0.2em] text-ink">{site.brand}</p>
        <p>
          © {new Date().getFullYear()} · {t(site.fullName)} · Next.js · Motion
        </p>
      </div>
    </footer>
  );
}
