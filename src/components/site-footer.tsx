"use client";

import { Layout, Typography } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

const { Footer } = Layout;

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <Footer
      style={{
        borderTop: "1px solid #303030",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 8,
        color: "rgba(255,255,255,0.45)",
      }}
    >
      <Typography.Text style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.14em" }}>
        {site.brand}
      </Typography.Text>
      <span>
        © {new Date().getFullYear()} · {t(site.fullName)}
      </span>
    </Footer>
  );
}
