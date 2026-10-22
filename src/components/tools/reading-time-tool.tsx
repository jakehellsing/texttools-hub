"use client";

import { AnalyzerTool } from "@/components/tools/analyzer-tool";
import {
  estimateTime,
  SPEAKING_WORDS_PER_MINUTE,
  countWords,
  WORDS_PER_MINUTE,
} from "@/lib/text/stats";

function format(minutes: number, seconds: number): string {
  if (minutes === 0 && seconds === 0) return "0 sec";
  if (minutes === 0) return `${seconds} sec`;
  if (seconds === 0) return `${minutes} min`;
  return `${minutes} min ${seconds} sec`;
}

export function ReadingTimeTool() {
  return (
    <AnalyzerTool
      inputId="reading-time-input"
      computeStats={(text) => {
        const reading = estimateTime(text, WORDS_PER_MINUTE);
        const speaking = estimateTime(text, SPEAKING_WORDS_PER_MINUTE);
        return [
          {
            label: "Reading time",
            value: format(reading.minutes, reading.seconds),
            hint: `at ${WORDS_PER_MINUTE} wpm`,
          },
          {
            label: "Speaking time",
            value: format(speaking.minutes, speaking.seconds),
            hint: `at ${SPEAKING_WORDS_PER_MINUTE} wpm`,
          },
          { label: "Words", value: countWords(text).toLocaleString() },
        ];
      }}
    />
  );
}
