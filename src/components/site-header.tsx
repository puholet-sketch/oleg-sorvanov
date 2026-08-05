"use client";

import { Button, Layout, Menu, Space, Typography } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

const { Header } = Layout;

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();

  const items = [
    { key: "about", label: <a href="#about">{t({ ru: "Обо мне", en: "About" })}</a> },
    { key: "cases", label: <a href="#cases">{t({ ru: "Кейсы", en: "Cases" })}</a> },
    { key: "career", label: <a href="#career">{t({ ru: "Карьера", en: "Career" })}</a> },
    {
      key: "projects",
      label: <a href="#projects">{t({ ru: "Проекты", en: "Projects" })}</a>,
    },
    {
      key: "contact",
      label: <a href="#contact">{t({ ru: "Контакты", en: "Contact" })}</a>,
    },
  ];

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 16,
        paddingInline: 24,
        borderBottom: "1px solid #303030",
        backdropFilter: "blur(12px)",
      }}
    >
      <Typography.Text strong style={{ color: "#fff", letterSpacing: "0.12em" }}>
        <a href="#top">{site.brand}</a>
      </Typography.Text>

      <div className="nav-desktop" style={{ flex: 1, minWidth: 0 }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          items={items}
          style={{ background: "transparent", border: "none" }}
        />
      </div>

      <Space>
        <Button.Group>
          <Button
            type={lang === "ru" ? "primary" : "default"}
            size="small"
            onClick={() => setLang("ru")}
          >
            RU
          </Button>
          <Button
            type={lang === "en" ? "primary" : "default"}
            size="small"
            onClick={() => setLang("en")}
          >
            EN
          </Button>
        </Button.Group>
        <Button type="primary" href={`mailto:${site.email}`} className="cta-desktop">
          {lang === "ru" ? "Написать" : "Email"}
        </Button>
      </Space>
    </Header>
  );
}
