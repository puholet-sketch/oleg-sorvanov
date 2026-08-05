"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="footer footer-horizontal footer-center border-t border-base-300 bg-base-200 p-8 text-base-content">
      <aside>
        <p className="tracking-[0.18em] font-semibold">{site.brand}</p>
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} · {t(site.fullName)}
        </p>
      </aside>
    </footer>
  );
}
