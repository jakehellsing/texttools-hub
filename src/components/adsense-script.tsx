import { ADSENSE_CLIENT, ADSENSE_ENABLED } from "@/lib/adsense";

/**
 * Emits the AdSense loader as a plain async <script>. React hoists async
 * scripts into the document <head> during server rendering, so the tag is
 * present in the served HTML — required for AdSense site verification.
 * Nothing is emitted until NEXT_PUBLIC_ADSENSE_CLIENT holds a ca-pub-* ID.
 */
export function AdSenseScript() {
  if (!ADSENSE_ENABLED) return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}
