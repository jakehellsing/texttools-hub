"use client";

import Link from "next/link";
import { useState } from "react";
import { tools } from "@/lib/tools";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          Text<span className="text-indigo-600">Tools</span> Hub
        </Link>

        <nav aria-label="Main navigation" className="hidden sm:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <li>
              <Link href="/#tools" className="hover:text-indigo-600">
                All tools
              </Link>
            </li>
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
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                d="M4.3 4.3a1 1 0 0 1 1.4 0L10 8.6l4.3-4.3a1 1 0 1 1 1.4 1.4L11.4 10l4.3 4.3a1 1 0 0 1-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 0 1-1.4-1.4L8.6 10 4.3 5.7a1 1 0 0 1 0-1.4Z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5.5A1.5 1.5 0 0 1 4.5 4h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 3 5.5Zm0 5A1.5 1.5 0 0 1 4.5 9h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 3 10.5Zm0 5A1.5 1.5 0 0 1 4.5 14h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 3 15.5Z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white sm:hidden"
        >
          <ul className="max-h-80 space-y-1 overflow-y-auto px-4 py-3 text-sm font-medium text-slate-700">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="block rounded-md px-2 py-2 hover:bg-slate-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {tool.name}
                </Link>
              </li>
            ))}
            <li className="border-t border-slate-100 pt-2">
              <Link
                href="/contact"
                className="block rounded-md px-2 py-2 hover:bg-slate-100"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
