import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About TextTools Hub — free, privacy-friendly text utilities that run entirely in your browser.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        About TextTools Hub
      </h1>

      <div className="mt-6 space-y-4 text-slate-600">
        <p>
          TextTools Hub is a collection of free utilities for everyday text
          tasks: counting words and characters, converting letter case,
          deduplicating lines, cleaning up whitespace, generating URL slugs,
          and producing lorem ipsum placeholder text.
        </p>
        <p>
          The site was built on a simple idea: these jobs don’t need a
          server. Every tool runs entirely in your browser with JavaScript,
          which means results are instant, the tools work on any device, and
          your text never leaves your device. There is nothing to install
          and no account to create.
        </p>
        <p>
          TextTools Hub is supported by advertising. Ads are only shown
          after the site has been approved by the ad network, and they are
          placed so they never cover or interfere with the tools themselves.
        </p>
        <p>
          Have a suggestion for a tool we should add?{" "}
          <Link
            href="/contact"
            className="text-indigo-600 underline hover:text-indigo-500"
          >
            Get in touch
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
