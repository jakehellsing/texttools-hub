/**
 * Words that stay lowercase in title case (AP/Chicago-style conventions)
 * unless they are the first or last word of the title.
 */
const MINOR_WORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "as",
  "at",
  "but",
  "by",
  "for",
  "from",
  "if",
  "in",
  "into",
  "nor",
  "of",
  "off",
  "on",
  "onto",
  "or",
  "over",
  "per",
  "so",
  "to",
  "up",
  "via",
  "with",
  "yet",
]);

export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

/**
 * Capitalises the first letter of every word and lowercases the rest.
 * Word boundaries follow whitespace and common punctuation.
 */
export function toStartCase(text: string): string {
  return text.replace(
    /[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
}

/**
 * Converts text to headline-style title case: major words are capitalised,
 * minor words (articles, short conjunctions and prepositions) stay
 * lowercase unless they appear first or last.
 */
export function toTitleCase(text: string): string {
  return text
    .split("\n")
    .map((line) => {
      const words = line.split(/(\s+)/); // keep whitespace separators
      const wordIndexes = words
        .map((part, i) => (/\S/.test(part) ? i : -1))
        .filter((i) => i >= 0);
      const first = wordIndexes[0];
      const last = wordIndexes[wordIndexes.length - 1];

      return words
        .map((part, i) => {
          if (!/\S/.test(part)) return part;
          const lower = part.toLowerCase();
          if (i !== first && i !== last && MINOR_WORDS.has(lower)) {
            return lower;
          }
          return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        })
        .join("");
    })
    .join("\n");
}

/** Converts text to sentence case: first letter of each sentence is capitalised. */
export function toSentenceCase(text: string): string {
  const lower = text.toLowerCase();
  return lower.replace(
    /(^\s*[\p{L}])|([.!?]\s+[\p{L}])/gu,
    (match) => match.toUpperCase(),
  );
}
