"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[#2a2a2a] bg-void px-4 py-5 sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-1.5 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-display font-semibold text-mist">
          Oleg <em className="not-italic text-voltage">Sorvanov</em>
        </p>
        <p>© {new Date().getFullYear()} · {t(site.fullName)}</p>
      </div>
    </footer>
  );
}
