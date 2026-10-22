"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Button, CopyButton, TextArea } from "@/components/tools/ui";

/**
 * Shared UI for "input text → transformed output" tools. The transform is
 * applied live (on every change, including option toggles) and everything
 * runs locally in the browser.
 */
export function TransformTool({
  inputId,
  inputLabel = "Your text",
  outputLabel = "Result",
  placeholder = "Type or paste your text here…",
  transform,
  controls,
}: {
  inputId: string;
  inputLabel?: string;
  outputLabel?: string;
  placeholder?: string;
  transform: (text: string) => string;
  controls?: ReactNode;
}) {
  const [text, setText] = useState("");
  const output = useMemo(() => transform(text), [transform, text]);

  return (
    <div className="space-y-4">
      {controls ? <div className="flex flex-wrap gap-2">{controls}</div> : null}
      <TextArea
        id={inputId}
        label={inputLabel}
        value={text}
        onChange={setText}
        placeholder={placeholder}
        hint={`${text.length.toLocaleString()} characters`}
      />
      <TextArea
        id={`${inputId}-output`}
        label={outputLabel}
        value={output}
        readOnly
        hint={`${output.length.toLocaleString()} characters`}
      />
      <div className="flex justify-end gap-2">
        <Button onClick={() => setText("")} disabled={!text}>
          Clear
        </Button>
        <CopyButton text={output} />
      </div>
    </div>
  );
}
