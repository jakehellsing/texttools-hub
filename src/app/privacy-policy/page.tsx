import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for TextTools Hub — how the site handles your text, cookies, and advertising data.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "October 22, 2026";

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-6 space-y-6 text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Your text stays on your device
          </h2>
          <p className="mt-2">
            Every tool on {site.name} processes text entirely in your
            browser using JavaScript. Text you type or paste is never sent
            to our servers, never stored in a database, and never visible to
            us. Closing or refreshing the page clears it completely.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Information we collect
          </h2>
          <p className="mt-2">
            We do not require an account and do not collect personal
            information through the tools. Like most websites, our hosting
            provider may log standard technical details (such as IP address,
            browser type, and pages visited) for security and operational
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Advertising and cookies
          </h2>
          <p className="mt-2">
            {site.name} is supported by advertising and may use Google
            AdSense or similar networks. When ads are enabled, the ad
            provider may use cookies and similar technologies to serve ads
            based on your prior visits to this or other websites. You can
            opt out of personalised advertising through your ad provider’s
            settings (for example, Google Ads Settings) or by declining
            advertising cookies where a consent banner is shown.
          </p>
          <p className="mt-2">
            Where required by law (for example, in the EEA and UK), a
            consent banner will be shown before personalised ads are
            served.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Third-party links
          </h2>
          <p className="mt-2">
            This site may link to third-party websites. We are not
            responsible for the content or privacy practices of those
            sites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            Changes to this policy
          </h2>
          <p className="mt-2">
            We may update this policy from time to time. Changes take
            effect when posted on this page with an updated date above.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-indigo-600 underline hover:text-indigo-500"
            >
              {site.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
