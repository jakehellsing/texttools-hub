import Link from "next/link";
import { tools } from "@/lib/tools";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="text-base font-bold text-slate-900">
            Text<span className="text-indigo-600">Tools</span> Hub
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Free text utilities that run entirely in your browser. No sign-up,
            no uploads, no waiting.
          </p>
        </div>

        <nav aria-label="Tools">
          <p className="text-sm font-semibold text-slate-900">Tools</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-600">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="hover:text-indigo-600"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site">
          <p className="text-sm font-semibold text-slate-900">Site</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/about" className="hover:text-indigo-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-indigo-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-indigo-600">
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-slate-200">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-slate-500">
          © {year} {site.name}. All tools process text locally in your browser.
        </p>
      </div>
    </footer>
  );
}
