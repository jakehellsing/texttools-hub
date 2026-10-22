/**
 * Cleans up whitespace in text:
 * - collapses runs of spaces/tabs into a single space
 * - trims leading and trailing whitespace on every line
 * - collapses runs of 3+ newlines into a single blank line
 * - trims the whole result
 */
export function removeExtraSpaces(text: string): string {
  return text
    .replace(/[\t ]+/g, " ") // collapse horizontal whitespace
    .replace(/ *\n */g, "\n") // trim around line breaks
    .replace(/\n{3,}/g, "\n\n") // collapse 3+ newlines to a blank line
    .trim();
}

/**
 * Removes ALL whitespace characters, including newlines.
 */
export function removeAllWhitespace(text: string): string {
  return text.replace(/\s+/g, "");
}
