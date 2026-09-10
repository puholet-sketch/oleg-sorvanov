import type { Metadata } from "next";
import { CasePage } from "@/components/case-page";

export const metadata: Metadata = {
  title: "ЛК Агента / ОФР · Олег Сорванов",
  description:
    "Личный кабинет агента РГС (ОФР / ЛКП): оформление коробочных продуктов — микрофронтенды, BFF, Guidewire PC.",
};

export default function B2BCasePage() {
  return (
    <CasePage
      eyebrow={{
        ru: "Кейс · ОФР / ЛК Агента · Росгосстрах",
        en: "Case · OFR / Agent cabinet · Rosgosstrakh",
      }}
      title={{
        ru: "ЛК Агента · контрактное оформление коробочных продуктов",
        en: "Agent cabinet · packaged-product contract issuance",
      }}
      lead={{
        ru: "ОФР / ЛКП — кабинет продавца-партнёра ПАО СК «Росгосстрах» для оформления коробочных продуктов: от анкеты и расчёта до договора в Guidewire, оплаты и печати полиса. Host ЛКП + продуктовые микрофронтенды + BFF.",
        en: "OFR / partner cabinet — Rosgosstrakh seller channel for packaged products: questionnaire and quote through Guidewire contract, payment and policy print. Cabinet host + product micro-frontends + BFF.",
      }}
      stats={[
        { value: "~20", label: { ru: "продуктовых МФ", en: "product MFs" } },
        { value: "ЛКП", label: { ru: "канал продаж", en: "sales channel" } },
        { value: "GW", label: { ru: "PolicyCenter", en: "PolicyCenter" } },
      ]}
      blocks={[
        {
          title: { ru: "Задача", en: "Challenge" },
          text: {
            ru: "Один браузерный канал для продавцов партнёра (агент, МАГ и др.): много коробочных продуктов, разные правила оформления, общие платежи, печать и права — без отдельного «тонкого клиента» под каждый продукт.",
            en: "One browser channel for partner sellers (agent, MAG, and others): many packaged products, shared payments, print and rights — without a separate thin client per product.",
          },
        },
        {
          title: { ru: "Решение", en: "Solution" },
          text: {
            ru: "ОФР и контур «Контракты»: ofr-core как shell личного кабинета агента (ЛКП), продуктовые микрофронтенды (Module Federation), BFF поверх Guidewire PC, SCC, CDI, платёжных и документных сервисов.",
            en: "OFR and Contracts contour: ofr-core as agent-cabinet (ЛКП) shell, product micro-frontends (Module Federation), BFF over Guidewire PC, SCC, CDI, payment and document services.",
          },
        },
        {
          title: { ru: "Сценарий оформления", en: "Issuance flow" },
          items: [
            { ru: "Анкета / wizard по продукту (микрофронтенд)", en: "Product questionnaire / wizard (micro-frontend)" },
            { ru: "Сохранение formData (declaration / submission) в Guidewire", en: "Persist formData (declaration / submission) in Guidewire" },
            { ru: "Расчёт премии и проверка условий (конфиг + SCC)", en: "Premium calc and rule checks (config + SCC)" },
            { ru: "Поиск клиента и подсказки (CDI, MS Clients)", en: "Client search and hints (CDI, MS Clients)" },
            { ru: "Оплата: счета, ссылки, СБП; создание и выпуск полиса", en: "Payment: invoices, links, SBP; create and issue policy" },
            { ru: "Печать / выдача документов (FileStore, PDF)", en: "Print / document delivery (FileStore, PDF)" },
          ],
        },
        {
          title: { ru: "Каталог продуктов", en: "Product catalog" },
          items: [
            { ru: "Авто: помощь на дороге, КАСКО.Профессионал, защита от бесполисных", en: "Auto: roadside, KASKO Pro, uninsured-driver cover" },
            { ru: "ИФЛ: квартира/дом (фундамент и в деталях), расторжение, отмена", en: "Property: flat/house packs, termination, cancel" },
            { ru: "Жизнь / здоровье: доктор онлайн, НС, иммунитет, клещ, терапия…", en: "Life / health: doctor online, PA, immunity, tick, therapy…" },
            { ru: "Прочее: ипотека онлайн, travel «Поехали 2.0»", en: "Other: online mortgage, travel pack" },
            { ru: "Сервисные МФ: оплата и рассрочка", en: "Service MFs: payment and installment" },
          ],
        },
        {
          title: { ru: "Возможности платформы", en: "Platform capabilities" },
          items: [
            { ru: "Пролонгация, расторжение, отмена, техкоррекция", en: "Renewal, termination, cancel, tech correction" },
            { ru: "Задачи согласования / андеррайтинга (GW / MS Tasks)", en: "Approval / underwriting tasks (GW / MS Tasks)" },
            { ru: "Роли и fine-grained права (Rights BFF, feature flags)", en: "Roles and fine-grained rights (Rights BFF, feature flags)" },
            { ru: "Общие UI-libs, Zod/RHF, единый UX продавца", en: "Shared UI libs, Zod/RHF, consistent seller UX" },
            { ru: "Observability: Splunk, Prometheus, business logs", en: "Observability: Splunk, Prometheus, business logs" },
          ],
        },
        {
          title: { ru: "Роли продавцов", en: "Seller roles" },
          text: {
            ru: "Агент, МАГ, МОП, МВС, НСО, тер. директор, ЗДРС, директор филиала, ЗДир РПП — роль из Core/Rights BFF, доп. маппинг из Pulse/ZUP.",
            en: "Agent, MAG, MOP, MVS, NSO, regional director, branch director and partner-sales deputies — roles from Core/Rights BFF, with Pulse/ZUP mapping.",
          },
        },
        {
          title: { ru: "Архитектура", en: "Architecture" },
          text: {
            ru: "Продавец → ofr-core (host ЛКП) → продуктовый МФ → BFF → Guidewire PC / SCC / CDI / КИАС / FileStore / платежи. Стек: React 18 + TypeScript + Redux Toolkit + Module Federation; Express/TS BFF; PostgreSQL + Redis.",
            en: "Seller → ofr-core (cabinet host) → product MF → BFF → Guidewire PC / SCC / CDI / KIAS / FileStore / payments. Stack: React 18 + TypeScript + Redux Toolkit + Module Federation; Express/TS BFF; PostgreSQL + Redis.",
          },
        },
        {
          title: { ru: "Интеграции", en: "Integrations" },
          items: [
            { ru: "Guidewire PolicyCenter — declarations, submissions, contracts, invoices", en: "Guidewire PolicyCenter — declarations, submissions, contracts, invoices" },
            { ru: "SCC — продуктовые и технические справочники", en: "SCC — product and technical directories" },
            { ru: "CDI / hints, MS Clients — клиент и адреса", en: "CDI / hints, MS Clients — customer and addresses" },
            { ru: "КИАС / BSO, FileStore, MS Communications", en: "KIAS / BSO, FileStore, MS Communications" },
            { ru: "Vehicle Aggregator, Resolute, Pulse/ZUP, Contract Log", en: "Vehicle Aggregator, Resolute, Pulse/ZUP, Contract Log" },
          ],
        },
        {
          title: { ru: "Роль проектного офиса", en: "PMO role" },
          text: {
            ru: "В портфеле delivery ВИРТУ: развитие и сопровождение контура ЛК Агента для заказчика, координация продуктовых МФ, интеграций и стабилизации поставок в промышленную эксплуатацию.",
            en: "In Virtu delivery portfolio: evolving and supporting the Agent cabinet contour for the client, coordinating product MFs, integrations and production stabilization.",
          },
        },
      ]}
    />
  );
}
