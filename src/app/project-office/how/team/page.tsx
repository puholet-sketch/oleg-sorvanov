import type { Metadata } from "next";
import { ProjectOfficeTeamPage } from "@/components/project-office-team-page";

export const metadata: Metadata = {
  title: "Структура команд · Проектный офис",
  description:
    "Кто такой руководитель потока и как устроена цепочка: команда поставки → PM → руководитель потока → ресурсные руководители → PMO.",
};

export default function ProjectOfficeTeamRoute() {
  return <ProjectOfficeTeamPage />;
}
