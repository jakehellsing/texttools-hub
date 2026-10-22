/** Average silent-reading speed used for the reading-time estimate. */
export const WORDS_PER_MINUTE = 200;

/** Average speaking pace used for the speaking-time estimate. */
export const SPEAKING_WORDS_PER_MINUTE = 130;

/**
 * Counts words in a string. A word is a run of non-whitespace characters.
 * Returns 0 for empty or whitespace-only input.
 */
export function countWords(text: string): number {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

/**
 * Counts characters. When `includeSpaces` is false, all whitespace
 * (spaces, tabs, newlines) is excluded.
 */
export function countCharacters(text: string, includeSpaces = true): number {
  if (includeSpaces) return text.length;
  return text.replace(/\s/g, "").length;
}

/**
 * Counts sentences. A sentence ends with ., !, or ? optionally followed by
 * a closing quote or parenthesis. The last sentence does not need terminal
 * punctuation. Returns 0 for input with no word characters.
 */
export function countSentences(text: string): number {
  const trimmed = text.trim();
  if (!/\w/.test(trimmed)) return 0;

  // Split after terminal punctuation (with optional closing quotes/brackets)
  // followed by whitespace or end of input.
  const parts = trimmed.split(/(?<=[.!?]+["'”’)\]]*)\s+/);
  return parts.filter((part) => /\w/.test(part)).length;
}

/**
 * Counts paragraphs. Paragraphs are blocks of text separated by one or more
 * blank lines. Returns 0 for empty or whitespace-only input.
 */
export function countParagraphs(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\n\s*\n/).filter((block) => /\S/.test(block)).length;
}

/** Counts non-empty lines. */
export function countLines(text: string): number {
  if (!text) return 0;
  return text.split(/\r?\n/).filter((line) => line.trim().length > 0).length;
}

export interface TimeEstimate {
  /** Whole minutes, rounded up so short texts still show a time. */
  minutes: number;
  seconds: number;
}

/**
 * Estimates how long `text` takes to read at `wpm` words per minute.
 * Returns zero for empty input; otherwise seconds are rounded up so a
 * single word never reports 0 seconds.
 */
export function estimateTime(
  text: string,
  wpm = WORDS_PER_MINUTE,
): TimeEstimate {
  const words = countWords(text);
  if (words === 0 || wpm <= 0) return { minutes: 0, seconds: 0 };
  const totalSeconds = Math.ceil((words / wpm) * 60);
  return {
    minutes: Math.floor(totalSeconds / 60),
    seconds: totalSeconds % 60,
  };
}
