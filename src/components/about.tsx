"use client";

import { Card, Col, Row, Typography } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

const { Title, Paragraph, Text } = Typography;

export function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about">
      <div className="section-wrap">
        <Text type="secondary" style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {lang === "ru" ? "Обо мне" : "About"}
        </Text>
        <Title level={2} style={{ color: "#fff", marginTop: 8 }}>
          {t(site.about.intro)}
        </Title>
        <Paragraph style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, maxWidth: 820 }}>
          {t(site.about.focus)}
        </Paragraph>

        <Row gutter={[16, 16]} style={{ marginTop: 28 }}>
          <Col xs={24} md={8}>
            <Card title={lang === "ru" ? "Образование" : "Education"} bordered>
              <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,0.75)" }}>
                {site.about.education[lang].map((item) => (
                  <li key={item} style={{ marginBottom: 8 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title={lang === "ru" ? "Проектный офис" : "Project office"} bordered>
              <Paragraph style={{ margin: 0, color: "rgba(255,255,255,0.75)" }}>
                {t(site.about.office)}
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card title={lang === "ru" ? "Стек" : "Stack"} bordered>
              <Paragraph style={{ margin: 0, color: "rgba(255,255,255,0.75)" }}>
                {t(site.about.stack)}
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
