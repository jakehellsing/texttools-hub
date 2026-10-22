import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TextTools Hub — questions, feedback, and suggestions for new text tools.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Contact
      </h1>

      <div className="mt-6 space-y-4 text-slate-600">
        <p>
          Questions, bug reports, or ideas for a tool you’d like to see? The
          easiest way to reach us is by email:
        </p>
        <p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-lg font-medium text-indigo-600 underline hover:text-indigo-500"
          >
            {site.contactEmail}
          </a>
        </p>
        <p>
          We read every message and aim to reply within a few business days.
          Please include the name of the tool and a short example of the
          text you were working with if you’re reporting a problem.
        </p>
        <p className="text-sm text-slate-500">
          Note: because all tools process text locally in your browser, we
          never see — and cannot recover — any text you paste into them.
        </p>
      </div>
    </article>
  );
}
