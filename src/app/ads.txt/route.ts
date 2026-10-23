import { ADSENSE_CLIENT, ADSENSE_ENABLED } from "@/lib/adsense";

/**
 * Serves /ads.txt — the IAB ads.txt file AdSense requires at the domain
 * root. Generated from NEXT_PUBLIC_ADSENSE_CLIENT so the publisher ID
 * stays in env config rather than source. Returns 404 until ads are
 * configured (correct: no authorized sellers to declare).
 */
export function GET() {
  if (!ADSENSE_ENABLED) {
    return new Response(null, { status: 404 });
  }

  // ca-pub-XXXXXXXXXXXXXXXX -> pub-XXXXXXXXXXXXXXXX
  const publisherId = ADSENSE_CLIENT.replace(/^ca-/, "");
  return new Response(
    `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
