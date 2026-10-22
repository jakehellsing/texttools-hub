/**
 * Converts text to a URL-safe slug:
 * - lowercases and removes diacritics (é → e, ü → u)
 * - replaces any run of non-alphanumeric characters with a single hyphen
 * - trims leading/trailing hyphens
 *
 * Returns an empty string when the input contains no letters or digits.
 */
export function toSlug(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip combining diacritical marks
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
