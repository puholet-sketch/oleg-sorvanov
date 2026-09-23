import type { Metadata } from "next";
import { ProjectOfficePage } from "@/components/project-office-page";

export const metadata: Metadata = {
  title: "Руководитель проектного офиса · Олег Сорванов",
  description:
    "Delivery / PMO: руководитель проектного офиса. Прогнозируемое управление поставкой и портфелем — регламенты, учёт, ритм мероприятий, загрузка команд и удовлетворённость заказчика.",
};

export default function ProjectOfficeRoute() {
  return <ProjectOfficePage />;
}
