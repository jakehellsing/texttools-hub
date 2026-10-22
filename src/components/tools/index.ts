import type { ComponentType } from "react";
import { WordCounterTool } from "@/components/tools/word-counter-tool";
import { CharacterCounterTool } from "@/components/tools/character-counter-tool";
import { SentenceCounterTool } from "@/components/tools/sentence-counter-tool";
import { ReadingTimeTool } from "@/components/tools/reading-time-tool";
import { CaseConverterTool } from "@/components/tools/case-converter-tool";
import { TitleCaseTool } from "@/components/tools/title-case-tool";
import { DedupeLinesTool } from "@/components/tools/dedupe-lines-tool";
import { SpacesTool } from "@/components/tools/spaces-tool";
import { SlugTool } from "@/components/tools/slug-tool";
import { LoremTool } from "@/components/tools/lorem-tool";

export const toolComponents: Record<string, ComponentType> = {
  "word-counter": WordCounterTool,
  "character-counter": CharacterCounterTool,
  "sentence-counter": SentenceCounterTool,
  "reading-time-calculator": ReadingTimeTool,
  "case-converter": CaseConverterTool,
  "title-case-converter": TitleCaseTool,
  "remove-duplicate-lines": DedupeLinesTool,
  "remove-extra-spaces": SpacesTool,
  "text-to-slug": SlugTool,
  "lorem-ipsum-generator": LoremTool,
};
