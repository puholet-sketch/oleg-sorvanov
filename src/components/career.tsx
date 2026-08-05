"use client";

import { Timeline, Typography } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

const { Title, Paragraph, Text } = Typography;

export function Career() {
  const { t, lang } = useI18n();

  return (
    <section id="career">
      <div className="section-wrap">
        <Text type="secondary" style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {lang === "ru" ? "Карьера" : "Career"}
        </Text>
        <Title level={2} style={{ color: "#fff", marginTop: 8, marginBottom: 32 }}>
          {lang === "ru" ? "Профессиональный путь" : "Professional path"}
        </Title>
        <Timeline
          items={site.career.map((item) => ({
            color: "blue",
            children: (
              <div>
                <Text type="secondary">{t(item.period)}</Text>
                <Title level={4} style={{ color: "#fff", margin: "4px 0 8px" }}>
                  {t(item.title)}
                </Title>
                <Paragraph style={{ color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>
                  {t(item.text)}
                </Paragraph>
              </div>
            ),
          }))}
        />
      </div>
    </section>
  );
}
