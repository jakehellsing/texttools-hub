import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for TextTools Hub — the rules for using our free online text tools.",
  alternates: { canonical: "/terms-of-service" },
};

const LAST_UPDATED = "October 22, 2026";

export default function TermsOfServicePage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            1. Acceptance of terms
          </h2>
          <p className="mt-2">
            By accessing or using {site.name}, you agree to these Terms of
            Service. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            2. The service
          </h2>
          <p className="mt-2">
            {site.name} provides free, browser-based text utilities. The
            tools are provided “as is” and “as available” without warranties
            of any kind, express or implied. We may add, change, or remove
            tools at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            3. Acceptable use
          </h2>
          <p className="mt-2">
            You agree not to misuse the site — including attempting to
            disrupt or overload the service, scrape it in a way that
            degrades it for others, or use it for any unlawful purpose.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            4. Your content
          </h2>
          <p className="mt-2">
            Text you process with the tools never leaves your browser and
            remains yours. We claim no rights over it. You are responsible
            for the content you process and for checking results before
            relying on them.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            5. Accuracy of results
          </h2>
          <p className="mt-2">
            While we aim for correct results, counts, conversions, and
            generated text are provided without guarantee. Always verify
            output that matters (for example, text subject to strict length
            limits) before submitting it elsewhere.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            6. Limitation of liability
          </h2>
          <p className="mt-2">
            To the maximum extent permitted by law, {site.name} and its
            operators are not liable for any indirect, incidental, or
            consequential damages arising from your use of — or inability
            to use — the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            7. Changes to these terms
          </h2>
          <p className="mt-2">
            We may revise these terms from time to time. Continued use of
            the site after changes are posted constitutes acceptance of the
            updated terms.
          </p>
        </section>
      </div>
    </article>
  );
}
