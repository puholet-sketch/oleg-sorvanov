"use client";

import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

const { Title, Paragraph, Text } = Typography;

export function Contact() {
  const { lang } = useI18n();

  return (
    <section id="contact">
      <div className="section-wrap">
        <Text type="secondary" style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}>
          {lang === "ru" ? "Контакты" : "Contact"}
        </Text>
        <Title level={2} style={{ color: "#fff", marginTop: 8 }}>
          {lang === "ru" ? "Рекомендации по запросу" : "References on request"}
        </Title>

        <Row gutter={[16, 16]} style={{ marginTop: 8 }}>
          <Col xs={24} lg={14}>
            <Card>
              <Paragraph style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>
                <EnvironmentOutlined style={{ marginRight: 8, color: "#1668dc" }} />
                {lang === "ru" ? site.location.ru : site.location.en}.{" "}
                {lang === "ru" ? site.locationNote.ru : site.locationNote.en}
              </Paragraph>
              <Space wrap size="middle" style={{ marginTop: 8 }}>
                <Button type="primary" icon={<MailOutlined />} href={`mailto:${site.email}`}>
                  {site.email}
                </Button>
                <Button icon={<PhoneOutlined />} href={site.phoneHref}>
                  {site.phone}
                </Button>
                <Button
                  icon={<SendOutlined />}
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.telegramLabel}
                </Button>
                <Button href="cv.html">{lang === "ru" ? "Резюме / CV" : "CV"}</Button>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={10}>
            <Space direction="vertical" style={{ width: "100%" }} size="middle">
              <Button block size="large" href={site.maps.yandex} target="_blank">
                {lang === "ru" ? "Яндекс.Карты" : "Yandex Maps"}
              </Button>
              <Button block size="large" href={site.maps.google} target="_blank">
                Google Maps
              </Button>
              <Button block size="large" href={site.maxUrl} target="_blank">
                MAX
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </section>
  );
}
