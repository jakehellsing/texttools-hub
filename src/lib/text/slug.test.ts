import { describe, expect, it } from "vitest";
import { toSlug } from "@/lib/text/slug";

describe("toSlug", () => {
  it("lowercases and hyphenates", () => {
    expect(toSlug("Hello World")).toBe("hello-world");
  });

  it("strips punctuation", () => {
    expect(toSlug("It's a Test! (Really)")).toBe("it-s-a-test-really");
  });

  it("removes diacritics", () => {
    expect(toSlug("Café au lait über alles")).toBe(
      "cafe-au-lait-uber-alles",
    );
  });

  it("collapses consecutive separators and trims hyphens", () => {
    expect(toSlug("--weird__   title--")).toBe("weird-title");
  });

  it("keeps digits", () => {
    expect(toSlug("Top 10 Tips 2026")).toBe("top-10-tips-2026");
  });

  it("returns empty string for input with no letters or digits", () => {
    expect(toSlug("!@#$%^&*()")).toBe("");
    expect(toSlug("")).toBe("");
  });
});
