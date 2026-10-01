import type { Metadata } from "next";
import { ProjectOfficeMistakesPage } from "@/components/project-office-mistakes-page";

export const metadata: Metadata = {
  title: "Типовые ошибки · Проектный офис",
  description:
    "Каталог типовых ошибок по контурам методологии: декомпозиция, переоценка, план/факт, артефакты, загрузка, внедрение — ошибка × роль × как правильно.",
};

export default function ProjectOfficeMistakesRoute() {
  return <ProjectOfficeMistakesPage />;
}
