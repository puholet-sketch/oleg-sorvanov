import type { Metadata } from "next";
import { ProjectOfficePage } from "@/components/project-office-page";

export const metadata: Metadata = {
  title: "Директор по производственной системе · Олег Сорванов",
  description:
    "Директор по производственной системе. Владелец внедрения методологии поставки и PMO-контура на согласованном периметре.",
};

export default function ProjectOfficeRoute() {
  return <ProjectOfficePage />;
}
