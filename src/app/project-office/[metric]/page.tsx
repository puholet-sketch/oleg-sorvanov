import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectOfficeMetricPage } from "@/components/project-office-metric-page";
import { metricById, metricPages } from "@/lib/project-office-metrics";

export function generateStaticParams() {
  return metricPages.map((metric) => ({ metric: metric.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ metric: string }>;
}): Promise<Metadata> {
  const { metric: id } = await params;
  const metric = metricById(id);
  if (!metric) return { title: "Проектный офис" };
  return {
    title: `${metric.value} ${metric.label.ru} · Олег Сорванов`,
    description: metric.why.ru,
  };
}

export default async function ProjectOfficeMetricRoute({
  params,
}: {
  params: Promise<{ metric: string }>;
}) {
  const { metric: id } = await params;
  const metric = metricById(id);
  if (!metric) notFound();
  return <ProjectOfficeMetricPage metric={metric} />;
}
