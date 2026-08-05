"use client";

import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Stats() {
  const { t } = useI18n();

  return (
    <section className="border-y border-base-300 bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="stats stats-vertical w-full shadow-sm lg:stats-horizontal">
          {site.stats.map((item) => (
            <div className="stat" key={item.value + t(item.label)}>
              <div className="stat-title">{t(item.label)}</div>
              <div className="stat-value text-primary text-3xl md:text-4xl">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
