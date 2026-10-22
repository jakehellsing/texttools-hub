"use client";

import { AnalyzerTool } from "@/components/tools/analyzer-tool";
import {
  countParagraphs,
  countSentences,
  countWords,
} from "@/lib/text/stats";

export function SentenceCounterTool() {
  return (
    <AnalyzerTool
      inputId="sentence-counter-input"
      computeStats={(text) => {
        const sentences = countSentences(text);
        const words = countWords(text);
        return [
          { label: "Sentences", value: sentences.toLocaleString() },
          {
            label: "Paragraphs",
            value: countParagraphs(text).toLocaleString(),
          },
          { label: "Words", value: words.toLocaleString() },
          {
            label: "Avg. length",
            value:
              sentences > 0 ? (words / sentences).toFixed(1) : "0",
            hint: "words per sentence",
          },
        ];
      }}
    />
  );
}
