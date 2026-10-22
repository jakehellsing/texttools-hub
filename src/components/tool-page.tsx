import type { ReactNode } from "react";
import { AdSlot } from "@/components/ad-slot";
import { JsonLd } from "@/components/json-ld";
import { RelatedTools } from "@/components/related-tools";
import { site } from "@/lib/site";
import { toolUrl, type Tool } from "@/lib/tools";

/**
 * Shared page body for every tool: H1 + unique intro, the interactive
 * component, a privacy note, FAQs (with structured data), related-tool
 * links, and ad placements that sit outside the tool controls.
 */
export function ToolPage({
  tool,
  children,
}: {
  tool: Tool;
  children: ReactNode;
}) {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    url: toolUrl(tool),
    description: tool.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqSchema =
    tool.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tool.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={webAppSchema} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {tool.name}
      </h1>
      <p className="mt-3 max-w-3xl text-slate-600">{tool.intro}</p>

      <section
        aria-label={`${tool.name} tool`}
        className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
      >
        <noscript>
          <p className="mb-4 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800">
            This tool needs JavaScript to run. Please enable JavaScript in
            your browser — all processing happens locally on your device.
          </p>
        </noscript>
        {children}
      </section>

      <p className="mt-3 text-xs text-slate-500">
        Your text is processed entirely in your browser and is never sent to
        or stored on a server.
      </p>

      <AdSlot
        slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT}
        className="mt-8"
      />

      {tool.faqs.length > 0 ? (
        <section aria-labelledby="faq-heading" className="mt-10">
          <h2
            id="faq-heading"
            className="text-lg font-semibold text-slate-900"
          >
            Frequently asked questions
          </h2>
          <dl className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {tool.faqs.map((faq) => (
              <div key={faq.question} className="px-5 py-4">
                <dt className="text-sm font-medium text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-1.5 text-sm text-slate-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <RelatedTools tool={tool} />
    </>
  );
}
