"use client";

import { FadeUp } from "@/components/motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Stats() {
  const { t } = useI18n();

  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-14 md:grid-cols-3 md:px-10 lg:grid-cols-6">
        {site.stats.map((item, index) => (
          <FadeUp key={item.value + index} delay={index * 0.05}>
            <div className="group">
              <div className="font-display text-3xl font-extrabold tracking-tight text-ink transition group-hover:text-[color:var(--voltage-dim)] md:text-4xl">
                {item.value}
              </div>
              <div className="mt-1 text-sm text-muted">{t(item.label)}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
