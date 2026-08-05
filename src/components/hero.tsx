"use client";

import Image from "next/image";
import { ArrowDownOutlined, FileTextOutlined } from "@ant-design/icons";
import { Button, Space, Tag, Typography } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

const { Title, Paragraph } = Typography;

export function Hero() {
  const { t, lang } = useI18n();

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#141414",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/hero.jpg"
          alt={t(site.fullName)}
          fill
          priority
          className="object-cover object-[center_18%] opacity-70"
          sizes="100vw"
        />
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
      </div>

      <div className="section-wrap" style={{ position: "relative", zIndex: 1, paddingBottom: 72 }}>
        <Tag color="processing" style={{ marginBottom: 16 }}>
          <a href={site.companyUrl} target="_blank" rel="noopener noreferrer">
            {t(site.role)}
          </a>
        </Tag>
        <Title
          level={1}
          style={{
            color: "#fff",
            margin: 0,
            fontSize: "clamp(2.4rem, 7vw, 4.4rem)",
            lineHeight: 1.1,
            maxWidth: 820,
          }}
        >
          {t(site.fullName)}
        </Title>
        <Paragraph
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 18,
            maxWidth: 720,
            marginTop: 20,
            marginBottom: 28,
          }}
        >
          <strong style={{ color: "#fff" }}>{t(site.headline)}.</strong> {t(site.tagline)}
        </Paragraph>
        <Space wrap size="middle">
          <Button type="primary" size="large" href="#cases" icon={<ArrowDownOutlined />}>
            {lang === "ru" ? "Смотреть кейсы" : "View cases"}
          </Button>
          <Button size="large" href="cv.html" icon={<FileTextOutlined />}>
            {lang === "ru" ? "Резюме" : "CV"}
          </Button>
        </Space>
      </div>
    </section>
  );
}
