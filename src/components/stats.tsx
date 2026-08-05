"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Stats() {
  const { t } = useI18n();

  return (
    <section className="border-y border-[var(--ink)]/10 bg-[var(--fog)] px-6 py-10 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {site.stats.map((item, index) => (
          <motion.div
            key={item.value + index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] md:text-4xl">
              {item.value}
            </div>
            <div className="mt-1 text-sm text-[var(--ink)]/55">{t(item.label)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
