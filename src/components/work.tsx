"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Tag, Typography } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

const { Title, Paragraph, Text } = Typography;

export function Work() {
  const { t, lang } = useI18n();

  return (
    <section id="cases" style={{ background: "#0f0f0f" }}>
      <div className="section-wrap">
        <Text type="secondary" style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {lang === "ru" ? "Кейсы" : "Cases"}
        </Text>
        <Title level={2} style={{ color: "#fff", marginTop: 8 }}>
          {lang === "ru" ? "Продуктовый delivery и PMO" : "Product delivery and PMO"}
        </Title>
        <Paragraph style={{ color: "rgba(255,255,255,0.65)", maxWidth: 640 }}>
          {lang === "ru"
            ? "Портфель, стабилизация, аналитика и платформы страхового рынка."
            : "Portfolio, stabilization, analytics, and insurance-market platforms."}
        </Paragraph>

        <Row gutter={[16, 16]} style={{ marginTop: 8 }}>
          {site.cases.map((item) => {
            const href = "href" in item ? item.href : "#contact";
            const external = href.startsWith("http");
            return (
              <Col xs={24} md={12} key={item.title.ru}>
                <Card
                  hoverable
                  title={t(item.title)}
                  extra={<Tag color="blue">{t(item.meta)}</Tag>}
                  actions={[
                    <Button
                      key="open"
                      type="link"
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      icon={<ArrowRightOutlined />}
                    >
                      {"cta" in item && item.cta
                        ? t(item.cta)
                        : lang === "ru"
                          ? "Подробнее"
                          : "Details"}
                    </Button>,
                  ]}
                >
                  <Paragraph style={{ color: "rgba(255,255,255,0.7)", minHeight: 72 }}>
                    {t(item.summary)}
                  </Paragraph>
                  {"stats" in item && item.stats ? (
                    <Space size="large">
                      {item.stats.map((stat) => (
                        <div key={stat.value}>
                          <div style={{ color: "#1668dc", fontWeight: 700, fontSize: 20 }}>
                            {stat.value}
                          </div>
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {t(stat.label)}
                          </Text>
                        </div>
                      ))}
                    </Space>
                  ) : null}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
