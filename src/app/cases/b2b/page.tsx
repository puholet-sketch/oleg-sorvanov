import type { Metadata } from "next";
import { CasePage } from "@/components/case-page";

export const metadata: Metadata = {
  title: "B2B / ОФР — ЛК партнёра · Олег Сорванов",
  description:
    "B2B-кабинет партнёра РГС: контрактное оформление коробочных продуктов, микрофронтенды и BFF.",
};

export default function B2BCasePage() {
  return (
    <CasePage
      eyebrow={{
        ru: "Кейс · B2B-платформа · ОФР / ЛКП · Росгосстрах",
        en: "Case · B2B platform · OFR / partner cabinet · Rosgosstrakh",
      }}
      title={{
        ru: "ОФР · контрактное оформление в личном кабинете партнёра",
        en: "OFR · contract issuance in the partner personal cabinet",
      }}
      lead={{
        ru: "B2B-контур продаж коробочных продуктов ПАО СК «Росгосстрах»: от анкеты и расчёта до договора в Guidewire, оплаты и выпуска полиса. Архитектура — host ЛКП + микрофронтенды продуктов + единый BFF.",
        en: "B2B packaged-product sales for Rosgosstrakh: from questionnaire and quote to Guidewire contract, payment and policy issue. Architecture — partner-cabinet host + product micro-frontends + shared BFF.",
      }}
      stats={[
        { value: "~20", label: { ru: "продуктовых МФ", en: "product MFs" } },
        { value: "ЛКП", label: { ru: "канал продаж", en: "sales channel" } },
        { value: "GW", label: { ru: "учётный контур", en: "policy core" } },
      ]}
      blocks={[
        {
          title: { ru: "Задача", en: "Challenge" },
          text: {
            ru: "Единый браузерный канал для продавцов партнёра: много коробочных продуктов, разные правила оформления, общие платежи/печать/права — без разрозненных «тонких клиентов» под каждый продукт.",
            en: "One browser channel for partner sellers across many packaged products, shared payments/print/rights — without a separate thin client per product.",
          },
        },
        {
          title: { ru: "Решение", en: "Solution" },
          text: {
            ru: "ОФР (экосистема) и контур «Контракты»: ofr-core как shell личного кабинета партнёра, продуктовые микрофронтенды (Module Federation), BFF-оркестрация поверх Guidewire, справочников и платёжных/документных сервисов.",
            en: "OFR ecosystem and Contracts contour: ofr-core as partner-cabinet shell, product micro-frontends (Module Federation), BFF orchestration over Guidewire, directories and payment/document services.",
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
            ru: "Платформа в портфеле delivery ВИРТУ: развитие и сопровождение B2B-контура для заказчика, координация продуктовых МФ, интеграций и стабилизации поставок в промышленную эксплуатацию.",
            en: "Platform in Virtu delivery portfolio: evolving and supporting the B2B contour for the client, coordinating product MFs, integrations and stabilization into production.",
          },
        },
      ]}
    />
  );
}
