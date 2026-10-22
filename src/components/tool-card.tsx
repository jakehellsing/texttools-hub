import Link from "next/link";
import type { Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <h3 className="font-semibold text-slate-900 group-hover:text-indigo-700">
        {tool.name}
      </h3>
      <p className="mt-1.5 text-sm text-slate-600">{tool.cardBlurb}</p>
    </Link>
  );
}
