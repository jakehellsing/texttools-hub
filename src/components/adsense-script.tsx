"use client";

import Script from "next/script";
import { ADSENSE_CLIENT, ADSENSE_ENABLED } from "@/lib/adsense";

/**
 * Loads the AdSense loader script once, site-wide, but only when a real
 * publisher client ID is configured. Without NEXT_PUBLIC_ADSENSE_CLIENT
 * no ad code is ever emitted.
 */
export function AdSenseScript() {
  if (!ADSENSE_ENABLED) return null;

  return (
    <Script
      id="adsense-loader"
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}
