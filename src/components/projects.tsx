"use client";

import { ExportOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

const { Title, Paragraph, Text, Link } = Typography;

export function Projects() {
  const { t, lang } = useI18n();

  return (
    <section id="projects" style={{ background: "#0f0f0f" }}>
      <div className="section-wrap">
        <Text type="secondary" style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {lang === "ru" ? "Личные проекты" : "Personal projects"}
        </Text>
        <Title level={2} style={{ color: "#fff", marginTop: 8 }}>
          {lang === "ru" ? "Публичные демо и сервисы" : "Public demos and services"}
        </Title>

        <Row gutter={[16, 16]} style={{ marginTop: 8 }}>
          {site.projects.map((project) => (
            <Col xs={24} sm={12} lg={6} key={project.title}>
              <Card
                hoverable
                title={project.title}
                extra={
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <ExportOutlined />
                  </a>
                }
                onClick={() => window.open(project.href, "_blank", "noopener,noreferrer")}
                style={{ height: "100%", cursor: "pointer" }}
              >
                <Paragraph style={{ color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>
                  {t(project.text)}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <Card
          style={{ marginTop: 16, borderColor: "#1668dc" }}
          title={site.coffee.title}
          extra={
            <Link href={site.coffee.href} target="_blank">
              coffee.friends →
            </Link>
          }
        >
          <Paragraph style={{ marginBottom: 0, color: "rgba(255,255,255,0.75)" }}>
            {t(site.coffee.text)}
          </Paragraph>
        </Card>

        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          {site.hobbies.map((hobby) => (
            <Col xs={24} sm={12} lg={6} key={hobby.title.ru}>
              <Card title={t(hobby.title)} size="small">
                <Paragraph style={{ color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
                  {t(hobby.text)}
                </Paragraph>
                {"href" in hobby && hobby.href ? (
                  <Link href={hobby.href} target="_blank">
                    {lang === "ru" ? "Открыть →" : "Open →"}
                  </Link>
                ) : null}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
