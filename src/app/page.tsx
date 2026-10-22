import type { Metadata } from "next";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";
import { ToolCard } from "@/components/tool-card";
import { site } from "@/lib/site";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: `${site.name} — Free Online Text Tools`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };

  return (
    <>
      <JsonLd data={websiteSchema} />

      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Free text tools that run in your browser
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Count words, convert case, clean up whitespace, generate slugs and
          placeholder text — ten fast utilities with no sign-up and no
          uploads. Everything is processed locally on your device, so your
          text stays private.
        </p>
      </section>

      <section id="tools" aria-label="All tools" className="mt-10">
        <h2 className="sr-only">All tools</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} />

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-slate-900">
          Why TextTools Hub?
        </h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-indigo-600">•</span>
            <span>
              <strong className="font-medium text-slate-900">Private by design.</strong>{" "}
              Every tool runs with JavaScript in your browser. Your text is
              never transmitted to or stored on a server.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-indigo-600">•</span>
            <span>
              <strong className="font-medium text-slate-900">Instant results.</strong>{" "}
              Counts and conversions update as you type — no submit button,
              no loading spinner.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="text-indigo-600">•</span>
            <span>
              <strong className="font-medium text-slate-900">No account needed.</strong>{" "}
              Every tool is free to use with nothing to install and nothing
              to sign up for.
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
