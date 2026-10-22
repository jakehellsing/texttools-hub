"use client";

import { useCallback, useState } from "react";
import { TransformTool } from "@/components/tools/transform-tool";
import {
  removeDuplicateLines,
  removeEmptyLines,
} from "@/lib/text/lines";

export function DedupeLinesTool() {
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [dropEmpty, setDropEmpty] = useState(false);

  const transform = useCallback(
    (text: string) => {
      const deduped = removeDuplicateLines(text, ignoreCase);
      return dropEmpty ? removeEmptyLines(deduped) : deduped;
    },
    [ignoreCase, dropEmpty],
  );

  return (
    <TransformTool
      inputId="dedupe-lines-input"
      transform={transform}
      placeholder="Paste one item per line…"
      controls={
        <>
          <label className="inline-flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={ignoreCase}
              onChange={(e) => setIgnoreCase(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
            Ignore letter case
          </label>
          <label className="inline-flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={dropEmpty}
              onChange={(e) => setDropEmpty(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
            Remove empty lines
          </label>
        </>
      }
    />
  );
}
