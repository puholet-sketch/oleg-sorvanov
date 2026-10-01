import type { Metadata } from "next";
import { ProjectOfficePage } from "@/components/project-office-page";

export const metadata: Metadata = {
  title: "Заместитель операционного директора по производственной системе · Олег Сорванов",
  description:
    "Заместитель операционного директора по производственной системе. Прогнозируемое управление портфелем — регламенты, учёт стадий, ритм мероприятий, прогноз загрузки и удовлетворённость заказчика.",
};

export default function ProjectOfficeRoute() {
  return <ProjectOfficePage />;
}
