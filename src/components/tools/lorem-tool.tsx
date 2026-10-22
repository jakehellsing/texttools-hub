"use client";

import { useMemo, useState } from "react";
import { Button, CopyButton, TextArea } from "@/components/tools/ui";
import { generateLorem, type LoremUnit } from "@/lib/text/lorem";

const UNIT_OPTIONS: { value: LoremUnit; label: string }[] = [
  { value: "paragraphs", label: "Paragraphs" },
  { value: "sentences", label: "Sentences" },
  { value: "words", label: "Words" },
];

const MAX_COUNT = 100;

export function LoremTool() {
  const [unit, setUnit] = useState<LoremUnit>("paragraphs");
  const [count, setCount] = useState(3);
  const [classic, setClassic] = useState(true);
  const [seed, setSeed] = useState(1);

  const output = useMemo(
    () =>
      generateLorem({
        unit,
        count: Math.min(Math.max(1, count), MAX_COUNT),
        startWithLorem: classic,
        seed,
      }),
    [unit, count, classic, seed],
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label
            htmlFor="lorem-unit"
            className="text-sm font-medium text-slate-700"
          >
            Generate
          </label>
          <select
            id="lorem-unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value as LoremUnit)}
            className="mt-1.5 block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-2 focus:outline-indigo-600"
          >
            {UNIT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="lorem-count"
            className="text-sm font-medium text-slate-700"
          >
            Count
          </label>
          <input
            id="lorem-count"
            type="number"
            min={1}
            max={MAX_COUNT}
            value={count}
            onChange={(e) => setCount(Number(e.target.value) || 1)}
            className="mt-1.5 block w-24 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <label className="inline-flex items-center gap-2 pb-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={classic}
            onChange={(e) => setClassic(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
          Start with “Lorem ipsum…”
        </label>

        <div className="pb-px">
          <Button onClick={() => setSeed((s) => s + 1)}>
            Regenerate
          </Button>
        </div>
      </div>

      <TextArea
        id="lorem-output"
        label="Generated text"
        value={output}
        readOnly
        rows={12}
        hint={`${output.length.toLocaleString()} characters`}
      />

      <div className="flex justify-end">
        <CopyButton text={output} />
      </div>
    </div>
  );
}
