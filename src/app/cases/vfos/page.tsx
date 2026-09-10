import type { Metadata } from "next";
import { CasePage } from "@/components/case-page";

export const metadata: Metadata = {
  title: "VFOS — виртуальный фронт-офис · Олег Сорванов",
  description:
    "VFOS: платформа партнёрских продаж страховых продуктов для РГС — портал, API, сопровождение и развитие.",
};

export default function VfosCasePage() {
  return (
    <CasePage
      eyebrow={{
        ru: "Кейс · VFOS · партнёрский канал · Росгосстрах / БПБ",
        en: "Case · VFOS · partner channel · Rosgosstrakh / BPB",
      }}
      title={{
        ru: "VFOS · виртуальный фронт-офис продаж",
        en: "VFOS · virtual front office of sales",
      }}
      lead={{
        ru: "Платформа автоматизации продажи страховых продуктов партнёрами заказчика через интернет: браузерный портал и Product API. Virtu Systems поддерживает и развивает систему для ПАО СК «Росгосстрах» (блок партнёрского бизнеса).",
        en: "Platform for partner insurance sales over the internet: browser portal and Product API. Virtu Systems supports and evolves the system for Rosgosstrakh (partner business block).",
      }}
      stats={[
        { value: "UI+API", label: { ru: "два контура продаж", en: "two sales contours" } },
        { value: "БПБ", label: { ru: "заказчик / канал", en: "client / channel" } },
        { value: "24/7", label: { ru: "сопровождение", en: "support" } },
      ]}
      blocks={[
        {
          title: { ru: "Назначение", en: "Purpose" },
          text: {
            ru: "На рабочем месте продавца партнёра достаточно браузера. Система обеспечивает расчёт, оформление, печать и обмен с учётными системами РГС. Крупные партнёры оформляют из своего ПО через API VFOS без обязательного входа в экраны портала.",
            en: "A partner seller only needs a browser. The system covers rating, issuance, print and exchange with Rosgosstrakh back-office systems. Large partners issue from their own software via VFOS API without mandatory portal screens.",
          },
        },
        {
          title: { ru: "Клиент и роль Virtu", en: "Client and Virtu role" },
          items: [
            { ru: "Заказчик — ПАО СК «Росгосстрах», БПБ (блок партнёрского бизнеса)", en: "Client — Rosgosstrakh, partner business block (BPB)" },
            { ru: "Virtu Systems — разработчик и сопровождение платформы", en: "Virtu Systems — platform vendor and support" },
            { ru: "Покрытие: БПБ ЦО и региональная сеть, БМС, БКС", en: "Coverage: BPB HQ and regional network, BMS, BKS" },
            { ru: "Куратор РГС сопровождает пул партнёров; IT-контур — на стороне Virtu", en: "RGS curator owns partner pool; IT contour owned by Virtu" },
          ],
        },
        {
          title: { ru: "Возможности", en: "Capabilities" },
          items: [
            { ru: "Оформление, выпуск и печать полисов (БСО / бумага / PDF) + пакет документов", en: "Issue and print policies (strict forms / paper / PDF) + document pack" },
            { ru: "Автоматический расчёт премии, управление тарифами и продуктами", en: "Automatic premium calc, tariff and product management" },
            { ru: "Портал продаж: формы, автозаполнение, поиск договоров, аннулирование, массовая печать", en: "Sales portal: forms, autofill, policy search, void, bulk print" },
            { ru: "Product API для банков, автосалонов, сетей, МФО", en: "Product API for banks, dealers, retail chains, MFOs" },
            { ru: "Выгрузка в учёт (UXML / ЕКИС и смежные контуры)", en: "Export to accounting (UXML / EKIS and related)" },
            { ru: "Мониторинг продаж и аномалий; отчёты и бордеро", en: "Sales monitoring and anomalies; reports and bordereaux" },
            { ru: "Интернет-эквайринг, электронная квитанция, загрузчик Excel → VFOS → ЕКИС", en: "Acquiring, e-receipt, Excel → VFOS → EKIS loader" },
            { ru: "Админ-панель: оргструктура, пользователи, продукты, тарифы, справочники", en: "Admin: org structure, users, products, tariffs, directories" },
          ],
        },
        {
          title: { ru: "Продуктовая линейка", en: "Product line" },
          text: {
            ru: "ОСАГО, КАСКО, ДМС, НС, имущество и коробки, ВЗР, GAP, продлённая гарантия, мобильная защита, автофорсаж и банковские продукты партнёрского канала.",
            en: "MTPL, motor hull, VHI, PA, property packs, travel, GAP, extended warranty, mobile protection, dealer finance and bank partner products.",
          },
        },
        {
          title: { ru: "Каналы и сценарии", en: "Channels and scenarios" },
          items: [
            { ru: "Автосалоны и дилеры — ОСАГО с кроссом в КАСКО на точке", en: "Dealers — MTPL with cross-sell to hull on site" },
            { ru: "Салоны связи и федеральные сети — коробки / гарантия", en: "Telecom / retail chains — packs / warranty" },
            { ru: "Банки и МФО — портал или оформление из своего ПО по API", en: "Banks and MFOs — portal or native software via API" },
            { ru: "Офисы РГС — единый фронт партнёрских продаж", en: "RGS offices — unified partner sales front" },
          ],
        },
        {
          title: { ru: "Архитектура", en: "Architecture" },
          text: {
            ru: "Клиент (браузер) → FrontOffice (ASP.NET WebForms, IIS) → бизнес-модули продуктов и интеграций → сервисы .NET Core → MS SQL (dbRGS) + Redis. Админ-панель — отдельное PHP/Yii2 приложение. Auth: Keycloak / Kerberos/LDAP, роли через группы домена. Масштабирование: NLB веб, кластер SQL с репликацией на чтение.",
            en: "Browser → FrontOffice (ASP.NET WebForms, IIS) → product/integration modules → .NET Core services → MS SQL (dbRGS) + Redis. Admin is a separate PHP/Yii2 app. Auth: Keycloak / Kerberos/LDAP via domain groups. Scale: web NLB, SQL cluster with read replicas.",
          },
        },
        {
          title: { ru: "Интеграции", en: "Integrations" },
          items: [
            { ru: "ЕКИС, КИАС, CDI, GWPC, UFO, FileStore", en: "EKIS, KIAS, CDI, GWPC, UFO, FileStore" },
            { ru: "СКК, ТКБ, Check_BSO и смежные контуры оплаты/бланков", en: "SKK, TKB, Check_BSO and related pay/form contours" },
            { ru: "Сервисы: SalesMonitoring, ReportSender, PolicyWriter, ReverseProxy, Underwriting…", en: "Services: SalesMonitoring, ReportSender, PolicyWriter, ReverseProxy, Underwriting…" },
          ],
        },
        {
          title: { ru: "Сопровождение и развитие", en: "Support and evolution" },
          text: {
            ru: "Платформа в постоянной промышленной эксплуатации: развитие продуктовой линейки и API, стабилизация интеграций с контуром РГС, релизы и поддержка партнёрского канала под управлением проектного офиса Virtu.",
            en: "Live production platform: evolving product line and API, stabilizing integrations with Rosgosstrakh contours, releases and partner-channel support under Virtu PMO.",
          },
        },
      ]}
    />
  );
}
