"use client";

import { AnalyzerTool } from "@/components/tools/analyzer-tool";
import {
  countCharacters,
  countParagraphs,
  countSentences,
  countWords,
} from "@/lib/text/stats";

export function WordCounterTool() {
  return (
    <AnalyzerTool
      inputId="word-counter-input"
      computeStats={(text) => [
        { label: "Words", value: countWords(text).toLocaleString() },
        {
          label: "Characters",
          value: countCharacters(text).toLocaleString(),
        },
        {
          label: "Sentences",
          value: countSentences(text).toLocaleString(),
        },
        {
          label: "Paragraphs",
          value: countParagraphs(text).toLocaleString(),
        },
      ]}
    />
  );
}
