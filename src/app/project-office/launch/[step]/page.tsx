import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectOfficeLaunchPage } from "@/components/project-office-launch-page";
import { launchStepById, launchSteps } from "@/lib/project-office-content";

export function generateStaticParams() {
  return launchSteps.map((step) => ({ step: step.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ step: string }>;
}): Promise<Metadata> {
  const { step: id } = await params;
  const step = launchStepById(id);
  if (!step) return { title: "Проектный офис" };
  return {
    title: `${step.title.ru} · Маршрут запуска`,
    description: step.purpose.ru,
  };
}

export default async function ProjectOfficeLaunchRoute({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step: id } = await params;
  const step = launchStepById(id);
  if (!step) notFound();
  return <ProjectOfficeLaunchPage step={step} />;
}
