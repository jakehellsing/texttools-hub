import { describe, expect, it } from "vitest";
import { removeDuplicateLines, removeEmptyLines } from "@/lib/text/lines";

describe("removeDuplicateLines", () => {
  it("removes later duplicates and keeps first occurrences in order", () => {
    expect(removeDuplicateLines("b\na\nb\nc\na")).toBe("b\na\nc");
  });

  it("returns the input unchanged when there are no duplicates", () => {
    expect(removeDuplicateLines("a\nb\nc")).toBe("a\nb\nc");
  });

  it("is case-sensitive by default", () => {
    expect(removeDuplicateLines("Apple\napple")).toBe("Apple\napple");
  });

  it("treats case variants as duplicates when ignoreCase is true", () => {
    expect(removeDuplicateLines("Apple\napple\nAPPLE", true)).toBe("Apple");
  });

  it("handles empty input and keeps blank-line structure", () => {
    expect(removeDuplicateLines("")).toBe("");
    expect(removeDuplicateLines("a\n\n\nb")).toBe("a\n\nb");
  });
});

describe("removeEmptyLines", () => {
  it("removes blank and whitespace-only lines", () => {
    expect(removeEmptyLines("a\n\n   \nb")).toBe("a\nb");
  });
});
