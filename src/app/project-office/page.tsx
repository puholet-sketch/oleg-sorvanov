import type { Metadata } from "next";
import { ProjectOfficePage } from "@/components/project-office-page";

export const metadata: Metadata = {
  title: "Руководитель проектного офиса · Олег Сорванов",
  description:
    "Руководитель проектного офиса. Прогнозируемое управление портфелем — регламенты, учёт стадий, ритм мероприятий, прогноз загрузки и удовлетворённость заказчика.",
};

export default function ProjectOfficeRoute() {
  return <ProjectOfficePage />;
}
