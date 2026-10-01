import type { Metadata } from "next";
import { ProjectOfficeChecklistsPage } from "@/components/project-office-checklists-page";

export const metadata: Metadata = {
  title: "Чек-листы внедрения · Проектный офис",
  description:
    "Чек-листы фаз внедрения: ответственный, регулярность, отметки выполнено/не выполнено в браузере.",
};

export default function ProjectOfficeChecklistsRoute() {
  return <ProjectOfficeChecklistsPage />;
}
