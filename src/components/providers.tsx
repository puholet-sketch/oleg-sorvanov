"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider, theme } from "antd";
import { I18nProvider } from "@/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: "#1668dc",
            colorInfo: "#1668dc",
            colorBgBase: "#141414",
            colorBgContainer: "#1f1f1f",
            colorBgElevated: "#1f1f1f",
            colorBorder: "#303030",
            colorBorderSecondary: "#303030",
            borderRadius: 8,
            fontFamily:
              "var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          },
          components: {
            Layout: {
              headerBg: "rgba(20, 20, 20, 0.85)",
              bodyBg: "#141414",
              footerBg: "#141414",
            },
            Menu: {
              darkItemBg: "transparent",
              darkItemSelectedBg: "rgba(22, 104, 220, 0.2)",
            },
            Card: {
              colorBgContainer: "#1f1f1f",
            },
          },
        }}
      >
        <App>
          <I18nProvider>{children}</I18nProvider>
        </App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
