"use client";

import { AnalyzerTool } from "@/components/tools/analyzer-tool";
import {
  countCharacters,
  countLines,
  countWords,
} from "@/lib/text/stats";

export function CharacterCounterTool() {
  return (
    <AnalyzerTool
      inputId="character-counter-input"
      computeStats={(text) => [
        {
          label: "Characters",
          value: countCharacters(text).toLocaleString(),
          hint: "including spaces",
        },
        {
          label: "No spaces",
          value: countCharacters(text, false).toLocaleString(),
          hint: "excluding all whitespace",
        },
        { label: "Words", value: countWords(text).toLocaleString() },
        { label: "Lines", value: countLines(text).toLocaleString() },
      ]}
    />
  );
}
