import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPage } from "@/components/tool-page";
import { toolComponents } from "@/components/tools";
import { getTool, toolMetadata, tools } from "@/lib/tools";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

// Only the ten known tool slugs exist — anything else is a real 404.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/tools/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  return tool ? toolMetadata(tool) : {};
}

export default async function ToolRoute({
  params,
}: PageProps<"/tools/[slug]">) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const ToolComponent = toolComponents[tool.slug];
  if (!ToolComponent) notFound();

  return (
    <ToolPage tool={tool}>
      <ToolComponent />
    </ToolPage>
  );
}
