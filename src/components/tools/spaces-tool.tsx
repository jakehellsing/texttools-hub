"use client";

import { useCallback, useState } from "react";
import { TransformTool } from "@/components/tools/transform-tool";
import { removeExtraSpaces } from "@/lib/text/spaces";

export function SpacesTool() {
  const [joinLines, setJoinLines] = useState(false);

  const transform = useCallback(
    (text: string) => {
      const cleaned = removeExtraSpaces(text);
      // Optional extra: collapse remaining newlines into single spaces.
      return joinLines ? cleaned.replace(/\n+/g, " ") : cleaned;
    },
    [joinLines],
  );

  return (
    <TransformTool
      inputId="spaces-input"
      transform={transform}
      controls={
        <label className="inline-flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={joinLines}
            onChange={(e) => setJoinLines(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
          Also join all lines into one
        </label>
      }
    />
  );
}
