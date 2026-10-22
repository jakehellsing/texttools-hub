"use client";

import { useState } from "react";
import {
  Button,
  StatGrid,
  TextArea,
  type StatItem,
} from "@/components/tools/ui";

/**
 * Shared UI for "paste text → see statistics" tools. The stats are
 * recomputed on every keystroke and never leave the browser.
 */
export function AnalyzerTool({
  inputId,
  inputLabel = "Your text",
  placeholder = "Type or paste your text here…",
  computeStats,
}: {
  inputId: string;
  inputLabel?: string;
  placeholder?: string;
  computeStats: (text: string) => StatItem[];
}) {
  const [text, setText] = useState("");

  return (
    <div className="space-y-4">
      <TextArea
        id={inputId}
        label={inputLabel}
        value={text}
        onChange={setText}
        placeholder={placeholder}
        hint={`${text.length.toLocaleString()} characters`}
      />
      <StatGrid stats={computeStats(text)} />
      <div className="flex justify-end">
        <Button onClick={() => setText("")} disabled={!text}>
          Clear
        </Button>
      </div>
    </div>
  );
}
