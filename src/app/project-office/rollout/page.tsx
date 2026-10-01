import type { Metadata } from "next";
import { ProjectOfficeRolloutPage } from "@/components/project-office-rollout-page";

export const metadata: Metadata = {
  title: "План внедрения · Проектный офис",
  description:
    "Временная развёртка маршрута запуска методологии: встраивание → аудит → база → цели → точечные изменения (~90 дней).",
};

export default function ProjectOfficeRolloutRoute() {
  return <ProjectOfficeRolloutPage />;
}
