"use client";

import { useCallback } from "react";
import { TransformTool } from "@/components/tools/transform-tool";
import { toSlug } from "@/lib/text/slug";

export function SlugTool() {
  // Each non-empty line becomes its own slug, so a list of titles can be
  // converted in one pass.
  const transform = useCallback(
    (text: string) =>
      text
        .split(/\r?\n/)
        .map((line) => (line.trim() ? toSlug(line) : ""))
        .join("\n"),
    [],
  );

  return (
    <TransformTool
      inputId="slug-input"
      transform={transform}
      placeholder="Paste a title — or one title per line…"
    />
  );
}
