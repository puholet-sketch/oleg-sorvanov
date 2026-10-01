import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectOfficeLayerPage } from "@/components/project-office-layer-page";
import { layerById, layerPages } from "@/lib/project-office-content";

export function generateStaticParams() {
  return layerPages.map((layer) => ({ layer: layer.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ layer: string }>;
}): Promise<Metadata> {
  const { layer: id } = await params;
  const layer = layerById(id);
  if (!layer) return { title: "Проектный офис" };
  return {
    title: `${layer.title.ru} · Проектный офис`,
    description: layer.purpose.ru,
  };
}

export default async function ProjectOfficeLayerRoute({
  params,
}: {
  params: Promise<{ layer: string }>;
}) {
  const { layer: id } = await params;
  const layer = layerById(id);
  if (!layer) notFound();
  return <ProjectOfficeLayerPage layer={layer} />;
}
