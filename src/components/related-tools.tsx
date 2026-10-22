import Link from "next/link";
import { getRelatedTools, type Tool } from "@/lib/tools";

export function RelatedTools({ tool }: { tool: Tool }) {
  const related = getRelatedTools(tool);
  if (related.length === 0) return null;

  return (
    <nav aria-label="Related tools" className="mt-12">
      <h2 className="text-lg font-semibold text-slate-900">Related tools</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {related.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/tools/${item.slug}`}
              className="block rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:border-indigo-300 hover:shadow"
            >
              <span className="font-medium text-slate-900">{item.name}</span>
              <span className="mt-1 block text-slate-600">
                {item.cardBlurb}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
