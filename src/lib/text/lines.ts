/**
 * Removes duplicate lines, keeping the first occurrence of each line.
 * When `ignoreCase` is true, comparison is case-insensitive but the
 * original casing of the first occurrence is preserved.
 */
export function removeDuplicateLines(text: string, ignoreCase = false): string {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const line of text.split(/\r?\n/)) {
    const key = ignoreCase ? line.toLowerCase() : line;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(line);
    }
  }

  return result.join("\n");
}

/**
 * Removes lines that are empty or contain only whitespace.
 */
export function removeEmptyLines(text: string): string {
  return text
    .split(/\r?\n/)
    .filter((line) => line.trim().length > 0)
    .join("\n");
}
