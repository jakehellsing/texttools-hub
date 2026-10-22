"use client";

import { useCallback, useState } from "react";
import { TransformTool } from "@/components/tools/transform-tool";
import { Button } from "@/components/tools/ui";
import {
  toLowerCase,
  toSentenceCase,
  toStartCase,
  toUpperCase,
} from "@/lib/text/casing";

type Mode = "upper" | "lower" | "capitalized" | "sentence";

const MODES: { id: Mode; label: string; run: (t: string) => string }[] = [
  { id: "upper", label: "UPPERCASE", run: toUpperCase },
  { id: "lower", label: "lowercase", run: toLowerCase },
  { id: "capitalized", label: "Capitalized", run: toStartCase },
  { id: "sentence", label: "Sentence case", run: toSentenceCase },
];

export function CaseConverterTool() {
  const [mode, setMode] = useState<Mode>("upper");
  const transform = useCallback(
    (text: string) => MODES.find((m) => m.id === mode)!.run(text),
    [mode],
  );

  return (
    <TransformTool
      inputId="case-converter-input"
      transform={transform}
      controls={
        <div
          role="group"
          aria-label="Case conversion mode"
          className="flex flex-wrap gap-2"
        >
          {MODES.map((m) => (
            <Button
              key={m.id}
              variant={mode === m.id ? "primary" : "secondary"}
              aria-pressed={mode === m.id}
              onClick={() => setMode(m.id)}
            >
              {m.label}
            </Button>
          ))}
        </div>
      }
    />
  );
}
