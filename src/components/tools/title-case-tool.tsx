"use client";

import { TransformTool } from "@/components/tools/transform-tool";
import { toTitleCase } from "@/lib/text/casing";

export function TitleCaseTool() {
  return (
    <TransformTool
      inputId="title-case-input"
      transform={toTitleCase}
      placeholder="Paste one headline per line…"
    />
  );
}
