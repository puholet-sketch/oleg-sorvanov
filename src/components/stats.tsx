"use client";

import { Card, Col, Row, Statistic } from "antd";
import { useI18n } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Stats() {
  const { t } = useI18n();

  return (
    <section style={{ borderTop: "1px solid #303030", borderBottom: "1px solid #303030" }}>
      <div className="section-wrap" style={{ paddingTop: 32, paddingBottom: 32 }}>
        <Row gutter={[16, 16]}>
          {site.stats.map((item) => (
            <Col xs={12} sm={8} md={4} key={item.value + t(item.label)}>
              <Card size="small" bordered styles={{ body: { padding: 16 } }}>
                <Statistic
                  title={t(item.label)}
                  value={item.value}
                  valueStyle={{ color: "#1668dc", fontWeight: 700 }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
