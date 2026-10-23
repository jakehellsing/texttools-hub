"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT, ADSENSE_ENABLED } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSlotProps {
  /** AdSense ad unit slot ID, e.g. "1234567890". */
  slot?: string;
  /** Extra classes for the outer wrapper. */
  className?: string;
  /**
   * Accessible label for the region — kept vague ("Advertisement") per
   * AdSense placement guidelines.
   */
  label?: string;
}

/**
 * AdSense-ready placement. Renders nothing until the site is approved and
 * NEXT_PUBLIC_ADSENSE_CLIENT (and a slot ID) are configured — ads never
 * appear in development or before approval.
 */
export function AdSlot({
  slot,
  className = "",
  label = "Advertisement",
}: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!ADSENSE_ENABLED || !slot || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle ?? []).push({});
      pushed.current = true;
    } catch {
      // Ad blockers or script load failures should never break the page.
    }
  }, [slot]);

  if (!ADSENSE_ENABLED || !slot) return null;

  return (
    <div
      role="complementary"
      aria-label={label}
      className={`my-8 flex min-h-24 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-slate-50 ${className}`}
    >
      <ins
        className="adsbygoogle block w-full"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
