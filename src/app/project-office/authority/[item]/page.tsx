import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectOfficeAuthorityPage } from "@/components/project-office-authority-page";
import { authorityById, authorityItems } from "@/lib/project-office-content";

export function generateStaticParams() {
  return authorityItems.map((item) => ({ item: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ item: string }>;
}): Promise<Metadata> {
  const { item: id } = await params;
  const item = authorityById(id);
  if (!item) return { title: "Проектный офис" };
  return {
    title: `${item.title.ru} · Полномочия и периметр`,
    description: item.purpose.ru,
  };
}

export default async function ProjectOfficeAuthorityRoute({
  params,
}: {
  params: Promise<{ item: string }>;
}) {
  const { item: id } = await params;
  const item = authorityById(id);
  if (!item) notFound();
  return <ProjectOfficeAuthorityPage item={item} />;
}
